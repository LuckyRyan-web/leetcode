/**
 * leetcode: https://leetcode.cn/problems/find-all-anagrams-in-a-string/
 * Tags: 滑动窗口
 * @author liuyuan
 * @date 2022-08-28 14:53
 * @since 1.0.0
 */

interface KeyMap {
    [key: string]: number
}

function findAnagrams(s: string, p: string): number[] {
    // 先判断长度比较
    if (s.length < p.length) {
        return []
    }

    const need: KeyMap = {}
    const win: KeyMap = {}

    for (let i of p) {
        need[i] = (need[i] || 0) + 1
    }

    let left = 0
    let right = 0

    // 与滑动窗口大小一样的字符串种类，如果出现次数跟 p 一样就 push
    let val = 0
    const result: number[] = []

    // 右指针进行滑动
    while (right < s.length) {
        let c = s[right]
        right++

        if (need[c]) {
            win[c] = (win[c] || 0) + 1

            if (win[c] === need[c]) {
                val++
            }
        }

        // 这里需要判断不出窗口的情况，需要把符合长度一样的结果都 push 到数组
        while (right - left >= p.length) {
            if (val === Object.keys(need).length) {
                result.push(left)
            }

            // 最后这一步是为了把左指针进行滑动, 并且把判断条件的 val 清零
            let d = s[left]
            left++

            // 限制每次滑动窗口的大小都是等于 p.length
            if (need[d]) {
                if (win[d] === need[d]) {
                    val--
                }
                win[d]--
            }
        }
    }

    return result
}
