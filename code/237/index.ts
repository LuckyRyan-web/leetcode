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
 Do not return anything, modify it in-place instead.
 */

/**
 * 因为只可以访问被删除的节点, 所以只需要节点的 next 指向下一个节点即可
 */
export function deleteNode(root: Types.ListNode | null): void {
    if (root && root.next) {
        root.val = root.next.val
        root.next = root.next.next
    }
}
