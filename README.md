# Genkō docs mirror

This repository hosts the maintained Jekyll mirror of the current Genkō documentation.

- **Canonical product docs:** [getgenko.com/docs](https://getgenko.com/docs)
- **Primary source used for this mirror:** `../genko-new/app/(marketing)/docs/page.tsx`
- **Published build path:** `bundle exec jekyll build`

## What this mirror covers

The English Jekyll guides track the current Genkō product at a high level:

1. Getting started
2. Dashboard
3. Practice profile and services
4. Patients
5. Providers and team members
6. Appointments and scheduling
7. Patient portal and integrations
8. Analytics
9. Settings, AI, and MCP API
10. Plans and billing
11. Quick reference

## Local preview

```bash
bundle exec jekyll build
bundle exec jekyll serve
```

## Repository notes

- The Jekyll site is a readable mirror, not just a redirect shell.
- The live product docs at `getgenko.com/docs` remain the canonical source.
- Non-English folders (`de/`, `es/`, and `ja/`) are maintained mirrors that follow the English documentation structure.
