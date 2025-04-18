---
title: Projects
description: "Personal projects, both active and abandoned"
icon: farm-components
eleventyNavigation:
  parent: Work
  key: Projects
  order: 2
  tag: "Recommended"
---

> Ordered from most popular/active to inactive/abandoned

{% for item in projects %}

  <section class="showcase-card">
    <h3 class="sc-heading">{{ item.title }}</h3>
    <div class="content stack" style="--spacer: 0.5em;">
      <p>
          {{item.description }}
      </p>
      {%- if not item.status -%}
<a href="{{item.url}}">Go to project</a>
      {%- endif -%}
    </div>
  </section>

{% endfor %}
