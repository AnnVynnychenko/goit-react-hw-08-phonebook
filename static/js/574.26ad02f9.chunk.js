/*! For license information please see 574.26ad02f9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[574],{574:function(t,r,e){e.r(r),e.d(r,{default:function(){return u}});var n=e(434),o=e(253),a=e(184),i=function(){var t=(0,n.I0)();return(0,a.jsxs)("form",{onSubmit:function(r){r.preventDefault();var e=r.currentTarget.elements,n=e.email,a=e.password;t((0,o.x4)({email:n.value,password:a.value})),r.currentTarget.reset()},children:[(0,a.jsxs)("label",{children:["Email",(0,a.jsx)("input",{type:"email",name:"email"})]}),(0,a.jsxs)("label",{children:["Password",(0,a.jsx)("input",{type:"password",name:"password"})]}),(0,a.jsx)("button",{type:"submit",children:"Log In"})]})},u=function(){return(0,a.jsx)(i,{})}},253:function(t,r,e){e.d(r,{x4:function(){return f},z2:function(){return h}});var n,o,a,i=e(861),u=e(182),c=e(243);function s(){s=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var a=r&&r.prototype instanceof g?r:g,i=Object.create(a.prototype),u=new N(n||[]);return o(i,"_invoke",{value:_(t,e,u)}),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",v="executing",y="completed",d={};function g(){}function m(){}function w(){}var b={};l(b,i,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(P([])));L&&L!==e&&n.call(L,i)&&(b=L);var E=w.prototype=g.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,i,u){var c=f(t[o],t,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,i,u)}),(function(t){e("throw",t,i,u)})):r.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,u)}))}u(c.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function _(r,e,n){var o=p;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?y:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function P(r){if(r||""===r){var e=r[i];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=l(w,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(k.prototype),l(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(h(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(E),l(E,c,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return u.type="throw",u.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:P(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}c.Z.defaults.baseURL="https://connections-api.herokuapp.com/";var l=function(t){c.Z.defaults.headers.common.Authorization="Bearer ".concat(t)},h=(0,u.createAsyncThunk)("auth/register",(function(t,r){return(n=n||(0,i.Z)(s().mark((function t(r,e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.post("users/signup",r);case 3:return n=t.sent,l(n.data.token),console.log("esponse.data",n.data),t.abrupt("return",n.data);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",e.rejectWithValue(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)})),f=(0,u.createAsyncThunk)("auth/login",(function(t,r){return(o=o||(0,i.Z)(s().mark((function t(r,e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.post("users/login",r);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",e.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}));(0,u.createAsyncThunk)("auth/logout",(function(t,r){return(a=a||(0,i.Z)(s().mark((function t(r,e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.post("users/login",r);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",e.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}))}}]);
//# sourceMappingURL=574.26ad02f9.chunk.js.map