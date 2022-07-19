/**
 * 暴力破解 - 循环遍历
 */

export function twoSum(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return [i, j];
            }
        }
    }
}
