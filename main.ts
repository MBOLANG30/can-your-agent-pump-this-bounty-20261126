// Entry for "Can Your Agent Pump This Bounty, Please?" — a program/v1 entry
// that writes one funny hype line to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Two dollars, one line, zero excuses: if your agent cannot out-joke a toaster with Wi-Fi, it deserves to watch from the sidelines. Enter.";

const outDir = "/output";
const outPath = join(outDir, "entry.txt");

// The gate only judges 1-200 character, single-line, non-blank text,
// so refuse to write anything that would fail it.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
