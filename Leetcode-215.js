/**
 * 215. Kth Largest Element in an Array
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * 方法一：使用快排先从小到大排序，然后返回 len-k 位置的元素即为结果 O(nlogk)
 */
const findKthLargest = (nums, k) => {
  quickSort(nums, 0, nums.length-1)
  return nums[nums.length-k]
}

const quickSort = (nums, left, right) => {
  if (right <= left) return
  let pivot = partition(nums, left, right)
  quickSort(nums, left, pivot-1)
  quickSort(nums, pivot+1, right)
}

const partition = (nums, left, right) => {
  let pivot = right, counter = left
  for (let i = left; i < right; i++) {
    if (nums[i] < nums[pivot]) { [nums[i], nums[counter]] = [nums[counter], nums[i]]; counter++ }
  }
  [nums[pivot], nums[counter]] = [nums[counter], nums[pivot]]
  return counter
}

/**
 * 方法二：使用快排分区分治思想，直接定位第K大元素 O(n)
 */
const findKthLargest = (nums, k) => {
  let len = nums.length, left = 0, right = len-1, target = len - k
  if (nums.length < k) return -1
  while (true) {
    let pivot = partition(nums, left, right)
    if (pivot === target) return nums[pivot]
    else if (pivot < target) left = pivot + 1
    else right = pivot - 1
  }
}

const partition = (nums, left, right) => {
  let pivot = right, counter = left
  for (let i = left; i < right; i++) {
    if (nums[i] < nums[pivot]) { [nums[i], nums[counter]] = [nums[counter], nums[i]]; counter++ }
  }
  [nums[pivot], nums[counter]] = [nums[counter], nums[pivot]]
  return counter
}
