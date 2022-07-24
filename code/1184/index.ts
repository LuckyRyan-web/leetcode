/**
 * @author liuyuan
 * @date 2022-07-24 21:08
 * @since 1.0.0
 */

export default function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    let len = distance.length

    let i = start
    let j = start

    let a = 0
    let b = 0

    while (i !== destination) {
        a = a + distance[i]

        /** 如果是到了终点，i 就变成 0  */
        i++
        if (i === len) {
            i = 0
        }
    }

    while (j !== destination) {
        j--
        if (j < 0) {
            j = len - 1
        }

        b += distance[j]
    }

    return Math.min(a, b)
};
