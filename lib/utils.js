"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const mkdirp_1 = __importDefault(require("mkdirp"));
const template_1 = require("./template");
const DEFAULT_DIR = "docs";
const DEFAULT_FILE_NAME = "TODO.md";
const fstat = (path) => {
    try {
        return fs_1.default.statSync(path);
    }
    catch (e) {
        return null;
    }
};
const directoryExists = (path) => {
    const stat = fstat(path);
    return stat == null ? false : stat.isDirectory();
};
exports.writeFile = (data) => {
    let todo = data;
    const cwd = process.cwd();
    const dir = path_1.default.resolve(cwd, DEFAULT_DIR);
    if (!directoryExists(dir)) {
        mkdirp_1.default.sync(dir);
    }
    const file = path_1.default.join(dir, DEFAULT_FILE_NAME);
    fs_1.default.writeFileSync(file, template_1.generateMarkdown(todo), "utf8");
    process.exit(0);
};
//# sourceMappingURL=utils.js.map