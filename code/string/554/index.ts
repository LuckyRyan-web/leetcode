/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 */

// 虽然字符串没有反转的 api, 但是数组有, 可以把字符串转换为数组再进行反转

export function reverseWords(s: string): string {
    const arr = s.split(' ')

    let result = ''

    result = arr
        .map((v) => {
            return v.split('').reverse().join('')
        })
        .join(' ')

    return result
}
