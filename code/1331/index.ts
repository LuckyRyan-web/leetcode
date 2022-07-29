/**
 * @author liuyuan
 * @date 2022-07-28 18:17
 * @since 1.0.0
 */

export default function arrayRankTransform(arr: number[]): number[] {
    const clone = [...arr]

    clone.sort((a, b) => a - b)

    /** 数组的排序字段 */
    let index = 0

    const map = new Map()

    for (let i of clone) {
        if (!map.has(i)) {
            map.set(i, ++index)
        }
    }

    const result: number[] = []

    for (let i = 0; i < arr.length; i++) {
        result.push(map.get(arr[i]))
    }

    return result
}

/**
 * 时间复杂度: O(NlogN)
 */
