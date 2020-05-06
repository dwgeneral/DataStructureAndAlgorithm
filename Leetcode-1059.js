/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * 1095. Find in Mountain Array
 * https://leetcode-cn.com/problems/find-in-mountain-array/
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
/**
 * 二分查找法
 *  - 先找山顶元素index
 *  - 在前升序数组中找 target
 *  - 在后降序数组中找 target
 */
const findInMountainArray = (target, mountainArr) => {
  let n = mountainArr.length(), left = 0, right = n-1, peak = 0
  while (left < right) {
    let mid = (left + right) >> 1
    if (mountainArr.get(mid) >= mountainArr.get(mid+1)) right = mid
    else left = mid + 1
  }
  peak = left
  const result = binarySearch(mountainArr, target, 0, peak, v => v)
  return result === -1 ? binarySearch(mountainArr, target, peak, n-1, v => -v) : result
}

const binarySearch = (arr, target, left, right, desc) => {
  target = desc(target)
  while (left <= right) {
    let mid = (left + right) >> 1, midValue = desc(arr.get(mid))
    if (midValue === target) return mid
    if (midValue < target) left = mid + 1
    else right = mid - 1
  }
  return -1
}