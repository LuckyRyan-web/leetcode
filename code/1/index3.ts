/** 上面的 obj 拿到值之后为 0 的情况，需要单独判断 === 0， 用 map 会更好 */
export function twoSum(nums: number[], target: number) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }

    return null
}
