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

<div class="auto-grid" style="margin-top:1em;">

<section>

<h2 style="margin-bottom:0.5em;">Listening Status</h2>

If you want to check what I'm listening to, you can view my [Last.FM](https://www.last.fm/user/ReduxFlakes), [ListenBrainz](https://listenbrainz.org/user/reduxflakes/), or [Libre.FM](https://libre.fm/user/reduxflakes) pages.

</section>
<section>

## Socials

<div class="auto-flex" style="margin-top:0.5em;">
{%- for item in meta.socials -%}
  <a href="{{item.url}}">
  <img src="/public/img/buttons/general/{{item.img}}" alt="{{item.title}}" class="classic-btn" width="88" height="31" loading="lazy">
  </a>
{%- endfor -%}
</div>
<a href="https://reduxflakes.atabook.org/">Sign guestbook</a>
</section>

</div>

## Latest Post

{% for post in collections.posts | limit(1) %}

    {{ component('post-listing', {title: post.data.title, date: post.date, description: post.data.description, href: post.url, subheading: true }) }}

{% endfor %}

## Friends

<div  class="auto-flex">
  {% for button in buttons.friends %}
    <a href="{{button.url}}" title="{{button.title}}"><img src="/public/img/buttons/friends/{{button.img}}" alt="{{button.title}} button" width="88" height="31" class="classic-btn" loading="lazy" decoding="async" eleventy:ignore ></a>
  {% endfor %}
</div>

## Webrings

{% if env.host == "neocities" %}

### NeoSSG

<div id="neossg" class="webring-container">
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-variables.js"></script>
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-widget.js"></script>
</div>

### Null Webring

<script src="https://nuthead.neocities.org/ring/ring.js"></script>

### No AI

<a href="https://baccyflap.com/noai/?prv&s=rzr" target="_top"> < </a>
<a href="https://baccyflap.com/noai" target="_blank" rel="noopener"> no ai </a>
<a href="https://baccyflap.com/noai/?nxt&s=rzr" target="_top"> > </a>

{% else %}

### Bucket Webring

<a href="https://webring.bucketfish.me/redirect.html?to=prev&name=reduxflakes" target="_top"> < </a>
<a href="https://webring.bucketfish.me" target="_blank" rel="noopener"> bucket </a>
<a href="https://webring.bucketfish.me/redirect.html?to=next&name=reduxflakes" target="_top" class="icon-button"> > </a>
{% endif %}

## Updates

<div class="carbon-scroller stack">

{%- for entry in updates -%}

  <div class="stack" style="--spacer: 0.5em;">
    {%- if loop.first -%}
    <p><b>
      <time datetime="{{ entry.updateDate | dateToISO }}" style="color:var(--foreground);">{{ entry.updateDate | formatStringDate }}</time>
      </b></p>
    {%- else -%}
    <p>
      <time datetime="{{ entry.updateDate | dateToISO }}">{{ entry.updateDate | formatStringDate }}</time>
      </p>
    {%- endif -%}
    <p>{{ entry.content | safe }}</p>
    <hr>
  </div>
{%- endfor -%}

</div>
