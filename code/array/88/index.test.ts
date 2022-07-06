import { merge } from './index';

const num1 = [1, 2, 3, 0, 0, 0]

const m = 3

const num2 = [2, 5, 6]

const n = 3

const expected = [1, 2, 2, 3, 5, 6]


test('合并两个有序数组', () => {
    merge(num1, m, num2, n)

    expect(num1).toEqual(expected)
});
