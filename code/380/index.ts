/**
 * leetcode: https://leetcode.cn/problems/insert-delete-getrandom-o1/
 * Tags:
 * @author liuyuan
 * @date 2022-09-02 21:41
 * @since 1.0.0
 */

class RandomizedSet {
    protected nums!: number[]
    protected map!: Map<number, any>

    constructor() {
        this.nums = []
        this.map = new Map()
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false
        }
        const index = this.nums.length
        this.nums.push(val)
        this.map.set(val, index)
        return true
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) {
            return false
        }

        const index = this.map.get(val)

        this.nums[index] = this.nums[this.nums.length - 1]
        this.map.set(this.nums[index], index)
        this.nums.pop()

        // this.nums.splice(index, 1)
        this.map.delete(val)

        return true
    }

    getRandom(): number {
        const random = Math.floor(Math.random() * this.nums.length)

        return this.nums[random]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
