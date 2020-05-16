/**
 * 278. First Bad Version
 * https://leetcode-cn.com/problems/first-bad-version/
 * @param {function} isBadVersion()
 * @return {function}
 */
/**
 * 二分查找
 */
const solution = (isBadVersion) => {
  return n => {
    let left = 1, right = n
    while (left < right) {
      let mid = left + (right-left >> 1)
      if (isBadVersion(mid)) right = mid
      else left = mid + 1
    }
    return left
  }
}