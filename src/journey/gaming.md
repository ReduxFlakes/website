---
title: Gaming
description: Showcasing all the games I love
parent: Origins
order: 3
icon: farm-joystick
---

## In Rotation

Games that I'm actively playing (on a weekly basis)

<div class="auto-grid gaming-shelf" style="--size:150px">
{% for item in games.inRotation %}

<a href="{{item.store_link}}">
<img src="/public/games/{{item.banner}}" alt="{{item.title}} banner" eleventy:ignore>
</a>

{% endfor %}

</div>

## Completed

Games that I've finished

<div class="auto-grid gaming-shelf" style="--size:150px">
{% for item in games.complete %}

<a href="{{item.store_link}}">
<img src="/public/games/{{item.banner}}" alt="{{item.title}} banner" eleventy:ignore>
</a>

{% endfor %}

</div>
