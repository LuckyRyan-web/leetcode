/**
 * @author liuyuan
 * @date 2022-07-15 22:16
 * @since 1.0.0
 */

function addToArrayForm(num: number[], k: number): number[] {
    const res: number[] = []

    // 从数组的最右边开始计算，来模拟数字相加操作
    const len = num.length

    for (let i = len - 1; i >= 0; i--) {
        let carry = num[i] + (k % 10)

        k = Math.floor(k / 10)

        // 两个个位数相加最大也就是 10，所以只需要考虑 >= 10 的情况下减掉 10
        if (carry >= 10) {
            k++
            carry = carry - 10
        }

        res.push(carry)
    }

    // 如果 k 还是有数字的话，就是出现了 k 大于 num 数字的情况
    while (k > 0) {
        res.push(k % 10)
        k = Math.floor(k / 10)
    }

    res.reverse()

    return res
}
