/**
 * 210. Course Schedule II
 * https://leetcode-cn.com/problems/course-schedule-ii/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
/**
 * 有向图拓扑排序
 */
const findOrder = (numCourses, prerequisites) => {
  const inDegree = new Array(numCourses).fill(0), graph = {}, result = [], queue = []
  for (let i = 0; i < prerequisites.length; i++) {
    let condition = prerequisites[i]
    if (graph[condition[1]]) graph[condition[1]].push(condition[0])
    else graph[condition[1]] = [condition[0]]
    inDegree[condition[0]]++
  }
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }
  while (queue.length) {
    let curr = queue.shift()
    result.push(curr)
    let toEnQueue = graph[curr]
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--
        if (inDegree[toEnQueue[i]] === 0) queue.push(toEnQueue[i])
      }
    }
  }
  return result.length === numCourses ? result : []
}