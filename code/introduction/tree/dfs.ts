/**
 * @author liuyuan
 * @date 2022-08-14 22:48
 * @since 1.0.0
 */

export interface FSTest {
    val: string
    children: FSTest[]
}

export const tree: FSTest = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [],
                },
                {
                    val: 'e',
                    children: [],
                },
            ],
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [],
                },
                {
                    val: 'g',
                    children: [],
                },
            ],
        },
    ],
}

const dfsTest = (root: FSTest) => {
    console.log(root.val)

    root.children.forEach((child) => dfsTest(child))
}
