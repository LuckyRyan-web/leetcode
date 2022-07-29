/**
 * @author liuyuan
 * @date 2022-07-29 15:42
 * @since 1.0.0
 */

const example_593: Types.ExampleType[] = [
    {
        p1: [0, 0],
        p2: [1, 1],
        p3: [1, 0],
        p4: [0, 1],
        target: true,
    },
    {
        p1: [0, 0],
        p2: [1, 1],
        p3: [1, 0],
        p4: [0, 12],
        target: false,
    },
    {
        p1: [1, 0],
        p2: [-1, 0],
        p3: [0, 1],
        p4: [0, -1],
        target: true,
    },
    {
        p1: [2, 2],
        p2: [2, 1],
        p3: [1, 2],
        target: [1, 2],
    },
]

test('593', () => {
    example_593.forEach((v) => {})
})
