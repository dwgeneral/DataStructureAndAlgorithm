/**
 * 1162. As Far from Land as Possible
 * https://leetcode-cn.com/problems/as-far-from-land-as-possible/
 * @param {number[][]} grid
 * @return {number}
 */
// BFS better
const maxDistance = (grid) => {
  const N = grid.length, queue = []
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      if (grid[i][j] === 1) queue.push([i,j])
    }
  }
  if (queue.length === N || queue.length === 0) return -1
  let maxDistance = 0, dxy = [[-1,0], [0, -1], [1, 0], [0, 1]]
  while(queue.length) {
    let [x, y] = queue.shift()
    for (let arr of dxy) {
      let _x = x + arr[0], _y = y + arr[1]
      if (_x < 0 || _x >= N || _y < 0 || _y >= N) continue
      if (grid[_x][_y] === 0) {
        grid[_x][_y] = grid[x][y] + 1
        maxDistance = grid[_x][_y]
        queue.push([_x, _y])
      }
    }
  } 
  return maxDistance-1
}

// BFS depth
const maxDistance = (grid) => {
  const N = grid.length, queue = []
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      if (grid[i][j] === 1) queue.push([i,j])
    }
  }
  if (queue.length === N * N || queue.length === 0) return -1
  let depth = -1, dxy = [[-1,0], [0, -1], [1, 0], [0, 1]]
  while(queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift()
      for (let arr of dxy) {
        let _x = x + arr[0], _y = y + arr[1]
        if (_x < 0 || _x >= N || _y < 0 || _y >= N) continue
        if (_x >= 0 && _x < N && _y >= 0 && _y < N && grid[_x][_y] === 0) {
          grid[_x][_y] = -1
          queue.push([_x, _y])
        }
      }
    }
    depth++
  } 
  return depth
}

// DP