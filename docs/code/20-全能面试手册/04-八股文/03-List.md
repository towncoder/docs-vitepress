对线10多家中大厂面试官后我悟出这篇「集合」面试万字秘籍（建议收藏）

<font color=red>⭐欢迎订阅[《大厂面试突击》](https://blog.csdn.net/skylibiao/category_10536663.html)专栏，面试10多家大厂总结出的高频面试知识，免费阶段大家赶快订阅</font>

⭐[更多精品专栏简介点这里](https://blog.csdn.net/skylibiao/article/details/119297018?spm=1001.2014.3001.5502)

<font color=red>⭐更多java面试学习资料，看左侧关于作者或者私信「资料」获取</font>

>幸福，不是长生不老，不是大鱼大肉，不是权倾朝野。幸福是每一个微小的生活愿望达成。当你想吃的时候有得吃，想被爱的时候有人来爱你。
>

## 前言

哈喽，大家好，我是一条。

告诉大家一个消息，我在7月份又离职了，离职后我开始疯狂的面试，一共面了<font color=orange>百度、字节、滴滴、美团、陌陌、58同城、汽车之家、元气森林、猿辅导，掌阅科技，美术宝、moka等10多家中大厂</font>，最多的时候一天4面。

![iShot2021-08-05 18.02.50](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/iShot2021-08-05 18.02.50.png)

面完之后我发现大厂对于算法的重视程度非常之高，算法题没做出来，基本就不会再往下问了，你“八股文”再溜也没有展现的机会。

所以我开始刷leetcode，每天一道，放在了[《leetcode》](https://blog.csdn.net/skylibiao/category_10867560.html?spm=1001.2014.3001.5482)专栏里，趁着还没有收费，大家可以抓紧订阅一波。

但算法非一日之功可成，我们的“八股文”也不能落下。

一条根据多家公司的面试检验，将高频面试题分门别类的总结出来，包括<font color=orange>[java基础篇](https://blog.csdn.net/skylibiao/article/details/119532816?spm=1001.2014.3001.5502)、[javaweb篇](https://blog.csdn.net/skylibiao/article/details/119782272?spm=1001.2014.3001.5502)、集合篇、jvm篇、多线程篇、框架篇、设计模式篇、数据结构篇、网络篇、操作系统篇、mysql篇、redis篇、kafka篇、ES篇、dubbo篇。Spring cloud篇、企业项目篇</font>，由浅入深，到时有可能还会增加。

所有文章都会放在[《大厂面试突击》](https://blog.csdn.net/skylibiao/category_10536663.html?spm=1001.2014.3001.5482)专栏里，以后会收费，所以请大家现在抓紧订阅。

目前已经更新完基础和Web篇

[【一起去大厂】面试10多家中大厂后的万字总结——java基础篇（建议收藏）](https://blog.csdn.net/skylibiao/article/details/119532816)

[【爆肝一周】面试10多家中大厂后的万字总结——❤️JavaWeb篇❤️（建议收藏）](https://blog.csdn.net/skylibiao/article/details/119782272?spm=1001.2014.3001.5502)

本期是❤️集合篇❤️

相比于前两道小菜，集合可以说是第一道正菜，其中`hashmap`更是面试必问，所以小伙伴们一定要认真看完，本文提到的内容全部都要烂熟于心，方才有了迈进大厂门槛的资格。


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

[toc]

>还记得大学每次考试前老师都会说一下考点和考试范围，这才得以不挂科。所以一条这篇万字秘籍，也从「考试范围」和「考点解析」开始。

### 考试范围

>集合主要继承与`collection`和`Map`两个接口。标注为<font color=orange>这个颜色</font>的为高频重点。
>

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210824181717632.png)



![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210824181807808.png)

### 考点解析

>虽然集合的种类很多，但考点不多，能问的就那几个方向，准备起来就很容易了。
>

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210824192145965.png)

### ArrayList

>相信大家都不陌生吧，不知道一天要`new`多少遍的家伙。关于它的问题你都能答对吗？

#### 底层由什么组成？有什么特点？

超高频，必会

>由什么组成，我说了不算，面试官说了也不算，看源码。怎么看呢？
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

❤️关于数组、链表等其他数据结构及算法，会在[《糊涂算法》](https://blog.csdn.net/skylibiao/category_11292502.html?spm=1001.2014.3001.5482)专栏更新。敬请期待！

#### 如何扩容的？

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

#### 为什么扩容是1.5倍？

>面试官问你这个问题，是要判断你是否自己读过源码，他希望你有自己的思考在里面，而不是背的面试题。
>
>不过不用担心，一条都为你想到了。

- 如果大于1.5，也就是每次扩容很多倍，但其实我就差一个元素的空间，造成了空间浪费。
- 如果小于1.5，扩容的意义就不大了，就会带来频繁扩容的问题。

所以，`1.5`是均衡了空间占用和扩容次数考虑的。

#### 线程安全吗？

必会

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

#### 多线程下使用怎么保证线程安全？

必须会，背也得给我背下来

>保证线程安全的思路很简单就是加锁，但是你可没办法修改源码去加个锁，但是你想想编写`java`的大佬会想不到线程安全问题？
>
>早就给你准备了线程安全的类。

##### Vector

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

##### Collections

注意是`Collections`而不是`Collection`。

`Collections`位于`java.util`包下，是集合类的工具类，提供了很多操作集合类的方法。其中`Collections.synchronizedList(list)`可以提供一个线程安全的`List`。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210825120328827.png)

对于Map、Set也有对应的方法

##### CopyOnWrite（写时复制）

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

#### 底层由什么组成？有什么特点？

必问

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

#### 如何解决查询慢的问题？

出自猿辅导、元气森林

>这题答对了是可以加分的哦！

如果我查找的元素在尾部，则需要遍历整个链表，所以有了双端链表。

即使不在尾部，我如果只能一个方向遍历，也很麻烦，所以有了双向队列，牺牲空间换时间。

那么空间可不可以再牺牲一点？

可以，就是跳跃链表，简称「跳表」。

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210825192904787.png)

通过建立多级索引来加快查询速度。

#### 线程安全吗

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

#### 如何解决线程不安全问题？

##### ConcurrentLinkedQueue

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

##### Collections

和`ArrayList`一样，使用`Collections.synchronizedList()`。


Map：存储双列数据的集合，通过键值对存储数据，存储 的数据是无序的，Key值不能重复，value值可以重复



#### 和ArrayList对比一下

共同点：有序，可重复。线程不安全。

不同点：底层架构，查询和删改的速度

### HashSet

>可以加分的问题
>

#### 底层结构，有什么特点？

`HashSet`存储的是单列元素，但其底层是`HashMap`实现，不可思议吧，看源码：

```java
public HashSet() {
    map = new HashMap<>();
}
```

Map是存放双列元素的结构，可我们看到的`HashSet`却是单列的，怎么存的呢？

```java

    /**
     * Adds the specified element to this set if it is not already present.
     * More formally, adds the specified element <tt>e</tt> to this set if
     * this set contains no element <tt>e2</tt> such that
     * <tt>(e==null&nbsp;?&nbsp;e2==null&nbsp;:&nbsp;e.equals(e2))</tt>.
     * If this set already contains the element, the call leaves the set
     * unchanged and returns <tt>false</tt>.
     */
    public boolean add(E e) {
        return map.put(e, PRESENT)==null;
    }

   // Dummy value to associate with an Object in the backing Map
    private static final Object PRESENT = new Object();
```

通过源码不难发现，将要添加的值存为`key`,`value`存储的是`object`.

既然底层都是map了，肯定不可重复，无序。

#### 存在有序的HashSet吗

有的，就是`LinkedHashSet`。

LinkedHashSet是Set集合的一个实现，具有set集合不重复的特点，同时具有可预测的迭代顺序，也就是我们插入的顺序。

并且linkedHashSet是一个非线程安全的集合。如果有多个线程同时访问当前linkedhashset集合容器，并且有一个线程对当前容器中的元素做了修改，那么必须要在外部实现同步保证数据的幂等性（幂等性在Javaweb篇有讲解）。

看源码可以得到super一个父类初始化为一个容器为16大小，加载因子为0.75的Map容器。

```java

    /**
     * Constructs a new, empty linked hash set with the default initial
     * capacity (16) and load factor (0.75).
     */
    public LinkedHashSet() {
        super(16, .75f, true);
    }
```

#### 线程安全吗？

同样查看源码，线程不安全。

```java
    public boolean add(E e) {
        return map.put(e, PRESENT)==null;
    }
```

#### 如何解决不安全问题

和之前的类似，使用集合工具类，这里就不过多描述。`Collections.synchronizedSet()`

### TreeSet

>TreeSet是Set的子类，父类换了，和之前两个的差别还是比较大的。

#### 底层有什么组成？有什么特点？

`TreeSet`底层是`TreeMap`实现，后面后详细介绍`TreeMap`。

由于`Comparator`的存在，其元素实排好序的，排序规则可以自定义，可以重复（看如何重写`comparaTo()`方法）。

```java

    /**
     * Constructs a new, empty tree set, sorted according to the specified
     * comparator.  All elements inserted into the set must be <i>mutually
     * comparable</i> by the specified comparator.
     * 翻译
     * 所有元素在插入时都必须排序
     */
    public TreeSet(Comparator<? super E> comparator) {
        this(new TreeMap<>(comparator));
    }
```

和`HashMap`一样，将要添加的值存为`key`,`value`存储的是`object`.

```java
// Dummy value to associate with an Object in the backing Map
private static final Object PRESENT = new Object();
```

#### 可以存放不同类型的元素吗？

>是想考查对`Comparator`接口和`comparaTo()`的理解。

- 如果自定义类未实现`Comparator`接口并重写`comparaTo()`方法，会报`java.lang.ClassCastExection`异常
- 如果实现并重写了，可以存放

#### 可以存放`null`吗？

不可以！

因为`comparaTo()`方法为空值时会报空指针异常。

### Queue、Deque

>相对问的不多，但也要了解。

队列(queue)是一种常用的数据结构，可以将队列看做是一种特殊的线性表，该结构遵循的先进先出原则。Java中，LinkedList实现了Queue接口,因为LinkedList进行插入、删除操作效率较高。

双向队列(Deque),是Queue的一个子接口，双向队列是指该队列两端的元素既能入队(offer)也能出队(poll),如果将Deque限制为只能从一端入队和出队，则可实现栈的数据结构。对于栈而言，有入栈(push)和出栈(pop)，遵循先进后出原则。

`Queue`接口底下有以`ConcurrentLinkedQueue`为代表的高性能非阻塞队列，和以`BlockingQueue`接口为代表的阻塞队列。在线程池篇做详细讲解。

---

`Collection`接口已经聊完了，不知不觉又写了`12106`字，为了不让大家阅读疲劳，`HashMap`的知识也比较复杂，所以关于`Map`接口，我们下期再聊！

## 最后

>⭐今天是坚持刷题更文的第**43**/100天
>
>⭐各位的<font color=orange>点赞、关注、收藏、评论、订阅</font>就是一条创作的最大动力
>
>⭐更多面试题欢迎关注专栏[《大厂面试突击》](https://blog.csdn.net/skylibiao/category_10536663.html)

为了回馈各位粉丝，礼尚往来，给大家准备了一条多年积累下来的优质资源，包括<font color=orange> 学习视频、面试资料、珍藏电子书等</font>

<font color=red>需要的小伙伴请私信「资料」，记得先关注哦！</font>

