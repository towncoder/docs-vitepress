最新Java自学路线——小白零基础入门，大厂面试进阶，收藏这篇就够了



><b>本文收录于《技术专家修炼》</b>b
>
><font  color=blue><b>文中配套资料合集  提取码：</b></font>
>
><font  color=green><b>路线导图高清源文件</b></font>：[地址](https://docs.qq.com/mind/DZWtHVG9YYU1zcFd1)

哈喽，大家好，我是一条~

最近粉丝问我有没有**Java自学路线**，有了方向才能按图索骥，事半功倍。

我一想确实如此，自己去年总结了一份，但有些地方需要修改，索性利用国庆假期，重新整理一份。

没错，就是这篇文章，本文分为**学习路线**和**配套资料**两部分。



[toc]

# 自学路线

## 0.贵在坚持

>Java学习，如逆水行舟，不进则退。而自学，逆水还得加个水逆，难上加难。
>
>所以我们要做好打持久战的准备。

### 按计划行事

**凡事预则立，不预则废**。一个好的计划是成功的一半，而这一半，一条已经帮你整理好了，你只需要**收藏**即可。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011182550425.png)

该路线图左侧为**主路线**，需循序渐进，步步为营；右侧为**辅助路线**，需贯穿始终，熟练掌握。

建议做好时间规划，不断的提高自己的学习效率，学习过程中尽量把手机调至静音给自己一个安静的学习环境和氛围。

### 抱团生长

**独脚难行,孤掌难鸣**，一个人的力量终究是有限的，一个人的旅途也注定是孤独的。当你定好计划，怀着满腔热血准备出发的时候，一定要找个伙伴，和唐僧西天取经一样，师徒四人团结一心才能通过九九八十一难。

在学习过程中看下自己身边有没有Java这方面的大神，尽量多问，多交流，如果没有的话，来找我，我一定知无不言言无不尽，还可以给你找一群志同道合的人。**水涨船高,柴多火旺**，就是这个道理，闭门造车注定会半途而废。

### 贵在坚持

**驽马十驾，功在不舍**。自学Java非一日之功，你知道的越多，不知道的也越多。所以，为自己找一个动力，为了改变命运，或是为了心爱的人，或是为了让别人高看一眼。男儿何不带吴钩,收取关山十五州。岁月无情，余生有涯，请将生活扛在肩上，只顾风雨兼程。

## 1.Java基础

>学习任何语言，都是先从他的基本语法开始，如果你有C语言的基础，会容易许多，没有也不用现学。

![image-20211011130649245](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011130649245.png)

### 基本数据类型

Java 语言提供了 **8** 种基本类型，大致分为 **4** 类（8位=1字节）

- 整数型
  - `byte` - 1字节
  - `short` - 2字节
  - `int` - 4字节
  - `long` - 8字节，赋值时一般在数字后加上 `l` 或 `L`
- 浮点型
  - `float` - 4字节，直接赋值时必须在数字后加上 `f` 或 `F`
  - `double` - 8字节，赋值时一般在数字后加 `d` 或 `D` 
- 字符型
  - `char` - 2字节，存储 Unicode 码，用单引号赋值
- 布尔型
  - `boolean` - 1字节，只有 true 和 false 两个取值，一个字节就够了

### 引用数据类型

简单来说，所有的非基本数据类型都是引用数据类型，除了基本数据类型对应的引用类型外，类、 接口类型、 数组类型、 枚举类型、 注解类型、 字符串型都属于引用类型。

主要有以下区别：


1、存储位置

- 基本变量类型在方法中定义的非全局基本数据类型变量的具体内容是存储在栈中的
- 引用数据类型变量其具体内容都是存放在堆中的，而栈中存放的是其具体内容所在内存的地址

2、传递方式

- 基本数据类型是按值传递
- 引用数据类型是按引用传递

### 访问修饰符

访问修饰符就是限制变量的访问权限的。

比如你有个“赚钱”的方法，谁都不想给用，那就把方法设成`private`（私有）；

 后来你有了老婆孩子，你想让他们也会赚钱，就得设置成`default`（同一个包）；

后来你又有了第二个孩子，但你发现他不会赚钱的方法，为啥呢？因为你被<font color=green>绿</font>了（default不支持不同包的子类）；

可为了大局，你还是选择接受这个孩子，悄悄把方法设置成了`proteced`（保护子类，即使不同包）；

后来你老了，明白了开源才是共赢，就设置成了`public`（公有的）；

不知道你听懂了吗，估计看到被那啥了就不想看了吧，没关系，看图（也是绿的）

![image-20210805183734693](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210805183734693.png)

### static关键字

主要意义：

我日常调用方法都是对象.方法，`static`的主要意义就是可以创建独立于具体对象的域变量或者方法。也就是实现即使没有创建对象，也能使用属性和调用方法！

另一个比较关键的作用就是 **用来形成静态代码块以优化程序性能**。`static`块可以置于类中的任何地方，可以有多个。在类初次被加载的时候，会按照`static`块的顺序来执行每个`static`块，并且只会执行一次,可以用来优化程序性能

通俗理解：

`static`是一个可以让你升级的关键字，被`static`修饰，你就不再是你了。

### final关键字

>`final`翻译成中文是“不可更改的，最终的”，顾名思义，他的功能就是不能再修改，不能再继承。我们常见的`String类`就是被`final`修饰的。
>
>将类、方法、变量声明为final能够提高性能，这样JVM就有机会进行估计，然后优化。
>
>按照Java代码惯例，final变量就是常量，而且通常常量名要大写：

- final关键字可以用于成员变量、本地变量、方法以及类。
- final成员变量必须在声明的时候初始化或者在构造器中初始化，否则就会报编译错误。
- 不能够对final变量再次赋值。
- final方法不能被重写。
- final类不能被继承。
- 接口中声明的所有变量本身是final的。
- final和abstract这两个关键字是反相关的，final类就不可能是abstract的。

### 面向对象三大特性

**封装**

1.什么是封装

　　封装又叫隐藏实现。就是只公开代码单元的对外接口，而隐藏其具体实现。

　　其实生活中处处都是封装，手机，电脑，电视这些都是封装。你只需要知道如何去操作他们，并不需要知道他们里面是怎么构造的，怎么实现这个功能的。

2.如何实现封装

　　在程序设计里，封装往往是通过访问控制实现的。也就是刚才提到的访问修饰符。

3.封装的意义

封装提高了代码的安全性，使代码的修改变的更加容易，代码以一个个独立的单元存在，高内聚，低耦合。

好比只要你手机的充电接口不变，无论以后手机怎么更新，你依然可以用同样的数据线充电或者与其他设备连接。

封装的设计使使整个软件开发复杂度大大降低。我只需要使用别人的类，而不必关心其内部逻辑是如何实现的。我能很容易学会使用别人写好的代码，这就让软件协同开发的难度大大降低。

封装还避免了命名冲突的问题。

好比你家里有各种各样的遥控器，但比还是直到哪个是电视的，哪个是空调的。因为一个属于电视类一个属于空调类。不同的类中可以有相同名称的方法和属性，但不会混淆。

**继承**

继承的主要思想就是**将子类的对象作为父类的对象来使用**。比如王者荣耀的英雄作为父类，后裔作为子类。后裔有所有英雄共有的属性，同时也有自己独特的技能。

**多态**

多态的定义：

指允许不同类的对象对同一消息做出响应。即同一消息可以根据发送对象的不同而采用多种不同的行为方式。（发送消息就是函数调用）

简单来说，同样调用攻击这个方法，后裔的普攻和亚瑟的普攻是不一样的。

多态的条件：

-  要有继承
-  要有重写
-  父类引用指向子类对象

多态的好处：

多态对已存在代码具有可替换性。

多态对代码具有可扩充性。

它在应用中体现了灵活多样的操作，提高了使用效率。

多态简化对应用软件的代码编写和修改过程，尤其在处理大量对象的运算和操作时，这个特点尤为突出和重要。

Java中多态的实现方式：

- 接口实现
- 继承父类进行方法重写
- 同一个类中进行方法重载

### 完整讲解

