import { Transform } from "./transform";

describe('transform', () => {
    it('transformRow should return properly transformed row', () => {
        expect(Transform.transformRow({ id: '3', json: '[-5]' })).toEqual({ id: '3', json: '[-5]', is_valid: true });
        expect(Transform.transformRow({ id: '1', json: '[1, 2, 3, 4, 5, 6, 7, 8, 9]' })).toEqual({ id: '1', json: '[2,3,6,1,5,9,4,7,8]', is_valid: true });
        expect(Transform.transformRow({ id: '2', json: '[40, 20, 90, 10]' })).toEqual({ id: '2', json: '[20,10,40,90]', is_valid: true });
        expect(Transform.transformRow({ id: '9', json: '[2, -0]' })).toEqual({ id: '9', json: '[]', is_valid: false });
        expect(Transform.transformRow({ id: '5', json: '[2, -5, -5]' })).toEqual({ id: '5', json: '[]', is_valid: false });
        expect(Transform.transformRow({ id: '8', json: '[1, 1, 1, 1, 1]' })).toEqual({ id: '8', json: '[]', is_valid: false });

        expect(Transform.transformRow({ id: '3', json: '[]' })).toEqual({ id: '3', json: '[]', is_valid: true });
        expect(Transform.transformRow({ id: '3', json: '{}' })).toEqual({ id: '3', json: '[]', is_valid: false });
        expect(Transform.transformRow({ id: '3', json: '{ "length": 4 }' })).toEqual({ id: '3', json: '[]', is_valid: false });
        expect(Transform.transformRow({ id: '3', json: ']]]' })).toEqual({ id: '3', json: '[]', is_valid: false });
    });
});
