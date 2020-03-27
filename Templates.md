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
```

```javascript
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
```

```javascript
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

#### 二叉树
```javascript
// 中序遍历
const inorderTraversal = (root) => {
  if (!root) return []  
  return inorderTraversal(root.left).concat(root.val, inorderTraversal(root.right))
}

// 中序遍历
const inorderTraversal = (root, result = []) => {
 if (root) {
   inorderTraversal(root.left, result)
   result.push(root.val)
   inorderTraversal(root.right, result)
 }
 return result
}
```

```javascript
// 二叉树前序遍历
const preorderTraversal = (root, result = []) => {
  if (root) {
    result.push(root.val)
    preorderTraversal(root.left, result)
    preorderTraversal(root.right, result)
  }
  return result
}

// N叉树前序遍历
const preorder = (root, result = []) => {
  if (root) {
    result.push(root.val)
    for (let i = 0; i < root.children.length; i++) {
      preorder(root.children[i], result)
    }
  }  
  return result
}

// N叉树后序遍历 
const postorder = (root, result = []) => {
  if (root) {
    for (let i = 0; i < root.children.length; i++) {
      postorder(root.children[i], result)
    }
    result.push(root.val)
  }
  return result
}
```

```javascript
// 使用队列实现N叉树广度优先搜索 (层序遍历)
const levelOrder = (root) => {
  if (!root) return []
  let queue = [root], result = []
  while(queue.length) {
    let level = []
    let len = queue.length
    while(len) {
      let node = queue.shift()
      level.push(node.val)
      if (node.children && node.children.length) {
        queue.push(...node.children)
      }
      len-- 
    }
    result.push(level)
  }
  
  return result
}
```

#### 递归
```javascript
// 递归代码模版
const recursion = (level, params) => {
  // recursion terminator
  if (level > MAX_LEVEL) {
    process_result
    return
  }
  // process current level
  process(level, params)
  // drill down
  recursion(level + 1, params)
  // clean current level status if needed	
}
```

```javascript
// 数组递归
const climbStairs = (n, result = [0, 1, 2]) => {
  if (n <= 3) return n
  if (result[n] == undefined) {
    result[n] = climbStairs(n-1, result) + climbStairs(n-2, result)
  }
  return result[n]
}

// 链表递归
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

// 字符串递归
const generateParenthesis = (n, result = []) => {
  const _generator = (left, right, str) => {
    if (left == n && right == n) { result.push(str); return }  
    if (left < n) _generator(left + 1, right, str + '(')      
    if (right < left) _generator(left, right + 1, str + ')')
  }
  _generator(0, 0, '')
  return result
}
```

#### 回溯递归
```javascript
// 回溯代码模版
const backtrack = (path, choiceList) => {
  if (path is satisfied) {
    result.push(path)
    return
  }
  for (let choice in choiceList) {
    do choice
    backtrack(path, choiceList)
    revert choice
  }
}
```

```javascript
// 回溯算法解决全排列问题
const permute = (nums) => {
  let result = []  
  backtrack(result, [], nums)
  return result
};

const backtrack = (result, tempList, nums) => {
  if (tempList.length === nums.length) return result.push([...tempList]) 
  for (let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) continue
    tempList.push(nums[i])
    backtrack(result, tempList, nums)
    tempList.pop()
  }
}
```

#### 分治递归
```javascript
// 分治代码模版
  const divide_conquer = (problem, params) => {
    // recursion terminator
    if (problem == null) {
      process_result
      return
    } 
    // process current problem
    subproblems = split_problem(problem, data)
    subresult1 = divide_conquer(subproblem[0], p1)
    subresult2 = divide_conquer(subproblem[1], p1)
    subresult3 = divide_conquer(subproblem[2], p1)
    ...
    // merge
    result = process_result(subresult1, subresult2, subresult3)
    // revert the current level status
  }
```

#### 深度优先搜索(DFS)
```javascript
// 递归实现
const dfs = (node) => {
  if (visited.has(node)) return
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}

// 手动维护栈实现 TODO
```

#### 广度优先搜索(BFS)
```javascript
// 队列实现
const BFS = (root) => {
  if (!root) return []
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val) 
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
}
```

#### 二分查找(Binary Search)
```javascript
// 二分查找代码模版
let left = 0, right = nums.length-1
while (left < right) {
  let mid = Math.floor((left + right) / 2)
  if (nums[mid] === target) {
    // find the target 
    return
  } else if (array[mid] < target) left = mid + 1
  else right = mid - 1
}
```

#### 动态规划(Dynamic Programming)
```javascript
// 最小路径和问题
const minPathSum = (grid) => {
  let rowLength = grid.length, colLength = grid[0].length
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (row === 0 && col === 0) continue
      else if (row === 0) grid[row][col] += grid[row][col-1]
      else if (col === 0) grid[row][col] += grid[row-1][col]
      else grid[row][col] += Math.min(grid[row-1][col], grid[row][col-1])
    }
  }
  return grid[rowLength-1][colLength-1]
}
```