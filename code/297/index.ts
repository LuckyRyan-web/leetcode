import { TreeNode } from '@/common/index'
/**
 * @author liuyuan
 * @date 2022-07-31 16:27
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
 * 序列号通俗的讲，就是树的结构转换为 string 类型， 然后把 string 再转换为树
 * 本题目可以使用 "先序遍历" 的解法可以最简单的构建树
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if (root === null) {
        // 遍历到 null 节点
        return '#'
    }
    const left = serialize(root.left) // 左子树的序列化结果
    const right = serialize(root.right) // 右子树的序列化结果
    return root.val + ',' + left + ',' + right // 按  根,左,右  拼接字符串
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const list = data.split(',') // split成数组

    const buildTree = (list: string[]) => {
        // 基于list构建当前子树
        const node = list.shift() as string // 弹出首项，获取它的“数据”
        if (node === '#') {
            // 是#，返回null节点
            return null
        }
        const root = new TreeNode(Number(node)) // 不是#，则创建节点
        root.left = buildTree(list) // 递归构建左子树
        root.right = buildTree(list) // 递归构建右子树
        return root // 返回当前构建好的root
    }

    return buildTree(list) // 构建的入口
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
