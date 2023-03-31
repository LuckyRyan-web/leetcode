/**
 * promise 的错误重试
 * @author liuyuan
 * @date 2023-02-23 12:23
 * @since 1.0.0
 */

function executeFunc() {
    return new Promise((resolve, reject) => {
        return Math.random() < 0.5 ? resolve('success') : reject('fail')
    })
}

function retryPromise(times: number) {
    return new Promise((resolve, reject) => {
        function retry(count: number) {
            executeFunc()
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    if (count < times) {
                        retry(count + 1)
                    } else {
                        reject(err)
                    }
                })
        }

        retry(1)
    })
}

function retryPromiseFunc<T>(promiseFunc: () => Promise<T>, times: number, delay: number = 0) {
    return new Promise((resolve, reject) => {
        function retryFunc(count: number) {
            promiseFunc()
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    if (count < times) {
                        setTimeout(() => {
                            retryFunc(count + 1)
                        }, delay)
                    } else {
                        reject(err)
                    }
                })
        }
        retryFunc(1)
    })
}
