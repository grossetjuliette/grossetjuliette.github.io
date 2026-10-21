# Agent guidelines

Personal academic website of Juliette Grosset — Jekyll + the [al-folio](https://github.com/alshedivat/al-folio) theme, deployed to GitHub Pages.

## Build and preview

Docker is the supported path (Docker Desktop must be running):

```bash
docker compose up          # http://localhost:8080, live reload
docker compose up --build  # after changing Dockerfile or Gemfile
docker compose down
```

## Before committing

```bash
npx prettier . --write     # first time: npm install --save-dev prettier @shopify/prettier-plugin-liquid
docker compose up --build  # verify pages, navigation, links and dark mode at http://localhost:8080
```

## Content map

| What                                       | File                                                                             |
| ------------------------------------------ | -------------------------------------------------------------------------------- |
| Homepage bio                               | `_pages/about.md`                                                                |
| Publications (jekyll-scholar)              | `_bibliography/contributions.bib`                                                |
| CV page                                    | `_data/cv.yml` (`cv_skip` in `_pages/cv.md` hides sections shown on other pages) |
| Teaching                                   | `_pages/teaching.md`                                                             |
| Supervision (PhD, engineers, interns)      | `_pages/supervision.md`                                                          |
| Responsibilities, reviewing, juries        | `_pages/responsibilities.md`                                                     |
| Full LaTeX CV PDFs (EN/FR, copied in)      | `assets/pdf/`                                                                    |
| Projects (`layout: paper`, CROSSING-style) | `_projects/`, `_layouts/paper.liquid`                                            |
| Homepage news                              | `_news/`                                                                         |
| Repositories page                          | `_data/repositories.yml`                                                         |
| Co-author links in the bibliography        | `_data/coauthors.yml`                                                            |
| Site metadata, navigation, theme options   | `_config.yml`                                                                    |

## Things to know

- Colours follow the IRL CROSSING palette (`_sass/_themes.scss`); custom components live in `_sass/_academic.scss`.

- `_config.yml` sets `scholar.bibliography: contributions.bib`; that file is the only
  bibliography the site reads. `selected = {true}` promotes an entry to the homepage.
- `_data/cv.yml` follows the schema al-folio's `cv.liquid` renders (`label`, `studyType`,
  `title`/`awarder` awards, `label`/`details` one-line entries). The downloadable CVs are the LaTeX PDFs in
  `assets/pdf/` (copied from the CV_juliette repository), not a rendered version of this file.
- There is no blog: `_posts`, the bookshelf and `jekyll-archives` have been removed. Re-adding
  posts means restoring `_pages/blog.md`, the pagination settings and the archives config.
- Files listed under `exclude:` in `_config.yml` are not published; keep repo documentation there.

Upstream theme documentation: <https://github.com/alshedivat/al-folio>.
