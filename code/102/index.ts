/**
 * leetcode: https://leetcode.cn/problems/binary-tree-level-order-traversal/
 * Tags: 二叉树、广度优先遍历
 * @author liuyuan
 * @date 2022-08-14 22:10
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
 * 空间复杂度: O(N)
 * @param {(TreeNode | null)} root
 * @return {*}  {number[][]}
 */
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }

    const q = [[root, 0]]

    const res: number[][] = []

    while (q.length) {
        const [n, level] = q.shift() as [TreeNode, number]

        // console.log(n?.val)

        /** 如果该层无数据，就先 push 初始化第一个数据 */
        if (!res[level]) {
            res.push([n.val])
        } else {
            res[level].push(n.val)
        }

        if (n?.left) {
            q.push([n.left, level + 1])
        }

        if (n?.right) {
            q.push([n.right, level + 1])
        }
    }

    return res
}
