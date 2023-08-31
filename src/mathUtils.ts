export class MathUtils {
    static getX(index: number, squareSideLength: number): number {
        return index % squareSideLength;
    }

    static getY(index: number, squareSideLength: number): number {
        return Math.floor(index / squareSideLength);
    }

    static getIndexFromXY(x: number, y: number, squareSideLength: number) {
        return y * squareSideLength + x;
    }

    static getCellSpeedX(x: number, y: number, squareSideLength: number) {
        if (y < -x + squareSideLength && y < x) {
            return -1;
        }
        if (y >= -x + squareSideLength - 1 && y >= x + 1) {
            return 1;
        }
        return 0;
    }

    static getCellSpeedY(x: number, y: number, squareSideLength: number) {
        if (y < -x + squareSideLength && y < x) {
            return 0;
        }
        if (y >= -x + squareSideLength - 1 && y >= x + 1) {
            return 0;
        }
        const center = Math.floor(squareSideLength / 2);
        const isMiddle = x === center && y === center && squareSideLength % 2 === 1;
        if (isMiddle) {
            return 0;
        }
        return x >= center ? -1 : 1;
    }
};
