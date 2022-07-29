import { intersect as mapFunc } from './index'

const example = [
    {
        num1: [1, 2, 2, 1],
        nums2: [2, 2],
        target: [2, 2],
    },
    {
        num1: [4, 9, 5],
        nums2: [9, 4, 9, 8, 4],
        target: [4, 9],
    },
]

test('两个数组的交集 II', () => {
    for (let i of example) {
        const res = mapFunc(i.num1, i.nums2)
        expect(res).toEqual(i.target)
    }
})
