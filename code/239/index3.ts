/**
 * @author liuyuan
 * @date 2022-08-11 11:38
 * @since 1.0.0
 */

export function test3() {
    function maxSlidingWindow(nums: number[], k: number): number[] {
        const queue: number[] = []
        const res: number[] = []

        for (let i = 0; i < nums.length; ++i) {
            while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
                queue.pop()
            }
            queue.push(i)

            if (i - queue[0] >= k) {
                queue.shift()
            }

            if (i >= k - 1) {
                res.push(nums[queue[0]])
            }
        }
        return res
    }
}
