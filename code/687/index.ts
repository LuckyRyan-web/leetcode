/**
 * leetcode: https://leetcode.cn/problems/longest-univalue-path/
 * Tags: 二叉树、深度优先遍历
 * @author liuyuan
 * @date 2022-09-02 11:11
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

function longestUnivaluePath(root: TreeNode | null): number {
    let res = 0

    const dfs = (root: TreeNode | null) => {
        if (!root) {
            return 0
        }

        let left = dfs(root.left)
        let right = dfs(root.right)

        let left_val = 0
        let right_val = 0

        if (root.left && root.left.val === root.val) {
            left_val = left + 1
        }

        if (root.right && root.right.val === root.val) {
            right_val = right + 1
        }

        res = Math.max(res, left_val + right_val)

        return Math.max(left_val, right_val)
    }

    dfs(root)

    return res
}
