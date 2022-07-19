import { twoSum } from './index';
import { twoSum as objFunc } from './index2'
import { twoSum as mapFunc } from './index2'

const nums = [3, 2, 4];

const target = 6;

const expected = [1, 2];


test('两数之和', () => {

    const res = twoSum(nums, target);

    expect(res).toStrictEqual(expected);
});

test('两数之和: 对象解法', () => {

    const res = objFunc(nums, target);

    expect(res).toStrictEqual(expected);
});

test('两数之和: 哈希解法', () => {

    const res = mapFunc(nums, target);

    expect(res).toStrictEqual(expected);
});
