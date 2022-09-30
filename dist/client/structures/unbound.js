"use strict";const a=require("path"),b=_interopRequireWildcard(require("../../common/utilities")),c=require("../../common/logger"),d=_interopRequireWildcard(require("../core/builtins")),e=_interopRequireWildcard(require("../core/patches")),f=_interopRequireWildcard(require("../core/updater")),g=_interopRequireWildcard(require("../managers/index")),h=_interopRequireWildcard(require("../modules/webpack/index")),i=require("http"),j=function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(require("../modules/patcher/index")),k=_interopRequireWildcard(require("@api"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const l={core:(0,c.createLogger)(),api:(0,c.createLogger)("API")};class Unbound{#sockets=new Set;utilities=b;patcher=j.default;webpack=h;updater=f;async initialize(){global.unbound=this,l.core.log("Initializing...");let a=performance.now();for(let b in await e.initialize(),await d.initialize(),this.apis={},k){let c=b.toLowerCase();this.apis[c]=k[b],await this.apis[c].initialize?.(),l.api.log(`Initialized ${c}.`)}this.managers={plugins:new g.Plugins,themes:new g.Themes},this.managers.themes.initialize(),this.managers.plugins.initialize(),l.core.log(`Initialized in ${Math.round(performance.now()-a)}ms.`),this.#setupServer()}async shutdown(){for(let b of this.#sockets)b.destroy(),this.#sockets.delete(b);for(let c in this.server?.close?.(()=>l.core.debug("Server closed")),l.core.log("Shutting down..."),this.managers.plugins.shutdown(),this.managers.themes.shutdown(),k){let f=c.toLowerCase();this.apis[f]=k[c],await this.apis[f].shutdown?.()}await e.shutdown(),await d.shutdown(),await h.shutdown();let g=[...document.querySelectorAll('style[data-unbound="true"')];for(let i of g)i.remove();let j=(0,a.basename)((0,a.resolve)(__dirname,"..","..","..")),m=Object.keys(require.cache).filter(a=>~a.indexOf(j));for(let n=0,o=m.length;n<o;n++){let p=require.cache[m[n]];delete require.cache[m[n]];for(let q=0;q<p.parent.children.filter(Boolean).length;q++)if(p.parent.children[q]&& ~p.parent.children[q].path.indexOf(j)){p.parent.children.splice(q,1);break}}delete global.unbound,global.unbound={async initialize(){let a=require("@webpack");await a.initialize();let b=require("@structures/unbound"),c=new b;await c.initialize()},restart:()=>global.unbound.initialize(),shutdown(){}}}async restart(){await this.shutdown(),await global.unbound?.initialize?.()}#setupServer(){this.server=(0,i.createServer)(this.#onRequest.bind(this)),this.server.on("connection",a=>{this.#sockets.add(a),this.server.once("close",()=>{this.#sockets.delete(a)})}),this.server.listen(9859,()=>l.core.debug("Server running at port 9859"))}#onRequest(m,n){n.statusCode=200;let o=m.method.toLowerCase(),p=m.url.split(/[?#]/),q=p[1],r=p[0];if(n.setHeader("Access-Control-Allow-Origin","*"),!r||"/"===r)return n.end();let s=(0,a.join)(__dirname,"..","routes",r);if(require.resolve(s))try{let t=require(s);if(!t[o])return n.statusCode=405,n.end();t[o](this,m,n,q)}catch(u){l.core.error(`Router failed to route request. (URL: ${r})`,u),n.statusCode=500,n.end()}else n.statusCode=404,n.end()}}module.exports=Unbound