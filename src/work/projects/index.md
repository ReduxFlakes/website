---
title: Projects
description: "Projects I'm involved in (incl. active, archived, and ideas)"
icon: farm-components
order: 1
modified: 2026-01-30 20:27:00
marker: ["Recommended"]
parent: Work
util:
  vwsize: 50
---

{% for cat in projects -%}

## {% lucide cat.icon %} {{cat.title}}

{% if cat.items.length > 0 %}
<auto-grid style="--size:20em;margin-bottom:2em;">
{% for project in cat.items -%}
{% card project %}
{%- endfor %}
</auto-grid>
{% endif %}

{% endfor %}
