# grossetjuliette.github.io

Academic website of **Juliette Grosset** — Post-Doctoral Researcher, IRL CROSSING (CNRS) / Naval Group, Adelaide.

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Run it locally

Requires [Docker](https://www.docker.com/) (Docker Desktop must be running).

```bash
docker compose up          # serves http://localhost:8080 with live reload
docker compose up --build  # after changing the Dockerfile or Gemfile
docker compose down        # stop and free port 8080
```

One-off build without a server:

```bash
docker run --rm -v "$PWD":/srv/jekyll -w /srv/jekyll \
  amirpourmand/al-folio:v0.16.3 bundle exec jekyll build
```

## Where the content lives

| What                                       | File                              |
| ------------------------------------------ | --------------------------------- |
| Homepage bio                               | `_pages/about.md`                 |
| Publications                               | `_bibliography/contributions.bib` |
| CV page (and the auto-generated CV PDF)    | `_data/cv.yml`                    |
| Teaching, supervision, juries              | `_pages/teaching.md`              |
| Projects                                   | `_projects/`                      |
| News shown on the homepage                 | `_news/`                          |
| GitHub repositories page                   | `_data/repositories.yml`          |
| Site title, description, navigation, theme | `_config.yml`                     |

Marking a BibTeX entry with `selected = {true}` puts it in the _selected publications_
list on the homepage.

Pushing a change to `_data/cv.yml` triggers `.github/workflows/render-cv.yml`, which
renders `assets/rendercv/rendercv_output/Juliette_Grosset_CV.pdf` (linked from the CV page).

## Before committing

```bash
npx prettier . --write
```

Upstream theme documentation: <https://github.com/alshedivat/al-folio>.
