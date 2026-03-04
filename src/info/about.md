---
title: About
description: Information about me and this website
icon: farm-user
key: About
parent: Info
modified: 2026-02-28 13:17:00
order: 0
util:
  prism: true
---

## The webmaster

Hi, my name is ReduxFlakes. I'm a software developer and designer from Portugal. I love music, programming (I'm bad at it though), design (web and software), gaming, and retro tech. I'm an advocate for privacy (although I'm not the most hardcore), FLOSS and freedom of speech.

I mostly do websites, mockups of software, music remastering (that I upload to [YouTube](https://www.youtube.com/@reduxflakes)), and other projects that I'll never released because I'm too ambitious and I procrastinate a lot :P.

If you want to know what I'm up to, check my [now page](/now) or [my socials](/#socials)!

{% if env.host == "neocities" or "all" %}

### Hotline Webring 💽

<div class="auto-flex" style="align-items:center;">
<a href="https://hotlinewebring.club/reduxflakes/previous" title="Go back" class="button button--icon">{% lucide "arrow-left" %}</a>
<a href="https://hotlinewebring.club/" target="_blank" rel="noopener" class="button"> hotline webring </a>
<a href="https://hotlinewebring.club/reduxflakes/next" title="Next up" class="button button--icon">{% lucide "arrow-right" %}</a>
</div>

{%endif%}

## About the website

### Inspiration

<p style="text-align:center;">These are all the websites that inspired me to create my site, from design to content, so thank you everyone on the list for <i>helping me</i>, go visit them all!</p>

<div  class="auto-flex button-grid">
  {%- for button in buttons.likes -%}
  {%- if button.url -%}
    <a href="{{button.url}}" title="{{button.title}}" class="btn"><img src="/public/buttons/{{button.img}}" alt="{{button.title}} button" width="88" height="31" class="classic-btn" loading="lazy" decoding="async"></a>
  {%- else -%}
  <a href="{{button.url}}" class="btn" >{{button.title}}</a>
  {%- endif -%}
  {%- endfor -%}
</div>

### Credits

- [Eleventy](https://www.11ty.dev/) - The SSG I use to build this website, helps on cutting the copy/paste and makes things more consistent (great for someone who is perfectionist).
- [Inter by rsms](https://rsms.me/inter/) - The main font I use on the site.

#### Icons

- [Lucide](https://lucide.dev/) - The flat icons used across the website.

The following icons are the ones found in the nav bar and respective menus.

- Farm Fresh Icons :: Fatcow Web Hosting » CC Attribution 4.0 (https://fatcow.com/free-icons)
- Koloria Icons Pack :: Graphic Rating (Andy Gongea) » Freeware
- Sfeers Icons Pack :: emey87 » CC Attribution-Noncommercial-No Derivate 4.0
- Pixelophilia Icons :: omercetin » CC Attribution-Noncommercial-No Derivate 4.0

#### CSS & other code

- Opacity effect when hovering buttons - Original idea and code based of [jbcarreon123](https://jbc.lol/)

- Zoom effect when hovering buttons - Code based of [Daudix](https://daudix.one/)

- Music player was made by me, [source code available on GitHub](https://github.com/ReduxFlakes/csmpjs)

- Background moving animation - Code based of [bilaii](https://bilaii.nekoweb.org/)

## License

This website content, unless specified, is licensed under [Creative Commons 4.0 DEED](https://creativecommons.org/licenses/by/4.0/deed.en) and it's source code, unless specified, is licensed under [GPL-2.0 Only](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html).

<a href="https://github.com/ReduxFlakes/website" class="button">{% lucide "git-branch" %} <span>View source code (GitHub)</span></a>

### Attribution

If you want to reuse a part of content or code of this website please do add an attribution to it's origin either directly on the code or on a credit section of your website/application where that code was used, below is an example of how this can be done.

{% if env.host == "neocities" %}
{% set website_host = "https://reduxflakes.neocities.org" %}
{% else %}
{% set website_host = "https://reduxflakes.nekoweb.org" %}
{% endif %}

> This following content/code was taken from <a href="{{website_host}}">{{website_host}}</a>.<br/> It's licensed under [Creative Commons 4.0 DEED](https://creativecommons.org/licenses/by/4.0/deed.en)/[GPL-2.0 Only](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html).

{% highlight "html" %}

<p>This following content/code was taken from <a href="https://reduxflakes.neocities.org">https://reduxflakes.neocities.org</a>.
It's licensed under <a href="https://creativecommons.org/licenses/by/4.0/deed.en">Creative
Commons 4.0 DEED</a>/<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html">GPL-2.0 Only</a>.</p>

{% endhighlight %}
