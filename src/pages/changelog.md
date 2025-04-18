---
title: Changelog
description: Check all the updates and changed the site has suffered
eleventyNavigation:
  for: Footer
---

{% for entry in updates %}

{% if loop.first %}
  <p><b class="flex-h"><img src="/public/icons/farm-new.png" alt="" aria-visibility="hidden" class="icon"> <time datetime="{{ entry.date | dateToISO }}">{{ entry.date | formatDateTime }}<time></b></p>
{% else %}  
<p style="color:var(--foreground-subtle)"><time datetime="{{ entry.date | dateToISO }}">{{ entry.date | formatDateTime }}<time></b></p>

{% endif %}

<p>{{ entry.content | safe }}</p>
{% if entry.list %}
  <p>Some of the changes:</p>
    <ul style="padding:0 2rem;">
    {% for item in entry.list %}
      <li>{{item}}</li>
    {% endfor %}
    </ul>
  {% endif %}
</p>

<hr>

{% endfor %}