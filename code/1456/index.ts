/**
 * leetcode: https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 * Tags: 滑动窗口
 * @author liuyuan
 * @date 2022-08-26 17:51
 * @since 1.0.0
 */

function maxVowels(s: string, k: number): number {
    const dict = new Set(['a', 'e', 'i', 'o', 'u'])

    let result = 0

    for (let i = 0; i < k; i++) {
        if (dict.has(s[i])) {
            result++
        }
    }

    let temp = result

    for (let i = k, j = 0; i < s.length; i++, j++) {
        if (dict.has(s[i])) temp++
        if (dict.has(s[j])) temp--

        result = Math.max(temp, result)
    }

    return result
}
