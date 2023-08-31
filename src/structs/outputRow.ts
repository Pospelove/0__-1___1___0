export interface OutputRow {
    id: string;
    json: string;
    is_valid: boolean;
}

export class OutputRowUtils {
    static createInvalid(id: string): OutputRow {
        return {
            id: id,
            json: "[]",
            is_valid: false,
        };
    }

    static createValid(id: string, data: unknown[]): OutputRow {
        return {
            id: id,
            json: JSON.stringify(data),
            is_valid: true
        }
    }
}
