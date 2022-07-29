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

function maxDepth_Recursion(root: Types.TreeNode | null): number {
    if (!root) {
        return 0
    }

    const leftHeight = maxDepth(root.left)
    const rightLight = maxDepth(root.right)

    return Math.max(leftHeight, rightLight) + 1
}
