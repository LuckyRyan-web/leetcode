/**
 * 用于获取对象的深层数据
 * @author liuyuan
 * @date 2023-02-23 12:48
 * @since 1.0.0
 */

export function getValue(obj: Record<string, any>, path: string) {
    if (!obj || !path) {
        return
    }

    const keys = path.split('.')

    const [head, ...tail] = keys

    if (!tail.length) {
        return obj[head]
    }

    return getValue(obj[head], tail.join('.'))
}
