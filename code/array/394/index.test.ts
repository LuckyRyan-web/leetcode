/**
 * @author liuyuan
 * @date 2022-07-18 22:39
 * @since 1.0.0
 */
import { decodeString } from './index'

const example_394: Types.ExampleType[] = [
    {
        s: "3[a]2[bc]",
        target: "aaabcbc"
    },
    {
        s: "3[a2[c]]",
        target: "accaccacc"
    },
    {
        s: "2[abc]3[cd]ef",
        target: "abcabccdcdcdef"
    },
    {
        s: "abc3[cd]xyz",
        target: "abccdcdcdxyz"
    }
]

test('', () => {
    example_394.forEach((v) => {
        const res = decodeString(v.s)
        expect(res).toEqual(v.target)
    })
})
