/**
 * leetcode: https://leetcode.cn/problems/binary-tree-inorder-traversal/submissions/
 * Tags: 树、中序遍历
 * @author liuyuan
 * @date 2022-08-16 21:54
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
 * 递归版本的
 * 时间复杂度: O(N)
 * 空间复杂度: O(N)
 * @param {(TreeNode | null)} root
 * @return {*}  {number[]}
 */
function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }

    const res: number[] = []

    const rec = (root: TreeNode | null) => {
        if (!root) {
            return
        }

        rec(root.left)
        res.push(root.val)
        rec(root.right)
    }

    rec(root)

    return res
}
