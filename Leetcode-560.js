/**
 * 560. Subarray Sum Equals K
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * 前缀和，哈希优化
 */
const subarraySum = (nums, k) => {
  const map = new Map()
  map.set(0, 1) // 前缀和为0， 个数为1
  let result = 0, prevSum = 0
  for (let num of nums) {
    prevSum += num
    if (map.has(prevSum - k)) result += map.get(prevSum - k)
    map.set(prevSum, map.has(prevSum) ? map.get(prevSum) + 1 : 1)
  }
  return result
}