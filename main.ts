// One-line review of the dullest everyday object: a kitchen sponge.
// The joke lives in a true sponge detail: it soaks up everything,
// never quite dries, and ends up smelling of everything it absorbed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "Five stars: this sponge has soaked up a month of spills, soup, and secrets, and still sits by the sink, damp, smug, and smelling of everything it knows.";

// A real sponge is replaced after weeks, not years: "a month" keeps the
// observation true, while the last words carry the dark-secret twist.
if (review.length < 1 || review.length > 200 || review.includes("\n")) {
  throw new Error(`review must be one line of 1-200 characters, got ${review.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), review, "utf8");
