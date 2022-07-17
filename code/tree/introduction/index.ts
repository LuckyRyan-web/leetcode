/**
 * @author liuyuan
 * @date 2022-07-17 16:29
 * @since 1.0.0
 */

export interface TreeType {
    val: number | null
    left: TreeType | null
    right: TreeType | null
}

export type Tree = TreeType | null

export const bt: TreeType = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
}