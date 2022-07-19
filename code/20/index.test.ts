import { isValid } from './index'

const example = [
    {
        str: "()",
        target: true
    },
    {
        str: '()[]{}',
        target: true
    },
    {
        str: "(]",
        target: false
    },
    {
        str: "([)]",
        target: false
    },
    {
        str: "{[]}",
        target: true
    }
]

test('有效的括号', () => {
    example.forEach((v) => {
        const res = isValid(v.str)

        expect(res).toBe(v.target)
    })
})
