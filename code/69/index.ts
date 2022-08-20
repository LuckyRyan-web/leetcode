/**
 * leetcode: https://leetcode.cn/problems/sqrtx/
 * Tags: 二分法
 * @author liuyuan
 * @date 2022-08-20 14:29
 * @since 1.0.0
 */
function mySqrt(x: number): number {
    if (x === 1) {
        return 1
    }

    let left = 0

    let right = Math.floor(x / 2)
    let result = -1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (Math.pow(mid, 2) <= x) {
            left = mid + 1

            // 每次 <= 的时候，都需要存储上一个位置
            result = mid
        } else if (Math.pow(mid, 2) > x) {
            right = mid - 1
        }
    }

    return result
}
