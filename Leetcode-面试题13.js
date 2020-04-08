/**
 * 面试题13. 机器人的运动范围
 * https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
/**
 * 本题考察：BFS
 */
const movingCount = (m, n, k) => {
  let queue = [], visited = {}, result = 0
  queue.unshift([0, 0])
  while (queue.length) {
    let [row, col] = queue.pop(), key = `${row}-${col}`
    if (visited[key]) continue
    visited[key] = true
    for (let arr of [[1, 0], [0, 1]]) {
      let _row = row + arr[0], _col = col + arr[1]
      if (_row >= 0 && _row < m && _col >= 0 && _col < n && digitSum([_row, _col]) <= k) queue.unshift([_row, _col])
    }
    result++
  }
  return result
}

const digitSum = (digits) => {
  let sum = 0
  digits.forEach((value) => {
    while(value) {
      sum += value % 10
      value = Math.floor(value / 10)
    }
  })
  return sum
}