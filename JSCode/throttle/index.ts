/**
 * 手写节流函数
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
        if (timer) {
            return
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, wait)
    }
}

/**
 * 节流函数的补充（因为没有立即执行的步骤）
 */
function throttle2(fn: Function, wait: number, immediate: boolean) {
    let timer: NodeJS.Timeout | null = null

    return function () {
        let args = arguments

        if (immediate) {
            fn.apply(this, args)
        }

        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.apply(this, args)
            }, wait)
        }
    }
}
