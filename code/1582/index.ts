/**
 * leetcode: https://leetcode.cn/problems/special-positions-in-a-binary-matrix/
 * Tags: 模拟题
 * @author liuyuan
 * @date 2022-09-04 14:14
 * @since 1.0.0
 */

/**
 * 依照题意，数字为 1 的同行同列的不可以有 1 的存在，只需要两次 for 循环判断即可
 */
function numSpecial(mat: number[][]): number {
    const row_len = mat.length
    const col_len = mat[0].length

    // 记录行和列占用的 1 的次数，如果出现了大于 1 的情况，就是行或者列重复出现了 1 , 就可以筛选掉
    const row = Array(row_len).fill(0)
    const col = Array(col_len).fill(0)

    let result = 0

    // 记录行和列的 1 出现次数
    for (let i = 0; i < row_len; i++) {
        for (let j = 0; j < col_len; j++) {
            row[i] += mat[i][j]
            col[j] += mat[i][j]
        }
    }

    // console.log('row', row)
    // console.log('col', col)

    for (let i = 0; i < row_len; i++) {
        for (let j = 0; j < col_len; j++) {
            // 过滤掉重复出现 1 的，也就是过滤掉 > 1的情况
            if (mat[i][j] === 1) {
                if (row[i] === 1 && col[j] === 1) {
                    // console.log('i', i)
                    // console.log('j', j)
                    result++
                }
            }
        }
    }

    return result
}
