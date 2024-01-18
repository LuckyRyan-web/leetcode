/**
 * @author liuyuan
 * @date 2023-04-27 00:34
 * @since 1.0.0
 */

function mockRequest(num: number) {
    return new Promise((resolve) => {
        const random = Math.random() * 1000

        setTimeout(() => {
            resolve(num)
        }, random)
    })
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function promiseFunc(limit: number, arr: number[], request: Function) {
    const result: number[] = []

    let index = 0
    let running = 0

    return new Promise((resolve, reject) => {
        function run() {
            // 限制并发次数
            if (running >= limit || index >= arr.length) {
                return
            }

            running++

            request(arr[index])
                .then((res) => {
                    result.push(res)
                    running--

                    if (index >= arr.length && running === 0) {
                        resolve(result)
                    } else {
                        run()
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        }

        run()
    })
}
