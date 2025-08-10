---
title: Remastering Work
description: Directory containing downloads for the remastering work I uploaded to YouTube (+ new content)
icon: pixelophilia-speaker
notice:
  type: info
  content: The donwload center is still a work in progress so please expect bugs or missing content.
key: Music Remasters
parent: Downloads
---

<div class="table-overflow">
<table style="min-width:700px">
  <caption style="text-align:left">Currently available (from most recent to oldest)</caption>
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Notes</th>
      <th scope="col">Length</th><th scope="col">Size</th>
      <th scope="col">Format</th>
      <th scope="col">YT Link</th>
      <th scope="col">Downloads</th>
    </tr>
  </thead>
  <tbody>
  {%- for item in downloads.remasters | reverse -%}
  <tr id="{{item.title | slugify }}">
  {%- if not item.description -%}
      <td colspan="2">{{item.title}}</td>  
  {%- else -%}
      <td>{{item.title}}</td>
      <td>{{item.description}}</td>
  {%- endif -%}
      <td>{{item.time}}</td>
      <td>{{item.size}}</td>
      <td>{{item.format}}</td>
      <td><a href="{{item.youtube}}">View</a></td>
      <td>
      {% for source in item.sources %}
        <a href="{{source}}">Mirror {{loop.index}}</a>
      {%- endfor %}
      </td>
      </tr>
  {%- endfor -%}
  </tbody>
</table>
</div>

<section class="stack">

## About mirror numbers

- Mirror 1 = File Garden
- Mirror 2 = Mega.NZ

</section>
