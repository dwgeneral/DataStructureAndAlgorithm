/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 445. Add Two Numbers II
 * https://leetcode-cn.com/problems/add-two-numbers-ii/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * 方法一：使用辅助栈，先将两个链表数据都压入栈中，然后依次取出计算，进位+1，使用头插法构建到新链表中
 */
const addTwoNumbers = (l1, l2) => {
  let stack1 = [], stack2 = []
  while(l1) { stack1.push(l1.val); l1 = l1.next }  
  while(l2) { stack2.push(l2.val); l2 = l2.next }
  let head = new ListNode(0), carry = 0
  while(stack1.length || stack2.length || carry) {
    let sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry
    let node = new ListNode(sum % 10)
    node.next = head.next
    head.next = node
    carry = sum >= 10 ? 1 : 0
  }
  return head.next
}

/**
 * 方法二：补齐链表位数，递归相加，将进位作为中间状态在递归间传递
 */
const addTwoNumbers = (l1, l2) => {
  let head1 = new ListNode(-1), head2 = new ListNode(-1)
  head1.next = l1; head2.next = l2
  while(l1 || l2) {
    if (l1 && l2) { l1 = l1.next; l2 = l2.next; continue }
    if (l1 != null) { insertHead(0, head2); l1 = l1.next }
    else { insertHead(0, head1); l2 = l2.next }
  }
  let result = new ListNode(0)
  let lastCarry = nodeSum(head1.next, head2.next, result)
  if (lastCarry === 1) insertHead(1, result)
  return result.next
}

const nodeSum = (node1, node2, result) => {
  if (node1 === null) return 0
  let carry = nodeSum(node1.next, node2.next, result)
  let sum = node1.val + node2.val + carry
  insertHead(sum % 10, result)
  return sum >= 10 ? 1 : 0
}

const insertHead = (val, head) => {
  let node = new ListNode(val)
  node.next = head.next
  head.next = node
  return head
}