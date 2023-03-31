/**
 * @author liuyuan
 * @date 2022-11-20 13:12
 * @since 1.0.0
 */

/**
 * [1,2,3,4,5,6,7] 旋转 k 步，得到的结果为 [5,6,7,1,2,3,4]
 */

export function route1(arr: number[], k: number) {
    const length = arr.length

    if (!k || length === 0) {
        return arr
    }

    const step = Math.abs(k % length)

    for (let i = 0; i < step; i++) {
        const n = arr.pop()

        if (n !== null && n !== void 0) {
            arr.unshift(n)
        }
    }

    return arr
}

export function route2(arr: number[], k: number) {
    const length = arr.length

    if (!k || length === 0) {
        return arr
    }

    const step = Math.abs(k % length)

    // slice 不会改变原数组，且为负数的时候可以从数组的最后进行获取
    const part1 = arr.slice(-step)

    const part2 = arr.slice(0, length - step)

    return part1.concat(part2)
}

/**
 * 性能测试
 * route1: 1.544s
 * route2: 0.212ms
 */
const arr1: number[] = []

for (let i = 0; i < 100000; i++) {
    arr1.push(i)
}

console.time('route1')
route1(arr1, 9 * 10000)
console.timeEnd('route1')

const arr2: number[] = []

for (let i = 0; i < 100000; i++) {
    arr2.push(i)
}

console.time('route2')
route2(arr2, 9 * 10000)
console.timeEnd('route2')

// '(())' '((()))(' '((())))'
function brackets(str: string[]) {
    if (str.length % 2 !== 0) {
        return false
    }

    const arr: string[] = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            arr.push(str[i])
        } else if (str[i] === ')' && arr[arr.length - 1] === '(') {
            arr.pop()
        }
    }

    return arr.length === 0
}
