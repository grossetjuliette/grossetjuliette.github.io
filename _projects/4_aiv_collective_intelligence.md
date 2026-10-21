---
layout: paper
title: Collective intelligence for autonomous industrial vehicles
title_fr: Intelligence collective pour des véhicules industriels autonomes
img: assets/img/projects/aiv-v2x-road-scene.jpg
description: PhD research on cooperative AIV fleets in Industry 4.0 — perception, V2X, task allocation and energy
description_fr: Travaux de thèse sur les flottes coopératives de véhicules industriels autonomes dans l'Industrie 4.0 — perception, V2X, allocation de tâches et énergie
importance: 3
category: research

venue: PhD thesis, IMT Atlantique & ECAM Rennes (2021–2024) — Best Thesis, SPIN Doctoral School
venue_fr: Thèse, IMT Atlantique et ECAM Rennes (2021–2024) — Prix de thèse, École doctorale SPIN
authors:
  - name: Juliette Grosset
    url: https://scholar.google.com/citations?user=sf6Hqf0AAAAJ&hl=en
    me: true
  - name: Alain-Jérôme Fougères
  - name: Moïse Djoko-Kouam
  - name: Jean-Marie Bonnin
    url: https://www.imt-atlantique.fr/en/person/jean-marie-bonnin
affiliations:
  - IMT Atlantique
  - ECAM Rennes – Louis de Broglie
  - IRISA (EASE team)
links:
  - label: Thesis (HAL)
    label_fr: Thèse (HAL)
    url: https://theses.hal.science/tel-04921399
    icon: fa-solid fa-file-lines
  - label: Defence video
    label_fr: Vidéo de soutenance
    url: https://www.youtube.com/watch?v=MysGH68KfAY
    icon: fa-brands fa-youtube
  - label: Thesis prize
    label_fr: Prix de thèse
    url: https://ed-spin.doctorat-bretagne.fr/fr/actualites/prix-de-these-2025-decerne-juliette-grosset
    icon: fa-solid fa-award
  - label: AIV Simulator
    url: https://gitlab.inria.fr/jgrosset/AIV_Simulator
    icon: fa-brands fa-gitlab
  - label: CARLA–V2X architecture
    label_fr: Architecture CARLA–V2X
    url: https://gitlab.inria.fr/jgrosset/carla-v2x-release
    icon: fa-brands fa-gitlab
tags:
  - multi-agent systems
  - V2X cooperation
  - fuzzy agents
  - Industry 4.0
tags_fr:
  - "systèmes multi-agents"
  - "coopération V2X"
  - "agents flous"
  - "Industrie 4.0"
---

<div class="lang-en" markdown="1">

## Overview

My PhD, conducted at **IMT Atlantique** and **ECAM Rennes – Louis de Broglie** within the EASE team at IRISA, focused on **collective intelligence strategies for efficient autonomous industrial vehicles (AIVs) in Industry 4.0 contexts**. The thesis was co-funded by Région Bretagne (ARED) and ECAM, and I received the **Best Thesis Award of the SPIN Doctoral School** (2025) for this work.

<p class="pub-links"><a class="pub-link" href="https://theses.hal.science/tel-04921399"><i class="fa-solid fa-file-lines"></i> Manuscript — HAL tel-04921399</a></p>

## Contributions

The manuscript is organised in five chapters. Each contribution chapter is linked below to the publications it cites as its basis.

<div class="chapter-list">

<div class="chapter-card">
  <span class="chapter-num">1</span>
  <div>
    <h3>State of the art</h3>
    <p>Autonomous industrial vehicles in Industry 4.0, cooperative ITS and V2X communication, agent-based simulation, obstacle avoidance, task allocation and energy management.</p>
  </div>
</div>

