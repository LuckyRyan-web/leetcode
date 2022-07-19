/**
 * @author liuyuan
 * @date 2022-07-17 14:59
 * @since 1.0.0
 */
import { plusOne } from './index'

const example_66: Types.ExampleType[] = [
    {
        digits: [1, 2, 3],
        target: [1, 2, 4]
    },
    {
        digits: [4, 3, 2, 1],
        target: [4, 3, 2, 2]
    },
    {
        digits: [0],
        target: [1]
    },
    {
        digits: [9],
        target: [1, 0]
    },
    {
        digits: [9, 9],
        target: [1, 0, 0]
    }
]

test('加一', () => {
    example_66.forEach((v) => {
        const res = plusOne(v.digits)

        expect(res).toEqual(v.target)
    })
})
