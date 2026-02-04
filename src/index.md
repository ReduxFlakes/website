---
key: Home
description: "Software developer and designer from Portugal"
layout: home.njk
content_css: false
---

{{ component('notice',{description: "I'm currently reworking the base of the entire site, so some stuff might look inconsistent or missing but don't worry. "}) }}

<auto-grid style="--size:15em;">
<section class="blok">

## Welcome!

Hi ^\_^, I go around by ReduxFlakes. I'm a software developer and designer from Portugal. I'm known for creating the collective [SurfScape](https://surfscape.eu), the [Celer](https://surfscape.eu/celer) toolbox but also for doing [remasters on YouTube](https://youtube.com/@reduxflakes).

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

<section class="blok stack" style="--spacer: 0.5em;margin-top:1rem;">

{% set latestUpdate = updates[0] %}

## {% lucide "milestone" %} What's New? <small><time datetime="{{ latestUpdate.date | dateToISO }}">{{ latestUpdate.date | formatDateTime }}<time></small>

> {{ latestUpdate.content | safe }}

<small>Looking for older updates or more information? Check the [changelog page](/changelog)!</small>

</section>

## {% lucide "rss" %} Latest Blog Post

{% for post in collections.posts | limit(1) -%}
{{ component('post-listing', {title: post.data.title, date: post.date, description: post.data.description, href:
post.url, subheading: true }) }}
{%- endfor -%}

<a href="/writing/blog" style="--spacer:0.5em">View blog {% lucide "arrow-down-right" %}</a>

## {% lucide "box" %} Project Showcase

<auto-grid style="--size: 16em;">
{% for cat in projects -%}
  {% for project in cat.items | filterByKey("partOf", "popular") -%}
    {%- card project -%}
  {%- endfor %}
{%- endfor -%}
</auto-grid>
<a href="/work/projects" style="--spacer:0.5em">View all projects {% lucide "arrow-down-right" %}</a>

## {% lucide "globe" %} Links

### Socials

<div class="auto-grid button-grid" style="gap:0.5em;--size:12em;">
  {%- for item in meta.socials -%}
  <a href="{{item.url}}" class="btn social-btn">
  <img
      src="/public/icons/pixy/{{item.name | slugify}}.png" alt="" aria-hidden="true" width="38" height="38" eleventy:ignore class="classic-btn" >{{item.name}}</a>
  {%- endfor -%}
</div>

<a href="https://reduxflakes.atabook.org/" style="color:#A6E3A1"><b>Sign my guestbook!</b></a>

</div>

Follow me on <a href="https://nekoweb.org/follow/reduxflakes">Nekoweb</a> & <a
      href="https://neocities.org/site/reduxflakes">Neocities</a></p>

### Friends

<details>
  <summary><p>Click to toggle the buttons! <small>(bandwidth warning!)</small></p></summary>
  <div class="auto-flex button-grid">
    {%- for button in buttons.friends -%}
    {%- if button.img -%}
    <a href="{{button.url}}" title="{{button.title}}" class="btn"><img src="
    {%- if button.externalimg -%}{{button.img}}{%- else -%}/public/buttons/friends/{{button.img}}{%-endif-%}"
        alt="{{button.title}} button" width="88" height="31" class="classic-btn"></a>
    {%- else -%}
    <a href="{{button.url}}" style="min-width:88px;min-height:31px;" class="btn">{{button.title}}</a>
    {%- endif -%}
    {% endfor %}
  </div>
</details>

### Sites I like / Inspired on

<details>
  <summary>
  <p>Click to toggle the buttons! <small>(bandwidth warning!)</small></p></summary>
  <div class="auto-flex button-grid">
    {%- for button in buttons.likes -%}
    {%- if button.img -%}
    <a href="{{button.url}}" title="{{button.title}}" class="btn"><img src="/public/buttons/{{button.img}}"
        alt="{{button.title}} button" width="88" height="31" class="classic-btn" {%- if ".gif" in button.img -%}
        loading="lazy" decoding="async"  {%- endif -%}></a>
    {%- else -%}
    <a href="{{button.url}}" style="min-width:88px;min-height:31px;" class="btn">{{button.title}}</a>
    {%- endif -%}
    {% endfor %}
  </div>
</details>

### Link me!

If you like my site, you can link me by using the buttons below!

<div class="auto-flex">

<img src="/public/buttons/reduc_anim.gif" alt="Redux animated button" class="classic-btn" loading="lazy"
    decoding="async">

<img src="/public/buttons/reduc.webp" alt="Redux static button" class="classic-btn" loading="lazy"
    decoding="async">

</div>

### Fanlists

<a href="https://fanlistings.melankorin.net/radiohead/" title="Against Demons, the Radiohead fanlisting" aria-label="Against Demons, the Radiohead fanlisting"><img src="/public/badges/against_demons_fanlist.png" alt="Badge for the Against Demons Radiohead fanlist"></a>

## {% lucide "link" %} Webrings

Some webrings might be missing because JS is currently disabled/not working. [- .noscript-alert -]

{% if env.host == "neocities" or "all" %}

### 🌐 NeoSSG Webring [- .noscript -]

<div class="noscript" id="neossg">
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-variables.js" defer async></script>
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-widget.js" defer async></script>
</div>

### 💽 Null Webring [- .noscript -]

<div class="auto-flex noscript">
  <script src="https://nuthead.neocities.org/ring/ring.js" defer async></script>
</div>

### 🤖 No AI

<div class="auto-flex" style="align-items:center;">
  <a href="https://baccyflap.com/noai/?prv&s=rzr" target="_top" title="Go back">{% lucide "arrow-left" %}</a>
  <a href="https://baccyflap.com/noai" target="_blank" rel="noopener"> no ai </a>
  <a href="https://baccyflap.com/noai/?nxt&s=rzr" target="_top" title="Next up">{% lucide "arrow-right" %}</a>
</div>

{% elif env.host == "nekoweb" or "all" %}

### 💧 Bucket Webring

<div class="auto-flex" style="align-items:center;">
  <a href="https://webring.bucketfish.me/redirect.html?to=prev&name=reduxflakes" target="_top" title="Go back">{% lucide
    "arrow-left" %}</a>
  <a href="https://webring.bucketfish.me" target="_blank" rel="noopener"> bucket </a>
  <a href="https://webring.bucketfish.me/redirect.html?to=next&name=reduxflakes" target="_top" title="Next up">{% lucide
    "arrow-right" %}</a>
</div>

### 💻 SSGRing

<div class="auto-flex" style="align-items:center;">
  <a href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=reduxflakes&way=prev" title="Go back">{%
    lucide "arrow-left" %}</a>
  <a href="https://jbcarreon123.nekoweb.org/webrings/ssgring" target="_blank" rel="noopener"> SSGRing </a>
  <a href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?way=rand" title="Random">{% lucide "shuffle"
    %}</a>
  <a href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=reduxflakes&way=next" target="_top"
    title="Next up">{% lucide "arrow-right" %}</a>
</div>

{% endif %}