<div class="chapter-card">
  <span class="chapter-num">2</span>
  <div>
    <h3>Collective Obstacle Avoidance Strategies</h3>
    <p>A collective strategy added to an intersection collision-avoidance algorithm, a global obstacle-avoidance strategy based on shared perception, the adaptation of standardised V2X messages (CAM, DENM, CPM, MCM) to Industry 4.0, and the preparation of real experiments with ROS 2 robots.</p>
    <p class="pub-links"><a class="pub-link" href="https://hal.science/hal-03958464"><i class="fa-solid fa-file-lines"></i> ARCI 2022</a><a class="pub-link" href="https://hal.science/hal-03958445"><i class="fa-solid fa-file-lines"></i> ASPAI 2022</a><a class="pub-link" href="https://doi.org/10.3233/ICA-220694"><i class="fa-solid fa-file-lines"></i> Integrated Computer-Aided Engineering 2023 (Q1)</a><a class="pub-link" href="https://hal.science/hal-04638317"><i class="fa-solid fa-file-lines"></i> Book chapter 2024</a></p>
  </div>
</div>

<div class="chapter-card">
  <span class="chapter-num">3</span>
  <div>
    <h3>Collective Task Allocation Strategies</h3>
    <p>A dynamic task (re)allocation strategy in V2X cooperation mode with the infrastructure, evaluated in multi-agent simulation, and the impact of trust in exchanged messages on allocation.</p>
    <p class="pub-links"><a class="pub-link" href="https://hal.science/hal-04527026"><i class="fa-solid fa-file-lines"></i> Integrated Computer-Aided Engineering 2024 (Q1)</a></p>
  </div>
</div>

<div class="chapter-card">
  <span class="chapter-num">4</span>
  <div>
    <h3>Cooperative Perception Strategies</h3>
    <p>An architecture coupling the CARLA simulator, ROS 2 and OpenCDA to generate standardised V2X messages for cooperative perception, applied to pedestrian safety — developed during the research visit at the University of Tokyo.</p>
    <p class="pub-links"><a class="pub-link" href="https://hal.science/hal-04922729"><i class="fa-solid fa-file-lines"></i> VTC2024-Fall</a></p>
  </div>
</div>

<div class="chapter-card">
  <span class="chapter-num">5</span>
  <div>
    <h3>Collective Energy Management Strategies</h3>
    <p>A fuzzy decision model for battery recharging, fuzzy agent-based simulation of fleet recharging in an airport baggage-handling scenario, and the joint problem of recharging and task allocation.</p>
    <p class="pub-links"><a class="pub-link" href="https://hal.science/hal-04571994"><i class="fa-solid fa-file-lines"></i> ASPAI 2024 — Best Paper</a><a class="pub-link" href="https://hal.science/hal-04717411"><i class="fa-solid fa-file-lines"></i> AISyS 2024</a><a class="pub-link" href="https://hal.science/hal-04767307"><i class="fa-solid fa-file-lines"></i> Algorithms 2024 (Q2)</a></p>
  </div>
</div>

</div>

## Simulation platforms

<div class="platform-list">
  <a class="platform" href="https://gitlab.inria.fr/jgrosset/AIV_Simulator">
    <i class="fa-brands fa-gitlab"></i>
    <span><strong>AIV Simulator</strong><br>Multi-agent simulator of autonomous industrial vehicle fleets used throughout the thesis (chapters 2, 3 and 5).</span>
  </a>
  <a class="platform" href="https://gitlab.inria.fr/jgrosset/carla-v2x-release">
    <i class="fa-brands fa-gitlab"></i>
    <span><strong>CARLA–ROS 2–OpenCDA architecture</strong><br>Generation of standardised V2X messages from a CARLA scene for cooperative perception (chapter 4).</span>
  </a>
</div>

## Recognition

- **Best Thesis of the SPIN Doctoral School**, 2025 — selected among ~160 theses defended over 2024–2025, by a jury of 13 members.
- **Best Paper Award**, ASPAI 2024.
- **Best Presentation Award** (ex aequo), Colloque IMT 2024.
- **Best Poster Award** (ex aequo), Colloque IMT 2022.

## Thesis defence

The public defence (IMT Atlantique, 2024), recorded live.

<a class="video-thumb" href="https://www.youtube.com/watch?v=MysGH68KfAY" target="_blank" rel="noopener noreferrer">
  <img src="https://img.youtube.com/vi/MysGH68KfAY/hqdefault.jpg" alt="PhD defence of Juliette Grosset on YouTube" loading="lazy">
  <span class="video-thumb-play"><i class="fa-brands fa-youtube"></i> Watch the defence on YouTube</span>
</a>

## Cooperative perception demonstrations

