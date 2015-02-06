// ==UserScript==
// @name         vgadblockblockblocker
// @namespace    http://github.com/epleterte
// @version      0.1
// @description  Blocks the adblock blocker
// @author       Christian Bryn
// @include      http://www.vg.no/*
// @match        http*://www.vg.no/*
// @grant        none
// @license      BSD-3
// ==/UserScript==

// put our function in a new script element
var script = document.createElement('script');

// method 1:
// override the function that inserts the unwanted ...content
script.innerHTML = 'window.__AB__ = function() {}';

// method 2:
// probably better. probably disables the function that makes calls to the (german) adblock detector provider
script.innerHTML = 'var _0x9f3f = [];var _0xef99x1 = function() {};';

// append to head elements (making it the last)
document.getElementsByTagName('head')[0].appendChild(script);
