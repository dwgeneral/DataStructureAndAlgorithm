# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
  # case1: head is nil
  # case2: head.next is nil
  # case3: normal link
  # case4: all node is same
  
  return head unless head

  curr = head
  while curr && curr.next
    if curr.next.val == curr.val
      curr.next = curr.next.next
    else
      curr = curr.next
    end
  end

  head
end