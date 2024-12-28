---
title: About
description: "information about me and this website"
theme:
  primary: "hsl(238, 48.50%, 12.90%)"
  secondary: "hsl(197, 69.70%, 12.90%)"
  text: "hsl(219, 73.80%, 74.50%)"
tabby: true
---

## The webmaster

Hi, my name is ReduxFlakes also known as reduc to close friends. I'm a CS student from Portugal that likes old stuff. The main things I love is music, programming (I'm bad though), design, and gaming. I'm an advocate on privacy and FLOSS.

I do mostly web design, mockups of operating systems and software, music remastering (that I upload to [YouTube]()), and other projects that I'll never released because I'm too ambitious and I procrastinate a lot :p.

## About the website

<div class="tabs-container">
  <ul data-tabs>
    <li><a data-tabby-default href="#inspiration">Inspiration</a></li>
    <li><a href="#credits">Credits</a></li>
  </ul>
  <div id="inspiration" class="tabby-content">
    <p style="text-align:center;">These are all the websites that inspired me to create this site as is in terms of layout, design, and content, so thank you to everyone on this list, go visit them all!</p>
    <br>
    <div  class="button-grid">
    {% for button in buttons.likes %}
      <a href="{{button.url}}" title="{{button.title}}"><img src="/public/img/buttons/{{button.img}}" alt="{{button.title}} button" width="88" height="31" class="classic-button" loading="lazy"></a>
    {% endfor %}
    </div>
  </div>
  <div id="credits" class="tabby-content">
  
  * [Eleventy]() - The SSG of the site, helps making things more consistent and cuts of copy and pasting.
  * [Lucide]() - The icons I used across the website (excluding the ones of the navbar).
  
  </div>
</div>
