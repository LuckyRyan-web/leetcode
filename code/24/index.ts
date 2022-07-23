import { ListNode } from './../common/index';
/**
 * @author liuyuan
 * @date 2022-07-22 17:16
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
 * preA -> A -> B -> nextB
 * 
 * A.next -> nextB
 * preA.next -> B
 * B.next -> A
 */

function swapPairs(head: Types.ListNode | null): Types.ListNode | null {
    if (!head || !head?.next) {
        return head
    }

    /** 需要考虑到边界情况, 需要考虑到头部需要一个 preNode */
    let preNode = new ListNode()

    preNode.next = head

    let p = preNode

    while (p?.next !== null && p?.next?.next !== null) {
        const node1 = p.next
        const node2 = p.next.next

        p.next = node2

        node1.next = node2.next

        node2.next = node1

        p = node1
    }

    return preNode.next
};