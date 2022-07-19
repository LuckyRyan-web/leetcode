/**
 * @author liuyuan
 * @date 2022-07-16 21:33
 * @since 1.0.0
 */

/**
 * 正反遍历:
 * 思路为正反两个方向都遍历一次数据，然后取两次数组每个下表比较的最小值即可
 */

export function shortestToChar(s: string, c: string): number[] {
    const n = s.length

    /** 先定义一个跟 s 长度一样的数组去存储值 */
    const answer: number[] = new Array(n).fill(0)

    // 正向遍历
    for (let i = 0, j = -n; i < n; i++) {
        if (s[i] === c) {
            j = i
        }

        // 计算每个下标到 "c" 字符串的距离
        answer[i] = i - j

    }

    // 反向遍历
    for (let i = n - 1, j = 2 * n; i >= 0; i--) {
        if (s[i] === c) {
            j = i
        }

        answer[i] = Math.min(answer[i], j - i)

    }

    return answer
};