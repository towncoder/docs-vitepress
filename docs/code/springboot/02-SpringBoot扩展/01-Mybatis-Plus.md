# 用Redis作为Mybatis的二级缓存

如何优雅的用Redis作为Mybatis的二级缓存？

哈喽，大家好，我是一条。

今天在开发时发现一个奇怪的问题，我手动改完数据库竟然不生效，反复确认环境无误后猜测是缓存的问题，因为是新接手的项目，代码还不熟悉，仔细一看，是开启了二级缓存，并且存入Redis。

那今天就聊聊怎么优雅的用Redis作为Mybatis的二级缓存。

## 要优雅就选择Mybatis-Plus

关于Mybatis-Plus的基础设置就不多做介绍了，只说和二级缓存有关的。

首先在配置文件开启二级缓存。

```yml
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
    cache-enabled: true   # 开启二级缓存
  mapper-locations: classpath:*/mapper/*.xml
```

## Redis配置

这部分就是Redis的基本用法：

```yml
  redis:
    host: 101.411.160.111
    database: 0
    port: 6311
    password: 1111111
```

配置RedisTemplate

```java
@Configuration
public class RedisConfig {
    /**
     * 设置系列化方式、事务等配置
     */
    @Bean
    public RedisTemplate<String, Serializable> redisTemplate(LettuceConnectionFactory lettuceConnectionFactory)
    {
        RedisTemplate<String,Serializable> redisTemplate = new RedisTemplate<>();

        redisTemplate.setConnectionFactory(lettuceConnectionFactory);
        //设置key序列化方式string
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        //设置value的序列化方式json
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());

        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());

        redisTemplate.afterPropertiesSet();

        return redisTemplate;
    }
}

```

## 自定义Mybatis缓存

我们只需要实现`Cache`这个接口。

```java
@Slf4j
public class MybatisRedisCache implements Cache {
    private static final String COMMON_CACHE_KEY = "mybatis";
    // 读写锁
    private final ReadWriteLock readWriteLock = new ReentrantReadWriteLock(true);

    private final RedisTemplate<String, Object> redisTemplate;

    private final String nameSpace;

    public MybatisRedisCache(String nameSpace) {
        if (nameSpace == null) {
            throw new IllegalArgumentException("Cache instances require an ID");
        }
        redisTemplate = SpringUtil.getBean("redisTemplate");
        this.nameSpace = nameSpace;
    }

    @Override
    public String getId() {
        return this.nameSpace;
    }

    private String getKeys() {

        return COMMON_CACHE_KEY + "::" + nameSpace + "::*";
    }

    private String getKey(Object key) {
        return COMMON_CACHE_KEY + "::" + nameSpace + "::" + DigestUtils.md5Hex(String.valueOf(key));
    }

    @Override
    public void putObject(Object key, Object value) {
        redisTemplate.opsForValue().set(getKey(key), value, 10, TimeUnit.MINUTES);
    }

    @Override
    public Object getObject(Object key) {
        try {
            return redisTemplate.opsForValue().get(getKey(key));
        } catch (Exception e) {
            e.printStackTrace();
            log.error("缓存出错 ");
        }
        return null;
    }

    @Override
    public Object removeObject(Object o) {
        Object n = redisTemplate.opsForValue().get(getKey(o));
        redisTemplate.delete(getKey(o));
        return n;
    }

    @Override
    public void clear() {
        Set<String> keys = redisTemplate.keys(getKeys());
        if (CollectionUtil.isNotEmpty(keys)) {
            assert keys != null;
            redisTemplate.delete(keys);
        }
    }

    @Override
    public int getSize() {
        Set<String> keys = redisTemplate.keys(getKeys());
        if (CollectionUtil.isNotEmpty(keys)) {
            assert keys != null;
            return keys.size();
        }
        return 0;
    }

    @Override
    public ReadWriteLock getReadWriteLock() {
        return this.readWriteLock;
    }
}
```

## 测试

1.第一次查询，走数据库，并写入缓存。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/20230619103430.png)

看看Redis的记录：

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/20230619103430.png)

2.第二次查询，直接走缓存

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/20230619103430.png)

3.重启项目，依然可以直接查缓存

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/20230619103430.png)

## 缓存命中率（Cache Hit Ratio）

不知道有没有细心的同学注意到这样一行日志：

