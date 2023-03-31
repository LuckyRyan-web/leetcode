/**
 * 手写一个 map
 * @author liuyuan
 * @date 2023-02-23 14:02
 * @since 1.0.0
 */

function myMap(arr: any[], callback: (func: Function, index: number, arr: any[]) => any) {
    const result: any[] = []

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr))
    }

    return result
}
