---
layout: base
title: reduxflakes
description: Software developer and designer from Portugal
banner:
  image: homepage.png
  alt: A photography of a pedestrian walk in a beach at the night with the sunset in the horizon
  author: Me
  date: 7 September, 2024
date: 2024-11-11T09:25:31.000Z
---

## Welcome

I'm ReduxFlakes (or reduc for close friends), I'm a software developer and designer from Portugal. I'm a huge fan of retro tech, minimalism, privacy, and music.

## Latest Post

{% for post in collections.posts | limit(1) %}

    {{ component('post-listing', {title: post.data.title, date: post.date, description: post.data.description, href: post.url, subheading: true }) }}

{% endfor %}

## Updates

<div class="carbon-scroller stack" style="--spacer: 0.5em;">

{%- for entry in updates -%}

  <div class="stack" style="--spacer: 0.5em;">
    {%- if loop.first -%}
      <time datetime="{{ entry.updateDate | dateToISO }}" style="font-weight:bold;color:var(--type-strong);">{{ entry.updateDate | formatStringDate }}</time>
    {%- else -%}
      <time datetime="{{ entry.updateDate | dateToISO }}">{{ entry.updateDate | formatStringDate }}</time>
    {%- endif -%}
    <p>{{ entry.content | safe }}</p>
    <hr>
  </div>
{%- endfor -%}

</div>
