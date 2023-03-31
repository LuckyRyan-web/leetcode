/**
 * @author liuyuan
 * @date 2023-02-23 10:29
 * @since 1.0.0
 */

import { flatten, flattenReduce } from './index'

const target = [1, [2, 3, [4, 5, [6, 7]]]]

const result = [1, 2, 3, 4, 5, 6, 7]

test('flatten forEach', () => {
    const res = flatten(target)

    expect(res).toEqual(result)
})

test('flatten reduce', () => {
    const res = flattenReduce(target)

    expect(res).toEqual(result)
})

const map = new Map([
    ['T', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
])
