/**
 * 55. Jump Game
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * 跳跃游戏：这道题给定一个数据，从第一个位置开始，问能否跳到最后一个位置
 * 贪心规则：
 *  - 只要我们每一步都取当前能跳的最大值，如果到达或超过最后一位，则为 true，否则为 false
 *  - 如果记录的能跳的最大值比当前索引位置 i 还小，则说明之前每一步的最优解连 i 这个位置都无法到达，可以提前结束返回 false
 */
const canJump = (nums) => {
  let max = nums[0] 
  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false
    max = Math.max(i+nums[i], max)
    if (max >= nums.length-1) return true
  }
};