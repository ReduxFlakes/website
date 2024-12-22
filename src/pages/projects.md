---
title: Projects
---

<div class="notice notice--warning">
<span class="lucide--traffic-cone"></span>
<p>This page is still in heavy construction</p>
</div>

{% for item in projects %}

  <section class="showcase-card">
    <h2 class="sc-heading">{{ item.title }}</h2>
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
