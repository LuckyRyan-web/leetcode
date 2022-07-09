export as namespace Types

export interface ListNode {
    val: number
    next: ListNode | null
}

export interface ObjType {
    [key: number | string]: any
}