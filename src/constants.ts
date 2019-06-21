export const SUPPORT_PREFIX = [
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
] as const;

const SUPPORT_PREFIX_REGEX = new RegExp(SUPPORT_PREFIX.join("|"));

export const COMMENT_ANNOTATE_REGEX = new RegExp(
  `(${SUPPORT_PREFIX_REGEX}):\\s(.+)$`,
  "gis"
);
