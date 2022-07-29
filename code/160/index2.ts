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
 * 如果有相交点的话，A + C + B 肯定和 B + C + A 有交点，就可以考虑用双指针来进行遍历
 *
 * 时间复杂度: O(m + n) 最坏的情况下就是要遍历两个链表， m 为 A 的长度，n 为 B 的长度
 * 空间复杂度: O(1) 没有线性增长的结构
 */
function getIntersectionNode_Double(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) {
        return null
    }

    let p1: ListNode | null = headA
    let p2: ListNode | null = headB

    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB
        p2 = p2 ? p2.next : headA
    }

    // 反正 p1 p2 都可以，遍历到最后如果是没有相交的话都是为 null
    return p1
}
