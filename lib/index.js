"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const template_1 = require("./template");
const utils_1 = require("./utils");
const plugin = () => {
    const matches = [];
    return {
        visitor: {
            Program(_, { file: { ast: { comments } } }) {
                if (comments) {
                    for (const comment of comments) {
                        const match = constants_1.COMMENT_ANNOTATE_REGEX.exec(comment.value);
                        comment.value.match(constants_1.COMMENT_ANNOTATE_REGEX);
                        if (match) {
                            const type = match[1];
                            const text = match[2];
                            const asigneeAndMemo = /\@([a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38})\s(.+)/.exec(text);
                            if (asigneeAndMemo) {
                                // if find asignee and memo
                                const assignee = asigneeAndMemo[1];
                                const value = asigneeAndMemo[2];
                                matches.push({
                                    type,
                                    assignee,
                                    value
                                });
                            }
                            else {
                                matches.push({
                                    type,
                                    assignee: "unknown",
                                    value: text
                                });
                            }
                        }
                    }
                }
                utils_1.writeFile(template_1.generateMarkdown(matches));
            }
        }
    };
};
exports.default = plugin;
//# sourceMappingURL=index.js.map