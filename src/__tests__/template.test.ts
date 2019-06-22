import { generateMarkdown, sort_logic } from "../template";
import { ANNOTATE_DOCS } from "../type";

describe("template test", () => {
  test("should handle generatedMarkdown - no data", () => {
    const props: ANNOTATE_DOCS[] = [];

    const markdown = generateMarkdown(props);
    expect(markdown).toEqual(`|type|assignee|value|\n|:--|:--|:--|\n`);
  });

  test("should handle generatedMarkdown - one data", () => {
    const props: ANNOTATE_DOCS[] = [
      {
        type: "FIXME",
        assignee: "konojunya",
        value: "todo"
      }
    ];

    const markdown = generateMarkdown(props);
    expect(markdown).toEqual(
      `|type|assignee|value|\n|:--|:--|:--|\n|FIXME|[konojunya](https://github.com/konojunya)|todo|\n`
    );
  });

  test("should handle generatedMarkdown - one data with no asignee", () => {
    const props: ANNOTATE_DOCS[] = [
      {
        type: "FIXME",
        assignee: "unknown",
        value: "todo"
      }
    ];

    const markdown = generateMarkdown(props);
    expect(markdown).toEqual(
      `|type|assignee|value|\n|:--|:--|:--|\n|FIXME|unknown|todo|\n`
    );
  });

  test("should handle sort_logic 1", () => {
    const sorted_props = sort_logic(
      {
        type: "FIXME",
        assignee: "konojunya",
        value: "todo"
      },
      {
        type: "AAA",
        assignee: "konojunya",
        value: "todo"
      }
    );
    expect(sorted_props).toEqual(1);
  });

  test("should handle sort_logic -1", () => {
    const sorted_props = sort_logic(
      {
        type: "AAA",
        assignee: "konojunya",
        value: "todo"
      },
      {
        type: "FIXME",
        assignee: "konojunya",
        value: "todo"
      }
    );
    expect(sorted_props).toEqual(-1);
  });
});
