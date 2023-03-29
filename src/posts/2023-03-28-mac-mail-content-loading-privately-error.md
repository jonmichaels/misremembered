---
title: 'Fix Mac Mail loading private content'
description: "This is how I fixed my 'Your Network Preferences Prevent Content From Loading Privately' error without disabling all of my privacy settings."
category: long
date: 2023-03-28
---

I have an M1 Mac mini that was happily running MacOS 12.6.3 (Monterey). I relatively recently decided to upgrade it to MacOS 13.2.1 (Ventura) so that I could start using some of these Catalyst apps that require it.

All seemed fine until the first time I fired up Mail.app. Suddenly I was seeing this error:

*Your Network Preferences Prevent Content From Loading Privately*

It was at the top of nearly every single email. There was a button next to it labeled "Load Content Directly". None of the images in the email would be displayed.

After a lot of Google searching a found several recommendations to [turn off the Privacy settings](https://support.intego.com/hc/en-us/articles/5995495186962-Mail-App-Displays-Your-Network-Preferences-Prevent-Content-From-Loading-Privately-Message-with-VPN-Enabled) in Mail.app. And sometimes also the [IP address tracking](https://www.howtoisolve.com/network-preferences-prevent-content-from-loading-privately-on-mail-app/) in Network settings. This confused me a lot. I had already upgraded my M2 MacBook Air to MacOS 13.2.1 (Ventura) and had seen none of these problems. When I checked the Privacy settings on my laptop they were still on, as were the IP address tracking in Network settings.

I ended up making two changes to my Network settings and it fixed the problem for me. I can't say it will fix all problems but it might be worth it for you to give it a shot.

## Setup

My Mac mini has three network connections:
1. Hard-wired ethernet connection to my router 
2. WiFi connection to my router
3. An Avid mixer connected to the Mac via Ethernet

I suspected the mixer was causing the problem. I didn't have that set up on my laptop, and the mixer connection has a self-assigned IP address.

## The Fix

{% imagePlaceholder "./src/assets/images/posts/mac_network_order.jpg", "The Network preferences for MacOS showing three connected interfaces: Ethernet, Thunderbolt Ethernet Slot 1, and Wi-Fi", "", "" %}

In System Preferences -> Network, this was my Network order:

- Ethernet (Connected)
- Thunderbolt Ethernet Slot 1 (Self-assigned IP)
- Wi-Fi (Connected)

I changed it to move the Wi-Fi before the Avid mixer:

- Ethernet (Connected)
- Wi-Fi (Connected)
- Thunderbolt Ethernet Slot 1 (Self-assigned IP)

You can do that by clicking the (...) button in the lower right of the Network window and selecting "Set Service Order...." Drag the interfaces into the correct order (Ethernet, WiFi, Thunderbolt Ethernet), and then click the Done button.

The second change I made was turning off "Limit IP address tracking" for the Avid mixer. It's not going on the internet. It's just talking to my computer via Ethernet.

In System Preferences -> Network, click on "Thunderbolt Ethernet Slot 1."

On the next page that displays, click the "Details..." button in the upper right corner.

{% imagePlaceholder "./src/assets/images/posts/thunderbolt_ethernet.jpg", "The Network information on MacOS for a Thunderbolt ethernet adapter. The Details button is in the upper right corner.", "", "" %}

In the window that pops up, click the switch to turn off "Limit IP address tracking" and then click the "OK" button.

{% imagePlaceholder "./src/assets/images/posts/limit_ip_address_tracking.jpg", "Details of the Thunderbolt ethernet adapter in MacOS Network preferences. The switch to enable or disable Limit IP address tracking is shown.", "", "" %}

Once I did those things, Mail.app worked correctly and I no longer saw the "Content Loading Privately" errors.

Hopefully this helps someone with a similar setup.