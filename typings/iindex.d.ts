export as namespace Types

export interface ListNode {
    val: number
    next: ListNode | null
}

export interface ObjType {
    [key: number | string]: any
}

export interface ExampleType {
    [key: string]: any
    target: any
}