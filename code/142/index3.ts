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
function detectCycle_3(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null
    }

    let fast = head
    let slow = head

    while (slow && slow.next) {
        slow = slow.next

        if (fast && fast.next && fast.next.next) {
            fast = fast.next.next
        } else {
            return null
        }

        if (slow === fast) {
            return fast
        }
    }

    return null
}
