(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _commonJsHeliumOnes = require('../../_common/js/heliumOnes');

var _commonJsHeliumOnes2 = _interopRequireDefault(_commonJsHeliumOnes);

TweenMax.to("#tag", 1.7, { skewX: "+=1", skewY: "+=1", rotation: "+=2", scale: .49, repeat: 3, yoyo: true, ease: Power1.easeInOut });
(0, _commonJsHeliumOnes2["default"])();

},{"../../_common/js/heliumOnes":3}],2:[function(require,module,exports){
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
    void 0;
}

var data = {
    f1: 1
};

exports.size = size;
exports.tl = tl;
exports.setFrame = setFrame;
exports.data = data;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require('./common');

function start() {
    var scale = arguments.length <= 0 || arguments[0] === undefined ? .08 : arguments[0];
    var t2 = arguments.length <= 1 || arguments[1] === undefined ? 1.5 : arguments[1];

    var heroScale = window.heroScale || 2;
    TweenLite.to("#bg", 4, { scale: "+=" + scale, ease: Sine.easeOut });
    TweenLite.to("#hero", 4, { scale: "+=" + scale * heroScale, ease: Sine.easeOut });
    var f1 = _common.data.f1;

    var f1_delay = "+=" + 1.5;
    (0, _common.setFrame)(".frame1");
    // tl.from('#t1a', .3, {opacity:0, x:'+=10'})
    _common.tl.to('#t1a', .3, { opacity: 0, x: '-=10' }, f1_delay);

    _common.tl.from('#t1b', .3, { opacity: 0, x: '+=10' });
    _common.tl.to('#t1b', .3, { opacity: 0, x: '-=10' }, "+=" + t2);

    _common.tl.to('.frame1', .5, { opacity: 0 });

    (0, _common.setFrame)(".frame2");
    _common.tl.add('product', '+=.2');
    if (_common.size.w === 300 && _common.size.h === 600) {
        _common.tl.from(['.product_shadow', '#product1'], .4, { y: -90, x: -300, ease: Sine.easeOut }, 'product');
    } else {
        _common.tl.from('#product1', .4, { x: -300, ease: Sine.easeOut }, 'product');
    }

    // tl.from('#product2', .4, {x:-300, ease:Sine.easeOut}, 'product+=.15')

    _common.tl.add('line', '-=.1');
    _common.tl.fromTo("#line polygon", .7, { drawSVG: "50% 50%" }, { drawSVG: "100%", ease: Sine.easeIn }, 'line');
    _common.tl.from(['#t2a', '#t2b'], .3, { opacity: 0 });

    _common.tl.from('#t2c', .4, { opacity: 0 });

    _common.tl.from(['#logo', '#cta'], .3, { opacity: 0 }, "+=.3");

    // tl.gotoAndPlay('product')
}

exports["default"] = start;
module.exports = exports["default"];

},{"./common":2}]},{},[1])


//# sourceMappingURL=main.js.map
