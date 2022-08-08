/**
 * @author liuyuan
 * @date 2022-08-08 22:22
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
 * 没啥好说的，直接快慢指针解决问题
 * @param head
 * @returns
 */
function middleNode(head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow!.next
    }

    return slow
}
