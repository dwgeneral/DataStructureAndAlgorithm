/**
 * 974. 和可被 K 整除的子数组
 * https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
/**
 * 前缀和
 */
const subarraysDivByK = (A, K) => {
  let result = 0, prevSum = 0, map = new Map() // key is mod, value is count  
  map.set(0,1)
  for (let num of A) {
    prevSum = (prevSum + num) % K
    if (prevSum < 0) prevSum = prevSum + K
    if (map.has(prevSum)) result += map.get(prevSum)
    map.set(prevSum, map.has(prevSum) ? map.get(prevSum) + 1 : 1)
  }
  return result
}