---
title: Home
hero:
  title: "Welcome!"
  description: "I'm ReduxFlakes (or reduc for close friends), I'm a developer and designer from Portugal that focuses on privacy, simplicity, and performance. This is my personal website where I talk about various things from life, ongoing projects, musics, and resource & guides."
  actions:
    - label: See Projects
      link: "#projects"
    - label: More About Me!
      link: about
      type: minimal
collection: main
order: 0
---

## Latest Post

{% for post in collections.posts | limit(1) %}
{{ component('post-listing', {title: post.data.title, date: post.date, description: post.data.description, href: post.url, subheading: true }) }}
{% endfor %}

---

## Projects

<div class="auto-grid">

<section class="card">
<h3>SurfScape</h3>
<p class="secondary">A organisation with the main purpose of developing ethical software and services</p>
</section>
<section class="card">
<h3>Celer</h3>
<p class="secondary">A organisation with the main purpose of developing ethical software and services</p>
</section>
<section class="card">
<h3>_outofbnds_</h3>
<p class="secondary">A organisation with the main purpose of developing ethical software and services</p>
</section>
</div>

### Friends

<details>
<summary>Click to load buttons</summary>
<div class="button-grid steel-flex">
  {%- for button in buttons.friends -%}
  {%- if button.img -%}
      <a href="{{button.url}}" title="{{button.title}}"><img src="/public/img/buttons/friends/{{button.img}}" alt="{{button.title}} button" width="88" height="31" class="classic-btn" {%- if ".gif" in button.img -%} loading="lazy" decoding="async" eleventy:ignore {%- endif -%}></a>
  {%- else -%}
        <a href="{{button.url}}" style="min-width:88px;min-height:31px;">{{button.title}}</a>
  {%- endif -%}
{% endfor %}
</div>
</details>

### Sites I like / Inspired on

<details>
<summary>Click to load buttons</summary>
<div class="button-grid steel-flex">
  {%- for button in buttons.likes -%}
  {%- if button.img -%}
      <a href="{{button.url}}" title="{{button.title}}"><img src="/public/img/buttons/{{button.img}}" alt="{{button.title}} button" width="88" height="31" class="classic-btn" {%- if ".gif" in button.img -%} loading="lazy" decoding="async" eleventy:ignore {%- endif -%}></a>
  {%- else -%}
        <a href="{{button.url}}" style="min-width:88px;min-height:31px;">{{button.title}}</a>
  {%- endif -%}
{% endfor %}
</div>
</details>

## Links

<div class="steel-flex" style="font-size:1.075em">
<a href="https://reduxflakes.atabook.org/" style="color:#7FFF00"><b>Sign my guestbook!</b></a>
<p>Follow me on <a href="https://nekoweb.org/follow/reduxflakes">Nekoweb</a> & <a href="https://neocities.org/site/reduxflakes">Neocities</a></p>
</div>

### Link me!

If you like my site, you can link me by using the buttons below!

<div class="auto-flex">

<img src="/public/img/buttons/reduc_anim.gif" alt="Redux animated button" class="classic-btn" loading="lazy" decoding="async" eleventy:ignore >

<img src="/public/img/buttons/reduc.webp" alt="Redux static button" class="classic-btn" loading="lazy" decoding="async">

</div>

## Webrings

{% if env.host == "neocities" %}

### 🌐 NeoSSG Webring

<div id="neossg">
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-variables.js" defer async></script>
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-widget.js" defer async></script>
</div>

### 💽 Null Webring

<div class="auto-flex">

<script src="https://nuthead.neocities.org/ring/ring.js" defer async></script>

</div>

### 🤖 No AI

<div class="auto-flex" style="align-items:center;">
<a href="https://baccyflap.com/noai/?prv&s=rzr" target="_top" title="Go back">{% lucide "arrow-left" %}</a>
<a href="https://baccyflap.com/noai" target="_blank" rel="noopener"> no ai </a>
<a href="https://baccyflap.com/noai/?nxt&s=rzr" target="_top" title="Next up">{% lucide "arrow-right" %}</a>
</div>

{% elif env.host == "nekoweb" %}

### 💧 Bucket Webring

<div class="auto-flex" style="align-items:center;">
<a href="https://webring.bucketfish.me/redirect.html?to=prev&name=reduxflakes" target="_top" title="Go back">{% lucide "arrow-left" %}</a>
<a href="https://webring.bucketfish.me" target="_blank" rel="noopener"> bucket </a>
<a href="https://webring.bucketfish.me/redirect.html?to=next&name=reduxflakes" target="_top" title="Next up">{% lucide "arrow-right" %}</a>
</div>

### 💻 SSGRing

<div class="auto-flex" style="align-items:center;">
<a href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=reduxflakes&way=prev" title="Go back">{% lucide "arrow-left" %}</a>
<a href="https://jbcarreon123.nekoweb.org/webrings/ssgring" target="_blank" rel="noopener"> SSGRing </a>
<a href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?way=rand" title="Random">{% lucide "shuffle" %}</a>
<a href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=reduxflakes&way=next" target="_top" title="Next up">{% lucide "arrow-right" %}</a>
</div>

### 🎨 palette webring

<webring-container>
    <config key="type" value="gruvbox-dark"></config>
    <config key="font" value="Overused Grotesk, Arial, sans-serif"></config>
    <config key="fill" value="true"></config>
    <script src="https://palette.nekoweb.org/webring.js" defer async></script>
</webring-container>

{% endif %}

<section class="stack">

## Latest Update

{% for entry in updates | limit(1) %}

<p><b class="flex-h"><img src="/public/icons/farm-new.png" alt="" aria-visibility="hidden" class="icon"> <time datetime="{{ entry.date | dateToISO }}">{{ entry.date | formatDateTime }}<time></b></p>

<p>{{ entry.content | safe }}</p>
{% if entry.list %}
  <p><b>Changes:</b></p>
    <ul style="padding:0 2rem;">
    {% for item in entry.list %}
      <li>{{item | safe}}</li>
    {% endfor %}
    </ul>
  {% endif %}
</p>
{% endfor %}

<hr>

Looking for older updates? Check the [changelog page](/changelog)!

</section>