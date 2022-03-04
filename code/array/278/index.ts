var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let left = 0
        let right = n

        while (left < right) {
            let mid = Math.floor((right - left) / 2) + left

            if (isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return left
    }
}
