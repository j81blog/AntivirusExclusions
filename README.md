# AntivirusExclusions

[Click here](https://ave.j81.nl) to visit the Antivirus Exclusions website.

A community-maintained collection of antivirus/EDR exclusion recommendations for VDI
and RDSH environments — FSLogix, Citrix, Ivanti, ESET, Trend Micro, and more. Every
product page lists its recommended exclusions in a filterable, sortable table, with
CSV/PDF/JSON export (per product, or combined across products via the cart).

## Tech stack

- [Astro](https://astro.build) (static site, content collections)
- [Preact](https://preactjs.com) for the two interactive bits (the exclusions table,
  the cart) — everything else on the site ships zero JavaScript
- [Tabulator](https://tabulator.info) for the table, [jsPDF](https://github.com/parallax/jsPDF)
  for PDF export
- [nanostores](https://github.com/nanostores/nanostores) (`persistentJSON`) for the
  cart, backed by `localStorage`
- Content authored as Markdown with YAML frontmatter, validated at build time via a
  [zod](https://zod.dev) schema (`src/lib/contentSchemas.ts`)
- Deployed to GitHub Pages via GitHub Actions

## Project structure

```
src/
  content.config.ts        Content collection config, wires up the schemas below
  content/
    items/{slug}.md        One file per product (frontmatter + exclusions + body)
    vendors/{slug}.md      One file per vendor
  components/               ExclusionTable.tsx (Preact island), CartPage.tsx, Icon.astro, ...
  layouts/BaseLayout.astro
  pages/                     index, vendors/[vendor], items/[slug], cart
  stores/cart.ts             Shared cart store (localStorage-backed)
  lib/
    contentSchemas.ts       Zod schemas for items/vendors - single source of truth,
                             used by both content.config.ts and the submission script
    slugify.ts               Shared slug helper (migration + submissions)
    rowId.ts                 Stable per-row id, normalizeExclusionType.ts
  styles/global.css
tools/
  migrate/                   One-time migration script from the old CSV/HTML format
  submission/                Turns a community-submitted issue into a validated PR
  shared/exclusion-type-map.json   Normalization table, shared by migrate + submission
.github/
  workflows/                 deploy.yml (GitHub Pages), ci.yml (build/typecheck),
                              submission-to-pr.yml (issue -> validated PR)
  ISSUE_TEMPLATE/submit-exclusion.yml   The community submission form
```

## Prerequisites

- Node.js 22 or newer
- npm (ships with Node)

## Running the site locally

```sh
npm install
npm run dev
```

This starts the dev server at **http://localhost:4321** with hot reload. Open it in a
browser and you should see the vendor list on the homepage.

### What to check when testing locally

- **Homepage** (`/`) — lists all 5 vendors with their product counts.
- **Vendor page** (`/vendors/{vendor}/`, e.g. `/vendors/microsoft/`) — vendor intro and
  its list of products.
- **Product page** (`/items/{slug}/`, e.g. `/items/microsoft-fslogix/`) — the exclusions
  table:
  - Type the filter box — rows should narrow live.
  - Click column headers — rows should sort.
  - Check a few row checkboxes, click **Add selected to cart** — the cart icon badge in
    the header should update.
  - Click **Download CSV** / **Download PDF** / **Download JSON** — a file should
    download for each.
- **Cart page** (`/cart`) — shows everything you've added across products, with its own
  combined CSV/PDF/JSON export and per-row remove buttons.
- **Dark mode** — the site follows `prefers-color-scheme`; toggle your OS/browser theme
  and confirm text stays readable and the table header/badges still contrast properly.

Since the cart is `localStorage`-backed, it persists across page reloads and browser
restarts (same origin). Clear it via the **Clear selection** button on `/cart`, or via
your browser's dev tools (`localStorage.removeItem('ave-cart')`).

### Other useful commands

```sh
npm run build     # build the static site to ./dist
npm run preview   # serve the production build locally, to test the built output
npx astro check   # type-check the whole project (also runs in CI)
```

`npm run preview` is worth running before pushing anything build-sensitive — it serves
the actual `dist/` output rather than the dev server, so it's the closest local
approximation of what GitHub Pages will serve.

## Authoring content

Each product is a single Markdown file in `src/content/items/{slug}.md`:

```yaml
---
vendor: microsoft          # slug of a file in src/content/vendors/
title: Microsoft FSLogix
order: 2                   # optional, controls sort order within the vendor
sources:
  - label: 'Microsoft Learn: FSLogix exclusions'
    url: https://learn.microsoft.com/...
notes:
  - kind: warning           # note | extra | warning
    text: Only apply the VHD/VHDX exclusions when Cloud Cache is enabled.
exclusions:
  - path: '%ProgramFiles%\FSLogix\Apps\frxccd.exe'
    type: Process
    description: ''
    justification: ''
tags: []
---

Free-text intro shown above the table (Markdown, can include HTML).
```

The schema is enforced at build time (`src/lib/contentSchemas.ts`) — `npm run build` or
`npx astro check` will fail with a clear error if a file is missing a required field or
has the wrong type. Vendors follow the same idea in `src/content/vendors/{slug}.md`
(just `title`, `order`, and optional `sources`).

## Deployment

- Pushes to `main` build and deploy automatically to GitHub Pages via
  `.github/workflows/deploy.yml`.
- `dev` and pull requests run a build + `astro check` CI job
  (`.github/workflows/ci.yml`) — no deploy.
- The custom domain is set via `public/CNAME` (`ave.j81.nl`) plus `site` in
  `astro.config.mjs`.
- Both workflows cache npm downloads (`setup-node`'s built-in `cache: npm`) and Astro's
  own build cache (`.astro`, `node_modules/.vite`, via `actions/cache`, restored after
  `npm ci` so it doesn't get wiped) for faster rebuilds. Keyed on `package-lock.json`'s
  hash, so it invalidates automatically when dependencies change.

## Migration note

This site was migrated from a PowerShell + CSV/HTML-fragment build to Astro. The
one-time migration script that converted the old `*.csv` / `*-pre.html` / `*-post.html`
files into the current Markdown content lives in `tools/migrate/` (`npx tsx
tools/migrate/migrate.ts`, not part of the normal build). The legacy files and build
scripts (`ci/`, `.github/workflows/pipeline.yml`, root-level `*.csv`/`*.html`) have been
removed; the pre-migration state is tagged as `legacy-html-final` in git history if
you ever need to reference the original source data.

## Contributing

Two ways to contribute:

- **[Open a submission](https://github.com/j81blog/AntivirusExclusions/issues/new?template=submit-exclusion.yml)** — no git/GitHub
  workflow knowledge needed. Fill in the form (vendor, product, source, exclusion rows)
  and a bot opens a pull request automatically. See below for how this works.
- **Open a PR directly** — edit/add a file under `src/content/items/*.md` yourself. Keep
  the frontmatter valid against the schema in `src/lib/contentSchemas.ts`; `npx astro
  check` will catch mistakes locally before you push.

Either way, nothing goes live until a maintainer reviews and merges the PR.

## Content submission workflow

`.github/ISSUE_TEMPLATE/submit-exclusion.yml` is a GitHub issue form with required
fields for product name, vendor, at least one source URL, and at least one exclusion row
(`path;type;description;justification` per line — `path` and `type` are required per
row).

When someone submits it, `.github/workflows/submission-to-pr.yml` runs
`tools/submission/applySubmission.ts`, which:

1. Parses the issue body and re-validates every required field server-side (the issue
   form's own `required: true` markers are a first line of defense, not the only one).
2. Normalizes exclusion types through `tools/shared/exclusion-type-map.json` and rejects
   anything that isn't a recognized type, with a message listing the valid options.
3. Works out whether this is a **new** product (creates `src/content/items/{slug}.md`,
   and a new vendor file too if one was proposed) or **rows for an existing product**
   (merges in only the genuinely new rows, deduped by path+type, and adds the source if
   it isn't already listed — the submitted intro text is ignored in this case since the
   page already has one).
4. Validates the result against the real `itemSchema`/`vendorSchema`
   (`src/lib/contentSchemas.ts`) before writing anything.

If validation fails at any point, **no files are written** — the workflow comments the
specific problems back on the issue and adds a `needs-info` label. Editing the issue
re-runs the check automatically. If it succeeds, the workflow opens a pull request
(`peter-evans/create-pull-request`) targeting `main` and links it from the issue. You
still review and merge (or close) the PR like any other.

### One-time setup this needs from you

PRs opened with the default `GITHUB_TOKEN` don't trigger other workflows (GitHub's
anti-recursion protection), which means `ci.yml`'s checks wouldn't run on these
auto-opened PRs. To get real CI status before you approve, `submission-to-pr.yml` uses a
personal access token instead:

1. Create a **fine-grained PAT** (GitHub → Settings → Developer settings → Fine-grained
   tokens) scoped to just this repository, with **Contents: Read and write** and **Pull
   requests: Read and write** permissions.
2. Add it as a repository secret named **`SUBMISSION_PR_TOKEN`** (repo → Settings →
   Secrets and variables → Actions).

Without this secret, the workflow will still validate submissions and comment on issues,
but the "open pull request" step will fail.