>[Java基础完整讲解](https://blog.csdn.net/skylibiao/article/details/119532816)

### 入门练习案例

>[《入门练习100例》](https://blog.csdn.net/skylibiao/category_11397973)

## 2.JavaWeb

>JavaWeb是用Java技术来解决相关web互联网领域的技术栈。Web就是网页，分为静态和动态。涉及 的知识点主要包括jsp，servlet，tomcat，http，MVC等知识。
>
>本章难度不高，但也不可忽视。其中**前端基础**不需花过多时间，重点放在**Tomcat**上，会陪伴你整个Java生涯。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011145857917.png)

### HTTP网络请求方式

- `GET`：最常用的方式，用来向服务器请求数据，没有请求体，请求参数放在URL后面。
- `POST`：用于向表单提交数据，传送的数据放在请求体中。
- `PUT`：用来向服务器上传文件，一般对应修改操作，`POST`用于向服务器发送数据，PUT用于向服务器储存数据。没有验证机制，任何人都可以操作，存在安全问题。具有幂等性。
- `DELETE`：用于删除服务器上的文件，具有幂等性。同样存在安全问题。
- `HEAD`：用HEAD进行请求服务器时，服务器只返回响应头，不返回响应体。与`GET`一样没有请求体，常用于检查请求的URL是否有效。
- `PATCH`：对资源进行部分修改。与PUT区别在于，PUT是修改所有资源，替代它，而PATCH只是修改部分资源。
- `TRACE`：用来查看一个请求，经过网关，代理到达服务器，最后请求的变换。因安全问题被禁用。
- `OPTIONS`：当客户端不清楚对资源操作的方法，可以使用这个，具有幂等性。

### GET和POST

1. 作用不同：GET 用于获取资源，而 POST 用于传输实体主体。
2. 参数位置不一样： GET 的参数是以查询字符串出现在 URL 中，而 POST 的参数存储在实体主体中。虽然GET的参数暴露在外面，但可以通过加密的方式处理，而 POST 参数即使存储在实体主体中，我们也可以通过一些抓包工具如（Fiddler）查看。
3. 幂等性：GET是幂等性，而POST不是幂等性。（面试官紧接着可能就会问你什么是幂等性？如何保证幂等性？）
4. 安全性：安全的 HTTP 方法不会改变服务器状态，也就是说它只是可读的。 GET 方法是安全的，而 POST 却不是，因为 POST 的目的是传送实体主体内容，这个内容可能是用户上传的表单数据，上传成功之后，服务器可能把这个数据存储到数据库中，因此状态也就发生了改变。

### 幂等性

>是否具有幂等性也是一个http请求的重要关注点。

幂等性：指的是同样的请求不管执行多少次，效果都是一样，服务器状态也是一样的。具有幂等性的请求方法没有副作用。(统计用途除外)

### 如何保证幂等性

>假设这样一个场景：有时我们在填写某些`form表单`时，保存按钮不小心快速点了两次，表中竟然产生了两条重复的数据，只是id不一样。
>
>这是一个比较常见的幂等性问题，在高并发场景下会变得更加复杂，那怎么保证接口的幂等性呢？

1.insert前select

插入数据前先根据某一字段查询一下数据库，如果已经存在就修改，不存在再插入。

2.加锁

加锁可解决一切问题，但也要考虑并发性。

主要包括悲观锁，乐观锁，分布式锁。

悲观锁的并发性较低，更适合使用在防止数据重复的场景，注意幂等性不光是防止重复还需要结果相同。

乐观锁可以很高的提升性能，也就是常说的版本号。

分布式锁应用在高并发场景，主要用redis来实现。

3.唯一索引

通过数据库的唯一索引来保证结果的一致性和数据的不重复。

4.Token

两次请求，第一请求拿到token，第二次带着token去完成业务请求。

### 常见的网络状态码

>网络状态码共三位数字组成，根据第一个数字可分为以下几个系列：

**1xx（信息性状态码）**

代表请求已被接受，需要继续处理。

包括：`100、101、102`

这一系列的在实际开发中基本不会遇到，可以略过。

**2xx（成功状态码）**

表示成功处理了请求的状态代码。

`200`：请求成功，表明服务器成功了处理请求。

`202`：服务器已接受请求，但尚未处理。

`204`：服务器成功处理了请求，但没有返回任何内容。

`206`：服务器成功处理了部分 GET 请求。

**3xx（重定向状态码）**

`300`：针对请求，服务器可执行多种操作。

`301`：永久重定向

`302`：临时性重定向

`303`：303与302状态码有着相同的功能，但303状态码明确表示客户端应当采用GET方法获取资源。

**301和302的区别？**

`301`比较常用的场景是使用域名跳转。比如，我们访问 `http://www.baidu.com` 会跳转到`https://www.baidu.com`，发送请求之后，就会返回301状态码，然后返回一个location，提示新的地址，浏览器就会拿着这个新的地址去访问。 

`302`用来做临时跳转比如未登陆的用户访问用户中心重定向到登录页面。

**4xx（客户端错误状态码）**

`400`：该状态码表示请求报文中存在语法错误。但浏览器会像200 OK一样对待该状态码。

`401`：表示发送的请求需要有通过HTTP认证的认证信息。比如`token`失效就会出现这个问题。

`403`：被拒绝，表明对请求资源的访问被服务器拒绝了。

`404`：找不到，表明服务器上无法找到请求的资源，也可能是拒绝请求但不想说明理由。

**5xx（服务器错误状态码）**

`500 `：服务器本身发生错误，可能是Web应用存在的bug或某些临时的故障。

`502`：该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。

⚠️有时候返回的状态码响应是错误的，比如Web应用程序内部发生错误，状态码依然返回`200`

### 转发和重定向

>上面提到了重定向，那你知道什么是转发吗？

1.转发

A找B借钱，B没有钱，B去问C，C有钱，C把钱借给A的过程。

客户浏览器发送http请求,web服务器接受此请求,调用内部的一个方法在容器内部完成请求处理和转发动作,将目标资源发送给客户。

整个转发一个请求，一个响应，地址栏不会发生变化，不能跨域访问。

2.重定向

A找B借钱，B没有钱，B让A去找C，A又和C借钱，C有钱，C把钱借给A的过程。

客户浏览器发送http请求,web服务器接受后发送302状态码响应及对应新的location给客户浏览器,客户浏览器发现是302响应，则自动再发送一个新的http请求，请求url是新的location地址,服务器根据此请求寻找资源并发送给客户。

两个请求，两个响应，可以跨域。

### Servlet

>servlet是一个比较抽奖的概念，也是web部分的核心组件，大家回答这个问题一定要加入自己的理解，不要背定义。

`servlet`其实就是一个java程序，他主要是用来解决动态页面的问题。

之前都是浏览器像服务器请求资源，服务器（tomcat）返回页面，但用户多了之后，每个用户希望带到不用的资源。这时就该`servlet`上场表演了。

`servlet`存在于`tomcat`之中，用来网络请求与响应，但他的重心更在于业务处理，我们访问京东和淘宝的返回的商品是不一样的，就需要程序员去编写，目前MVC三层架构，我们都是在`service`层处理业务，但这其实是从`servlet`中抽取出来的。

看一下`servlet`处理请求的过程：

![image-20210812201447743](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210812201447743.png)

### Servlet的生命周期

Servlet生命周期分为三个阶段：

- 初始化阶段 调用init()方法
- 响应客户请求阶段　　调用service()方法-àdoGet/doPost()
- 终止阶段　　调用destroy()方法

### session、cookie、token

首先我们要明白HTTP是一种无状态协议，怎么理解呢？很简单

```
夏洛：大爷，楼上322住的是马冬梅家吧？
大爷：马冬什么？ 
夏洛：马冬梅。 
大爷：什么冬梅啊？ 
夏洛：马冬梅啊。 
大爷：马什么梅？
夏洛：行，大爷你先凉快着吧。
```

这段对话都熟悉吧，HTTP就是那个大爷，那如果我们就直接把“大爷”放给用户，用户不用干别的了，就不停的登录就行了。

既然“大爷不靠谱”，我们找“大娘”去吧。

哈哈哈，开个玩笑，言归正传。

为了解决用户频繁登录的问题，在服务端和客户端共同维护一个状态——会话，就是所谓`session`，我们根据会话id判断是否是同一用户，这样用户就开心了。

但是服务器可不开心了，因为用户越来越多，都要把`session`存在服务器，这对服务器来说是一个巨大的开销，这是服务器就找来了自己的兄弟帮他分担（集群部署，负载均衡）。

但是问题依然存在，如果兄弟挂了怎么办，兄弟们之间的数据怎么同步，用户1把`session`存放在机器A上，下次访问时负载均衡到了机器B，完了，找不到，用户又要骂娘。

这时有人思考，为什么一定要服务端保存呢，让客户端自己保存不就好了，所以就诞生了`cookie`，下一次请求时客户段把`cookie`发送给服务器，说我已经登录了。

但是空口无凭，服务器怎么知道哪个`cookie`是我发过去的呢？如何验证成了新的问题。

有人想到了一个办法，用加密令牌，也就是`token`，服务器发给客户端一个令牌，令牌保存加密后id和密钥，下一次请求时通过`headers`传给服务端，由于密钥别人不知道，只有服务端知道，就实现了验证，且别人无法伪造。

### MVC与三层架构

三层架构与MVC的目标一致：都是为了解耦和、提高代码复用。MVC是一种设计模式，而三层架构是一种软件架构。

**MVC**

**Model 模型**

模型负责各个功能的实现（如登录、增加、删除功能），用`JavaBean`实现。

**View 视图**

用户看到的页面和与用户的交互。包含各种表单。 实现视图用到的技术有html/css/jsp/js等前端技术。

常用的web 容器和开发工具

**Controller 控制器**

控制器负责将视图与模型一一对应起来。相当于一个模型分发器。接收请求，并将该请求跳转（转发，重定向）到模型进行处理。模型处理完毕后，再通过控制器，返回给视图中的请求处。

**三层架构**

表现层（UI）(web层)、业务逻辑层（BLL）(service层)、数据访问层（DAL）(dao层) ，再加上实体类库（Model）

- 实体类库（Model），在Java中，往往将其称为Entity实体类。数据库中用于存放数据，而我们通常选择会用一个专门的类来抽象出数据表的结构，类的属性就一对一的对应这表的属性。一般来说，Model实体类库层需要被DAL层，BIL层和UI层引用。
- 数据访问层（DAL），主要是存放对数据类的访问，即对数据库的添加、删除、修改、更新等基本操作，DAL就是根据业务需求，构造SQL语句，构造参数，调用帮助类，获取结果，DAL层被BIL层调用
- 业务逻辑层（BLL），BLL层好比是桥梁，将UI表示层与DAL数据访问层之间联系起来。所要负责的，就是处理涉及业务逻辑相关的问题，比如在调用访问数据库之前，先处理数据、判断数据。

### 完整讲解

>[JavaWeb完整讲解](https://blog.csdn.net/skylibiao/article/details/119782272)

## 3.集合

>工欲善其事必先利其器，集合就是我们的器。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011155638891.png)

### ArrayList

**底层实现**

>由什么组成，我说了不算，看源码。怎么看呢？
>
>```java
>List<Object> list = new ArrayList<>();
>```
>
>新建一个`ArrayList`,按住`ctrl`或`command`用鼠标点击。

```java
    /**
     * The array buffer into which the elements of the ArrayList are stored.
     * The capacity of the ArrayList is the length of this array buffer. Any
     * empty ArrayList with elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA
     * will be expanded to DEFAULT_CAPACITY when the first element is added.
     * 翻译
     * 数组缓冲区，ArrayList的元素被存储在其中。ArrayList的容量是这个数组缓冲区的长度。
     * 任何空的ArrayList，如果elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA，
     * 当第一个元素被添加时，将被扩展到DEFAULT_CAPACITY。
     */
    transient Object[] elementData; 
```

毋庸置疑，底层由**数组**组成，那数组的特点就是`ArrayList`的特点。

- 由于数组以一块连续的内存空间，每一个元素都有对应的下标，查询时间复杂度为`O(1)`。好比你去住酒店，每个房间都挨着，房门都写着房间号。你想找哪一间房是不是很容易。
- 相对的，一块连续的内存空间你想打破他就没那么容易，牵一发而动全身，所以新增和删除的时间复杂度为`O(n)`，想像你在做`excel`表格的时候，想增加一列，后面的列是不是都要跟着移动。
- 元素有序，可重复。可用在大多数的场景，这个就不需要过多解释了。

**扩容**

>我们知道数组是容量不可变的数据结构，随着元素不断增加，必然要扩容。
>
>所以扩容机制也是集合中非常容易爱问的问题，在源码中都可以一探究竟。

1.初始化容量为10，也可以指定容量创建。

```java
    /**
     * Default initial capacity.
     * 定义初始化容量
     */
    private static final int DEFAULT_CAPACITY = 10;
```

2.数组进行扩容时，是将旧数据拷贝到新的数组中，新数组容量是原容量的1.5倍。（这里用位运算是为了提高运算速度）

```java
private void grow(int minCapacity) {
  int newCapacity = oldCapacity + (oldCapacity >> 1);
}
```

3.扩容代价是很高得，因此再实际使用时，我们因该避免数组容量得扩张。尽可能避免数据容量得扩张。尽可能，就至指定容量，避免数组扩容的发生。

**为什么扩容是1.5倍？**

- 如果大于1.5，也就是每次扩容很多倍，但其实我就差一个元素的空间，造成了空间浪费。
- 如果小于1.5，扩容的意义就不大了，就会带来频繁扩容的问题。

所以，`1.5`是均衡了空间占用和扩容次数考虑的。

**线程安全问题**

>怎么看线程安全？说实话我以前都不知道，看网上说安全就安全，说不安全就不安全。
>
>其实都在源码里。找到增加元素的方法，看看有没有加锁就知道了。

```java
    public void add(int index, E element) {
        rangeCheckForAdd(index);

        ensureCapacityInternal(size + 1);  // Increments modCount!!
        System.arraycopy(elementData, index, elementData, index + 1,
                         size - index);
        elementData[index] = element;
        size++;
    }
```

没有加锁，所以**线程不安全**

在多线程的情况下,插入数据的时可能会造成数据丢失，一个线程在遍历,另一个线程修改,会报`ConcurrentModificationException(并发修改异常)`错误.

**多线程下使用怎么保证线程安全？**

>保证线程安全的思路很简单就是加锁，但是你可没办法修改源码去加个锁，但是你想想编写`java`的大佬会想不到线程安全问题？
>
>早就给你准备了线程安全的类。

1.Vector

`Vector`是一个线程安全的`List`类，通过对所有操作都加上`synchronized`关键字实现。

找到`add`方法，可以看到被`synchronized`关键字修饰，也就是加锁，但`synchronized`是重度锁，并发性太低，所以实际一般不使用，随着`java`版本的更新，慢慢废弃。

```java
public void add(E e) {
            int i = cursor;
            synchronized (Vector.this) {
                checkForComodification();
                Vector.this.add(i, e);
                expectedModCount = modCount;
            }
            cursor = i + 1;
            lastRet = -1;
        }
```

2.Collections

注意是`Collections`而不是`Collection`。

`Collections`位于`java.util`包下，是集合类的工具类，提供了很多操作集合类的方法。其中`Collections.synchronizedList(list)`可以提供一个线程安全的`List`。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210825120328827.png)

