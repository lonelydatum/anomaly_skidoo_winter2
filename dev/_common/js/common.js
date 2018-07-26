const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut
const tl = new TimelineMax()

function setFrame(frame){
    tl.set(frame, {opacity:1})
    console.log(frame)
}

const data = {
    f1: 1
}

export {size, tl, setFrame, data}