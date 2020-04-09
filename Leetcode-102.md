本题考察知识点
  - 二叉树结构的基本知识
  - BFS广度优先搜索的编码能力

```javascript
/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/**
 * BFS O(nlogn)
 * 题目要求对二叉树进行层序遍历，从左往右；而这，正是BFS的遍历顺序
 * 接下来就是BFS的储备知识了，BFS一般都采用队列来实现，将要遍历的数据按顺序依次放入队列中(从头到尾)，从队头依次取出数据，进行处理，直到队列为空
 * 每一层处理逻辑：二叉树的中序遍历顺序
 */
const levelOrder = (root) => {
  if (!root) return []
  const queue = [root], result = []
  while (queue.length) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(level)
  }
  return result
}
```

[更多 JS-Leetcode 题解请关注](https://github.com/dwgeneral/JS-Leetcode)