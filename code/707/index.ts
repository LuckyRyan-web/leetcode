/**
 * leetcode: https://leetcode.cn/problems/design-linked-list/
 * Tags:
 * @author liuyuan
 * @date 2022-09-15 22:39
 * @since 1.0.0
 */

import { ListNode } from '@/common/index'

class MyLinkedList {
    protected size!: number
    protected head!: ListNode | null
    protected tail!: ListNode | null

    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1
        }

        const curNode = this.getNode(index)

        return curNode?.val || 0
    }

    /** 头部插入节点 */
    addAtHead(val: number): void {
        let node: ListNode = new ListNode(val, this.head)

        this.head = node

        if (!this.tail) {
            this.tail = node
        }

        this.size++
    }

    /** 插入节点到尾部 */
    addAtTail(val: number): void {
        let node = new ListNode(val, null)

        if (this.tail) {
            this.tail.next = node
        } else {
            this.head = node
        }

        this.tail = node
        this.size++
    }

    /** 链表前插入节点 */
    addAtIndex(index: number, val: number): void {
        if (index === this.size) {
            this.addAtTail(val)

            return
        }

        if (index > this.size) {
            return
        }

        if (index <= 0) {
            this.addAtHead(val)
            return
        }

        // 需要获取到前一个节点才能插入
        let curNode = this.getNode(index - 1)

        let node = new ListNode(val, curNode?.next || null)

        curNode!.next = node
        this.size++
    }

    /** 删除链表第 N 个节点 */
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return
        }

        // 处理只有一个节点的情况
        if (index === 0) {
            this.head = this.head?.next || null

            // 如果正好是尾部的话
            if (index === this.size - 1) {
                this.tail = null
            }

            this.size--

            return
        }

        // 正常的索引
        let curNode = this.getNode(index - 1)

        // 上面处理过下个节点是 null 的情况了
        curNode!.next = curNode!.next!.next

        if (index === this.size - 1) {
            this.tail = curNode
        }

        this.size--
    }

    /** 获取到第 N 个节点 */
    getNode(index: number): ListNode | null {
        let curNode: ListNode | null = new ListNode(0, this.head)

        for (let i = 0; i <= index; i++) {
            curNode = curNode?.next || null
        }

        return curNode
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