Generation of V2X messages from the CARLA simulator for cooperative perception, applied to pedestrian safety (chapter 4, [VTC2024-Fall](https://hal.science/hal-04922729)).

<div class="figure-pair">
<a class="video-thumb" href="https://www.youtube.com/watch?v=o08lbVM9pB8" target="_blank" rel="noopener noreferrer">
  <img src="https://img.youtube.com/vi/o08lbVM9pB8/hqdefault.jpg" alt="Scenario 1" loading="lazy">
  <span class="video-thumb-play"><i class="fa-brands fa-youtube"></i> Scenario 1</span>
</a>
<a class="video-thumb" href="https://www.youtube.com/watch?v=nELogKdhYWc" target="_blank" rel="noopener noreferrer">
  <img src="https://img.youtube.com/vi/nELogKdhYWc/hqdefault.jpg" alt="Occluded-view scenario" loading="lazy">
  <span class="video-thumb-play"><i class="fa-brands fa-youtube"></i> Occluded-view scenario</span>
</a>
</div>

</div>
<div class="lang-fr" markdown="1">

## Présentation

Ma thèse, réalisée à l'**IMT Atlantique** et à l'**ECAM Rennes – Louis de Broglie** au sein de l'équipe EASE de l'IRISA, portait sur les **stratégies d'intelligence collective pour des véhicules industriels autonomes (VIA) efficaces dans le contexte de l'Industrie 4.0**. La thèse a été cofinancée par la Région Bretagne (ARED) et l'ECAM, et j'ai reçu pour ces travaux le **Prix de thèse de l'École doctorale SPIN** (2025).

<p class="pub-links"><a class="pub-link" href="https://theses.hal.science/tel-04921399"><i class="fa-solid fa-file-lines"></i> Manuscrit — HAL tel-04921399</a></p>

## Contributions

Le manuscrit est organisé en cinq chapitres. Chaque chapitre de contribution est relié ci-dessous aux publications sur lesquelles il s'appuie.

<div class="chapter-list">

<div class="chapter-card">
  <span class="chapter-num">1</span>
  <div>
    <h3>État de l'art</h3>
    <p>Véhicules industriels autonomes dans l'Industrie 4.0, systèmes de transport intelligents coopératifs et communication V2X, simulation à base d'agents, évitement d'obstacles, allocation de tâches et gestion de l'énergie.</p>
  </div>
</div>

<div class="chapter-card">
  <span class="chapter-num">2</span>
  <div>
    <h3>Stratégies collectives d'évitement d'obstacles</h3>
    <p>Une stratégie collective ajoutée à un algorithme d'évitement de collisions aux intersections, une stratégie globale d'évitement d'obstacles fondée sur la perception partagée, l'adaptation des messages V2X standardisés (CAM, DENM, CPM, MCM) à l'Industrie 4.0, et la préparation d'expérimentations réelles avec des robots ROS 2.</p>
    <p class="pub-links"><a class="pub-link" href="https://hal.science/hal-03958464"><i class="fa-solid fa-file-lines"></i> ARCI 2022</a><a class="pub-link" href="https://hal.science/hal-03958445"><i class="fa-solid fa-file-lines"></i> ASPAI 2022</a><a class="pub-link" href="https://doi.org/10.3233/ICA-220694"><i class="fa-solid fa-file-lines"></i> Integrated Computer-Aided Engineering 2023 (Q1)</a><a class="pub-link" href="https://hal.science/hal-04638317"><i class="fa-solid fa-file-lines"></i> Chapitre d'ouvrage 2024</a></p>
  </div>
</div>

<div class="chapter-card">
  <span class="chapter-num">3</span>
  <div>
    <h3>Stratégies collectives d'allocation de tâches</h3>
    <p>Une stratégie de (ré)allocation dynamique des tâches en mode de coopération V2X avec l'infrastructure, évaluée en simulation multi-agent, et l'impact de la confiance dans les messages échangés sur l'allocation.</p>
    <p class="pub-links"><a class="pub-link" href="https://hal.science/hal-04527026"><i class="fa-solid fa-file-lines"></i> Integrated Computer-Aided Engineering 2024 (Q1)</a></p>
  </div>
</div>

<div class="chapter-card">
  <span class="chapter-num">4</span>
  <div>
    <h3>Stratégies de perception coopérative</h3>
    <p>Une architecture couplant le simulateur CARLA, ROS 2 et OpenCDA pour générer des messages V2X standardisés de perception coopérative, appliquée à la sécurité des piétons — développée pendant le séjour de recherche à l'Université de Tokyo.</p>
    <p class="pub-links"><a class="pub-link" href="https://hal.science/hal-04922729"><i class="fa-solid fa-file-lines"></i> VTC2024-Fall</a></p>
  </div>
</div>

<div class="chapter-card">
  <span class="chapter-num">5</span>
  <div>
    <h3>Stratégies collectives de gestion de l'énergie</h3>
    <p>Un modèle de décision flou pour la recharge des batteries, une simulation à base d'agents flous de la recharge d'une flotte dans un scénario de traitement des bagages en aéroport, et le problème conjoint de la recharge et de l'allocation des tâches.</p>
    <p class="pub-links"><a class="pub-link" href="https://hal.science/hal-04571994"><i class="fa-solid fa-file-lines"></i> ASPAI 2024 — Prix du meilleur article</a><a class="pub-link" href="https://hal.science/hal-04717411"><i class="fa-solid fa-file-lines"></i> AISyS 2024</a><a class="pub-link" href="https://hal.science/hal-04767307"><i class="fa-solid fa-file-lines"></i> Algorithms 2024 (Q2)</a></p>
  </div>
</div>

</div>

## Plateformes de simulation

<div class="platform-list">
  <a class="platform" href="https://gitlab.inria.fr/jgrosset/AIV_Simulator">
    <i class="fa-brands fa-gitlab"></i>
    <span><strong>AIV Simulator</strong><br>Simulateur multi-agent de flottes de véhicules industriels autonomes utilisé tout au long de la thèse (chapitres 2, 3 et 5).</span>
  </a>
  <a class="platform" href="https://gitlab.inria.fr/jgrosset/carla-v2x-release">
    <i class="fa-brands fa-gitlab"></i>
    <span><strong>Architecture CARLA–ROS 2–OpenCDA</strong><br>Génération de messages V2X standardisés à partir d'une scène CARLA pour la perception coopérative (chapitre 4).</span>
  </a>
</div>

## Distinctions

- **Prix de thèse de l'École doctorale SPIN**, 2025 — parmi environ 160 thèses soutenues en 2024–2025, par un jury de 13 membres.
- **Prix du meilleur article**, ASPAI 2024.
- **Prix de la meilleure présentation** (ex aequo), Colloque IMT 2024.
- **Prix du meilleur poster** (ex aequo), Colloque IMT 2022.

## Soutenance de thèse

La soutenance publique (IMT Atlantique, 2024), enregistrée en direct.

<a class="video-thumb" href="https://www.youtube.com/watch?v=MysGH68KfAY" target="_blank" rel="noopener noreferrer">
  <img src="https://img.youtube.com/vi/MysGH68KfAY/hqdefault.jpg" alt="Soutenance de thèse de Juliette Grosset sur YouTube" loading="lazy">
  <span class="video-thumb-play"><i class="fa-brands fa-youtube"></i> Voir la soutenance sur YouTube</span>
</a>

## Démonstrations de perception coopérative

Génération de messages V2X à partir du simulateur CARLA pour la perception coopérative, appliquée à la sécurité des piétons (chapitre 4, [VTC2024-Fall](https://hal.science/hal-04922729)).

<div class="figure-pair">
<a class="video-thumb" href="https://www.youtube.com/watch?v=o08lbVM9pB8" target="_blank" rel="noopener noreferrer">
  <img src="https://img.youtube.com/vi/o08lbVM9pB8/hqdefault.jpg" alt="Scénario 1" loading="lazy">
  <span class="video-thumb-play"><i class="fa-brands fa-youtube"></i> Scénario 1</span>
</a>
<a class="video-thumb" href="https://www.youtube.com/watch?v=nELogKdhYWc" target="_blank" rel="noopener noreferrer">
  <img src="https://img.youtube.com/vi/nELogKdhYWc/hqdefault.jpg" alt="Scénario à vue occultée" loading="lazy">
  <span class="video-thumb-play"><i class="fa-brands fa-youtube"></i> Scénario à vue occultée</span>
</a>
</div>

</div>
