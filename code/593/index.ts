/**
 * @author liuyuan
 * @date 2022-07-29 15:42
 * @since 1.0.0
 */

function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    return help(p1, p2, p3) && help(p1, p2, p4) && help(p2, p3, p4) && help(p1, p2, p4)
}

/**
 * 长方形的任意三个节点都是等腰三角形，只需要任意三个节点的组成都是 “两个全等的直角等腰三角形”
 * 即 a² + b² = c²
 */
function help(a: number[], b: number[], c: number[]): boolean {
    const len1 = Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)
    const len2 = Math.pow(a[0] - c[0], 2) + Math.pow(a[1] - c[1], 2)
    const len3 = Math.pow(c[0] - b[0], 2) + Math.pow(c[1] - b[1], 2)

    return (
        (len1 > len2 && len2 === len3 && len1 === len2 + len3) ||
        (len2 > len3 && len1 === len3 && len2 === len1 + len3) ||
        (len3 > len1 && len2 === len1 && len3 === len2 + len1)
    )
}
