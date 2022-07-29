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

export default function index2() {
    function sumNumbers(root: TreeNode | null): number {
        return dfs(root, 0)
    }

    /**
     * 深度优先遍历获取到每一个叶子节点
     * @param root {TreeNode} 当前节点
     * @param preSum {number} 之前路径的总和
     * @returns
     */
    function dfs(root: TreeNode | null, preSum: number): number {
        if (!root) {
            return 0
        }

        let cur = preSum * 10 + root.val

        if (root.left === null && root.right === null) {
            return cur
        }

        return dfs(root.left, cur) + dfs(root.right, cur)
    }
}
