/**
 * 202. Happy Number
 * https://leetcode-cn.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
/**
 * 判断链表是否有环，快慢指针
 */
const isHappy = (n) => {
  let slow = n, fast = squareSum(n)    
  while (slow != fast) {
    slow = squareSum(slow)
    fast = squareSum(squareSum(fast))
  }
  return slow === 1
}

const squareSum = (n) => {
  let sum = 0
  while (n > 0) {
    let digit = n % 10
    sum += digit * digit
    n = Math.floor(n / 10)
  }
  return sum
}