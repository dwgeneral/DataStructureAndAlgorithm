/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
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
// 方法一：递归
//const isValidBST = (root) => {
//  const validate = (node, min, max) => {
//    if (!node) return true
//    let val = node.val
//    if (val <= min || val >= max) return false
//    return (validate(node.left, min, val)) && (validate(node.right, val, max))
//  }    
//  return validate(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
//};

// 方法二：stack + 中序遍历
const isValidBST = (root) => {
  let stack = [], node = root, min = Number.MIN_SAFE_INTEGER
  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    if (node.val <= min) return false
    min = node.val
    node = node.right
  }
  return true
}

/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 */