import { TreeType, Tree, bt } from './index'

/** 先序遍历 */

/** 递归方法 */
const preOrder = (root: TreeType | null) => {
    if (!root) {
        return
    }

    console.log(root.val)
    preOrder(root?.left)
    preOrder(root?.right)
}

/** 堆栈方法 */
const preOrder_stack = (root: Tree) => {
    if (!root) {
        return
    }

    const stack = [root]
    while (stack.length) {
        const n = stack.pop() as TreeType
        console.log(n.val)

        if (n.right) {
            stack.push(n.right)
        }

        if (n.left) {
            stack.push(n.left)
        }
    }
}

preOrder(bt)
console.log('-----------')
preOrder_stack(bt)
