import { TreeNode } from '../common'
/**
 * @author liuyuan
 * @date 2022-07-23 18:52
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
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 采用快慢指针方法，快指针移动到末尾的时候，慢指针刚好指到中间
 */
function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) {
        return null
    }

    return dfs(head, null)
}

function dfs(head: ListNode, tail: ListNode | null) {
    if (head === tail) {
        return null
    }

    let slow = head
    let fast = head

    /** 根据快慢指针，快指针结束的时候，慢指针刚好到中间 */
    while (fast !== tail && fast.next !== tail) {
        fast = fast.next!.next!
        slow = slow.next!
    }

    const root = new TreeNode(slow.val)
    root.left = dfs(head, slow)!
    root.right = dfs(slow.next!, tail)!
    return root
}
