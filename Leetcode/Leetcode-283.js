/**
 * 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法一：通过下标替换元素
const moveZeroes = (nums) => {
  let zeroes_count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[i-zeroes_count] = nums[i]
      if (zeroes_count > 0) { nums[i] = 0 }
    } else {
      zeroes_count++
    } 
  }
}

/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */