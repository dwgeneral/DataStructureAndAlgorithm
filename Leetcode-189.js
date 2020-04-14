/**
 * 189. Rotate Array
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 方法一: 使用 unshift、splice 方法 O(n^2)
// const rotate = (nums, k) => {
//   nums.unshift(...nums.splice(nums.length - k))
// }

// 方法二：使用 pop, unshift 依次交换元素 O(nk)
const rotate = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }    
}

/**
 * 方法三：环状数组
 */
const rotate = (nums, k) => {
}

/**
 * 方法四：三次reverse
 */

/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 */