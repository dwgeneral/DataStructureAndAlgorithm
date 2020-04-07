/**
 * 72. Edit Distance
 * https://leetcode-cn.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/**
 * DP
 * 明确状态：dp[i][j] 表示 word1[0..i] 个字符转换成 word2[0..j] 个字符的最少操作数
 * 状态转移方程：
 *    // 我们假设字符串从后往前匹配，i = word1.length-1, j = word2.length-1
 * 
 *    // 如果两字符串最后一个字符相同，则最少操作数就等于上一个字符的最少操作数
 *    if (word1[i] === word2[j]) dp[i][j] = dp[i-1][j-1] 
 * 
 *    // 如果两字符串最后一个字符不同，则最少操作数为下列情况的最小值
 *    // 替换word1最后一个字符：dp[i-1][j-1] + 1
 *    // 删除word1最后一个字符：dp[i-1][j] + 1
 *    // 添加word1最后一个字符：dp[i][j-1] + 1
 *    else dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1 
 *    
 *    // 边界情况：dp[i][0] = i 与 dp[0][j] = j；表示 word1[0..i]删除 i 次转换为 word2[0] 与 word1[0]插入 j 次转换为 word2[0..j]
 */
const minDistance = (word1, word2) => {
  let m = word1.length, n = word2.length, dp = []
  for (let i = 0; i <= m; i++) {
    dp.push([])
    for (let j = 0; j <= n; j++) {
      if (!(i * j)) { dp[i][j] = i + j; continue }
      if (word1[i-1] === word2[j-1]) dp[i][j] = dp[i-1][j-1]
      else dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
    }
  }
  return dp[m][n]
}