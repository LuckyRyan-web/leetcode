/**
 * @author liuyuan
 * @date 2022-08-23 17:01
 * @since 1.0.0
 */

export function myConcat(array: any[], ...values: any[]) {
    // 简单的拷贝
    const arr = [...array]
    values.forEach((value) => {
        // concat 的参数也可以不是数组
        if (Array.isArray(value)) {
            arr.push(...value)
        } else {
            arr.push(value)
        }
    })
    return arr
}
