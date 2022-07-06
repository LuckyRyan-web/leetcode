/**
 * 存储一个对象
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums: number[], target: number) {
    let map: { [key: number]: number } = {}

    for (let i = 0; i <= nums.length; i++) {
        const num = map[target - nums[i]]
        if (num || num === 0) {
            return [map[target - nums[i]], i]
        } else {
            map[nums[i]] = i
        }
    }
}