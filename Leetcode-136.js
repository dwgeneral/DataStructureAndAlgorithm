/**
 * 136. Single Number
 * https://leetcode-cn.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 方法一：排序后比较, 提前返回只出现一次的值 O(n)
 */
const singleNumber = (nums) => {
  if (nums.length <= 1) return nums[0]
  nums.sort((a,b) => a - b)
  for (let i = 0; i < nums.length-1; i += 2) {
    if (nums[i] != nums[i+1]) return nums[i]
  }
  return nums[nums.length-1]
}

/**
 * 方法二：位运算 O(n)
 * 两个数按位异或，如果两个数相同就会被抵消掉,并且异或操作符合交换律
 */
const singleNumber = (nums) => {
  let result = 0
  for (let num of nums) {
    result ^= num
  }
  return result
}