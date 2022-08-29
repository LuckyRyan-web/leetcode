/**
 * leetcode: https://leetcode.cn/problems/sort-an-array/
 * Tags: 数组、排序
 * @author liuyuan
 * @date 2022-08-19 10:38
 * @since 1.0.0
 */

/**
 * 写了没分的写法
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function sortArray(nums: number[]): number[] {
    return nums.sort((a, b) => a - b)
}
