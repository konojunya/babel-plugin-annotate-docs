# babel-plugin-annotate-docs

annotate-docs is babel-plugin that creates a document from comments.

## Installation

This module is distributed via npm which is bundled with node and should be installed as one of your project's `devDependencies`:

```
npm install --save-dev babel-plugin-annotate-docs
```

## Usage

You write a comment as follows.

```typescript
// NOTE: @konojunya this is PI.
const PI = 3.14;
```

The form is as follows.

```
// <prefix>: <who> <what>
```

or

```
// <prefix>: <what>
```

Then `docs/TODO.md` is created. There is a list of supported prefix comments in the code.

### supported prefix

- TODO
- FIXME
- HACK
- REVIEW
- OPTIMIZE
- CHANGED
- NOTE
- WARNING
- XXX
- IDEA
- NB
- BUG
- QUESTION
- COMBAK
- TEMP
- DEBUG

## LICENSE

MIT
