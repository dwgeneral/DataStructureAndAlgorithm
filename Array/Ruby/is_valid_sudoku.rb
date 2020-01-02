# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
    # 检查每行
    board.each { |array| return false unless is_valid?(array) }
    # 检查每列
    board.transpose.each { |array| return false unless is_valid?(array) }
    # 检查每个子数独
    ranges = [0..2, 3..5, 6..8]
    ranges.each { |range| 
        first, second, third = [], [], []
        board[range].each { |array| 
            first << array[0..2]
            return false unless is_valid?(first.flatten)
            second << array[3..5]
            return false unless is_valid?(second.flatten)
            third << array[6..8]
            return false unless is_valid?(third.flatten)
        }
    }
    true
end

def is_valid?(array)
    nums = array.select { |str| str != "." }
    nums.count == nums.uniq.count
end


# 数字 1-9 在每一行只能出现一次。
# 数字 1-9 在每一列只能出现一次。
# 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
# 输入:
# [
#   ["5","3",".",".","7",".",".",".","."],
#   ["6",".",".","1","9","5",".",".","."],
#   [".","9","8",".",".",".",".","6","."],
#   ["8",".",".",".","6",".",".",".","3"],
#   ["4",".",".","8",".","3",".",".","1"],
#   ["7",".",".",".","2",".",".",".","6"],
#   [".","6",".",".",".",".","2","8","."],
#   [".",".",".","4","1","9",".",".","5"],
#   [".",".",".",".","8",".",".","7","9"]
# ]
# 输出: true