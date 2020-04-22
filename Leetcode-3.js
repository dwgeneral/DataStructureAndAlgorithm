/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
/**
 * 方法一：遍历字符串，使用队列记录字符，如果出现重复的元素，就出队，直至没有重复，并记录子串的长度  
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0
  let queue = [], result = 0, start = 0
  while (start < s.length) {
    if (queue.indexOf(s[start]) != -1) { queue.shift(); continue }
    queue.push(s[start++])
    result = Math.max(result, queue.length)
  }
  return result
}