import { twoSum } from './index';

test('两数之和', () => {
    const nums = [3, 2, 4];

    const target = 6;

    const expected = [1, 2];

    const res = twoSum(nums, target);

    expect(res).toStrictEqual(expected);
});
