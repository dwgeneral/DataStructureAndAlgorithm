/**
 * 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 我的双指针解法（比常规的解法优雅）
const hasCycle = (head) => {
  if (head === null) return false  
  let slow = head, fast = head.next
  while (fast && fast.next) {
    if (fast == slow) return true
    slow = slow.next
    fast = fast.next.next
  }
  return false
};

// 常规双指针解法
const hasCycle = (head) => {
  if (!head || !head.next) return false
  let slow = head, fast = head.next
  while (slow != fast){
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};