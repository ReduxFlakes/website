---
title: Digital Garden
description: Ever-growing collection of articles and notes
parent: Writing
icon: farm-plant
order: 1
util:
  vwsize: 45
---

## Welcome to my digital garden!

If you don't know what a digital garden is, it's basically a personal space where ideas can grow over time similar to an actual garden. This allows me to write a lot more content because different from a blog where posts are published when they're ready, on a digital garden they are always subject to change and improvements so there's more experimental posts.

## Categories

{% if collections.digitalGarden.length > 0 %}

</auto-grid>
{% for item in collections.digitalGarden -%}
{% if item.children.length > 0 %}


{% if item.tags.length > 1 %}
{% set tagsCount =  [item.tags.length, " Tags"] | join %}
{% else %}
{% set tagsCount =  [item.tags.length, " Tag"] | join %}
{% endif %}
{% if item.children.length > 1 %}
{% set postNoteCount =  [item.children.length, " Notes"] | join %}
{% else %}
{% set postNoteCount =  [item.children.length, " Note"] | join %}
{% endif %}
{{ component('link-icon-card', {title: item.title, icon: item.icon, description: item.description,subheading: true, href: item.url, extras: [postNoteCount, tagsCount]}) }}
{% endif %}
{%- endfor %}
<auto-grid>

{% else %}

No categories available :(

{% endif %}
