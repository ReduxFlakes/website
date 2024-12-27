---
title: Projects
description: "Check my projects, coding work, and contributions I've made over the years"
---

<div class="notice notice--warning">
<span class="lucide--traffic-cone"></span>
<p>This page is still in heavy construction</p>
</div>

## Active Projects

{% for item in projects %}

  <section class="showcase-card">
    <h3 class="sc-heading">{{ item.title }}</h3>
    <div class="content stack" style="--spacer: 0.5em;">
      <p>
          {{item.description }}
      </p>
      {%- if not item.status -%}
        <p>
          {{ component('link-button', {href: item.url, title: "Go to "+item.title }) }}
        </p>
      {%- endif -%}
    </div>
  </section>

{% endfor %}
