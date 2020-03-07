/**
 * 77. Combinations
 * https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  let result = []  
  const dfs = (current, start) => {
    if (current.length == k) {
      result.push(current)
      return
    }
    for (let i = start; i <= n; i++) {
      dfs([...current, i], i+1)
    }
  }
  dfs([], 1)
  return result
};

/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */