# Training Manual - Deployment Guide

This guide explains how to deploy the training manual documentation as a website using GitHub Pages.

## Automatic Deployment

The training manual is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The workflow file is located at `.github/workflows/docs.yml`.

### How It Works

1. **Trigger**: When files in `docs/training-manual/` are modified and pushed to `main`
2. **Build**: The workflow copies the documentation files and creates an index page
3. **Deploy**: GitHub Pages automatically hosts the content

## Accessing the Documentation

Once deployed, the documentation will be available at:

```
https://[your-org].github.io/genko/
```

Or if using a custom domain:
```
https://docs.[your-domain].com/
```

## Manual Deployment

You can also manually trigger a deployment:

1. Go to the repository on GitHub
2. Navigate to **Actions** tab
3. Select **"Deploy Training Manual to GitHub Pages"**
4. Click **"Run workflow"**
5. Select the `main` branch
6. Click **"Run workflow"** button

## Enabling GitHub Pages

To enable GitHub Pages for your repository:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **"GitHub Actions"**
3. Save the settings
4. The next workflow run will deploy the documentation

## Available Languages

The training manual is available in:

| Language | Path |
|----------|------|
| English | `/README.md` |
| Español | `/es/README.md` |
| 日本語 | `/ja/README.md` |
| Deutsch | `/de/README.md` |

## Documentation Structure

```
docs/training-manual/
├── README.md                    # English - Table of Contents
├── 01-getting-started.md        # Account creation & setup
├── 02-dashboard.md              # Dashboard overview
├── 03-business-profile.md       # Business profile management
├── 04-patient-management.md     # Patient management
├── 05-staff-management.md       # Staff management
├── 06-scheduling.md             # Scheduling & calendar
├── 07-communications.md         # Messages & leads
├── 08-analytics.md              # Analytics dashboard
├── 09-settings.md               # Settings & configuration
├── 10-billing.md                # Billing & subscription
├── 11-quick-reference.md        # Quick reference guide
│
├── es/                          # Spanish version
│   ├── README.md
│   └── 01-primeros-pasos.md ... 11-referencia-rapida.md
│
├── ja/                          # Japanese version
│   ├── README.md
│   └── 01-はじめに.md ... 11-クイックリファレンス.md
│
└── de/                          # German version
    ├── README.md
    └── 01-erste-schritte.md ... 11-kurzreferenz.md
```

## Updating Documentation

1. Edit the markdown files in the appropriate language folder
2. Commit and push changes to `main`
3. The workflow will automatically deploy updates

## Customization

### Changing the Landing Page

Edit the inline HTML in `.github/workflows/docs.yml` under the "Create index.html" step.

### Adding New Languages

1. Create a new folder under `docs/training-manual/` (e.g., `fr/` for French)
2. Translate all 12 documentation files
3. Update the main `README.md` to include the new language link
4. Update the index.html in the workflow to include the new language card

## Troubleshooting

### Pages Not Updating

1. Check the Actions tab for workflow status
2. Verify GitHub Pages is enabled with "GitHub Actions" as source
3. Clear browser cache and try again

### 404 Errors

1. Ensure the repository has GitHub Pages enabled
2. Check that the workflow completed successfully
3. Verify file paths are correct

### Permission Errors

Ensure the workflow has proper permissions set in the YAML file:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

---

*For additional help, contact the development team.*
