(self.webpackChunkbshop=self.webpackChunkbshop||[]).push([[895],{9725:(t,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>l});const s={title:"ADMIN - Pomůcky | Bookstart eShop",data:function(){return{sortBy:"url",sortDesc:!1,tools:[],fields:[{key:"item_name",label:"Název",sortable:!0},{key:"url",label:"Web prodejce",sortable:!0},{key:"pieces",label:"ks",sortable:!0}]}},methods:{getTools:function(){var t=this;axios.get("/api/sumaryitems.json").then((function(o){o.data.forEach((function(o){2===o.item_type_idtype&&t.tools.push(o)}))})).catch((function(t){console.log(t)}))}},computed:{totalTools:function(){return this.tools.reduce((function(t,o){return t+Number(o.pieces)}),0)}},beforeMount:function(){this.getTools()}};const l=(0,e(1900).Z)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"tools col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[e("h1",[t._v("Pomůcky")]),t._v(" "),e("vue-scroll-indicator",{attrs:{height:"3px",color:"#dc3545",background:"none"}}),t._v(" "),e("div",{staticClass:"items"},[e("b-table",{attrs:{striped:"",hover:"",items:this.tools,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(o){t.sortBy=o},"update:sort-by":function(o){t.sortBy=o},"update:sortDesc":function(o){t.sortDesc=o},"update:sort-desc":function(o){t.sortDesc=o}},scopedSlots:t._u([{key:"cell(item_name)",fn:function(o){return[e("a",{attrs:{target:"_blank",href:""+o.item.url}},[t._v(t._s(o.value))])]}},{key:"cell(url)",fn:function(o){return[t._v("\n          "+t._s(o.value.split("/")[2].replace("www.","").replace("eshop.",""))+"\n        ")]}},{key:"custom-foot",fn:function(o){return[e("b-tr",[e("b-th",[t._v("Celkem")]),t._v(" "),e("b-th",[t._v(t._s(t.totalTools))])],1)]}}])})],1)],1)}),[],!1,null,null,null).exports},4500:(t,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>l});const s={title:"Pomůcky | Bookstart eShop",methods:{addToolToBasked:function(t){this.$emit("add-to-basked",t)}}};const l=(0,e(1900).Z)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"tools col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"},[e("h1",[t._v("Pomůcky")]),t._v(" "),e("vue-scroll-indicator",{attrs:{height:"3px",color:"#dc3545",background:"none"}}),t._v(" "),e("div",{staticClass:"items"},t._l(this.$parent.tools,(function(o){return e("ItemLine",{key:o.iditem,attrs:{item:o},on:{"add-item-to-basked":function(o){return t.addToolToBasked(o)}}})})),1)],1)}),[],!1,null,null,null).exports}}]);