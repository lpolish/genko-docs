# Genkō Docs Mirror - Deployment Guide

This guide explains how the Jekyll Genkō docs mirror is deployed to GitHub Pages.

## Automatic Deployment

The docs mirror is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The workflow file is located at `.github/workflows/docs.yml`.

### How It Works

1. **Trigger**: When any files are modified and pushed to `main`
2. **Build**: Jekyll builds the markdown files with the just-the-docs theme, creating styled HTML pages with navigation
3. **Deploy**: GitHub Pages automatically hosts the generated site

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
3. Select **"Deploy Genkō Docs Mirror to GitHub Pages"**
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

The docs mirror is available in:

| Language | Path |
|----------|------|
| English | `/README.md` |
| Español | `/es/README.md` |
| 日本語 | `/ja/README.md` |
| Deutsch | `/de/README.md` |

## Documentation Structure

```
.
├── _config.yml                  # Jekyll configuration
├── Gemfile                      # Jekyll dependencies
├── index.html                   # English site homepage
├── README.md                    # Repository overview
├── 01-getting-started.md        # First-day setup
├── 02-dashboard.md              # Dashboard overview
├── 03-business-profile.md       # Practice profile & services
├── 04-patient-management.md     # Patients
├── 05-staff-management.md       # Providers & team members
├── 06-scheduling.md             # Appointments & scheduling
├── 07-communications.md         # Patient portal & integrations
├── 08-analytics.md              # Analytics & insights
├── 09-settings.md               # Settings, AI & API
├── 10-billing.md                # Plans & billing
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

1. Edit the English mirror pages in the repository root or the language-specific files in the appropriate subfolder
2. Commit and push changes to `main`
3. The workflow will automatically deploy updates

## Customization

### Changing the Theme Configuration

Edit `_config.yml` to customize:
- Site title and description
- Color scheme (light/dark)
- Footer content
- Search settings
- Navigation order

### Adding New Languages

1. Create a new folder (e.g., `fr/` for French)
2. Add a `README.md` with front matter:
   ```yaml
   ---
   title: Français
   layout: default
   nav_order: 50
   has_children: true
   ---
   ```
3. Translate all 12 documentation files
4. Add front matter to each file with `parent: Français`
5. Update the main `README.md` to include the new language link

## Troubleshooting

### Pages Not Updating

1. Check the Actions tab for workflow status
2. Verify GitHub Pages is enabled with "GitHub Actions" as source
3. Clear browser cache and try again

### 404 Errors

1. Ensure the repository has GitHub Pages enabled
2. Check that the workflow completed successfully
3. Verify file paths are correct
4. Make sure each markdown file has proper front matter with `layout: default`

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
