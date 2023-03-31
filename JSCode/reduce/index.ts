/**
 * @author liuyuan
 * @date 2023-02-23 13:58
 * @since 1.0.0
 */

/**
 * reduce 有四个参数(累积值，当前值，索引，数组)
 * 如果没有初始值，那么默认为 arr[0]，cur 就从 1 开始
 * 如果有的话，第一次的 acc 为初始值，cur 为从 0 开始
 */
export function _reduce(arr, callback, initValue) {
    let accumlator = initValue !== void 0 ? initValue : arr[0]
    const startIndex = initValue !== void 0 ? 0 : 1

    for (let i = startIndex; i < arr.length; i++) {
        accumlator = callback(accumlator, arr[i], i, arr)
    }

    return accumlator
}
