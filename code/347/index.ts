/**
 * @author liuyuan
 * @date 2022-08-03 23:00
 * @since 1.0.0
 */

export default function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            let count = map.get(nums[i]) as number
            map.set(nums[i], count + 1)
        }
    }

    const arr = Array.from(map)
    arr.sort((a, b) => b[1] - a[1])

    const result = arr.map((v) => v[0])

    return result.slice(0, k)
}
