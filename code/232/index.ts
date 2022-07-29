/**
 * @author liuyuan
 * @date 2022-07-19 16:47
 * @since 1.0.0
 */

/**
 * 队列都是先进后出的，如果是要实现的一个先进先出队列的话
 *
 * 先入先出队列的话 [1, 2, 3, 4] pop 弹出去的就是 1，此时就需要把 2，3，4都弹到另一个队列中
 */
export class MyQueue {
    protected inStack: number[]

    protected outStack: number[]

    constructor() {
        this.inStack = []
        this.outStack = []
    }

    push(x: number): void {
        this.inStack.push(x)
    }

    /**
     * 把所有的数据都弹入另一个队列，然后在另一个队列 pop()
     */
    pop(): number {
        if (!this.outStack.length) {
            this.formatIn2Out()
        }

        return this.outStack.pop() as number
    }

    peek(): number {
        if (!this.outStack.length) {
            this.formatIn2Out()
        }

        return this.outStack[this.outStack.length - 1]
    }

    empty(): boolean {
        return !this.inStack.length && !this.outStack.length
    }

    formatIn2Out() {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop() as number)
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
