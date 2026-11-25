import { mkdirSync, writeFileSync } from "node:fs";

// Famous Last Words: The Funniest Epitaph — a one-line tombstone epitaph
// of at most 150 characters, written to /output/entry.txt.
const epitaph =
  "Here lies a man who said he'd sleep when he was dead. He kept his word.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", epitaph, "utf8");
