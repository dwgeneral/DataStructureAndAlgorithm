/**
 * 912. Sort an Array
 * https://leetcode-cn.com/problems/sort-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * quickSort
 */
const sortArray = (nums) => {
  if (nums.length <= 1) return nums    
  quickSort(nums, 0, nums.length-1)
  return nums
}

const quickSort = (nums, left, right) => {
  if (left >= right) return
  let pivot = left, curr = left + 1 
  for (; curr <= right; curr++) {
    if (nums[curr] < nums[left]) swap(nums, ++pivot, curr)
  }
  swap(nums, left, pivot)
  quickSort(nums, left, pivot-1)
  quickSort(nums, pivot+1, right)
}

const swap = (nums, left, right) => {
  if (left === right) return
  [nums[left], nums[right]] = [nums[right], nums[left]]
}