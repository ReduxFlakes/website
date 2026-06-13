---
title: The Death of Celer (kind of)
date: 2026-05-06 00:36:00
description: What happened to Celer and what is coming after it
tags: ["Projects", "Open Source", "Celer"]
---

## Some Backstory

Back in 2024 when I was still studying {{ component('abbrv',{meaning: "Computer Science", abr:"CS"}) }} we had to make a final project for the course and then do a presentation about it, I already knew what I wanted to make: an optimization utility for Windows (similar to Glary Utilities, IoBit, and others).

I always had an interest on cleaning and performance applications since I was a kid, they were intriguing to me, mainly because of the flashy nature of their designs and UI since most of them don't do anything, and in this case I wanted to make something that actually worked and so late 2024 I started doing plans writing some of the features I wanted and making some simple concepts in Figma.

After some stressfull months I've reached the presentation day, July 2025, and well, it went great! Both the invited juries and my teachers loved the idea and demonstration and even though I'm pretty anxious with public talking I got 20/20 for the project!

So then, what happened after that? Well at first my plan was to keep developing the project and reach a second beta, however that's when things started going south...

## Development Hell

Most of the work I had done so far up until September was fixing bugs (Celer development was rushed so that I could met the project's deadline which meant final app wasn't really that stable or polished), translating the app to English (the only language available was Portuguese and I wanted people to use the app and so the best way was to translate it to English), adding new features (a roadmap was made but most features weren't added when beta 2 released), and a redesign based on Fluent 2.

Now, Beta 2 was supposed to release still in 2025, but that didn't happen, and there's lot's of reason why:

- A planned partial rewrite of Celer from WPF to WinUI 3 (that after a few weeks of experimentation led me to discovered how painful WinUI 3 is to use and the rewrite was scrapped)
- More focus on features, instead of fixing the core of the app
- Multiple issues related to UI caused by the old age of WPF (ex: scrollviewer events being gobbled up by other elements, and no smooth scrolling)

## What Made Me Quit

Now these are all plausible reasons to take longer to release the project, but it was not that simple, since what made me archive the project was: **I was tired of Windows**, that's right, one of the reasons why Beta 2 took longer to release was because I was not having fun developing it, I was sick of using Windows and I wanted to move on with the only thing stopping me being Celer

So a few weeks ago I've decided to shut down one of my most popular and ambitious project, Celer
