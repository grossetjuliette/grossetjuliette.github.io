---
layout: paper
title: LOTUSim
paper_title: "LOTUSim: Multi-Domain Simulator for Marine Robotics"
description: Open-source real-time multi-domain simulator for marine robotics, with multi-user human-in-the-loop interaction.
description_fr: Simulateur multi-domaine open source et temps réel pour la robotique marine, avec interaction multi-utilisateur et humain dans la boucle.
img: assets/img/projects/lotusim-overview.jpg
importance: 1
category: research

venue: IEEE/RSJ IROS 2026
authors:
  - name: Cédric Buche
    url: https://cedricbuche.github.io/
    aff: [1, 3]
  - name: Juliette Grosset
    me: true
    aff: [1, 2]
  - name: Hélène Lechêne
    url: https://scholar.google.com/citations?user=B21SMLgAAAAJ&hl=en
    aff: [2]
  - name: Marie Dubromel
    url: https://www.linkedin.com/in/marie-dubromel-922150221/
    aff: [1, 2]
  - name: Pierig Havez-Bodivit
    url: https://www.linkedin.com/in/pierighavez-bodivit/
    aff: [2]
  - name: Malcom Neo
    url: https://www.linkedin.com/in/malcolmneo/
    aff: [2]
  - name: Julien Prodhon
    url: https://github.com/julienprodhon
    aff: [2]
affiliations:
  - CROSSING IRL 2010, CNRS
  - Naval Group, France
  - IMT Atlantique
links:
  - label: Paper (PDF)
    url: https://irl-crossing-cnrs.github.io/resources/lotusim-iros2026.pdf
    icon: fa-solid fa-file-lines
  - label: HAL
    url: https://hal.science/hal-05677110
    icon: fa-solid fa-box-archive
  - label: arXiv
    url: https://arxiv.org/abs/2607.03072
    icon: ai ai-arxiv
  - label: Video
    label_fr: Vidéo
    url: https://www.youtube.com/watch?v=iXDz8ZqSpq4
    icon: fa-brands fa-youtube
  - label: Code
    label_fr: Code
    url: https://github.com/IRL-Crossing-CNRS/LOTUSim
    icon: fa-brands fa-github
  - label: Documentation
    url: https://irl-crossing-cnrs.github.io/LOTUSim/
    icon: fa-solid fa-book-open
tags:
  - maritime robotics
  - multi-agent simulation
  - human-in-the-loop
  - underwater currents
tags_fr:
  - "robotique maritime"
  - "simulation multi-agent"
  - "humain dans la boucle"
  - "courants sous-marins"
---

<div class="lang-en" markdown="1">

## Abstract

Simulation is **essential** for maritime robotics, supporting operator training, mission rehearsal, and human–vehicle interaction in environments where real-world testing is **costly or hazardous**. Existing simulators focus primarily on autonomy systems and often lack human-in-the-loop interaction and realistic environmental physics. This paper introduces LOTUSim, an **open-source, real-time maritime simulator** supporting multi-user interaction across aerial, surface, and underwater robotic systems for coordinated naval-style operations.

The first contribution of this work is **enabling real-time interactive performance** for users while ensuring scalability to large fleets operating within a shared interactive simulation environment. Validation demonstrates robust human-in-the-loop performance, maintaining strict real-time execution and high visual fidelity while scaling to large heterogeneous maritime drone swarms. The second contribution is a **computationally efficient, Ekman-inspired layered underwater current model** that captures wind-driven, depth-dependent flow dynamics with sufficient physical fidelity for large-scale simulations. Validation against ocean reanalysis data demonstrates substantially improved accuracy compared to commonly used stochastic Gauss–Markov current models.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-overview.jpg" class="img-fluid rounded z-depth-1" alt="LOTUSim rendering a heterogeneous fleet of aerial drones, a surface vessel and underwater vehicles in a shared naval-style scenario" %}
<div class="caption">Fig. 1 – LOTUSim, an open multi-domain simulator: aerial, surface and underwater assets sharing a single simulation environment.</div>
</div>

## System Architecture

LOTUSim leverages **ROS2, Gazebo and Unity** as a distributed, server-client simulation framework. Gazebo orchestrates assets and physics, ROS2 handles multi-agent communication and integration with real drones, and Unity serves as the primary visualisation and interaction engine — chosen for its **extensibility and native support for immersive interfaces** such as VR and Leap Motion.

