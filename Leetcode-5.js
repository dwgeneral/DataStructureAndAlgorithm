/**
 * 5. Longest Palindromic Substring
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */

/**
 * DP
 * 定义状态：dp[i][j] 表示 s[i..j] 是否是回文子串
 * 状态转移：
 *  - dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
 * Base case：
 *  - dp[0][0] = 1
 *  - dp[0][1] = s[0] === s[1]
 */
const longestPalindrome = (s) => {
  if (s.length <= 1) return s
  let len = s.length, result = "", dp = Array.from(new Array(len),() => new Array(len).fill(0));
  for (let i = len - 1;  i >= 0; i--) {
      for (let j = i; j < len; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i+1][j-1])
      if (dp[i][j] && (j-i+1) > result.length) result = s.substring(i, j+1)
    }
  }
  return result
}