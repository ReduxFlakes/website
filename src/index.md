---
layout: base
hero:
  description: Software developer and designer from Portugal
---

## Welcome

I'm ReduxFlakes (or reduc for close friends), I'm a developer and designer from Portugal that focuses on privacy, simplicity, and performance. This is my personal website where I talk about various things from life, ongoing projects, musics, and resource & guides. [Learn more about me](/about)

> Remember, a personal site is never finished, so expect things not working or returning not found!

## Latest Post

{% for post in collections.posts | limit(1) %}
{{ component('post-listing', {title: post.data.title, date: post.date, description: post.data.description, href: post.url, subheading: true }) }}
{% endfor %}

## Links

### Socials

<div class="auto-flex button-grid">
{%- for item in meta.socials -%}
  <a href="{{item.url}}" title="{{item.name}}">
  <img src="/public/img/buttons/general/{{item.img}}" alt="{{item.name}}" class="classic-btn" width="88" height="31">
  </a>
{%- endfor -%}
<a href="https://reduxflakes.atabook.org/" style="font-size:1.0125em;"><b>Sign my guestbook!</b></a>
<p>Follow me on <a href="https://nekoweb.org/follow/reduxflakes">Nekoweb</a> | <a href="https://neocities.org/site/reduxflakes">Neocities</a></p>
</div>

### Friends

<div  class="auto-flex button-grid">
  {% for button in buttons.friends %}
  {% if button.img %}
      <a href="{{button.url}}" title="{{button.title}}"><img src="/public/img/buttons/friends/{{button.img}}" alt="{{button.title}} button" width="88" height="31" class="classic-btn" loading="lazy" decoding="async" eleventy:ignore ></a>
  {% else %}
        <a href="{{button.url}}" style="display:block;text-align:center;min-width:88px;">{{button.title}}</a>
  {% endif %}
{% endfor %}
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
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-variables.js"></script>
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-widget.js"></script>
</div>

### 💽 Null Webring

<div class="auto-flex">

<script src="https://nuthead.neocities.org/ring/ring.js"></script>

</div>

### 🤖 No AI

<div class="auto-flex" style="align-items:center;">
<a href="https://baccyflap.com/noai/?prv&s=rzr" target="_top" title="Go back">{% lucide "arrow-left" %}</a>
<a href="https://baccyflap.com/noai" target="_blank" rel="noopener"> no ai </a>
<a href="https://baccyflap.com/noai/?nxt&s=rzr" target="_top" title="Next up">{% lucide "arrow-right" %}</a>
</div>

{% else %}

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

{% endif %}

## Updates

<details>
<summary>Open changelog</summary>
<div class="scroll stack">

{%- for entry in updates -%}

  <div class="stack" style="--spacer: 0.5em;">
    {%- if loop.first -%}
    <p><b>
      <time datetime="{{ entry.date | dateToISO }}">{{ entry.date | formatDateTime }}</time>
      </b></p>
    {%- else -%}
    <p>
      <time style="color:var(--foreground-subtle);" datetime="{{ entry.date | dateToISO }}">{{ entry.date | formatDateTime }}</time>
      </p>
    {%- endif -%}
    <p>{{ entry.content | safe }}</p>
    <hr>
  </div>
{%- endfor -%}
</div>
</details>
