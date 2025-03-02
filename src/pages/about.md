---
title: About
description: "Information about me and this website"
---

## The webmaster

Hi, my name is ReduxFlakes, also known as reduc to close friends. I'm a CS student from Portugal that likes old stuff. The main things I love is music, programming (I'm bad at it though), design (web and software), and gaming. I'm an advocate on privacy and FLOSS.

I mostly work with web stuff, design mockups of operating systems and software, music remastering (that I upload to [YouTube](https://www.youtube.com/@reduxflakes)), and other projects that I'll never released because I'm too ambitious and I procrastinate a lot :p.

If you like my work and have the option to support me monetary, you can donate me trough my Ko-Fi page using the button below :D.

<a href='https://ko-fi.com/K3K519YBGW' target='_blank' style="border-radius:12px"><img height='36' style='border:0px;height:36px;' src='/public/img/buttons/general/kofi_orange.webp' alt='Buy Me a Coffee at ko-fi.com'   loading="lazy" decoding="async" eleventy:ignore/></a>

## About the website

### Inspiration

<p style="text-align:center;">These are all the websites that inspired me to create this site as is in terms of layout, design, and content, so thank you to everyone on this list, go visit them all!</p>

<div  class="auto-flex">
  {% for button in buttons.likes %}
    <a href="{{button.url}}" title="{{button.title}}"><img src="/public/img/buttons/{{button.img}}" alt="{{button.title}} button" width="88" height="31" class="classic-btn" loading="lazy" decoding="async" eleventy:ignore ></a>
  {% endfor %}
</div>

### Credits

- [Eleventy](https://www.11ty.dev/) - The SSG of the site, helps making things more consistent and cuts on copy and pasting.
- [Lucide](https://lucide.dev/) - The icons I used across the website.

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
