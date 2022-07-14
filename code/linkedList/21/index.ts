import { ListNode } from './../common/index';
/**
 * @author liuyuan
 * @date 2022-07-13 17:54
 * @since 1.0.0
 */

function mergeTwoLists(list1: Types.ListNode | null, list2: Types.ListNode | null): Types.ListNode | null {
    const list3 = new ListNode()

    let p1 = list1
    let p2 = list2
    let p3 = list3

    while (p1 && p2) {
        if (p1.val < p2.val) {
            p3.next = new ListNode(p1.val)
            p1 = p1.next
        } else {
            p3.next = new ListNode(p2.val)
            p2 = p2.next
        }

        p3 = p3.next
    }

    p3.next = p1 !== null ? p1 : p2

    return list3.next
};