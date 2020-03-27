/**
 * 914. X of a Kind in a Deck of Cards
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = (deck) => {
  if (deck.length <= 1) return false
  let timeMap = new Map()
  deck.forEach(num => timeMap.set(num, timeMap.has(num) ? timeMap.get(num) + 1 : 1))
  let timeArr = [...timeMap.values()], g = timeArr[0]
  timeArr.forEach(num => g = gcd(g, num))
  return g >= 2
}

// calculate greatest common divisor
const gcd = (num1, num2) => {
  return num2 === 0 ? num1 : gcd(num2, num1 % num2)
}