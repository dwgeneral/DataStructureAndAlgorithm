# @param {Character[]} s
# @return {Void} Do not return anything, modify s in-place instead.
def reverse_string(s)
    count = s.length / 2 
    count.times do |index|
        new_index = s.length - 1 - index
        temp = s[new_index]
        s[new_index] = s[index]
        s[index] = temp
    end
end


