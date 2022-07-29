import { containsDuplicate as sortFunc } from './index'
import { containsDuplicate as mapFunc } from './index1'

const example = [
    {
        nums: [1, 2, 3, 1],
        target: true,
    },
    {
        nums: [1, 2, 3, 4],
        target: false,
    },
    {
        nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
        target: true,
    },
]

test('存在重复元素: 排序解法', () => {
    for (let i of example) {
        const res = sortFunc(i.nums)
        expect(res).toStrictEqual(i.target)
    }
})

test('存在重复元素: 哈希表解法', () => {
    for (let i of example) {
        const res = mapFunc(i.nums)
        expect(res).toStrictEqual(i.target)
    }
})
