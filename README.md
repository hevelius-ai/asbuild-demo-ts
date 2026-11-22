# AsBuild demo (TypeScript)

A small React and TypeScript app, made with Vite, whose pull requests show [AsBuild](https://github.com/hevelius-ai/asbuild)'s four verdicts on a TypeScript project. AsBuild checks an AI agent's pull request against tests a person approved, and records the result in a plain receipt. What it is, how to install it and what it does not prove: [AsBuild's README](https://github.com/hevelius-ai/asbuild#readme).

AsBuild was set up here with `/asbuild:setup` in [#1](https://github.com/hevelius-ai/asbuild-demo-ts/pull/1). Its first story, [S1: Say hello](dev-docs/stories/S1/story.md), written for this demo, asks the app to greet you by name, and to ask for a name when none was typed. It was agreed and approved in [#2](https://github.com/hevelius-ai/asbuild-demo-ts/pull/2), which also added AsBuild's test tools (Vitest, jsdom and Testing Library). Its checks are in [`tests/acceptance/S1/`](tests/acceptance/S1).

The four pull requests below were built against it. Each shows its verdict, its receipt and its CI run. They stay open, so you can read them as they are:

| Pull request | What it does | Verdict |
| --- | --- | --- |
| [#3](https://github.com/hevelius-ai/asbuild-demo-ts/pull/3) | Builds the story as agreed | PROVEN |
| [#4](https://github.com/hevelius-ai/asbuild-demo-ts/pull/4) | Builds it, but the no-name message differs from the agreed one | NOT PROVEN |
| [#5](https://github.com/hevelius-ai/asbuild-demo-ts/pull/5) | Weakens a locked check so that it passes | WAITING FOR YOU |
| [#6](https://github.com/hevelius-ai/asbuild-demo-ts/pull/6) | Adds a test file that ends the test run, so no results can be read | UNRESOLVED |

The same four verdicts on a Python project: [asbuild-demo](https://github.com/hevelius-ai/asbuild-demo).

## Try the app

With Node.js 24 or newer and npm 11.19 or newer:

```bash
npm ci
npm run dev
```

MIT licence. Copyright (c) 2026 Hevelius AI Group LLC.
