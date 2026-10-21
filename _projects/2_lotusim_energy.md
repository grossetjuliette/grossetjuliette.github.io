---
layout: paper
title: LOTUSim-Energy
paper_title: "LOTUSim-Energy: A Maritime Simulator for Human-Drone Interaction in Autonomous Offshore Operation & Maintenance"
description: Real-time simulation of multi-domain human–drone teaming for offshore wind operation and maintenance (FACET project).
description_fr: Simulation temps réel du travail en équipe humain–drones multi-domaine pour l'exploitation et la maintenance de l'éolien en mer (projet FACET).
img: assets/img/projects/lotusim-energy-farm-underwater.jpg
importance: 2
category: research

venue: IEEE/RSJ IROS 2026 · Workshop AQ²UASIM-v2
venue_fr: IEEE/RSJ IROS 2026 · Atelier AQ²UASIM-v2
authors:
  - name: Juliette Grosset
    me: true
    aff: [1, 2]
  - name: Marie Dubromel
    url: https://www.linkedin.com/in/marie-dubromel-922150221/
    aff: [1, 2]
  - name: Hélène Lechêne
    url: https://scholar.google.com/citations?user=B21SMLgAAAAJ&hl=en
    aff: [1, 2]
  - name: Quentin Arzel
    url: https://www.linkedin.com/in/quentin-arzel-bbb5941a6/
    aff: [1, 2]
  - name: Cédric Buche
    url: https://cedricbuche.github.io/
    aff: [1, 3]
affiliations:
  - CROSSING IRL 2010, CNRS
  - Naval Group, France
  - IMT Atlantique
links:
  - label: Paper (HAL)
    url: https://hal.science/hal-05741707
    icon: fa-solid fa-file-lines
  - label: arXiv
    url: https://arxiv.org/abs/2609.17124
    icon: ai ai-arxiv
  - label: Video
    label_fr: Vidéo
    url: https://www.youtube.com/watch?v=NRd-LjRrrac
    icon: fa-brands fa-youtube
  - label: Workshop
    label_fr: Atelier
    url: https://sites.google.com/view/aquasim-v2/
    icon: fa-solid fa-chalkboard-user
  - label: Code
    url: https://github.com/IRL-Crossing-CNRS/LOTUSim-Energy
    icon: fa-brands fa-github
  - label: Documentation
    url: https://irl-crossing-cnrs.github.io/LOTUSim/
    icon: fa-solid fa-book-open
tags:
  - offshore wind O&M
  - multi-domain simulation
  - human-in-the-loop
  - energy-aware planning
tags_fr:
  - "maintenance de l'éolien en mer"
  - "simulation multi-domaine"
  - "humain dans la boucle"
  - "planification énergétique"
---

<div class="lang-en" markdown="1">

## Abstract

Offshore maintenance requires operations in the air, on the surface and in the subsea domain, and includes human supervision. LOTUSim-Energy is a **real-time maritime simulator** designed for multi-domain human–drone interaction for offshore operation and maintenance. The platform unifies heterogeneous unmanned vehicles (UAVs, USVs, AUVs, ROVs) within a distributed architecture coupling environmental forcing (wind, waves, currents) and provides immersive user interfaces for supervision (desktop and virtual reality).

A structured **offshore task library** enables repeatable evaluation of autonomy stacks under realistic metocean disturbances. The simulator supports realistic physics, energy-aware battery modelling and fault-detection pipelines as modular validation tools. System-level performance is demonstrated on a multi-domain inspection scenario for monopile and transition-piece structures, evaluating an integrated waypoint-follower plugin and AIS-referenced trajectory tracking under real-time energy monitoring — a step toward de-risking sea deployment.

It is developed within the **FACET** project (Franco-Australian Indo-Pacific Centre for Energy Transition), funded by the French and Australian governments.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-farm-underwater.jpg" class="img-fluid rounded z-depth-1" alt="A wind turbine farm scenario, with BlueROV and LRAUV vehicles operating underwater" %}
<div class="caption">Fig. 4 – A wind turbine farm scenario, with BlueROV and LRAUV agents operating underwater alongside surface and aerial assets.</div>
</div>

## Architecture

