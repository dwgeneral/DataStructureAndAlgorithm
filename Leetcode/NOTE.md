## 题目

#### 数组
- [#1 Two Sum](./Leetcode-1-380.js)
- [#21 merge-two-sorted-lists](./Leetcode-21-380.js)
- [#26 remove-duplicates-from-sorted-array](./Leetcode-26-380.js)
- [#66 plus-one](./Leetcode-66-380.js)
- [#88 merge-sorted-array](./Leetcode-88-380.js)
- [#189 rotate-array](./Leetcode-189-380.js)
- [#283 move-zeroes](./Leetcode-283-380.js)

- [container-with-most-water/](https://leetcode-cn.com/problems/container-with-most-water/)
- [climbing-stairs/](https://leetcode.com/problems/climbing-stairs/)
- [3sum/](https://leetcode-cn.com/problems/3sum/)


#### 链表
- [reverse-linked-list/](https://leetcode.com/problems/reverse-linked-list/)
- [swap-nodes-in-pairs](https://leetcode.com/problems/swap-nodes-in-pairs)
- [linked-list-cycle](https://leetcode.com/problems/linked-list-cycle)
- [linked-list-cycle-ii](https://leetcode.com/problems/linked-list-cycle-ii)
- [reverse-nodes-in-k-group/](https://leetcode.com/problems/reverse-nodes-in-k-group/)

#### 哈希表
- [#1. Two Sum](./Leetcode-1-380.js)
- [#49. Group Anagrams](./Leetcode-49-380.js)
- [#242. Valid Anagram](./Leetcode-242-380.js)

#### 二叉树遍历
- [#94. Binary Tree Inorder Traversal](./Leetcode-94-380.js)
- [#144. Binary Tree Preorder Traversal](./Leetcode-144-380.js)
- [#429. N-ary Tree Level Order Traversal](./Leetcode-429-380.js)
- [#589. N-ary Tree Preorder Traversal](./Leetcode-589-380.js)
- [#590. N-ary Tree Postorder Traversal](./Leetcode-590-380.js)

### 递归、回溯
- [#22. Generate Parentheses](./Leetcode-22-380.js)
- [#46. Permutations](./Leetcode-46-380.js)
- [#47. Permutations II](./Leetcode-47-380.js)
- [#70. Climbing Stairs](./Leetcode-70-380.js)
- [#77. Combinations](./Leetcode-77-380.js)
- [#98. Validate Binary Search Tree](./Leetcode-98-380.js)
- [#104. Maximum Depth of Binary Tree](./Leetcode-104-380.js)
- [#105. Construct Binary Tree from Preorder and Inorder Traversal](./Leetcode-105-380.js)
- [#111. Minimum Depth of Binary Tree](./Leetcode-111-380.js)
- [#226. Invert Binary Tree](./Leetcode-226-380.js)
- [#236. Lowest Common Ancestor of a Binary Tree](./Leetcode-236-380.js)


## 学习笔记

#### Array 数组
  - 是一种线性表结构，它用一组连续的存储空间，来存储一组具有相同类型的数据
  - 线性表是指数据排列像一条线一样的数据结构，数组，链表，队列，栈，都是线性表结构
#### LinkedList 链表
  - 是一种线性表结构，它通过指针将一组零散的内存块串联在一起，这些内存块中除了存储数据外，还会记录下一个内存块的地址
  - 链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的
  - 链表存在多种形式
    - 单链表
      - 只有一个后继指针的链表
    - 双链表
      - 一个后继指针，一个前驱指针
      - 占用更多空间，插入和删除效率更高
      - 空间换时间的思想
      - 实际使用例子：Java 的 LinkedHashMap
    - 循环链表
      - 尾节点指针指向头节点的链表
      - 可以是单链表，也可以是双链表
      - 约瑟夫问题
    - 静态链表
      - 用二维数组描述的链表称为静态链表
#### SkipList 跳表
  ![https://redisbook.readthedocs.io/en/latest/_images/skiplist.png](https://redisbook.readthedocs.io/en/latest/_images/skiplist.png)
  - 出现背景：为了弥补链表在查询中的缺陷而设计
  - 工程应用：Redis中应用广泛
  - 掌握范畴：以理解它的工作原理为主，一般不会在面试中出题
  - 设计思想：
    - 以空间换时间
    - 增加多级索引（指针）来达到跨越查询，以此来提高查询效率
    - 每个节点除了存储本身的 Next指针外，还需要存储多个跳级的指针，占用了更多的内存空间，提高了效率，此之谓空间换时间
  - 缺点：
    - 在工程中，一旦涉及到节点的增加和删除，索引就要重新更新，进而导致各个节点的跨级不一致，导致维护成本高，导致插入和删除操作的时间复杂度也会达到O(logn)而不是O(1)了
  - 复杂度分析：
    - 时间复杂度：O(logn)
    - 空间复杂度：O(n)
#### Stack 栈
  - 是一种“操作受限”的线性表，只允许在一端插入和删除数据，先进后出
  - 栈既可以用数组来实现，也可以用链表来实现
  - 用数组实现的栈，叫做顺序栈
  - 用链表实现的栈，叫做链式栈
#### Queue 队列
  - 是一种“操作受限”的线性表，只支持入队和出队操作，先进先出
  - 队列既可以用数组来实现，也可以用链表来实现
  - 用数组实现的队列，叫做顺序队列
  - 用链表实现的队列，叫做链式队列
  - Priority Queue 优先队列
    - 插入操作：O(1)
    - 取出操作：O(logn) -- 按照元素的优先级取出
    - 底层实现的数据结构较为复杂和多样：heap, BST, 红黑树, AVL, treap

#### 哈希表
- Hash Table
  - 将KeyValuePair通过哈希函数映射到数组中具体下标。存储这种KeyValuePair的数据结构

- Hash Collisions（哈希碰撞）
  - 两组KV，通过哈希函数得到了相同的下标，那么就在此下标对应的位置构建一个链表，来存储数据

#### 树的遍历
- 前序遍历  根-左-右
- 中序遍历  左-根-右
- 后续遍历  左-右-根
- 树的遍历一般都是采用递归的方式，因为树结构用循环的话会很复杂和麻烦。我们要拥抱递归

```python
// 树的遍历代码模版
def preorder(self, root):
	if root:
		self.traverse_path.append(root.val)
		self.preorder(root.left)
		self.preorder(root.right)

def inorder(self, root):
	if root:
		self.inorder(root.left)
		self.traverse_path.append(root.val)
		self.inorder(root.right)

def postorder(self, root):
	if root:
		self.postorder(root.left)
		self.postorder(root.right)
		self.traverse_path.append(root.val)
```

#### Binary Search Tree
- 动态示例Demo：[https://visualgo.net/zh/bst](https://visualgo.net/zh/bst)
- 指一棵空树或者具有下列性质的二叉树
    - 左子树上所有结点的值 < 根结点值
    - 右子树上所有结点的值 > 根结点值
- 常见操作
    - 查询 O(logn)
    - 插入 O(logn)
    - 删除 O(logn)
        - 如果删除的结点存在子结点，则先找到比该结点值大的第一个元素，将其替换后，删除该结点
- tips
  - 树和图最关键的差别，就是看有没有环
  - 链表是特殊化的树，树是特殊化的图（没有环的图就是树）


#### 递归、回溯
```python
// 递归代码模版
def recursion(level, params1, params2, ...):
	# recursion terminator 终止条件
	if level > MAX_LEVEL
		process_result
		return

	# process logic in current level 处理当前层逻辑
	process(level, data...)

	# drill down 下探到下一层
	self.recursion(level+1, p1, ...)
	
	# reverse the current level status if needed 清理当前层
```

```python
// 回溯代码模版
result = []
def backtrack(路径，选择列表):
	if 满足结束条件:
		result.add(路径)
		return
	for 选择 in 选择列表
		做选择
		backtrack(路径，选择列表)
		撤销选择
```

- Backtracking 回溯
  - 回溯法是暴力搜索法中的一种（from wikipedia）
  - 回溯法是一种可以找出所有（或一部分）解的一般性算法，尤其适用于约束满足问题
  - 回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案。回溯法通常用最简单的递归方法来实现，在反复重复上述的步骤后可能出现两种情况：
      - 找到一个可能存在的正确的答案
      - 在尝试了所有可能的分步方法后宣告该问题没有答案
  - 在最坏的情况下，回溯法会导致一次复杂度为指数时间的计算。
  - 参考资料
      - [https://zh.wikipedia.org/wiki/回溯法](https://zh.wikipedia.org/wiki/%E5%9B%9E%E6%BA%AF%E6%B3%95)

- 如何使用Leetcode进行算法学习
  - 不在于AC的题数量，而是针对每道题，要多练（五遍）
    - 第一遍：
      - 计时五分钟思考，写出自己能想到的可能的解法的伪代码，一般五分钟内能想到2-3个解法就是极好的
      - 如果完全没有思路，熬五分钟后直接去官网+中文网站看题解，选出3个题解，背下来
    - 第二遍：
      - 自己重新看这道题，从思路整理到代码AC，看自己是否能一遍过，如果不行，重复此操作
      - 考虑是否将此题加入到后续练习题目中
    - 第三遍：
      - 三天后，重新做自己记录的练习题目
    - 第四遍：
      - 一周后，重新做自己记录的练习题目
      - 考虑是否此题已完全掌握，移出练习题目
    - 第五遍：
      - 面试前, 重新做