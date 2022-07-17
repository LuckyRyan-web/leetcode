/**
 * @author liuyuan
 * @date 2022-07-17 13:59
 * @since 1.0.0
 */
class CustomStack {
    protected stack!: number[]
    protected top!: number

    constructor(maxSize: number) {
        this.stack = new Array(maxSize)
        this.top = -1
    }

    push(x: number): void {
        // 只要是不超过栈的最大长度
        if (this.top !== this.stack.length - 1) {
            this.top++
            this.stack[this.top] = x
        }
    }

    pop(): number {
        // 判断为空的栈
        if (this.top === -1) {
            return -1
        }

        this.top--
        return this.stack[this.top + 1]
    }

    increment(k: number, val: number): void {
        const limit = Math.min(k, this.top + 1)
        for (let i = 0; i < limit; i++) {
            this.stack[i] = this.stack[i] + val
        }
    }
}