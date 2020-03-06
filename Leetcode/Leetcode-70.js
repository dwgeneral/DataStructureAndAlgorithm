/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
// 方法一：数组遍历
//var climbStairs = function(n) {
//  if (n <= 2) return n
//  let fibo = [0, 1, 2]
//  for (let i = 3; i <= n; i++) {
//    fibo[i] = fibo[i-1] + fibo[i-2]  
//  }
//  return fibo[n]
//};

// 方法二：不用数组遍历
//const climbStairs = (n) => {
//  if (n <= 2) return n
//  let [f1, f2, f3] = [1, 2, 3]
//  for (let i = 3; i <= n; i++) {
//    f3 = f1 + f2
//    f1 = f2
//    f2 = f3
//  }
//  return f3
//}

// 方法三：递归
const climbStairs = (n, result = [0, 1, 2]) => {
  if (n <= 3) return n
  if (result[n] == undefined) {
    result[n] = climbStairs(n-1, result) + climbStairs(n-2, result)
  }
  return result[n]
}

/**
 * You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */