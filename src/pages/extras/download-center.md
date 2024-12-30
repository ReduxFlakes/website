---
title: Download Center
description: Download random stuff made either by me or other nice people
sort_level: 1
---

<div class="notice notice--warning">
<span class="lucide--traffic-cone"></span>
<p>Not sure how to make this so it's still empty</p>
</div>

<div class="button-grid">
            {% for btn in buttons.software %}
                <img src="/public/img/buttons/general/{{btn.img}}" alt="{{btn.title}} button"
                    width="88px" height="31px" loading="lazy" class="classic-button" title="{{btn.title}}">
            {% endfor %}
</div>
