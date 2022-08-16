/**
 * @author liuyuan
 * @date 2022-08-16 21:34
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

// 第一步
function levelOrder1(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }

    const q = [root]

    while (q.length) {
        const n = q.shift()
        console.log(n?.val)

        if (n?.left) {
            q.push(n.left)
        }

        if (n?.right) {
            q.push(n.right)
        }
    }
}

// 第二步
function levelOrder2(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }

    const q = [[root, 0]]

    while (q.length) {
        const [n, level] = q.shift() as [TreeNode, number]
        console.log(n?.val, level)

        if (n?.left) {
            q.push([n.left, level + 1])
        }

        if (n?.right) {
            q.push([n.right, level + 1])
        }
    }
}

// 第三步
function levelOrder3(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }

    const q = [[root, 0]]

    const res: number[][] = []

    while (q.length) {
        const [n, level] = q.shift() as [TreeNode, number]
        console.log(n?.val, level)

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
