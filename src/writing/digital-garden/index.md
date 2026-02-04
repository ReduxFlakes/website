---
title: Digital Garden
description: Ever-growing collection of articles and notes
parent: Writing
icon: farm-plant
order: 1
isRefresh: true
util:
  vwsize: 45
---

## Welcome to my digital garden!

If you don't know what a digital garden is, it's basically a personal space where ideas can grow over time similar to an actual garden.

## Categories

{% if collections.digitalGarden.length > 0 %}

</auto-grid>
{% for item in collections.digitalGarden -%}
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
  
  {{ component('link-icon-card', {title: item.title, icon: item.icon, subheading: true, href: item.url, extras: [postNoteCount, tagsCount]}) }}
{%- endfor %}
<auto-grid>

{% else %}

No categories available :(

{% endif %}
