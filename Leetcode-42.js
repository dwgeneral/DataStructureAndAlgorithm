/**
 * 42. Trapping Rain Water
 * https://leetcode-cn.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
/**
 * 方法一：DP
 * 思路：第 i 列能接多少水，就看 height[i] 与  minHeight 的关系(minHeight = Math.min(LeftMaxHeight, RightMaxHeight))
 * 如果 h[i] >= minHeight; 不能接水
 * 如果 h[i] < minHeight; 能接 minHeight - h[i] 水
 * 所以，问题的关键就在：怎么高效地求 minHeight
 * maxLeft[i] = Math.max(maxLeft[i-1], height[i-1])表示 i 左边最高的墙的高度 
 * maxRight[i] = Math.max(maxRight[i+1], height[i+1])表示 i 右边最高的墙的高度 
 */
/*
const trap = (height) => {
  if (!height.length) return 0
  let result = 0, maxLeft = new Array(height.length).fill(0), maxRight = new Array(height.length).fill(0)
  for (let i = 1; i < height.length; ++i) {
    maxLeft[i] = Math.max(maxLeft[i-1], height[i-1])
  }
  for (let i = height.length - 2; i >=0; --i) {
    maxRight[i] = Math.max(maxRight[i+1], height[i+1])
  }
  for (let i = 1; i < height.length - 1; ++i) {
    let minHeight = Math.min(maxLeft[i], maxRight[i])
    if (height[i] < minHeight) result += minHeight - height[i]
  }
  return result
}
*/

/**
 * 方法二：双指针（DP的空间优化）
 * 将 maxLeft 与 maxRight 由数组换成两个变量
 * 
 */
const trap = (height) => {
  if (!height.length) return 0
  let result = 0, maxLeft = 0, maxRight = 0, left = 0, right = height.length - 1
  while(left < right) {
    maxLeft = Math.max(height[left], maxLeft)
    maxRight = Math.max(height[right], maxRight)
    if (maxLeft < maxRight) result += maxLeft - height[left++]
    else result += maxRight - height[right--]
  }
  return result
}