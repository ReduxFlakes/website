---
title: Changelog
description: Check all the updates and changes the site has suffered
for: Footer
order: 0
---

{% for entry in updates %}

{% if loop.first %}

  <p><b class="flex-h"><img src="/public/icons/farm-new.png" alt="" aria-visibility="hidden" class="icon"> <time datetime="{{ entry.date | dateToISO }}">{{ entry.date | formatDateTime }}<time></b></p>
{% else %}  
<p style="color:var(--foreground-muted)"><time datetime="{{ entry.date | dateToISO }}">{{ entry.date | formatDateTime }}<time></b></p>

{% endif %}

{{ entry.content | safe }}
{% if entry.list %}

  <p><b>Changes:</b></p>
    <ul style="padding:0 2rem;">
    {% for item in entry.list %}
      <li>
{{item | safe}}
      </li>
    {% endfor %}
    </ul>
  {% endif %}
</p>

<hr>

{% endfor %}
