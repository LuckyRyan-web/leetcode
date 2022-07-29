/**
 * @author liuyuan
 * @date 2022-07-29 15:43
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

/**
 * 深度优先遍历
 */
function sumNumbers(root: TreeNode | null): number {
    let sum = 0

    function dfs(root: TreeNode | null, cur: number) {
        if (!root) {
            return
        }

        let curSum = cur * 10 + root.val

        if (!root.left && !root.right) {
            sum = sum + curSum
            return
        }

        dfs(root.left, curSum)
        dfs(root.right, curSum)
    }

    dfs(root, 0)

    return sum
}
