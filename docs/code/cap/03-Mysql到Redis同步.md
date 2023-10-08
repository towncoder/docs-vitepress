## 缓存更新策略

**Read/Write Through**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/c76155eaf8c6ac1e231d9bfb0e22ba5e.png)

脏数据问题：因为读请求里有写请求的部分，就可能吃掉另一个写请求。

ABA问题：两个写请求，先写的后更新缓存，后写的就被吃掉了。

**Cache Aside**

读请求一样，写请求，只删除缓存，不更新缓存，解决ABA问题。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20230206171154085.png)