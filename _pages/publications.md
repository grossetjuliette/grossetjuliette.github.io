---
layout: page
permalink: /publications/
title: Publications
title_fr: Publications
description: Journal articles, conference papers, book chapter, national communications and posters.
description_fr: Articles de revues, articles de conférences, chapitre d'ouvrage, communications nationales et posters.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<div class="pub-summary">
<table>
  <thead>
    <tr><th>Type</th><th class="num">{% include t.liquid en="Count" fr="Nombre" %}</th><th>{% include t.liquid en="Rank / quality" fr="Rang / qualité" %}</th><th>{% include t.liquid en="Venues" fr="Supports" %}</th></tr>
  </thead>
  <tbody>
    <tr><td>{% include t.liquid en="Book chapter" fr="Chapitre d'ouvrage" %}</td><td class="num">1</td><td></td><td>Advances in Robotics and Automatic Control (IFSA, 2024)</td></tr>
    <tr><td>{% include t.liquid en="International journals" fr="Revues internationales" %}</td><td class="num">6</td><td><span class="pill">3 Q1</span><span class="pill">1 Q2</span></td><td>Integrated Computer-Aided Engineering ×2 (Q1), Sensors (Q1), Algorithms (Q2), International Journal on Advances in Systems and Measurements, American Journal of Management</td></tr>
    <tr><td>{% include t.liquid en="International conferences" fr="Conférences internationales" %}</td><td class="num">8</td><td><span class="pill">{% include t.liquid en="1 rank A" fr="1 rang A" %}</span><span class="pill">{% include t.liquid en="1 rank B" fr="1 rang B" %}</span></td><td>IROS 2026 (A), IROS 2026 {% include t.liquid en="workshop" fr="atelier" %}, VTC-Fall 2024 (B), ASPAI 2024 <span class="pill pill-award"><i class="fa-solid fa-trophy"></i> {% include t.liquid en="best paper" fr="meilleur article" %}</span>, ASPAI 2022, AISyS 2024, ARCI 2022, CLEF 2022</td></tr>
    <tr><td>{% include t.liquid en="National communications" fr="Communications nationales" %}</td><td class="num">3</td><td></td><td>Colloque IMT 2024 <span class="pill pill-award"><i class="fa-solid fa-trophy"></i> {% include t.liquid en="best presentation" fr="meilleure présentation" %}</span>, Colloque IMT 2023, JFSMA 2022</td></tr>
    <tr><td>Posters</td><td class="num">4</td><td></td><td>Colloque IMT 2022 <span class="pill pill-award"><i class="fa-solid fa-trophy"></i> {% include t.liquid en="best poster" fr="meilleur poster" %}</span>, LFA 2023, JFSMA 2022, Jeudi de la Recherche 2022</td></tr>
    <tr class="total"><td>Total</td><td class="num">22</td><td colspan="2">{% include t.liquid en="including 3 awards" fr="dont 3 prix" %}</td></tr>
  </tbody>
</table>
</div>

<p class="scholar-line"><i class="ai ai-google-scholar"></i> Google Scholar: <strong>h-index 5</strong> · <strong>137 citations</strong> · <a href="https://scholar.google.com.au/citations?user=sf6Hqf0AAAAJ&amp;hl=en">{% include t.liquid en="view profile" fr="voir le profil" %}</a></p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 id="book-chapter">{% include t.liquid en="Book chapter" fr="Chapitre d'ouvrage" %} <span class="pill">1</span></h2>
{% bibliography --group_by none --query @*[category=chapter] %}

<h2 id="journals">{% include t.liquid en="International journal articles" fr="Articles de revues internationales" %} <span class="pill">6</span></h2>
{% bibliography --group_by none --query @*[category=journal] %}

<h2 id="international-conferences">{% include t.liquid en="International conference articles" fr="Articles de conférences internationales" %} <span class="pill">8</span></h2>
{% bibliography --group_by none --query @*[category=international] %}

<h2 id="national">{% include t.liquid en="National communications" fr="Communications nationales" %} <span class="pill">3</span></h2>
{% bibliography --group_by none --query @*[category=national] %}

<h2 id="posters">Posters <span class="pill">4</span></h2>
{% bibliography --group_by none --query @*[category=poster] %}

</div>
