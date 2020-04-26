/**
 * 面试题51. 数组中的逆序对
 * https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 归并排序
 */
const reversePairs = (nums) => {
  return findInversePairNum(nums, 0, nums.length - 1);
};

const findInversePairNum = (arr, start, end) => {
    if (start >= end) return 0;

    const copy = new Array(end - start + 1);
    const length = (end - start) >> 1
    const leftNum = findInversePairNum(arr, start, start + length);
    const rightNum = findInversePairNum(arr, start + length + 1, end);

    let i = start + length, j = end
    let copyIndex = end - start;
    let num = 0;
    while (i >= start && j >= start + length + 1) {
        if (arr[i] > arr[j]) {
            num += j - start - length;
            copy[copyIndex--] = arr[i--];
        } else {
            copy[copyIndex--] = arr[j--];
        }
    }

    while (i >= start) {
        copy[copyIndex--] = arr[i--];
    }

    while (j >= start + length + 1) {
        copy[copyIndex--] = arr[j--];
    }

    for (let k = start; k <= end; ++k) {
        arr[k] = copy[k - start];
    }

    return num + leftNum + rightNum;
}