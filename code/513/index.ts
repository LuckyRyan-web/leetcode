/**
 * @author liuyuan
 * @date 2022-07-30 14:12
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
 * 其实就是拿最后一行的最左边的值
 */
function findBottomLeftValue(root: TreeNode | null): number {
    let curLevel: (TreeNode | null)[] = [root]

    let res = root?.val || 0

    while (curLevel.length) {
        let nextLevel: (TreeNode | null)[] = []

        for (let i = 0; i < curLevel.length; i++) {
            if (curLevel[i]?.left) {
                nextLevel.push(curLevel[i]?.left!)
            }

            if (curLevel[i]?.right) {
                nextLevel.push(curLevel[i]?.right!)
            }
        }

        res = curLevel[0]?.val || 0
        curLevel = nextLevel!
    }

    return res
}
