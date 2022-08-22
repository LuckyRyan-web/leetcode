/**
 * @author liuyuan
 * @date 2022-08-22 22:43
 * @since 1.0.0
 */
import func from './index'

const example_367: Types.ExampleType[] = [
    {
        num: 16,
        target: true,
    },
    {
        num: 14,
        target: false,
    },
]

test('367', () => {
    example_367.forEach((v) => {
        const result = func(v.num)

        expect(result).toBe(v.target)
    })
})
