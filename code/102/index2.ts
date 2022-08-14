/**
 * @author liuyuan
 * @date 2022-08-14 22:30
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
    function levelOrder(root: TreeNode | null): number[][] {
        if (!root) {
            return []
        }

        const q = [root]
        const res: number[][] = []

        while (q.length) {
            let len = q.length

            res.push([])

            while (len--) {
                const n = q.shift() as TreeNode

                res[res.length - 1].push(n.val)

                if (n?.left) {
                    q.push(n.left)
                }

                if (n?.right) {
                    q.push(n.right)
                }
            }
        }

        return res
    }
}
