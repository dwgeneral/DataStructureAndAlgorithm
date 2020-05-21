/**
 * 5. Longest Palindromic Substring
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
/**
 * 方法二：最长公共子串
 * 回文串就是正反读取都一样。所以我们假设将s反转，判断对应的字符是否相等，用二维数组来存储公共子串的长度
 * DP
 * dp[i][j] = dp[i+1][j-1] && (s[i] === s[j])
 * dp[0][0] = 1
 * j - i < 2：意即子串是一个长度为0或1的回文串
 */
const longestPalindrome = s => {
  let len = s.length, dp = Array.from(new Array(len), () => new Array(len).fill(0)), result = ''
  for (let i = len-1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i+1][j-1])
      if (dp[i][j] && (j-i+1) > result.length) result = s.substring(i, j+1)
    }
  }
  return result
}


/**
 * 方法一：暴力法 O(n^3)
const longestPalindrome = s => {
  let len = s.length, max = 0, result = ''
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j <= len; j++) {
      let substring = s.substring(i, j)
      if (isPalindromic(substring)) {
        let sublen = substring.length
        if (sublen > max) result = substring; max = sublen
      }
    }
  }
  return result
}

const isPalindromic = s => {
  let len = s.length
  for (let i = 0; i < len >> 1; i++) {
    if (s[i] != s[len-i-1]) return false
  }
  return true
}
*/