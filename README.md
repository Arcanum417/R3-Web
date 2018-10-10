
# Arma 3 After Action Replay *Web* Component


<a href="https://github.com/alexcroox/R3-Web/releases/latest">
    <img src="https://img.shields.io/github/release/alexcroox/R3-Web.svg" alt="Project Version">
</a>

<a href="https://raw.githubusercontent.com/alexcroox/R3-Web/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-red.svg" alt="Project License">
</a>



Website component for the [game server side addon](https://github.com/alexcroox/R3) for capturing unit movement and behaviour to a database for After Action Replays online.

No modifications to your missions required, nothing for clients to download.

Being built along side the [addon component](https://github.com/alexcroox/R3) and [automated tiler](https://titanmods.xyz/r3/tiler)

### Demo

An exact mirror of this repo [can be viewed here](https://aar.ark-group.org) which contains replays from [ARK Group](http://ark-group.org/)

### Install


<a href="https://discord.gg/qcE3dRP">
    <img width="100" src="http://i0.kym-cdn.com/photos/images/original/001/243/213/52a.png" alt="Discord">
</a>

**_Note:_ R3 is currently undergoing a big v1 data storage refactor [read more](https://github.com/alexcroox/R3-Web/issues/14)**

1. Follow the step by step [instructions on the addon repo](https://github.com/alexcroox/R3) and ensure you have mission event data in your database
2. Download the [latest web release](https://github.com/alexcroox/R3-Web/releases/latest)
3. Rename `config.template.php` to `config.php`, pay close attention to `DB_*`, `WEB_PATH` and timezone configurations
4. Upload the files to your web server which matches the URL in `WEB_PATH` in `config.php`. Take note of `/.htaccess` in the download that may be hidden on your system before you upload.
5. _(linux specifc)_ give the `cache` directory permissions for your web-server user account:
```
chown www-data:www-data -R cache/
```

### Important information to get the most from R3

1. Make sure you enable `gzip` on your web server. If you don't your users will be sat waiting for the playback to load for a long time, and downloading 100s MBs each time. This is very important.

2. Ensure your MySQL server timezone matches that of your server / R3 config. If they aren't the same, missions may incorrectly auto hide or fail to show as in progress.

### Adding new Terrains

R3 supports over [90 popular terrains](https://titanmods.xyz/r3/tiler). Just played a mission on a map that R3 doesn't yet support? Feel free to add it yourself and let every user of R3 benefit from it! Follow the [simple instructions here](https://github.com/alexcroox/R3-Web/wiki/Adding-new-terrains)

### Adding new vehicle icons

Is a modded vehicle using the vanilla map icon instead of the correct shape and outline for that mod? [Submit new vehicle icons here](https://titanmods.xyz/r3/tiler/icons), and every user of R3 will get access to it! Follow the [simple instructions here](https://github.com/alexcroox/R3-Web/wiki/Adding-new-icons)

### Getting help

You can find me (Titan) on the [R3 Discord](https://discord.gg/qcE3dRP) or feel free to create an issue here.

### Why not x framework/language

In an ideal world I'd be using web sockets and node to stream from the game server straight to a flat json file, and to the browser.
However the goal is to allow Arma 3 server admins to be able to run this and contribute. PHP + MySQL is the most common setup these administrators (with potentially limited sysadmin knowledge or sudo access) will have so it is the correct choice, as limiting as that can be!
