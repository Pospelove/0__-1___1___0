import { InputRow } from "./structs/inputRow";
import { MathUtils } from "./mathUtils";
import { OutputRow, OutputRowUtils } from "./structs/outputRow";

export class Transform {
    static transformRow = (row: InputRow): OutputRow => {
        const data = Transform.parseArray(row.json);
        if (data === null) {
            return OutputRowUtils.createInvalid(row.id);
        }

        const res = Transform.transformArray(data);
        if (res === null) {
            return OutputRowUtils.createInvalid(row.id);
        }

        return OutputRowUtils.createValid(row.id, res);
    };

    private static parseArray(json: string): unknown[] | null {
        let data: unknown;
        try {
            data = JSON.parse(json) as unknown;
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                return null;
            }
            throw e;
        }
        return Array.isArray(data) ? data : null;
    };

    private static transformArray(data: unknown[]): unknown[] | null {
        const squareSideLength = Math.sqrt(data.length);
        const isSquare = squareSideLength === Math.floor(squareSideLength);
        if (!isSquare) {
            return null;
        }

        let res = new Array(data.length);
        data.forEach((value, index) => {
            const x = MathUtils.getX(index, squareSideLength);
            const y = MathUtils.getY(index, squareSideLength);
            const newX = x + MathUtils.getCellSpeedX(x, y, squareSideLength);
            const newY = y + MathUtils.getCellSpeedY(x, y, squareSideLength);
            const newIndex = MathUtils.getIndexFromXY(newX, newY, squareSideLength);
            res[newIndex] = value;
        });
        return res;
    };
};
