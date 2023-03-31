/**
 * 比较版本号
 * 阿里外包笔试
 * @author liuyuan
 * @date 2023-03-31 22:52
 * @since 1.0.0
 */

function compareVersion(version1: string, version2: string) {
    const v1 = version1.split('.')
    const v2 = version2.split('.')

    const len = Math.max(v1.length, v2.length)

    for (let i = 0; i < len; i++) {
        const num1 = v1[i] ? parseInt(v1[i]) : 0
        const num2 = v2[i] ? parseInt(v2[i]) : 0

        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        }
    }

    return 0
}

compareVersion('0.1', '1.1.1') // -1
compareVersion('13.37', '1.2 ') // 1
compareVersion('1.1', '1.1.0') // 0
compareVersion('1.1', '1.1.1') // -1
