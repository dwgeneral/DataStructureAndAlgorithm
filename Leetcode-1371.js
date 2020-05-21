/**
 * 1371. Find the Longest Substring Containing Vowels in Even Counts
 * https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
 * @param {string} s
 * @return {number}
 */
/**
 * 前缀和 + 位运算 + 状态压缩
 */
const findTheLongestSubstring = (s) => {
  let states = new Array(32).fill(-1, 0, 1)
  let curr = 0, result = 0
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'a':
        curr ^= 1; break
      case 'e':
        curr ^= 2; break
      case 'i':
        curr ^= 4; break
      case 'o':
        curr ^= 8; break
      case 'u':
        curr ^= 16; break
    }
    if (states[curr] === undefined) states[curr] = i
    else result = Math.max(result, i - states[curr])
  }
  return result
}