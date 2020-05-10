/**
 * 572. Subtree of Another Tree
 * https://leetcode-cn.com/problems/subtree-of-another-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
/**
 * 方法一：对象转为字符串，问题转换为 字符串是否包含子串
 */
const isSubtree = (s, t) => {
  return JSON.stringify(s).includes(JSON.stringify(t))
}

/**
 * 方法二：DFS, 递归判断是否存在相同子树
 */
const isSubtree = (s, t) => {
  if (s === null) return false
  return isSubtree(s.left, t) || isSubtree(s.right, t) || isSameTree(s, t)
}

const isSameTree = (s, t) => {
  if (s === null && t === null) return true
  if (s === null || t === null) return false
  if (s.val != t.val) return false
  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
}