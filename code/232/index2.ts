class MyQueue {
    /** 入栈队列 */
    protected inStack: number[]

    /** 出栈队列 */
    protected outStack: number[]

    constructor() {
        this.inStack = []
        this.outStack = []
    }

    /** 把出栈队列的所有数据转换到入栈队列，然后再 push */
    push(x: number): void {
        while (this.outStack.length) {
            this.inStack.push(this.outStack.pop() as number)
        }

        this.inStack.push(x)
    }

    /** 所有的数据都转换到出栈队列, 然后再 array.pop() 弹出栈尾值就可以去除队列中的首位数*/
    pop(): number {
        this.in2out()

        return this.outStack.pop() as number
    }

    /** 所有的数据都转换到出栈队列, 然后再返回顶部的值即可 */
    peek(): number {
        this.in2out()

        return this.outStack[this.outStack.length - 1]
    }

    /** 两个栈都是空的才能判断为空队列 */
    empty(): boolean {
        return !this.inStack.length && !this.outStack.length
    }

    /** 抽离出来的方法，不然提交的时候复杂度太高了 */
    in2out() {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop() as number)
        }
    }
}
