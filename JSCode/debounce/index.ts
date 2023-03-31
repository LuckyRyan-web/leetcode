/**
 * 防抖函数
 * @author liuyuan
 * @date 2022-09-20 17:42
 * @since 1.0.0
 */

/**
 * 防抖函数就是一个单位时间内，如果再次触发就会清除掉上一次的交互
 * 好比如 20 秒内有 20 次的点击事件，那么只有最后一次才会真正触发到事件，前 19 次都是无用的
 * 比如输入框，一直在输入查询字符串，但是只需要 200ms 查询一次就可以了，不然会每输入一次字符串都会进行查询数据，就会发送到很多请求
 */

function debounce(fn: Function, wait: number, immediate: boolean) {
    let timer: NodeJS.Timeout | null = null
    let result: any = void 0

    return function () {
        let args = arguments

        if (timer) {
            clearTimeout(timer)
        }

        if (immediate) {
            let callNow = !timer

            timer = setTimeout(() => {
                timer = null
            }, wait)

            if (callNow) {
                result = fn.apply(this, args)
            }
        } else {
            timer = setTimeout(() => {
                result = fn.apply(this, args)
            }, wait)
        }

        return result
    }
}

function debounce2(fn: Function, delay = 200) {
    let timer: NodeJS.Timer | null = null

    return function () {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
