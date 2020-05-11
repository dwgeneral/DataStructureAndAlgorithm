/**
 * 155. Min Stack
 * https://leetcode-cn.com/problems/min-stack/
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.array = [] // [val, minVal]
    this.len = 0
  }
}
/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.len) this.array.push([x, Math.min(x, this.array[this.len-1][1])])  
  else this.array.push([x, x])
  this.len++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.array.pop()
  this.len--
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.array[this.len-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.array[this.len-1][1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */