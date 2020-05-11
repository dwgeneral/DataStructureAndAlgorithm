/**
 * 334. Increasing Triplet Subsequence
 * https://leetcode-cn.com/problems/increasing-triplet-subsequence/
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
  let first = nums[0], second = null
  for (let i = 1; i < nums.length; i++) {
    if (second != null && second < nums[i]) return true
    first < nums[i] ? second = nums[i] : first = nums[i]
  }
  return false
}