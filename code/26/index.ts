/**
 * @author liuyuan
 * @date 2022-08-09 15:29
 * @since 1.0.0
 */

/**
 * 可以采用双指针解法。在确认已经排序的情况下，快指针进行写操作，慢指针进行读取值操作，等到快指针遍历完的时候，慢指针刚好存储完所有的不重复的值，然后返回慢指针下标 + 1 就是不含重复的值的长度了
 * @param nums
 * @returns
 */
function removeDuplicates(nums: number[]): number {
    if (!nums.length) {
        return 0
    }

    let slow = 0
    let fast = 0

    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            slow++
            nums[slow] = nums[fast]
        }

        fast++
    }

    // 因为是从 0 开始的
    return slow + 1
}
