/**
 * @author liuyuan
 * @date 2022-08-10 15:24
 * @since 1.0.0
 */

/**
 * 双指针写法
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {number} target
 * @param {number[]} nums
 * @return {*}  {number}
 */
export function test2() {
    function minSubArrayLen(target: number, nums: number[]): number {
        let left = 0
        let right = 0

        // 反正是不可能的值
        let minLength = Number.MAX_SAFE_INTEGER

        let sum = 0

        while (right < nums.length) {
            sum = sum + nums[right]

            if (sum >= target) {
                // 满足条件的情况下，滑动窗口缩小
                while (sum - nums[left] >= target) {
                    sum = sum - nums[left]
                    left++
                }

                // 达到了刚好满足 >= target 条件的边界值
                minLength = Math.min(minLength, right - left + 1)
            }

            right++
        }

        return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength
    }
}
