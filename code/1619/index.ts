/**
 * leetcode: https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/
 * Tags: 数组、模拟题
 * @author liuyuan
 * @date 2022-09-14 09:41
 * @since 1.0.0
 */

function trimMean(arr: number[]): number {
    arr.sort((a, b) => a - b)

    let len = arr.length

    let sum = 0

    // 减去开始的 5% 和 结束的 5%
    const start = len / 20
    const end = len - len / 20

    // 总数的 5% + 5%
    const total = len * 0.9

    for (let i = start; i < end; i++) {
        sum = sum + arr[i]
    }

    return sum / total
}
