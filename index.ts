import * as fs from 'fs';
import * as csv from 'fast-csv';
import { InputRow } from 'src/structs/inputRow';
import { OutputRow } from 'src/structs/outputRow';
import { Transform } from 'src/transform';

const inputFilePath = process.argv[2];

fs.createReadStream(inputFilePath)
    .pipe(csv.parse({ headers: true }))
    .pipe(csv.format<InputRow, OutputRow>({ headers: true }))
    .transform(Transform.transformRow)
    .pipe(process.stdout);
