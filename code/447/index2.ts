export default function test2() {
    /**
     * 对于两个节点的顺序要求不一致的情况下, 坐标排序到一个点的距离有 n * (n - 1) 种组合
     * 使用 map 解法的时候，还是需要两层循环来遍历所有的距离
     * @param points
     * @returns
     */
    function numberOfBoomerangs(points: number[][]): number {
        let num = 0

        for (let i = 0; i < points.length; i++) {
            const map = new Map()

            for (let j = 0; j < points.length; j++) {
                if (i === j) {
                    continue
                }
                const distance = getDistance(points[i], points[j])

                // map 的距离为 key, 出现次数为 value, 每次出现同样的距离 +1
                if (map.has(distance)) {
                    map.set(distance, map.get(distance) + 1)
                } else {
                    map.set(distance, 1)
                }
            }

            map.forEach((count, distance) => {
                num = num + count * (count - 1)
            })
        }

        return num
    }

    /**
     * 按照题意就是 根号“坐标1的平方 + 坐标2的平方” 就是距离, 判断距离相等即可
     * @param x 坐标1
     * @param y 坐标2
     * @returns
     */
    function getDistance(x: number[], y: number[]) {
        const distance1 = y[0] - x[0]
        const distance2 = y[1] - x[1]

        return Math.pow(distance1, 2) + Math.pow(distance2, 2)
    }
}
