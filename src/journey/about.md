---
title: About
description: Information about me and this website
icon: farm-user
eleventyNavigation:
  key: About
  parent: Origins
  order: 0
---

## The webmaster

Hi, my name is ReduxFlakes, also known as reduc to close friends. I'm a CS student from Portugal that likes music, programming (I'm bad at it though), design (web and software), gaming, and retro tech stuff. I'm an advocate on privacy, FLOSS and freedom of speech.

I mostly do websites, design mockups of software, music remastering (that I upload to [YouTube](https://www.youtube.com/@reduxflakes)), and other projects that I'll never released because I'm too ambitious and I procrastinate a lot :p.

If you want to know what I'm up to check either my [now page](/now) or [my socials](/#on-the-web)!

{% if env.host == "neocities" %}

### Hotline Webring 💽

<div class="auto-flex" style="align-items:center;">
<a href="https://hotlinewebring.club/reduxflakes/previous" title="Go back">{% lucide "arrow-left" %}</a>
<a href="https://hotlinewebring.club/" target="_blank" rel="noopener"> hotline webring </a>
<a href="https://hotlinewebring.club/reduxflakes/next" title="Next up">{% lucide "arrow-right" %}</a>
</div>

{%endif%}

## About the website

### Inspiration

<p style="text-align:center;">These are all the websites that inspired me to create my site, from design to content, so thank you everyone on the list for <i>helping me</i>, go visit them all!</p>

<div  class="auto-flex button-grid">
  {% for button in buttons.likes %}
  {% if button.url %}
    <a href="{{button.url}}" title="{{button.title}}"><img src="/public/img/buttons/{{button.img}}" alt="{{button.title}} button" width="88" height="31" class="classic-btn" loading="lazy" decoding="async" eleventy:ignore ></a>
  {% else %}
  <a href="{{button.url}}" >{{button.title}}</a>
  {% endif %}
  {% endfor %}
</div>




### Tools

> Need to move this to the colophon page

- [Eleventy](https://www.11ty.dev/) - The SSG I use to build this website, helps on cutting the copy/paste and makes things more consistent (great for someone who is perfectionist).
- [Lucide](https://lucide.dev/) - The icons I use across the website.



## License

This website content, unless specified, is licensed under [Creative Commons 4.0 DEED](https://creativecommons.org/licenses/by/4.0/deed.en) and it's source code [available on GitHub](https://github.com/ReduxFlakes/website) is licensed under [GPL-2.0 Only](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html).

### Attribution

If you want to reuse a part of content or source code of this website please do add an attribution to it's origin either directly on the code or on a credit section of your website/application where that code was used, below is an example of how this can be done.

{% if env.host == "neocities" %}
{% set website_host = "https://reduxflakes.neocities.org" %}
{% else %}
{% set website_host = "https://reduxflakes.nekoweb.org" %}
{% endif %}

> This following content/code comes from <a href="{{website_host}}/page_to_the_content">{{website_host}}</a> by the author: ReduxFlakes, and is licensed under [Creative Commons 4.0 DEED](https://creativecommons.org/licenses/by/4.0/deed.en)/[GPL-2.0 Only](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html).
