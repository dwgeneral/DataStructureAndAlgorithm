/**
 * 84. Largest Rectangle in Histogram
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */
/**
 * DP
 * 定义状态：dp[i] 表示以 h[i] 为高度组成的最大矩形的面积
 * 明确状态转移方程：i 向后延伸，直到找到比自己高度小的位置 j, 则 dp[i] = h[i] * (j-i)
 */
const largestRectangleArea = (heights) => {
  let maxArea = 0, stack = []
  heights = [0, ...heights, 0]
  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack.slice(-1)[0]]) {
      let stackTop = stack.pop()
      maxArea = Math.max(maxArea, heights[stackTop] * (i - stack.slice(-1)[0] - 1))
    }
    stack.push(i)
  }
  return maxArea
}