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

/** map 解法 */
function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null
    }

    const map = new Map()

    let p: ListNode | null = head

    while (p) {
        if (map.has(p)) {
            return p
        }

        map.set(p, p)
        p = p?.next || null
    }

    return null
};