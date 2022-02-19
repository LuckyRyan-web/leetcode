import { isValid } from './index'

test('有效的括号', () => {
    const str = '()[]{}'

    const target = true

    const res = isValid(str)

    expect(res).toBe(target)
})
