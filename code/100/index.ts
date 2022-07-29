/**
 * @author liuyuan
 * @date 2022-07-28 11:36
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
 * 直接用深度优先遍历递归自身节点即可
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p || !q) {
        return !p && !q
    }

    return p.val === q.val && isSameTree(q.left, p.left) && isSameTree(q.right, p.right)
}
