"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMarkdown = (props) => {
    const sortedProps = [...props].sort((a, b) => (a.type > b.type ? 1 : -1));
    let markdown = `|type|assignee|value|\n`;
    markdown += `|:--|:--|:--|\n`;
    sortedProps.forEach(props => {
        markdown += `|${props.type.toUpperCase()}|${props.assignee === "unknown"
            ? props.assignee
            : `[${props.assignee}](https://github.com/${props.assignee})`}|${props.value}|\n`;
    });
    return markdown;
};
//# sourceMappingURL=template.js.map