/**
 * @author liuyuan
 * @date 2022-08-23 12:06
 * @since 1.0.0
 */

/**
 * 纯数学方法
 * https://leetcode.cn/problems/valid-perfect-square/solution/gong-shui-san-xie-yi-ti-shuang-jie-er-fe-g5el/
 */
export default function test2() {
    function isPerfectSquare(num: number): boolean {
        let x = 1

        while (num > 0) {
            num = num - x
            x = x + 2
        }

        return num == 0
    }
}
