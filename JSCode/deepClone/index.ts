/**
 * 手写深度克隆
 * @author liuyuan
 * @date 2023-02-23 15:00
 * @since 1.0.0
 */

function deepClone(obj: unknown, map = new Map()) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    if (obj instanceof Date) {
        return new Date(obj)
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags)
    }

    if (obj instanceof Function) {
        return function () {
            return obj.apply(this, arguments)
        }
    }

    const cache = map.get(obj)

    if (cache) {
        return cache
    }

    const cloneData = Array.isArray(obj) ? [] : {}

    map.set(obj, cloneData)

    // 解决循环引用
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            cloneData[key] = deepClone(obj[key], map)
        }
    }

    return cloneData
}

function flat(arr: unknown[]) {
    const result: unknown[] = []

    arr.forEach((v) => {
        if (Array.isArray(v)) {
            result.push(...flat(v))
        } else {
            result.push(v)
        }
    })

    return result
}
