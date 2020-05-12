/**
 * Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 116. Populating Next Right Pointers in Each Node
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * @param {Node} root
 * @return {Node}
 */
/**
 * 层序遍历
 */
const connect = (root) => {
  if (!root) return root
  const queue = [root]
  while (queue.length) {
    let level = [...queue]
    for (let i = 0; i < level.length; i++) {
      let node = queue.shift()
      if (level[i+1] != undefined) node.next = level[i+1]
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }    
  return root
}