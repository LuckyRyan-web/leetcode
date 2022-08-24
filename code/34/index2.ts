/**
 * @author liuyuan
 * @date 2022-08-23 22:36
 * @since 1.0.0
 */
export default function test2() {
    /**
     * 时间复杂度: O(logN)
     * 空间复杂度: O(1)
     */
    function searchRange(nums: number[], target: number): number[] {
        const len = nums.length

        if (len === 0) {
            return [-1, -1]
        }

        // 查找第一个出现的位置，如果是没有的话就不存在
        const first = findFirst(nums, target)

        if (first === -1) {
            return [-1, -1]
        }

        const last = findLast(nums, target)

        return [first, last]
    }

    /**
     * 查找目标元素出现的第一个位置, 也就是二分法的 left
     */
    function findFirst(nums: number[], target: number): number {
        let left = 0
        let right = nums.length - 1

        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            const val = nums[mid]

            if (val < target) {
                // 搜索的区间为 [left + 1, right]
                left = mid + 1
            } else if (val === target) {
                // 搜索的区间为 [left, right]
                right = mid
            } else {
                // 搜索的区间为 [left, mid - 1]
                right = mid - 1
            }
        }

        if (nums[left] === target) {
            return left
        }

        return -1
    }

    /**
     * 这里要注意，有可能
     */
    function findLast(nums: number[], target: number): number {
        let left = 0
        let right = nums.length - 1

        while (left < right) {
            const mid = Math.floor((left + right + 1) / 2)
            const val = nums[mid]

            if (val < target) {
                // 搜索的区间为 [left + 1, right]
                left = mid + 1
            } else if (val === target) {
                // 这里要注意，有可能是第一个位置，也有可能是最后一个位置，
                // 搜索的区间为 [mid, right]
                left = mid
            } else {
                // 搜索的区间为 [left, mid - 1]
                right = mid - 1
            }
        }

        return left
        // if (nums[left] === target) {
        //     return left
        // }
        // return -1
    }

    return {
        searchRange,
    }
}
