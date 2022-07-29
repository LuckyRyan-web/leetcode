/**
 * @author liuyuan
 * @date 2022-07-10 18:13
 * @since 1.0.0
 */

import func from './index'

interface ExampleType {
    [key: string]: any
    target: any
}

const example: ExampleType[] = [
    {
        s: 'abcabcbb',
        target: 3,
    },
    {
        s: 'bbbbb',
        target: 1,
    },
    {
        s: 'pwwkew',
        target: 3,
    },
    {
        s: 'abba',
        target: 2,
    },
    {
        s: 'abbcdea',
        target: 5,
    },
]

test('', () => {
    example.forEach((v) => {
        const res = func(v.s)

        expect(res).toEqual(v.target)
    })
})
