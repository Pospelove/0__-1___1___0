import { MathUtils } from "./mathUtils";

const generateSpeedMatrix = (n: number, f: (x: number, y: number, n: number) => number) => {
    const matrix = [];
    for (let x = 0; x < n; x++) {
        const row = [];
        for (let y = 0; y < n; y++) {
            row.push(f(y, x, n));
        }
        matrix.push(row);
    }
    return matrix;
};

const generateXSpeedMatrix = (n: number) => generateSpeedMatrix(n, MathUtils.getCellSpeedX);
const generateYSpeedMatrix = (n: number) => generateSpeedMatrix(n, MathUtils.getCellSpeedY);

describe('mathUtils', () => {
    it('Middle of 1-sized square should be at [0, 0]', () => {
        expect(MathUtils.getX(0, 1)).toEqual(0);
        expect(MathUtils.getY(0, 1)).toEqual(0);
    });

    it('Middle of 3-sized square should be at [1, 1]', () => {
        expect(MathUtils.getX(4, 3)).toEqual(1);
        expect(MathUtils.getY(4, 3)).toEqual(1);
    });

    it('Down-right of 2-sized square should be at [1, 1]', () => {
        expect(MathUtils.getX(3, 2)).toEqual(1);
        expect(MathUtils.getY(3, 2)).toEqual(1);
    });

    it('Down-left of 2-sized square should be at [0, 1]', () => {
        expect(MathUtils.getX(2, 2)).toEqual(0);
        expect(MathUtils.getY(2, 2)).toEqual(1);
    });

    it('X speed matrix for 1-sized matrix', () => {
        const n = 1;
        const m = generateXSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([0]);
    });

    it('X speed matrix for 2-sized matrix', () => {
        const n = 2;
        const m = generateXSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([0, -1]);
        expect(m[1]).toEqual([1, 0]);
    });

    it('X speed matrix for 3-sized matrix', () => {
        const n = 3;
        const m = generateXSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([0, -1, -1]);
        expect(m[1]).toEqual([0, 0, 0]);
        expect(m[2]).toEqual([1, 1, 0]);
    });

    it('X speed matrix for 4-sized matrix', () => {
        const n = 4;
        const m = generateXSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([0, -1, -1, -1]);
        expect(m[1]).toEqual([0, 0, -1, 0]);
        expect(m[2]).toEqual([0, 1, 0, 0]);
        expect(m[3]).toEqual([1, 1, 1, 0]);
    });

    it('X speed matrix for 5-sized matrix', () => {
        const n = 5;
        const m = generateXSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([0, -1, -1, -1, -1]);
        expect(m[1]).toEqual([0, 0, -1, -1, 0]);
        expect(m[2]).toEqual([0, 0, 0, 0, 0]);
        expect(m[3]).toEqual([0, 1, 1, 0, 0]);
        expect(m[4]).toEqual([1, 1, 1, 1, 0]);
    });

    it('X speed matrix for 6-sized matrix', () => {
        const n = 6;
        const m = generateXSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([0, -1, -1, -1, -1, -1]);
        expect(m[1]).toEqual([0, 0, -1, -1, -1, 0]);
        expect(m[2]).toEqual([0, 0, 0, -1, 0, 0]);
        expect(m[3]).toEqual([0, 0, 1, 0, 0, 0]);
        expect(m[4]).toEqual([0, 1, 1, 1, 0, 0]);
        expect(m[5]).toEqual([1, 1, 1, 1, 1, 0]);
    });

    it('Y speed matrix for 1-sized matrix', () => {
        const n = 1;
        const m = generateYSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([0]);
    });

    it('Y speed matrix for 2-sized matrix', () => {
        const n = 2;
        const m = generateYSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([1, 0]);
        expect(m[1]).toEqual([0, -1]);
    });

    it('Y speed matrix for 3-sized matrix', () => {
        const n = 3;
        const m = generateYSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([1, 0, 0]);
        expect(m[1]).toEqual([1, 0, -1]);
        expect(m[2]).toEqual([0, 0, -1]);
    });

    it('Y speed matrix for 4-sized matrix', () => {
        const n = 4;
        const m = generateYSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([1, 0, 0, 0]);
        expect(m[1]).toEqual([1, 1, 0, -1]);
        expect(m[2]).toEqual([1, 0, -1, -1]);
        expect(m[3]).toEqual([0, 0, 0, -1]);
    });

    it('Y speed matrix for 5-sized matrix', () => {
        const n = 5;
        const m = generateYSpeedMatrix(n);
        expect(m.length).toEqual(n);
        expect(m[0]).toEqual([1, 0, 0, 0, 0]);
        expect(m[1]).toEqual([1, 1, 0, 0, -1]);
        expect(m[2]).toEqual([1, 1, 0, -1, -1]);
        expect(m[3]).toEqual([1, 0, 0, -1, -1]);
        expect(m[4]).toEqual([0, 0, 0, 0, -1]);
    });
});
