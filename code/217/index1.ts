/**
 * 对象存储数据
 * @param nums 
 * @returns 
 */
export function containsDuplicate(nums: number[]): boolean {
    const numMap: { [key: number]: number } = {}

    for (let i of nums) {
        if (!numMap[i]) {
            numMap[i] = 1
        } else {
            return true
        }
    }
    return false
}