The core module interfaces with three client types — physics computation, rendering and agent interaction — each supporting different communication protocols, including ROS2, WebSocket and TCP/IP. For surface ships and underwater drones, LOTUSim connects to [Xdyn](https://gitlab.com/sirehna_naval_group/sirehna/xdyn), a lightweight ship-dynamics engine, via a dedicated extension, [LOTUSim-Xdyn](https://github.com/naval-group/LOTUSim-Xdyn). Shared missions are **synchronised across operators in real time** through Photon Unity Networking (PUN2) over a cloud-relay architecture.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-architecture.png" class="img-fluid rounded z-depth-1" alt="LOTUSim system architecture: rendering, physics server, core, multi-user support and external entities connected via ROS2 and WebSocket" %}
<div class="caption">Fig. 2 – LOTUSim's core orchestrates physics, rendering and sensing through Gazebo, while Unity handles visualisation and PUN2 synchronises world state across concurrent operators.</div>
</div>

## Underwater Current Model

Most maritime simulators represent ocean currents with a constant unidirectional force or a stochastic Gauss–Markov process — efficient, but **insufficient for naval operations** where depth-dependent, wind-driven currents strongly affect vehicle behaviour and sensor performance. LOTUSim instead divides the water column into **three vertical zones** inspired by classical Ekman theory: a wind-driven spiral at the surface, a geostrophic interior largely unaffected by surface or bottom friction, and a bottom Ekman spiral shaped by the seabed.

The model was **validated against Copernicus in-situ ocean reanalysis data** off the coast of Brest, France, across five days, four daily time samples and depths from 0.5 m to 1,000 m, then compared to the Gauss–Markov baseline used in simulators such as UUVSim and DAVE.

<div class="stat-grid">
  <div class="stat"><span class="stat-value">40–85%</span><span class="stat-label">Lower current-prediction error (MAE/RMSE) than Gauss–Markov, depending on depth</span></div>
  <div class="stat"><span class="stat-value">3 layers</span><span class="stat-label">Surface, geostrophic and bottom Ekman zones</span></div>
  <div class="stat"><span class="stat-value">2,800 pts</span><span class="stat-label">Copernicus measurement points used for validation</span></div>
</div>

## Real-Time Performance

LOTUSim's interactivity is evaluated on four metrics that directly impact human perception and control precision: visual frame rate, physics update rate, **real-time factor (RTF)**, and behaviour under large-scale heterogeneous scenarios. On a single high-end workstation (RTX 4090 Laptop, ROS2 Humble), LOTUSim keeps the physics update rate within the 200 ms perceptual-responsiveness threshold while **scaling up to 750 Long-Range AUVs or 450 BlueROVs**.

<div class="project-figure project-figure-medium">
{% include figure.liquid path="assets/img/projects/lotusim-rtf.png" class="img-fluid rounded z-depth-1" alt="Real-time factor versus number of agents at a 30 ms control loop, for BlueROV and LRAUV, both staying above real time" %}
<div class="caption">Fig. 5 – Real-time factor (RTF) as a function of fleet size at a 30 ms control loop. A single agent exceeds RTF 20 — headroom that can be traded for faster-than-real-time AI training — while RTF stays above 1 as the swarm grows.</div>
</div>

<div class="stat-grid">
  <div class="stat"><span class="stat-value">750 / 450</span><span class="stat-label">Max LRAUVs / BlueROVs at responsive human-in-the-loop update rate</span></div>
  <div class="stat"><span class="stat-value">FPS > 140</span><span class="stat-label">Sustained visual rendering rate across configurations</span></div>
  <div class="stat"><span class="stat-value">RTF ≥ 1</span><span class="stat-label">Maintained under a mixed 90-drone, 45-LRAUV, 45-BlueROV scenario</span></div>
</div>

## Immersive Interaction

Beyond keyboard and screen control, LOTUSim integrates sensors that capture **human intent, motion and cognitive state**: a 6-DOF virtual-reality headset for immersive first-person operation, Leap Motion for gesture-based hand and finger tracking, and a non-immersive eye tracker for attention and fatigue monitoring. Onboard, a comparable sensor suite — LiDAR, radar, IMU, magnetometer, depth sensor and RGB camera — publishes to standard ROS2 topics for autonomous perception.

<div class="figure-pair">
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-vr-interaction.jpg" class="img-fluid rounded z-depth-1" alt="An operator wearing a VR headset while monitoring aerial and underwater assets on two large screens" %}
<div class="caption">Fig. 3a – An operator monitoring aerial and underwater assets through LOTUSim's VR interface.</div>
</div>
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-natural-interface.jpg" class="img-fluid rounded z-depth-1" alt="An operator using hand gestures to control a surface vessel shown on screen" %}
<div class="caption">Fig. 3b – Gesture-based vessel control via Leap Motion hand tracking.</div>
</div>
</div>

## Sim-to-Real Validation

Prior work transferred a **fault-tolerant control strategy** for the BlueROV2 Heavy from LOTUSim to a physical platform: the controller was first designed and evaluated in simulation, then validated in real-world pool trials, where it dynamically adapted motor commands in response to faults without explicit fault diagnosis — confirming that **behaviour learned in LOTUSim transfers to the real vehicle**.

<div class="project-figure project-figure-medium">
{% include figure.liquid path="assets/img/projects/lotusim-sim-to-real.png" class="img-fluid rounded z-depth-1" alt="A BlueROV2 underwater vehicle in a test pool, held by a mounting arm" %}
<div class="caption">Fig. 4 – Sim-to-real transfer for the BlueROV2 Heavy: the fault-tolerant controller validated in LOTUSim, tested here in the pool.</div>
</div>

## Video

A recorded demonstration of LOTUSim's human-in-the-loop sensing and multi-domain simulation, referenced in the paper.

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/iXDz8ZqSpq4" title="LOTUSim demonstration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

## Code

- [IRL-Crossing-CNRS/LOTUSim](https://github.com/IRL-Crossing-CNRS/LOTUSim) — the simulator core ([upstream at Naval Group](https://github.com/naval-group/LOTUSim))
- [IRL-Crossing-CNRS/LOTUSim-generic-scenario](https://github.com/IRL-Crossing-CNRS/LOTUSim-generic-scenario) — scenario workspace
- [IRL-Crossing-CNRS/How_To_Install_LOTUSim](https://github.com/IRL-Crossing-CNRS/How_To_Install_LOTUSim) — installer
- [Documentation](https://irl-crossing-cnrs.github.io/LOTUSim/)

</div>
<div class="lang-fr" markdown="1">

## Résumé

En robotique maritime, la simulation est **indispensable** : formation des opérateurs, préparation des missions, étude de l'interaction humain–véhicule, dans des milieux où les essais réels sont **coûteux ou dangereux**. Les simulateurs existants se concentrent surtout sur l'autonomie et manquent souvent d'interaction avec l'humain dans la boucle et d'une physique environnementale réaliste. Cet article présente LOTUSim, un **simulateur maritime open source et temps réel** permettant une interaction multi-utilisateur avec des systèmes robotiques aériens, de surface et sous-marins pour des opérations navales coordonnées.

La première contribution consiste à **garantir l'interactivité en temps réel** pour les utilisateurs tout en passant à l'échelle de grandes flottes partageant un même environnement de simulation. La validation montre une interaction robuste avec l'humain dans la boucle, en maintenant une exécution strictement temps réel et une haute fidélité visuelle avec de grands essaims hétérogènes de drones maritimes. La seconde contribution est un **modèle de courants sous-marins multicouches inspiré d'Ekman et peu coûteux en calcul**, qui capture la dynamique des courants dus au vent et dépendant de la profondeur avec une fidélité physique suffisante pour des simulations à grande échelle. La validation sur des données de réanalyse océanique montre une précision nettement supérieure aux modèles stochastiques de Gauss–Markov couramment utilisés.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-overview.jpg" class="img-fluid rounded z-depth-1" alt="LOTUSim rendering a heterogeneous fleet of aerial drones, a surface vessel and underwater vehicles in a shared naval-style scenario" %}
<div class="caption">Fig. 1 – LOTUSim, un simulateur multi-domaine ouvert : moyens aériens, de surface et sous-marins dans un même environnement de simulation.</div>
</div>

## Architecture du système

LOTUSim s'appuie sur **ROS2, Gazebo et Unity** dans une architecture distribuée client-serveur. Gazebo orchestre les entités et la physique, ROS2 gère la communication multi-agent et l'intégration avec de vrais drones, et Unity sert de moteur principal de visualisation et d'interaction — choisi pour son **extensibilité et sa prise en charge native des interfaces immersives** comme la réalité virtuelle et le Leap Motion.

Le module central dialogue avec trois types de clients — calcul physique, rendu et interaction avec les agents — chacun avec ses protocoles (ROS2, WebSocket, TCP/IP). Pour les navires de surface et les drones sous-marins, LOTUSim se connecte à [Xdyn](https://gitlab.com/sirehna_naval_group/sirehna/xdyn), un moteur léger de dynamique navale, via une extension dédiée, [LOTUSim-Xdyn](https://github.com/naval-group/LOTUSim-Xdyn). Les missions partagées sont **synchronisées en temps réel entre opérateurs** grâce à Photon Unity Networking (PUN2) via un relais cloud.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-architecture.png" class="img-fluid rounded z-depth-1" alt="LOTUSim system architecture: rendering, physics server, core, multi-user support and external entities connected via ROS2 and WebSocket" %}
<div class="caption">Fig. 2 – Le cœur de LOTUSim orchestre physique, rendu et capteurs via Gazebo ; Unity assure la visualisation et PUN2 synchronise l'état du monde entre opérateurs simultanés.</div>
</div>

## Modèle de courants sous-marins

La plupart des simulateurs maritimes représentent les courants par une force constante et unidirectionnelle ou par un processus stochastique de Gauss–Markov — efficace, mais **insuffisant pour les opérations navales**, où les courants dus au vent et dépendant de la profondeur influencent fortement le comportement des véhicules et la performance des capteurs. LOTUSim divise au contraire la colonne d'eau en **trois zones verticales** inspirées de la théorie d'Ekman : une spirale de surface due au vent, un intérieur géostrophique peu affecté par les frottements, et une spirale d'Ekman de fond façonnée par le fond marin.

Le modèle a été **validé sur des données de réanalyse océanique in situ Copernicus** au large de Brest, sur cinq jours, quatre instants par jour et des profondeurs de 0,5 m à 1 000 m, puis comparé à la référence Gauss–Markov utilisée par des simulateurs comme UUVSim et DAVE.

<div class="stat-grid">
  <div class="stat"><span class="stat-value">40–85%</span><span class="stat-label">d'erreur de prédiction des courants (MAE/RMSE) en moins que Gauss–Markov, selon la profondeur</span></div>
  <div class="stat"><span class="stat-value">3 couches</span><span class="stat-label">Zones de surface, géostrophique et d'Ekman de fond</span></div>
  <div class="stat"><span class="stat-value">2 800 pts</span><span class="stat-label">Points de mesure Copernicus utilisés pour la validation</span></div>
</div>

## Performances temps réel

L'interactivité de LOTUSim est évaluée sur quatre métriques qui influencent directement la perception humaine et la précision du contrôle : fréquence d'affichage, fréquence de mise à jour physique, **facteur temps réel (RTF)** et comportement dans des scénarios hétérogènes à grande échelle. Sur une seule station de travail haut de gamme (RTX 4090 Laptop, ROS2 Humble), LOTUSim maintient la mise à jour physique sous le seuil de réactivité perceptive de 200 ms tout en **passant à 750 AUV longue portée ou 450 BlueROV**.

<div class="project-figure project-figure-medium">
{% include figure.liquid path="assets/img/projects/lotusim-rtf.png" class="img-fluid rounded z-depth-1" alt="Real-time factor versus number of agents at a 30 ms control loop, for BlueROV and LRAUV, both staying above real time" %}
<div class="caption">Fig. 5 – Facteur temps réel (RTF) en fonction de la taille de la flotte, avec une boucle de contrôle de 30 ms. Un agent seul dépasse un RTF de 20 — une marge qui permet d'entraîner des IA plus vite que le temps réel — et le RTF reste supérieur à 1 quand l'essaim grandit.</div>
</div>

<div class="stat-grid">
  <div class="stat"><span class="stat-value">750 / 450</span><span class="stat-label">LRAUV / BlueROV au maximum avec une mise à jour réactive pour l'humain dans la boucle</span></div>
  <div class="stat"><span class="stat-value">FPS > 140</span><span class="stat-label">Fréquence de rendu visuel maintenue dans toutes les configurations</span></div>
  <div class="stat"><span class="stat-value">RTF ≥ 1</span><span class="stat-label">Maintenu dans un scénario mixte de 90 drones, 45 LRAUV et 45 BlueROV</span></div>
</div>

## Interaction immersive

Au-delà du clavier et de l'écran, LOTUSim intègre des capteurs qui captent **l'intention, les mouvements et l'état cognitif de l'humain** : un casque de réalité virtuelle 6-DOF pour un pilotage immersif à la première personne, le Leap Motion pour le suivi des mains et des doigts, et un oculomètre non immersif pour suivre l'attention et la fatigue. À bord, une suite de capteurs comparable — LiDAR, radar, centrale inertielle, magnétomètre, capteur de profondeur et caméra RGB — publie sur des topics ROS2 standards pour la perception autonome.

<div class="figure-pair">
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-vr-interaction.jpg" class="img-fluid rounded z-depth-1" alt="An operator wearing a VR headset while monitoring aerial and underwater assets on two large screens" %}
<div class="caption">Fig. 3a – Un opérateur supervise des moyens aériens et sous-marins depuis l'interface de réalité virtuelle de LOTUSim.</div>
</div>
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-natural-interface.jpg" class="img-fluid rounded z-depth-1" alt="An operator using hand gestures to control a surface vessel shown on screen" %}
<div class="caption">Fig. 3b – Pilotage d'un navire par gestes grâce au suivi des mains Leap Motion.</div>
</div>
</div>

## Validation de la simulation au réel

Des travaux antérieurs ont transféré une **stratégie de commande tolérante aux pannes** du BlueROV2 Heavy de LOTUSim vers la plateforme physique : le contrôleur a d'abord été conçu et évalué en simulation, puis validé lors d'essais en bassin, où il a adapté dynamiquement les commandes moteur face aux pannes sans diagnostic explicite — confirmant que **le comportement appris dans LOTUSim se transfère au véhicule réel**.

<div class="project-figure project-figure-medium">
{% include figure.liquid path="assets/img/projects/lotusim-sim-to-real.png" class="img-fluid rounded z-depth-1" alt="A BlueROV2 underwater vehicle in a test pool, held by a mounting arm" %}
<div class="caption">Fig. 4 – Transfert de la simulation au réel pour le BlueROV2 Heavy : le contrôleur tolérant aux pannes validé dans LOTUSim, testé ici en bassin.</div>
</div>

## Vidéo

Une démonstration enregistrée de la captation de l'humain dans la boucle et de la simulation multi-domaine de LOTUSim, citée dans l'article.

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/iXDz8ZqSpq4" title="LOTUSim demonstration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

## Code

- [IRL-Crossing-CNRS/LOTUSim](https://github.com/IRL-Crossing-CNRS/LOTUSim) — le cœur du simulateur ([dépôt d'origine chez Naval Group](https://github.com/naval-group/LOTUSim))
- [IRL-Crossing-CNRS/LOTUSim-generic-scenario](https://github.com/IRL-Crossing-CNRS/LOTUSim-generic-scenario) — espace de travail des scénarios
- [IRL-Crossing-CNRS/How_To_Install_LOTUSim](https://github.com/IRL-Crossing-CNRS/How_To_Install_LOTUSim) — installateur
- [Documentation](https://irl-crossing-cnrs.github.io/LOTUSim/)

</div>

## Citation

<p class="citation-plain">C. Buche, J. Grosset, H. Lechêne, M. Dubromel, P. Havez-Bodivit, M. Neo, and J. Prodhon, “LOTUSim: Multi-Domain Simulator for Marine Robotics,” in <em>Proc. IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</em>, Pittsburgh, USA, 2026.</p>

<div class="project-citation" markdown="1">

{% raw %}

```bibtex
@inproceedings{buche2026lotusim,
  title     = {{LOTUSim}: Multi-Domain Simulator for Marine Robotics},
  author    = {Buche, C{\'e}dric and Grosset, Juliette and Lech{\^e}ne, H{\'e}l{\`e}ne
               and Dubromel, Marie and Havez-Bodivit, Pierig and Neo, Malcom and Prodhon, Julien},
  booktitle = {2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  address   = {Pittsburgh, PA, USA},
  year      = {2026},
  url       = {https://hal.science/hal-05677110}
}
```

{% endraw %}

</div>
