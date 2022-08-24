/**
 * @author liuyuan
 * @date 2022-08-23 17:35
 * @since 1.0.0
 */
import { searchRange } from './index'
import test2 from './index2'

const { searchRange: searchRange2 } = test2()

const example_34: Types.ExampleType[] = [
    {
        nums: [1],
        val: 1,
        target: [0, 0],
    },
    {
        nums: [5, 7, 7, 8, 8, 10],
        val: 8,
        target: [3, 4],
    },
    {
        nums: [5, 7, 7, 8, 8, 10],
        val: 6,
        target: [-1, -1],
    },
    {
        nums: [],
        val: 5,
        target: [-1, -1],
    },
]

test('34: 方法一', () => {
    example_34.forEach((v) => {
        const res = searchRange(v.nums, v.val)
        expect(res).toEqual(v.target)
    })
})

test('34: 方法二', () => {
    example_34.forEach((v) => {
        const res = searchRange2(v.nums, v.val)
        expect(res).toEqual(v.target)
    })
})
