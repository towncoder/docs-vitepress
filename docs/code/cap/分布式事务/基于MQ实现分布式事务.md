![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/20230907150916.png)

注意看第三步，mq的异常并不代表消息发送失败，也可能是网络抖动，如果此时回滚，就会造成数据不一致。下面就看一下真正的分布式事务应该怎么做？

 