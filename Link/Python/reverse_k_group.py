# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# 解法一：用栈的先进后出特性实现翻转
class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        if head == None or head.next == None:
            return head

        # 定义一个栈，用来存放要翻转的数据
        stack = []
        # 定义一个dummy节点，便于对链表进行操作
        dummy = ListNode(0)
        
        curr, dummy.next = head, head
        temp = dummy

        while curr:
            # 入栈
            stack.append(curr)
            curr = curr.next
            # 栈内元素达到一组（也就是k个），出栈并挂到新链表中
            if len(stack) == k:
                while stack:
                    temp.next = stack.pop()
                    temp = temp.next
        while stack:
            temp.next = stack.pop(0)
            temp = temp.next
        
        return dummy.next

# 解法二：递归
# class Solution:
#     def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
#         curr, count = head, 0
        
#         # 遍历链表，找到分组节点
#         while count != k and curr:
#             curr = curr.next
#             count += 1
#         if count == k:
#             curr = self.reverseKGroup(curr, k)
#             while count > 0:
#                 # 用 temp 暂存待翻转的值
#                 temp = head.next
#                 # 先关联上后续链表节点
#                 head.next = curr
#                 # 将当前结果存入curr变量，以便对head变量进行后续操作
#                 curr = head
#                 # 用 head 继续处理待翻转的值
#                 head = temp
#                 count -= 1
#             head = curr

#         return head


# 1 -> 2 -> 3 -> 4 -> 5

# k = 3

# head = (1)
# curr = (1)
# count = 0

# while: 
#     count = 3
#     curr = (4)

# if count == k:
#     curr = 4 -> 5
#     while 3 > 0:
#         temp = (2)
#         head = 1 -> 4 -> 5
#         curr = 1 -> 4 -> 5
#         head = (2)
#         count = 2
#     while 2 > 0:
#         temp = (3)
#         head = 2 -> 1 -> 4 -> 5
#         curr = 2 -> 1 -> 4 -> 5
#         head = (3)
#         count = 1
#     while 1 > 0
#         temp = nil
#         head = 3 -> 2 -> 1 -> 4 -> 5
#         curr = 3 -> 2 -> 1 -> 4 -> 5
#         head = nil
#         count = 0

#     head = 3 -> 2 -> 1 -> 4 -> 5
#     return head





#     curr = self.reverseKGroup(curr, k):
#         head = 4 -> 5
#         curr = 4 -> 5
#         count = 0
#         while false
#         if false
#         return 4 -> 5