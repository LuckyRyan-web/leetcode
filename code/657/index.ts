/**
 * leetcode: https://leetcode.cn/problems/robot-return-to-origin/
 * Tags: 图
 * @author liuyuan
 * @date 2022-08-15 21:43
 * @since 1.0.0
 */

function judgeCircle(moves: string): boolean {
    let p = [0, 0]

    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'U':
                p[0] += 1
                break
            case 'D':
                p[0] -= 1
                break
            case 'L':
                p[1] += 1
                break
            case 'R':
                p[1] -= 1
                break
        }
    }

    return p[0] === 0 && p[1] === 0
}
