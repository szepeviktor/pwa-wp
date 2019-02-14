!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).workbox={})}(this,function(n){"use strict";try{self["workbox:window:4.0.0-rc.2"]&&_()}catch(n){}var t=function(n,t){return new Promise(function(e){var i=new MessageChannel;i.port1.onmessage=function(n){return e(n.data)},n.postMessage(t,[i.port2])})};function e(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function i(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}try{self["workbox:core:4.0.0-rc.2"]&&_()}catch(n){}var r=function(){var n=this;this.promise=new Promise(function(t,e){n.resolve=t,n.reject=e})},o=function(n,t){return new URL(n,location).href===new URL(t,location).href},u=function(n,t){Object.assign(this,t,{type:n})};function s(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(n.apply(this,t))}catch(n){return Promise.reject(n)}}}function c(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function a(){}var f=function(n){var f,h;function v(t,e){var o;return void 0===e&&(e={}),(o=n.call(this)||this).t=t,o.i=e,o.o=0,o.u=new r,o.s=new r,o.h=new r,o.v=o.v.bind(i(i(o))),o.l=o.l.bind(i(i(o))),o.g=o.g.bind(i(i(o))),o.m=o.m.bind(i(i(o))),o}h=n,(f=v).prototype=Object.create(h.prototype),f.prototype.constructor=f,f.__proto__=h;var l,d,w,g=v.prototype;return g.register=s(function(n){var t,e,i=this,r=(void 0===n?{}:n).immediate,o=void 0!==r&&r;return t=function(){return i.p=i.P(),c(i.j(),function(n){return i.O=n,i.p&&(i._=i.p,i.u.resolve(i.p),i.s.resolve(i.p),i.h.resolve(i.p),i.k(i.p),i.p.addEventListener("statechange",i.l,{once:!0})),i.O.addEventListener("updatefound",i.g),navigator.serviceWorker.addEventListener("controllerchange",i.m,{once:!0}),"BroadcastChannel"in self&&(i.C=new BroadcastChannel("workbox"),i.C.addEventListener("message",i.v)),navigator.serviceWorker.addEventListener("message",i.v),i.O})},(e=function(){if(!o&&"complete"!==document.readyState)return function(n,t){if(!t)return n&&n.then?n.then(a):Promise.resolve()}(new Promise(function(n){return addEventListener("load",n)}))}())&&e.then?e.then(t):t(e)}),g.getSW=s(function(){return this.u.promise}),g.messageSW=s(function(n){return c(this.getSW(),function(t){return new Promise(function(e){var i=new MessageChannel;i.port1.onmessage=function(n){return e(n.data)},t.postMessage(n,[i.port2])})})}),g.P=function(){var n=navigator.serviceWorker.controller;if(n&&o(n.scriptURL,this.t))return n},g.j=s(function(){var n=this;return function(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}(function(){return c(navigator.serviceWorker.register(n.t,n.i),function(t){return n.R=performance.now(),t})},function(n){throw n})}),g.k=function(n){t(n,{type:"WINDOW_READY",meta:"workbox-window"})},g.g=function(){var n=this.O.installing;this.o>0||!o(n.scriptURL,this.t)||performance.now()>this.R+6e4?(this.L=n,this.O.removeEventListener("updatefound",this.g)):(this._=n,this.u.resolve(n)),++this.o,n.addEventListener("statechange",this.l)},g.l=function(n){var t=this,e=n.target,i=e.state,r=e===this.L,o=r?"external":"";this.dispatchEvent(new u(o+i,{sw:e,originalEvent:n})),"installed"===i?this.M=setTimeout(function(){"installed"===i&&t.O.waiting===e&&t.dispatchEvent(new u(o+"waiting",{sw:e,originalEvent:n}))},200):"activating"===i&&(clearTimeout(this.M),r||this.s.resolve(e))},g.m=function(n){var t=this._;t===navigator.serviceWorker.controller&&(this.dispatchEvent(new u("controlling",{sw:t,originalEvent:n})),this.h.resolve(t))},g.v=function(n){var t=n.data;this.dispatchEvent(new u("message",{data:t,originalEvent:n}))},l=v,(d=[{key:"active",get:function(){return this.s.promise}},{key:"controlling",get:function(){return this.h.promise}}])&&e(l.prototype,d),w&&e(l,w),v}(function(){function n(){this.B={}}var t=n.prototype;return t.addEventListener=function(n,t){this.D(n).add(t)},t.removeEventListener=function(n,t){this.D(n).remove(t)},t.dispatchEvent=function(n){n.target=this,this.D(n.type).forEach(function(t){return t(n)})},t.D=function(n){return this.B[n]=this.B[n]||new Set},n}());n.Workbox=f,n.messageSW=t,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=workbox-window.prod.umd.js.map
