
window.heroScale = 1
const  start = require('../../_common/js/heliumOnes')

TweenMax.to("#tag", 1.7, {skewX:"+=1", skewY:"+=1", rotation:"+=2", scale:.49,  repeat:3, yoyo:true, ease:Power1.easeInOut})
start(.03)