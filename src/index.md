---
key: Home
description: "Software developer and designer from Portugal"
layout: home.njk
---

{{ component('notice',{description: "I'm currently reworking the base of the entire site, so some stuff might look inconsistent or missing but don't worry. "}) }}

<auto-grid style="--size:15em;">
<section class="blok">

## Welcome!

Hi ^\_^, I go around by ReduxFlakes. I'm a software developer and designer from Portugal. I'm known for creating the collective {% externalLink "https://surfscape.eu", "SurfScape" %}, the {% externalLink "https://surfscape.eu/celer", "Celer" %} toolbox and for also doing {% externalLink "https://youtube.com/@reduxflakes", "remasters on YouTube" %}.

<a href="/about" style="margin-top:0.5em">More about me {% lucide "arrow-down-right" %}</a>

</section>

<section class="blok">

## Announcements

<ul class="slim-list">
{%- for item in announcements -%}
  <li><a href="{{item.link}}">{{item.title}}</a><small> - <time datetime="{{item.date}}">{{item.date  | formatEUDate}}</time></small></li>
{%- endfor -%}
</ul>
</section>
</auto-grid>

<section class="blok stack" style="--spacer: 0.5em;margin-top:0.5em;">

{% set latestUpdate = updates[0] %}

## {% lucide "milestone" %} What's New? <small><time datetime="{{ latestUpdate.date | dateToISO }}">{{ latestUpdate.date | formatDateTime }}<time></small>

> {{ latestUpdate.content | safe }}

<small>Looking for older updates or more information? Check the [changelog page](/changelog)!</small>

</section>

{% for post in collections.posts | limit(1) -%}

<a href="{{post.url}}" class="post-listing card">
<strong>{% lucide "notebook-text" %}  Latest blog post</strong>
    <section class="stack" style="--spacer: 0.3em;">
            <h2>{{ post.data.title }}</h2>
        <p class="secondary">
            <small>
                <time datetime="{{post.date}}">{{post.date | formatPostDate}}</time>
            </small>
        </p>
        <p>{{ post.data.description }}</p>
    </section>
</a>

{%- endfor -%}

<a href="/blog" style="--spacer:0.5em">View blog {% lucide "arrow-down-right" %}</a>

## {% lucide "box" %} Project Showcase

<auto-grid style="--size: 16em;">
{% for cat in projects -%}
  {% for project in cat.items | filterByKey("partOf", "popular") -%}
    {%- card project -%}
  {%- endfor %}
{%- endfor -%}
</auto-grid>
<a href="/projects" style="--spacer:0.5em">View all projects {% lucide "arrow-down-right" %}</a>

## {% lucide "globe" %} Links

### Socials

<div class="auto-grid button-grid" style="--size:12em;">
  {%- for item in meta.socials -%}
  <a href="{{item.url}}" class="btn social-btn" aria-label="Go to my {{item.name}} profile">
  <img
      src="/public/icons/pixy/{{item.name | slugify}}.png" alt="" aria-hidden="true" width="38" height="38" eleventy:ignore class="classic-btn" >{{item.name}}</a>
  {%- endfor -%}
</div>
<a href="https://reduxflakes.atabook.org/" class="card guestbook-card" style="--spacer:0.5rem;">Sign my guestbook!</a>
<div class="auto-grid button-grid" style="--spacer:0.5rem;">
 <a class="btn social-btn" href="https://nekoweb.org/follow/reduxflakes.nekoweb.org">Follow me on Nekoweb</a>
<a class="btn social-btn" href="https://neocities.org/site/reduxflakes">Follow me on Neocities</a>
</div>

### Friends ({{buttons.friends.length}})

<details>
  <summary>Show buttons :3 <small>(bandwidth warning!)</small></summary>
  <div class="auto-flex button-grid">
    {%- for button in buttons.friends -%}
    {%- if button.img -%}
    <a href="{{button.url}}" title="{{button.title}}" class="btn"><img src="
    {%- if button.externalimg -%}{{button.img}}{%- else -%}/public/buttons/friends/{{button.img}}{%-endif-%}"
        alt="{{button.title}} button" width="88" height="31" class="classic-btn" {%- if button.externalimg -%}eleventy:ignore{%- endif -%}></a>
    {%- else -%}
    <a href="{{button.url}}" style="min-width:88px;min-height:31px;" class="btn">{{button.title}}</a>
    {%- endif -%}
    {% endfor %}
  </div>