```
Cache Hit Ratio [com.yitiao.mapper.ArticleMapper]: 0.5
```

最后这个0.5就是缓存命中率，代表一共查询两次，命中一次缓存一次。

## 一级缓存和二级缓存

**一级缓存**

一级缓存 Mybatis 的一级缓存是指 SQLSession，一级缓存的作用域是 SQlSession , Mabits 默认开启一级缓存。 在同一个SqlSession中，执行相同的SQL查询时；第一次会去查询数据库，并写在缓存中，第二次会直接从缓存中取。 当执行SQL时候两次查询中间发生了增删改的操作，则SQLSession的缓存会被清空。

每次查询会先去缓存中找，如果找不到，再去数据库查询，然后把结果写到缓存中。 Mybatis的内部缓存使用一个HashMap，key为hashcode+statementId+sql语句。Value为查询出来的结果集映射成的java对象。 SqlSession执行insert、update、delete等操作commit后会清空该SQLSession缓存。

**二级缓存**

二级缓存 二级缓存是 mapper 级别的，Mybatis默认是没有开启二级缓存的。 第一次调用mapper下的SQL去查询用户的信息，查询到的信息会存放到该 mapper 对应的二级缓存区域。 第二次调用 namespace 下的 mapper 映射文件中，相同的sql去查询用户信息，会去对应的二级缓存内取结果。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/20230619103430.png)

## 什么时候该开启二级缓存

说实话，我遇到开启二级缓存的时候并不多，因为缓存有利也有弊。

我的建议是如果发现接口耗时严重，可以在线上开启二级缓存，开发环境关掉，为什么呢？

就拿今天我遇到的事来说，开发直接改库不能立即生效，就很烦。



# 字段注解

## 逻辑删除

```java
		/**
     * 是否有效：1-有效；0-无效
     */
    @TableLogic(value = "1", delval = "0")
    private Integer isValid;
```

- 将删除改为修改
- 每次查询时自动添加`where is_valid = 1`
- 修改时自动过滤到无效的数据

**全局配置**

```yaml
mybatis-plus:
  global-config:
    db-config:
      logic-delete-field: flag  # 全局逻辑删除的实体字段名(since 3.3.0,配置后可以忽略不配置步骤2)
      logic-delete-value: 1 # 逻辑已删除值(默认为 1)
      logic-not-delete-value: 0 # 逻辑未删除值(默认为 0)

```

## id自动填充

```java
    /**
     * 主键-使用雪花算法
     */
    @TableId(type = IdType.ASSIGN_ID)
    private Long id;
```

**IdType**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20230403112356338.png)



## 属性自动填充

**注解指定哪些值需要自动填充，及触发自动填充的操作**

```java
    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createDate;
    
        /**
     * 更新人名称
     */
    @TableField(fill = FieldFill.INSERT_UPDATE, jdbcType = JdbcType.VARCHAR)
    private String updateName;
```

**配置自动赋值**

```java
public class MybatisPlusMetaObjectHandler implements MetaObjectHandler {
    private static final Logger log = LoggerFactory.getLogger(MybatisPlusMetaObjectHandler.class);

    public MybatisPlusMetaObjectHandler() {
    }

    private static void fillValIfNullByName(String fieldName, Object fieldVal, MetaObject metaObject, boolean isCover) {
        if (metaObject.hasSetter(fieldName)) {
            Object userSetValue = metaObject.getValue(fieldName);
            String setValueStr = StrUtil.str(userSetValue, Charset.defaultCharset());
            if (!StrUtil.isNotBlank(setValueStr) || isCover) {
                Class<?> getterType = metaObject.getGetterType(fieldName);
                if (ClassUtils.isAssignableValue(getterType, fieldVal)) {
                    metaObject.setValue(fieldName, fieldVal);
                }

            }
        }
    }

    public void insertFill(MetaObject metaObject) {
        log.debug("mybatis plus start insert fill ....");
        LocalDateTime now = LocalDateTime.now();
        fillValIfNullByName("createDate", now, metaObject, false);
        fillValIfNullByName("updateDate", now, metaObject, false);
        fillValIfNullByName("createBy", this.getUserId(), metaObject, false);
        fillValIfNullByName("updateBy", this.getUserId(), metaObject, false);
        fillValIfNullByName("updateName", this.getUserName(), metaObject, false);
        fillValIfNullByName("createName", this.getUserName(), metaObject, false);
    }

    public void updateFill(MetaObject metaObject) {
        log.debug("mybatis plus start update fill ....");
        fillValIfNullByName("updateDate", LocalDateTime.now(), metaObject, true);
        fillValIfNullByName("updateBy", this.getUserId(), metaObject, true);
        fillValIfNullByName("updateName", this.getUserName(), metaObject, false);
        fillValIfNullByName("updateName", this.getUserName(), metaObject, false);
    }

    private String getUserName() {
        return Objects.isNull(UserContext.getUser()) ? "" : UserContext.getUser().getName();
    }

    private Long getUserId() {
        return Objects.isNull(UserContext.getUser()) ? -1L : UserContext.getUser().getId();
    }
}
```