对于Map、Set也有对应的方法

3.CopyOnWrite（写时复制）

写时复制，简称COW，是计算机程序设计领域中的一种通用优化策略。

当有多人同时访问同一资源时，他们会共同获取指向相同的资源的指针，供访问者进行读操作。

当某个调用者修改资源内容时，系统会真正复制一份副本给该调用者，而其他调用者所见到的最初的资源仍然保持不变。修改完成后，再把新的数据写回去。

通俗易懂的讲，假设现在有一份班级名单，但有几个同学还没有填好，这时老师把文件通过微信发送过去让同学们填写（复制一份），但不需要修改的同学此时查看的还是旧的名单，直到有同学修改好发给老师，老师用新的名单替换旧的名单，全班同学才能查看新的名单。

**共享读，分开写。读写分离，写时复制。**

在java中，通过` CopyOnWriteArrayList`、`CopyOnWriteArraySet `容器实现了 COW 思想。

平时查询的时候，都不需要加锁，随便访问，只有在更新的时候，才会从原来的数据复制一个副本出来，然后修改这个副本，最后把原数据替换成当前的副本。修改操作的同时，读操作不会被阻塞，而是继续读取旧的数据。

```java
    /** The lock protecting all mutators */
    final transient ReentrantLock lock = new ReentrantLock();

    /** The array, accessed only via getArray/setArray. */
    private transient volatile Object[] array;
```

源码里用到了`ReentrantLock`锁和`volatile`关键字，会在[《资深程序员修炼》](https://blog.csdn.net/skylibiao/category_11116786.html?spm=1001.2014.3001.5482)专栏中做全面深度讲解。

### LinkedList

>`LinkedList`和`ArrayList`同属于`List`集合。其共同特点可归纳为：
>
>存储单列数据的集合，存储的数据是有序并且是可以重复的。
>
>但两者也有不同，往下看吧

**底层实现**

`LinkedList`类的底层实现的数据结构是一个双向链表。同时还实现了`Deque`接口，所以会有些队列的特性，会在下面讲。

```java
class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, java.io.Serializable
```

先简单说一下链表这种数据结构，与数组相反，链表是一种物理存储单元上非连续、非顺序的存储结构，一个最简单的链表（单链表）有节点`Node`和数值`value`组成。通俗的讲，就像串在一起的小鱼干，中间用线连着。

```java
transient Node<E> first;

transient Node<E> last;
```

链表中保存着对**最后一个节点的引用**，这就是双端链表

在单链表的结点中增加一个指向其前驱的pre指针就是双向链表，一种牺牲空间换时间的做法。

双端链表不同于双向链表，切记！

关于链表更详细代码级讲解会放[《糊涂算法》](https://blog.csdn.net/skylibiao/category_11292502.html?spm=1001.2014.3001.5482)专栏更新。敬请期待！

简单了解过后分析一下链表的特点：

- 查询速度慢，因为是非连续空间，没有下标。想像你需要在一份名单上找到你的名字，没有序号，你只能从头开始一个一个的看。
- 删改速度快，因为非连续，也就没有那么多约束。想像从一根项链上扣下来一块，只需要改变引用就可以了，不会牵一发而动全身。
- 元素有序，可重复。

**如何解决查询慢的问题？**

如果我查找的元素在尾部，则需要遍历整个链表，所以有了双端链表。

即使不在尾部，我如果只能一个方向遍历，也很麻烦，所以有了双向队列，牺牲空间换时间。

那么空间可不可以再牺牲一点？

可以，就是跳跃链表，简称「跳表」。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210825192904787.png)

通过建立多级索引来加快查询速度。

**线程安全问题**

>老办法，看看`add()`方法。分为「头插法」和「尾插法」。

```java
    /**
     * Inserts the specified element at the beginning of this list.
     *
     * @param e the element to add
     */
    public void addFirst(E e) {
        linkFirst(e);
    }

    /**
     * Appends the specified element to the end of this list.
     *
     * <p>This method is equivalent to {@link #add}.
     *
     * @param e the element to add
     */
    public void addLast(E e) {
        linkLast(e);
    }
```

都没加锁，百分之一百的不安全。

**如何解决线程不安全问题**

1.ConcurrentLinkedQueue

一个新的类，位于`java.util.concurrent`(juc)包下。实现了`Queue`接口。

```java
class ConcurrentLinkedQueue<E> extends AbstractQueue<E>
        implements Queue<E>, java.io.Serializable{}
```

使用`violate`关键字实现加锁。

```java
 private transient volatile Node<E> head;

 private transient volatile Node<E> tail;
```

1.Collections

和`ArrayList`一样，使用`Collections.synchronizedList()`。


Map：存储双列数据的集合，通过键值对存储数据，存储 的数据是无序的，Key值不能重复，value值可以重复

### 和ArrayList对比一下

共同点：有序，可重复。线程不安全。

不同点：底层架构，查询和删改的速度

### 完整讲解

> [集合完整讲解](https://blog.csdn.net/skylibiao/article/details/119925943)

## 4.JVM

> 重点来了，Java程序员一定要深入研究的内容

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011163812293.png)

### JVM的体系架构

> JVM体系结构如下图所示，将按照从上到下的顺序讲解![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918171634375.png)

### 类装载器classloader

> 负责将class文件的**字节码**内容加载到内存中并将这些内容转换成**方法区**中的运行时数据结构，class文件在文件开头有特定标识（cafe babe：Java图标——咖啡和橡树）。
>
> 通俗来讲：classloader相当于**快递员**的作用，只负责加载，至于是否能运行，由Execution Engine决定

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918172444492.png)

 

**双亲委派机制**

当一个类收到类加载请求，他会先把这个请求交给他的父类，只有父类无法完成这个请求时，子加载器才会尝试自己去加载。

双亲委派的好处是保护Java核心类，比如加载位于rt.jar中的java.lang.Object,不管是哪个加载器加载的，最终都会交给启动类加载器，这样就保证了不同的类加载器得到的都是同一个Object对象。

**代码举例：查看类是被那个加载器加载的**

```java
/**
 * @Author: 一条IT
 * @Date: 2020/12/3 21:28
 */
public class Test {
    public static void main(String[] args) {
        System.out.println(Object.class.getClassLoader());
        System.out.println(Test.class.getClassLoader().getParent().getParent());
        System.out.println(Test.class.getClassLoader().getParent());
        System.out.println(Test.class.getClassLoader());
    }
}
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**输出**

```java
null
null
sun.misc.Launcher$ExtClassLoader@1b6d3586
sun.misc.Launcher$AppClassLoader@14dad5dc
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

