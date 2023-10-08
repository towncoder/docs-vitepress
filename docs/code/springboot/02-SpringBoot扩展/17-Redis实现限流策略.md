## 限流算法

**计数器**

计数器比较简单粗暴，比如我们要限制1s能够通过的请求数，实现的思路就是从第一个请求进来开始计时，在接下来的1s内，每个请求进来请求数就+1，超过最大请求数的请求会被拒绝，等到1s结束后计数清零，重新开始计数。

这种方式有个很大的弊端：比如前10ms已经通过了最大的请求数，那么后面的990ms的请求只能拒绝，这种现象叫做“突刺现象”。

**滑动窗口**



**漏桶算法**

就是桶底出水的速度恒定，进水的速度可能快慢不一，但是当进水量大于出水量的时候，水会被装在桶里，不会直接被丢弃；但是桶也是有容量限制的，当桶装满水后溢出的部分还是会被丢弃的。

**算法实现**：可以准备一个队列来保存暂时处理不了的请求，然后通过一个线程池定期从队列中获取请求来执行。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7da6978000074d91b983ee2d0adebbfb~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

**令牌桶算法**

令牌桶就是生产访问令牌的一个地方，生产的速度恒定，用户访问的时候当桶中有令牌时就可以访问，否则将触发限流。

**实现方案**：Guava RateLimiter限流

Guava RateLimiter是一个谷歌提供的限流，其基于令牌桶算法，比较适用于单实例的系统。

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13383ad3f2e04ee68c5cc3fde77f3e58~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

## Redis 实现限流

https://juejin.cn/post/6967704472109711367#heading-23

### setnx实现计数

```java
    @GetMapping("/list")
    public PageResult<Article> getArticleList(ArticleQueryDTO articleQueryDTO){
        String limitName = "count-limit-key";
//        redisTemplate.opsForValue().setIfAbsent(limitName,0,1000, TimeUnit.MILLISECONDS);
        RedisAtomicInteger redisCount = new RedisAtomicInteger(limitName,redisTemplate.getConnectionFactory());
        int count = redisCount.getAndIncrement();
        if (count==0){
            redisCount.expire(15,TimeUnit.SECONDS);
        }
        log.info("the count is [{}].",count);
       return articleService.getArticleList(articleQueryDTO);
    }
```

**Lua**

除了上述的 RedisAtomicInteger 我们还可以使用 Lua 脚本来实现原子操作。

```lua
local key = KEYS[1]
local count = tonumber(ARGV[1])
local time = tonumber(ARGV[2])
local current = redis.call('get', key)
if current and tonumber(current) > count then
    return tonumber(current)
end
current = redis.call('incr', key)
if tonumber(current) == 1 then
    redis.call('expire', key, time)
end
return tonumber(current)


-- 流程解释：
--
-- 首先获取到传进来的 key 以及 限流的 count 和时间 time。
-- 通过 get 获取到这个 key 对应的值，这个值就是当前时间窗内这个接口可以访问多少次。
-- 如果是第一次访问，此时拿到的结果为 nil，否则拿到的结果应该是一个数字，所以接下来就判断，如果拿到的结果是一个数字，并且这个数字还大于 count，那就说明已经超过流量限制了，那么直接返回查询的结果即可。
-- 如果拿到的结果为 nil，说明是第一次访问，此时就给当前 key 自增 1，然后设置一个过期时间。
-- 最后把自增 1 后的值返回就可以了。
--
-- 其实这段 Lua 脚本很好理解。
```

**加载 Lua 脚本**

```java
@Configuration
public class LimitLuaLoader {
    @Bean
    public DefaultRedisScript<Long> limitScript() {
        DefaultRedisScript<Long> redisScript = new DefaultRedisScript<>();
        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource("lua/limit.lua")));
        redisScript.setResultType(Long.class);
        return redisScript;
    }
}

```

**自定义注解**

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RateLimiter {
    /**
     * 限流key
     */
    String key() default "rate_limit:";

    /**
     * 限流时间,单位秒
     */
    int time() default 60;

    /**
     * 限流次数
     */
    int count() default 100;

    /**
     * 限流类型
     */
    LimitType limitType() default LimitType.DEFAULT;
}
```

```java
public enum LimitType {
    /**
     * 默认策略
     */
    DEFAULT,
    /**
     * 根据IP进行限流
     */
    IP
}
```

**为注解设置切面**

核心限流逻辑在此处：

```xml
		<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>
```



```java
@Aspect
@Component
@Slf4j
@RequiredArgsConstructor
public class RateLimitAspect {

    private final RedisTemplate<Object,Object> redisTemplate;

    private final RedisScript<Long> limitScript;

    @Before("@annotation(rateLimiter)")
    public void doBefore(JoinPoint point, RateLimiter rateLimiter) throws Throwable {
        String key = rateLimiter.key();
        int time = rateLimiter.time();
        int count = rateLimiter.count();

        String combineKey = getCombineKey(rateLimiter, point);
        List<Object> keys = Collections.singletonList(combineKey);
        try {
            Long number = redisTemplate.execute(limitScript, keys, count, time);
            if (number==null || number.intValue() > count) {
                throw new RuntimeException("访问过于频繁，请稍候再试");
            }
            log.info("限制请求'{}',当前请求'{}',缓存key'{}'", count, number.intValue(), key);
        } catch (RuntimeException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("服务器限流异常，请稍候再试");
        }
    }

    public String getCombineKey(RateLimiter rateLimiter, JoinPoint point) {
        StringBuilder stringBuffer = new StringBuilder(rateLimiter.key());
        if (rateLimiter.limitType() == LimitType.IP) {
            stringBuffer.append(IpUtil.getIpAddress()).append("-");
        }
        MethodSignature signature = (MethodSignature) point.getSignature();
        Method method = signature.getMethod();
        Class<?> targetClass = method.getDeclaringClass();
        stringBuffer.append(targetClass.getName()).append("-").append(method.getName());
        return stringBuffer.toString();
    }

}
```

**访问测试**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20220830112842094.png)



![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20220830113020965.png)

### zset 实现滑动窗口

https://juejin.cn/post/7109055415668867080

