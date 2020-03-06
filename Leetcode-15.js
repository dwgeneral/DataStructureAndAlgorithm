/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
// left and right pointers
const threeSum = (nums) => {
  if (nums.length < 3) return []
  nums.sort((a,b) => a - b)
  let result = []
  for (let i = 0; i < nums.length-2; i++) {
    if (nums[i] > 0) break
    if (nums[i] === nums[i-1]) continue
    let left = i+1, right = nums.length-1
    while (left < right) {
      let diffNum = - (nums[left] + nums[right])
      if (nums[i] === diffNum) {
        result.push([nums[left], nums[i], nums[right]])
        left += 1
        right -= 1
        while (left < right && nums[left] === nums[left-1]) left++
        while (left < right && nums[right] === nums[right+1]) right--
      } else if (nums[i] < diffNum) left += 1
        else right -= 1
    }    
  }
  return result
};

/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */