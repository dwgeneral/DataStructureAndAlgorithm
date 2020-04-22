/**
 * 2. Add Two Numbers
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let res = new ListNode(0), curr = res, carry = 0
  while (l1 || l2 || carry) {
    let x = 0, y = 0
    if (l1) { x = l1.val; l1 = l1.next }
    if (l2) { y = l2.val; l2 = l2.next }
    let sum = x + y + carry
    carry = sum >= 10 ? 1 : 0
    curr.next = new ListNode(sum % 10)
    curr = curr.next
  }
  return res.next
}