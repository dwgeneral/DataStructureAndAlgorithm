/**
 * 542. 01 Matrix
 * https://leetcode-cn.com/problems/01-matrix/
 * @param {number[][]} matrix
 * @return {number[][]}
 */
/**
 * 方法一：四连通 BFS + memo
 * - 先遍历矩阵，找出所有值为0的点，将坐标存入 queue
 * - 对 queue 进行四连通遍历，将该点相连的坐标计算与0的距离，再将相连的坐标放入 queue，直到 queue 清空
 * 
 */
const updateMatrix = (matrix) => {
  let rowLength = matrix.length, colLength = matrix[0].length
  let queue = [], dxy = [[-1, 0], [0, -1], [1, 0], [0, 1]]
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === 0) queue.push([i,j])
      else matrix[i][j] = Number.MAX_SAFE_INTEGER
    }
  }
  while(queue.length) {
    let [row, col] = queue.shift()
    for (let arr of dxy) {
      let _row = row + arr[0], _col = col + arr[1]
      if (_row < 0 || _row >= rowLength || _col < 0 || _col >= colLength || matrix[_row][_col] <= matrix[row][col] + 1) continue
      matrix[_row][_col] = matrix[row][col] + 1
      queue.push([_row, _col])
    }
  }
  return matrix
}