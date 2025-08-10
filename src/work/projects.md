---
title: Projects
description: "Personal projects (active, archived, and ideas)"
icon: farm-components
parent: Work
order: 2
marker: ["Recommended"]
---

## Active

{% for item in projects.active %}

  <section class="card stack" style="--spacer:0.5em;margin-top:1rem;">
    <h3>{{ item.title }}</h3>
{%- if item.tags -%}
    <div class="flex-h">{%- for tag in item.tags -%}<span class="label">{{tag}}</span>{%- endfor -%}</div>
    {%- endif -%}
      <p>
          {{item.description }}
      </p>
        {% for action in item.actions %}
          <a href="{{action.url}}" class="button">{{action.label}}</a>
        {% endfor %}
  </section>
{% endfor %}

## Involed In

{% for item in projects.involved %}

  <section class="card stack" style="--spacer:0.5em;margin-top:1rem;">
    <h3>{{ item.title }}</h3>
{%- if item.tags -%}
    <div class="flex-h">{%- for tag in item.tags -%}<span class="label">{{tag}}</span>{%- endfor -%}</div>
    {%- endif -%}
      <p>
          {{item.description }}
      </p>
        {% for action in item.actions %}
          <a href="{{action.url}}" class="button">{{action.label}}</a>
        {% endfor %}
  </section>
{% endfor %}

## Ideas

{% for item in projects.ideas %}

  <section class="card stack" style="--spacer:0.5em;margin-top:1rem;">
    <h3>{{ item.title }}</h3>
{%- if item.tags -%}
    <div class="flex-h">{%- for tag in item.tags -%}<span class="label">{{tag}}</span>{%- endfor -%}</div>
    {%- endif -%}
      <p>
          {{item.description }}
      </p>
        {% for action in item.actions %}
          <a href="{{action.url}}" class="button">{{action.label}}</a>
        {% endfor %}
  </section>
{% endfor %}

## Inactive

> This section is still being worked on and thus I haven't readded the links

{% for item in projects.inactive %}

  <section class="card stack" style="--spacer:0.5em;margin-top:1rem;">
    <h3>{{ item.title }}</h3>
{%- if item.tags -%}
    <div class="flex-h">{%- for tag in item.tags -%}<span class="label">{{tag}}</span>{%- endfor -%}</div>
    {%- endif -%}
      <p>
          {{item.description }}
      </p>
        {% for action in item.actions %}
          <a href="{{action.url}}" class="button">{{action.label}}</a>
        {% endfor %}
  </section>
{% endfor %}
