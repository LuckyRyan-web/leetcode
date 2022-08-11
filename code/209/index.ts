/**
 * leetcode: https://leetcode.cn/problems/minimum-size-subarray-sum/submissions/
 * @author liuyuan
 * @date 2022-08-10 15:22
 * @since 1.0.0
 */

/**
 * 暴力超时写法
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * @param {number} target
 * @param {number[]} nums
 * @return {*}  {number}
 */
function minSubArrayLen(target: number, nums: number[]): number {
    // 给出一个不可能会出现的值
    let result = Number.MAX_SAFE_INTEGER
    let sum = 0
    let subLength = 0

    for (let i = 0; i < nums.length; i++) {
        sum = 0

        for (let j = i; j < nums.length; j++) {
            sum = sum + nums[j]

            if (sum >= target) {
                subLength = j - i + 1
                result = result < subLength ? result : subLength
                break
            }
        }
    }

    return result === Number.MAX_SAFE_INTEGER ? 0 : result
}
