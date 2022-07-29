import { generate } from './index'

const example = [
    {
        numRows: 5,
        target: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
    },
    {
        numRows: 1,
        target: [[1]],
    },
]

test('118. 杨辉三角', () => {
    for (let i of example) {
        const res = generate(i.numRows)

        expect(res).toEqual(i.target)
    }
})
