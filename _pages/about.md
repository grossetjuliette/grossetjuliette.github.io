---
layout: about
title: About
title_fr: Accueil
permalink: /
subtitle: Post-Doctoral Researcher · <a href="https://irl-crossing-cnrs.github.io/">IRL CROSSING (CNRS)</a> / Naval Group · Adelaide, Australia
subtitle_fr: Chercheuse post-doctorale · <a href="https://irl-crossing-cnrs.github.io/">IRL CROSSING (CNRS)</a> / Naval Group · Adelaide, Australie

profile:
  align: header # header: small round photo next to the name; left/right: large photo beside the text
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info: # affiliation is in the subtitle and the "at a glance" block

home_toc: # sticky table of contents on the left of the homepage (wide screens)
  - { id: top, label: About, label_fr: À propos }
  - { id: summary, label: Executive summary, label_fr: Synthèse }
  - { id: featured-projects, label: Featured projects, label_fr: Projets phares }
  - { id: news, label: News, label_fr: Actualités }
  - { id: selected-publications, label: Selected publications, label_fr: Publications choisies }
  - { id: contact, label: Contact, label_fr: Contact }

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="lang-en" markdown="1">

Since February 2025, I am a **Post-Doctoral Researcher at Naval Group**, hosted in the **IRL CROSSING, CNRS** laboratory in Adelaide, Australia. My research focuses on **maritime simulation, multi-agent systems and autonomous robotics in multi-domain environments** (aerial, surface and underwater). A central part of my work is [**LOTUSim**](/projects/1_lotusim/), an open-source real-time maritime simulation platform for human-vehicle teaming, and [**LOTUSim-Energy**](/projects/2_lotusim_energy/), its offshore-energy extension developed within the **FACET** project (French-Australian Government funding). I was the leader of the LOTUSim open-source release (November 2025), **Naval Group's first open-source simulator**.

My [**PhD**](/projects/4_aiv_collective_intelligence/), conducted at IMT Atlantique and ECAM Rennes – Louis de Broglie within the EASE team at IRISA, focused on **collective intelligence strategies for efficient autonomous industrial vehicles (AIVs) in Industry 4.0 contexts**: a shared-perception-based obstacle avoidance strategy, the adaptation of V2X communication standards to Industry 4.0, a decentralised dynamic task (re)allocation mechanism, a V2X data generation architecture, and fuzzy-model-based energy management strategies. The thesis was co-funded by Région Bretagne (ARED) and ECAM, and I received the **Best Thesis Award of the SPIN Doctoral School** (2025) for this work. I hold the **CNU 27 qualification** (Computer Science).

I am a member of the **LOTUSim Technical Committee**, co-lead the **Maritime Working Group** at **IRL CROSSING**, served in 2026 as Naval Group representative on its Management Committee, and was elected non-permanent member of its **Laboratory Council** (August 2026).

</div>
<div class="lang-fr" markdown="1">

Je suis **chercheuse post-doctorale chez Naval Group** depuis février 2025, au sein de l'**IRL CROSSING (CNRS)** à Adelaide, en Australie. Mes travaux portent sur la **simulation maritime, les systèmes multi-agents et la robotique autonome en environnement multi-domaine** — aérien, surface et sous-marin. Ils s'articulent autour de [**LOTUSim**](/projects/1_lotusim/), plateforme open source de simulation maritime en temps réel dédiée à la collaboration entre opérateurs humains et véhicules autonomes, et de son extension aux énergies marines, [**LOTUSim-Energy**](/projects/2_lotusim_energy/), développée dans le cadre du projet franco-australien **FACET**. J'ai été leader de la publication open source de LOTUSim (novembre 2025), **1<sup>er</sup> simulateur open source de Naval Group**.

Ma [**thèse**](/projects/4_aiv_collective_intelligence/), préparée à l'IMT Atlantique et à l'ECAM Rennes – Louis de Broglie au sein de l'équipe EASE de l'IRISA, proposait des **stratégies d'intelligence collective pour rendre plus efficaces les flottes de véhicules industriels autonomes dans l'Industrie 4.0**. J'y ai développé une stratégie d'évitement d'obstacles fondée sur la perception partagée, adapté les standards de communication V2X au milieu industriel, conçu un mécanisme décentralisé de (ré)allocation dynamique des tâches, une architecture de génération de données V2X et des stratégies de gestion de l'énergie fondées sur la logique floue. Cette thèse, cofinancée par la Région Bretagne (ARED) et l'ECAM, m'a valu le **Prix de thèse de l'École doctorale SPIN** (2025). Je suis **qualifiée aux fonctions de maître de conférences en section CNU 27** (informatique).

À l'IRL CROSSING, je suis membre élue du **conseil de laboratoire** (août 2026), co-responsable du **groupe de travail Maritime** et j'ai représenté Naval Group au comité de direction en 2026. Je siège également au **comité technique LOTUSim**.

</div>

<div id="summary">{% include executive_summary.liquid %}</div>

<div class="chips lang-en">
  <span>maritime simulation</span><span>multi-agent systems</span><span>robotics</span><span>distributed systems</span><span>artificial intelligence</span><span>cooperative autonomy</span><span>human-in-the-loop</span><span>intelligent transport systems</span>
</div>
<div class="chips lang-fr">
  <span>simulation maritime</span><span>systèmes multi-agents</span><span>robotique</span><span>systèmes distribués</span><span>intelligence artificielle</span><span>autonomie coopérative</span><span>humain dans la boucle</span><span>systèmes de transport intelligents</span>
</div>

## {% include t.liquid en="Featured projects" fr="Projets phares" %} {#featured-projects}

{% assign featured = site.projects | sort: "importance" %}

<div class="project-grid project-grid-home">
  {% for project in featured limit: 3 %}
    {% include project_card.liquid %}
  {% endfor %}
</div>
