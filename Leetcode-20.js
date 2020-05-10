/**
 * 20. Valid Parentheses
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
/**
 * 栈
 */
const isValid = (s) => {
  const stack = [], map = { '{': '}', '[': ']', '(': ')' }
  for (let char of s) {
    if (Object.keys(map).indexOf(char) != -1) { stack.push(char); continue }
    if (map[stack.pop()] != char) return false
  }
  if (stack.length) return false
  return true
}