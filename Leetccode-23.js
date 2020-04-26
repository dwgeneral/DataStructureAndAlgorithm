/**
 * 23. Merge k Sorted Lists
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
 * 方法一：分治 + 归并排序
 */
const mergeKLists = (lists) => {
  let n = lists.length, result = lists[0]
  if (n === 0) return null
  for (let i = 1; i < n; ++i) {
    if (lists[i]) result = mergeTwoLists(result, lists[i])
  }
  return result
}

const mergeTwoLists = (l1, l2) => {
  let preHead = new ListNode(-1), preNode = preHead
  while (l1 && l2) {
    if (l1.val <= l2.val) { preNode.next = l1; l1 = l1.next }
    else { preNode.next = l2; l2 = l2.next }
    preNode = preNode.next
  }
  preNode.next = l1 ? l1 : l2
  return preHead.next
}

/**
 * 方法二：优先队列
 */