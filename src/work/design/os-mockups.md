---
title: OS Mockups
description: Mockups of non existing operating systems
parent: Design
layout: base
order: 1
isRefresh: true
util:
  vwsize: "full"
  gallery: true
---

{% for year, cat in mockups | dictsort | reverse %}

## {{year}}

<auto-grid class="gallery">

{%- for item in cat -%}
<a href="/public/mockups{{item.img}}" aria-label="{{item.name}}" data-name="{{item.name}}" class="glightbox card-image" data-description="{{item.name}} - {{item.year}}" data-type="image">
<img src="/public/mockups{{item.img}}" alt="{{item.name}}" width="500">
</a>
{%- endfor -%}

</auto-grid>

{%- endfor %}
