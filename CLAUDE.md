# Claude initialization

Read `AGENTS.md` first. It is the shared repository guide for all coding agents.

## Claude-specific notes

- This repo mirrors the current Genkō product docs in Jekyll.
- The most important comparison source is `../genko-new/app/(marketing)/docs/page.tsx`.
- A local Claude permission file already allows read access into the sibling `genko-new` project, so use that source instead of relying on stale redirect-era copy here.

## What to optimize for

- Keep the English root docs accurate and user-facing.
- Preserve Jekyll navigation and front matter.
- Avoid introducing speculative product details.
- Validate structural doc changes with `bundle exec jekyll build`.
