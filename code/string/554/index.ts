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

/** split 也可以用正则 */
export function reverseWordsSplitRegEx(s: string): string {
    const arr = s.split(/\s/g)

    let result = ''

    result = arr
        .map((v) => {
            return v.split('').reverse().join('')
        })
        .join(' ')

    return result
}

/** 正则写法, 识别 Let's 里面的单引号 */
export function reverseWordsRegEx(s: string): string {
    return s
        .match(/[\w']+/g)!
        .map((item) => {
            return item.split('').reverse().join('')
        })
        .join(' ')
}
