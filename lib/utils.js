"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const OUTPUT_PATH = path_1.default.resolve(__dirname, "../docs/ANNOTATE_DOCS.md");
const OUTPUT_DIR = path_1.default.resolve(__dirname, "../docs");
exports.writeFile = (data) => {
    const found = fs_1.default.statSync(OUTPUT_DIR);
    if (!found.isDirectory()) {
        fs_1.default.mkdir(OUTPUT_DIR, err => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    }
    fs_1.default.writeFile(OUTPUT_PATH, data, err => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
};
//# sourceMappingURL=utils.js.map