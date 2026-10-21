---
layout: paper
title: Virtual Smart Home
description: A smart home digital twin built on VirtualHome to train activity recognition on synthetic sensor data
description_fr: Un jumeau numérique de maison connectée construit sur VirtualHome pour entraîner la reconnaissance d'activités sur des données de capteurs synthétiques
img: assets/img/projects/vsh-apartment-scenes.jpg
importance: 5
category: research

venue: Sensors (MDPI), 2023
authors:
  - name: Damien Bouchabou
    url: https://github.com/dbouchabou
  - name: Juliette Grosset
    url: https://scholar.google.com/citations?user=sf6Hqf0AAAAJ&hl=en
    me: true
  - name: Sao Mai Nguyen
  - name: Christophe Lohr
    url: https://www.imt-atlantique.fr/en/person/christophe-lohr
  - name: Xavier Puig
    url: https://www.xavierpuigf.com/
affiliations:
  - IMT Atlantique
  - ENSTA Paris (U2IS)
  - ECAM Rennes
  - FAIR, Menlo Park
links:
  - label: Paper
    label_fr: Article
    url: https://www.mdpi.com/1424-8220/23/17/7586
    icon: fa-solid fa-file-lines
  - label: HAL
    url: https://hal.science/hal-04474884
    icon: fa-solid fa-file-pdf
  - label: DOI
    url: https://doi.org/10.3390/s23177586
    icon: fa-solid fa-link
  - label: VirtualHome
    url: https://github.com/xavierpuigf/virtualhome
    icon: fa-brands fa-github
  - label: Sensor generation GUI
    label_fr: Interface de génération de capteurs
    url: https://github.com/dbouchabou/VirtualHomeForSmartHomesGUI
    icon: fa-brands fa-github
tags:
  - digital twin
  - smart home
  - activity recognition
  - synthetic data
tags_fr:
  - "jumeau numérique"
  - "maison connectée"
  - "reconnaissance d'activités"
  - "données synthétiques"
---

<div class="lang-en" markdown="1">

Human activity recognition in smart homes is held back by data: annotated sensor datasets are small, and every home is wired differently. This work asks whether a **digital twin of a real apartment** can generate synthetic sensor data good enough to train activity recognition models that still work on real data.

We built the **Virtual Smart Home**, a simulator for modelling activities of daily living, adapted from the [**VirtualHome**](https://github.com/xavierpuigf/virtualhome) multi-agent household simulator (Unity3D) by adding an implementation of **IoT sensors** — motion, door and device-activation sensors — that log events as a real installation would.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/vsh-apartment-scenes.jpg" class="img-fluid rounded z-depth-1" alt="Virtual Home apartment scenes rendered with the Unity3D game engine" %}
<div class="caption">
Virtual Home apartment scenes. Virtual Home is built on the Unity3D game engine, which provides the kinematic, physics and navigation models.
</div>
</div>

## Digital twin of a living lab

We reproduced an instrumented smart apartment — sensor by sensor, in the positions they physically occupy — so that a simulated run produces a sensor log directly comparable to the real one.

<div class="row project-figure">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/vsh-sensor-layout.jpg" class="img-fluid rounded z-depth-1" alt="Layout showing the positions of the different sensors in the smart apartment" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/vsh-livinglab-vs-sim.jpg" class="img-fluid rounded z-depth-1" alt="The living lab seen from a fisheye camera next to its representation in the Virtual Home simulator" %}
  </div>
</div>
<div class="caption">
Left: positions of the sensors in the smart apartment. Right: the living lab from a fisheye camera (a) and its representation in the Virtual Home simulator (b).
</div>

## Does the synthetic data behave like the real thing?

Comparing sensors triggered in real and synthetic logs for matching scenarios shows the twin reproduces the activation patterns that activity recognition models actually key on.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/vsh-sensor-comparison.jpg" class="img-fluid rounded z-depth-1" alt="Comparison graph of sensors triggered in real and synthetic logs for similar scenarios" %}
<div class="caption">
Comparison of sensors triggered in real and synthetic logs for similar scenarios.
</div>
</div>

## Result

Activity recognition models trained on the synthetic data reach roughly **80 % F1-score on real smart home data** — enough to bootstrap recognition in a home before any real annotated data exists for it.

## Code

The paper itself does not ship a code release. The relevant public repositories are the upstream simulator and the sensor-generation tooling:

