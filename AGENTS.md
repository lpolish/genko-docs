# Agent guide

This repository is the **maintained Jekyll mirror** of the current Genkō documentation.

## Repository purpose

- The live canonical docs are at `https://getgenko.com/docs`.
- The main local source for current wording and product coverage is `../genko-new/app/(marketing)/docs/page.tsx`.
- This repo should remain a readable Jekyll documentation site, not a redirect-only shell.

## Main content model

- The English root guides (`01`-`11`) are the primary maintained mirror.
- Keep content **high-level and user-facing**.
- Do not invent features, permissions, integrations, or pricing details.
- Non-English folders (`es/`, `ja/`, `de/`) currently lag behind and still contain redirect-era content. Do not “silently modernize” them unless the task explicitly includes localization.

## Preferred workflow

1. Check the canonical docs in `../genko-new/app/(marketing)/docs/page.tsx`.
2. Adapt that content to the numbered Jekyll guides and homepage here.
3. Preserve the Jekyll site structure and navigation.
4. Keep canonical links to `getgenko.com/docs`, but do not replace the English mirror with blanket redirects.

## Build and validation

- Local build: `bundle exec jekyll build`
- Local serve: `bundle exec jekyll serve`
- GitHub Pages deploy builds with Jekyll from `.github/workflows/docs.yml`

## Editing guidance

- Use existing Jekyll front matter patterns: `title`, `layout`, and `nav_order`.
- Favor updating existing numbered guides over creating new top-level pages.
- Keep repository wording consistent with “Genkō docs mirror” rather than “training manual” or “archived docs”.
- Avoid expanding or reviving the old Docusaurus/app-docs scaffolding unless the task explicitly requires it.

## Good defaults for agents

- When in doubt, prefer the current English mirror over older redirect-oriented content.
- If a feature appears only in stale Jekyll content but not in the canonical app docs, treat it as suspect.
- If a task changes documentation structure or deployment behavior, re-run `bundle exec jekyll build`.
