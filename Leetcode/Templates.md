## Solution Templates

#### 数组
```javascript
// use HashTable
let result = {}
result.hasOwnProperty(elemeng)
```
```javascript
// slow and fast pointers
let slow = 0
for (let fast = 1; fast < nums.length; fast++) {
  if (nums[slow] != nums[fast]) {
    nums[++slow] = nums[fast]
  }
}
return ++slow

// left and right pointers
const maxArea = (height) => {
  let max = 0
  for(let i = 0, j = height.length - 1; i < j;) {
    let area = (j - i) * Math.min(height[i], height[j])
    height[i] < height[j] ? i++ : j--
    max = Math.max(max, area)
  }
  return max
}
```

```javascript 
// Build-in Array API
Array.unshift()
Array.shift()
Array.splice()
Array.sort((a,b) => a - b)
```


#### 链表

```javascript
// reverse Linked-List from startNode to endNode
const reverse = (start, end) => {
  let [prev, curr] = [null, start]
  while (curr != end) [curr.next, prev, curr] = [prev, curr, curr.next]
  return prev
}
// reverse Linked-List -- recursion
const reverseList = (head, prev = null) => {
  if (head === null) return prev
  let temp = head.next
  head.next = prev
  return reverseList(temp, head)
}

// reverse Linked-List -- recursion2
const reverseList = (head) => {
  if (head.next === null) return head
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}

// slow and fast pointers
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
```

#### 递归
```javascript
const climbStairs = (n, result = [0, 1, 2]) => {
  if (n <= 3) return n
  if (result[n] == undefined) {
    result[n] = climbStairs(n-1, result) + climbStairs(n-2, result)
  }
  return result[n]
}

const mergeTwoLists = (l1, l2) => {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
};
```

