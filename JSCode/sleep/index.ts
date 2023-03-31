/**
 * 基于 promise 的 sleep
 * @author liuyuan
 * @date 2023-02-23 12:34
 * @since 1.0.0
 */

export function sleep(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}
