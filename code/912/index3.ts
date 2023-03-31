/**
 * @author liuyuan
 * @date 2022-08-19 11:54
 * @since 1.0.0
 */

export function QuickSort() {
    function swap(nums: number[], a: number, b: number) {
        const temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
    }

    function helper(nums: number[], start: number, end: number) {
        if (start >= end) {
            return
        }

        const pivotIndex = start + ((end - start) >>> 1)
        const pivot = nums[pivotIndex]

        let i = start
        let j = end

        while (i <= j) {
            while (nums[i] < pivot) {
                i++
            }

            while (nums[j] > pivot) {
                j--
            }

            if (i <= j) {
                swap(nums, i, j)
                i++
                j--
            }
        }

        helper(nums, start, j)
        helper(nums, i, end)
    }

    /**
     * 时间复杂度：平均 O(Nlog N)、最好 O(Nlog N)、最坏 O(n²)
     * 空间复杂度：O(Nlog N)
     * @param {number[]} nums
     * @return {*}  {number[]}
     */
    function sortArray(nums: number[]): number[] {
        helper(nums, 0, nums.length - 1)
        return nums
    }
}
