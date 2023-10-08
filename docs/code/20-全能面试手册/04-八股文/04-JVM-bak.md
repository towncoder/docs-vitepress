

>夜宵摊上吹吹牛，我和这座城市成了朋友——北漂老李
>



## 前言

哈喽，大家好，我是一条。

可能有人很奇怪我为什么一直写java面试的文章，是接了广告吗？

也有人觉得面试题就是“八股文”，根本体现不了一个人的技术水平，甚至觉得写“八股文”很`low`，包括C站官方也有这方面倾向。

原力计划每周都会评选优质文章，我写的面试题热榜前三也未能入榜，原因是缺乏技术性。

可我为什么还是在写？今天回答一下大家。

**第一**，我想为每一个为梦想时刻准备着的“有心人”，尽一份自己的力量，提供高质量的 Java 面试题清单。

**第二**，作为一个从外包进入大厂的人，我受到过“八股文”的红利，我不觉得写面试题很low，确实面试无法看出一个人技术水平的高低，但是，

**你不得不承认现在各大厂都是靠八股文+算法选拔人才**

**你不得不承认有无数人靠着看面试题进入了大厂**

**你不得不承认即使技术很强，不看面试题一样可能进不了大厂**

<font color=orange><b>所以，对于想进大厂的朋友，我能帮一个是一个，我会一直写下去，即使不能上榜。</b></font>

**第三**，其实目前市面上的面试题鱼龙混杂非常多，一个问题都可能有两种答案，「检索+去重+比对」就占据了大量时间，**为了让想学习的兄弟少走弯路**，我想整理一套高质量覆盖全路线的面试题集，让大家面试看我一个人的文章就够了。

