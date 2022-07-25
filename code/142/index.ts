/**
 * @author liuyuan
 * @date 2022-07-25 22:00
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

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null
    }

    let p1: ListNode | null = head
    let p2: ListNode | null = head

    while (p1 && p2) {
        p1 = p1?.next || null
        p2 = p2.next?.next || null

        if (p1 === p2) {
            // return p1
            let ptr: ListNode | null = head

            while (ptr !== p1) {
                ptr = ptr?.next || null
                p1 = p1?.next || null
            }

            return ptr
        }
    }

    return null
};