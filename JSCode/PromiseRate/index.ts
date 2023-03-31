/**
 * 手写 PromiseRate
 * @author liuyuan
 * @date 2023-02-23 16:18
 * @since 1.0.0
 */

function PromiseRate<T>(promises: Promise<T>[]) {
    return new Promise((resolve, reject) => {
        promises.forEach((func) => {
            func.then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    })
}
