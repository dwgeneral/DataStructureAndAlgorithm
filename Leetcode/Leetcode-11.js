/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
// start, end pointers
const maxArea = (height) => {
  let max = 0
  for(let i = 0, j = height.length - 1; i < j;) {
    let area = (j - i) * Math.min(height[i], height[j])
    height[i] < height[j] ? i++ : j--
    max = Math.max(max, area)
  }
  return max
}

// 暴力法
// const maxArea = (height) => {
//   let max = 0
//   for(let i = 0; i < height.length - 1; i++) {
//     for(let j = i + 1; j < height.length; j++) {
//       let area = (j-i) * Math.min(height[i], height[j])
//       max = Math.max(max, area)
//     }
//   }    
//   return max
// };

/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
Note: You may not slant the container and n is at least 2.
The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
 */