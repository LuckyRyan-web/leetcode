/**
 * 手写 promiseAll
 * @author liuyuan
 * @date 2023-02-23 12:19
 * @since 1.0.0
 */

export function promiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const result: T[] = []

        let times = 0

        if (promises.length === 0) {
            resolve(result)
            return
        }

        promises.forEach((v, index) => {
            Promise.resolve(v)
                .then((res) => {
                    result[index] = res
                    times++

                    if (times === promises.length) {
                        resolve(result)
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        })
    })
}