因为Object是jdk自带的，所以在加载的时候是走Bootstrap启动类加载器，而Bootstrap加载器是C++语言写的，所以在查的时候是null,报了NullPointException()；Test类自己写的，走AppClassLoder,他的父类是扩展加载器，再父类是启动类加载器，也输出Null

**沙箱安全机制**

**主要是防止恶意代码污染java源代码，**比如定义了一个类名为String所在包为java.lang，因为这个类本来是属于jdk的，如果没有沙箱安全机制的话，这个类将会污染到我所有的String,但是由于沙箱安全机制，所以就委托顶层的bootstrap加载器查找这个类，如果没有的话就委托extsion,extsion没有就到appclassloader，但是由于String就是jdk的源代码，所以在bootstrap那里就加载到了，先找到先使用，所以就使用bootstrap里面的String,后面的一概不能使用，这就保证了不被恶意代码污染。

### 垃圾回收

>垃圾回收是重点难，先理解了垃圾回收，才能理解调优的思路。

**判断垃圾**

>判断是否是垃圾共有两种方法。引用计数法和可达性分析

1.引用计数法

非常好理解，**引用一次标记一次**，没有被标记的就是垃圾。

在堆中存储对象时，在对象头处维护一个`counter`计数器，如果一个对象增加了一个引用与之相连，则将`counter++`。

如果一个引用关系失效则`counter--`。如果一个对象的counter变为0，则说明该对象已经被废弃，不处于存活状态，此时可以被回收。

2.引用计数的缺点

- 效率低
- 无法分析循环引用问题

3.可达性分析

类似**树**的树结构，从根结点出发，即GC root，把有关系的对象用一颗树链接起来

那么我们遍历这棵树，没遍历到的对象，就是垃圾

4.有哪些可以做GC Roots的对象？

- 虚拟机栈(栈桢中的本地变量表)中的引用的对象
- 方法区中的类静态属性引用的对象
- 方法区中的常量引用的对象
- 本地方法栈中JNI（Native方法）的引用的对象

**回收算法**

>回收算法是垃圾回收的思想，回收器是垃圾回收的实现

1.标记-清除

两次遍历：

- 标记垃圾
- 清除垃圾

优点：

- 不需要格外空间，适合回收对象较少的区域

缺点：

- 效率低，遍历两次，时间复杂度O(n^2)
- 会有线程停顿，`stop the world (STW)`
- 空间碎片，因为垃圾可能不是连续的，大量的空间碎片会导致提前GC，这也是最主要的问题。

2.标记-复制

将空间分为相等大小的两部分，每次只使用其中的一块。当这一块的内存用完了，就将还存活着的对象复制到另外一块上面，然后再把已使用的内存空间一次清理掉，这样一来就不容易出现内存碎片的问题。牺牲空间解决碎片问题。

优点：

- 高效无碎片

缺点：

- 占用大量空间

3.标记-整理

同样是为了解决空间碎片提出，区别是通过牺牲时间的方式。

和标记-清除类似，不一样的是在完成标记之后，它不是直接清理可回收对象，而是将存活对象都向一端移动，然后清理掉端边界以外的内存。

优点：

- 解决空间碎片的问题
- 不浪费空间

缺点：

- 相对比较耗时

### 完整讲解

>[JVM完整讲解](https://blog.csdn.net/skylibiao/article/details/120372788)

## 5.多线程

>理解多线程，才能更好的理解框架源码，进行高并发的架构设计，重中之重。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011171504691.png)

### 并行和并发

并行：多个任务在同一个 CPU 核上，按细分的时间片轮流(交替)执行，从逻辑上来看那些任务是同时执行。

并发：多个处理器或多核处理器同时处理多个任务。

举例：

并发 = 两个队列和一台咖啡机。

并行 = 两个队列和两台咖啡机。

###  线程和进程

一个程序下至少有一个进程，一个进程下至少有一个线程，一个进程下也可以有多个线程来增加程序的执行速度。

### 守护线程

守护线程是运行在后台的一种特殊进程。它独立于控制终端并且周期性地执行某种任务或等待处理某些发生的事件。在 Java 中垃圾回收线程就是特殊的守护线程。

### 创建线程4种方式

- 继承 Thread 重新 run 方法；
- 实现 Runnable 接口；

- 实现 Callable 接口。
- 线程池

### synchronized 底层实现

synchronized 是由一对 monitorenter/monitorexit 指令实现的，monitor 对象是同步的基本实现单元。

在 Java 6 之前，monitor 的实现完全是依靠操作系统内部的互斥锁，因为需要进行用户态到内核态的切换，所以同步操作是一个无差别的重量级操作，性能也很低。

但在 Java 6 的时候，Java 虚拟机 对此进行了大刀阔斧地改进，提供了三种不同的 monitor 实现，也就是常说的三种不同的锁：偏向锁（Biased Locking）、轻量级锁和重量级锁，大大改进了其性能。

### synchronized 和 volatile 的区别

volatile 是变量修饰符；synchronized 是修饰类、方法、代码段。

volatile 仅能实现变量的修改可见性，不能保证原子性；而 synchronized 则可以保证变量的修改可见性和原子性。

volatile 不会造成线程的阻塞；synchronized 可能会造成线程的阻塞。

### synchronized 和 Lock 区别

synchronized 可以给类、方法、代码块加锁；而 lock 只能给代码块加锁。

synchronized 不需要手动获取锁和释放锁，使用简单，发生异常会自动释放锁，不会造成死锁。

lock 需要自己加锁和释放锁，如果使用不当没有 unLock()去释放锁就会造成死锁。

通过 Lock 可以知道有没有成功获取锁，而 synchronized 却无法办到。

### synchronized 和 ReentrantLock 区别

synchronized 早期的实现比较低效，对比 ReentrantLock，大多数场景性能都相差较大，但是在 Java 6 中对 synchronized 进行了非常多的改进。

主要区别如下：

ReentrantLock 使用起来比较灵活，但是必须有释放锁的配合动作；

ReentrantLock 必须手动获取与释放锁，而 synchronized 不需要手动释放和开启锁；

ReentrantLock 只适用于代码块锁，而 synchronized 可用于修饰方法、代码块等。

volatile 标记的变量不会被编译器优化；synchronized 标记的变量可以被编译器优化。

## 6.设计模式

>好多人觉得设计模式模式，那是因为你学的还不够深入，还没有看过源码，所以我特意将设计模式往前放了。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011171431022.png)

### 原型模式

**定义**

官方定义

>用原型实例指定创建对象的种类，并且通过拷贝这个原型来创建新的对象。

通俗解读

在需要创建重复的对象，为了保证性能，**本体给外部提供一个克隆体进行使用**。

类似我国的印刷术，省去`new`的过程，通过`copy`的方式创建对象。

**结构图**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210920205032711.png)

**代码实现**

**目录结构**

>建议跟着一条学设计模式的小伙伴都建一个`maven `工程，并安装`lombok`依赖和插件。
>
>并建立如下包目录，便于归纳整理。

<img src="https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210920205525607.png" style="zoom:50%;" />

`pom`如下

```xml
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.16.10</version>
    </dependency>

```

**开发场景**

假设一条开发了一个替代`Mybatis`的框架，叫`YitiaoBatis`，每次操作数据库，从数据库里面查出很多记录，但是改变的部分是很少的，如果每次查数据库，查到以后把所有数据都封装一个对象，就会导致要`new`很多重复的对象，造成资源的浪费。

一条想到一个解决办法，就是把查过的数据保存起来，下来查相同的数据，直接把保存好的对象返回，也就是**缓存**的思想。

我们用代码模拟一下：

**1.创建`Yitiao`实体类**

```java
/**
 * author:一条
 */
@Data
@AllArgsConstructor
public class Yitiao {
    
    private String name;
    private Integer id;
    private String wechat;

    public Yitiao(){
        System.out.println("Yitiao对象创建");
    }
}
```

**2.创建**`YitiaoBatis`类

```java
/**
 * author:一条
 */
public class YitiaoBatis {
    //缓存Map    
    private Map<String,Yitiao> yitiaoCache = new HashMap<>();

    //从缓存拿对象
    public Yitiao getYitiao(String name){
        //判断缓存中是否存在
        if (yitiaoCache.containsKey(name)){
            Yitiao yitiao = yitiaoCache.get(name);
            System.out.println("从缓存查到数据："+yitiao);
            return yitiao;
        }else {
            //模拟从数据库查数据
            Yitiao yitiao = new Yitiao();
            yitiao.setName(name);
            yitiao.setId(1);
            yitiao.setWechat("公众号：一条coding");
            System.out.println("从数据库查到数据:"+yitiao);
            //放入缓存
            yitiaoCache.put(name,yitiao);
            return yitiao;
        }
    }
}
```

**3.编写测试类**

```java
/**
 * author:一条
 */
public class MainTest {
    public static void main(String[] args) {
        YitiaoBatis yitiaoBatis = new YitiaoBatis();
        Yitiao yitiao1 = yitiaoBatis.getYitiao("yitiao");
        System.out.println("第一次查询："+yitiao1);
        Yitiao yitiao2 = yitiaoBatis.getYitiao("yitiao");
        System.out.println("第二次查询："+yitiao2);
    }
}
```

**输出结果**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210920214036146.png)

从结果可以看出：

- 对象创建了一次，有点**单例**的感觉
- 第一次从数据库查，第二次从缓存查

好像是实现了`YitiaoBatis`框架的需求，思考🤔一下有什么问题呢？

**4.修改对象id**

在测试类继续编写

```java
//执行后续业务，修改id
yitiao2.setId(100);

Yitiao yitiao3 = yitiaoBatis.getYitiao("yitiao");
System.out.println("第三次查询："+yitiao3);
```

**输出结果**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210920214835010.png)

重点看第三次查询，`id=100？`

我们在内存修改的数据，导致从数据库查出来的数据也跟着改变，出现**脏数据**。

