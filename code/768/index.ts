/**
 * @author liuyuan
 * @date 2022-07-20 21:58
 * @since 1.0.0
 */

export function maxChunksToSorted(arr: number[]): number {
    const stack: number[] = []

    for (let i = 0; i < arr.length; i++) {
        const a = arr[i]

        if (stack.length > 0 && stack[stack.length - 1] > a) {
            const cur = stack[stack.length - 1]

            while (stack[stack.length - 1] > a) {
                stack.pop()
            }

            stack.push(cur)
        } else {
            stack.push(a)
        }
    }

    return stack.length
};