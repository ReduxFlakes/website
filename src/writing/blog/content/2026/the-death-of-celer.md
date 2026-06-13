---
title: The Death of Celer (kind of)
date: 2026-06-13 22:46:03
description: What happened to Celer and what is coming after it
tags: ["Projects", "Open Source", "Celer"]
---

## Some Backstory

Back in 2024 when I was still studying {{ component('abbrv',{meaning: "Computer Science", abr:"CS"}) }} we had to make a final project for the course and then do a presentation about it, I already knew what I wanted to make: an optimization utility for Windows (similar to Glary Utilities, IoBit, and others).

I always had an interest on cleaning and performance applications since I was a kid, they were intriguing to me, mainly because of the flashy nature of their designs and UI since most of them don't do anything, and in this case I wanted to make something that actually worked and so late 2024 I started doing plans writing some of the features I wanted and making some simple concepts in Figma.

After some stressful months I've reached the presentation day, July 2025, and well, it went great! Both the invited juries and my teachers loved the idea and demonstration and even though I'm pretty anxious with public talking I got 20/20 for the project!

So then, what happened after that? Well at first my plan was to keep developing the project and reach a second beta, however that's when things started going south...

## Development Hell

Most of the work I had done so far up until September was fixing bugs (Celer development was rushed so that I could meet the project's deadline which meant final app wasn't really that stable or polished), translating the app to English (the only language available was Portuguese and I wanted people to use the app and so the best way was to translate it to English), adding new features (a roadmap was made, but most features weren't added when beta 2 released), and a redesign based on Fluent 2.

Now, Beta 2 was supposed to release still in 2025, but that didn't happen, and there's lots of reason why:

- A planned partial rewrite of Celer from WPF to WinUI 3 (that after a few weeks of experimentation led me to discovered how painful WinUI 3 is to use and the rewrite was scrapped)
- More focus on features, instead of fixing the core of the app
- Multiple issues related to UI caused by the old age of WPF (ex: scrollviewer events being gobbled up by other elements, and no smooth scrolling)

## What Made Me Quit

Now these are all plausible reasons that would make me take longer to release a new version, but it's not that simple because **I was tired of Windows**, that's right, one of the reasons why Beta 2 took long to release was because I was not having fun developing it, I was sick of using Windows and I wanted to move on to something different (that obviously being Linux) with the only thing stopping me being Celer itself, and it was a difficult decision to make, Celer has been one of my most precious projects that I've ever made and simply discarding it like that because the platform I was developing it for was crumbling apart was pretty hard to accept.

But after some months thinking about it, I decided to shut down it down by archiving the repo on GitHub.

## But why "kind of"?

That's the interesting part, so it's been some weeks after I archived Celer and I actually miss working on it, I'm aware that the project had a future, but I also know how much pain I went with using Windows, so I have been thinking about it, luckily my laptop uses an Intel iGPU, and fortunately it does have support for something called SR-IOV (albeit through a [community kernel driver](https://github.com/strongtz/i915-sriov-dkms)).

Now what is that? Well SR-IOV is a technology that basically lets you "split" a physical device on your system into multiple devices, why does this matter? Well you can split something like the iGPU into two or more (with the maximum being 7) and pass-through one of them to a VM, this not only allows you to have actually hardware acceleration for graphics, coupled together with KVM you can theoretically have a Windows VM with near-native performance, and I can confirm it because I was able to do it, although the setup is a bit difficult it is manageable (and I want to write a guide on how to do it, but that's for the near future).

I haven't started working on Celer yet since I have some priorities (like setting up my Linux system for Pro Audio: installing all of my Windows VST plugins, setting up bottles to run those plugins, installing DAWs and other tools, and improve audio latency), but it is something I'm excited about!

So I guess Celer isn't really dead? May the fox return!