怎么解决呢？**原型模式**正式开始。

5.实现`Cloneable`接口

**本体给外部提供一个克隆体进行使用**，在缓存中拿到的对象不直接返回，而是复制一份，这样就保证了不会脏缓存。

```java
public class Yitiao implements Cloneable{
  
  	//……
  
		@Override
    protected Object clone() throws CloneNotSupportedException {
				return (Yitiao) super.clone();
    }
}
```

**修改缓存**

```java
//从缓存拿对象
    public Yitiao getYitiao(String name) throws CloneNotSupportedException {
        //判断缓存中是否存在
        if (yitiaoCache.containsKey(name)){
            Yitiao yitiao = yitiaoCache.get(name);
            System.out.println("从缓存查到数据："+yitiao);
            //修改返回
            //return yitiao;
            return yitiao.clone();
        }else {
            //模拟从数据库查数据
            Yitiao yitiao = new Yitiao();
            yitiao.setName(name);
            yitiao.setId(1);
            yitiao.setWechat("公众号：一条coding");
            System.out.println("从数据库查到数据:"+yitiao);
            //放入缓存
            yitiaoCache.put(name,yitiao);
            //修改返回
            //return yitiao;
            return yitiao.clone();
        }
```

6.再次测试

不用改测试类，直接看一下结果：

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210920234635145.png)

从输出结果可以看出第三次查询`id`依然是`1`，没有脏缓存现象。

基于原型模式的克隆思想，我可以**快速**拿到和「本体」一模一样的「克隆体」，而且对象也只被`new`了一次。

不知道大家是否好奇对象是怎么被创建出来的，那我们就一起看一下「深拷贝」和「浅拷贝」是怎么回事。

**深拷贝和浅拷贝**

定义

>**深拷贝**：不管拷贝对象里面是基本数据类型还是引用数据类型都是完全的复制一份到新的对象中。
>
>**浅拷贝**：当拷贝对象只包含简单的数据类型比如int、float 或者不可变的对象（字符串）时，就直接将这些字段复制到新的对象中。而引用的对象并没有复制而是将引用对象的地址复制一份给克隆对象。

好比两个兄弟，**深拷贝**是年轻的时候关系特别好，衣服买一样的，房子住一块。**浅拷贝**是长大了都成家立业，衣服可以继续买一样的，但房子必须要分开住了。

实现

>在代码上区分深拷贝和浅拷贝的方式就是看引用类型的变量在修改后，值是否发生变化。

**浅拷贝**

<img src="https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210921005117224.png" style="zoom:50%;" />

1.通过`clone()`方式的浅拷贝

新建`Age`类，作为`Yitiao`的引用属性

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Age {
    private int age;
}
```

2.测试1

```java
public static void main(String[] args) throws CloneNotSupportedException {
        Yitiao yitiao1 = new Yitiao();
        Age age = new Age(1);
        yitiao1.setAge(age);
        yitiao1.setId(1);
        Yitiao clone = yitiao1.clone();
        yitiao1.setId(2);
        age.setAge(2);    //不能new一个age
        System.out.println("yitiao1:\n"+yitiao1+"\nclone:\n"+clone);
    }
```

输出结果

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210921003913886.png)

结论：基本类型`id`没发生改变，引用类型`Age`由于**地址指向的同一个对象**，值跟随变化。

3.通过构造方法实现浅拷贝

`Yitiao.class`增加构造方法

```java
    public Yitiao(Yitiao yitiao){
        id=yitiao.id;
        age=yitiao.age;
    }
```

4.测试2

```java
        Yitiao yitiao1 = new Yitiao();
        Age age = new Age(1);
        yitiao1.setAge(age);
        yitiao1.setId(1);
        Yitiao clone = new Yitiao(yitiao1);  //差别在这
        yitiao1.setId(2);
        age.setAge(2);
        System.out.println("yitiao1:\n"+yitiao1+"\nclone:\n"+clone);
```

输出结果

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210921004816246.png)

与**测试1**无异

**深拷贝**

<img src="https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210921005209828.png" alt="image-20210921005209828" style="zoom:50%;" />

1.通过对象序列化实现深拷贝

>通过层次调用clone方法也可以实现深拷贝，但是代码量太大。特别对于属性数量比较多、层次比较深的类而言，每个类都要重写clone方法太过繁琐。一般不使用，亦不再举例。
>
>可以通过将对象序列化为字节序列后，默认会将该对象的整个对象图进行序列化，再通过反序列即可完美地实现深拷贝。

`Yitiao`和`Age`实现Serializable接口

2.测试

```java
//通过对象序列化实现深拷贝
        Yitiao yitiao = new Yitiao();
        Age age = new Age(1);
        yitiao.setAge(age);
        yitiao.setId(1);
        ByteArrayOutputStream bos=new ByteArrayOutputStream();
        ObjectOutputStream oos=new ObjectOutputStream(bos);
        oos.writeObject(yitiao);
        oos.flush();
        ObjectInputStream ois=new ObjectInputStream(new 							ByteArrayInputStream(bos.toByteArray()));
        Yitiao clone = (Yitiao) ois.readObject();
        yitiao.setId(2);
        age.setAge(2);
        System.out.println("yitiao:\n"+yitiao+"\nclone:\n"+clone);