## 枚举处理

```java
@TableField(typeHandler = EnumValuesTypeHandler.class)
private List<String> applicableVersion;
```



## 乐观锁

`@Version` 描述：乐观锁注解、标记 @Verison 在字段上。在更新的时候，它会带上该条件

```sql
线程1: update ... from xxx set version = version + 1 where version=x
线程2: update ... from xxx set version = version + 1 where version=x
```

# 拦截器(插件)

拦截sql对其动态的修改数据适用于分表场景。



# 自定义批量插入接口

哈喽，大家好，我是一条。

相信大家都用过 Mybati-Plus ，啊哈哈，属实是好用，写起来代码那叫一个丝滑。

```java
List<ZoneReportPO> zoneReportPOList = zoneReportMapper.selectList(
                Wrappers.lambdaQuery(ZoneReportPO.class)
                        .eq(StringUtils.isNotBlank(reportTime), ZoneReportPO::getReportTime, reportTime));
```

配上函数式编程，美得很。

但是！它在批量插入这里有个坑：

```java
@Service
public class CommerceUserService extends ServiceImpl<CommerceUserMapper, CommerceUser> {
    
    public boolean batchInsert(List<CommerceUser> list) {
        return super.saveBatch(list);
    }
}
```

这里有一个帮我们实现好的批量插入方法，看起来挺方便哈，可仔细一看，这货还是一条一条插入的。

```java
return !CollectionUtils.isEmpty(list) && executeBatch(entityClass, log, (sqlSession) -> {
    int size = list.size();
    int i = 1;

    for(Iterator var6 = list.iterator(); var6.hasNext(); ++i) {
        E element = var6.next();
        consumer.accept(sqlSession, element);
        if (i % batchSize == 0 || i == size) {
            sqlSession.flushStatements();
        }
    }

});
```

感兴趣的同学可以看一下源码，同时有个 java8 的新函数式接口 `BiConsumer`，可以学习。

我们不跑题说正事，批量插入怎么搞?我插入1000条数据，访问1000次数据库显然是不行，还要考虑大事务。

没办法，自己写吧！开搞！

## sql注入器

这里我们可以通过继承`DefaultSqlInjector`来注入我们自定义的sql方法。

这里实现了批量插入和修改方法。

```java
public class CustomizedSqlInjector extends DefaultSqlInjector {

    @Override
    public List<AbstractMethod> getMethodList(Class<?> mapperClass) {
        //保留自带方法
        List<AbstractMethod> methodList = super.getMethodList(mapperClass);
        methodList.add(new InsertBatchMethod());
        methodList.add(new UpdateBatchMethod());
        return methodList;
    }

}
```

## InsertBatchMethod

接下来就要把这个方法实现，我觉得哈，下面代码直接复制用就行，都是sql的拼接，没什么好研究的。

注意下返回的"insertBatch"这个id，和接口方法中的方法名要对应上。

