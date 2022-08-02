export default function test3() {
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

    function verticalTraversal(root: TreeNode | null): number[][] {
        /**
         * map 的结构为 行为索引, 列 + root.val 为值
         * 比如 “第 1 行，第 -1 列的值为 1” 可以表示为 [1, -1, 1]
         */
        let map = new Map<number, number[][]>()

        dfs(root, 0, 0)

        // 同行同列的节点需要从小到大进行排序
        const nodesArr: number[] = []

        for (let [row, col] of map.entries()) {
            nodesArr.push(row)

            // 列的 node.val 的排序
            col.forEach((v) => {
                v.sort((a, b) => a - b)
            })
        }

        // 对行的索引进行排序
        nodesArr.sort((a, b) => a - b)

        const res = nodesArr.reduce((pre, index) => {
            const cur = map.get(index) as number[][]

            const total = cur.reduce((prev, item) => {
                prev.push(...item)
                return prev
            }, [])

            pre.push(total)
            return pre
        }, [] as number[][])

        return res

        /**
         * 按照题目要求的方法进行遍历，左节点的坐标为 [row + 1, col - 1], 右节点的坐标为 [row + 1, col + 1]
         * @param node 当前节点
         * @param row 行
         * @param col 列
         * @returns
         */
        function dfs(node: TreeNode | null, row: number, col: number) {
            if (!node) {
                return null
            }

            if (!map.has(row)) {
                map.set(row, [])
            }

            const nodes = map.get(row) as number[][]

            if (!nodes[col]) {
                nodes[col] = []
            }

            nodes[col].push(node.val)

            dfs(node.left, row - 1, col + 1)
            dfs(node.right, row + 1, col + 1)
        }
    }
}