```

输出结果

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210921010218092.png)

结论，引用对象也完全复制一个新的，值不变化。

不过要注意的是，如果某个属性被`transient`修饰，那么该属性就无法被拷贝了。

应用场景

>我们说回**原型模式**。
>
>原型模式在我们的代码中是很常见的，但是又容易被我们所忽视的一种模式，比如我们常用的的`BeanUtils.copyProperties`就是一种对象的**浅拷贝**。
>
>看看有哪些场景需要原型模式

- 资源优化
- 性能和安全要求
- 一个对象多个修改者的场景。
- 一个对象需要提供给其他对象访问，而且各个调用者可能都需要修改其值时可以考虑使用原型模式拷贝多个对象供调用者使用。

原型模式已经与 Java 融为浑然一体，可以随手拿来使用。

### 更多设计模式

>[更多设计模式](https://blog.csdn.net/skylibiao/category_11364358)

## 7.SSM框架

>这对于初学者来说，是一个坎，前几年学完这些，已经可以开始找工作了，所以恭喜你能坚持带这里，胜利就在前方。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011173108638.png)

### ORM 框架？

ORM（Object Relation Mapping）对象关系映射，是把数据库中的关系数据映射成为程序中的对象。

使用 ORM 的优点：提高了开发效率降低了开发成本、开发更简单更对象化、可移植更强。

### MyBatis 中 #{}和 的区别

#是预编译处理，{}的区别是什么？\#{}是预编译处理，的区别是什么？#是预编译处理，{}是字符替换。 在使用 #{}时，MyBatis 会将 SQL 中的 #{}替换成“?”，配合 PreparedStatement 的 set 方法赋值，这样可以有效的防止 SQL 注入，保证程序的运行安全。

### 什么是Spring

spring 提供 ioc 技术，容器会帮你管理依赖的对象，从而不需要自己创建和管理依赖对象了，更轻松的实现了程序的解耦。

spring 提供了事务支持，使得事务操作变的更加方便。

spring 提供了面向切片编程，这样可以更方便的处理某一类的问题。

更方便的框架集成，spring 可以很方便的集成其他框架，比如 MyBatis、hibernate 等。

### 什么是 aop

aop 是面向切面编程，通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。

简单来说就是统一处理某一“切面”（类）的问题的编程思想，比如统一处理日志、异常等。

### 什么是 ioc

ioc：Inversionof Control（中文：控制反转）是 spring 的核心，对于 spring 框架来说，就是由 spring 来负责控制对象的生命周期和对象间的关系。

简单来说，控制指的是当前对象对内部成员的控制权；控制反转指的是，这种控制权不由当前对象管理了，由其他（类,第三方容器）来管理。

### spring mvc 运行流程

spring mvc 先将请求发送给 DispatcherServlet。

DispatcherServlet 查询一个或多个 HandlerMapping，找到处理请求的 Controller。

DispatcherServlet 再把请求提交到对应的 Controller。

Controller 进行业务逻辑处理后，会返回一个ModelAndView。

Dispathcher 查询一个或多个 ViewResolver 视图解析器，找到 ModelAndView 对象指定的视图对象。
视图对象负责渲染返回给客户端。

### 什么是 spring boot？

spring boot 是为 spring 服务的，是用来简化新 spring 应用的初始搭建以及开发过程的。

### 为什么要用 spring boot？

配置简单

独立运行

自动装配

无代码生成和 xml 配置

提供应用监控

易上手

提升开发效率

## 8.Redis

>随着QPS的逐渐升高，传统的mysql数据库已经无法满足。所以有了基于内存的redis缓存数据库来存储热点数据。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011174156450.png)

### 什么是Redis

Redis 是一个使用 C 语言开发的高速缓存数据库。

Redis 使用场景：

- 记录帖子点赞数、点击数、评论数；

- 缓存近期热帖；
- 缓存文章详情信息；
- 记录用户会话信息。

### Redis 的功能

- 数据缓存功能
- 分布式锁的功能
- 支持数据持久化
- 支持事务
- 支持消息队列

### Redis 和 memcache 

存储方式不同：memcache 把数据全部存在内存之中，断电后会挂掉，数据不能超过内存大小；Redis 有部份存在硬盘上，这样能保证数据的持久性。

数据支持类型：memcache 对数据类型支持相对简单；Redis 有复杂的数据类型。

使用底层模型不同：它们之间底层实现方式，以及与客户端之间通信的应用协议不一样，Redis 自己构建了 vm 机制，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求。

value 值大小不同：Redis 最大可以达到 1gb；memcache 只有 1mb。

### Redis 为什么是单线程的

因为 cpu 不是 Redis 的瓶颈，Redis 的瓶颈最有可能是机器内存或者网络带宽。既然单线程容易实现，而且 cpu 又不会成为瓶颈，那就顺理成章地采用单线程的方案了。

关于 Redis 的性能，官方网站也有，普通笔记本轻松处理每秒几十万的请求。

而且单线程并不代表就慢 nginx 和 nodejs 也都是高性能单线程的代表。

### 缓存穿透

缓存穿透：指查询一个一定不存在的数据，由于缓存是不命中时需要从数据库查询，查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到数据库去查询，造成缓存穿透。

解决方案：最简单粗暴的方法如果一个查询返回的数据为空（不管是数据不存在，还是系统故障），我们就把这个空结果进行缓存，但它的过期时间会很短，最长不超过五分钟。

### Redis 数据类型

Redis 支持的数据类型：string（字符串）、list（列表）、hash（字典）、set（集合）、zset（有序集合）。

## 9.Zookeeper

>Zookeeper作为统一配置文件管理和集群管理框架，是后续学习其他框架的基础，在微服务中，还可以用来做注册中心。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011181849728.png)

### 什么是zookeeper 

zookeeper 是一个分布式的，开放源码的分布式应用程序协调服务，是 google chubby 的开源实现，是 hadoop 和 hbase 的重要组件。它是一个为分布式应用提供一致性服务的软件，提供的功能包括：配置维护、域名服务、分布式同步、组服务等。

### zookeeper 的功能

集群管理：监控节点存活状态、运行请求等。

主节点选举：主节点挂掉了之后可以从备用的节点开始新一轮选主，主节点选举说的就是这个选举的过程，使用 zookeeper 可以协助完成这个过程。

分布式锁：zookeeper 提供两种锁：独占锁、共享锁。独占锁即一次只能有一个线程使用资源，共享锁是读锁共享，读写互斥，即可以有多线线程同时读同一个资源，如果要使用写锁也只能有一个线程使用。zookeeper可以对分布式锁进行控制。

命名服务：在分布式系统中，通过使用命名服务，客户端应用能够根据指定名字来获取资源或服务的地址，提供者等信息。

### zookeeper 的部署模式

zookeeper 有三种部署模式：

单机部署：一台集群上运行；

集群部署：多台集群运行；

伪集群部署：一台集群启动多个 zookeeper 实例运行。

## 10.Kafka



![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011180123286.png)

### kafka和zookeeper的关系

kafka 不能脱离 zookeeper 单独使用，因为 kafka 使用 zookeeper 管理和协调 kafka 的节点服务器。

### kafka的数据保留的策略？

kafka 有两种数据保存策略：按照过期时间保留和按照存储的消息大小保留。

kafka 同时设置了 7 天和 10G 清除数据，到第五天的时候消息达到了 10G，这个时候 kafka 将如何处理？
这个时候 kafka 会执行数据清除工作，时间和大小不论那个满足条件，都会清空数据。

### kafka性能瓶颈

cpu 性能瓶颈

磁盘读写瓶颈

网络瓶颈

### kafka集群

集群的数量不是越多越好，最好不要超过 7 个，因为节点越多，消息复制需要的时间就越长，整个群组的吞吐量就越低。

集群数量最好是单数，因为超过一半故障集群就不能用了，设置为单数容错率更高。

## 11.ES

>elasticsearch简写es，es是一个高扩展、开源的全文检索和分析引擎，它可以准实时地快速存储、搜索、分析海量的数据。

## 12.Dubbo

>Dubbo是一个分布式服务框架，致力于提供高性能和透明化的RPC远程服务调用方案，以及SOA服务治理方案。简单的说，dubbo就是个服务框架

## 13.SpringCloud

>Spring Cloud是一个微服务框架。Spring Cloud提供了全套的分布式系统解决方案，不仅对微服务基础框架Netflix的多个开源组件进行了封装，同时还实现了和云端平台以及Spring Boot开发框架的集成。

### 什么是 spring cloud

spring cloud 是一系列框架的有序集合。它利用 spring boot 的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 spring boot 的开发风格做到一键启动和部署。

### spring cloud 的核心组件

Eureka：服务注册于发现。

Feign：基于动态代理机制，根据注解和选择的机器，拼接请求 url 地址，发起请求。

Ribbon：实现负载均衡，从一个服务的多台机器中选择一台。

Hystrix：提供线程池，不同的服务走不同的线程池，实现了不同服务调用的隔离，避免了服务雪崩的问题。

Zuul：网关管理，由 Zuul 网关转发请求给对应的服务。

### 断路器的作用

在分布式架构中，断路器模式的作用也是类似的，当某个服务单元发生故障（类似用电器发生短路）之后，通过断路器的故障监控（类似熔断保险丝），向调用方返回一个错误响应，而不是长时间的等待。这样就不会使得线程因调用故障服务被长时间占用不释放，避免了故障在分布式系统中的蔓延。

## 14.Nginx

>Nginx是一个高性能的HTTP和反向代理服务器。具有占内存少和并发能力强的特点。

## 15.Netty

>netty 是一个基于nio的客户、服务器端编程框架，netty提供异步的，事件驱动的网络应用程序框架和工具，可以快速开发高可用的客户端和服务器。
>

## 16.架构设计

>好的架构从来不是设计出来的，而是演变出来的。所以我们在日常开发中就要不断思考性能的优化。

下面拿如何设计一个百万人抽奖系统举例说明架构的演进。

### V0——单体架构

>如果现在让你实现几十人的抽奖系统，简单死了吧，直接重拳出击！

两猫一豚走江湖，中奖入库，调通知服务，查库通知，完美！

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210907132947565.png)

相信大家学java时可能都做过这种案例，思考🤔一下存在什么问题？

- 单体服务，一着不慎满盘皆输
- 抽了再抽，一个人就是一支军队
- 恶意脚本，没有程序员中不了的奖

接下来就聊聊怎么解决这些问题？

### V1——负载均衡

>当一台服务器的单位时间内的访问量越大时，服务器压力就越大，大到超过自身承受能力时，服务器就会崩溃。
>
>为了避免服务器崩溃，让用户有更好的体验，我们通过负载均衡的方式来分担服务器压力。

负载均衡就是建立很多很多服务器，组成一个服务器集群，当用户访问网站时，先访问一个中间服务器，好比管家，由他在服务器集群中选择一个压力较小的服务器，然后将该访问请求引入该服务器。

如此以来，用户的每次访问，都会保证服务器集群中的每个服务器压力趋于平衡，分担了服务器压力，避免了服务器崩溃的情况。

负载均衡是用「反向代理」的原理实现的。具体负载均衡算法及其实现方式我们下文再续。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210907134634670.png)

负载均衡虽然解决了单体架构一着不慎满盘皆输的问题，但服务器成本依然不能保护系统周全，我们必须想好一旦服务器宕机，如何保证用户的体验。

即如何缓解开奖一瞬间时的大量请求。

### V2——服务限流

>限流主要的作用是保护服务节点或者集群后面的数据节点，防止瞬时流量过大使服务和数据崩溃（如前端缓存大量实效），造成不可用。
>
>还可用于平滑请求。

在上一小节我们做好了负载均衡来保证集群的可用性，但公司需要需要考虑服务器的成本，不可能无限制的增加服务器数量，一般会经过计算保证日常的使用没问题。

限流的意义就在于我们**无法预测未知流量**，比如刚提到的抽奖可能遇到的：

- 重复抽奖
- 恶意脚本

其他一些场景：

- 热点事件（微博）
- 大量爬虫

这些情况都是无法预知的，不知道什么时候会有10倍甚至20倍的流量打进来，如果真碰上这种情况，扩容是根本来不及的（弹性扩容都是虚谈，一秒钟你给我扩一下试试）

明确了限流的意义，我们再来看看如何实现限流

**防止用户重复抽奖**

>重复抽奖和恶意脚本可以归在一起，同时几十万的用户可能发出几百万的请求。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210907210907302.png)

如果同一个用户在1分钟之内多次发送请求来进行抽奖，就认为是恶意重复抽奖或者是脚本在刷奖，这种流量是不应该再继续往下请求的，在负载均衡层给直接屏蔽掉。

可以通过`nginx`配置`ip`的访问频率，或者在在网关层结合`sentinel`配置限流策略。

用户的抽奖状态可以通过redis来存储，后面会说。

**拦截无效流量**

> 无论是抽奖还是秒杀，奖品和商品都是有限的，所以后面涌入的大量请求其实都是无用的。

举个例子，假设50万人抽奖，就准备了100台手机，那么50万请求瞬间涌入，其实前500个请求就把手机抢完了，后续的几十万请求就没必要让他再执行业务逻辑，直接暴力拦截返回抽奖结束就可以了。

同时前端在按钮置灰上也可以做一些文章。

那么思考一下如何才能知道奖品抽完了呢，也就是库存和订单之前的数据同步问题。

**服务降级和服务熔断**

>有了以上措施就万无一失了吗，不可能的。所以再服务端还有降级和熔断机制。
>
>在此简单做个补充，详细内容请持续关注作者。

有好多人容易混淆这两个概念，通过一个小例子让大家明白：

假设现在一条粉丝数突破100万，冲上微博热搜，粉丝甲和粉丝乙都打开微博观看，但甲看到了一条新闻发布会的内容，乙却看到”系统繁忙“，过了一会，乙也能看到内容了。

（请允许一条幻想一下😎）

在上述过程中，首先是热点时间造成大量请求，发生了服务熔断，为了保证整个系统可用，牺牲了部分用户乙，乙看到的”系统繁忙“就是服务降级（fallback），过了一会有恢复访问，这也是熔断器的一个特性（hystrix）

### V3 同步状态

>接着回到上一节的问题，如何同步抽奖状态？

这不得不提到`redis`，被广泛用于高并发系统的缓存数据库。

我们可以基于Redis来实现这种共享抽奖状态，它非常轻量级，很适合两个层次的系统的共享访问。

当然其实用ZooKeeper也是可以的，在负载均衡层可以基于zk客户端监听某个znode节点状态。一旦抽奖结束，抽奖服务更新zk状态，负载均衡层会感知到。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210907233308890.png)

### V4线程优化

>对于线上环境，工作线程数量是一个至关重要的参数，需要根据自己的情况调节。

众所周知，对于进入Tomcat的每个请求，其实都会交给一个独立的工作线程来进行处理，那么Tomcat有多少线程，就决定了并发请求处理的能力。

但是这个线程数量是需要经过压测来进行判断的，因为每个线程都会处理一个请求，这个请求又需要访问数据库之类的外部系统，所以不是每个系统的参数都可以一样的，需要自己对系统进行压测。

但是给一个经验值的话，Tomcat的线程数量不宜过多。因为线程过多，普通服务器的CPU是扛不住的，反而会导致机器CPU负载过高，最终崩溃。

同时，Tomcat的线程数量也不宜太少，因为如果就100个线程，那么会导致无法充分利用Tomcat的线程资源和机器的CPU资源。

所以一般来说，Tomcat线程数量在200~500之间都是可以的，但是具体多少需要自己压测一下，不断的调节参数，看具体的CPU负载以及线程执行请求的一个效率。

在CPU负载尚可，以及请求执行性能正常的情况下，尽可能提高一些线程数量。

但是如果到一个临界值，发现机器负载过高，而且线程处理请求的速度开始下降，说明这台机扛不住这么多线程并发执行处理请求了，此时就不能继续上调线程数量了。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210907234348115.png)

### V5业务逻辑

>抽奖逻辑怎么做？

好了，现在该研究一下怎么做抽奖了

在负载均衡那个层面，已经把比如50万流量中的48万都拦截掉了，但是可能还是会有2万流量进入抽奖服务。

因为抽奖活动都是临时服务，可以阿里云租一堆机器，也不是很贵，tomcat优化完了，服务器的问题也解决了，还剩啥呢？

Mysql，是的，你的Mysql能抗住2万的并发请求吗？

答案是很难，怎么办呢？

把Mysql给替换成redis，单机抗2万并发那是很轻松的一件事情。

而且redis的一种数据结构`set`很适合做抽奖，可以随机选择一个元素并剔除。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210907235725057.png)

### V6流量削峰

>由上至下，还剩中奖通知部分没有优化。

思考这个问题：假设抽奖服务在2万请求中有1万请求抽中了奖品，那么势必会造成抽奖服务对礼品服务调用1万次。

那也要和抽奖服务同样处理吗？

其实并不用，因为发送通知不要求及时性，完全可以让一万个请求慢慢发送，这时就要用到消息中间件，进行限流削峰。

也就是说，抽奖服务把中奖信息发送到MQ，然后通知服务慢慢的从MQ中消费中奖消息，最终完成完礼品的发放，这也是我们会延迟一些收到中奖信息或者物流信息的原因。

假设两个通知服务实例每秒可以完成100个通知的发送，那么1万条消息也就是延迟100秒发放完毕罢了。

同样对MySQL的压力也会降低，那么数据库层面也是可以抗住的。

看一下最终结构图：

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210908002755147.png)

## 17.Linux

>作为Java程序员，不会用Linux会让人笑掉大牙的。我们不必像运维兄弟一样精通，基本的命令还是要熟练掌握。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011232946657.png)

- 理解一切皆文件
- 文件操作命令
- 权限管理命令
- 网络命令
- 系统磁盘命令
- ……

## 18.Git

>网上经常传出不会git被开除的新闻，所以还不学起来？

### 命令大全

>[200条Git命令大全](https://blog.csdn.net/skylibiao/article/details/117711383)

## 19.数据结构和算法

>问一下各位什么是程序？——数据结构+算法。所以，学吧，刷题吧

### 排序算法

>《八大排序》源码](https://pan.baidu.com/s/1woTgwkVUT1xtgMB1ha36Uw)，提取码：5ehp

<img src="https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210923184932295.png" style="zoom: 67%;" />

**准备**

>古语云：“兵马未动，粮草先行”。想跟着一条一块把「排序算法」弄明白的,建议先准备好以下代码模板。
>
>📢 观看本教程需知道基本**循环语法**、**两数交换**、**双指针**等前置知识。
>
>📚 建议先看完**代码**和**逐步分析**后再尝试自己写。

- 新建一个`Java`工程,本文全篇也基于Java语言实现代码。
- 建立如下目录结构

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210925170635558.png)

- 在`MainTest`测试类中编写测试模板。

```java
/**
 * 测试类
 * Author：一条
 * Date：2021/09/23
 */
