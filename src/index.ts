import { COMMENT_ANNOTATE_REGEX } from "./constants";
import { ANNOTATE_DOCS } from "./type";
import { generateMarkdown } from "./template";
import { writeFile } from "./utils";

const plugin = () => {
  const matches: ANNOTATE_DOCS[] = [];

  return {
    visitor: {
      Program(
        _: any,
        {
          file: {
            ast: { comments }
          }
        }: any
      ) {
        if (comments) {
          for (const comment of comments) {
            const match = COMMENT_ANNOTATE_REGEX.exec(comment.value);
            comment.value.match(COMMENT_ANNOTATE_REGEX);
            if (match) {
              const type = match[1];
              const text = match[2];
              const asigneeAndMemo = /\@([a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38})\s(.+)/.exec(
                text
              );
              if (asigneeAndMemo) {
                // if find asignee and memo
                const assignee = asigneeAndMemo[1];
                const value = asigneeAndMemo[2];
                matches.push({
                  type,
                  assignee,
                  value
                });
              } else {
                matches.push({
                  type,
                  assignee: "unknown",
                  value: text
                });
              }
            }
          }
        }

        writeFile(generateMarkdown(matches));
      }
    }
  };
};

export default plugin;
