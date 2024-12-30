---
title: Going Back to Lineage OS
description: Degoogling my phone and going back to Lineage OS and documenting everything about it!
date: 2024-06-06T21:43:00.000Z
tags: ["android", "privacy", "life"]
---

Since I moved to Pixel OS last month I've been quite happy with my phone. I was on HyperOS before and even though the experience was miles better than MIUI, I always had privacy and security concerns with the amount of questionable services and applications HyperOS has pre-installed (this also applies to any ROM with GApps). The reason why I went to Pixel OS, was really because of the consistency, minimalism, and the Android stock experience It offers. However not everything is perfect. Pixel OS (at least on my phone, Lisa) is known to be perfect but always has a weird bug every major release, from audio not working, battery level not showing, the phone getting to hot, etc.

When I flashed Pixel OS (Android 14) everything seemed working, the phone was cold, battery drain was a lot more tolerable than on any HyperOS/MIUI release (excluding EEA region, which is the only official region that does maintain a quite stable battery), until I plugged my earphones trough USB-C and I got no sound. Fortunately the solution was just to update the firmware to a specific version, which I did, and since then I had no issues with audio, heck, I even have Viper4Android working (sometimes with legacy mode off most of the time :D). There is a caveat though, the firmware update in question fixed audio but also broke VoWIFI which lucky me, I don't care/use at all.

After a month of usage, I'm still pretty happy with it, I still have some UX issues but that concerns Android in general (like gesture navigation glitchy in landscape for example).

## Main Reasons for the move

Some people might know that I'm more of a vanilla custom rom type of guy than the next guy that likes all the Google Goodies pre-installed, especially with the release of Android 14, which now comes with a huge amount of AI services pre-installed which I'm not a fan of.

Everyone is also aware of the big privacy concerns Google has in it's name. From [tracking every move you make online](https://www.wired.com/story/google-tracks-you-privacy/), to [cancelling your entire Google account just because you sent a photo of your son naked to a doctor and their "smart AI" systems thought it was CP](https://www.nytimes.com/2022/08/21/technology/google-surveillance-toddler-photo.html).

## My LineageOS Setup

Now you might be asking how do I configure my LineageOS, so here it is a rundown of the things I install, do, and what not.

Firstly I go trough the setup wizard and I disable save location, enable download GPS data from network and also LineageOS telemetry since I really like the project and that's a simple way to support them.

The first thing I install is microG. Now, there's many ways to install microG, from installing the APKs one by one as user apps and allowing the permission, to flashing a Magisk module or a package trough the recovery. However, just recently, LineageOS finally added support to spoof microG packages, so if you want, you don't need root to fully install and setup microG on vanilla Lineage anymore! (you still have [LineageOS for microG](https://lineage.microg.org/) which I also adore and used for quite a awhile).

The next step is to install an F-Droid client to be able to install most of my apps. My clients of choice are [Droid-ify](https://f-droid.org/packages/com.looker.droidify/) which is minimal, beautiful, and works nicely (even on HyperOS/MIUI) and the other one which is now my default, [Neo Store](https://f-droid.org/packages/com.machiav3lli.fdroid/).

I also set a custom NextDNS profile to block trackers system-wide. I also install Mulch System Web View for a more hardened and more up to date web view (the pre-installed one is good enough and receives updates frequently as well). I also have other apps that I install which you can find on my /gear page!

That's all, I hope you liked my way of setting up LineageOS. If would like to see how I setup NextDNS or what is my full mobile workflow, send me an email and I'll write a post about it, have a nice day!
