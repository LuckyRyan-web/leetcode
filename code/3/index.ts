/**
 * @author liuyuan
 * @date 2022-07-10 18:13
 * @since 1.0.0
 */
export default function lengthOfLongestSubstring(s: string): number {
    // 左指针
    let left = 0

    // 最大指针的长度
    let maxLen = 0

    // 定义一个 map 来存储已经出现过的字符串
    const map = new Map()

    // 右指针需要不断的移动，需要不断的改变
    for (let right = 0; right < s.length; right++) {
        // 如果是遇到了重复字符串，需要把左指针往右边移动一位, 且左指针的下标需要在滑动窗口内
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1
        }

        // 滑动窗口, 纪录每个指针的最大值
        maxLen = Math.max(maxLen, right - left + 1)

        // 存储字符串和他的下标
        map.set(s[right], right)
    }

    return maxLen
}
