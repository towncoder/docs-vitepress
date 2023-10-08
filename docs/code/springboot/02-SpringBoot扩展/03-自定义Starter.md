> https://juejin.cn/post/7127468724046528525

## 自定义starter步骤

其实自定义starter很简单，大致需要以下5步：

新建两个模块，命名规范：
springboot自带的starter命名规范为spring-boot-starter-xxx，
自定义的starter命名规范为xxx-spring-boot-starter

- xxx-spring-boot-autoconfigure：自动配置核心代码
- xxx-spring-boot-starter：管理依赖

如果不需要将自动配置代码和依赖项管理分离开来，则可以将它们组合到一个模块中。只不过springboot官方建议将两个模块分开。

2. 引入spring-boot-autoconfigure依赖
3. 创建自定义的XXXProperties 类: 这个类的属性根据需要是要出现在配置文件中的。
4. 创建自定义的XXXAutoConfiguration类：这个类要配置自动配置时的一些逻辑，同时也要让XXXProperties 类生效。
5. 创建自定义的spring.factories文件：在resources/META-INF创建一个spring.factories文件和spring-configuration-metadata.json，spring-configuration-metadata.json文件是用于在填写配置文件时的智能提示，可要可不要，有的话提示起来更友好。spring.factories用于导入自动配置类，必须要有

## 基础案例









## 常用注解

下面这些注解在自定义starter是可能会用到。

@Conditional：按照一定的条件进行判断，满足条件给容器注册bean
@ConditionalOnMissingBean：给定的在bean不存在时,则实例化当前Bean
@ConditionalOnProperty：配置文件中满足定义的属性则创建bean，否则不创建
@ConditionalOnBean：给定的在bean存在时,则实例化当前Bean
@ConditionalOnClass： 当给定的类名在类路径上存在，则实例化当前Bean
@ConditionalOnMissingClass ：当给定的类名在类路径上不存在，则实例化当前Bean





## log-aop-spring-boot-starter
