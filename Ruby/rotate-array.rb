# @param {Integer[]} nums
# @param {Integer} k
# @return {Void} Do not return anything, modify nums in-place instead.
def rotate(nums, k)
    nums.rotate!(-k)
end

def rotate(nums, k)
    # 元素偏移后的位置 = （原始下标 + 偏移量) % 数组长度
end
# 输入: [1,2,3,4,5,6,7] 和 k = 3
# 输出: [5,6,7,1,2,3,4]

# [1,2]