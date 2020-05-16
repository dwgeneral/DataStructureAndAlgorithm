/**
 * 523. Continuous Subarray Sum
 * https://leetcode-cn.com/problems/continuous-subarray-sum/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = (nums, k) => {
  if (nums.length < 2) return false
  if (k === 1) return true
  let sumSet = new Set(), prevSum = 0, temp = 0
  for (let num of nums) {
    prevSum += num
    let result = k === 0 ? prevSum : prevSum % k
    if (sumSet.has(result)) return true
    sumSet.add(temp)
    temp = result
  }
  return false
}