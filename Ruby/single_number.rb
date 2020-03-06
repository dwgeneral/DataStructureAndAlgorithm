# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    nums.select { |num| nums.index(num) == nums.rindex(num) }.first
end