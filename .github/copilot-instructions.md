# GitHub Copilot instructions

This repository is the **Genkō docs mirror**, built with **Jekyll**, not the canonical product docs source.

## Source of truth

- Public canonical docs: `https://getgenko.com/docs`
- Local canonical content source: `../genko-new/app/(marketing)/docs/page.tsx`

When documentation needs to be updated, compare against the sibling app docs first and then adapt that content to this Jekyll repo.

## Repository expectations

- Maintain the English root guides (`01`-`11`) as a readable mirror.
- Keep content high-level and user-facing.
- Do not invent new features, plan details, or AI/MCP capabilities.
- Preserve Jekyll front matter and navigation.
- Keep useful links to the canonical docs, but do not convert the English mirror back into redirect-only pages.

## Validation

- Build with: `bundle exec jekyll build`
- Serve locally with: `bundle exec jekyll serve`
- Deploy path is defined in `.github/workflows/docs.yml`

## Scope cautions

- Non-English folders still contain older redirect-based content; treat localization refreshes as separate work unless explicitly requested.
- Avoid touching leftover Docusaurus/app-docs scaffolding unless the task is specifically about that tooling.
