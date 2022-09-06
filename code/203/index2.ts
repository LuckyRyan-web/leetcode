/**
 * @author liuyuan
 * @date 2022-09-06 22:52
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
 * 依旧是采用双指针的写法，不过是在原来的链表上改
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return null
    }

    // 要考虑一下 [7,7,7] val: 7 的情况
    while (head && head.val === val) {
        head = head.next
    }

    let slow: ListNode | null = head
    let fast: ListNode | null = head?.next || null

    while (fast) {
        if (fast.val === val) {
            slow!.next = fast.next
        } else {
            slow = slow?.next || null
        }

        fast = fast.next
    }

    return head
}
