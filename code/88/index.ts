/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

export function merge(nums1: number[], m: number, nums2: number[], n: number) {
    // 因为数组 m 可能存在 0, 所以 num1.length - n 可以去除 0， 再补全 n 即可
    nums1.splice(m, nums1.length - m, ...nums2)

    nums1.sort((a, b) => a - b)
}
