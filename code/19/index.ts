/**
 * @author liuyuan
 * @date 2022-07-21 22:08
 * @since 1.0.0
 */

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

/**
 * 暴力解法: 删除倒数的第 N 个节点就是删除(链表长度 - n + 1)这个节点
 * 1. 求出链表的长度, O(N)
 * 2. 删除链表的节点, O(N)
 */

function removeNthFromEnd(head: Types.ListNode | null, n: number): Types.ListNode | null {
    if (!head || !head.next) {
        return null
    }

    let count = 1

    let p = head

    if (p.next) {
        p = p.next
        count++
    }

    let cur = head

    let end = count - n + 1

    for (let i = 1; i < end; i++) {
        cur = cur.next!
    }

    cur.next = cur.next?.next!

    return head
}
