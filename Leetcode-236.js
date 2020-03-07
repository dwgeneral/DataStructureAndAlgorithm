/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 方法一：递归
const lowestCommonAncestor = (root, p, q) => {
  const traverse = (node) => {
    // 如果递归到叶子结点，返回false
    if (!node) return false
    // 递归遍历左子树
    let left = traverse(node.left)
    // 递归遍历右子树
    let right = traverse(node.right)
    // 判断当前结点是否是 p 或 q
    let isSelf = node == p || node == q
    // 如果任意两个值为true，当前结点即为LCA 
    if (isSelf + left + right >= 2) return node      
    // 如果任意一个值为true，返回true
    return isSelf || left || right
  }    
  return traverse(root)
};

/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]


 

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 

Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.
 */