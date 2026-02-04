---
title: Shrines
description: Small sites of stuff I love
icon: farm-flower
parent: Extras
order: 0
---

<div class="auto-grid">
{%- for shrine in collections.shrines -%}

<section class="card-shrine" style="--accent: {{shrine.data.accent}};" data-status="{{shrine.data.status}}">
<h2>{{shrine.data.title}}</h2>
<p>{{shrine.data.description}}</p>
<a href="{{shrine.url}}" class="button button--transparent">Access</a>
</section>
{%- endfor -%}
</div>
