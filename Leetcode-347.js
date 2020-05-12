/**
 * 347. Top K Frequent Elements
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * 哈希计数
 */
const topKFrequent = (nums, k) => {
  if (nums.length <= 1) return nums
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.set(nums[i], map.get(nums[i])+1) : map.set(nums[i], 1)  
  } 
  return Array.from(map).sort((a, b) => b[1] - a[1]).splice(0, k).map(value => value[0])
}