// 与 278 问题一致, 只需要找出上个版本错误的位置, 使用二分法获取 left
function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)

        if (nums[middle] > target) {
            right = middle - 1
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }

    // 如果都不存在的话就返回要被插入的顺序，即返回 left
    return left
}
