# Contributing to Genkō Docs

Thank you for helping improve the Genkō documentation mirror.

## What lives here

This repository is a **Jekyll mirror** of the live Genkō product docs at [getgenko.com/docs](https://getgenko.com/docs). The canonical source of truth for product behavior is the live application — this mirror exists so users have a searchable, offline-friendly reference.

## How to contribute

### Reporting a problem with getgenko.com or its docs

Use [GitHub Issues](https://github.com/search?q=repo%3Agenko&type=issues) to report:
- Incorrect or outdated information in these docs
- Missing documentation for a feature you use
- Feedback or suggestions about the Genkō product itself

See [`feedback.md`](../feedback.md) (or the Feedback & Issues page on the docs site) for a full guide to choosing the right issue template.

### Editing the docs mirror

1. Fork the repository and create a feature branch.
2. Edit the relevant English guide (`01-`–`11-*.md`) or the homepage (`index.html`).
3. Validate locally: `bundle exec jekyll build`
4. Open a pull request with a clear description of what changed and why.

**Before editing**, compare against the canonical content in the live docs at [getgenko.com/docs](https://getgenko.com/docs). Do not introduce product details that are not already present in the live application.

### Style guidelines

- Keep content high-level and user-facing.
- Use the existing Jekyll front matter pattern: `title`, `layout: default`, `nav_order`.
- Do not invent features, pricing details, or integration behaviors.
- Prefer updating an existing numbered guide over creating a new top-level page.

### Localization

Non-English folders (`es/`, `ja/`, `de/`) are maintained mirrors. Localization updates should be submitted as a separate, focused pull request and should track the current English guides.

## Build and preview

```bash
bundle exec jekyll build   # validate the build
bundle exec jekyll serve   # preview at http://localhost:4000
```

## Code of Conduct

All contributors are expected to follow our [Code of Conduct](.github/CODE_OF_CONDUCT.md).
