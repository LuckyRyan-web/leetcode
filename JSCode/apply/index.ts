/**
 * @author liuyuan
 * @date 2022-08-23 17:00
 * @since 1.0.0
 */

export default function apply(Fn: Function, obj: any, args: any[]) {
    if (obj === undefined || obj === null) {
        obj = globalThis
    }
    //为obj添加临时变量
    obj.temp = Fn
    //执行方法
    let result = obj.temp(...args)
    //删除临时属性
    delete obj.temp
    //返回结果
    return result
}