public class MainTest {
    public static void main(String[] args) {
        //待排序序列
        int[] array={6,10,4,5,2,8};
        //调用不同排序算法
				// BubbleSort.sort(array);

        // 创建有100000个随机数据的数组
        int[] costArray=new int[100000];
        for (int i = 0; i < 100000; i++) {
            // 生成一个[0,100000) 的一个数
            costArray[i] = (int) (Math.random() * 100000);
        }

        Date start = new Date();
        //过长，先注释掉逐步打印
				//BubbleSort.sort(costArray);
        Date end = new Date();
        System.out.println("耗时："+(end.getTime()-start.getTime())/1000+"s");
    }
}
```

该段代码内容主要有两个功能：

- 调用不同的排序算法进行测试
- 测试不同排序算法将`10w`个数排好序需要的时间。更加具象的理解**时间复杂度**的不同

1.冒泡排序

基本思想

通过对乱序序列从前向后遍历,依次**比较**相邻元素的值，若发现逆序则**交换**，使值较大的元素逐渐从前移向后部。

像水底下的气泡一样逐渐向上冒一样。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/u=2516851634,847294809&fm=26&fmt=auto.jpeg)

动图讲解

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/2021-09-25 18.17.49.gif)

代码实现

>不理解的小伙伴可以用`debug`模式逐步分析。

```java
/**
 * 冒泡排序
 * Author：一条
 * Date：2021/09/23
 */
public class BubbleSort{
    public static int[] sort(int[] array){
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array.length-1; j++) {
              //依次比较，将最大的元素交换到最后
                if (array[j]>array[j+1]){
                  // 用临时变量temp交换两个值
                    int temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                }
            }
          //输出每一步的排序结果
            System.out.println(Arrays.toString(array));
        }
        return array;
    }
}
```

**输出结果**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210925182630229.png)

**逐步分析**

1. 初始数组：`[6,10,4,5,2,8]`
2. `6`拿出来和后一个`10`比较，`6<10`，不用交换。- > `j++;`
3. `10`拿出来和后一个`4`比较,`10>4`,交换。- > `[6,4,10,5,2,8]`
4. 依次执行`j++`与后一个**比较交换**。
5. 第一层`i`循环完，打印第一行- > `[6, 4, 5, 2, 8, 10]`，此时最后一位`10`在正确位置上。 - > `i++`
6. 从`4`开始，继续**比较交换**，倒数第二位`8`回到正确位置。
7. 如上循环下去 - > ……
8. 最终结果 - > `[2, 4, 5, 6, 8, 10]`

这时再回去看动图理解。

耗时测试

>记得先注释掉排序类逐步打印代码。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210925180201113.png)

**时间复杂度**：`O(n^2)`

**算法优化**

**优化点一**

外层第一次遍历完，最后一位已经是正确的，`j`就不需要再比较，所以结束条件应改为`j-i-1;`。

**优化点二**

因为排序的过程中，各元素不断接近自己的位置，如果一趟比较下来没有进行过交换，就说明序列有序，因此要在排序过程中设置一个标志`flag`判断元素是否进行过交换。从而减少不必要的比较。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210925191546570.png)

**优化代码**

```java
public static int[] sortPlus(int[] array){
        System.out.println("优化冒泡排序开始----------");
        for (int i = 0; i < array.length; i++) {
            boolean flag=false;
            for (int j = 0; j < array.length-i-1; j++) {
                if (array[j]>array[j+1]){
                    flag=true;
                    int temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                }
            }
            if (flag==false){
                break;
            }
//            System.out.println(Arrays.toString(array));
        }
        return array;
    }
```



**优化测试**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210926121006554.png)

通过基础测试看到当序列已经排好序，即不发生交换后终止循环。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210926121215927.png)

耗时测试由`27s`优化到`17s`。

2.选择排序

基本思想

选择排序和冒泡排序很像，是从乱序序列的数据中，按指定的规则选出某一元素，再依规定交换位置后达到排序的目的。

动图讲解

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/2021-09-25 18.52.31.gif)

代码实现

```java
public class SelectSort {
    public static int[] sort(int[] array) {
        System.out.println("选择排序开始----------");
        for (int i = 0; i < array.length; i++) {
          //每个值只需与他后面的值进行比较，所以从开始
            for (int j = i; j < array.length; j++) {
              //注意此处是哪两个值比较
                if (array[i]>array[j]){
                    int temp=array[i];
                    array[i]=array[j];
                    array[j]=temp;
                }
            }
            System.out.println(Arrays.toString(array));
        }
        return array;
    }
}
```

**输出结果**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210925185832238.png)

**逐步分析**

- 初始数组：`[6,10,4,5,2,8]`
- 拿出`6`与`10`比较，不交换 - > `j++`
- `6`与`2`比较，交换 - > `j++`
- 注意此时是拿`2`继续比较，都不交换，确定第一位（最小的数）为`2` - > `i++`
- 循环下去，依次找到第一小，第二小，……的数 
- 最终结果 - > `[2, 4, 5, 6, 8, 10]`

这时再回去看动图理解。

耗时测试

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210926022208246.png)

时间复杂度：`O(n^2)`

算法优化

上诉代码中使用**交换**的方式找到较小值，还可以通过**移动**的方式，即全部比较完只交换一次。

这种对空间的占有率会有些增益，但对时间的增益几乎没有，可忽略，亦不再演示。

3.插入排序

基本思想

把n个乱序的元素看成为一个有序表和一个无序表，开始时有序表中只包含一个元素，无序表中包含有n-1个元素，排序过程中通过不断往有序表插入元素，获取一个局部正确解，逐渐扩大有序序列的长度，直到完成排序。

动图讲解

![2021-09-25 19.20.05](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/2021-09-25 19.20.05.gif)

代码实现

```java
/**
 * 插入排序
 * Author：一条
 * Date：2021/09/23
 */
