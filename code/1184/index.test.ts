/**
 * @author liuyuan
 * @date 2022-07-24 21:08
 * @since 1.0.0
 */

import func from './index'

const example_1184: Types.ExampleType[] = [
    {
        distance: [1, 2, 3, 4],
        start: 0,
        destination: 1,
        target: 1
    },
    {
        distance: [1, 2, 3, 4],
        start: 0,
        destination: 2,
        target: 3
    },
    {
        distance: [1, 2, 3, 4],
        start: 0,
        destination: 3,
        target: 4
    }
]

test('1184', () => {
    example_1184.forEach((v) => {
        const res = func(v.distance, v.start, v.destination)
        expect(res).toEqual(v.target)
    })
})
