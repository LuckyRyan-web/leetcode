// 与 278 问题一致, 只需要找出上个版本错误的位置, 使用二分法获取 left
function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }

    return left
}
