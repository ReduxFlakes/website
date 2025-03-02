---
title: Projects
description: "Check my projects, coding work, and contributions I've made over the years"
banner:
  image: code_folder.png
  alt: A photography of the Windows 10 explorer showing a shortcut called "Code" with an XP-era icon of two folders and a globe.
  author: Me
  date: 25 February, 2025
---

{% for item in projects.pinned %}

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

<div class="auto-grid">
{% for item in projects.active %}

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

</div>

## On Hiatus

<div class="auto-grid">
{% for item in projects.hiatus %}

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

</div>

<details class="stack">
<summary><h2>Abandoned</h2></summary>
{% for item in projects.abandoned %}
<section class="details-child">
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
</details>
