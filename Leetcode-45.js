/**
 * 45. Jump Game II
 * https://leetcode.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 跳跃游戏二：这道题和跳跃游戏I一样的条件，只是求的是【到达最后一位的最少的跳跃次数】 
 * 解题思路：看到求最值问题，自然想到可以用DP，当然因为做过跳跃游戏I，所以考虑是不是可以继续用贪心呢, 因为如果能用贪心，那贪心一定是最好办法
 * - 贪心规则：遍历数组，除了记录每一步的最大跳跃长度，还要记录当前能够到达的跳跃范围内的最大长度，每个范围内都取最大值，则跳跃次数最少
 */
const jump = (nums) => {
  let max = 0, rangeMax = 0, count = 0
  for (let i = 0; i < nums.length-1; i++) {
    max = Math.max(max, i+nums[i])
    if (i === rangeMax) { count++; rangeMax = max }
  }
  return count
}