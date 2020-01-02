# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
    # 定义空头节点
    dummy = ListNode.new(0)
    dummy.next = head
    
    # 定义快慢指针
    fast, slow = dummy, dummy
    
    # 提前设定好快指针的值
    i = 0
    while i < n do
        fast = fast.next
        i += 1
    end
    # 当快指针.next == nil时，则slow.next即为要删除的值
    while fast.next
        slow = slow.next
        fast = fast.next
    end
    
    # 删除 slow.next
    slow.next = slow.next.next
    
    # 返回头指针
    dummy.next
end