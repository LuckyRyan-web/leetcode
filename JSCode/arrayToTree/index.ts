/**
 * @author liuyuan
 * @date 2023-03-01 21:52
 * @since 1.0.0
 */

interface Tree {
    id: number
    name: string
    pid: number
}

function arrayToTree(items: Tree[]) {
    const result: Tree[] = [] // 存放结果集
    const itemMap: Record<string, any> = {} //

    // 先转成map存储
    for (const i of items) {
        itemMap[i.id] = { ...i, children: [] }
    }

    for (const i of items) {
        const id = i.id
        const pid = i.pid
        const treeItem = itemMap[id]

        if (pid === 0) {
            result.push(treeItem)
        } else {
            if (!itemMap[pid]) {
                itemMap[pid] = {
                    children: [],
                }
            }
            itemMap[pid].children.push(treeItem)
        }
    }
    return result
}

// let arr = [
//     {id: 1, name: '部门1', pid: 0},
//     {id: 2, name: '部门2', pid: 1},
//     {id: 3, name: '部门3', pid: 1},
//     {id: 4, name: '部门4', pid: 3},
//     {id: 5, name: '部门5', pid: 4},
// ]

// [
//     {
//         "id": 1,
//         "name": "部门1",
//         "pid": 0,
//         "children": [
//             {
//                 "id": 2,
//                 "name": "部门2",
//                 "pid": 1,
//                 "children": []
//             },
//             {
//                 "id": 3,
//                 "name": "部门3",
//                 "pid": 1,
//                 "children": [
//                     {
//                         "id": 4,
//                         "name": "部门4",
//                         "pid": 3,
//                         "children": [
//                             {
//                                 "id": 5,
//                                 "name": "部门5",
//                                 "pid": 4,
//                                 "children": []
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]
