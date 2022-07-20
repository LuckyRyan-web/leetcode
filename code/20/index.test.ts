import { isValid } from './index'
import { isValid as mapFunc } from './index2'

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


test('有效的括号: map 方法', () => {
    example.forEach((v) => {
        const res = mapFunc(v.str)

        expect(res).toBe(v.target)
    })
})

