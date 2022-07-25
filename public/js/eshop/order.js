/*! For license information please see order.js.LICENSE.txt */
(self.webpackChunkbshop=self.webpackChunkbshop||[]).push([[637],{4583:()=>{},9349:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(1519),o=r.n(i)()((function(e){return e[1]}));o.push([e.id,".row[data-v-00fe8562]{margin-top:5pt}",""]);const n=610==r.j?o:null},6090:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReCaptchaInstance=t.getInstance=t.load=void 0;var i=r(845);Object.defineProperty(t,"load",{enumerable:!0,get:function(){return i.load}}),Object.defineProperty(t,"getInstance",{enumerable:!0,get:function(){return i.getInstance}});var o=r(6551);Object.defineProperty(t,"ReCaptchaInstance",{enumerable:!0,get:function(){return o.ReCaptchaInstance}})},6551:function(e,t){"use strict";var r=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))((function(o,n){function a(e){try{l(i.next(e))}catch(e){n(e)}}function s(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,i,o,n,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(o=2&n[0]?i.return:n[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,n[1])).done)return o;switch(i=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){a.label=n[1];break}if(6===n[0]&&a.label<o[1]){a.label=o[1],o=n;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(n);break}o[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReCaptchaInstance=void 0;var o=function(){function e(e,t,r){this.siteKey=e,this.recaptchaID=t,this.recaptcha=r,this.styleContainer=null}return e.prototype.execute=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){return[2,this.recaptcha.enterprise?this.recaptcha.enterprise.execute(this.recaptchaID,{action:e}):this.recaptcha.execute(this.recaptchaID,{action:e})]}))}))},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){null===this.styleContainer&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{visibility:hidden !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){null!==this.styleContainer&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();t.ReCaptchaInstance=o},845:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInstance=t.load=void 0;var i,o=r(6551);!function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(i||(i={}));var n=function(){function e(){}return e.load=function(t,r){if(void 0===r&&(r={}),"undefined"==typeof document)return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===i.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===i.LOADING)return t!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise((function(t,r){e.successfulLoadingConsumers.push((function(e){return t(e)})),e.errorLoadingRunnable.push((function(e){return r(e)}))}));e.instanceSiteKey=t,e.setLoadingState(i.LOADING);var n=new e;return new Promise((function(a,s){n.loadScript(t,r.useRecaptchaNet||!1,r.useEnterprise||!1,r.renderParameters?r.renderParameters:{},r.customUrl).then((function(){e.setLoadingState(i.LOADED);var s=n.doExplicitRender(grecaptcha,t,r.explicitRenderParameters?r.explicitRenderParameters:{},r.useEnterprise||!1),l=new o.ReCaptchaInstance(t,s,grecaptcha);e.successfulLoadingConsumers.forEach((function(e){return e(l)})),e.successfulLoadingConsumers=[],r.autoHideBadge&&l.hideBadge(),e.instance=l,a(l)})).catch((function(t){e.errorLoadingRunnable.forEach((function(e){return e(t)})),e.errorLoadingRunnable=[],s(t)}))}))},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return null===e.loadingState?i.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,r,o,n,a){var s=this;void 0===r&&(r=!1),void 0===o&&(o=!1),void 0===n&&(n={}),void 0===a&&(a="");var l=document.createElement("script");l.setAttribute("recaptcha-v3-script","");var c="https://www.google.com/recaptcha/api.js";r&&(c=o?"https://recaptcha.net/recaptcha/enterprise.js":"https://recaptcha.net/recaptcha/api.js"),o&&(c="https://www.google.com/recaptcha/enterprise.js"),a&&(c=a),n.render&&(n.render=void 0);var d=this.buildQueryString(n);return l.src=c+"?render=explicit"+d,new Promise((function(t,r){l.addEventListener("load",s.waitForScriptToLoad((function(){t(l)}),o),!1),l.onerror=function(t){e.setLoadingState(i.NOT_LOADED),r(t)},document.head.appendChild(l)}))},e.prototype.buildQueryString=function(e){return Object.keys(e).length<1?"":"&"+Object.keys(e).filter((function(t){return!!e[t]})).map((function(t){return t+"="+e[t]})).join("&")},e.prototype.waitForScriptToLoad=function(t,r){var i=this;return function(){void 0===window.grecaptcha?setTimeout((function(){i.waitForScriptToLoad(t,r)}),e.SCRIPT_LOAD_DELAY):r?window.grecaptcha.enterprise.ready((function(){t()})):window.grecaptcha.ready((function(){t()}))}},e.prototype.doExplicitRender=function(e,t,r,i){var o={sitekey:t,badge:r.badge,size:r.size,tabindex:r.tabindex};return r.container?i?e.enterprise.render(r.container,o):e.render(r.container,o):i?e.enterprise.render(o):e.render(o)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();t.load=n.load,t.getInstance=n.getInstance},4698:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(7031),o=r(9445),n={};for(const e in o)"default"!==e&&(n[e]=()=>o[e]);r.d(t,n);const a=(0,r(1900).Z)(o.default,i.s,i.x,!1,null,null,null).exports},8043:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o={title:"Objednávka (2/3) | Bookstart eShop",data:function(){var e;return i(e={errors:[],librarys:[],orderForm:this.orderFormLoad,libSelected:this.orderFormLoad[0].libSelected,contactPerson:this.orderFormLoad[0].contactPerson,contactPersonEmail:this.orderFormLoad[0].contactPersonEmail,contactPersonTele:this.orderFormLoad[0].contactPersonTele,deliveryCity:this.orderFormLoad[0].deliveryCity,deliveryName:this.orderFormLoad[0].deliveryName,deliveryPSC:this.orderFormLoad[0].deliveryPSC,deliveryStreet:this.orderFormLoad[0].deliveryStreet,ic:this.orderFormLoad[0].ic,idlibrary:this.orderFormLoad[0].idlibrary,dic:this.orderFormLoad[0].dic,libCity:this.orderFormLoad[0].libCity,libEmail:this.orderFormLoad[0].libEmail,libName:this.orderFormLoad[0].libName,libPSC:this.orderFormLoad[0].libPSC,libStreet:this.orderFormLoad[0].libStreet,oName:this.orderFormLoad[0].oName,description:this.orderFormLoad[0].description,deliveryAddress:this.orderFormLoad[0].deliveryAddress,orderFormLoad:"",loadLibSelected:""},"libSelected",""),i(e,"message",""),e},computed:{deliveryAddressChecked:function(){return!1!==this.deliveryAddress}},methods:{getLibrarys:function(){var e=this;axios.get("/api/librarys.json").then((function(t){0==t.data.length&&(e.message='Žádné knihovně z Královéhradeckého kraje nechybí objednávka příslušenství.<br>Nejprve je nutno <a href="https://www.sknizkoudozivota.cz/pro-knihovny/registracni-formular/">objednat nové sety</a>, až následně se vraťte sem, pro objednání příslušenství.<br> V případně problémů nás kontaktujte na emailu bookstart@knihovnahk.cz'),t.data.forEach((function(t){e.librarys.push(t)}))})).catch((function(e){console.log(e)}))},libChange:function(){this.idlibrary=this.librarys[this.libSelected].idlibrary,this.ic=this.librarys[this.libSelected].ic,this.dic=this.librarys[this.libSelected].dic,this.oName=this.librarys[this.libSelected].oName,this.libStreet=this.librarys[this.libSelected].libStreet,this.libCity=this.librarys[this.libSelected].libCity,this.libPSC=this.librarys[this.libSelected].libPSC,this.deliveryName=this.librarys[this.libSelected].deliveryName,this.deliveryCity=this.librarys[this.libSelected].deliveryCity,this.deliveryPSC=this.librarys[this.libSelected].deliveryPSC,this.deliveryStreet=this.librarys[this.libSelected].deliveryStreet,this.libName=this.librarys[this.libSelected].libName,this.libEmail=this.librarys[this.libSelected].libEmail,this.contactPerson=this.librarys[this.libSelected].contactPerson,this.contactPersonEmail=this.contactPersonEmail=this.librarys[this.libSelected].contactPersonEmail,this.contactPerson=this.librarys[this.libSelected].contactPerson,this.contactPersonTele=this.librarys[this.libSelected].contactPersonTele,null===this.deliveryName?this.deliveryAddress=!1:this.deliveryAddress=!0},checkForm:function(){this.errors=[];var e=!(null!=this.libSelected&&""!=this.libSelected||0==this.libSelected),t=this.deliveryAddress&&(""==this.deliveryName||null===this.deliveryName)&&(""==this.deliveryPSC||null===this.deliveryPSC)&&(""==this.deliveryStreet||null===this.deliveryStreet)&&(""==this.deliveryCity||null===this.deliveryCity);e&&this.errors.push("Nevybrána hnihovna!"),t&&this.errors.push("Je požadována adresa doručení ale není (některá část) vyplňena!"),this.libName||this.errors.push("Nezadáno Jméno knihovny!"),this.libEmail||this.errors.push("Nezadán Email knihovny!"),this.contactPerson||this.errors.push("Nezadáno Jméno kontaktu!"),this.contactPersonEmail||this.errors.push("Nezadán Email kontaktu!"),this.contactPersonTele||this.errors.push("Nezadán Telefón kontaktu!"),e||t||""==this.libName||""==this.libEmail||""==this.contactPerson||""==this.contactPersonEmail||""==this.contactPersonTele||this.$router.push({name:"Recap"})},isOptionSelected:function(e){return e==this.orderForm[0].libSelected}},updated:function(){this.orderForm[0].libSelected=this.libSelected,this.orderForm[0].deliveryAddress=this.deliveryAddress,this.orderForm[0].ic=this.ic,this.orderForm[0].idlibrary=this.idlibrary,this.orderForm[0].dic=this.dic,this.orderForm[0].oName=this.oName,this.orderForm[0].libStreet=this.libStreet,this.orderForm[0].libCity=this.libCity,this.orderForm[0].libPSC=this.libPSC,this.orderForm[0].libName=this.libName,this.orderForm[0].libEmail=this.libEmail,this.orderForm[0].deliveryName=this.deliveryName,this.orderForm[0].deliveryCity=this.deliveryCity,this.orderForm[0].deliveryPSC=this.deliveryPSC,this.orderForm[0].deliveryStreet=this.deliveryStreet,this.orderForm[0].contactPerson=this.contactPerson,this.orderForm[0].contactPersonEmail=this.contactPersonEmail,this.orderForm[0].contactPersonTele=this.contactPersonTele,this.orderForm[0].description=this.description},beforeCreate:function(){this.orderFormLoad=JSON.parse(localStorage.getItem("orderFormStatus")),this.orderFormLoad||(this.orderFormLoad=[{libSelected:"",ic:"",idlibrary:"",contactPerson:"",contactPersonEmail:"",contactPersonTele:"",deliveryCity:"",deliveryName:"",deliveryPSC:"",deliveryStreet:"",dic:"",libCity:"",libEmail:"",libName:"",libPSC:"",libStreet:"",oName:"",description:"",deliveryAddress:!1}],this.loadLibSelected=this.orderFormLoad[0].libSelected,this.deliveryAddress=this.orderFormLoad[0].deliveryAddress),0===this.$parent.sumPrice&&(alert("S prázdným košíkem nelze jít na objednávku!"),this.$router.push({name:"Home"}))},created:function(){""!=this.libSelected&&""==this.orderFormLoad[0].libSelected&&(this.libSelected="",this.deliveryAddress=!1,this.ic="",this.idlibrary="",this.dic="",this.oName="",this.libStreet="",this.libCity="",this.libPSC="",this.libName="",this.libEmail="",this.deliveryName="",this.deliveryCity="",this.deliveryPSC="",this.deliveryStreet="",this.contactPerson="",this.contactPersonEmail="",this.contactPersonTele="",this.description=""),this.libSelected=this.orderForm[0].libSelected,this.getLibrarys()},beforeDestroy:function(){localStorage.setItem("orderFormStatus",JSON.stringify(this.orderForm))}};var n=r(3379),a=r.n(n),s=r(9349),l={insert:"head",singleton:!1};a()(s.Z,l);s.Z.locals;const c=(0,r(1900).Z)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"},[e._m(0),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.message,expression:"this.message != ''"}],staticClass:"alert alert-danger",attrs:{role:"alert"},domProps:{innerHTML:e._s(e.message)}},[e._v("\n    "+e._s(this.message)+"\n  ")]),e._v(" "),e.errors.length?t("p",{staticClass:"text-danger"},[t("b",[e._v("Formulář obsahuje chyby:")]),e._v(" "),t("ul",e._l(e.errors,(function(r){return t("li",[e._v(e._s(r))])})),0)]):e._e(),e._v(" "),t("form",{directives:[{name:"show",rawName:"v-show",value:""==this.message,expression:"this.message == ''"}],attrs:{id:"registration",action:"/rekapuitulace",method:"post","data-toggle":"validator"}},[t("div",{staticClass:"box-body"},[t("div",{staticClass:"row"},[t("label",{staticClass:"col-md-3",attrs:{for:"library"}},[e._v("Vyberte knihovnu :")]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.libSelected,expression:"libSelected"},{name:"focus",rawName:"v-focus"}],staticClass:"form-control valid",attrs:{id:"library"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.libSelected=t.target.multiple?r:r[0]},function(t){return e.libChange()}]}},[t("option",{attrs:{value:"",disabled:""}},[e._v("-")]),e._v(" "),e._l(this.librarys,(function(r,i){return t("option",{key:r.idlibrary,domProps:{value:i,selected:e.isOptionSelected(i)}},[e._v("\n              "+e._s(r.libCity)+" ( "+e._s(r.libName)+" )\n            ")])}))],2)])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4 offset-md-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.ic,expression:"ic"}],staticClass:"form-control valid",attrs:{type:"text",id:"ic",name:"ic",maxlength:"8",placeholder:"IČ",required:"",list:"firmy",disabled:""},domProps:{value:e.ic},on:{input:function(t){t.target.composing||(e.ic=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-md-4 offset-md-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.dic,expression:"dic"}],staticClass:"form-control",attrs:{type:"text",id:"dic",name:"dic",maxlength:"14",placeholder:"DIČ",disabled:""},domProps:{value:e.dic},on:{input:function(t){t.target.composing||(e.dic=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-md-9 offset-md-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.libStreet,expression:"libStreet"}],staticClass:"form-control",attrs:{type:"text",id:"libStreet",name:"libStreet",maxlength:"200",placeholder:"Ulice a číslo",required:"",disabled:""},domProps:{value:e.libStreet},on:{input:function(t){t.target.composing||(e.libStreet=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-md-4 offset-md-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.libCity,expression:"libCity"}],staticClass:"form-control",attrs:{type:"text",id:"libCity",name:"libCity",maxlength:"200",placeholder:"Město",required:"",disabled:""},domProps:{value:e.libCity},on:{input:function(t){t.target.composing||(e.libCity=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-md-4 offset-md-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.libPSC,expression:"libPSC"}],staticClass:"form-control",attrs:{type:"number",id:"libPSC",name:"libPSC",placeholder:"PSČ",required:"",disabled:""},domProps:{value:e.libPSC},on:{input:function(t){t.target.composing||(e.libPSC=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"row line",attrs:{id:"adresbox"}},[t("label",{staticClass:"col-md-3",attrs:{for:"deliveryAddress"}},[e._v("Adresa doručení")]),e._v(" "),t("div",{staticClass:"col-md-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryAddress,expression:"deliveryAddress"}],staticClass:"custom-control-label",attrs:{type:"checkbox",name:"deliveryAddress",id:"deliveryAddress",value:"1"},domProps:{checked:Array.isArray(e.deliveryAddress)?e._i(e.deliveryAddress,"1")>-1:e.deliveryAddress},on:{change:function(t){var r=e.deliveryAddress,i=t.target,o=!!i.checked;if(Array.isArray(r)){var n=e._i(r,"1");i.checked?n<0&&(e.deliveryAddress=r.concat(["1"])):n>-1&&(e.deliveryAddress=r.slice(0,n).concat(r.slice(n+1)))}else e.deliveryAddress=o}}})]),e._v(" "),t("div",{staticClass:"col-md-8"},[e._v("\n          (Pokud má být objednávka doručena na jinou adresu)\n        ")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.deliveryAddressChecked,expression:"deliveryAddressChecked"}],staticClass:"row deliadr"},[t("label",{staticClass:"col-md-3",attrs:{for:"deliveryName"}},[e._v("Místo doručení")]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryName,expression:"deliveryName"}],staticClass:"form-control",attrs:{type:"text",id:"deliveryName",name:"deliveryName",maxlength:"200",placeholder:"Název místa doručení"},domProps:{value:e.deliveryName},on:{input:function(t){t.target.composing||(e.deliveryName=t.target.value)}}})])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.deliveryAddressChecked,expression:"deliveryAddressChecked"}],staticClass:"row deliadr"},[t("label",{staticClass:"col-md-3",attrs:{for:"deliveryStreet"}},[e._v("Ulice doručení")]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryStreet,expression:"deliveryStreet"}],staticClass:"form-control",attrs:{type:"text",id:"deliveryStreet",name:"deliveryStreet",maxlength:"200",placeholder:"Ulice doručení"},domProps:{value:e.deliveryStreet},on:{input:function(t){t.target.composing||(e.deliveryStreet=t.target.value)}}})])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.deliveryAddressChecked,expression:"deliveryAddressChecked"}],staticClass:"row line deliadr"},[t("label",{staticClass:"col-md-3",attrs:{for:"deliveryCity"}},[e._v("Město doručení, PSČ")]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryCity,expression:"deliveryCity"}],staticClass:"form-control",attrs:{type:"text",id:"deliveryCity",name:"deliveryCity",maxlength:"200",placeholder:"Město doručení"},domProps:{value:e.deliveryCity},on:{input:function(t){t.target.composing||(e.deliveryCity=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-md-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryPSC,expression:"deliveryPSC"}],staticClass:"form-control",attrs:{type:"number",id:"deliveryPSC",name:"deliveryPSC",placeholder:"PSČ"},domProps:{value:e.deliveryPSC},on:{input:function(t){t.target.composing||(e.deliveryPSC=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"row"},[t("label",{staticClass:"col-md-3",attrs:{for:"libName"}},[e._v("Jméno knihovny")]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.libName,expression:"libName"}],staticClass:"form-control",attrs:{type:"text",id:"libName",name:"libName",maxlength:"200",placeholder:"Celý oficiální název knihovny",required:""},domProps:{value:e.libName},on:{input:function(t){t.target.composing||(e.libName=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"row line"},[t("label",{staticClass:"col-md-3",attrs:{for:"libEmail"}},[e._v("Email knihovny")]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.libEmail,expression:"libEmail"}],staticClass:"form-control",attrs:{type:"email",id:"libEmail",name:"libEmail",maxlength:"200",placeholder:"Email knihovny",required:""},domProps:{value:e.libEmail},on:{input:function(t){t.target.composing||(e.libEmail=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"row"},[t("label",{staticClass:"col-md-3",attrs:{for:"contactPerson"}},[e._v("Jméno kontaktu")]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.contactPerson,expression:"contactPerson"}],staticClass:"form-control",attrs:{type:"text",id:"contactPerson",name:"contactPerson",maxlength:"200",placeholder:"Jméno kontaktní osoby",required:""},domProps:{value:e.contactPerson},on:{input:function(t){t.target.composing||(e.contactPerson=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"row"},[t("label",{staticClass:"col-md-3",attrs:{for:"contactPersonEmail"}},[e._v("Email kontaktu")]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.contactPersonEmail,expression:"contactPersonEmail"}],staticClass:"form-control",attrs:{type:"email",id:"contactPersonEmail",name:"contactPersonEmail",maxlength:"200",placeholder:"Email kontaktní osoby",required:""},domProps:{value:e.contactPersonEmail},on:{input:function(t){t.target.composing||(e.contactPersonEmail=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"row line"},[t("label",{staticClass:"col-md-3",attrs:{for:"contactPersonTele"}},[e._v("Telefon kontaktu")]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.contactPersonTele,expression:"contactPersonTele"}],staticClass:"form-control",attrs:{type:"number",id:"contactPersonTele",name:"contactPersonTele",placeholder:"9 místné číslo bez mezer na kontaktní osobu",required:""},domProps:{value:e.contactPersonTele},on:{input:function(t){t.target.composing||(e.contactPersonTele=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"row"},[t("label",{staticClass:"col-md-2",attrs:{for:"description"}},[e._v("Poznámka")]),e._v(" "),t("div",{staticClass:"col-md-10"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{rows:"3",id:"description",name:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"row"},[t("router-link",{attrs:{to:"/eshop/nakupniKosik",custom:""},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.href,o=r.navigate;return[t("a",{staticClass:"btn btn-sm text-dark btn-light nav-link p-3 col-6 col-sm-5 col-md-4 col-lg-3",attrs:{href:i},on:{click:o}},[t("i",{staticClass:"fas fa-chevron-left"}),e._v("\n            Zpět\n          ")])]}}])}),e._v(" "),t("a",{staticClass:"btn btn-sm text-white btn-success nav-link p-3 col-6 offset-sm-2 col-sm-5 offset-md-4 col-md-4 offset-lg-6 col-lg-3",on:{click:e.checkForm}},[e._v("\n          Pokračovat\n          "),t("i",{staticClass:"fas fa-chevron-right"})])],1)])])])}),[function(){var e=this,t=e._self._c;return t("h1",[e._v("Kontaktní informace - "),t("small",[e._v("Objednávka (2/3)")])])}],!1,null,"00fe8562",null).exports},6503:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const i={title:"Objednávka odeslána | Bookstart eShop",mounted:function(){this.$emit("clean-basked"),localStorage.clear()}};const o=(0,r(1900).Z)(i,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"},[e("h1",[this._v("Objednávka odeslána !")])])}],!1,null,null,null).exports},885:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var i=r(538),o=r(7936);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(){a=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function d(e,t,r,i){var o=t&&t.prototype instanceof v?t:v,n=Object.create(o.prototype),a=new k(i||[]);return n._invoke=function(e,t,r){var i="suspendedStart";return function(o,n){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw n;return N()}for(r.method=o,r.arg=n;;){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===i)throw i="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i="executing";var l=u(e,t,r);if("normal"===l.type){if(i=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),n}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var h={};function v(){}function m(){}function p(){}var f={};c(f,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(x([])));b&&b!==t&&r.call(b,o)&&(f=b);var g=p.prototype=v.prototype=Object.create(f);function C(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function i(o,a,s,l){var c=u(e[o],e,a);if("throw"!==c.type){var d=c.arg,h=d.value;return h&&"object"==n(h)&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){i("next",e,s,l)}),(function(e){i("throw",e,s,l)})):t.resolve(h).then((function(e){d.value=e,s(d)}),(function(e){return i("throw",e,s,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function n(){return new t((function(t,o){i(e,r,t,o)}))}return o=o?o.then(n,n):n()}}function S(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=u(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,n=function t(){for(;++i<e.length;)if(r.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=p,c(g,"constructor",p),c(p,"constructor",m),m.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},C(_.prototype),c(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,i,o,n){void 0===n&&(n=Promise);var a=new _(d(t,r,i,o),n);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},C(g),c(g,l,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var i=t.pop();if(i in e)return r.value=i,r.done=!1,r}return r.done=!0,r}},e.values=x,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(r,i){return a.type="throw",a.arg=e,t.next=r,i&&(t.method="next",t.arg=void 0),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],a=n.completion;if("root"===n.tryLoc)return i("end");if(n.tryLoc<=this.prev){var s=r.call(n,"catchLoc"),l=r.call(n,"finallyLoc");if(s&&l){if(this.prev<n.catchLoc)return i(n.catchLoc,!0);if(this.prev<n.finallyLoc)return i(n.finallyLoc)}else if(s){if(this.prev<n.catchLoc)return i(n.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return i(n.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=e,a.arg=t,n?(this.method="next",this.next=n.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var i=r.completion;if("throw"===i.type){var o=i.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function s(e,t,r,i,o,n,a){try{var s=e[n](a),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(i,o)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var n=e.apply(t,r);function a(e){s(n,i,o,a,l,"next",e)}function l(e){s(n,i,o,a,l,"throw",e)}a(void 0)}))}}i.default.use(o.VueReCaptcha,{siteKey:document.querySelector("meta[name=recapcha-site-key]").content,loaderOptions:{autoHideBadge:!0}});const c={title:"Rekapitulace (3/3) | Bookstart eShop",data:function(){return{message:"",order:[{contactPerson:"",contactPersonEmail:"",contactPersonTele:"",deliveryCity:"",deliveryName:"",deliveryPSC:"",deliveryStreet:"",libCity:"",libEmail:"",libName:"",libPSC:"",libStreet:"",oName:"",description:"",deliveryAddress:!1}]}},methods:{recaptcha:function(){var e=this;return l(a().mark((function t(){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$recaptchaLoaded();case 2:return t.next=4,e.$recaptcha("sendOrder");case 4:r=t.sent,i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_recaptcha:r,_token:document.querySelector("meta[name=csrf-token]").content,basked:localStorage.getItem("basked"),order:JSON.stringify(e.order)})},fetch("/eshopNewOrder",i).then(function(){var t=l(a().mark((function t(r){var i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.json();case 2:"ok"!=(i=t.sent).original.message?e.message=i.original.message:e.$router.push({name:"OrderSend"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:case"end":return t.stop()}}),t)})))()}},beforeCreate:function(){0===this.$parent.sumPrice&&(alert("Nelze s prázdným košíkem!"),this.$router.push({name:"Home"}))},beforeMount:function(){},mounted:function(){this.order=JSON.parse(localStorage.getItem("orderFormStatus"))}};const d=(0,r(1900).Z)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"},[e._m(0),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.message,expression:"this.message != ''"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\n    "+e._s(this.message)+"\n  ")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"pb-1 border-top border-light"},[t("strong",[e._v(e._s(e.order[0].oName))]),e._v(" objednává pro\n      "),t("strong",[e._v(e._s(e.order[0].libName))]),e._v(" :\n    ")])]),e._v(" "),t("div",e._l(this.$parent.basked,(function(r){return t("div",{directives:[{name:"show",rawName:"v-show",value:r.pieceInBasket>0,expression:"item.pieceInBasket > 0"}],key:r.item_name,staticClass:"row pb-1 border-top border-light"},[t("div",{staticClass:"col-12 col-sm-7 col-md-7"},[e._v(e._s(r.item_name))]),e._v(" "),t("div",{staticClass:"col-5 col-sm-2 col-md-1"},[e._v("\n        "+e._s(r.pieceInBasket)+" ks"+e._s(" ")+"\n      ")]),e._v(" "),t("div",{staticClass:"col-7 col-sm-3 col-md-3 text-right"},[t("strong",[e._v(e._s(r.pieceInBasket*r.price)+e._s(" ")+"Kč"),t("small",[e._v(e._s(" ")+"bez"+e._s(" ")+"DPH")])])])])})),0),e._v(" "),t("div",{staticClass:"row mt-0 mb-1 border-top border-dark"},[e._m(1),e._v(" "),t("div",{staticClass:"col-3 col-sm-2 col-md-1"}),e._v(" "),t("div",{staticClass:"col-9 col-sm-3 col-md-3 text-right"},[t("strong",[e._v(e._s(this.$parent.sumPrice)+e._s(" ")+"Kč"),t("small",[e._v(e._s(" ")+"bez"+e._s(" ")+"DPH")])])])]),e._v(" "),t("div",{staticClass:"row pb-1 border-top border-light"},[t("div",{},[e._v("\n      S dodáním na adresu\n      "),e.order[0].deliveryAddress?t("span",[e._v("\n        doručení : "+e._s(e.order[0].deliveryName)+", "+e._s(e.order[0].deliveryStreet)+",\n        "+e._s(e.order[0].deliveryCity)+"\n        "+e._s(e.order[0].deliveryPSC)+"\n      ")]):e._e(),e._v(" "),e.order[0].deliveryAddress?e._e():t("span",[e._v("\n        objednatele : "+e._s(e.order[0].libName)+", "+e._s(e.order[0].libStreet)+",\n        "+e._s(e.order[0].libCity)+"\n        "+e._s(e.order[0].libPSC)+"\n      ")])])]),e._v(" "),t("div",{staticClass:"row pb-1 border-top border-light"},[t("div",{},[e._v("\n      Kontaktní osoba je:\n\n      "+e._s(e.order[0].contactPerson)+"\n      tel: "+e._s(e.order[0].contactPersonTele)+", email:\n      "+e._s(e.order[0].contactPersonEmail)+"\n    ")])]),e._v(" "),t("div",{staticClass:"row"},[t("router-link",{attrs:{to:"/eshop/objednavka",custom:""},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.href,o=r.navigate;return[t("a",{staticClass:"btn btn-sm text-dark btn-light nav-link p-3 col-6 col-sm-5 col-md-4 col-lg-3",attrs:{href:i},on:{click:o}},[t("i",{staticClass:"fas fa-chevron-left"}),e._v("\n        Zpět\n      ")])]}}])}),e._v(" "),t("a",{staticClass:"btn btn-sm text-white btn-success nav-link p-3 col-6 offset-sm-2 col-sm-5 offset-md-4 col-md-4 offset-lg-6 col-lg-3",on:{click:e.recaptcha}},[e._v("\n      Odeslat objednavku\n    ")])],1)])}),[function(){var e=this,t=e._self._c;return t("h1",[e._v("Rekapitulace - "),t("small",[e._v("Objednávka (3/3)")])])},function(){var e=this._self._c;return e("div",{staticClass:"col-12 col-sm-7 col-md-7"},[e("strong",[this._v("V celkové ceně")])])}],!1,null,"9e391a18",null).exports},9445:(e,t,r)=>{"use strict";if(r.r(t),r.d(t,{default:()=>a}),193==r.j)var i=r(4583),o=r.n(i);var n={};for(const e in i)"default"!==e&&(n[e]=()=>i[e]);r.d(t,n);const a=193==r.j?o():null},7031:(e,t,r)=>{"use strict";r.d(t,{s:()=>i,x:()=>o});var i=function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)},o=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"},[t("h1",[e._v("Objednávna")])])}]},7936:function(e,t,r){"use strict";var i=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))((function(o,n){function a(e){try{l(i.next(e))}catch(e){n(e)}}function s(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,i,o,n,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(o=2&n[0]?i.return:n[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,n[1])).done)return o;switch(i=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){a.label=n[1];break}if(6===n[0]&&a.label<o[1]){a.label=o[1],o=n;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(n);break}o[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(6090);t.VueReCaptcha=function(e,t){var r=this,n=new a,s=!1,l=null,c=[];e.prototype.$recaptchaLoaded=function(){return new Promise((function(e,t){return null!==l?t(l):!0===s?e(!0):void c.push({resolve:e,reject:t})}))},n.initializeReCaptcha(t).then((function(t){s=!0,e.prototype.$recaptcha=function(e){return i(r,void 0,void 0,(function(){return o(this,(function(r){return[2,t.execute(e)]}))}))},e.prototype.$recaptchaInstance=t,c.forEach((function(e){return e.resolve(!0)}))})).catch((function(e){l=e,c.forEach((function(t){return t.reject(e)}))}))};var a=function(){function e(){}return e.prototype.initializeReCaptcha=function(e){return i(this,void 0,void 0,(function(){return o(this,(function(t){return[2,n.load(e.siteKey,e.loaderOptions)]}))}))},e}()}}]);