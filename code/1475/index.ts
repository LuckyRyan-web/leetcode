/**
 * leetcode: https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/
 * Tags: 单调栈、模拟题
 * @author liuyuan
 * @date 2022-09-01 21:39
 * @since 1.0.0
 */

// 其实就是简单的两层遍历数组，只需要满足前一位数要大于后面的数字即可
function finalPrices(prices: number[]): number[] {
    const result: number[] = Array(prices.length).fill(0)

    for (let i = 0; i < prices.length; i++) {
        let temp = 0

        for (let j = i + 1; j < prices.length; j++) {
            // 需要满足折扣价钱小于原价
            if (prices[j] <= prices[i]) {
                temp = prices[j]
                break
            }
        }

        result[i] = prices[i] - temp
    }

    return result
}
