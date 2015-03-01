// ==UserScript==
// @name         vgadblockblockblocker
// @namespace    https://github.com/epleterte/vgadblockblockblocker
// @version      0.5
// @description  Blocks the adblock blocker
// @author       Christian Bryn
// @include      http://www.vg.no/*
// @grant        none
// @license      BSD-3
// ==/UserScript==

// put our override in a new script element
var script = document.createElement('script');

// method 1:
// override the function that inserts the unwanted ...content
// this method does not block the detection call, but is stable
//script.innerHTML = 'window.__AB__ = function() {}';

// method 2:
// disables the function that makes calls to the (german) adblock detection provider
// this method is better because it blocks the remote detection call, but the weird
// function name changes every so often (every few days?)
//script.innerHTML = 'var _0xf03e = [];';

// method 3:
// method 2 improved - uses some regex to extract the weird function name
func = document.body.innerHTML.match(/var (_[0-9a-z]*)=\["\\x73\\x63\\x72\\x69\\x70\\x74",.*/);
if (func && 1 < func.length) {
  script.innerHTML = 'var ' + func[1] + ' = [];';
}

// append to head elements (making it the last)
document.getElementsByTagName('head')[0].appendChild(script);
