---
title: Blogroll
description: Directory of sites that I read & recommend
icon: farm-feed-find
parent: Resources
isRefresh: false
order: 2
---

<dl>
{% for item in blogroll %}
  <dt><a href="{{item.url}}">{{item.title}}</a> - [<a href="{{item.feed}}">Feed</a>]</dt>
  <dd>{{item.description}}</dd>
{% endfor %}
</dl>

You can load this blogroll on your preferred feed reader by using the OPML feed below.

<a href="/blogroll.opml" class="button">
<img src="/public/buttons/general/80-opml.png" alt="" aria-hidden="true" style="display:inline;image-rendering:pixelated;" > OPML Feed
</a>
