/**
 * 983. Minimum Cost For Tickets
 * https://leetcode-cn.com/problems/minimum-cost-for-tickets/
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
/**
 * 方法一：贪心算法
 * 定义两个队列，分别记录最近7天和最近30天的出行日，以及记录假设这一天买7天票是多少钱，30天票是多少钱
 * 通过队列维护7天内和30天内，过期的出行日移出队列，队列的首位则永远是最低的金额
 * 每个出行日都取：买1天，买7天和买30天票的最小值，最后的累加值 result 即最低消费
 */
const mincostTickets = (days, costs) => {
  let outDaysOfWeek = [], outDaysOfMonth = [], result = 0
  days.forEach((day, _) => {
    while(outDaysOfWeek.length && outDaysOfWeek[0][0] + 7 <= day) outDaysOfWeek.shift()
    while(outDaysOfMonth.length && outDaysOfMonth[0][0] + 30 <= day) outDaysOfMonth.shift()
    outDaysOfWeek.push([day, result + costs[1]])
    outDaysOfMonth.push([day, result + costs[2]])
    result = Math.min(result + costs[0], outDaysOfWeek[0][1], outDaysOfMonth[0][1])
  })
  return result
}

/**
 * 方法二：DP
 * 定义状态：dp[i] 表示 1..i 天的最低消费金额
 * 状态转移方程：
 *  - 如果第 i 天不出行，则 dp[i] = dp[i-1]
 *  - 如果第 i 天出行
 *    - 如果 7天内没有出行 dp[i] = dp[i-1] + costs[0]
 *    - 如果 7天内有出行, 则7天票可以覆盖第i天的出行 dp[i] = Math.min(dp[i], dp[j] + costs[1])  j 为7天内出行日
 *    - 如果 30天内有出行, 则30天票可以覆盖第i天的出行 dp[i] = Math.min(dp[i], dp[k] + costs[2]) k 为30天内出行日
 */
const mincostTickets = (days, costs) => {
  const lastDay = days[days.length-1], dp = new Array(lastDay+1).fill(0), daysSet = new Set()
  days.forEach((day, _) => daysSet.add(day))
  for (let i = 1; i < dp.length; i++) {
    if (!daysSet.has(i)) { dp[i] = dp[i-1]; continue }
    dp[i] = dp[i-1] + costs[0]
    let j = i >= 7 ? i - 7 : 0, k = i >= 30 ? i - 30 : 0
    dp[i] = Math.min(dp[i], dp[j] + costs[1], dp[k] + costs[2])
  } 
  return dp[lastDay]
}