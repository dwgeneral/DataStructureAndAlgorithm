/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 109. Convert Sorted List to Binary Search Tree
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * @param {ListNode} head
 * @return {TreeNode}
 */
/**
 * 中序遍历还原二叉树
 */
const sortedListToBST = (head) => {
  let length = 0, curr = head
  while(curr) { curr = curr.next; length++ }

  const toBST = (left, right) => {
    if (left > right) return null
    let mid = (left + right) >> 1
    let leftNode = toBST(left, mid-1)
    let node = new TreeNode(head.val)
    head = head.next
    let rightNode = toBST(mid+1, right)
    node.left = leftNode
    node.right = rightNode
    return node
  }
  return toBST(0, length-1)
}

/**
 * 递归(分治) + 双指针
 */

/**
 * 递归(分治) + 转成数组
 */