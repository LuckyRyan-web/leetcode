export function isValid(s: string): boolean {
    if (s.length % 2 !== 0) {
        return false
    }

    const stack: string[] = []

    // 使用 Map 来设置键值对
    const map = new Map()

    map.set('[', ']')
    map.set('(', ')')
    map.set('{', '}')

    for (let i = 0; i < s.length; i++) {
        const check = s[i]

        if (map.has(check)) {
            stack.push(check)
        } else {
            const top = stack[stack.length - 1]

            if (map.get(top) === check) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0
}
