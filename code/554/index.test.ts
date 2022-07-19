import { reverseWords, reverseWordsRegEx } from './index'

test('反转字符串示例1', () => {
    const str = "Let's take LeetCode contest"

    const target = "s'teL ekat edoCteeL tsetnoc"

    const res = reverseWords(str)

    // expect(res).toStrictEqual(target)
    expect(res).toBe(target)
})

test('反转字符串示例2', () => {
    const str = 'God Ding'

    const target = 'doG gniD'

    const res = reverseWords(str)

    // expect(res).toStrictEqual(target)
    expect(res).toBe(target)
})

test('正则1', () => {
    const str = "Let's take LeetCode contest"

    const target = "s'teL ekat edoCteeL tsetnoc"

    const res = reverseWordsRegEx(str)

    // expect(res).toStrictEqual(target)
    expect(res).toBe(target)
})

test('正则2', () => {
    const str = 'God Ding'

    const target = 'doG gniD'

    const res = reverseWordsRegEx(str)

    // expect(res).toStrictEqual(target)
    expect(res).toBe(target)
})
