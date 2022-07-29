export function reverseList(head: Types.ListNode | null): Types.ListNode | null | undefined {
    if (head === null || head.next === null) {
        return
    }

    const newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}
