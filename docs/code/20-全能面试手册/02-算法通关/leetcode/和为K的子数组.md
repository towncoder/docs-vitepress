【leetcode刷题】49.和为K的子数组——Java版

<font color=red>⭐欢迎订阅[《leetcode》](https://blog.csdn.net/skylibiao/category_10867560.html)专栏，每日一题，每天进步⭐</font>

>为什么这题不可以用双指针/滑动窗口：因为`nums[i]`可以小于0，也就是说右指针`i`向后移1位不能保证区间会增大，左指针`j`向后移1位也不能保证区间和会减小。给定`j`，`i`的位置没有二段性。
>
>——leetcode此题热评

## 前言

哈喽，大家好，我是一条。

<font color=orange>糊涂算法，难得糊涂</font>

[《糊涂算法》](https://blog.csdn.net/skylibiao/category_11292502.html?spm=1001.2014.3001.5482)专栏上线倒计时——7天

## Question

#### [560. 和为K的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k/)

<font color=green>难度：简单</font>

>给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
>
>示例 1 :
>
>```
>输入:nums = [1,1,1], k = 2
>输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
>```
>
>说明 :
>
>数组的长度为 [1, 20,000]。
>数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。

## Solution

>前缀和+哈希表

- 前缀和：nums 的第 0 项到 当前项 的和。
- 每个元素对应一个“前缀和”
- 遍历数组，根据当前“前缀和”，在 map 中寻找「与之相减 == k」的历史前缀和
- 当前“前缀和”与历史前缀和，差分出一个子数组，该历史前缀和出现过 c 次，等价于当前项找到 c 个子数组求和等于 k。
- 遍历过程中，c 不断加给 count，最后返回 count


## Code

>所有`leetcode`代码已同步至[github](https://github.com/lbsys)
>
>欢迎`star`

```java
/**
 * @author 一条coding
 */
public class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0, pre = 0;
        HashMap < Integer, Integer > mp = new HashMap < > ();
        mp.put(0, 1);
        for (int i = 0; i < nums.length; i++) {
            pre += nums[i];
            if (mp.containsKey(pre - k)) {
                count += mp.get(pre - k);
            }
            mp.put(pre, mp.getOrDefault(pre, 0) + 1);
        }
        return count;
    }
}
```

## Result

> 复杂度分析
>
> - 时间复杂度：O(N^2) 

![image-20210825233440759](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210825233440759.png)


## 🌈寻宝

>⭐今天是坚持刷题更文的第**41**/100天
>
>⭐各位的<font color=orange>点赞、关注、收藏、评论、订阅</font>就是一条创作的最大动力
>
>⭐更多算法题欢迎关注专栏[《leetcode》](https://blog.csdn.net/skylibiao/category_10867560.html)

为了回馈各位粉丝，礼尚往来，给大家准备了一些<font color=orange>算法教学视频和电子书</font>

<font color=red>需要的小伙伴可以私信我领取，不过一定要先关注哦！不然无法发私信！</font>

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/iShot2021-08-18 17.50.24.png)