/**
 * @author liuyuan
 * @date 2022-11-20 13:12
 * @since 1.0.0
 */
import { route1, route2 } from './index'

describe('数组的旋转方法1', () => {
    it('正常情况下的旋转', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 3
        const res = route1(arr, 3)

        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
    })

    it('数组为空', () => {
        const res = route1([], 3)

        expect(res).toEqual([])
    })

    it('数组为负数', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = -3
        const res = route1(arr, k)

        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
    })
})

describe('数组的旋转方法2', () => {
    it('正常情况下的旋转', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 3
        const res = route2(arr, 3)

        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
    })

    it('数组为空', () => {
        const res = route2([], 3)

        expect(res).toEqual([])
    })

    it('数组为负数', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = -3
        const res = route2(arr, k)

        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
    })
})
