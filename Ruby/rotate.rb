# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def rotate(matrix)
    matrix.length.times do |i|
        (i..matrix.length-1).to_a.each do |j|
            tmp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = tmp;
        end
    end
    matrix.map(&:reverse!)
end