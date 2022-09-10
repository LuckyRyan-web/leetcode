/**
 * leetcode: https://leetcode.cn/problems/trim-a-binary-search-tree/
 * Tags: 二叉树
 * 题解：https://leetcode.cn/problems/trim-a-binary-search-tree/solution/by-ac_oier-help/
 * @author liuyuan
 * @date 2022-09-10 23:34
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

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if (root === null) {
        return null
    }

    /** 二叉树左节点肯定比右节点小 */
    /** 依照于题解说法，判断该数字小于 low 的时候，就遍历右节点；大于 high 的时候就遍历左边节点，以此来减少遍历的次数 */
    if (root.val < low) {
        return trimBST(root.right, low, high)
    } else if (root.val > high) {
        return trimBST(root.left, low, high)
    }

    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)

    return root
}
