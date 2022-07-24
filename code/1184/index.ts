/**
 * @author liuyuan
 * @date 2022-07-24 21:08
 * @since 1.0.0
 */

export default function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    /** 计算正向遍历和反向遍历的消耗 */
    let sum1 = 0
    let sum2 = 0

    /** 一个从左边开始遍历，一个从右边开始遍历 */

    let left = start
    let right = start

    /** 需要考虑到 start 从中间开始，如果是遍历到结尾还是没有找到目的地，就需要从数组的头部继续开始找 */
    while (right !== destination) {
        sum1 = sum1 + distance[right]

        right++

        if (right === distance.length) {
            right = 0
        }
    }

    /** 如果 start 是从中间开始，遍历到数组的头部都没有找到目的地，就需要从数组的尾部继续开始找 */
    while (left !== destination) {

        left--

        if (left < 0) {
            left = distance.length - 1
        }

        sum2 = sum2 + distance[left]
    }

    return Math.min(sum1, sum2)
}