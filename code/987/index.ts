/**
 * @author liuyuan
 * @date 2022-08-01 11:41
 * @since 1.0.0
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function verticalTraversal(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }

    // 坐标集合
    const nodes: number[][] = []

    /**
     * 遍历后会得到一个 [row, col, val] 结构的二维数组
     */
    dfs(root, 0, 0, nodes)

    /**
     * 得到的坐标节点是无序的, 需要进行排序
     */
    nodes.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        } else if (a[1] !== b[1]) {
            return a[1] - b[1]
        } else {
            return a[2] - b[2]
        }
    })

    const ans: number[][] = []

    let lastcol = -Number.MAX_VALUE

    for (const tuple of nodes) {
        let col = tuple[0]
        // let row = tuple[1]
        let value = tuple[2]

        if (col !== lastcol) {
            lastcol = col
            ans.push([])
        }
        ans[ans.length - 1].push(value)
    }
    return ans
}

/**
 * @function 深度优先遍历掉所有的树
 * @param node {TreeNode} 当前节点
 * @param row {number} 行坐标
 * @param col {number} 列坐标
 * @param nodes {Array<number>} 传入的坐标集合
 * @returns
 */
function dfs(node: TreeNode | null, row: number, col: number, nodes: number[][]) {
    if (node === null) {
        return
    }

    nodes.push([col, row, node.val])

    // (row + 1, col - 1)
    dfs(node.left, row + 1, col - 1, nodes)

    // (row + 1, col + 1)
    dfs(node.right, row + 1, col + 1, nodes)
}
