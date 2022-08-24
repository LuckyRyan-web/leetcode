/**
 * leetcode: https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Tags:
 * @author liuyuan
 * @date 2022-08-23 17:35
 * @since 1.0.0
 */

export function searchRange(nums: number[], target: number): number[] {
    const leftBoard = getLeftBoard(nums, target)
    const rightBoard = getRightBoard(nums, target)

    // 先判断是不是不可能的值
    if (leftBoard === nums.length - 1 || rightBoard === 0) {
        return [-1, -1]
    }

    if (rightBoard - leftBoard <= 1) {
        return [-1, -1]
    }

    return [leftBoard + 1, rightBoard - 1]
}

/**
 * 获取重复值的左边界
 */
function getLeftBoard(nums: number[], target: number) {
    let left = 0
    let right = nums.length - 1

    let board = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] >= target) {
            // 左边界一定在mid左边（不含mid）
            right = mid - 1
            board = right
        } else {
            // 左边界在mid右边（含mid）
            left = mid + 1
        }
    }

    return board
}

/**
 * 获取重复值的右边界
 */
function getRightBoard(nums: number[], target: number) {
    let left = 0
    let right = nums.length - 1

    let board = 0

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] <= target) {
            // 右边界一定在mid右边（不含mid）
            left = mid + 1
            board = left
        } else {
            // 右边界在mid左边（含mid）
            right = mid - 1
        }
    }

    return board
}
