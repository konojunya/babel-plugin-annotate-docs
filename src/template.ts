import { ANNOTATE_DOCS } from "./type";

export const sort_logic = (a: ANNOTATE_DOCS, b: ANNOTATE_DOCS): number => {
  return a.type > b.type ? 1 : -1;
};

export const generateMarkdown = (props: ANNOTATE_DOCS[]) => {
  const sortedProps = [...props].sort(sort_logic);
  let markdown = `|type|assignee|value|\n`;
  markdown += `|:--|:--|:--|\n`;
  sortedProps.forEach(props => {
    markdown += `|${props.type.toUpperCase()}|${
      props.assignee === "unknown"
        ? props.assignee
        : `[${props.assignee}](https://github.com/${props.assignee})`
    }|${props.value}|\n`;
  });

  return markdown;
};
