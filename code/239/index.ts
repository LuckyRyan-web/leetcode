/**
 * leetcode: https://leetcode.cn/problems/sliding-window-maximum/
 * @author liuyuan
 * @date 2022-08-11 08:53
 * @since 1.0.0
 */

/**
 * 这种解法会超时，但是是符合解法的，只是不能满足题目的最大范围内运行
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = []

    for (let i = 0; i <= nums.length - k; i++) {
        const curMax = getSlidingWindowMaxValue(nums, i, i + k)
        res.push(curMax)
    }

    return res
}

/**
 * 获取滑动窗口的最大值
 * @param {number[]} nums 滑动窗口数组
 * @param {number} start 起始位置
 * @param {number} end 终点位置
 * @return {number} 返回当前滑动窗口的最大值
 */
function getSlidingWindowMaxValue(nums: number[], start: number, end: number) {
    let max = -Infinity

    for (let i = start; i < end; i++) {
        max = Math.max(nums[i], max)
    }
    return max
}
