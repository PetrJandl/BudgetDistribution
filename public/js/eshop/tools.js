(self.webpackChunkbshop=self.webpackChunkbshop||[]).push([[895],{4315:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});const s={title:"ADMIN - Pomůcky | Bookstart eShop",data:function(){return{sortBy:"url",sortDesc:!1,tools:[],fields:[{key:"item_name",label:"Název",sortable:!0},{key:"url",label:"Web prodejce",sortable:!0},{key:"pieces",label:"ks",sortable:!0}]}},methods:{getTools:function(){var t=this;axios.get("/api/sumaryitems.json").then((function(e){e.data.forEach((function(e){2===e.item_type_idtype&&t.tools.push(e)}))})).catch((function(t){console.log(t)}))}},computed:{totalTools:function(){return this.tools.reduce((function(t,e){return t+Number(e.pieces)}),0)}},beforeMount:function(){this.getTools()}};const l=(0,o(1900).Z)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tools col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[o("h1",[t._v("Pomůcky")]),t._v(" "),o("vue-scroll-indicator",{attrs:{height:"3px",color:"#dc3545",background:"none"}}),t._v(" "),o("div",{staticClass:"items"},[o("b-table",{attrs:{striped:"",hover:"",items:this.tools,fields:t.fields},scopedSlots:t._u([{key:"cell(item_name)",fn:function(e){return[o("a",{attrs:{target:"_blank",href:""+e.item.url}},[t._v(t._s(e.value))])]}},{key:"cell(url)",fn:function(e){return[t._v("\n          "+t._s(e.value.split("/")[2].replace("www.","").replace("eshop.",""))+"\n        ")]}},{key:"custom-foot",fn:function(e){return[o("b-tr",[o("b-th",[t._v("Celkem")]),t._v(" "),o("b-th",[t._v(t._s(t.totalTools))])],1)]}}])})],1)],1)}),[],!1,null,null,null).exports},4500:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});const s={title:"Pomůcky | Bookstart eShop",methods:{addToolToBasked:function(t){this.$emit("add-to-basked",t)}}};const l=(0,o(1900).Z)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tools col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"},[o("h1",[t._v("Pomůcky")]),t._v(" "),o("vue-scroll-indicator",{attrs:{height:"3px",color:"#dc3545",background:"none"}}),t._v(" "),o("div",{staticClass:"items"},t._l(this.$parent.tools,(function(e){return o("ItemLine",{key:e.iditem,attrs:{item:e},on:{"add-item-to-basked":function(e){return t.addToolToBasked(e)}}})})),1)],1)}),[],!1,null,null,null).exports}}]);