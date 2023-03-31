/**
 * leetcode:
 * Tags:
 * @author liuyuan
 * @date 2023-03-31 22:54
 * @since 1.0.0
 */

/**
 * 题目2：
 *
 * 问题：井字棋游戏。输入一个二维数组代表棋盘，其中
 *     『1』代表当前玩家的棋子，『0』代表没有棋子，『-1』代表对方玩家的棋子。
 *      若一方棋子在横、竖、斜方向连成排则为获胜，返回当前玩家是否胜出。
 * 示例：入参为 [[1,0,1],[1,-1,-1],[1,-1,0]] 时，返回 true
 *
 */

function gameCheck(arr: number[][]) {
    // 检查打横方向
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] === 1 && arr[i][1] === 1 && arr[i][2] === 1) {
            return true
        } else if (arr[i][0] === -1 && arr[i][1] === -1 && arr[i][2] === -1) {
            return false
        }
    }

    // 检查打竖方向
    for (let i = 0; i < 3; i++) {
        if (arr[0][i] === 1 && arr[1][i] === 1 && arr[2][i] === 1) {
            return true
        } else if (arr[0][i] === -1 && arr[1][i] === -1 && arr[2][i] === -1) {
            return false
        }
    }

    // 检查斜的方向
    if (arr[0][0] === 1 && arr[1][1] === 1 && arr[2][2] === 1) {
        return true
    } else if (arr[0][0] === -1 && arr[1][1] === -1 && arr[2][2] === -1) {
        return false
    }

    if (arr[0][2] === 1 && arr[1][1] === 1 && arr[2][0] === 1) {
        return true
    } else if (arr[0][2] === -1 && arr[1][1] === -1 && arr[2][0] === -1) {
        return false
    }

    return false
}

gameCheck([
    [1, 1, -1],
    [1, -1, 0],
    [-1, 0, 0],
]) // false
gameCheck([
    [1, 0, 1],
    [1, -1, -1],
    [1, -1, 0],
]) // true
