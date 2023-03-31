/**
 * 函数的柯里化
 * @author liuyuan
 * @date 2023-02-23 11:29
 * @since 1.0.0
 */

/** 柯里化就是把多个参数转换成一系列的参数的函数的过程 */

function add(x) {
    return function (y) {
        return x + y
    }
}

const add5 = add(5)

const res = add5(5) // 10

function curry(fn) {
    return function curried(...args) {
        /** 如果是超过了实际接收范围 */
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...moreArgs) {
                return curried.apply(this, args.concat(moreArgs))
            }
        }
    }
}

function sum(x, y, z) {
    return x + y + z
}

const curriedAdd = curry(sum)
