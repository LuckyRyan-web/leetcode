import { isValid } from './index'

const str = '()[]{}'

test('有效的括号', () => {

    const target = true

    const res = isValid(str)

    expect(res).toBe(target)
})
