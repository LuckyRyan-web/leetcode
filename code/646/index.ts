/**
 * leetcode: https://leetcode.cn/problems/maximum-length-of-pair-chain/
 * Tags: 动态规划
 * @author liuyuan
 * @date 2022-09-03 17:24
 * @since 1.0.0
 */

/**
 * 参考题意 "当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面" 可设 arr[0] < [arr + 1][1]
 * [[a,b], [c, d]] 的 a < b 且 b < c
 */
function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => {
        return a[0] - b[0]
    })

    // 最小对数链的长度为 1
    const lenArr: number[] = Array(pairs.length).fill(1)

    for (let i = 0; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            // console.log('i = ', i, 'pairs[i] = ', pairs[i])
            // console.log('------------')
            // console.log('j = ', j, 'pairs[j] = ', pairs[j])
            // console.log('')
            // console.log('')
            if (pairs[i][0] > pairs[j][1]) {
                lenArr[i] = Math.max(lenArr[i], lenArr[j] + 1)
            }
        }
    }

    console.log('lenArr', lenArr)

    return lenArr[pairs.length - 1]
}
