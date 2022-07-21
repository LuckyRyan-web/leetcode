/**
 * @author liuyuan
 * @date 2022-07-21 15:02
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
 * 思路: 
 * 旋转链表，其实就是把倒数第二位的 next -> null, 然后最后一位的 next 从 null 指向于头部,这个流程就是旋转了一位
 * 假设如题目中的 1 -> 2 -> 3 -> 4 -> 5 旋转一位，其实就是 4 -> null 和 5 -> 1, 然后再返回最后一位指向 head 最后一个节点，即可得到结果
 * 
 * 推算:
 * 以此为推算，就可以假设移动的最后一个节点为 K, 倒数第二位节点为 K+1
 * 也就是 (K+1).next = null , K.next = head, 然后返回 K 即可
 * 
 * 计算移动位数的时候，只需要考虑到 k % count(链表长度)的结果即可， 因为长度为 3 的链表往右边移动 4 位跟往右边移动一位的结果是一样的
 */

function rotateRight(head: Types.ListNode | null, k: number): Types.ListNode | null {
    /** 排除空链表和移动为 0 的极端情况 */
    if (!head || !head?.next || k === 0) {
        return head
    }

    /** 链表中的总长度, 上面判断了空和长度为 0 的情况，所以长度至少为 1 */
    let count = 1

    let p = head

    /** 计算链表的总长度 */
    while (p?.next !== null) {
        p = p.next
        count++
    }

    /** 最终移动的位置 */
    k = k % count

    let slow: Types.ListNode | null = head

    let fast: Types.ListNode | null = head

    while (fast?.next) {
        if (k-- <= 0) {
            slow = slow.next!
        }
        fast = fast.next
    }

    /** 
     * 此时已经形成一个环形链表了, 然后把慢指针的 next 返回即为结果，然后再把 next -> null 来砍断链表
     */
    fast!.next = head

    const res = slow.next

    slow.next = null

    return res
};