/**
 * @author liuyuan
 * @date 2022-07-24 11:02
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

type ListNode = Types.ListNode

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const map = new Map()

    let A = headA
    let B = headB

    while (A) {
        map.set(A, A)
        A = A.next
    }

    while (B) {
        if (map.has(B)) {
            return B
        }
        B = B.next
    }

    return null
}
