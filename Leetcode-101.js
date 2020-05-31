/**
 * 101. Symmetric Tree
 * https://leetcode-cn.com/problems/symmetric-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * 递归
 */
const isSymmetric = (root) => {
  return isMirror(root, root)
}

const isMirror = (t1, t2) => {
  if (t1 === null && t2 === null) return true
  if (t1 === null || t2 === null || t1.val != t2.val) return false
  return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
}

/**
 * 迭代
 */
const isSymmetric = (root) => {
  if (!root) return true
  let queue = [root.left, root.right]
  while (queue.length > 0) {
    let t1 = queue.shift(), t2 = queue.shift()
    if (t1 === null && t2 === null) continue
    if (t1 === null || t2 === null || t1.val != t2.val) return false
    queue.push(t1.left, t2.right, t1.right, t2.left)
  }
  return true
}