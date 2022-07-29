import { ListNode } from '../common/index'

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Definition for singly-linked list.
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // 新建一个链表
    const l3 = new ListNode()

    // 初始化节点
    let p1 = l1
    let p2 = l2
    let p3 = l3

    let carry = 0
    // 开始遍历两条链表的循环
    while (p1 || p2) {
        // 兼容一下如果两条链表的长度不一样的情况，没有就为0
        const v1 = p1?.val || 0
        const v2 = p2?.val || 0

        // 下一次遍历的时候，需要加上上一轮存储的进位
        const val = v1 + v2 + carry

        // 获取十位数的进位
        carry = Math.floor(val / 10)

        // 追加数据到新链表的下一个节点
        p3.next = new ListNode(val % 10)

        // 计算数据完成，把 p1 和 p2 移动到下一个节点
        // 兼容一下节点有可能没有的情况
        if (p1) {
            p1 = p1.next
        }

        if (p2) {
            p2 = p2.next
        }

        // 这里可以忽略，因为 p3 所在的链表在上面有初始化 `l3 = new ListNode()`,所以 p3 是肯定有数据的
        // if (p3) {
        //     p3 = p3.next
        // }
        p3 = p3.next
    }

    if (carry) {
        p3.next = new ListNode(carry)
    }

    return l3.next
}
