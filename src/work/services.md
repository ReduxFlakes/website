---
title: Services
description: Live services, public APIs, and open comissions
icon: farm-appview
parent: Work
order: 3
util:
  prism: true
---

## Last.FM Proxy

I've decided to make a simple Last.FM proxy that fetches the current song playing and the last 5 songs that played from an user. The main reason behind it was to make the data model simpler and to hide my API key.

Since I like to contribute to the world I've decided to make the endpoint available to everyone.

`https://lastfm-worker.contact-surfscape.workers.dev/?user=<yourusername>`

<small>_Make sure to remove the `<>` when inserting your actual Last.FM username_</small>

Do note that I also want to provide a widget code so anyone can implement it correctly and since I haven't done that yet I would advise anyone that wants to use the following API proxy by using my Last.FM widget code.

### HTML

{% highlight "html" %}

<section class="lastfm-widget">
  <h2>
    <span id="loadingStatus"></span>
    <span id="playState">Loading...</span>
  </h2>
  <img src="" alt="" id="albumCover" height="174" widget="174">
  <h3>
    <a href="" id="songLink" target="_blank" rel="noopener"></a>
  </h3>
  <p id="artist"></p>

<small id="albumName"></small>

  <details>
    <summary>Show recents</summary>
    <ol id="lastfm-history"></ol>
  </details>
</section>
{% endhighlight %}

### JavaScript

```js
window.onload = function () {
  fetchLastfm();
};

setInterval(fetchLastfm, 100000);

function fetchLastfm() {
  fetch("https://lastfm-worker.contact-surfscape.workers.dev/?user=<username>")
    .then((response) => response.json())
    .then((json) => {
      const recentTracks = json["recentTracks"];
      if (!recentTracks || recentTracks.length === 0) return;

      const currentTrack = recentTracks[0];

      const loadingStatus = document.getElementById("loadingStatus");
      const playTitle = document.getElementById("playState");
      const art = document.getElementById("albumCover");
      const name = document.getElementById("songLink");
      const artist = document.getElementById("artist");
      const album = document.getElementById("albumName");

      if (!currentTrack.albumCover) {
        art.style.display = "none";
      } else if (currentTrack.albumCover !== art.src) {
        art.src = currentTrack.albumCover;
        art.style.display = "block";
      }

      name.innerText = currentTrack.song;
      artist.innerText = currentTrack.artist;
      album.innerText = currentTrack.album;
      name.href = currentTrack.songUrl;

      if (currentTrack.nowPlaying) {
        playTitle.innerText = "Listening to:";
        if (!loadingStatus.classList.contains("flashing"))
          loadingStatus.classList.toggle("flashing");
        loadingStatus.style.background = "#A6E3A1";
      } else {
        playTitle.innerText = "Last Played";
        loadingStatus.classList.remove("flashing");
        loadingStatus.style.background = "";
      }

      const history = document.getElementById("lastfm-history");
      history.innerHTML = "";
      recentTracks.forEach((item, index) => {
        if (index != 0) {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${item.songUrl}">${item.song}</a><small> - ${item.artist}</small>`;
          history.appendChild(li);
        }
      });
    })
    .catch((err) => console.error("Error fetching Last.fm data:", err));
}
```
