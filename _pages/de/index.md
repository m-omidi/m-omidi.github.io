---
layout: home
title: "Startseite"
permalink: /de/
---

Willkommen auf der deutschen Version der Webseite.


{% if site.active_lang == "fa" %}
  [ورود به فارسی](/fa/)
{% elsif site.active_lang == "de" %}
  [Zur deutschen Seite](/de/)
{% else %}
  [Go to English version](/en/)
{% endif %}
