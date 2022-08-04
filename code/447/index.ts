/**
 * @author liuyuan
 * @date 2022-08-04 22:37
 * @since 1.0.0
 */

/**
 * 时间复杂度为 O(N3) 写了基本上没有分那种
 * @param points
 * @returns
 */
function numberOfBoomerangs(points: number[][]): number {
    //  节点数量小于 2 可以说是没有回旋节点
    if (points.length < 2) {
        return 0
    }

    let num = 0

    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                continue
            }

            for (let k = 0; k < points.length; k++) {
                if (k === i || k === j) {
                    continue
                }

                if (getDistance(points[i], points[j]) === getDistance(points[i], points[k])) {
                    num++
                }
            }
        }
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
