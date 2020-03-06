# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    profit, index = 0, 0
    while index < prices.length-1 do
        if prices[index] < prices[index+1]
            profit += prices[index+1] - prices[index]
        end
        index += 1
    end
    profit
end