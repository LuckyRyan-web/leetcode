/**
 * leetcode: https://leetcode.cn/problems/find-duplicate-subtrees/
 * Tags: dfs
 * @author liuyuan
 * @date 2022-09-05 22:13
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
 * 因为要计算重复的值，可以考虑用哈希表来存储结构
 * 不过这道题也的确是很烧脑，直接看了官方题解
 * 一开始考虑是要给每个 dfs 遍历都给一个编号， 如 100*4 + '-' 100*2 ,只需要考虑到可以有规律辨别即可
 */

// TODO: 需要理解后自己重新写一次
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const map = new Map()

    const repeat: Set<TreeNode | null> = new Set()

    const dfs = (root: TreeNode | null) => {
        if (!root) {
            return ''
        }

        let sub = ''

        sub += root.val

        sub += '('

        sub += dfs(root.left)

        sub += ')('

        sub += dfs(root.right)

        sub += ')'

        if (map.has(sub)) {
            repeat.add(map.get(sub))
        } else {
            map.set(sub, root)
        }

        return sub
    }

    dfs(root)

    return Array.from(repeat)
}
