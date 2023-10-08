【leetcode刷题】33.最小的k个数——Java版

<font color=red>⭐欢迎订阅[《leetcode》](https://blog.csdn.net/skylibiao/category_10867560.html)专栏，每日一题，每天进步⭐</font>

>先找到第k小的数，然后遍历一遍数组，把所有比k小的数加入结果集。然后用这个数填充结果集，使结果集大小等于k。
>
>——leetcode此题热评

## 前言

哈喽，大家好，我是一条。

<font color=orange>糊涂算法，难得糊涂</font>

今天给大家推荐一位字节算法大佬，ACM队长——[「英雄哪里出来」](https://blog.csdn.net/whereisherofrom)

## Question

#### [剑指 Offer 40. 最小的k个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)

<font color=green>难度：简单</font>

>输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
>
>示例 1：
>
>```
>输入：arr = [3,2,1], k = 2
>输出：[1,2] 或者 [2,1]
>```
>
>示例 2：
>
>```
>输入：arr = [0,1,2,1], k = 1
>输出：[0]
>```
>
>
>限制：
>
>0 <= k <= arr.length <= 10000
>0 <= arr[i] <= 10000

## Solution

>该题是比较经典的TopK问题，解决的办法通常可以用快排、堆、二叉搜索树、计数排序。本文采用快速排序的方法，因为最高效。
>

快速排序：说白了就是给基准数据找其正确索引位置的过程.

根据快速排序原理，如果某次哨兵划分后 **基准数正好是第 k+1小的数字** ，那么此时基准数左边的所有数字便是题目所求的 **最小的 k 个数** 。


## Code

>所有`leetcode`代码已同步至[github](https://github.com/lbsys)
>
>欢迎`star`

```java
/**
 * @author yitiaoIT
 */
class Solution {
    public int[] getLeastNumbers(int[] arr, int k) {
        if (k >= arr.length) return arr;
        return quickSort(arr, k, 0, arr.length - 1);
    }
    private int[] quickSort(int[] arr, int k, int l, int r) {
        int i = l, j = r;
        while (i < j) {
            while (i < j && arr[j] >= arr[l]) j--;
            while (i < j && arr[i] <= arr[l]) i++;
            swap(arr, i, j);
        }
        swap(arr, i, l);
        if (i > k) return quickSort(arr, k, l, i - 1);
        if (i < k) return quickSort(arr, k, i + 1, r);
        return Arrays.copyOf(arr, k);
    }
    private void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
```

## Result

> 复杂度分析
>
> - 时间复杂度：O(N) 


![image-20210817183939441](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210817183939441.png)

## 🌈寻宝

>⭐今天是坚持刷题更文的第**33**/100天
>
>⭐各位的<font color=orange>点赞、关注、收藏、评论、订阅</font>就是一条创作的最大动力
>
>⭐更多算法题欢迎关注专栏[《leetcode》](https://blog.csdn.net/skylibiao/category_10867560.html)

为了回馈各位粉丝，礼尚往来，给大家准备了一条多年积累下来的优质资源，包括<font color=orange> 学习视频、面试资料、珍藏电子书等</font>

大家可以先自己找一下获取方式，寻宝游戏现在开始。

如果实在找不到<font color=red>可以评论区留言或私信我领取，不过一定要先关注哦！不然无法发私信！</font>

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210728234254025.png)