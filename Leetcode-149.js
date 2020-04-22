/**
 * 149. Max Points on a Line
 * https://leetcode-cn.com/problems/max-points-on-a-line/
 * @param {number[][]} points
 * @return {number}
 */
/**
 * 思路：遍历所有点，针对每个点，固定该点，找其他点与该点组成的直线，记录斜率
 * 注意事项：
 *   - 记录斜率的Hash不能为空，否则在 Math.max(...Object.values(hash)) 时会为 -Infinity
 *   - 斜率为 +-Infinity 时，应该记录在同一个 key 下
 *   - 题目没说，但同一个点出现多次，也是要计数的
 */
const maxPoints = (points) => {
  if (points.length <= 2) return points.length
  let result = 2, n = points.length
  for (let i = 0; i < n-1; i++) {
    let hash = {_: 0}, dup = 1
    for (let j = i+1; j < n; j++) {
      let [[x1, y1], [x2, y2]] = [points[i], points[j]]
      if (x1 === x2 && y1 === y2) { dup++; continue }
      let k = (x1-x2) / (y1-y2)
      if (k === -Infinity) k = Infinity
      hash[k] = hash[k] ? hash[k] + 1 : 1
    }
    result = Math.max(result, Math.max(...Object.values(hash))+dup)
  }
  return result
};