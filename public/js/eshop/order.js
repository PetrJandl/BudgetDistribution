(self.webpackChunkbshop=self.webpackChunkbshop||[]).push([[637],{7757:(e,t,r)=>{e.exports=r(5666)},165:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var i=r(3645),n=r.n(i)()((function(e){return e[1]}));n.push([e.id,"\n.row[data-v-4f329c50] {\n  margin-top: 5pt;\n}\n",""]);const o=n},6090:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReCaptchaInstance=t.getInstance=t.load=void 0;var i=r(845);Object.defineProperty(t,"load",{enumerable:!0,get:function(){return i.load}}),Object.defineProperty(t,"getInstance",{enumerable:!0,get:function(){return i.getInstance}});var n=r(6551);Object.defineProperty(t,"ReCaptchaInstance",{enumerable:!0,get:function(){return n.ReCaptchaInstance}})},6551:function(e,t){"use strict";var r=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function s(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReCaptchaInstance=void 0;var n=function(){function e(e,t,r){this.siteKey=e,this.recaptchaID=t,this.recaptcha=r,this.styleContainer=null}return e.prototype.execute=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){return[2,this.recaptcha.execute(this.recaptchaID,{action:e})]}))}))},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){null===this.styleContainer&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{display:none !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){null!==this.styleContainer&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();t.ReCaptchaInstance=n},845:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInstance=t.load=void 0;var i,n=r(6551);!function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(i||(i={}));var o=function(){function e(){}return e.load=function(t,r){if(void 0===r&&(r={}),"undefined"==typeof document)return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===i.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===i.LOADING)return t!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise((function(t,r){e.successfulLoadingConsumers.push((function(e){return t(e)})),e.errorLoadingRunnable.push((function(e){return r(e)}))}));e.instanceSiteKey=t,e.setLoadingState(i.LOADING);var o=new e;return new Promise((function(a,s){o.loadScript(t,r.useRecaptchaNet||!1,r.renderParameters?r.renderParameters:{},r.customUrl).then((function(){e.setLoadingState(i.LOADED);var s=o.doExplicitRender(grecaptcha,t,r.explicitRenderParameters?r.explicitRenderParameters:{}),l=new n.ReCaptchaInstance(t,s,grecaptcha);e.successfulLoadingConsumers.forEach((function(e){return e(l)})),e.successfulLoadingConsumers=[],r.autoHideBadge&&l.hideBadge(),e.instance=l,a(l)})).catch((function(t){e.errorLoadingRunnable.forEach((function(e){return e(t)})),e.errorLoadingRunnable=[],s(t)}))}))},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return null===e.loadingState?i.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,r,n,o){var a=this;void 0===r&&(r=!1),void 0===n&&(n={}),void 0===o&&(o="");var s=document.createElement("script");s.setAttribute("recaptcha-v3-script","");var l="https://www.google.com/recaptcha/api.js";r&&(l="https://recaptcha.net/recaptcha/api.js"),o&&(l=o),n.render&&(n.render=void 0);var c=this.buildQueryString(n);return s.src=l+"?render=explicit"+c,new Promise((function(t,r){s.addEventListener("load",a.waitForScriptToLoad((function(){t(s)})),!1),s.onerror=function(t){e.setLoadingState(i.NOT_LOADED),r(t)},document.head.appendChild(s)}))},e.prototype.buildQueryString=function(e){return Object.keys(e).length<1?"":"&"+Object.keys(e).filter((function(t){return!!e[t]})).map((function(t){return t+"="+e[t]})).join("&")},e.prototype.waitForScriptToLoad=function(t){var r=this;return function(){void 0===window.grecaptcha?setTimeout((function(){r.waitForScriptToLoad(t)}),e.SCRIPT_LOAD_DELAY):window.grecaptcha.ready((function(){t()}))}},e.prototype.doExplicitRender=function(e,t,r){var i={sitekey:t,badge:r.badge,size:r.size,tabindex:r.tabindex};return r.container?e.render(r.container,i):e.render(i)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();t.load=o.load,t.getInstance=o.getInstance},5666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,i=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,i){var n=t&&t.prototype instanceof f?t:f,o=Object.create(n.prototype),a=new E(i||[]);return o._invoke=function(e,t,r){var i=u;return function(n,o){if(i===v)throw new Error("Generator is already running");if(i===m){if("throw"===n)throw o;return F()}for(r.method=n,r.arg=o;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===u)throw i=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=v;var l=d(e,t,r);if("normal"===l.type){if(i=r.done?m:h,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=m,r.method="throw",r.arg=l.arg)}}}(e,r,a),o}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u="suspendedStart",h="suspendedYield",v="executing",m="completed",p={};function f(){}function y(){}function b(){}var g={};g[o]=function(){return this};var C=Object.getPrototypeOf,_=C&&C(C(L([])));_&&_!==r&&i.call(_,o)&&(g=_);var S=b.prototype=f.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function r(n,o,a,s){var l=d(e[n],e,o);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&i.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,s)}))}s(l.arg)}var n;this._invoke=function(e,i){function o(){return new t((function(t,n){r(e,i,t,n)}))}return n=n?n.then(o,o):o()}}function k(e,r){var i=e.iterator[r.method];if(i===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=d(i,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(i.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:F}}function F(){return{value:t,done:!0}}return y.prototype=S.constructor=b,b.constructor=y,y.displayName=l(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,s,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},w(P.prototype),P.prototype[a]=function(){return this},e.AsyncIterator=P,e.async=function(t,r,i,n,o){void 0===o&&(o=Promise);var a=new P(c(t,r,i,n),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(S),l(S,s,"Generator"),S[o]=function(){return this},S.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var i=t.pop();if(i in e)return r.value=i,r.done=!1,r}return r.done=!0,r}},e.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(i,n){return s.type="throw",s.arg=e,r.next=i,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var i=r.completion;if("throw"===i.type){var n=i.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,i){return this.delegate={iterator:L(e),resultName:r,nextLoc:i},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},9381:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const n={title:"Objednávka (2/3) | Bookstart eShop",data:function(){var e;return i(e={errors:[],librarys:[],orderForm:this.orderFormLoad,libSelected:this.orderFormLoad[0].libSelected,contactPerson:this.orderFormLoad[0].contactPerson,contactPersonEmail:this.orderFormLoad[0].contactPersonEmail,contactPersonTele:this.orderFormLoad[0].contactPersonTele,deliveryCity:this.orderFormLoad[0].deliveryCity,deliveryName:this.orderFormLoad[0].deliveryName,deliveryPSC:this.orderFormLoad[0].deliveryPSC,deliveryStreet:this.orderFormLoad[0].deliveryStreet,ic:this.orderFormLoad[0].ic,idlibrary:this.orderFormLoad[0].idlibrary,dic:this.orderFormLoad[0].dic,libCity:this.orderFormLoad[0].libCity,libEmail:this.orderFormLoad[0].libEmail,libName:this.orderFormLoad[0].libName,libPSC:this.orderFormLoad[0].libPSC,libStreet:this.orderFormLoad[0].libStreet,oName:this.orderFormLoad[0].oName,description:this.orderFormLoad[0].description,deliveryAddress:this.orderFormLoad[0].deliveryAddress,orderFormLoad:"",loadLibSelected:""},"libSelected",""),i(e,"message",""),e},computed:{deliveryAddressChecked:function(){return!1!==this.deliveryAddress}},methods:{getLibrarys:function(){var e=this;axios.get("/api/librarys.json").then((function(t){0==t.data.length&&(e.message="Všechny knihovny Královéhradeckého kraje již mají objednáno, případně nás kontaktujte na emailu bookstart@knihovnahk.cz"),t.data.forEach((function(t){e.librarys.push(t)}))})).catch((function(e){console.log(e)}))},libChange:function(){this.idlibrary=this.librarys[this.libSelected].idlibrary,this.ic=this.librarys[this.libSelected].ic,this.dic=this.librarys[this.libSelected].dic,this.oName=this.librarys[this.libSelected].oName,this.libStreet=this.librarys[this.libSelected].libStreet,this.libCity=this.librarys[this.libSelected].libCity,this.libPSC=this.librarys[this.libSelected].libPSC,this.deliveryName=this.librarys[this.libSelected].deliveryName,this.deliveryCity=this.librarys[this.libSelected].deliveryCity,this.deliveryPSC=this.librarys[this.libSelected].deliveryPSC,this.deliveryStreet=this.librarys[this.libSelected].deliveryStreet,this.libName=this.librarys[this.libSelected].libName,this.libEmail=this.librarys[this.libSelected].libEmail,this.contactPerson=this.librarys[this.libSelected].contactPerson,this.contactPersonEmail=this.contactPersonEmail=this.librarys[this.libSelected].contactPersonEmail,this.contactPerson=this.librarys[this.libSelected].contactPerson,this.contactPersonTele=this.librarys[this.libSelected].contactPersonTele,null===this.deliveryName?this.deliveryAddress=!1:this.deliveryAddress=!0},checkForm:function(){this.errors=[];var e=!(null!=this.libSelected&&""!=this.libSelected||0==this.libSelected),t=this.deliveryAddress&&(""==this.deliveryName||null===this.deliveryName)&&(""==this.deliveryPSC||null===this.deliveryPSC)&&(""==this.deliveryStreet||null===this.deliveryStreet)&&(""==this.deliveryCity||null===this.deliveryCity);e&&this.errors.push("Nevybrána hnihovna!"),t&&this.errors.push("Je požadována adresa doručení ale není (některá část) vyplňena!"),this.libName||this.errors.push("Nezadáno Jméno knihovny!"),this.libEmail||this.errors.push("Nezadán Email knihovny!"),this.contactPerson||this.errors.push("Nezadáno Jméno kontaktu!"),this.contactPersonEmail||this.errors.push("Nezadán Email kontaktu!"),this.contactPersonTele||this.errors.push("Nezadán Telefón kontaktu!"),e||t||""==this.libName||""==this.libEmail||""==this.contactPerson||""==this.contactPersonEmail||""==this.contactPersonTele||this.$router.push({name:"Recap"})},isOptionSelected:function(e){return e==this.orderForm[0].libSelected}},updated:function(){this.orderForm[0].libSelected=this.libSelected,this.orderForm[0].deliveryAddress=this.deliveryAddress,this.orderForm[0].ic=this.ic,this.orderForm[0].idlibrary=this.idlibrary,this.orderForm[0].dic=this.dic,this.orderForm[0].oName=this.oName,this.orderForm[0].libStreet=this.libStreet,this.orderForm[0].libCity=this.libCity,this.orderForm[0].libPSC=this.libPSC,this.orderForm[0].libName=this.libName,this.orderForm[0].libEmail=this.libEmail,this.orderForm[0].deliveryName=this.deliveryName,this.orderForm[0].deliveryCity=this.deliveryCity,this.orderForm[0].deliveryPSC=this.deliveryPSC,this.orderForm[0].deliveryStreet=this.deliveryStreet,this.orderForm[0].contactPerson=this.contactPerson,this.orderForm[0].contactPersonEmail=this.contactPersonEmail,this.orderForm[0].contactPersonTele=this.contactPersonTele,this.orderForm[0].description=this.description},beforeCreate:function(){this.orderFormLoad=JSON.parse(localStorage.getItem("orderFormStatus")),this.orderFormLoad||(this.orderFormLoad=[{libSelected:"",ic:"",idlibrary:"",contactPerson:"",contactPersonEmail:"",contactPersonTele:"",deliveryCity:"",deliveryName:"",deliveryPSC:"",deliveryStreet:"",dic:"",libCity:"",libEmail:"",libName:"",libPSC:"",libStreet:"",oName:"",description:"",deliveryAddress:!1}],this.loadLibSelected=this.orderFormLoad[0].libSelected,this.deliveryAddress=this.orderFormLoad[0].deliveryAddress),0===this.$parent.sumPrice&&(alert("S prázdným košíkem nelze jít na objednávku!"),this.$router.push({name:"Home"}))},created:function(){""!=this.libSelected&&""==this.orderFormLoad[0].libSelected&&(this.libSelected="",this.deliveryAddress=!1,this.ic="",this.idlibrary="",this.dic="",this.oName="",this.libStreet="",this.libCity="",this.libPSC="",this.libName="",this.libEmail="",this.deliveryName="",this.deliveryCity="",this.deliveryPSC="",this.deliveryStreet="",this.contactPerson="",this.contactPersonEmail="",this.contactPersonTele="",this.description=""),this.libSelected=this.orderForm[0].libSelected,this.getLibrarys()},beforeDestroy:function(){localStorage.setItem("orderFormStatus",JSON.stringify(this.orderForm))}};var o=r(3379),a=r.n(o),s=r(165),l={insert:"head",singleton:!1};a()(s.Z,l);s.Z.locals;const c=(0,r(1900).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"},[e._m(0),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.message,expression:"this.message != ''"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\n    "+e._s(this.message)+"\n  ")]),e._v(" "),e.errors.length?r("p",{staticClass:"text-danger"},[r("b",[e._v("Formulář obsahuje chyby:")]),e._v(" "),r("ul",e._l(e.errors,(function(t){return r("li",[e._v(e._s(t))])})),0)]):e._e(),e._v(" "),r("form",{attrs:{id:"registration",action:"/rekapuitulace",method:"post","data-toggle":"validator"}},[r("div",{staticClass:"box-body"},[r("div",{staticClass:"row"},[r("label",{staticClass:"col-md-3",attrs:{for:"library"}},[e._v("Vyberte knihovnu :")]),e._v(" "),r("div",{staticClass:"col-md-9"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.libSelected,expression:"libSelected"},{name:"focus",rawName:"v-focus"}],staticClass:"form-control valid",attrs:{id:"library"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.libSelected=t.target.multiple?r:r[0]},function(t){return e.libChange()}]}},[r("option",{attrs:{value:"",disabled:""}},[e._v("-")]),e._v(" "),e._l(this.librarys,(function(t,i){return r("option",{key:t.idlibrary,domProps:{value:i,selected:e.isOptionSelected(i)}},[e._v("\n              "+e._s(t.libCity)+" ( "+e._s(t.libName)+" )\n            ")])}))],2)])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 offset-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.ic,expression:"ic"}],staticClass:"form-control valid",attrs:{type:"text",id:"ic",name:"ic",maxlength:"8",placeholder:"IČ",required:"",list:"firmy",disabled:""},domProps:{value:e.ic},on:{input:function(t){t.target.composing||(e.ic=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-4 offset-md-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.dic,expression:"dic"}],staticClass:"form-control",attrs:{type:"text",id:"dic",name:"dic",maxlength:"14",placeholder:"DIČ",disabled:""},domProps:{value:e.dic},on:{input:function(t){t.target.composing||(e.dic=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-9 offset-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.libStreet,expression:"libStreet"}],staticClass:"form-control",attrs:{type:"text",id:"libStreet",name:"libStreet",maxlength:"200",placeholder:"Ulice a číslo",required:"",disabled:""},domProps:{value:e.libStreet},on:{input:function(t){t.target.composing||(e.libStreet=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-4 offset-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.libCity,expression:"libCity"}],staticClass:"form-control",attrs:{type:"text",id:"libCity",name:"libCity",maxlength:"200",placeholder:"Město",required:"",disabled:""},domProps:{value:e.libCity},on:{input:function(t){t.target.composing||(e.libCity=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-4 offset-md-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.libPSC,expression:"libPSC"}],staticClass:"form-control",attrs:{type:"number",id:"libPSC",name:"libPSC",placeholder:"PSČ",required:"",disabled:""},domProps:{value:e.libPSC},on:{input:function(t){t.target.composing||(e.libPSC=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row line",attrs:{id:"adresbox"}},[r("label",{staticClass:"col-md-3",attrs:{for:"deliveryAddress"}},[e._v("Adresa doručení")]),e._v(" "),r("div",{staticClass:"col-md-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryAddress,expression:"deliveryAddress"}],staticClass:"custom-control-label",attrs:{type:"checkbox",name:"deliveryAddress",id:"deliveryAddress",value:"1"},domProps:{checked:Array.isArray(e.deliveryAddress)?e._i(e.deliveryAddress,"1")>-1:e.deliveryAddress},on:{change:function(t){var r=e.deliveryAddress,i=t.target,n=!!i.checked;if(Array.isArray(r)){var o=e._i(r,"1");i.checked?o<0&&(e.deliveryAddress=r.concat(["1"])):o>-1&&(e.deliveryAddress=r.slice(0,o).concat(r.slice(o+1)))}else e.deliveryAddress=n}}})]),e._v(" "),r("div",{staticClass:"col-md-8"},[e._v("\n          (Pokud má být objednávka doručena na jinou adresu)\n        ")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.deliveryAddressChecked,expression:"deliveryAddressChecked"}],staticClass:"row deliadr"},[r("label",{staticClass:"col-md-3",attrs:{for:"deliveryName"}},[e._v("Místo doručení")]),e._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryName,expression:"deliveryName"}],staticClass:"form-control",attrs:{type:"text",id:"deliveryName",name:"deliveryName",maxlength:"200",placeholder:"Název místa doručení"},domProps:{value:e.deliveryName},on:{input:function(t){t.target.composing||(e.deliveryName=t.target.value)}}})])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.deliveryAddressChecked,expression:"deliveryAddressChecked"}],staticClass:"row deliadr"},[r("label",{staticClass:"col-md-3",attrs:{for:"deliveryStreet"}},[e._v("Ulice doručení")]),e._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryStreet,expression:"deliveryStreet"}],staticClass:"form-control",attrs:{type:"text",id:"deliveryStreet",name:"deliveryStreet",maxlength:"200",placeholder:"Ulice doručení"},domProps:{value:e.deliveryStreet},on:{input:function(t){t.target.composing||(e.deliveryStreet=t.target.value)}}})])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.deliveryAddressChecked,expression:"deliveryAddressChecked"}],staticClass:"row line deliadr"},[r("label",{staticClass:"col-md-3",attrs:{for:"deliveryCity"}},[e._v("Město doručení, PSČ")]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryCity,expression:"deliveryCity"}],staticClass:"form-control",attrs:{type:"text",id:"deliveryCity",name:"deliveryCity",maxlength:"200",placeholder:"Město doručení"},domProps:{value:e.deliveryCity},on:{input:function(t){t.target.composing||(e.deliveryCity=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryPSC,expression:"deliveryPSC"}],staticClass:"form-control",attrs:{type:"number",id:"deliveryPSC",name:"deliveryPSC",placeholder:"PSČ"},domProps:{value:e.deliveryPSC},on:{input:function(t){t.target.composing||(e.deliveryPSC=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-md-3",attrs:{for:"libName"}},[e._v("Jméno knihovny")]),e._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.libName,expression:"libName"}],staticClass:"form-control",attrs:{type:"text",id:"libName",name:"libName",maxlength:"200",placeholder:"Celý oficiální název knihovny",required:""},domProps:{value:e.libName},on:{input:function(t){t.target.composing||(e.libName=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row line"},[r("label",{staticClass:"col-md-3",attrs:{for:"libEmail"}},[e._v("Email knihovny")]),e._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.libEmail,expression:"libEmail"}],staticClass:"form-control",attrs:{type:"email",id:"libEmail",name:"libEmail",maxlength:"200",placeholder:"Email knihovny",required:""},domProps:{value:e.libEmail},on:{input:function(t){t.target.composing||(e.libEmail=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-md-3",attrs:{for:"contactPerson"}},[e._v("Jméno kontaktu")]),e._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.contactPerson,expression:"contactPerson"}],staticClass:"form-control",attrs:{type:"text",id:"contactPerson",name:"contactPerson",maxlength:"200",placeholder:"Jméno kontaktní osoby",required:""},domProps:{value:e.contactPerson},on:{input:function(t){t.target.composing||(e.contactPerson=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-md-3",attrs:{for:"contactPersonEmail"}},[e._v("Email kontaktu")]),e._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.contactPersonEmail,expression:"contactPersonEmail"}],staticClass:"form-control",attrs:{type:"email",id:"contactPersonEmail",name:"contactPersonEmail",maxlength:"200",placeholder:"Email kontaktní osoby",required:""},domProps:{value:e.contactPersonEmail},on:{input:function(t){t.target.composing||(e.contactPersonEmail=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row line"},[r("label",{staticClass:"col-md-3",attrs:{for:"contactPersonTele"}},[e._v("Telefon kontaktu")]),e._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.contactPersonTele,expression:"contactPersonTele"}],staticClass:"form-control",attrs:{type:"number",id:"contactPersonTele",name:"contactPersonTele",placeholder:"9 místné číslo bez mezer na kontaktní osobu",required:""},domProps:{value:e.contactPersonTele},on:{input:function(t){t.target.composing||(e.contactPersonTele=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-md-2",attrs:{for:"description"}},[e._v("Poznámka")]),e._v(" "),r("div",{staticClass:"col-md-10"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{rows:"3",id:"description",name:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row"},[r("router-link",{attrs:{to:"/eshop/nakupniKosik",custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.href,n=t.navigate;return[r("a",{staticClass:"\n              btn btn-sm\n              text-dark\n              btn-light\n              nav-link\n              p-3\n              col-6 col-sm-5 col-md-4 col-lg-3\n            ",attrs:{href:i},on:{click:n}},[r("i",{staticClass:"fas fa-chevron-left"}),e._v("\n            Zpět\n          ")])]}}])}),e._v(" "),r("a",{staticClass:"\n            btn btn-sm\n            text-white\n            btn-success\n            nav-link\n            p-3\n            col-6\n            offset-sm-2\n            col-sm-5\n            offset-md-4\n            col-md-4\n            offset-lg-6\n            col-lg-3\n          ",on:{click:e.checkForm}},[e._v("\n          Pokračovat\n          "),r("i",{staticClass:"fas fa-chevron-right"})])],1)])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Kontaktní informace - "),r("small",[e._v("Objednávka (2/3)")])])}],!1,null,"4f329c50",null).exports},8173:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const i={title:"Objednávka odeslána | Bookstart eShop",mounted:function(){this.$emit("clean-basked"),localStorage.clear()}};const n=(0,r(1900).Z)(i,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"},[r("h1",[e._v("Objednávka odeslána !")])])}],!1,null,null,null).exports},4064:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var i=r(7757),n=r.n(i),o=r(538),a=r(7936);function s(e,t,r,i,n,o,a){try{var s=e[o](a),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(i,n)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function a(e){s(o,i,n,a,l,"next",e)}function l(e){s(o,i,n,a,l,"throw",e)}a(void 0)}))}}o.default.use(a.VueReCaptcha,{siteKey:document.querySelector("meta[name=recapcha-site-key]").content,loaderOptions:{autoHideBadge:!0}});const c={title:"Rekapitulace (3/3) | Bookstart eShop",data:function(){return{message:"",order:[{contactPerson:"",contactPersonEmail:"",contactPersonTele:"",deliveryCity:"",deliveryName:"",deliveryPSC:"",deliveryStreet:"",libCity:"",libEmail:"",libName:"",libPSC:"",libStreet:"",oName:"",description:"",deliveryAddress:!1}]}},methods:{recaptcha:function(){var e=this;return l(n().mark((function t(){var r,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$recaptchaLoaded();case 2:return t.next=4,e.$recaptcha("sendOrder");case 4:r=t.sent,i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_recaptcha:r,_token:document.querySelector("meta[name=csrf-token]").content,basked:localStorage.getItem("basked"),order:JSON.stringify(e.order)})},fetch("/eshopNewOrder",i).then(function(){var t=l(n().mark((function t(r){var i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.json();case 2:"ok"!=(i=t.sent).original.message?e.message=i.original.message:e.$router.push({name:"OrderSend"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:case"end":return t.stop()}}),t)})))()}},beforeCreate:function(){0===this.$parent.sumPrice&&(alert("Nelze s prázdným košíkem!"),this.$router.push({name:"Home"}))},beforeMount:function(){},mounted:function(){this.order=JSON.parse(localStorage.getItem("orderFormStatus"))}};const d=(0,r(1900).Z)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"},[e._m(0),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.message,expression:"this.message != ''"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\n    "+e._s(this.message)+"\n  ")]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"pb-1 border-top border-light"},[r("strong",[e._v(e._s(e.order[0].oName))]),e._v(" objednává pro\n      "),r("strong",[e._v(e._s(e.order[0].libName))]),e._v(" :\n    ")])]),e._v(" "),r("div",e._l(this.$parent.basked,(function(t){return r("div",{directives:[{name:"show",rawName:"v-show",value:t.pieceInBasket>0,expression:"item.pieceInBasket > 0"}],key:t.item_name,staticClass:"row pb-1 border-top border-light"},[r("div",{staticClass:"col-12 col-sm-7 col-md-7"},[e._v(e._s(t.item_name))]),e._v(" "),r("div",{staticClass:"col-5 col-sm-2 col-md-1"},[e._v("\n        "+e._s(t.pieceInBasket)+" ks"+e._s(" ")+"\n      ")]),e._v(" "),r("div",{staticClass:"col-7 col-sm-3 col-md-3 text-right"},[r("strong",[e._v(e._s(t.pieceInBasket*t.price)+e._s(" ")+"Kč"),r("small",[e._v(e._s(" ")+"bez"+e._s(" ")+"DPH")])])])])})),0),e._v(" "),r("div",{staticClass:"row mt-0 mb-1 border-top border-dark"},[e._m(1),e._v(" "),r("div",{staticClass:"col-3 col-sm-2 col-md-1"}),e._v(" "),r("div",{staticClass:"col-9 col-sm-3 col-md-3 text-right"},[r("strong",[e._v(e._s(this.$parent.sumPrice)+e._s(" ")+"Kč"),r("small",[e._v(e._s(" ")+"bez"+e._s(" ")+"DPH")])])])]),e._v(" "),r("div",{staticClass:"row pb-1 border-top border-light"},[r("div",{},[e._v("\n      S dodáním na adresu\n      "),e.order[0].deliveryAddress?r("span",[e._v("\n        doručení : "+e._s(e.order[0].deliveryName)+", "+e._s(e.order[0].deliveryStreet)+",\n        "+e._s(e.order[0].deliveryCity)+"\n        "+e._s(e.order[0].deliveryPSC)+"\n      ")]):e._e(),e._v(" "),e.order[0].deliveryAddress?e._e():r("span",[e._v("\n        objednatele : "+e._s(e.order[0].libName)+", "+e._s(e.order[0].libStreet)+",\n        "+e._s(e.order[0].libCity)+"\n        "+e._s(e.order[0].libPSC)+"\n      ")])])]),e._v(" "),r("div",{staticClass:"row pb-1 border-top border-light"},[r("div",{},[e._v("\n      Kontaktní osoba je:\n\n      "+e._s(e.order[0].contactPerson)+"\n      tel: "+e._s(e.order[0].contactPersonTele)+", email:\n      "+e._s(e.order[0].contactPersonEmail)+"\n    ")])]),e._v(" "),r("div",{staticClass:"row"},[r("router-link",{attrs:{to:"/eshop/objednavka",custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.href,n=t.navigate;return[r("a",{staticClass:"\n          btn btn-sm\n          text-dark\n          btn-light\n          nav-link\n          p-3\n          col-6 col-sm-5 col-md-4 col-lg-3\n        ",attrs:{href:i},on:{click:n}},[r("i",{staticClass:"fas fa-chevron-left"}),e._v("\n        Zpět\n      ")])]}}])}),e._v(" "),r("a",{staticClass:"\n        btn btn-sm\n        text-white\n        btn-success\n        nav-link\n        p-3\n        col-6\n        offset-sm-2\n        col-sm-5\n        offset-md-4\n        col-md-4\n        offset-lg-6\n        col-lg-3\n      ",on:{click:e.recaptcha}},[e._v("\n      Odeslat objednavku\n    ")])],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Rekapitulace - "),r("small",[e._v("Objednávka (3/3)")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12 col-sm-7 col-md-7"},[r("strong",[e._v("V celkové ceně")])])}],!1,null,"9e391a18",null).exports},7936:function(e,t,r){"use strict";var i=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function s(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(6090);t.VueReCaptcha=function(e,t){var r=this,o=new a,s=!1,l=null,c=[];e.prototype.$recaptchaLoaded=function(){return new Promise((function(e,t){return null!==l?t(l):!0===s?e(!0):void c.push({resolve:e,reject:t})}))},o.initializeReCaptcha(t).then((function(t){s=!0,e.prototype.$recaptcha=function(e){return i(r,void 0,void 0,(function(){return n(this,(function(r){return[2,t.execute(e)]}))}))},e.prototype.$recaptchaInstance=t,c.forEach((function(e){return e.resolve(!0)}))})).catch((function(e){l=e,c.forEach((function(t){return t.reject(e)}))}))};var a=function(){function e(){}return e.prototype.initializeReCaptcha=function(e){return i(this,void 0,void 0,(function(){return n(this,(function(t){return[2,o.load(e.siteKey,e.loaderOptions)]}))}))},e}()}}]);