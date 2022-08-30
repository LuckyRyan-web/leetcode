/**
 * @author liuyuan
 * @date 2022-08-30 22:27
 * @since 1.0.0
 */

export function test3() {
    function minSubArrayLen(target: number, nums: number[]): number {
        let i = 0

        let result = Number.MAX_VALUE

        let sum = 0

        for (let j = 0; j < nums.length; j++) {
            sum += nums[j]

            // 当满足条件时，需要缩减左指针，查询最后满足条件的长度
            while (sum >= target) {
                let subL = j - i + 1

                result = Math.min(subL, result)

                sum = sum - nums[i]

                i++
            }
        }

        return result === Number.MAX_VALUE ? 0 : result
    }
}
