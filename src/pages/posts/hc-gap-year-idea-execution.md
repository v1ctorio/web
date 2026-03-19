---
layout: ../../layouts/ArticleLayout.astro
title: 'How I evaded my school restrictions and learnt about networking to host a Minecraft server in class.'
pubDate: 19-03-2026
description: 'Text for the Hack Club Gap Year application.'
author: 'Vic'
tags: ["life"]
---

I was in my first year of High School (US equivalent). In my school we weren't allowed to use any kind of digital device (phones, laptops) aside from the school’s laptop. This laptop had Windows 10 education edition and was enrolled in the school’s domain. It also had a monitoring software (spyware) used by teachers. <br><br>


I remember that back then I was already pretty interested in code and tech. I would spend all the classes tinkering with my school laptop. This started once, when I discovered that you could bypass the website blocking just by installing a different browser that didn’t have the companion extension installed. Also that the specific application suppression worked just by killing processes based on their window name. This allowed me to edit some open source software (like an alternative discord client) to bypass this restriction by setting the window name to a random string.

Like this, during the school year I kept finding new exploits each time one got patched.
<br>

I remember in foreign language (English) class we hardly did anything. I would spend all the classes either talking with my classmates or reading Wikipedia pages. It was more engaging than the class and I couldn’t do stuff that didn’t look academic on my laptop because I had to be careful in case a teacher checked.

Either way, one day, while tinkering, I discovered that I could run Minecraft without much trouble. I wasn’t able to use the official launchers but with all the components downloaded, I could run the game with an offline account without the need of admin or anything similar.

<br>

With this, the idea to create a Minecraft server for the whole class came to my mind. This idea had several inconveniences that I had to fix: First, distribution, how do I get Minecraft onto all my classmate's laptops. Then, when trying to use the “Open to LAN” game feature, I would get an admin prompt in Windows. The firewall was configured so the laptops would not accept any inbound connections even from the LAN if not allowed by an admin. Finally, last and most obvious, the spyware. Teachers must not see us playing minecraft.


Distribution was pretty easy to solve. I brought a USB drive from home, created a ZIP with all the necessary files to play (prism launcher configured, JRE) and started passing it around class until everyone had it.

Then, the connection between laptops. Since we didn’t have admin access (yet we had an unlocked bootloader so something could’ve been made, but back then I didn’t know what a bootloader was), it was impossible to open inbound ports from windows. In the end, the solution I found was hosting the server from my cell phone. First using Cuberite (a Minecraft server C++ re implementation) and then paper on Termux. It was impossible for us to use our phones during class but we could set it up before entering class and let it run all day. It’s still crazy to me how much a low-end Android phone with 4 GB of RAM was able to do.

The spyware allowed teachers to view our screens at any time and check historical recordings. Of course, playing Minecraft also required a network. The solution came from the server setup: we discovered that disabling a phone’s SIM card and enabling the hotspot created a LAN with no internet access. That was perfect for hosting the server and preventing teachers from looking at our screens. (This only worked up to a point, since they would get suspicious if our screens did not change for a long time).


This also fixed another problem which was that the school’s normal network didn’t allow connections between clients and that the devices were configured to be forcefully connected to a network (you couldn’t disable WiFi).


<br>
Like this, I managed to host a Minecraft server we enjoyed during boring or empty classes. It was a very fun investigation and trial and error project.

Most importantly, I realized that if I really wanted to, I could do the stuff I set out to do. Nobody needs to explicitly teach you, especially when the internet offers endless free knowledge if you really want to learn.