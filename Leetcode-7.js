/**
 * 7. Reverse Integer
 * https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let result = 0, max = parseInt((Math.pow(2, 31)-1)/10), min = parseInt(Math.pow(-2, 31)/10)
  while (x) {
    num = x % 10
    if (result > max || result < min) return 0
    result = result * 10 + num
    x = parseInt(x / 10)
  }
  return result
}