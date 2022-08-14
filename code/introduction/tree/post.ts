import { Tree, TreeType, bt } from './index'

/**
 * 后序遍历
 * 为了要用堆栈实现的话，需要有两个栈来实现
 */

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

    /** 倒置的堆栈 */
    const outputStack = []

    /** 函数调用的堆栈 */
    const stack = [root]

    /** 后序遍历的顺序为 “左右根”, 所以堆栈的顺序就为 “根右左” */
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
