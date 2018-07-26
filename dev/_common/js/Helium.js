import {setFrame, tl, size, data} from './common'
function start(scale=.08){
    TweenLite.to("#bg", 4, {scale:`+=${scale}`, ease:Sine.easeOut})
    TweenLite.to("#hero", 4, {scale:`+=${scale*2}`, ease:Sine.easeOut})
    const {f1} = data
    const f1_delay = `+=${f1}`
    setFrame(".frame1")
    // tl.from('#t1a', .3, {opacity:0, x:'+=10'})
    tl.to('#t1a', .3, {opacity:0, x:'-=10'}, f1_delay)
    
    tl.from('#t1b', .3, {opacity:0, x:'+=10'})
    tl.to('#t1b', .3, {opacity:0, x:'-=10'}, f1_delay)

    tl.from('#t1c', .3, {opacity:0, x:'+=10'})
    tl.to('.frame1', .5, {opacity:0}, f1_delay)


    setFrame(".frame2")
    tl.add('product', '+=.2')
    tl.from('#product1', .4, {x:-300, ease:Sine.easeOut}, 'product')
    tl.from('#product2', .4, {x:-300, ease:Sine.easeOut}, 'product+=.15')

    tl.add('line', '-=.1')
    tl.fromTo("#line polygon", .7, {drawSVG:"50% 50%"}, {drawSVG:"100%", ease:Sine.easeIn}, 'line')
    tl.from(['#t2a', '#t2b'], .3, {opacity:0})

    tl.from(['#logo', '#cta'], .3, {opacity:0}, "+=.3")

    // tl.gotoAndPlay('product')
}




export default start