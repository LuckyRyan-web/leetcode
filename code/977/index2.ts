/**
 * 双指针的解法，可以让时间复杂度从 O(N logN) 降低到 O(N)
 * @param nums
 * @returns
 */
export function test2() {
    function sortedSquares(nums: number[]): number[] {
        let left: number = 0
        let right: number = nums.length - 1

        let resArr: number[] = []

        let k: number = resArr.length - 1

        while (left <= right) {
            let i = Math.pow(nums[left], 2)
            let j = Math.pow(nums[right], 2)

            if (i < j) {
                resArr[k] = j
                right--
            } else {
                resArr[k] = i
                left++
            }
            k--
        }

        return resArr
    }
}
