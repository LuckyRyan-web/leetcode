import { Tree, TreeType, bt } from './index'

/** 递归方法 */
const postOrder = (root: Tree) => {
    if (!root) {
        return
    }

    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val)
}


/** 堆栈方法 */
const postOrder_stack = (root: Tree) => {
    if (!root) {
        return
    }

    const outputStack = []
    const stack = [root]

    while (stack.length) {
        const n = stack.pop() as TreeType
        outputStack.push(n)

        if (n?.left) {
            stack.push(n.left)
        }

        if (n?.right) {
            stack.push(n.right)
        }
    }

    while (outputStack.length) {
        const n = outputStack.pop() as TreeType
        console.log(n.val)
    }
}

postOrder(bt)
console.log('-----------')
postOrder_stack(bt)