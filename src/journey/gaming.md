---
title: Gaming
description: Showcasing all the games I love
parent: Origins
order: 3
icon: farm-joystick
marker: ["Recommended"]
---

## In Rotation

Games that I'm actively playing (on a weekly basis)

<div class="auto-grid gaming-shelf" style="--size:120px">
{% for item in games.inRotation %}

<a data-name="{{item.title}}" aria-label="{{item.title}}" href="{{item.store_link}}">
<img src="/public/games/{{item.banner}}" alt="{{item.title}} banner" eleventy:ignore>
</a>

{% endfor %}

</div>

## Completed

Games that I've finished

<div class="auto-grid gaming-shelf" style="--size:120px">
{% for item in games.complete %}

<a data-name="{{item.title}}" aria-label="{{item.title}}" href="{{item.store_link}}">
<img src="/public/games/{{item.banner}}" alt="{{item.title}} banner" eleventy:ignore>
</a>

{% endfor %}

</div>