LOTUSim-Energy is a distributed, server/client simulation framework built on [LOTUSim](/projects/1_lotusim/). Gazebo orchestrates asset management and simulation timing via a **deterministic step scheduler**, while three client modules handle physics (LOTUSim-Xdyn), agent interaction (ROS2) and rendering (Unity, optional and disable-able for large-scale training). At each timestep, Gazebo queries the three clients through dedicated plugins and barrier-synchronises their results before advancing, supporting both real-time (RTF ≈ 1) and accelerated-time (RTF > 1) runs.

For human–robot interaction, Unity provides desktop and VR operator interfaces, supports authority handover, and logs operator actions for repeatable studies. Two roles are supported: an **Embodied Operator**, with physics-constrained manual control for mission rehearsal, and a **Supervisor/Spectator**, with a free-flight mode for oversight and dynamic waypoint placement.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-architecture.png" class="img-fluid rounded z-depth-1" alt="LOTUSim-Energy architecture: Gazebo orchestrating physics, agent interaction and rendering client modules" %}
<div class="caption">Fig. 1 – LOTUSim-Energy architecture: Gazebo's deterministic step scheduler barrier-synchronises the physics, agent-interaction and rendering clients.</div>
</div>

## Environment Model

Surface vessel dynamics are simulated with [Xdyn](https://gitlab.com/sirehna_naval_group/sirehna/xdyn), implementing Fossen's equations of motion with diffraction and Froude–Krylov forces and linear Airy wave theory. Aerial wind dynamics use Gazebo's wind plugin, so all aerial drones respond consistently to a configurable, spatially and temporally varying wind field.

Underwater currents follow an **Ekman-inspired, three-layer model** — a wind-driven surface spiral, a geostrophic interior unaffected by either boundary, and a bottom Ekman spiral shaped by frictional drag and bathymetry — implemented in LOTUSim-Xdyn and calibrated day-to-day against Copernicus Marine Service products to forecast physics-consistent subsurface currents.

<div class="figure-pair">
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-surface-agents.jpg" class="img-fluid rounded z-depth-1" alt="Surface vessel agents affected by realistic wave and wind forcing" %}
<div class="caption">Fig. 2 – Surface agents driven by realistic wave and wind forcing.</div>
</div>
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-aerial-wind.jpg" class="img-fluid rounded z-depth-1" alt="X500 drone agents and the user interface for setting wind forces" %}
<div class="caption">Fig. 3 – X500 drone agents, and the interface used to configure wind forces.</div>
</div>
</div>

## Autonomous Offshore O&M

LOTUSim-Energy ships with a pre-built Unity scene of a **multi-turbine offshore wind farm**, wired to the vehicle stack so users can spawn UAV/USV/ROV agents and rehearse O&M primitives (launch/recovery, waypoint transit, station-keeping, blade-face inspection passes, subsea transects) while logging time and energy budgets. Two underwater agents are supported: a tethered **BlueROV** for close-range visual inspection and cathodic-protection checks, and a long-endurance **LRAUV** for wide-area surveys and cable or structure transects, alongside X500 aerial and WAM-V surface vehicles.

A modular **battery simulator plugin** couples state-of-charge estimation to each vehicle's instantaneous propulsive effort rather than a constant power draw, publishing real-time voltage and charge for energy-aware mission planning. A YOLO-based vision pipeline detects structural anomalies (cracks and corrosion) from onboard cameras.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-fault-detection.png" class="img-fluid rounded z-depth-1" alt="Corrosion and cracks detected underwater by a BlueROV and aerially by an X500 drone" %}
<div class="caption">Fig. 7 – Corrosion and crack detection by BlueROV (underwater) and X500 (aerial) onboard vision.</div>
</div>

## Inspection Scenario

System-level performance is demonstrated on a **multi-domain inspection path** for a monopile and transition piece: a surface vessel follows a wide-area AIS-referenced trajectory for situational awareness, a BlueROV2 performs close-range underwater inspection of submerged components, and X500 drones conduct aerial inspection of the monopile and above-water structures.

The USV waypoint follower is driven along a **real AIS track** of a small Class B vessel, illustrating AIS-referenced guidance under authentic GNSS noise and independently controlled disturbances.

<div class="figure-pair">
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-inspection-path.jpg" class="img-fluid rounded z-depth-1" alt="Cross-domain inspection path spanning surface, underwater and aerial waypoint sequences" %}
<div class="caption">Fig. 5 – Cross-domain inspection path for the monopile and transition-piece structure.</div>
</div>
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-ais-plot.jpg" class="img-fluid rounded z-depth-1" alt="Real AIS track compared to the simulated track for ten reference points" %}
<div class="caption">Fig. 6 – Real AIS track compared against the simulated trajectory.</div>
</div>
</div>

## Human-in-the-Loop

Operators interact through a dual-layer interface: monitoring AIS data for vessels transiting the mission zone, and, for inspection tasks, precision control of the onboard camera for structural assessment. The battery plugin tracks vehicle capacity and discharge in real time, letting operators adapt inspection intensity to preserve reserve for safe recovery. **Leap Motion** lets operators control the embarked camera by hand without a full VR headset, and the same desktop/VR interface drives an **education mode** with real-time wind and weather controls for stakeholder outreach.

<div class="figure-pair">
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-battery.jpg" class="img-fluid rounded z-depth-1" alt="Real-time monitoring of LRAUV battery capacity and discharge via the battery plugin" %}
<div class="caption">Fig. 8 – Real-time LRAUV battery capacity and discharge, monitored via the plugin.</div>
</div>
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-vr.jpg" class="img-fluid rounded z-depth-1" alt="A user interacting through virtual reality, with electricity production monitored against wind strength" %}
<div class="caption">Fig. 9 – VR interaction, and electricity production monitored as a function of wind strength.</div>
</div>
</div>

## Video

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/NRd-LjRrrac" title="LOTUSim-Energy demonstration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

## Funding

<div class="stat-grid">
  <div class="stat"><span class="stat-value">≈ 135 k€</span><span class="stat-label">FACET 2026–2027 — French and Australian government funding</span></div>
  <div class="stat"><span class="stat-value">≈ 50 k AUD</span><span class="stat-label">FACET 2025 — in collaboration with <a href="https://reuniwatt.com/">Reuniwatt</a></span></div>
  <div class="stat"><span class="stat-value">30</span><span class="stat-label">Participants at the FACET Offshore Wind Maintenance Workshop, Adelaide 2025</span></div>
</div>

</div>
<div class="lang-fr" markdown="1">

## Résumé

La maintenance en mer exige des opérations dans les airs, en surface et sous l'eau, sous supervision humaine. LOTUSim-Energy est un **simulateur maritime temps réel** conçu pour l'interaction humain–drones multi-domaine en exploitation et maintenance offshore. La plateforme réunit des véhicules sans pilote hétérogènes (UAV, USV, AUV, ROV) dans une architecture distribuée couplée aux forçages environnementaux (vent, vagues, courants), avec des interfaces immersives de supervision (poste de travail et réalité virtuelle).

Une **bibliothèque structurée de tâches offshore** permet d'évaluer de façon reproductible des chaînes d'autonomie sous des perturbations météo-océaniques réalistes. Le simulateur offre une physique réaliste, une modélisation énergétique des batteries et des chaînes de détection de défauts comme outils de validation modulaires. Les performances sont démontrées sur un scénario d'inspection multi-domaine d'un monopieu et de sa pièce de transition, avec un plugin de suivi de points de passage et un suivi de trajectoire de référence AIS sous supervision énergétique en temps réel — une étape vers la réduction des risques avant déploiement en mer.

Il est développé dans le cadre du projet **FACET** (Franco-Australian Indo-Pacific Centre for Energy Transition), financé par les gouvernements français et australien.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-farm-underwater.jpg" class="img-fluid rounded z-depth-1" alt="A wind turbine farm scenario, with BlueROV and LRAUV vehicles operating underwater" %}
<div class="caption">Fig. 4 – Un scénario de parc éolien, avec des agents BlueROV et LRAUV opérant sous l'eau aux côtés de moyens de surface et aériens.</div>
</div>

## Architecture

LOTUSim-Energy est une architecture de simulation distribuée client-serveur construite sur [LOTUSim](/projects/1_lotusim/). Gazebo gère les entités et le cadencement de la simulation grâce à un **ordonnanceur de pas déterministe**, tandis que trois modules clients assurent la physique (LOTUSim-Xdyn), l'interaction avec les agents (ROS2) et le rendu (Unity, optionnel et désactivable pour l'entraînement à grande échelle). À chaque pas de temps, Gazebo interroge les trois clients via des plugins dédiés et synchronise leurs résultats avant d'avancer, en temps réel (RTF ≈ 1) comme en temps accéléré (RTF > 1).

