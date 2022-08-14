/**
 * @author liuyuan
 * @date 2022-08-14 23:00
 * @since 1.0.0
 */

import { tree, FSTest } from './dfs'

const bfs = (root: FSTest) => {
    const q = [root]

    while (q.length) {
        const n = q.shift()

        console.log(n?.val)

        n?.children.forEach((v) => {
            q.push(v)
        })
    }
}
