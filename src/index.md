---
key: Home
description: "Software developer and designer from Portugal"
layout: home.njk
content_css: false
---

## Hi!

I'm ReduxFlakes, a developer and designer from Portugal with a focus on privacy and minimalism. This is my personal space on the web where I share most of the stuff I do. You can find my blog, current projects and ideas, downloads, and other goodies and extras! If you want to know more about me, check the [about page](/about). See ya!

## Latest Blog Post

{% for post in collections.posts | limit(1) %}
{{ component('post-listing', {title: post.data.title, date: post.date, description: post.data.description, href:
post.url, subheading: true }) }}
{% endfor %}

---

## Popular Projects

<div class="auto-grid" style="--size: 250px;">
{%- for item in projects.active | limit(1) -%}
 {%- card item -%}
{%- endfor -%}
{%- for item in projects.involved | limit(1) -%}
  {%- card item -%}
{%- endfor -%}
</div>

---

## Links

### Socials

<div class="auto-grid button-grid" style="gap:1rem;--size:72px;">
  {%- for item in meta.socials -%}
  <a href="{{item.url}}" style="display:flex;flex-direction:column;align-items:center;" class="btn"><img
      src="/public/icons/pixy/{{item.name | slugify}}.png" alt="" aria-hidden="true" class="classic-btn" loading="lazy"
      decoding="async" eleventy:ignore>{{item.name}}</a>
  {%- endfor -%}
</div>

<a href="https://reduxflakes.atabook.org/" style="color:#A6E3A1"><b>Sign my guestbook!</b></a>

</div>

Follow me on <a href="https://nekoweb.org/follow/reduxflakes">Nekoweb</a> & <a
      href="https://neocities.org/site/reduxflakes">Neocities</a></p>

### Friends

<details>
  <summary>Click to load buttons</summary>
  <div class="auto-flex button-grid">
    {%- for button in buttons.friends -%}
    {%- if button.img -%}
    <a href="{{button.url}}" title="{{button.title}}" class="btn"><img src="/public/buttons/friends/{{button.img}}"
        alt="{{button.title}} button" width="88" height="31" class="classic-btn" {%- if ".gif" in button.img or button.eleventy == "ignore" -%}
        loading="lazy" decoding="async" eleventy:ignore {%- endif -%}></a>
    {%- else -%}
    <a href="{{button.url}}" style="min-width:88px;min-height:31px;" class="btn">{{button.title}}</a>
    {%- endif -%}
    {% endfor %}
  </div>
</details>

### Sites I like / Inspired on

<details>
  <summary>Click to load buttons</summary>
  <div class="auto-flex button-grid">
    {%- for button in buttons.likes -%}
    {%- if button.img -%}
    <a href="{{button.url}}" title="{{button.title}}" class="btn"><img src="/public/buttons/{{button.img}}"
        alt="{{button.title}} button" width="88" height="31" class="classic-btn" {%- if ".gif" in button.img -%}
        loading="lazy" decoding="async" eleventy:ignore {%- endif -%}></a>
    {%- else -%}
    <a href="{{button.url}}" style="min-width:88px;min-height:31px;" class="btn">{{button.title}}</a>
    {%- endif -%}
    {% endfor %}
  </div>
</details>

### Fanlists

<a href="https://fanlistings.melankorin.net/radiohead/" title="Against Demons, the Radiohead fanlisting" aria-label="Against Demons, the Radiohead fanlisting"><img src="/public/badges/against_demons_fanlist.png" alt="Badge for the Against Demons Radiohead fanlist"></a>

### Link me!

If you like my site, you can link me by using the buttons below!

<div class="auto-flex">

<img src="/public/buttons/reduc_anim.gif" alt="Redux animated button" class="classic-btn" loading="lazy"
    decoding="async" eleventy:ignore>

<img src="/public/buttons/reduc.webp" alt="Redux static button" class="classic-btn" loading="lazy"
    decoding="async">

</div>

---

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

### 🎨 palette webring

<webring-container>
  <config key="type" value="gruvbox-dark"></config>
  <config key="font" value="Overused Grotesk, Arial, sans-serif"></config>
  <config key="fill" value="true"></config>
  <script src="https://palette.nekoweb.org/pmoring.js" defer async data-type="catppuccin-mocha"/>
</webring-container>

{% endif %}

<hr>

## Latest Update

{% for entry in updates | limit(1) -%}

  <p><b class="flex-h"><time
        datetime="{{ entry.date | dateToISO }}">{{ entry.date | formatDateTime }}<time></b></p>

  <p>{{ entry.content | safe }}</p>
  {%- if entry.list -%}
  <p><b>Changes:</b></p>
  <ul style="padding:0 2rem;">
    {%- for item in entry.list -%}
    <li>{{item | safe}}</li>
    {%- endfor -%}
  </ul>
  {%- endif -%}
  </p>
  {%- endfor %}

<small>Looking for older updates? Check the [changelog page](/changelog)!</small>
