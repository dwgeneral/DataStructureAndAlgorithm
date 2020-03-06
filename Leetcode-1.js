/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 方法一：暴力法, 两层循环 O(n^2)
//var twoSum = function(nums, target) {
//  for (let i = 0; i < nums.length - 1; i++) {
//    for (let j = i+1; j < nums.length; j++) {
//      if (nums[i] + nums[j] === target) return [i, j]
//    }
//  } 
//};

// 方法二：使用哈希表， O(n)
const twoSum = (nums, target) => {
  let result = {}
  for (let i = 0; i < nums.length; i++) {
    let distinct = target - nums[i]
    if (result.hasOwnProperty(distinct)) {
      return [i, result[distinct]]
    }
    result[nums[i]] = i
  }
}

/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 */