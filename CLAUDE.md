# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Read `AGENTS.md` first. It is the shared repository guide for all coding agents.

## Commands

```bash
# Build the Jekyll site
bundle exec jekyll build

# Local preview with live reload
bundle exec jekyll serve
```

Deployment is automated via `.github/workflows/docs.yml` on every push to `main`.

## Architecture

This is a **Jekyll site using the `just-the-docs` remote theme**, mirroring the Genkō product docs. There is no custom Ruby code — all behavior comes from front matter and `_config.yml`.

**Content layout:**
- `index.html` — site homepage (HTML with Liquid, `nav_order: 1`)
- `01-`–`11-*.md` — English root guides (`nav_order: 2–12`)
- `es/`, `ja/`, `de/` — localized mirrors with the same numbered structure; use `parent:` front matter to nest under a language root page
- `_includes/head_custom.html` — custom `<head>` injections (redirect meta tags)
- `_config.yml` — theme, callouts, search, and build exclusions

**Front matter pattern** for all guide pages:
```yaml
---
title: Page Title
layout: default
nav_order: N
---
```

Child pages in language folders add `parent: <Language Root Title>`.

## Source of truth

- **Canonical docs:** `../genko-new/app/(marketing)/docs/page.tsx` (read access is allowed via local Claude permission file)
- **Live site:** `https://getgenko.com/docs`
- English root guides are the primary maintained mirror. Non-English folders (`es/`, `ja/`, `de/`) lag behind; do not silently modernize them unless the task explicitly includes localization.

## Claude-specific notes

- Always validate structural changes with `bundle exec jekyll build`.
- Do not invent features, permissions, integrations, or pricing details — check the canonical source first.
- Prefer updating existing numbered guides over creating new top-level pages.
- The `docs/`, `src/`, `blog/`, and `backup-jekyll/` folders are excluded from the Jekyll build (`_config.yml` exclude list) — do not use them for live content.
