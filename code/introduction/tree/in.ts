import { Tree, bt } from './index'

/** 中序遍历 */

/** 递归方法 */
const inOrder = (root: Tree) => {
    if (!root) {
        return
    }

    inOrder(root.left)
    console.log(root.val)
    inOrder(root.right)
}

/**
 * 堆栈方法
 * 也就是需要递归把所有的左节点都 push 到栈中
 */
const inOrder_stack = (root: Tree) => {
    if (!root) {
        return
    }
    const stack = []

    let p: Tree = root

    while (p || stack.length) {
        while (p) {
            stack.push(p)
            p = p.left
        }

        const n = stack.pop()
        console.log(n?.val)
        p = n?.right || null
    }
}

inOrder(bt)
console.log('-----------')
inOrder_stack(bt)
