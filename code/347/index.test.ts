/**
 * @author liuyuan
 * @date 2022-08-03 23:00
 * @since 1.0.0
 */
import func from './index'

const example_347: Types.ExampleType[] = [
    {
        nums: [1, 1, 1, 2, 2, 3],
        k: 2,
        target: [1, 2],
    },
    {
        nums: [1],
        k: 1,
        target: [1],
    },
]

test('347', () => {
    example_347.forEach((v) => {
        const res = func(v.nums, v.k)

        expect(res).toEqual(v.target)
    })
})
