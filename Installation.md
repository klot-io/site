Installation
============

# Requirements

- At minimum you'll need two Raspberry Pi's, probably the [3B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/)
  - Maybe it'll work with others?  I just haven't tried.
  - If you want to do more stuff, use like 3 or 4.
- You'll also need to be able to wire a Raspberry Pi to your network, ethernet style.
  - This is just for setup, and you only have to do it one at a time.

# Assumptions

- Your network has DHCP and you plan to use it
- You know how to set IP addresses on your network

# Process

NOTE:  There's a lot of stuff coming up and will eventually be consistent. If something doesn't work, wait a bit and try again. I'll be working on smoothing everything out.

- Download the [pi-0.1.img.zip]{https://klot-io.sfo2.cdn.digitaloceanspaces.com/pi-0.1.img.zip) and burn it into an SD card. 
  - I'm fond of [Samsung's EVO Select 32Gb](https://www.samsung.com/us/computing/memory-storage/memory-cards/microsdhc-evo-select-memory-card-w--adapter-32gb--2017-model--mb-me32ga-am/) cards but use whatever you like.
  - I'm not an expert in which cards perform best or whatever.
- Power Up
  - Insert SD card into Pi.  Wire to your network (ethernet cable). Power up.
  - Wait a few minutes or so as the OS expands the filesystem. 
  - Get impatient and go to [http://klot-io.local/](http://klot-io.local/) anyway, understanding it might not come up right away or be persnickety.
  - The site will recognize it has default settings and automatically log you in.
  - If my browser trickery fails, just log in with the password 'kloudofthings'.
  - Oh btw, you're logging into your new Pi right now.
- Configure Master
  - Set a new password. This'll be both for the GUI/API you're using and the pi account on the Pi (make sure it's like 8 chars long).
  - Decide whether to enable SSH or leave it disabled.  It's up to you, and you can change later through this page.
  - Enter the WiFi settings for your network or leave it as is to stay wired.
  - Set the role to Master for this first one and give your cluster a name, lowercase, no spaces (I should have something check that and password too). 
  - Click Config.  You should now have to log in with your new password.
  - Note the site URL changed to (cluster)-klot-io.local. This is the hostname of the Master now and will be your home base going forward.
- Join Workers
  - Once the status is Master, burn another SD card, and plug it into a new Pi, wire to the network, and power up.
  - Head over the Nodes page. After a few minutes, a Node called "klot-io" willl appear.  That's your new Node.
  - You'll want to wait a few minutes as the hard drive reconfigures and the Pi reboots, it'll be be persnickety otherwise.
  - To have it join as a Worker with the same settings as the Master, give it a name and click Join. 
  - To have it join as a Worker with different settings, click it's name and Config on its own site.
  - Back at the Master's Nodes, page, wait 20 seconds or so, and it'll appear in the Node listing as (name)-(cluster)-klot-io.local
  - If you've switched from Wired to Wireless, it may hang as NotReady.  Give it a minute and then power cycle the Worker.
  - Repeat for as many Workers as needed.  Just make sure each name is unique (ya, should probably write something to check this too). 

Congrats!  You have a Kubrernetes Cluster on Raspberry Pi's! Hit up [Apps](Apps.md) for what's next.

# Advanced

There's some other ways to install that are a little more secure and a little more involved.
If you're comfortable creating files on the SD card's /boot partitation, check out <a href="{{=DRApp.link('boot')}}">/boot</a>.
If you're down with Docker and local dev and have a Mac (only for now, sorries!) maybe <a href="{{=DRApp.link('development')}}">Development</a> is right for you. 

