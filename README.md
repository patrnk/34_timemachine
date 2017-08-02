# Timer for Websites That Steal Your Time

This project helps to control time was spent on a website. The timer works in the following way:
after 3 minutes are passed, it displays the first motivational quote about work.
All subsequent quotes are displayed with time interval of 30 seconds.
![initial look](https://i.imgur.com/YlVDQSZ.png)
![time out](https://i.imgur.com/S8U4KdL.png)

# Installation

Install the extension for Chrome browser [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija).

Open configuration of [cjs](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija) browser extension on the site you want to control.
Click on the link "your own external scripts", remove the commented example, add path `https://cdn.rawgit.com/patrnk/34_timemachine/c0d64fed/index.js`.
Don`t forget to press "enable cjs for this host" to enable custom JS.

# Modification

You can easily change the time intervals and add/remove the nag messages. For faster development, you can serve the JS code from localhost (don't forget to [allow mixed content](https://stackoverflow.com/questions/18321032/how-to-get-chrome-to-allow-mixed-content)):

```bash

python3 -m http.server
```

Add path `http://localhost:8000/index.js` to [cjs](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija) browser extension.


# Project Goals

The code is written for educational purposes. Training course for web-developers - [DEVMAN.org](https://devman.org)
