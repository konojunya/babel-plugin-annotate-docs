import { ANNOTATE_DOCS } from "./type";

export const generateMarkdown = (props: ANNOTATE_DOCS[]) => {
  const sortedProps = [...props].sort((a, b) => (a.type > b.type ? 1 : -1));
  let markdown = `|type|assignee|value|\n`;
  markdown += `|:--|:--|:--|\n`;
  sortedProps.forEach(props => {
    markdown += `|${props.type.toUpperCase()}|${
      props.assignee === "unknown"
        ? props.assignee
        : `https://github.com/${props.assignee}`
    }|${props.value}|\n`;
  });

  return markdown;
};
