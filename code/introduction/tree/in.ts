import { Tree, bt } from './index'

/** 先序遍历 */

/** 递归方法 */
const inOrder = (root: Tree) => {
    if (!root) {
        return
    }

    inOrder(root.left)
    console.log(root.val)
    inOrder(root.right)
}

/** 堆栈方法 */
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
