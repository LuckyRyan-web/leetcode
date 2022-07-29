/**
 * @author liuyuan
 * @date 2022-07-20 21:58
 * @since 1.0.0
 */
import { maxChunksToSorted } from './index'
import { maxChunksToSorted as slideFun } from './index2'

const example_768: Types.ExampleType[] = [
    {
        arr: [5, 4, 3, 2, 1],
        target: 1,
    },
    {
        arr: [2, 1, 3, 4, 4],
        target: 4,
    },
]

// test('768', () => {
//     example_768.forEach((v) => {
//         const res = maxChunksToSorted(v.arr)

//         expect(res).toEqual(v.target)
//     })
// })

test('滑动窗口解法', () => {
    example_768.forEach((v) => {
        const res = slideFun(v.arr)

        expect(res).toEqual(v.target)
    })
})
