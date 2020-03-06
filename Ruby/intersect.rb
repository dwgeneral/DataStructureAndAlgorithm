# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def intersect(nums1, nums2)
    result = []
    nums1.sort!
    nums2.sort!

    nums1.each do |num|
        if nums2.include?(num)
            result << num 
            nums2.delete_at(nums2.index(num))
        end
    end
    result
end