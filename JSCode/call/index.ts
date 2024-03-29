/**
 * @author liuyuan
 * @date 2022-08-23 16:43
 * @since 1.0.0
 */

export default function call(Fn: Function, obj: any, ...args: any[]) {
    if (obj === undefined || obj === null) {
        obj = globalThis //全局对像
    }
    //为obj添加临时的方法
    obj.temp = Fn
    //调用temp方法
    let result = obj.temp(...args)
    //删除temp
    delete obj.temp
    //返回执行结果
    return result
}
