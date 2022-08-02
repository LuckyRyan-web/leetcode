export default function test2() {
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

    function verticalTraversal2(root: TreeNode | null): number[][] {
        let map = new Map()

        function dfs(node: TreeNode | null, rowIndex: number, level: number) {
            if (!node) {
                return
            }
            if (!map.get(rowIndex)) {
                map.set(rowIndex, [])
            }
            let tar = map.get(rowIndex)
            if (!tar[level]) {
                tar[level] = []
            }
            tar[level].push(node.val)

            dfs(node.left!, rowIndex - 1, level + 1)
            dfs(node.right!, rowIndex + 1, level + 1)
        }

        dfs(root, 0, 0)

        let indexArr = []
        for (var [index, arrs] of map.entries()) {
            indexArr.push(index)
            arrs.forEach((arr) => {
                arr.sort((a, b) => a - b)
            })
        }
        indexArr.sort((a, b) => a - b)

        let target = indexArr.reduce((pre, index) => {
            pre.push(
                map.get(index).reduce((prev, item) => {
                    prev.push(...item)
                    return prev
                }, [])
            )
            // console.log(mapper.get(index))
            return pre
        }, [])
        return target
    }
}