- [xavierpuigf/virtualhome](https://github.com/xavierpuigf/virtualhome) — VirtualHome, the multi-agent household simulator this work extends (co-author Xavier Puig)
- [dbouchabou/VirtualHomeForSmartHomesGUI](https://github.com/dbouchabou/VirtualHomeForSmartHomesGUI) — GUI to configure and start smart sensor data generation (co-author Damien Bouchabou)

</div>
<div class="lang-fr" markdown="1">

La reconnaissance d'activités humaines dans les maisons connectées est freinée par les données : les jeux de données annotés sont petits, et chaque logement est équipé différemment. Ce travail examine si un **jumeau numérique d'un appartement réel** peut générer des données de capteurs synthétiques suffisamment fidèles pour entraîner des modèles de reconnaissance d'activités qui fonctionnent ensuite sur des données réelles.

Nous avons construit le **Virtual Smart Home**, un simulateur des activités de la vie quotidienne, adapté du simulateur domestique multi-agent [**VirtualHome**](https://github.com/xavierpuigf/virtualhome) (Unity3D) en y ajoutant des **capteurs IoT** — capteurs de mouvement, d'ouverture de porte et d'activation d'appareils — qui enregistrent les événements comme une installation réelle.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/vsh-apartment-scenes.jpg" class="img-fluid rounded z-depth-1" alt="Virtual Home apartment scenes rendered with the Unity3D game engine" %}
<div class="caption">
Scènes d'appartement de Virtual Home. Virtual Home repose sur le moteur de jeu Unity3D, qui fournit les modèles cinématiques, physiques et de navigation.
</div>
</div>

## Jumeau numérique d'un living lab

Nous avons reproduit un appartement connecté instrumenté — capteur par capteur, à leur position réelle — afin qu'une simulation produise un journal de capteurs directement comparable au journal réel.

<div class="row project-figure">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/vsh-sensor-layout.jpg" class="img-fluid rounded z-depth-1" alt="Layout showing the positions of the different sensors in the smart apartment" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/vsh-livinglab-vs-sim.jpg" class="img-fluid rounded z-depth-1" alt="The living lab seen from a fisheye camera next to its representation in the Virtual Home simulator" %}
  </div>
</div>
<div class="caption">
À gauche : position des capteurs dans l'appartement connecté. À droite : le living lab vu par une caméra fisheye (a) et sa représentation dans le simulateur Virtual Home (b).
</div>

## Les données synthétiques se comportent-elles comme les réelles ?

La comparaison des capteurs déclenchés dans les journaux réels et synthétiques pour des scénarios équivalents montre que le jumeau reproduit les motifs d'activation sur lesquels s'appuient les modèles de reconnaissance d'activités.

<div class="project-figure">
{% include figure.liquid path="assets/img/projects/vsh-sensor-comparison.jpg" class="img-fluid rounded z-depth-1" alt="Comparison graph of sensors triggered in real and synthetic logs for similar scenarios" %}
<div class="caption">
Comparaison des capteurs déclenchés dans les journaux réels et synthétiques pour des scénarios similaires.
</div>
</div>

## Résultat

Les modèles de reconnaissance d'activités entraînés sur les données synthétiques atteignent environ **80 % de F1-score sur des données réelles de maison connectée** — de quoi amorcer la reconnaissance dans un logement avant de disposer de données annotées.

## Code

L'article n'est pas accompagné d'une publication de code. Les dépôts publics utiles sont le simulateur d'origine et l'outil de génération de capteurs :

- [xavierpuigf/virtualhome](https://github.com/xavierpuigf/virtualhome) — VirtualHome, le simulateur domestique multi-agent étendu par ce travail (co-auteur Xavier Puig)
- [dbouchabou/VirtualHomeForSmartHomesGUI](https://github.com/dbouchabou/VirtualHomeForSmartHomesGUI) — interface pour configurer et lancer la génération de données de capteurs (co-auteur Damien Bouchabou)

</div>

## Citation

<div class="project-citation" markdown="1">

{% raw %}

```bibtex
@article{sensors2023,
  title   = {A Smart Home Digital Twin to Support the Recognition of Activities of Daily Living},
  author  = {Bouchabou, Damien and Grosset, Juliette and Nguyen, Sao Mai
             and Lohr, Christophe and Puig, Xavier},
  journal = {Sensors},
  volume  = {23},
  number  = {17},
  pages   = {7586},
  year    = {2023},
  doi     = {10.3390/s23177586}
}
```

{% endraw %}

</div>

<p class="project-affiliations"><span class="lang-en">Figures reproduced from the article, published open access under CC BY 4.0.</span><span class="lang-fr">Figures reprises de l'article, publié en accès ouvert sous licence CC BY 4.0.</span></p>
