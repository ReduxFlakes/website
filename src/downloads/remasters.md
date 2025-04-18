---
title: Remastering Work
description: Directory containing downloads for the remastering work I uploaded to YouTube (+ new content)
icon: pixelophilia-speaker
notice:
  type: info
  content: The donwload center is still a work in progress so please expect bugs or missing content.
eleventyNavigation:
  key: Music Remasters
  parent: Downloads
---

<table>
  <caption>Available remasters (from most recent to oldest)</caption>
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
  <tr>
      <td>{{item.title}}</td>
      <td>{{item.description}}</td>
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

<section class="stack">

## Legends

- Mirror 1 = File.Garden
- Mirror 2 = Mega.NZ
  
</section>