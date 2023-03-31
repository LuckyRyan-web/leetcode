/**
 * @author liuyuan
 * @date 2023-02-23 12:48
 * @since 1.0.0
 */
import { getValue } from './index'

const obj = {
    foo: {
        bar: {
            baz: 42,
        },
    },
}

const target = obj['foo']['bar']['baz']

test('get_value', () => {
    // const res = getValue(obj, 'foo.bar.baz')
    // expect(res).toEqual(target)
})
