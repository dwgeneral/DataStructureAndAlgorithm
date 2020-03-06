/**
 * 24. Swap Nodes in Pairs
 * https://leetcode.com/problems/swap-nodes-in-pairs/
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
const swapPairs = (head) => {
  let dummy = new ListNode(0)  
  dummy.next = head
  let temp = dummy
  while (head && head.next) {
    let firstNode = head, secondNode = head.next
    
    // swaping
    temp.next = secondNode
    firstNode.next = secondNode.next
    secondNode.next = firstNode
    
    // for next swap
    temp = firstNode
    head = firstNode.next
  }
  return dummy.next
};

// recursion
const swapPairs = (head) => {
 if (head === null || head.next === null) return head
 let tmp = head.next
 head.next = swapPairs(tmp.next)
 tmp.next = head
 return tmp
};

/**
 * Given a linked list, swap every two adjacent nodes and return its head.
  
You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
 */