/**
 * 25. Reverse Nodes in k-Group
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// iteration + recursion
const reverseKGroup = (head, k) => {
  if (head === null) return head
  // define startNode and endNode
  let start = head, end = head
  
  // return self if linked list's length is smaller than k
  for (let i = 0; i < k; i++) {
    if (end === null) return head
    end = end.next
  }
  // reverse from startNode to endNode
  let newHead = reverse(start, end)
  // recursive the rest nodes and concat the result
  start.next = reverseKGroup(end, k)
  return newHead
};

// reverse from startNode to endNode
const reverse = (start, end) => {
  let [prev, curr] = [null, start]
  while (curr != end) [curr.next, prev, curr] = [prev, curr, curr.next]
  return prev
}

/**
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.
 */