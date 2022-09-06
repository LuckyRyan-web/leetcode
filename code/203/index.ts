import { ListNode } from '@/common/index'
/**
 * leetcode:
 * Tags:
 * @author liuyuan
 * @date 2022-09-06 22:27
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
 * 可以采用双指针的写法，快指针永远比漫指针快一步
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return null
    }

    // 新建一个链表
    const newList = new ListNode(0, head)

    let slow = newList
    let fast = newList.next

    while (fast) {
        if (fast.val === val) {
            slow.next = fast.next
        } else {
            slow = fast
        }

        fast = fast.next
    }

    return newList.next
}
