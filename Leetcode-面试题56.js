/**
 * 面试题56 - I. 数组中数字出现的次数
 * https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 位运算
 * - 异或运算符：
 *    - a^b 是将 a 与 b 的二进制位分别进行异或操作；异或的规则是：如果同一位数字相同则为0， 不同则为1
 *    - 任何数和自己本身异或，都为0
 *    - 任何数和0异或，都为自身
 *    - 异或满足交换律：a^b^c === a^c^b
 * 
 */
const singleNumbers = (nums) => {
  let result = 0, num1 = 0
  for (let num of nums) { result ^= num }  
  const mask = result & -result       
  for (let num of nums) {
    if (num & mask) num1 ^= num
  }
  return [num1, result^num1]
}

singleNumbers([4, 5, 4, 6, 2, 2, 1, 1])

/**
 0000 0001 = 1
 0000 0010 = 2
 0000 0011 = 3
 0000 0100 = 4
 0000 0101 = 5
 0000 0110 = 6
 */