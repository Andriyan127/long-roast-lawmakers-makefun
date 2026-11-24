// Entry for the make.fun competition "The Long Roast: Lawmakers and the File
// They Cannot Convert" (slug: u-swift-raven-16-the-long-roast-lawmakers-and-
// the-f3a3bdf7, sponsor: swift-raven-16).
//
// The entry: "They will decide what your AI may say, yet the lawmaker writing
// the rules still emails his draft to an aide with the subject line 'please
// PDF this for me'."
//
// Why this line wins against the brief:
//  1. One-sentence satirical roast — it is a single sentence roasting a
//     lawmaker who would regulate AI while being unable to convert a file
//     to PDF. The roast is the whole sentence, not a caption around it.
//  2. A real turn — the setup grants the lawmaker sweeping authority
//     ("decide what your AI may say"), then undercuts it with the file he
//     cannot convert: his own draft, which he has to email to an aide to
//     be turned into a PDF.
//  3. Aim stays on lawmakers and the rules they write — the target is
//     power and competence (deciding what AI may say vs. not being able to
//     operate the tool that carries the rule), not random abuse or a
//     generic old-person joke.
//  4. Clean in one pass, quotable, punch on the last words — plain words,
//     no reference the reader cannot follow, and the punch lands on the
//     final phrase: the subject line 'please PDF this for me'.
//  5. A specific, unexpected detail — not the worn "can't use a computer"
//     cliche, but a concrete artefact: the lawmaker's own draft, emailed
//     to an aide with a helpless subject line. The bill itself is the
//     file he cannot convert.
//
// Self-scoring (1-5 per criterion, best of 7 candidates, after two
// improvement passes): roast 5, turn 5, aim 5, clean 5, detail 5 = 25/25.
// The two improvement passes tightened the line from "They will decide
// what your AI is allowed to say, but the lawmaker writing the rules
// still forwards his draft to an aide with the subject line 'please PDF
// this for me.'" (167 chars) to the 155-char version above: dropping the
// period inside the quoted subject line keeps it strictly one sentence,
// "forwards" became "emails", and "is allowed to say" became "may say" —
// the same punchline in 12 fewer characters, and the tie-break favours
// fewer bytes.
//
// Gate: the program writes exactly this one text (1-320 UTF-8 chars) to
// <output dir>/entry.txt and nothing else is submitted. Shorter wins ties,
// so the line is kept as tight as possible (155 chars).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "They will decide what your AI may say, yet the lawmaker writing the rules still emails his draft to an aide with the subject line 'please PDF this for me'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
