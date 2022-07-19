/**
 * @author liuyuan
 * @date 2022-07-17 17:07
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
 * 深度优先遍历出整个树，记录层级即可
 */

function maxDepth(root: Types.TreeNode | null): number {
    let deepLen = 0

    /**
     * 
     * @param root {TreeNode | null} 树的节点
     * @param len {number} 节点的长度
     * @returns 
     */
    const dfs = (root: Types.TreeNode | null, len: number) => {
        if (!root) {
            return
        }

        console.log(root.val)

        // 这一行不用每个遍历都判断，只需要判断是否为 “叶子节点” 即可
        // deepLen = Math.max(deepLen, len)
        if (!root.left && !root.right) {
            deepLen = Math.max(deepLen, len)
        }

        dfs(root.left, len + 1)
        dfs(root.right, len + 1)
    }

    dfs(root, 1)

    return deepLen
};
