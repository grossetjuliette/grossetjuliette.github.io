---
layout: page
title: Projects
title_fr: Projets
permalink: /projects/
description: Simulation platforms and research projects I develop or contribute to — each with its papers, videos and code.
description_fr: Plateformes de simulation et projets de recherche que je développe ou auxquels je contribue, avec leurs articles, vidéos et codes.
nav: true
nav_order: 2
---

{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="project-grid">
  {% for project in sorted_projects %}
    {% include project_card.liquid %}
  {% endfor %}
</div>
