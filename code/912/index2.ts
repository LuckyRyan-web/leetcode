/**
 * @author liuyuan
 * @date 2022-08-19 11:10
 * @since 1.0.0
 */

/**
 * 冒泡排序
 * 稳定性：稳定
 * 空间复杂度: O(1)
 * 时间复杂度: O(N^2) 因为两个 for 循环, 复杂度很高，很容易就超出了题目的时间限制
 * @export
 */
export function BubbleSort() {
    function sortArray(nums: number[]): number[] {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length - 1 - i; j++) {
                // 相邻两个数字比较交换
                if (nums[j] > nums[j + 1]) {
                    ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                }
            }
        }

        return nums
    }
}
