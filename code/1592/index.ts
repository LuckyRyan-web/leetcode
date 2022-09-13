/**
 * leetcode: https://leetcode.cn/problems/rearrange-spaces-between-words/
 * Tags: 字符串模拟
 * @author liuyuan
 * @date 2022-09-09 11:44
 * @since 1.0.0
 */

function reorderSpaces(text: string): string {
    const words: string[] = []

    let result = ''

    text.split(' ').forEach((v) => {
        if (v) {
            words.push(v)
        }
    })

    let nullCount = 0

    text.split('').forEach((v) => {
        if (v === ' ') {
            nullCount++
        }
    })

    /** 空格字符串个数 */
    const emptyLen = Math.floor(nullCount / (words.length - 1))

    /** 余数个数 */
    let remainder = 0

    if (words.length > 1) {
        remainder = nullCount % (words.length - 1)
    } else if (words.length === 1) {
        remainder = nullCount
    } else {
        remainder = 0
    }

    if (words.length <= 1) {
        result = words[0]
    } else {
        result = words.join(' '.repeat(emptyLen))
    }

    /** 处理多余的空格数，添加到末尾 */
    if (remainder) {
        result = result + ' '.repeat(remainder)
    }

    return result
}
