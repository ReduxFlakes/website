---
title: "Extras"
permalink: "/extras/"
description: "Additional stuff for my kind visitors :3"
---

{% for page in collections.extras %}

  <section class="showcase-card">
    <h3 class="sc-heading">{{ page.data.title }}</h3>
    <div class="content stack" style="--spacer: 0.25em;">
      <p>
          {{page.data.description}}
      </p>
      <p>
        {{ component('link-button', {href: page.url, title: "Go to "+page.data.title }) }}
      </p>
    </div>
  </section>
{% endfor %}
