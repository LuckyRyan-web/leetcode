interface Tree {
    id: number
    name: string
    pid: number
}

function arrayToTreeMap(items: Tree[]) {
    const result: Tree[] = [] // 存放结果集
    const itemMap: Record<string, any> = {}

    items.forEach((v) => {
        itemMap[v.id] = {
            ...v,
            children: [],
        }
    })

    items.forEach((v) => {
        if (v.pid === 0) {
            result.push(itemMap[v.id])
        } else {
            if (!itemMap[v.pid]) {
                itemMap[v.pid] = {
                    children: [],
                }
            }
            itemMap[v.pid].children.push(v.id)
        }
    })

    return result
}
