/**
 * leetcode: https://leetcode.cn/problems/number-of-1-bits/
 * Tags: 二进制
 * @author liuyuan
 * @date 2022-08-25 08:56
 * @since 1.0.0
 */

export function hammingWeight(n: number): number {
    let count = 0

    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
     * toString 内的参数表示转换的基数，也就是进制
     */
    for (let i of n.toString(2)) {
        if (i === '1') {
            count++
        }
    }

    return count
}
