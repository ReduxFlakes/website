---
title: Shrines
description: Small sites of stuff I love
icon: farm-flower
parent: Extras
isInConstruction: true
isRefresh: true
order: 0
---

<div class="auto-grid">
{%- for shrine in collections.shrines -%}
{%- if not shrine.data.draft or shrine.url -%}
  {{ component('link-icon-card', {title: shrine.data.title, description: shrine.data.description, href: shrine.url, extras: [shrine.data.status]}) }}
{%- endif -%}
{%- endfor -%}
</div>
