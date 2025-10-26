---
title: Services
description: Live services, public APIs, and open comissions
icon: farm-appview
parent: Work
order: 2
---

## Last.FM Proxy

I've decided to make a simple Last.FM proxy that fetches the current song playing and the last 5 songs that played from an user. The main reason behind it was to make the data model simpler and to hide my API key.

Since I like to contribute to the world I've decided to make the endpoint available to everyone.

`https://lastfm-worker.contact-surfscape.workers.dev/?user=<yourusername>`

<small>_Make sure to remove the `<>` when inserting your actual Last.FM username_</small>

Do note that I also want to provide a widget code so anyone can implement it correctly and since I haven't done that yet I would advise anyone that wants to use the following API proxy by using my Last.FM widget code.

```HTML
<section class="lastfm-widget">
    <h2>
        <span id="loadingStatus"></span>
        <span id="playState">Last played was</span>
    </h2>
    <img src="" alt="" id="albumCover">
    <h3 >
        <a href="" id="name" target="_blank" rel="noopener"></a>
    </h3>
    <p id="artist"></p>
    <small id="albumName"></small>
    <details>
        <summary>Show recents</summary>
        <ol id="lastfm-history"></ol>
    </details>
</section>
```

The JavaScript is [available on GitHub](github.com/ReduxFlakes/website/blob/main/src/_layouts/home.njk#L10).
