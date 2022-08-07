/**
 * @author liuyuan
 * @date 2022-08-07 22:49
 * @since 1.0.0
 */

/**
 * 暴力解法，直接循环加 sort 得到结果，时间复杂度为 O(N log(N))
 * @param nums
 * @returns
 */
function sortedSquares(nums: number[]): number[] {
    const arr = nums.map((v) => Math.pow(v, 2))

    return arr.sort((a, b) => a - b)
}
