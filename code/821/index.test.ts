/**
 * @author liuyuan
 * @date 2022-07-16 21:33
 * @since 1.0.0
 */
import { shortestToChar } from './index'

const example_821: Types.ExampleType[] = [
    {
        s: 'loveleetcode',
        c: 'e',
        target: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0],
    },
    {
        s: 'aaab',
        c: 'b',
        target: [3, 2, 1, 0],
    },
    {
        s: 'aaba',
        c: 'b',
        target: [2, 1, 0, 1],
    },
]

test('', () => {
    example_821.forEach((v) => {
        const res = shortestToChar(v.s, v.c)

        expect(res).toEqual(v.target)
    })
})
