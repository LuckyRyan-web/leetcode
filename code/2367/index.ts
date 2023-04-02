/**
 * leetcode: https://leetcode.cn/problems/number-of-arithmetic-triplets/description/
 * Tags: 数组、哈希表
 * @author liuyuan
 * @date 2023-03-31 23:11
 * @since 1.0.0
 */

// 给你一个下标从 0 开始、严格递增 的整数数组 nums 和一个正整数 diff 。如果满足下述全部条件，则三元组 (i, j, k) 就是一个 算术三元组 ：
// i < j < k ，
// nums[j] - nums[i] == diff 且
// nums[k] - nums[j] == diff
// 返回不同 算术三元组 的数目。

/** 算术三元组的数目 */
function arithmeticTriplets(nums: number[], diff: number): number {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] === diff) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[k] - nums[j] === diff) {
                        count++
                    }
                }
            }
        }
    }

    return count
}

/**
 * nums[j] - nums[i] == diff 且 nums[k] - nums[j] == diff 可以把两者相加
 * 得到 nums[k] - nums[i] == diff * 2
 */
function arithmeticTripletsMap(nums: number[], diff: number): number {
    let count = 0
    const map = new Map()

    /** 初步先把所有的数据都存到 map 里面 */
    for (let i of nums) {
        map.set(i, (map.get(i) || 0) + 1)
    }

    /**
     * 从 map 计算是否存在符合预期的值
     * 此时 diff 和 i 已知，只需要判断 j 是否存在,即 (map.has(i + diff)) 来判断 j
     * 如果 j 存在，那么就可以判断 k 是否存在，即 (map.has(i + diff * 2)) 来判断 k
     * 如果两个都存在，那么就可以算出一个算术三元组
     */
    for (let i of nums) {
        if (map.has(i + diff) && map.has(i + diff * 2)) {
            count++
        }
    }

    return count
}
