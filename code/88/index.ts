/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

export function merge(nums1: number[], m: number, nums2: number[], n: number) {
    nums1.splice(m, nums1.length - m, ...nums2)

    nums1.sort((a, b) => a - b)
}
