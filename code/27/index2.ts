/**
 * @author liuyuan
 * @date 2022-08-07 16:13
 * @since 1.0.0
 */

export function test2() {
    function removeElement(nums: number[], val: number): number {
        let slow = 0

        for (let fast = 0; fast < nums.length; fast++) {
            if (nums[fast] !== val) {
                nums[slow] = nums[fast]
                slow++
            }
        }

        return slow
    }
}
