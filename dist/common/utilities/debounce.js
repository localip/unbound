"use strict";module.exports=function debounce(a,b){let c;return function(...d){clearTimeout(c),c=setTimeout(()=>a.apply(this,d),b)}}