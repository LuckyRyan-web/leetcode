/**
 * leetcode: https://leetcode.cn/problems/largest-substring-between-two-equal-characters/
 * Tags: 简单的模拟题
 * @author liuyuan
 * @date 2022-09-17 18:17
 * @since 1.0.0
 */

function maxLengthBetweenEqualCharacters(s: string): number {
    let arr = Array(s.length).fill(-1)

    for (let i = 0; i < s.length; i++) {
        const len = getSameLetterLen(s[i], s)

        arr[i] = len
    }

    return Math.max.apply(null, arr)
}

/** 查找相同字母的长度 */
function getSameLetterLen(letter: string, str: string) {
    let start = str.indexOf(letter)
    let end = str.lastIndexOf(letter)

    if (start !== end) {
        return str.slice(start, end).length - 1
    }

    return -1
}
