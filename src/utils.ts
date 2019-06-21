import path from "path";
import fs from "fs";

const OUTPUT_PATH = path.resolve(__dirname, "../docs/ANNOTATE_DOCS.md");
const OUTPUT_DIR = path.resolve(__dirname, "../docs");

export const writeFile = (data: string) => {
  const found = fs.statSync(OUTPUT_DIR);
  if (!found.isDirectory()) {
    fs.mkdir(OUTPUT_DIR, err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }

  fs.writeFile(OUTPUT_PATH, data, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
};
