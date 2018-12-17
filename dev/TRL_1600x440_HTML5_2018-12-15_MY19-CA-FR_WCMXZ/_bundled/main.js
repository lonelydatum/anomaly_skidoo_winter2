(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _commonJsCommon = require('../../_common/js/common');

window.heroScale = 1;

_commonJsCommon.tl.set('#product1', { opacity: 1 });

function start() {
    var scale = arguments.length <= 0 || arguments[0] === undefined ? .08 : arguments[0];
    var t2 = arguments.length <= 1 || arguments[1] === undefined ? 1.5 : arguments[1];

    var heroScale = window.heroScale || 2;
    TweenLite.to("#bg", 4, { scale: '+=' + scale, ease: Sine.easeOut });
    TweenLite.to("#hero", 4, { scale: '+=' + scale * heroScale, ease: Sine.easeOut });
    var f1 = _commonJsCommon.data.f1;

    var f1_delay = '+=' + 1.5;
    (0, _commonJsCommon.setFrame)(".frame1");
    // tl.from('#t1a', .3, {opacity:0, x:'+=10'})
    _commonJsCommon.tl.to('#t1a', .3, { opacity: 0, x: '-=10' }, f1_delay);

    _commonJsCommon.tl.from('#t1b', .3, { opacity: 0, x: '+=10' });
    _commonJsCommon.tl.to('#t1b', .3, { opacity: 0, x: '-=10' }, '+=' + t2);

    _commonJsCommon.tl.to('.frame1', .5, { opacity: 0 });

    (0, _commonJsCommon.setFrame)(".frame2");
    _commonJsCommon.tl.add('product', '+=.2');

    _commonJsCommon.tl.from(['.product_shadow', '#product1'], .7, { y: -500, x: -700, ease: Sine.easeOut }, 'product');

    // tl.from('#product2', .4, {x:-300, ease:Sine.easeOut}, 'product+=.15')

    _commonJsCommon.tl.add('line', '-=.1');
    _commonJsCommon.tl.fromTo("#line polygon", .7, { drawSVG: "50% 50%" }, { drawSVG: "100%", ease: Sine.easeIn }, 'line');
    _commonJsCommon.tl.from(['#t2a', '#t2b'], .3, { opacity: 0 });

    _commonJsCommon.tl.from('#t2c', .4, { opacity: 0 });

    _commonJsCommon.tl.from(['#logo', '#cta'], .3, { opacity: 0 }, "+=.3");

    // tl.gotoAndPlay('product')
}

start(.06);

exports['default'] = start;
module.exports = exports['default'];

},{"../../_common/js/common":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;
var tl = new TimelineMax();

function setFrame(frame) {
    tl.set(frame, { opacity: 1 });
    console.log(frame);
}

var data = {
    f1: 1
};

exports.size = size;
exports.tl = tl;
exports.setFrame = setFrame;
exports.data = data;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
