/**
 * leetcode: https://leetcode.cn/problems/crawler-log-folder/
 * Tags: 模拟题
 * @author liuyuan
 * @date 2022-09-09 11:35
 * @since 1.0.0
 */

/**
 * 除了 '../' 特殊一点之外，都是对子文件夹的操作，只需要判断特殊情况即可
 */
function minOperations(logs: string[]): number {
    let depth = 0

    for (let i of logs) {
        if (i === './') {
            continue
        }

        if (i === '../') {
            if (depth > 0) {
                depth--
            }
        } else {
            depth++
        }
    }

    return depth
}