</details>

### Sites I like / Inspired on ({{buttons.likes.length}})

<details>
  <summary>Show buttons :3 <small>(bandwidth warning!)</small></summary>
  <div class="auto-flex button-grid">
    {%- for button in buttons.likes -%}
    {%- if button.img -%}
    <a href="{{button.url}}" title="{{button.title}}" class="btn"><img src="/public/buttons/{{button.img}}"
        alt="{{button.title}} button" width="88" height="31" class="classic-btn"></a>
    {%- else -%}
    <a href="{{button.url}}" style="min-width:88px;min-height:31px;" class="btn">{{button.title}}</a>
    {%- endif -%}
    {% endfor %}
  </div>
</details>

## {% lucide "link" %} Webrings

Some webrings might be missing because JS is currently disabled/not working. [- .noscript-alert -]

{% if env.host == "neocities" or env.host == "all" %}

<div class="auto-grid" style="--size:15em;">

<section class="card stack noscript">

### NeoSSG Webring

<div class="noscript" id="neossg">
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-variables.js" defer async></script>
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-widget.js" defer async></script>
</div>
</section>

<section class="card stack noscript">

### Null's Webring

<div class="auto-flex noscript">
  <script src="https://nuthead.neocities.org/ring/ring.js" defer async></script>
</div>
</section>

<section class="card stack">

### No AI

<div class="auto-flex" style="align-items:center;">
  <a class="button button--icon" href="https://baccyflap.com/noai/?prv&s=rzr" target="_top" title="Go back" aria-label="Go Back">{% lucide "arrow-left" %}</a>
  <a class="button" href="https://baccyflap.com/noai" target="_blank" rel="noopener">{% lucide "globe" %} no ai</a>
  <a class="button button--icon" href="https://baccyflap.com/noai/?nxt&s=rzr" target="_top" title="Up Next" aria-label="Up Next">{% lucide "arrow-right" %}</a>
</div>

</section>

</div>

{% endif %}

{% if env.host == "nekoweb" or env.host == "all" %}

<div class="auto-grid" style="--size:15em;">

<section class="card stack">

### Bucket Webring

<div class="auto-flex" style="align-items:center;">
  <a class="button button--icon" href="https://webring.bucketfish.me/redirect.html?to=prev&name=reduxflakes" target="_top" title="Go back" aria-label="Go Back">{% lucide
    "arrow-left" %}</a>
  <a class="button" href="https://webring.bucketfish.me" target="_blank" rel="noopener">{% lucide "globe" %} bucket </a>
  <a class="button button--icon" href="https://webring.bucketfish.me/redirect.html?to=next&name=reduxflakes" target="_top" title="Up Next" aria-label="Up Next">{% lucide
    "arrow-right" %}</a>
</div>

</section>

<section class="card stack">

### SSGRing

<div class="auto-flex" style="align-items:center;">
  <a class="button button--icon" href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=reduxflakes&way=prev" title="Go back" aria-label="Go Back">{%
    lucide "arrow-left" %}</a>
  <a class="button" href="https://jbcarreon123.nekoweb.org/webrings/ssgring" target="_blank" rel="noopener">{% lucide "globe" %} SSGRing </a>
  <a class="button button--icon" href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?way=rand" aria-label="Random" title="Random">{% lucide "shuffle"
    %}</a>
  <a class="button button--icon" href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=reduxflakes&way=next" target="_top"
     title="Up Next" aria-label="Up Next">{% lucide "arrow-right" %}</a>
</div>

</section>

<section class="card stack">

### Snug Ring

<div class="auto-flex "  style="align-items:center;">
  <a class="button button--icon" href="https://snugnook.org/ring?action=previous" title="Go back" aria-label="Go Back">{%
    lucide "arrow-left" %}</a>
  <a class="button button--icon" href="https://snugnook.org/ring">{% lucide "globe" %}   Snug Ring</a>
  <a class="button button--icon" href="https://snugnook.org/ring?action=random" aria-label="Random" title="Random">{% lucide "shuffle"
    %}</a>
  <a class="button button--icon" href="https://snugnook.org/ring?action=next"  title="Up Next" aria-label="Up Next">{% lucide "arrow-right" %}</a>
</div>

</section>

{% endif -%}
