/**
 * leetcode: https://leetcode.cn/problems/string-rotation-lcci/
 * Tags: 字符串匹配
 * @author liuyuan
 * @date 2022-09-29 21:11
 * @since 1.0.0
 */

function isFlipedString(s1: string, s2: string): boolean {
    return s1.length === s2.length && (s1 + s2).indexOf(s2) !== -1
}
