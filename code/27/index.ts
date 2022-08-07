/**
 * @author liuyuan
 * @date 2022-08-07 16:13
 * @since 1.0.0
 */

/**
 * 双指针解法
 * @param nums
 * @param val
 * @returns
 */
function removeElement(nums: number[], val: number): number {
    let slow = 0
    let fast = 0

    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }

    return slow
}
