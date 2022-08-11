/**
 * @author liuyuan
 * @date 2022-08-11 09:43
 * @since 1.0.0
 */

export function test2() {
    /**
     * 双端队列来实现空间换时间
     * 时间复杂度: O(n)
     * 空间复杂度: O(k)
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    function maxSlidingWindow(nums: number[], k: number) {
        const result: number[] = []

        const queue = new deQueue([])

        // 初始化需要把滑动窗口大小内的所有元素都入队列
        for (let i = 0; i < k - 1; i++) {
            queue.push(nums[i])
        }

        // 滑动窗口, 从 k 位开始继续遍历
        for (let i = k - 1; i < nums.length; i++) {
            queue.push(nums[i])
            result.push(queue.max())

            // 对于不在窗口内的元素，需要剔除掉
            queue.shift(nums[i - k + 1])
        }

        return result
    }

    /**
     * 没必要储存窗口内的所有元素，如果新加入的元素比前面的数字都大，那么久把前面的数据都剔除出去
     * 依照实际要求，采用双端队列的数据结构
     * @class queue 单调递减栈
     */
    class deQueue {
        protected list!: number[]

        constructor(nums: number[]) {
            this.list = nums
        }

        push(val: number) {
            /** 以此保证对头的数据永远是最大的 */
            while (this.list[this.list.length - 1] < val) {
                this.list.pop()
            }
            this.list.push(val)
        }

        // 如果恰好是只有一个元素，并且是在滑动窗口的边界才需要 shift 剔除掉
        // 其余的不符合条件的都被上面 pop 掉了
        shift(val: number) {
            if (this.list[0] === val) {
                this.list.shift()
            }
        }

        max() {
            return this.list[0]
        }
    }
}
