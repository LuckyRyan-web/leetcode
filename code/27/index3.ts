/**
 * @author liuyuan
 * @date 2022-08-07 16:13
 * @since 1.0.0
 */

/**
 * 暴力解法，双 for 循环，让重复的数据的时候，数据往前移动一位
 */
export function test3() {
    function removeElement(nums: number[], val: number): number {
        let size = nums.length

        for (let i = 0; i < size; i++) {
            if (nums[i] === val) {
                for (let j = i + 1; j < size; j++) {
                    nums[j - 1] = nums[j]
                }

                i--
                size--
            }
        }

        return size
    }
}
