/**
 * @author liuyuan
 * @date 2022-08-25 08:56
 * @since 1.0.0
 */
import { hammingWeight } from './index'

const example_191: Types.ExampleType[] = [
    {
        num: '00000000000000000000000000001011',
        target: 3,
    },
    {
        num: '00000000000000000000000010000000',
        target: 1,
    },
    {
        num: '11111111111111111111111111111101',
        target: 31,
    },
]

test('191', () => {
    example_191.forEach((v) => {
        const res = hammingWeight(v.num)

        expect(res).toBe(v.target)
    })
})
