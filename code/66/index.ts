/**
 * @author liuyuan
 * @date 2022-07-17 14:59
 * @since 1.0.0
 */
export function plusOne(digits: number[]): number[] {

    for (let i = digits.length - 1; i >= 0; i--) {

        // 只要判断这一位数是不是 9, 如果不是 9 的话这一位数加一即可
        if (digits[i] !== 9) {
            digits[i]++
            return digits
        } else {
            // 如果是 9 的话，这一位数赋值为 0, 然后进行下一次循环，使得下一个下标加 1 即可
            digits[i] = 0
        }
    }

    // 以下为 [9,9,9] 之类的情况, 也就是上面的 for 循环遍历完了还没执行到不为 9 的 return 那一步,也就是需要数组前面 +1
    digits.unshift(1)

    return digits
};