一条根据多家公司的面试检验，将高频面试题分门别类的总结出来，包括<font color=orange>[java基础篇](https://blog.csdn.net/skylibiao/article/details/119532816?spm=1001.2014.3001.5502)、[javaweb篇](https://blog.csdn.net/skylibiao/article/details/119782272?spm=1001.2014.3001.5502)、[集合篇](https://blog.csdn.net/skylibiao/article/details/119925943)、jvm篇、多线程篇、框架篇、设计模式篇、数据结构篇、网络篇、操作系统篇、mysql篇、redis篇、kafka篇、ES篇、dubbo篇。Spring cloud篇、企业项目篇</font>，由浅入深，到时有可能还会增加。

将全部收录于[《技术专家修炼》](https://blog.csdn.net/skylibiao/category_11116786.html?spm=1001.2014.3001.5482)专栏，分为搞技术，进大厂，聊人生三个模块，一栏更比三栏强！

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/iShot2021-08-05 18.02.50.png)

当然光有八股文是不够的，一条还准备了<font color=red><b>「算法」</b></font>刷题

📚[《leetcode 300题》](https://blog.csdn.net/skylibiao/category_10867560.html?spm=1001.2014.3001.5482)——每天一道算法题，进大厂必备

📚[《糊涂算法》](https://blog.csdn.net/skylibiao/category_11292502.html?spm=1001.2014.3001.5482)——数据结构+算法全面讲解

凡事预则立，不预则废。

能读到这里的人，我相信你是不甘于平庸的人，是这个世界上的<font color=green><b>「有心人」</b></font>，是愿意为了自己的未来拼一把的人，

<font color=red>⭐如果我说对了，请<a href="#jump99">点击此处跳到末尾</a>加入学习计划</font>

我在此承诺，在你们成神的路上，全部无偿提供帮助！

## 本文特别之处

>现在网络的面试题资源可以说数不胜数，但也良莠不齐。
>
>那么，博主总结的有哪些特别之处呢？

### 选题

#### 以战养战

相比于逐个知识点的去讲解，一条更偏向于用面试题的方式呈现，原因如下：

- 节省时间，有很多朋友都是面试前临时抱佛脚，从`helloworld`开始讲，根本来不及好吗
- 重点突出，有些东西面试官是不会问的，也没法问，暂时就可以不看
- 转换思维，最重要的一点，有很多时候这个东西你知道，但一问就不会，有没有，有的评论区扣1

#### 经验之谈

关于选题，java的知识点又多又杂，技术更新又很快。所以明白以下几点很重要：

- 很多技术已经淘汰，所以就没必要再去看。

- 有些技术是当下正火，面试官特别爱问。

- 有些知识点之间存在关联关系，问完这个必问那个。

一条凭借面试了10多家大厂的经验总结最高频的知识点，让你不做无用功，事半功倍！

### 解答

- 文章中大部分题目都是在面试中真实被问到的，会标明出处。
- 对知识点的讲解都尽量简单，用生活中的小事举例说明。
- 除了知识点讲解，还会说明这道题的考点是哪，怎么回答更加分。
- 会从一道题延伸出多道题，理清关联关系，题目的顺序都是精心排列，由浅入深。

## 题目合集

>相比于逐个知识点的去讲解，一条更偏向于用面试题的方式呈现，原因如下：
>
>- 节省时间，有很多朋友都是面试前临时抱佛脚，从`helloworld`开始讲，根本来不及好吗
>- 重点突出，有些东西面试官是不会问的，也没法问，暂时就可以不看
>- 转换思维，最重要的一点，有很多时候这个东西你知道，但一问就不会，有没有，有的评论区扣1
>
>ok，我们看题

[toc]

### 考试范围

>**导图源文件**
>
>链接: https://pan.baidu.com/s/1G3JajP83-IS4pDANrV2hOw 提取码: 6ak1 

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918122834227.png)

### 考点解析

>JVM是Java Virtual Machine的缩写，即Java虚拟机，正是引入Java语言虚拟机后，Java语言在不同平台上运行时不需要重新编译，成为可以跨平台使用的编程语言。JVM可以说是Java经久不衰的一大根本，面试必问，且必会，精通JVM绝对会给你大大加分。
>
>详细学习推荐**周志明老师的《深入理解Java虚拟机》**一书。（需要电子版的朋友可以[<font color=red><b>点此跳转到文末</b></font>]((#jump99))点击**小卡片**关注后回复**「JVM」**获取最新版，附带如下学习笔记）
>



![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NreWxpYmlhbw==,size_16,color_FFFFFF,t_70.png)

### 

### 如何理解JVM

Java程序的跨平台特性主要是指**字节码文件**可以在任何具有Java虚拟机的计算机或者电子设备上运行，Java虚拟机中的Java解释器负责将字节码文件解释成为特定的机器码进行运行。

JVM是JRE的一部分。它是一个虚构出来的计算机，是通过在实际的计算机上仿真模拟各种计算机功能来实现的。JVM有自己完善的硬件架构，如处理器、堆栈、寄存器等，还具有相应的指令系统。Java语言最重要的特点就是跨平台运行。使用JVM就是为了支持与操作系统无关，实现跨平台。JVM 是运行在操作系统上的，与硬件没有直接的交互。

![img](https://img-blog.csdnimg.cn/20201203172815603.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NreWxpYmlhbw==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

#### 补充知识1：什么是JRE和JDK？

jre：**JRE(Java Runtime Enviroment)是Java的运行环境**。面向Java程序的使用者，而不是开发者。如果你仅下载并安装了JRE，那么你的系统只能运行Java程序。JRE是运行Java程序所必须环境的集合，包含JVM标准实现及 Java核心类库。它包括Java虚拟机、Java平台核心类和支持文件。它不包含开发工具(编译器、调试器等)。

jdk：**JDK(Java Development Kit)**又称J2SDK(Java2 Software Development Kit)，是Java开发工具包，它提供了Java的开发环境(提供了编译器javac等工具，用于将java文件编译为class文件)和运行环境(提 供了JVM和Runtime辅助包，用于解析class文件使其得到运行)。如果你下载并安装了JDK，那么你不仅可以开发Java程序，也**同时拥有了运行Java程序的平台**。JDK是整个Java的核心，包括了Java运行环境(JRE)，一堆Java工具tools.jar和Java标准类库 (rt.jar)。

#### 补充知识2：编译和运行Java文件的命令

准备代码

```java
public class A { 
    public static void main(String[] args) { 
        System.out.println("abc");
    }
}
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

命令

```
javac x.java
java x
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

 ![img](https://img-blog.csdnimg.cn/20201203183110942.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NreWxpYmlhbw==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)



### JVM的体系架构

> JVM体系结构如下图所示，将按照从上到下的顺序讲解![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918171634375.png)

### 类装载器classloader

> 负责将class文件的**字节码**内容加载到内存中并将这些内容转换成**方法区**中的运行时数据结构，class文件在文件开头有特定标识（cafe babe：Java图标——咖啡和橡树）。
>
> 通俗来讲：classloader相当于**快递员**的作用，只负责加载，至于是否能运行，由Execution Engine决定

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918172444492.png)

 

####   有几个类装载器？

> 准确说有四个，三个虚拟机自带的：
>
> 启动类加载器:（Bootstrap c++ ）负责加载存放在JDK\jre\lib(JDK代表JDK的安装目录，下同)下，或被-Xbootclasspath参数指定的路径中的，并且能被虚拟机识别的类库（如rt.jar，所有的java.*开头的类均被Bootstrap ClassLoader加载）。启动类加载器是无法被Java程序直接引用的。
>
> 扩展类加载器：(Extension Java ）它负责加载DK\jre\lib\ext目录中，或者由java.ext.dirs系统变量指定的路径中的所有类库（如javax.*开头的类），开发者可以直接使用扩展类加载器。
>
> 应用程序类加载器：(AppClassLoader) 它负责加载用户类路径（ClassPath）所指定的类，开发者可以直接使用该类加载器，如果应用程序中没有自定义过自己的类加载器，一般情况下这个就是程序中默认的类加载器。
>
> 一个用户自定义的：Java.lang.ClassLoader

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918172836574.png)

####  双亲委派机制

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

#### 沙箱安全机制

**主要是防止恶意代码污染java源代码，**比如定义了一个类名为String所在包为java.lang，因为这个类本来是属于jdk的，如果没有沙箱安全机制的话，这个类将会污染到我所有的String,但是由于沙箱安全机制，所以就委托顶层的bootstrap加载器查找这个类，如果没有的话就委托extsion,extsion没有就到appclassloader，但是由于String就是jdk的源代码，所以在bootstrap那里就加载到了，先找到先使用，所以就使用bootstrap里面的String,后面的一概不能使用，这就保证了不被恶意代码污染。

###  运行时数据区

> 运行时数据区：主要包括：方法区，堆，Java栈，PC寄存器，本地方法栈
>
> 方法区和堆由所有线程共享;Java栈,本地方法栈和PC寄存器由线程独享。

### java栈

> 主要存储**8种基本数据类型+对象的引用变量+实例方法。**当在一段代码块定义一个变量时，Java就在栈中为这个变量分配内存空间，当超过变量的作用域后，Java会自动释放掉为该变量所分配的内存空间，该内存空间可以立即被另作他用。**栈的大小与JVM的实现有关，通常在256k-756k之间。**当栈被压满，会报**StackOverflowError错误 ，**不是异常，最简单的实现是**递归死循环。**
>
> 栈内存在线程创建时创建，跟随线程的生命周期，**不存在垃圾回收，是私有的。**

**虚拟机只会直接对Javastack执行两种操作：以帧为单位的压栈或出栈，按照后进先出的顺序。**

每个栈帧代表一个方法，Java方法有两种返回方式，return和抛出异常，两种方式都会导致该方法对应的帧出栈和释放内存。

**栈帧的组成：**

本地变量：输入参数，输出参数以及方法内的变量。

栈操作：记录出栈，入栈的操作。

栈帧数据：类文件，方法等。

### 本地方法栈（native）

> **保存native方法进入区域的地址**，如某个JVM实现的本地方法不是用Java编写，比如某线程在调用本地方法时，就进入了一个不受JVM限制的领域，该方法被**native**关键字修饰。

new 线程类

```java
 Thread t=new Thread();
 t.start();
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

 进入start（）方法

```java
public synchronized void start() {
        /**
         * This method is not invoked for the main method thread or "system"
         * group threads created/set up by the VM. Any new functionality added
         * to this method in the future may have to also be added to the VM.
         *
         * A zero status value corresponds to state "NEW".
         */
        if (threadStatus != 0)
            throw new IllegalThreadStateException();

        /* Notify the group that this thread is about to be started
         * so that it can be added to the group's list of threads
         * and the group's unstarted count can be decremented. */
        group.add(this);

        boolean started = false;
        try {
            start0();
            started = true;
        } finally {
            try {
                if (!started) {
                    group.threadStartFailed(this);
                }
            } catch (Throwable ignore) {
                /* do nothing. If start0 threw a Throwable then
                  it will be passed up the call stack */
            }
        }
    }
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

再找到start0（）方法，看到被native修饰，说明java已经无能为力。

```java
private native void start0();
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### 程序计数器

程序计数器（Program Counter Register）是一块较小的内存空间，**存储指向下一条指令的地址**，它的作用可以看做是当前线程所执行的字节码的**行号指示器**。字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。 由于Java虚拟机的多线程是通过线程轮流切换并分配处理器执行时间的方式来实现的，在任何一个确定的时刻，一个处理器（对于多核处理器来说是一个内核）只会执行一条线程中的指令。因此，为了线程切换后能恢复到正确的执行位置，**每条线程都需要有一个独立的程序计数器**，各条线程之间的计数器互不影响，独立存储，我们称这类内存区域为“线程私有”的内存。如果线程正在执行的是一个Java方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；如果正在执行的是Natvie方法，这个计数器值则为Undefined。此内存区域是唯一一个在Java虚拟机不会发生内存溢出错误的区域。

简单来说，相当于班级内的之日排班表。

### 方法区

 **存储每一个类的结构信息，**例如运行时常量池，字段和方法数据，构造函数和普通方法的字节码内容。简单来说就时类的实例化模板。

例如王者荣耀的每个英雄出生时都有生命，攻击力等数值，都有走路，攻击等方法。

### 堆

> Java堆（Java Heap）是Java虚拟机所管理的内存中最大的一块，大小可调节。
>
> Java堆是被所有线程共享的一块内存区域，在虚拟机启动时创建。此内存区域的唯一目的就是存放**对象实例**，几乎所有的对象实例都在这里分配内存。Java堆是垃圾收集器管理的主要区域，因此很多时候也被称做“GC堆”。如果从内存回收的角度看，由于现在收集器基本都是采用的分代收集算法，所以Java堆中还可以细分为：新生代和老年代；再细致一点的有Eden空间、From Survivor空间、To Survivor空间等。根据Java虚拟机规范的规定，Java堆可以处于物理上不连续的内存空间中，只要逻辑上是连续的即可，就像我们的磁盘空间一样。在实现时，既可以实现成固定大小的，也可以是可扩展的，不过当前主流的虚拟机都是按照可扩展来实现的（通过-Xmx和-Xms控制）。如果在堆中没有内存完成实例分配，并且堆也无法再扩展时，将会抛出OutOfMemoryError异常。

**堆内存逻辑**

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918173636298.png)

Java虚拟机将堆内存划分为新生代、老年代和永久代，永久代是HotSpot虚拟机特有的概念（JDK1.8之后为**元空间**替代永久代），它采用永久代的方式来实现方法区，其他的虚拟机实现没有这一概念，而且HotSpot也有取消永久代的趋势，在JDK 1.7中HotSpot已经开始了“去永久化”，把原本放在永久代的字符串常量池移出。永久代主要存放常量、类信息、静态变量等数据，与垃圾回收关系不大，新生代和老年代是垃圾回收的主要区域。

具体在垃圾回收讲。

### **栈+堆+方法区的交互关系** 

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918174504440.png)

HotSpot是使用指针的方式来访问对象；

![img](https://img-blog.csdnimg.cn/20201203231946939.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

java堆中会存放访问类模板的地址；

reference存储的直接就是对象的地址；

### 堆与栈的对比

> **一句话：栈管运行，堆管存储**

栈内存:栈内存首先是一片内存区域，存储的都是局部变量，凡是定义在方法中的都是局部变量（方法外的是全局变量），for循环内部定义的也是局部变量，是先加载函数才能进行局部变量的定义，所以方法先进栈，然后再定义变量，变量有自己的作用域，一旦离开作用域，变量就会被释放。栈内存的更新速度很快，因为局部变量的生命周期都很短。

堆内存:存储的是数组和对象（其实数组就是对象），凡是new建立的都是在堆中，堆中存放的都是实体（对象），实体用于封装数据，而且是封装多个（实体的多个属性），如果一个数据消失，这个实体也没有消失，还可以用，所以堆是不会随时释放的，但是栈不一样，栈里存放的都是单个变量，变量被释放了，那就没有了。堆里的实体虽然不会被释放，但是会被当成垃圾，Java有垃圾回收机制不定时的收取。

> **实例讲解**

比如主函数里的语句  

```java
 int [] arr=new int [3];
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**内存中的定义过程**

主函数先进栈，在栈中定义一个变量arr,接下来为arr赋值，但是右边**不是一个具体值，是一个实体。实体创建在堆里**，在堆里首先通过new关键字开辟一个空间，内存在存储数据的时候都是通过地址来体现的，地址是一块连续的二进制，然后给这个实体分配一个**内存地址**。数组都是有一个索引，数组这个实体在堆内存中产生之后每一个空间都会进行**默认的初始化**（这是堆内存的特点，未初始化的数据是不能用的，但在堆里是可以用的，因为初始化过了，但是在栈里没有），不同的类型初始化的值不一样。所以堆和栈里就创建了变量和实体：

​                         ![img](https://img-blog.csdn.net/20170427194056991)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**堆和栈如何联系起来**

我们刚刚说过给堆分配了一个地址，把堆的地址赋给arr，arr就通过地址指向了数组。所以arr想操纵数组时，就通过地址，而不是直接把实体都赋给它。这种我们不再叫他基本数据类型，而叫引用数据类型。称为arr引用了堆内存当中的实体。（可以理解为c或c++的指针，Java成长自c++和c++很像，优化了c++）                                 ![img](https://img-blog.csdn.net/20170427194553696)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

如果当**int [] arr=null**;arr不做任何指向，null的作用就是取消引用数据类型的指向。当一个实体，没有引用数据类型指向的时候，它在堆内存中**不会被释放，而被当做一个垃圾**，在不定时的时间内自动回收，因为Java有一个**自动回收机制**，（而c++没有，需要程序员手动回收，如果不回收就越堆越多，直到撑满内存溢出，所以Java在内存管理上优于c++）。自动回收机制（程序）自动监测堆里是否有垃圾，如果有，就会自动的做垃圾回收的动作，但是什么时候收不一定。

**总结：**

1. 栈内存存储的是局部变量而堆内存存储的是实体；
2. 栈内存的更新速度要快于堆内存，因为局部变量的生命周期很短；
3. 栈内存存放的变量生命周期一旦结束就会被释放，而堆内存存放的实体会被垃圾回收机制不定时的回收。

### 执行引擎

> 执行引擎是Java虚拟机核心的组成部分之一。
>
> “虚拟机”是一个相对于“物理机”的概念，这两种极其都有代码执行能力，其区别是物理机的执行引擎是直接建立在处理器、缓存、指令集和操作系统层面的，而虚拟机的执行引擎则是由软件自行实现的，因此可以不受物理条件制约地定制指令集与执行引擎的结构体系，能够执行那些不被硬件直接支持的指令集格式。
>
> JVM的主要任务是负责装载字节码到其内部，但字节码并不能够直接运行在操作系统之上，因为字节码指令并非等价于本地机器指令，它内部包含的仅仅只是一些能够被JVM所识别的字节码指令、符号表，以及其他辅助信息。
>
> 那么，如果想要让一个Java程序运行起来，执行引擎的任务就是**将字节码指令解释/编译为对应平台上的本地机器指令**才可以。简单来说，JVM中的执行引擎充当了将高级语言翻译为机器语言的译者。

###  本地方法接口

- 简单来讲，**一个Native Method就是一个java调用非java代码的接口**，一个Native Method 是这样一个java方法：该方法的底层实现由非Java语言实现，比如C。这个特征并非java特有，很多其他的编程语言都有这一机制，比如在C++ 中，你可以用extern “C” 告知C++ 编译器去调用一个C的函数。
- 在定义一个native method时，并不提供实现体（有些像定义一个Java interface），因为其实现体是由非java语言在外面实现的。
- 本地接口的作用是融合不同的编程语言为java所用，它的初衷是融合C/C++程序。
- 标识符native可以与其他所有的java标识符连用，但是abstract除外。

### 垃圾回收

>垃圾回收是重点难，先理解了垃圾回收，才能理解调优的思路。

#### 判断垃圾

>判断是否是垃圾共有两种方法。引用计数法和可达性分析

#####  引用计数法

非常好理解，**引用一次标记一次**，没有被标记的就是垃圾。

在堆中存储对象时，在对象头处维护一个`counter`计数器，如果一个对象增加了一个引用与之相连，则将`counter++`。

如果一个引用关系失效则`counter--`。如果一个对象的counter变为0，则说明该对象已经被废弃，不处于存活状态，此时可以被回收。

##### 引用计数的缺点

- 效率低
- 无法分析循环引用问题

##### 可达性分析

类似**树**的树结构，从根结点出发，即GC root，把有关系的对象用一颗树链接起来

那么我们遍历这棵树，没遍历到的对象，就是垃圾

##### 有哪些可以做GC Roots的对象？

- 虚拟机栈(栈桢中的本地变量表)中的引用的对象
- 方法区中的类静态属性引用的对象
- 方法区中的常量引用的对象
- 本地方法栈中JNI（Native方法）的引用的对象



#### 回收算法

>回收算法是垃圾回收的思想，回收器是垃圾回收的实现

##### 标记-清除

两次遍历：

- 标记垃圾
- 清除垃圾

优点：

- 不需要格外空间，适合回收对象较少的区域

缺点：

- 效率低，遍历两次，时间复杂度O(n^2)
- 会有线程停顿，`stop the world (STW)`
- 空间碎片，因为垃圾可能不是连续的，大量的空间碎片会导致提前GC，这也是最主要的问题。

##### 标记-复制

将空间分为相等大小的两部分，每次只使用其中的一块。当这一块的内存用完了，就将还存活着的对象复制到另外一块上面，然后再把已使用的内存空间一次清理掉，这样一来就不容易出现内存碎片的问题。牺牲空间解决碎片问题。

优点：

- 高效无碎片

缺点：

- 占用大量空间

##### 标记-整理

同样是为了解决空间碎片提出，区别是通过牺牲时间的方式。

和标记-清除类似，不一样的是在完成标记之后，它不是直接清理可回收对象，而是将存活对象都向一端移动，然后清理掉端边界以外的内存。

优点：

- 解决空间碎片的问题
- 不浪费空间

缺点：

- 相对比较耗时

#### 回收器

>回收器是回收算法的具体实现，并遵循**分代回收**的思想。

##### Serial

它为单线程环境设计，且只使用一个线程进行垃圾回收，会暂停所有的用户线程，所以不适合服务器环境

##### ParNew

同样需要暂停用户线程，但使用多个线程同时进行垃圾回收

##### Parallel Scavenge

用户线程不需要暂停，交替执行，互联网公司使用

##### Parallel Old

同`Parallel Scavenge`,用在老年代

##### Serial Old

废弃

##### G1

>重难点，必知必会

化整为零的思想，面向局部收集的设计思路和面向region的内存的布局形式。

G1算法将堆划分为若干个区域（Region），它仍然遵循分代回收思想。

不过，这些区域的一部分包含新生代，新生代的垃圾收集依然采用暂停所有应用线程的方式，将存活对象拷贝到老年代或者Survivor空间。

老年代也分成很多区域，G1收集器通过将对象从一个区域复制到另外一个区域，完成了清理工作。

这就意味着，在正常的处理过程中，G1完成了堆的压缩（至少是部分堆的压缩），这样也就不会有cms内存碎片问题的存在了。

如果一个对象占用的空间超过了分区容量50%以上，G1收集器就认为这是一个巨型对象。这些巨型对象，默认直接会被分配在年老代，但是如果它是一个短期存在的巨型对象，就会对垃圾收集器造成负面影响。为了解决这个问题，G1划分了一个Humongous区，它用来专门存放巨型对象。

**回收步骤**

- 初始标记：在此阶段，G1 GC 对根进行标记。该阶段与常规的 (STW) 年轻代垃圾回收密切相关。
- 根区域扫描：G1 GC 在初始标记的存活区扫描对老年代的引用，并标记被引用的对象。该阶段与应用程序（非 STW）同时运行，并且只有完成该阶段后，才能开始下一次 STW 年轻代垃圾回收。
- 并发标记：G1 GC 在整个堆中查找可访问的（存活的）对象。该阶段与应用程序同时运行，可以被 STW 年轻代垃圾回收中断
- 最终标记：该阶段是 STW 回收，帮助完成标记周期。G1 GC 清空 SATB 缓冲区，跟踪未被访问的存活对象，并执行引用处理。
- 清除垃圾：在这个最后阶段，G1 GC 执行统计和 RSet 净化的 STW 操作。在统计期间，G1 GC 会识别完全空闲的区域和可供进行混合垃圾回收的区域。清理阶段在将空白区域重置并返回到空闲列表时为部分并发。

##### ZGC

ZGC 和 G1 一样是基于 reigon 的，几乎所有阶段都是并发的，整堆扫描，部分收集。

它的目标是低延迟，保证最大停顿时间在几毫秒之内，不管你堆多大或者存活的对象有多少。、

ZGC 一共分了 10 个阶段，只有 3 个很短暂的阶段是 STW 的。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/9358d109b3de9c82747afab5a006800319d84379.png)



### JVM调优



>JVM调优一直是难点中的难点，需要实战练习，建议买个服务器，自己鼓捣一下。
>
>本文主要介绍以下理论
>
>- 常用参数
>- 内存溢出
>- 内存泄漏
>- 调优工具
>- 引用类型

##### 常用参数

-Xms2g：初始化推大小为 2g；

-Xmx2g：堆最大内存为 2g；

-XX:NewRatio=4：设置年轻的和老年代的内存比例为 1:4；

-XX:SurvivorRatio=8：设置新生代 Eden 和 Survivor 比例为 8:2；

–XX:+UseParNewGC：指定使用 ParNew + Serial Old 垃圾回收器组合；

-XX:+UseParallelOldGC：指定使用 ParNew + ParNew Old 垃圾回收器组合；

-XX:+UseConcMarkSweepGC：指定使用 CMS + Serial Old 垃圾回收器组合；

-XX:+PrintGC：开启打印 gc 信息；

-XX:+PrintGCDetails：打印 gc 详细信息。

##### 内存溢出

>通俗理解就是内存不够,简称分为栈溢出和堆溢出（sof/oom）

引起内存溢出的原因：

- 内存中加载的数据量过于庞大，如一次从数据库取出过多数据；
- 代码中存在死循环或循环产生过多重复的对象实体
- 启动参数内存值设定的过小

##### 内存泄漏

>其实说白了就是该内存空间使用完毕之后未回收即所谓内存泄漏

引起内存泄漏的原因：

- 单例对象
- 静态对象
- 集合类中有对对象的引用，使用完后未清空，使得JVM不能回收



##### 调优工具

> JDK 自带了很多监控工具，都位于 JDK 的 bin 目录下，其中最常用的是 jconsole 和 jvisualvm 这两款视图监控工具。

jconsole：用于对 JVM 中的内存、线程和类等进行监控；

jvisualvm：JDK 自带的全能分析工具，可以分析：内存快照、线程快照、程序死锁、监控内存的变化、gc 变化等。

##### 引用类型

- 强引用：发生 gc 的时候不会被回收。

- 软引用：有用但不是必须的对象，在发生内存溢出之前会被回收。

- 弱引用：有用但不是必须的对象，在下一次GC时会被回收。

- 虚引用（幽灵引用/幻影引用）：无法通过虚引用获得对象，用 PhantomReference 实现虚引用，虚引用的用途是在 gc 时返回一个通知。

-----



以上就是关于JVM部分总结出的面试题，如果哪里有问题，欢迎大家交流评论！

**下期文章预告：面试10多家中大厂的万字总结——❤️JUC篇❤️**

<span id="jump99"></span>

## 最后

>⭐今天是坚持刷题更文的第**64**/100天
>
>⭐各位的<font color=orange>点赞、关注、收藏、评论、订阅</font>就是一条创作的最大动力
>
>⭐更多面试题欢迎关注专栏[《大厂面试突击》](https://blog.csdn.net/skylibiao/category_10536663.html)

为了回馈各位粉丝，礼尚往来，给大家准备了一条多年积累下来的优质资源，包括<font color=orange> 学习视频、面试资料、珍藏电子书等</font>

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210728234254025.png)

<font color=red size=5>需要的小伙伴可以点「下方卡片」👇👇👇关注后回复「资料」领取</font>

