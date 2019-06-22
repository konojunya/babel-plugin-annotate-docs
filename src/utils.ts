import path from "path";
import fs from "fs";
import mkdirp from "mkdirp";
import { ANNOTATE_DOCS } from "./type";
import { generateMarkdown } from "./template";

const DEFAULT_DIR = "docs";
const DEFAULT_FILE_NAME = "TODO.md";

const fstat = (path: string) => {
  try {
    return fs.statSync(path);
  } catch (e) {
    return null;
  }
};

const directoryExists = (path: string) => {
  const stat = fstat(path);

  return stat == null ? false : stat.isDirectory();
};

export const writeFile = (data: ANNOTATE_DOCS[]) => {
  let todo = data;
  const cwd = process.cwd();
  const dir = path.resolve(cwd, DEFAULT_DIR);

  if (!directoryExists(dir)) {
    mkdirp.sync(dir);
  }

  const file = path.join(dir, DEFAULT_FILE_NAME);

  fs.writeFileSync(file, generateMarkdown(todo), "utf8");
  process.exit(0);
};
