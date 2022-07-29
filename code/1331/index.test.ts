/**
 * @author liuyuan
 * @date 2022-07-28 18:17
 * @since 1.0.0
 */

import func from './index'

const example_1331: Types.ExampleType[] = [
    {
        arr: [40, 10, 20, 30],
        target: [4, 1, 2, 3],
    },
    {
        arr: [100, 100, 100],
        target: [1, 1, 1],
    },
    {
        arr: [37, 12, 28, 9, 100, 56, 80, 5, 12],
        target: [5, 3, 4, 2, 8, 6, 7, 1, 3],
    },
]

test('1331', () => {
    example_1331.forEach((v) => {
        const res = func(v.arr)

        expect(res).toEqual(v.target)
    })
})
