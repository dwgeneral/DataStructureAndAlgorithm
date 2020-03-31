/**
 * 820. Short Encoding of Words
 * https://leetcode-cn.com/problems/short-encoding-of-words/
 * @param {string[]} words
 * @return {number}
 */
// Trie树
const minimumLengthEncoding = (words) => {
  let minLen = 0
  const trie = new Trie()
  words.sort((a,b) => b.length - a.length)
  words.forEach(word => minLen += trie.insert(word))
  return minLen
}

class Trie {
  constructor() {
    this.root = {}
  }

  insert(word) {
    let isNew = false
    let node = this.root
    for (let i = word.length-1; i >= 0; i--) {
      if (!node[word[i]]) { node[word[i]] = {}; isNew = true }
      node = node[word[i]]
    }
    return isNew ? word.length + 1 : 0
  }
}

// Set 集合去除重复后缀
const minimumLengthEncoding = (words) => {
  let wordSet = new Set(words), result = 0
  for (let word of wordSet) {
    for (let i = 1; i < word.length; i++) {
      let target = word.slice(i)
      wordSet.has(target) && wordSet.delete(target)
    }
  }
  wordSet.forEach(word => result += word.length + 1)
  return result
}