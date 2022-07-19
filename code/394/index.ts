/**
 * @author liuyuan
 * @date 2022-07-18 22:39
 * @since 1.0.0
 */

export function decodeString(s: string): string {
    // 重复字符串
    let stack_count: any[] = []
    let stack_str: any[] = []

    let result = ''

    // 重复次数的栈
    let count = 0

    for (let i = 0; i < s.length; i++) {
        // 当前遍历到的字符串
        let item = s[i]

        if (!isNaN(Number(item))) {
            count = count * 10 + parseInt(item)
        } else if (item === '[') {
            stack_str.push(result)
            result = ''

            stack_count.push(count)
            count = 0
        } else if (item === ']') {
            const repeatTimes = stack_count.pop()
            result = stack_str.pop() + result.repeat(repeatTimes)
        } else {
            result = result + item
        }
    }

    return result
};
