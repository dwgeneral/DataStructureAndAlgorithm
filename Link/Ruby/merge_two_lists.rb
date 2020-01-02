# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
    prehead = ListNode.new(0)
    prev = prehead
    
    while l1 && l2 do
        if l1.val <= l2.val
            prev.next = l1
            l1 = l1.next
        else
            prev.next = l2
            l2 = l2.next
        end
        prev = prev.next
    end
    prev.next = l1.nil? ? l2 : l1 
    prehead.next
end