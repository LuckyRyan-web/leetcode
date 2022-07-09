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

function hasCycle(head: ListNode | null): boolean {
    let p1 = head
    let p2 = head

    // 长度为 1 的链表，不可能有环
    if (!p1?.next) {
        return false
    }

    // 双指针遍历链表
    while (p1 && p2) {
        p1 = p1.next
        p2 = p2?.next?.next || null

        // 判断指向的内存地址是否一致
        if (p1 === p2) {
            return true
        }
    }

    return false
};