// ==UserScript==
// @name         vgadblockblockblocker
// @namespace    https://github.com/epleterte/vgadblockblockblocker
// @version      0.2
// @description  Blocks the adblock blocker
// @author       Christian Bryn
// @include      http://www.vg.no/*
// @match        http*://www.vg.no/*
// @grant        none
// @license      BSD-3
// ==/UserScript==

// put our override in a new script element
var script = document.createElement('script');

// method 1:
// override the function that inserts the unwanted ...content
//script.innerHTML = 'window.__AB__ = function() {}';

// method 2:
// better. disables the function that makes calls to the (german) adblock detector provider
script.innerHTML = 'var _0x9f3f = [];';

// append to head elements (making it the last)
document.getElementsByTagName('head')[0].appendChild(script);
