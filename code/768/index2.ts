/**
 * 滑动窗口解法
 * 这道题的意思就是数组进行分块，分块的数据跟原数组排序后是一样的
 */
export function maxChunksToSorted(arr: number[]): number {
    const sorted = [...arr]

    sorted.sort((a, b) => a - b)

    let count = 0

    /** 原分组的和 */
    let sum1 = 0

    /** 分块后的数组的和 */
    let sum2 = 0

    for (let i = 0; i < arr.length; i++) {
        sum1 = sum1 + arr[i]

        sum2 = sum2 + sorted[i]

        if (sum1 === sum2) {
            count++
            // sum1 = sum2 = 0
        }
    }

    return count
}
