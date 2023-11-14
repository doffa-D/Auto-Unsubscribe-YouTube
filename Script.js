// ==UserScript==
// @name         YouTube Auto Unsubscribe Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/feed/channels
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

var i = 0;

var myVar = setInterval(myTimer, 1000);

function myTimer() {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {

        els[i].querySelector("[aria-label^='Unsubscribe from']").click();

        setTimeout(function () {

            var unSubBtn = document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click();

        }, 2000);

        setTimeout(function () {

            els[i].parentNode.removeChild(els[i]);

        }, 2000);

    }

    i++;

    console.log(i + " Channels Unsubscribed\n");

    console.log(els.length + " remaining");

}
