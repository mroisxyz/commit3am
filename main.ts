// thinking_revised: hello, tiny script — one clean commit message for the 3am incident.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';

// Keep every artifact inside our own directory so the batch job stays tidy.
const here = fileURLToPath(new URL('.', import.meta.url));

// thinking_revised: no orders to process — just one confession, written exactly once.
const rawOutput = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = resolve(here, rawOutput);

await mkdir(outputDir, { recursive: true });

const message = "fix(prod): undo the thing I swore I wouldn't do at 3am # sorry team # it was one line";
await writeFile(join(outputDir, 'entry.txt'), message, 'utf8');

// One reserved slot in the output, one size log, and then we are done.
console.log(`${Buffer.byteLength(message, 'utf8')} bytes written to entry.txt`);
