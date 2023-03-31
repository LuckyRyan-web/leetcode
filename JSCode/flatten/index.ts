/**
 * 手写一个数组的扁平化
 * @author liuyuan
 * @date 2023-02-23 10:29
 * @since 1.0.0
 */

export function flatten(arr: any[]) {
    const result: any[] = []

    arr.forEach((v) => {
        if (Array.isArray(v)) {
            result.push(...flatten(v))
        } else {
            result.push(v)
        }
    })

    return result
}

export function flattenReduce(arr: any[]): any[] {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return [...acc, ...flattenReduce(cur)]
        }
        return [...acc, cur]
    }, [])
}
