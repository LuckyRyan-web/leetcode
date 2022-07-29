/**
 * @author liuyuan
 * @date 2022-07-19 16:47
 * @since 1.0.0
 */
import { MyQueue } from './index'

const example_232: Types.ExampleType[] = [
    {
        inStack: ['MyQueue', 'push', 'push', 'peek', 'pop', 'empty'],
        outStack: [[], [1], [2], [], [], []],
        target: [null, null, null, 1, 1, false],
    },
]

test('', () => {
    example_232.forEach((v) => {})
})
