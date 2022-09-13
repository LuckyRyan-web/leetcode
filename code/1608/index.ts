/**
 * leetcode: https://leetcode.cn/problems/special-array-with-x-elements-greater-than-or-equal-x/
 * Tags: 二分法
 * @author liuyuan
 * @date 2022-09-12 23:36
 * @since 1.0.0
 */

function specialArray(nums: number[]): number {
    nums.sort((a, b) => b - a)

    let left = 1
    let right = nums.length

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        console.log(mid)

        if (nums[mid - 1] >= mid) {
            if (mid === nums.length || nums[mid] < mid) {
                return mid
            } else {
                left = mid + 1
            }
        } else {
            right = mid - 1
        }
    }

    return -1
}
