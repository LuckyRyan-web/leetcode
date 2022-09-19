/**
 * leetcode: https://leetcode.cn/problems/sort-array-by-increasing-frequency/
 * Tags: 简单模拟题
 * @author liuyuan
 * @date 2022-09-19 15:59
 * @since 1.0.0
 */

function frequencySort(nums: number[]): number[] {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const data = nums[i]

        if (map.has(data)) {
            const num = map.get(data) as number
            map.set(data, num + 1)
        } else {
            map.set(data, 1)
        }
    }

    nums.sort((a, b) => {
        if (map.get(a) !== map.get(b)) {
            return map.get(a) - map.get(b)
        } else {
            return b - a
        }
    })

    return nums
}
