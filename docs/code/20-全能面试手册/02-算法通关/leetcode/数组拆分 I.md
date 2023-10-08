【leetcode刷题】71.数组拆分 I——Java版

<font color=red>⭐欢迎订阅[《leetcode》](https://blog.csdn.net/skylibiao/category_10867560.html)专栏，每日一题，每天进步⭐</font>

>其实就是把从a1到an数组下标为奇数的数都加起来，题目花里胡哨的
>
>——leetcode此题热评

## 前言

哈喽，大家好，我是一条。

**糊涂算法，难得糊涂**

<font color=orange><b>点击跳转到[《糊涂算法》](https://blog.csdn.net/skylibiao/category_11292502.html?spm=1001.2014.3001.5482)专栏学习java大厂面试必备数据结构和算法知识！</b></font>

## Question

#### [561. 数组拆分 I](https://leetcode-cn.com/problems/array-partition-i/)

<font color=green>难度：简单</font>

>给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
>
>返回该 最大总和 。
>
> 
>
>示例 1：
>
>```
>输入：nums = [1,4,3,2]
>输出：4
>解释：所有可能的分法（忽略元素顺序）为：
>
>1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
>2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
>3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
>   所以最大总和为 4
>```
>
>示例 2：
>
>```
>输入：nums = [6,2,6,5,1,2]
>输出：9
>解释：最优的分法为 (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9
>```
>
>
>
>
>提示：
>
>1 <= n <= 104
>nums.length == 2 * n
>-104 <= nums[i] <= 104

## Solution

>官方这标签真是乱分，明明是排序，分到贪心里

见文首热评


## Code

>所有`leetcode`代码已同步至[github](https://github.com/lbsys)
>
>欢迎`star`

```java
/**
 * @author 一条coding
 */
class Solution {
    public int arrayPairSum(int[] nums) {
        Arrays.sort(nums);
        int sum=0;
        for(int i=0;i<nums.length;i=i+2){
            sum+=nums[i];
        }
        return sum;
    }
}
```

## Result

> 复杂度分析
>
> - 时间复杂度：O(N) 

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918210845521.png)


## 🌈寻宝

>⭐今天是坚持刷题更文的第**71**/100天
>
>⭐各位的<font color=orange>点赞、关注、收藏、评论、订阅</font>就是一条创作的最大动力
>
>⭐更多数据结构和算法讲解欢迎关注专栏[《糊涂算法》](https://blog.csdn.net/skylibiao/category_11292502.html?spm=1001.2014.3001.5482)

为了回馈各位粉丝，礼尚往来，给大家准备了一些<font color=orange><b>学习资料</b></font>

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/iShot2021-08-18 17.50.24.png)

<font color=red size=5>需要的小伙伴可以点「下方卡片</u>👇👇👇关注后回复「算法」领取</font>

