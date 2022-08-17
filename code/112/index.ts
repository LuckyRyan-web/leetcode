/**
 * leetcode: https://leetcode.cn/problems/path-sum/
 * Tags: 深度优先遍历
 * @author liuyuan
 * @date 2022-08-17 22:16
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
 * 时间复杂度: O(N)
 * 空间复杂度: O(N) 因为是递归，有调用栈在里头
 * @param {(TreeNode | null)} root
 * @param {number} targetSum
 * @return {*}  {boolean}
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false
    }

    let res = false

    const dfs = (root: TreeNode | null, sum: number) => {
        if (!root?.left && !root?.right) {
            if (sum === targetSum) {
                res = true
            }
        }

        if (root?.left) {
            dfs(root.left, sum + root.left.val)
        }

        if (root?.right) {
            dfs(root.right, sum + root.right!.val)
        }
    }

    dfs(root, root.val)

    return res
}
s
