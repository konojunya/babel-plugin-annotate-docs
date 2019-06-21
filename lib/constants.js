"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORT_PREFIX = [
    "TODO",
    "FIXME",
    "HACK",
    "REVIEW",
    "OPTIMIZE",
    "CHANGED",
    "NOTE",
    "WARNING",
    "XXX",
    "IDEA",
    "NB",
    "BUG",
    "QUESTION",
    "COMBAK",
    "TEMP",
    "DEBUG"
];
const SUPPORT_PREFIX_REGEX = new RegExp(exports.SUPPORT_PREFIX.join("|"));
exports.COMMENT_ANNOTATE_REGEX = new RegExp(`(${SUPPORT_PREFIX_REGEX}):\\s(.+)$`, "gis");
//# sourceMappingURL=constants.js.map