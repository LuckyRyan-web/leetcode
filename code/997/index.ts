/**
 * leetcode: https://leetcode.cn/problems/find-the-town-judge/
 * Tags: 图
 * @author liuyuan
 * @date 2022-08-12 10:21
 * @since 1.0.0
 */

function findJudge(n: number, trust: number[][]): number {
    const count: number[] = new Array(n + 1).fill(0)

    /**
     * x 表示信任的人
     * y 表示被信任的人
     * 只需要满足被信任的人的数量，满足除了自己之外的总和， 即 n -1 即可
     */
    for (const edge of trust) {
        const x = edge[0]
        const y = edge[1]
        count[y]++
        count[x]--
    }
    for (let i = 1; i <= n; ++i) {
        if (count[i] === n - 1) {
            return i
        }
    }
    return -1
}
