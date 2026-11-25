// The Funniest Office Joke, Judged Head to Head — make.fun one-liner entry.
// A team-building trust fall, retold by the person who hit the floor.
// The joke lands on the HR euphemism: the fall was a "learning experience",
// the paperwork is the evidence. One line, one office, zero trust left.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Our team building exercise was trust falls. I fell. Nobody caught me. HR called it 'a valuable learning experience' and I called it 'evidence'.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
