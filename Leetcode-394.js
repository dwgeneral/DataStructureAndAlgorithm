/**
 * 394. Decode String
 * https://leetcode-cn.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  let stack = [], result = "", multi = 0
  for (let char of s) {
    if (char === '[') {
      stack.push([multi, result])
      result = ""; multi = 0
    } 
    else if (char === ']') {
      let [times, lastStr] = stack.pop()
      result = lastStr + result.repeat(times)
    } 
    else if (char.match(/\d/)) {
      multi = multi * 10 + Number(char)
    }
    else result += char
  }
  return result
}