Pour l'interaction humain–robot, Unity fournit des interfaces opérateur sur poste de travail et en réalité virtuelle, permet le transfert d'autorité et enregistre les actions des opérateurs pour des études reproductibles. Deux rôles sont proposés : un **opérateur incarné**, avec un pilotage manuel contraint par la physique pour répéter les missions, et un **superviseur/spectateur**, en vol libre pour la supervision et le placement dynamique de points de passage.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-architecture.png" class="img-fluid rounded z-depth-1" alt="LOTUSim-Energy architecture: Gazebo orchestrating physics, agent interaction and rendering client modules" %}
<div class="caption">Fig. 1 – Architecture de LOTUSim-Energy : l'ordonnanceur de pas déterministe de Gazebo synchronise les clients de physique, d'interaction avec les agents et de rendu.</div>
</div>

## Modèle d'environnement

La dynamique des navires de surface est simulée avec [Xdyn](https://gitlab.com/sirehna_naval_group/sirehna/xdyn), qui implémente les équations du mouvement de Fossen avec les forces de diffraction et de Froude–Krylov et la théorie linéaire de la houle d'Airy. Le vent utilise le plugin de Gazebo, de sorte que tous les drones aériens réagissent de façon cohérente à un champ de vent configurable, variable dans l'espace et dans le temps.

Les courants sous-marins suivent un **modèle à trois couches inspiré d'Ekman** — une spirale de surface due au vent, un intérieur géostrophique non affecté par les frontières, et une spirale d'Ekman de fond façonnée par les frottements et la bathymétrie — implémenté dans LOTUSim-Xdyn et calibré au jour le jour sur les produits du Copernicus Marine Service pour prévoir des courants de subsurface physiquement cohérents.

<div class="figure-pair">
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-surface-agents.jpg" class="img-fluid rounded z-depth-1" alt="Surface vessel agents affected by realistic wave and wind forcing" %}
<div class="caption">Fig. 2 – Agents de surface soumis à des forçages réalistes de vagues et de vent.</div>
</div>
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-aerial-wind.jpg" class="img-fluid rounded z-depth-1" alt="X500 drone agents and the user interface for setting wind forces" %}
<div class="caption">Fig. 3 – Drones X500 et interface de configuration des forces de vent.</div>
</div>
</div>

## Exploitation et maintenance offshore autonomes

LOTUSim-Energy est fourni avec une scène Unity d'un **parc éolien offshore à plusieurs turbines**, reliée aux véhicules : on peut y faire apparaître des agents UAV/USV/ROV et répéter les opérations élémentaires d'exploitation et de maintenance (mise à l'eau et récupération, transit entre points de passage, maintien de position, passes d'inspection des pales, transects sous-marins) en enregistrant les budgets de temps et d'énergie. Deux agents sous-marins sont proposés : un **BlueROV** filoguidé pour l'inspection visuelle rapprochée et le contrôle de la protection cathodique, et un **LRAUV** de longue endurance pour les relevés étendus et les transects de câbles ou de structures, aux côtés des véhicules aériens X500 et de surface WAM-V.

Un **plugin modulaire de simulation de batterie** relie l'estimation de l'état de charge à l'effort propulsif instantané de chaque véhicule plutôt qu'à une consommation constante, et publie en temps réel la tension et la charge pour une planification de mission tenant compte de l'énergie. Une chaîne de vision fondée sur YOLO détecte les anomalies structurelles (fissures et corrosion) à partir des caméras embarquées.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-fault-detection.png" class="img-fluid rounded z-depth-1" alt="Corrosion and cracks detected underwater by a BlueROV and aerially by an X500 drone" %}
<div class="caption">Fig. 7 – Détection de corrosion et de fissures par la vision embarquée du BlueROV (sous l'eau) et du X500 (dans les airs).</div>
</div>

## Scénario d'inspection

Les performances du système sont démontrées sur un **parcours d'inspection multi-domaine** d'un monopieu et de sa pièce de transition : un navire de surface suit une trajectoire étendue de référence AIS pour la connaissance de la situation, un BlueROV2 inspecte de près les éléments immergés, et des drones X500 inspectent depuis les airs le monopieu et les structures émergées.

Le suivi de points de passage de l'USV est piloté le long d'une **trace AIS réelle** d'un petit navire de classe B, ce qui illustre un guidage de référence AIS avec un bruit GNSS authentique et des perturbations contrôlées indépendamment.

<div class="figure-pair">
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-inspection-path.jpg" class="img-fluid rounded z-depth-1" alt="Cross-domain inspection path spanning surface, underwater and aerial waypoint sequences" %}
<div class="caption">Fig. 5 – Parcours d'inspection multi-domaine du monopieu et de la pièce de transition.</div>
</div>
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-ais-plot.jpg" class="img-fluid rounded z-depth-1" alt="Real AIS track compared to the simulated track for ten reference points" %}
<div class="caption">Fig. 6 – Trace AIS réelle comparée à la trajectoire simulée.</div>
</div>
</div>

## Humain dans la boucle

Les opérateurs interagissent via une interface à deux niveaux : suivi des données AIS des navires qui traversent la zone de mission et, pour les tâches d'inspection, contrôle précis de la caméra embarquée pour évaluer les structures. Le plugin de batterie suit la capacité et la décharge des véhicules en temps réel, ce qui permet d'adapter l'intensité de l'inspection pour garder une réserve de retour en sécurité. Le **Leap Motion** permet de piloter la caméra embarquée à la main sans casque de réalité virtuelle, et la même interface pilote un **mode pédagogique** avec réglage en temps réel du vent et de la météo pour la sensibilisation des parties prenantes.

<div class="figure-pair">
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-battery.jpg" class="img-fluid rounded z-depth-1" alt="Real-time monitoring of LRAUV battery capacity and discharge via the battery plugin" %}
<div class="caption">Fig. 8 – Capacité et décharge de la batterie du LRAUV en temps réel, suivies via le plugin.</div>
</div>
<div class="project-figure">
{% include figure.liquid path="assets/img/projects/lotusim-energy-vr.jpg" class="img-fluid rounded z-depth-1" alt="A user interacting through virtual reality, with electricity production monitored against wind strength" %}
<div class="caption">Fig. 9 – Interaction en réalité virtuelle et production d'électricité suivie en fonction de la force du vent.</div>
</div>
</div>

## Vidéo

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/NRd-LjRrrac" title="LOTUSim-Energy demonstration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

## Financements

<div class="stat-grid">
  <div class="stat"><span class="stat-value">≈ 135 k€</span><span class="stat-label">FACET 2026–2027 — financement des gouvernements français et australien</span></div>
  <div class="stat"><span class="stat-value">≈ 50 k AUD</span><span class="stat-label">FACET 2025 — en collaboration avec <a href="https://reuniwatt.com/">Reuniwatt</a></span></div>
  <div class="stat"><span class="stat-value">30</span><span class="stat-label">Participants à l'atelier FACET sur la maintenance de l'éolien en mer, Adelaide 2025</span></div>
</div>

</div>

## Citation

<p class="citation-plain">J. Grosset, M. Dubromel, H. Lechêne, Q. Arzel, and C. Buche, “LOTUSim-Energy: A Maritime Simulator for Human-Drone Interaction in Autonomous Offshore Operation &amp; Maintenance,” <em>AQ²UASIM-v2 Workshop, IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</em>, Pittsburgh, USA, 2026.</p>

<div class="project-citation" markdown="1">

{% raw %}

```bibtex
@inproceedings{grosset2026lotusimenergy,
  title         = {{LOTUSim-Energy}: A Maritime Simulator for Human-Drone Interaction
                   in Autonomous Offshore Operation \& Maintenance},
  author        = {Grosset, Juliette and Dubromel, Marie and Lech{\^e}ne, H{\'e}l{\`e}ne
                   and Arzel, Quentin and Buche, C{\'e}dric},
  booktitle     = {AQ$^2$UASIM-V2 Workshop, IEEE/RSJ International Conference on
                   Intelligent Robots and Systems (IROS)},
  address       = {Pittsburgh, PA, USA},
  year          = {2026},
  url           = {https://hal.science/hal-05741707},
  eprint        = {2609.17124},
  archivePrefix = {arXiv}
}
```

{% endraw %}

</div>
