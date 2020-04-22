/**
 * 833. Find And Replace in String
 * https://leetcode-cn.com/problems/find-and-replace-in-string/
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
/**
 * 解题思路：将字符串转换为数组，用子数组做容器来装替换的子串，最后 join 一下即为最终结果
 * 具体实现：遍历indexes数组，判断 S.substring 与 sources[i] 是否匹配，如果匹配，将 sArray[起始字符] 的值直接替换为 [targets[i]]，该子串剩余字符置为 ""
 * 举例：S = "abcd", indexes = [0, 2], sources = ["a", "cd"], targets = ["eee", "ffff"]
 * =>  [ [ 'eee' ], 'b', 'c', 'd' ]
 * =>  [ [ 'eee' ], 'b', [ 'ffff' ], '' ]
 * => eeebffff
 */
const findReplaceString = (S, indexes, sources, targets) => {
  if (!S.length || !indexes.length || !sources.length || !targets.length) return S
  let sArray = S.split('')
  for (let i = 0; i < indexes.length; i++) {
    let sourceChars = sources[i], targetChars = targets[i]
    let subStr = S.substring(indexes[i], indexes[i]+sourceChars.length)
    if (subStr != sourceChars) continue
    sArray[indexes[i]] = [targetChars]
    let restToReplace = sourceChars.length - 1
    while (restToReplace > 0) {
      restToReplace--
      sArray[++indexes[i]] = ""
    }
  }
  return sArray.join('')
}