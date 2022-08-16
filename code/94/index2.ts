/**
 * @author liuyuan
 * @date 2022-08-16 21:55
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

export function test2() {
    /**
     * 迭代版本的
     * 时间复杂度: O(N)
     * 空间复杂度: O(N)
     * @param {(TreeNode | null)} root
     * @return {*}  {number[]}
     */
    function inorderTraversal(root: TreeNode | null): number[] {
        if (!root) {
            return []
        }

        const stack = []

        const res: number[] = []

        let p: TreeNode = root

        while (p || stack.length) {
            while (p) {
                stack.push(p)
                p = p!.left!
            }

            const n = stack.pop()

            res.push(n!.val)

            p = n?.right!
        }

        return res
    }
}