```java
@Slf4j
public class InsertBatchMethod extends AbstractMethod {

    @Override
    public MappedStatement injectMappedStatement(Class<?> mapperClass, Class<?> modelClass, TableInfo tableInfo) {
        String sql = "<script>insert into %s %s values %s</script>";
        String fieldSql = prepareFieldSql(tableInfo);
        String valueSql = prepareValuesSql(tableInfo);
        String sqlResult = String.format(sql, tableInfo.getTableName(), fieldSql, valueSql);
        SqlSource sqlSource = languageDriver.createSqlSource(configuration, sqlResult, modelClass);
        return this.addInsertMappedStatement(mapperClass, modelClass, "insertBatch", sqlSource, new NoKeyGenerator(), null, null);
    }

    private String prepareFieldSql(TableInfo tableInfo) {
        StringBuilder fieldSql = new StringBuilder();
        fieldSql.append(tableInfo.getKeyColumn()).append(",");
        tableInfo.getFieldList().forEach(x -> fieldSql.append(x.getColumn()).append(","));
        fieldSql.delete(fieldSql.length() - 1, fieldSql.length());
        fieldSql.insert(0, "(");
        fieldSql.append(")");
        return fieldSql.toString();
    }

    private String prepareValuesSql(TableInfo tableInfo) {
        final StringBuilder valueSql = new StringBuilder();
        valueSql.append("<foreach collection=\"list\" item=\"item\" index=\"index\" open=\"(\" separator=\"),(\" close=\")\">");
        valueSql.append("#{item.").append(tableInfo.getKeyProperty()).append("},");
        tableInfo.getFieldList().forEach(x -> valueSql.append("#{item.").append(x.getProperty()).append("},"));
        valueSql.delete(valueSql.length() - 1, valueSql.length());
        valueSql.append("</foreach>");
        return valueSql.toString();
    }
}
```

## 自定义Mapper

在自定义一个mapper，这样使用的时候就不再继承`BaseMapper`而是我们的`RootMapper`。

```java
public interface RootMapper<T> extends BaseMapper<T> {

    /**
     * 自定义批量插入
     */
    int insertBatch(@Param("list") List<T> list);

    /**
     * 自定义批量更新，条件为主键
     */
    int updateBatch(@Param("list") List<T> list);

}
```



## 内存溢出怎么办？

你以为这就完事大吉了？并不是，因为我们要把所有数据拼接一个sql，那字符串就会非常的长，内存溢出必不可少了，怎么解决呢？

对于特别大量的数据，我们还是要分多次的批量插入。

引入一个工具类

```xml
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>28.1-jre</version>
</dependency>

```

分组批量插入

```java
List<List<TestBean>> splistList = Lists.partition(testBeans,200);
splistList.forEach(itemList->testMapper.insertBatch(itemList));

```

## 最后

其实这个问题困扰了我很久，如果遇到数据量大，又要实时插入，效率、性能、内存溢出、大事务。都是需要考虑的。

大家还是要要看需求选择合适的方案。



# 联表查询

```xml
			<dependency>
            <groupId>com.github.yulichang</groupId>
            <artifactId>mybatis-plus-join-boot-starter</artifactId>
            <version>1.4.5</version>
        </dependency>
```



```java
MPJLambdaWrapper<MaterialPriceContract> wrapper = JoinWrappers.lambda(MaterialPriceContract.class)
                .select(SupplyMaterial::getMaterialCode, SupplyMaterial::getMaterialName, SupplyMaterial::getObjectTypeCode)
                .selectAll(MaterialPriceContract.class)
                .innerJoin(SupplyMaterial.class, SupplyMaterial::getId, MaterialPriceContract::getMaterialId)
                .likeRight(SupplyMaterial::getObjectTypeCode, queryParam.getObjectTypeCode())
                .like(StrUtil.isNotBlank(nameOrCode), SupplyMaterial::getMaterialCode, nameOrCode)
                .or()
                .like(StrUtil.isNotBlank(nameOrCode), SupplyMaterial::getMaterialName, nameOrCode);
        return priceContractMapper.selectJoinPage(new Page<>(queryParam.getPageNum(), queryParam.getPageSize()),
                MaterialContractPriceVO.class, wrapper);
```



![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20230518111346474.png)



```sql
SELECT t1.material_code,t1.material_name,t1.object_type_code,t.id,t.material_id,t.vendor_id,t.contract_id,t.measure_unit_name,t.measure_unit_code,t.price_unit_name,t.price_unit_code,t.unit_price,t.tax_rate,t.engineering_quantity,t.total_price,t.expense_notes,t.publish_status,t.has_been_published,t.create_date,t.update_date,t.create_by,t.create_name,t.update_by,t.update_name,t.is_valid 
FROM 
epc_supply_material_price_contract t INNER JOIN epc_supply_material t1 
ON (t1.id = t.material_id) 
WHERE (t1.object_type_code LIKE ?) LIMIT ?
==> Parameters: MS-%(String), 1(Long)
```



