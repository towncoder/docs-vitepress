【leetcode刷题】61.x 的平方根——Java版

<font color=red>⭐欢迎订阅[《leetcode》](https://blog.csdn.net/skylibiao/category_10867560.html)专栏，每日一题，每天进步⭐</font>

>二分查找，用x/m<m而不是m*m>x防止溢出
>
>——leetcode此题热评

## 前言

哈喽，大家好，我是一条。

<font color=orange>糊涂算法，难得糊涂</font>

[《糊涂算法》](https://blog.csdn.net/skylibiao/category_11292502.html?spm=1001.2014.3001.5482)专栏上线倒计时——7天

## Question

#### [69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)

<font color=green>难度：简单</font>

>给你一个非负整数 x ，计算并返回 x 的 平方根 。
>
>由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
>
>注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
>
> 
>
>示例 1：
>
>```
>输入：x = 4
>输出：2
>```
>
>示例 2：
>
>```
>输入：x = 8
>输出：2
>```
>
>解释：8 的平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
>
>
>提示：
>
>0 <= x <= 231 - 1
>

## Solution

>注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 
>
>转换一下思维，把开放换成平方，那此题变为**查找一个有确定范围的整数**，且满足单调性（排好序）
>
>立即推——二分查找


## Code

>所有`leetcode`代码已同步至[github](https://github.com/lbsys)
>
>欢迎`star`

```java
/**
 * @author 一条coding
 */
class Solution {
    public int mySqrt(int x) {
        int l = 0, r = x, ans = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if ((long) mid * mid <= x) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }
}
```

## Result

> 复杂度分析
>
> - 时间复杂度：O(logN) 

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/image-20210911205033460.png)


## 🌈寻宝

>⭐今天是坚持刷题更文的第**53**/100天
>
>⭐各位的<font color=orange>点赞、关注、收藏、评论、订阅</font>就是一条创作的最大动力
>
>⭐更多算法题欢迎关注专栏[《leetcode》](https://blog.csdn.net/skylibiao/category_10867560.html)

为了回馈各位粉丝，礼尚往来，给大家准备了一些<font color=orange>算法教学视频和电子书</font>

<font color=red>需要的小伙伴可以[点这里](https://blog.csdn.net/skylibiao/article/details/119893172?spm=1001.2014.3001.5502)</font>

![](https://yitiaoit.oss-cn-beijing.aliyuncs.com/img/iShot2021-08-18 17.50.24.png)