public class InsertSort {
    public static void sort(int[] array) {
        for (int i = 1; i < array.length; i++) {
            //插入有序序列，且将有序序列扩大
            for (int j = i; j > 0; j--) {
                if (array[j]>array[j-1]){
                    int temp=array[j];
                    array[j]=array[j-1];
                    array[j-1]=temp;
                }
            }
//            System.out.println(Arrays.toString(array));
        }
    }
}
```

**输出结果**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210926023232843.png)

耗时测试

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210926023512274.png)

算法优化

见下方**希尔排序**，就是希尔对**插入排序**的优化。

4.希尔排序

>希尔排序是插入排序的一个优化，思考往`[2,3,4,5,6]`中插入`1`，需要将所有元素的位置都移动一遍，也就是说在某些极端情况下效率不高，也称该算法**不稳定**。
>
>希尔排序是插入排序经过改进之后的一个更高效的版本，也称为**缩小增量排序**。

基本思想

希尔排序是把记录按下标的一定增量分组，对每组使用插入排序；

随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个序列恰被分成一组，算法便终止。

和插入排序一样，从局部到全部，希尔排序是局部再局部。

动图讲解

![图片源于网络](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/849589-20180331170017421-364506073.gif)

代码实现

```java
/**
 * 希尔排序
 * Author：一条
 * Date：2021/09/23
 */
public class ShellSort {
    public static void sort(int[] array) {
        System.out.println("希尔排序开始--------");
        //gap初始增量=length/2  逐渐缩小：gap/2
        for (int gap = array.length/2; gap > 0 ; gap/=2) {
            //插入排序 交换法
            for (int i = gap; i < array.length ; i++) {
                int j = i;
                while(j-gap>=0 && array[j]<array[j-gap]){
                    //插入排序采用交换法
                    int temp = array[j];
                    array[j]=array[j-gap];
                    array[j-gap]=temp;
                    j-=gap;
                }
            }
            System.out.println(Arrays.toString(array));
        }
    }
}
```



**输出结果**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210926180059217.png)

耗时测试

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210926180306579.png)

算法优化

无

5.快速排序

>快速排序（Quicksort）是对冒泡排序的一种改进，相比冒泡排序，每次的交换都是跳跃式的。

基本思想

将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

体现出**分治**的思想。

动图讲解

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/2021-09-26 02.49.17.gif)

代码实现

>思路如下：
>
>- 首先在这个序列中找一个数作为**基准数**，为了方便可以取第一个数。
>- 遍历数组，**将小于基准数的放置于基准数左边，大于基准数的放置于基准数右边**。此处可用双指针实现。
>- 此时基准值把数组分为了两半，**基准值算是已归位（找到排序后的位置）**。
>- 利用**递归**算法，对分治后的子数组进行排序。

```java
public class QuickSort {
    public static void sort(int[] array) {
        System.out.println("快速排序开始---------");
        mainSort(array, 0, array.length - 1);
    }

    private static void mainSort(int[] array, int left, int right) {
        if(left > right) {
            return;
        }
        //双指针
        int i=left;
        int j=right;
        //base就是基准数
        int base = array[left];
        //左边小于基准，右边大于基准
        while (i<j) {
            //先看右边，依次往左递减
            while (base<=array[j]&&i<j) {
                j--;
            }
            //再看左边，依次往右递增
            while (base>=array[i]&&i<j) {
                i++;
            }
            //交换
            int temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
        //最后将基准为与i和j相等位置的数字交换
        array[left] = array[i];
        array[i] = base;
        System.out.println(Arrays.toString(array));
        //递归调用左半数组
        mainSort(array, left, j-1);
        //递归调用右半数组
        mainSort(array, j+1, right);
    }
}
```

**输出结果**

**![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210926134518356.png)**

**逐步分析**

- 将`6`作为基准数，利用左右指针使左边的数`<6`，右边的数`>6`。
- 对左右两边递归，即左边用`5`作为基准数继续比较。
- 直到`left > right`结束递归。

耗时测试

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210926133341869.png)

算法优化

**优化一**

三数取中（median-of-three）：我们目前是拿第一个数作为基准数，对于部分有序序列，会浪费循环，可以用三数取中法优化，感性的小伙伴可自行了解。

**优化二**

快速排序对于长序列非常快，但对于短序列不如插入排序。可以综合使用。

>[完整文章](https://blog.csdn.net/skylibiao/article/details/120500805)

### 1eetcode刷题

>暴力穷举被一个3w+字符的测试用例教做人 [：吐血]
>
>——leetcode此题热评

**Question**

<font color=orange>难度：中等</font>

>给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
>
>
>
>示例 1:
>
>```tex
>输入: s = "abcabcbb"
>输出: 3 
>解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
>```
>
>
>示例 2:
>
>```tex
>输入: s = "bbbbb"
>输出: 1
>解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
>```
>
>示例 3:
>
>```tex
>输入: s = "pwwkew"
>输出: 3
>解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
>请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
>```
>
>示例 4:
>
>```tex
>输入: s = ""
>输出: 0
>```
>
>
>提示：
>
>0 <= s.length <= 5 * 104
>s 由英文字母、数字、符号和空格组成

**Solution**

>这道题用`暴力穷举法`我们不难想到</br>
>
>但是面试，一定会问你，`还有别的方法吗？`</br>
>
>有，`滑动窗口法`</br>

1. 假设有一个可滑动且大小可变的窗口，窗口左端（start）不动，右端（end）向后移动
2. 当end遇到重复字符，start应该放在上一个重复字符的位置的后一位，同时记录最长的长度
3. 怎样判断是否遇到重复字符，且怎么知道上一个重复字符的位置？
4. 用哈希字典的key来判断是否重复，用value来记录该字符的下一个不重复的位置。

**Code**

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {

        int maxLength=0;
       int start = 0,end=0;
        HashMap<Character, Integer> map = new HashMap<>();
        char[] chars = s.toCharArray();
        while(end<chars.length){
            if (map.containsKey(chars[end])){
                start=Math.max(map.get(chars[end]),start);
            }
            maxLength=Math.max(maxLength,end-start+1);
            map.put(chars[end],end+1);
            end++;
        }
        return maxLength;
    }
}
```

**Result**

>**复杂度分析**
>
>- 时间复杂度：O(N) ，只需要end从0移动到n就可以

![](https://img-blog.csdnimg.cn/20210715215510938.png)



## 20.计算机网络

>计算机基础课，非科班学生提升必备。

## 21.操作系统

> 计算机基础课，非科班学生提升必备。

## 22.计算机组成原理

> 计算机基础课，非科班学生提升必备。

## 23.程序员英语

>因为经常会看一些英文的文档，四级水平时一定要达到的。

## 24.写作能力

>即使不做自媒体，写文档的能力也要培养起来。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011234814505.png)

## 25.演讲能力

>千万不要小瞧了这个能力，升职答辩，年终述职必备。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011234919963.png)

## 26.管理能力

>不可能搞一辈子技术的，总要带团队，走管理路线。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211011234940714.png)

# 配套资料

## 电子书

### 1.Java核心技术卷一、二

>全书共14章，包括Java基本的程序结构、对象与类、继承、接口与内部类、图形程序设计、事件处理、Swing用户界面组件、部署应用程序和Applet、异常日志断言和调试、叙述方式深入浅出，并包含大量示例，从而帮助读者充分理解Java语言以及Java类型库的相关特性。

<img src="https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/webp-20211011235251907" alt="img" style="zoom: 67%;" />



### 2.深入理解Java虚拟机

附带读书笔记。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NreWxpYmlhbw==,size_16,color_FFFFFF,t_70.png)



### 3.java并发编程的艺术

>《Java并发编程的艺术》内容涵盖Java并发编程机制的底层实现原理、Java内存模型、Java并发编程基础、Java中的锁、并发容器和框架、原子类、并发工具类、线程池、Executor框架等主题，每个主题都做了深入的讲解，同时通过实例介绍了如何应用这些技术。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211012000736789.png)



### 4.阿里巴巴Java开发手册

>《阿里巴巴Java开发手册》是阿里内部Java工程师所遵循的开发规范，涵盖编程规约、单元测试规约、异常日志规约、MySQL规约、工程规约、安全规约等，这是近万名阿里Java技术精英的经验总结，并经历了多次大规模一线实战检验及完善。这是阿里回馈给Java社区的一份礼物，希望能够帮助企业开发团队在Java开发上更高效、容错、有协作性，提高代码质量，降低项目维护成本。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211012001624545.png)

### Redis 深度历险：核心原理与应用实践

>《Redis 深度历险：核心原理与应用实践》分为基础和应用篇、原理篇、集群篇、拓展篇、源码篇共 5 大块内容。基础和应用篇讲解对读者来说最有价值的内容，可以直接应用到实际工作中；原理篇、集群篇让开发者透过简单的技术表面看到精致的底层世界；拓展篇帮助读者拓展技术视野和夯实基础，便于进阶学习；源码篇让高阶的读者能够读懂源码，掌握核心技术实力。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211012001809315.png)

### Apache Kafka实战

>**《Apache Kafka实战》**是一本涵盖Apache Kafka各方面的具有实践指导意义的工具书和参考书。作者结合典型的使用场景，对Kafka整个技术体系进行了较为全面的讲解，以便读者能够举一反三，直接应用于实践。同时，本书还对Kafka的设计原理及其流式处理组件进行了较深入的探讨，并给出了翔实的案例。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211012002232922.png)

## 视频

### 1.零基础入门

![image-20211012001250513](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211012001250513.png)

### 2.JVM

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211012001357494.png)

### 3.SpringCloud

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211012001436040.png)

### 4.程序员一条

>就是我啦，即将更新，哈啊哈哈！

## 面试集

### 一条整理

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211012002731406.png)

### 204道全路线面试题合集

[204道全路线面试题合集](https://blog.csdn.net/skylibiao/article/details/120258651)

### Java核心知识点

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20211012002438793.png)



