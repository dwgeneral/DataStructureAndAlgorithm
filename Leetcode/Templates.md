#### 链表

```javascript
// 反转链表 -- recursion
const reverseList = (head, prev = null) => {
  if (head === null) return prev
  let temp = head.next
  head.next = prev
  return reverseList(temp, head)
}

// 反转链表 -- recursion2
const reverseList = (head) => {
  if (head.next === null) return head
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}

// 反转链表 -- iteration
const reverseList = (head) => {
  let [prev, current] = [null, head]
  while (current) [current.next, prev, current] = [prev, current, current.next]
  return prev
};
```