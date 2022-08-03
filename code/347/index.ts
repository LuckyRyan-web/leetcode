/**
 * @author liuyuan
 * @date 2022-08-03 23:00
 * @since 1.0.0
 */

function topKFrequent(nums: number[], k: number): number[] {
    let length: number = nums.length
    if (k >= length) {
        return nums
    }
    let numsMap = new Map()
    for (let i = 0; i < length; i++) {
        const n: number | undefined = numsMap.get(nums[i])
        numsMap.set(nums[i], typeof n === 'number' ? n + 1 : 1)
    }
    return Array.from(numsMap)
        .sort((a: [number, number], b: [number, number]) => b[1] - a[1])
        .slice(0, k)
        .map((item) => item[0])
}
