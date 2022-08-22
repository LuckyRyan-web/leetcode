/**
 * leetcode: https://leetcode.cn/problems/valid-perfect-square/
 * Tags: 二分法
 * @author liuyuan
 * @date 2022-08-22 22:43
 * @since 1.0.0
 */

export default function isPerfectSquare(num: number): boolean {
    if (num === 1) {
        return true
    }

    let left = 0
    let right = num

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (Math.pow(mid, 2) < num) {
            left = mid + 1
        } else if (Math.pow(mid, 2) > num) {
            right = mid - 1
        } else {
            return true
        }
    }

    return false
}
