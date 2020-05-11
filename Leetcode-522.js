/**
 * 522. Longest Uncommon Subsequence II
 * https://leetcode-cn.com/problems/longest-uncommon-subsequence-ii/
 * @param {string[]} strs
 * @return {number}
 */
/**
 * 暴力法：生成所有字符的所有子序列，存储在哈希表中，并记录每个子序列出现的次数，找出只出现一次的最长子序列，没有则返回-1
 * 复杂度：n * 2^x  x为所有字符串的平均长度，n为字符串的数量
 */

/**
 * 排序 + 检查每个字符串
 * 如果存在这个特殊序列，那它一定是某个给定字符串
 * 检查每个字符串是否是其他字符串的子序列，如果不是则它是一个特殊序列，找出最长的特殊序列，如果不存在特殊序列，返回-1
 */
const findLUSlength = (strs) => {
  strs.sort((a,b) => b.length - a.length)
  for (let i = 0; i < strs.length; i++) {
    if (helper(strs, i)) return strs[i].length
  }
  return -1
}

const helper = (arr, index) => {
  let str = arr[index]
  let isRepeated = arr.indexOf(str) != arr.lastIndexOf(str)
  for (let i = 0; i < index; i++) {
    if (valid(arr[i], str)) return false
  }
  return !isRepeated
}

const valid = (a, b) => {
  if (a.indexOf(b) != -1) return true
  let i = 0, j = 0
  while (i < a.length) {
    if (a.charAt(i) === b.charAt(j)) {
      if (++j === b.length) return true
    }
    i++
  }
  return false
}