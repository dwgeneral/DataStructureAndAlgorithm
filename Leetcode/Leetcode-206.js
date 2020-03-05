/**
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */ 
// iteration
const reverseList = (head) => {
  let [prev, current] = [null, head]
  while (current) [current.next, prev, current] = [prev, current, current.next]
  return prev
};

// recursion
const reverseList = (head, prev = null) => {
  if (head === null) return prev
  let temp = head.next
  head.next = prev
  return reverseList(temp, head)
}

// recursion2
const reverseList = (head) => {
  if (head.next === null) return head
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}