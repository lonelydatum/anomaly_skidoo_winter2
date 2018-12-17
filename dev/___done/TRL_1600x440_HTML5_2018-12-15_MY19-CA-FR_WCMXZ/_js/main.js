window.heroScale = 1

import {setFrame, tl, size, data} from '../../_common/js/common'





tl.set('#product1', {opacity:1})

function start(scale=.08, t2=1.5){
    const heroScale = window.heroScale || 2
    TweenLite.to("#bg", 4, {scale:`+=${scale}`, ease:Sine.easeOut})
    TweenLite.to("#hero", 4, {scale:`+=${scale*heroScale}`, ease:Sine.easeOut})
    const {f1} = data
    const f1_delay = `+=${1.5}`
    setFrame(".frame1")
    // tl.from('#t1a', .3, {opacity:0, x:'+=10'})
    tl.to('#t1a', .3, {opacity:0, x:'-=10'}, f1_delay)
    
    tl.from('#t1b', .3, {opacity:0, x:'+=10'})
    tl.to('#t1b', .3, {opacity:0, x:'-=10'}, `+=${t2}`)
    
    tl.to('.frame1', .5, {opacity:0})


    setFrame(".frame2")
    tl.add('product', '+=.2')
    
    tl.from(['.product_shadow', '#product1'], .7, {y:-500, x:-700, ease:Sine.easeOut}, 'product')
    
    
    // tl.from('#product2', .4, {x:-300, ease:Sine.easeOut}, 'product+=.15')

    tl.add('line', '-=.1')
    tl.fromTo("#line polygon", .7, {drawSVG:"50% 50%"}, {drawSVG:"100%", ease:Sine.easeIn}, 'line')
    tl.from(['#t2a', '#t2b'], .3, {opacity:0})

    tl.from('#t2c', .4, {opacity:0})

    tl.from(['#logo', '#cta'], .3, {opacity:0}, "+=.3")

    // tl.gotoAndPlay('product')
}


start(.06)

export default start

