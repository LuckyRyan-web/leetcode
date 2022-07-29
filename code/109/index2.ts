import { TreeNode } from '../common'

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

export default function Test2() {
    /**
     * 采用快慢指针方法，快指针移动到末尾的时候，慢指针刚好指到中间
     */
    function sortedListToBST(head: ListNode | null): TreeNode | null {
        if (!head) {
            return null
        }

        return dfs(head, null)
    }

    /**
     * 用双指针对链表进行排序，快指针遍历完的时候，慢指针刚好就到中间了
     */
    function getListNodeMid(head: ListNode, tail: ListNode | null): ListNode | null {
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

        return slow
    }

    /**
     * 构建二叉树
     */
    function dfs(head: ListNode, tail: ListNode | null) {
        const mid = getListNodeMid(head, tail)

        if (!mid) {
            return null
        }

        const root = new TreeNode(mid.val)
        root.left = dfs(head, mid)
        root.right = dfs(mid.next!, tail)
        return root
    }
}
