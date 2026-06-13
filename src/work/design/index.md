---
title: Design
description: Random design and art, from buttons & icons, to mockups.
icon: farm-color-wheel
parent: Work
order: 2
util:
  vwsize: "full"
---

{% set navPages = collections.all | eleventyNavigation("Design") %}

<auto-grid style="--size:15em;">
{% for item in navPages | sortBy("data.order") %}

<a href="{{item.url}}" class="card" {% if item.data.isRefresh %}data-update="true"{%endif%}>
<strong>{{item.title}}</strong>

<p>{{item.data.description}}</p>
</a>

{% endfor %}
</auto-grid>

{% if condition %}

{% elif condition %}

{% else %}

{% endif %}
