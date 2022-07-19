function isPalindrome(x: number): boolean {
    let reverse = x.toString().split('').reverse().join('')

    if (String(x) === String(reverse)) {
        return true
    }
    return false
}
