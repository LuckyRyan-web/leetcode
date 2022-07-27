/**
 * @author liuyuan
 * @date 2022-07-27 22:56
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

type TreeNode = Types.TreeNode

/**
 * 采用广度优先遍历来进行遍历
 */
function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const queue: [TreeNode, number][] = [[root, 1]]

    while (queue.length) {
        const [node, len] = queue.shift()!
        // console.log(node.val, len)

        /** 叶子节点，可以直接返回 */
        if (!node.left && !node.right) {
            return len
        }

        if (node.left) {
            queue.push([node.left, len + 1])
        }
        if (node.right) {
            queue.push([node.right, len + 1])
        }
    }

    return 0
}
