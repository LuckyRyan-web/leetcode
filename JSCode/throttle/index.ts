/**
 * @author liuyuan
 * @date 2022-09-20 17:41
 * @since 1.0.0
 */

/**
 * 节流函数的意思就是 在 N 秒内只执行一次
 */
function throttle(fn: Function, wait: number) {
    let timer: NodeJS.Timeout | null = null

    return function () {
        let arfs = arguments

        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.apply(this, arfs)
            }, wait)
        }
    }
}
