/**
 * @author liuyuan
 * @date 2022-07-26 22:15
 * @since 1.0.0
 */

class LRUCache {
    protected capacity!: number
    protected map: Map<number, number> = new Map()

    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const value = this.map.get(key) as number

            /** 在 js 里面，map 是有存入的先后顺序的，所以只需要删除该节点再加入即可 */
            this.map.delete(key)
            this.map.set(key, value)

            return value
        }

        return -1
    }

    put(key: number, value: number): void {
        /** 有就删掉再赋值 */
        if (this.map.has(key)) {
            this.map.delete(key)
        }

        this.map.set(key, value)

        /** 判断容量大小，淘汰掉末位 */
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
