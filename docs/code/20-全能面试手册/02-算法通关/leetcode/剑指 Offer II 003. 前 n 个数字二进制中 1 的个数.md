【leetcode刷题】68.前 n 个数字二进制中 1 的个数 ——Java版

<font color=red>⭐欢迎订阅[《leetcode》](https://blog.csdn.net/skylibiao/category_10867560.html)专栏，每日一题，每天进步⭐</font>

>如果最后一位为0，则下一个数字的1个数会+1
>
>如果最后一位为1，下一个数字会导致最后一位变成0，进一位，相当于右移一位之后+1的数字中1的个数
>
>——leetcode此题热评

## 前言

哈喽，大家好，我是一条。

**糊涂算法，难得糊涂**

<font color=orange><b>点击跳转到[《糊涂算法》](https://blog.csdn.net/skylibiao/category_11292502.html?spm=1001.2014.3001.5482)专栏学习java大厂面试必备数据结构和算法知识！</b></font>

## Question

#### [剑指 Offer II 003. 前 n 个数字二进制中 1 的个数](https://leetcode-cn.com/problems/w3tCBm/)

<font color=green>难度：简单</font>

>给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。
>
> 
>
>示例 1:
>
>```
>输入: n = 2
>输出: [0,1,1]
>解释: 
>0 --> 0
>1 --> 1
>2 --> 10
>```
>
>示例 2:
>
>```
>输入: n = 5
>输出: [0,1,1,2,1,2]
>解释:
>0 --> 0
>1 --> 1
>2 --> 10
>3 --> 11
>4 --> 100
>5 --> 101
>```
>
>
>
>
>说明 :
>
>0 <= n <= 105
>
>
>

## Solution

>通过位运算找到规律，在用动态规划的思想递推计算。




## Code

>所有`leetcode`代码已同步至[github](https://github.com/lbsys)
>
>欢迎`star`

```java
/**
 * @author 一条coding
 */
class Solution {
    public int[] countBits(int n) {
        int[] dp = new int[n + 1];
        dp[0] = 0;
        for (int i = 1; i <= n; i++){
            // 奇数时，二进制表示中，奇数一定比前面那个偶数多一个 1
            if (i % 2 == 1){
                dp[i] = dp[i - 1] + 1;
            }
            // 偶数时，它的二进制1的位数与i/2 的二进制1的位数相等；
            // 偶数的二进制末尾是 0，右移一位等于i/2，且1的个数不会变，故使用位运算i>>1当作i/2
            else{
                dp[i] = dp[i >> 1];
            }
        }

        return dp;
    }
}
```

## Result

> 复杂度分析
>
> - 时间复杂度：O(N) 

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210918200941786.png)


## 🌈寻宝

>⭐今天是坚持刷题更文的第**45**/100天
>
>⭐各位的<font color=orange>点赞、关注、收藏、评论、订阅</font>就是一条创作的最大动力
>
>⭐更多数据结构和算法讲解欢迎关注专栏[《糊涂算法》](https://blog.csdn.net/skylibiao/category_11292502.html?spm=1001.2014.3001.5482)

为了回馈各位粉丝，礼尚往来，给大家准备了一些<font color=orange><b>学习资料</b></font>

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/iShot2021-08-18 17.50.24.png)

<font color=red size=5>需要的小伙伴可以点「下方卡片</u>👇👇👇关注后回复「算法」领取</font>

