---
title: Projects
description: "Check my projects, coding work, and contributions I've made over the years"
---

## Active

{% for item in projects.active %}

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

## On Hiatus

{% for item in projects.hiatus %}

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

## Abandoned

{% for item in projects.abandoned %}

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
