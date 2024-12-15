---
title: Writings
layout: base
description: site updates, projects, and other rambles...
---

{%- for post in collections.posts | reverse -%}

  <section class="showcase-card">
    <h3 class="sc-heading">{{ post.data.title }}</h3>
    <div class="content stack" style="--spacer: 0.25em;">
      <p>
        <small>
          <time datetime="{{post.date}}">{{post.date | formatPostDate}}</time>
        </small>
      </p>
      <p>{{ post.data.page.excerpt }}</p>
      <p>
        {{ component('link-button', {href: post.url, title: "Read more..." }) }}
      </p>
    </div>
  </section>
{%- endfor -%}
