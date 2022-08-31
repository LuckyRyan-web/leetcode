/**
 * @author liuyuan
 * @date 2022-08-23 17:01
 * @since 1.0.0
 */
import { myConcat } from './index'

let list = [1, 2, 3]
let arr1 = 2
let arr2 = [2, 3, 4]

const expectData = [1, 2, 3, 2, 2, 3, 4]

// @ts-ignore
Array.prototype._concat = function (...args) {
    let res = [...this]
    args.forEach((arg) => {
        if (!Array.isArray(arg)) {
            res.push(arg)
        } else {
            arg.forEach((item) => {
                res.push(item)
            })
        }
    })
    return res
}

test('concat', () => {
    // @ts-ignore
    const res = list._concat(arr1)._concat(arr2)
    console.log('res', res)
    expect(res).toEqual(expectData)
})
