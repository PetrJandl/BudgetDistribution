"use strict";
(self["webpackChunkbshop"] = self["webpackChunkbshop"] || []).push([["tools"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Tools.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Tools.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "ADMIN - Pomůcky | Bookstart eShop",
  data: function data() {
    return {
      sortBy: "url",
      sortDesc: false,
      tools: [],
      fields: [{
        key: "url",
        label: "Web prodejce",
        sortable: true
      }, {
        key: "item_name",
        label: "Název",
        sortable: true
      }, {
        key: "pieces",
        label: "ks",
        sortable: true,
        "class": "text-right"
      }, {
        key: "price",
        label: "cena\xA0j.",
        sortable: true,
        "class": "text-right",
        formatter: function formatter(value, key, item) {
          return Intl.NumberFormat("cs-CZ", {
            style: "currency",
            currency: "czk",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0
          }).format(value);
        }
      }, {
        key: "priceSum",
        label: "cena",
        sortable: true,
        "class": "text-right",
        formatter: function formatter(value, key, item) {
          return Intl.NumberFormat("cs-CZ", {
            style: "currency",
            currency: "czk",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0
          }).format(value);
        }
      }]
    };
  },
  methods: {
    getTools: function getTools() {
      var _this = this;

      //console.log(this.tools);
      axios.get("/api/sumaryitems.json").then(function (response) {
        //console.log(this.response);
        response.data.forEach(function (item) {
          //this.orders.push(item);
          if (item.item_type_idtype === 2) {
            //console.log(item.iditem);
            _this.tools.push(item);
          }
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  computed: {
    totalTools: function totalTools() {
      return this.tools.reduce(function (acc, item) {
        return acc + Number(item.pieces);
      }, 0);
    },
    totalPriceTools: function totalPriceTools() {
      return new Intl.NumberFormat("cs-CZ", {
        style: "currency",
        currency: "czk",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
      }).format(this.tools.reduce(function (acc, item) {
        return acc + Number(item.price) * Number(item.pieces);
      }, 0));
    }
  },
  beforeMount: function beforeMount() {
    this.getTools(); //console.log("App: "+this.books)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Tools.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Tools.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Pomůcky | Bookstart eShop",
  methods: {
    addToolToBasked: function addToolToBasked($tool) {
      this.$emit("add-to-basked", $tool);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Tools.vue?vue&type=template&id=4f18526e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Tools.vue?vue&type=template&id=4f18526e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "tools col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
  }, [_c("h1", [_vm._v("Pomůcky")]), _vm._v(" "), _c("vue-scroll-indicator", {
    attrs: {
      height: "3px",
      color: "#dc3545",
      background: "none"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "items"
  }, [_c("b-table", {
    attrs: {
      striped: "",
      hover: "",
      items: this.tools,
      fields: _vm.fields,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc
    },
    on: {
      "update:sortBy": function updateSortBy($event) {
        _vm.sortBy = $event;
      },
      "update:sort-by": function updateSortBy($event) {
        _vm.sortBy = $event;
      },
      "update:sortDesc": function updateSortDesc($event) {
        _vm.sortDesc = $event;
      },
      "update:sort-desc": function updateSortDesc($event) {
        _vm.sortDesc = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "cell(item_name)",
      fn: function fn(data) {
        return [_c("a", {
          attrs: {
            target: "_blank",
            href: "".concat(data.item.url)
          }
        }, [_vm._v(_vm._s(data.value))])];
      }
    }, {
      key: "cell(url)",
      fn: function fn(data) {
        return [_vm._v("\n                " + _vm._s(data.value.split("/")[2].replace("www.", "").replace("eshop.", "")) + "\n            ")];
      }
    }, {
      key: "custom-foot",
      fn: function fn(data) {
        return [_c("b-tr", [_c("b-th", [_vm._v("Celkem")]), _vm._v(" "), _c("b-th"), _vm._v(" "), _c("b-th", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.totalTools) + "ks")]), _vm._v(" "), _c("b-th"), _vm._v(" "), _c("b-th", {
          staticClass: "text-right"
        }, [_vm._v(_vm._s(_vm.totalPriceTools))])], 1)];
      }
    }])
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Tools.vue?vue&type=template&id=54834756&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Tools.vue?vue&type=template&id=54834756& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "tools col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8"
  }, [_c("h1", [_vm._v("Pomůcky")]), _vm._v(" "), _c("vue-scroll-indicator", {
    attrs: {
      height: "3px",
      color: "#dc3545",
      background: "none"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "items"
  }, _vm._l(this.$parent.tools, function (tool) {
    return _c("ItemLine", {
      key: tool.iditem,
      attrs: {
        item: tool
      },
      on: {
        "add-item-to-basked": function addItemToBasked($event) {
          return _vm.addToolToBasked($event);
        }
      }
    });
  }), 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/vue/admin/views/Tools.vue":
/*!*********************************************!*\
  !*** ./resources/vue/admin/views/Tools.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tools_vue_vue_type_template_id_4f18526e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools.vue?vue&type=template&id=4f18526e& */ "./resources/vue/admin/views/Tools.vue?vue&type=template&id=4f18526e&");
/* harmony import */ var _Tools_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tools.vue?vue&type=script&lang=js& */ "./resources/vue/admin/views/Tools.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tools_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tools_vue_vue_type_template_id_4f18526e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tools_vue_vue_type_template_id_4f18526e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/admin/views/Tools.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/eshop/views/Tools.vue":
/*!*********************************************!*\
  !*** ./resources/vue/eshop/views/Tools.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tools_vue_vue_type_template_id_54834756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools.vue?vue&type=template&id=54834756& */ "./resources/vue/eshop/views/Tools.vue?vue&type=template&id=54834756&");
/* harmony import */ var _Tools_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tools.vue?vue&type=script&lang=js& */ "./resources/vue/eshop/views/Tools.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tools_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tools_vue_vue_type_template_id_54834756___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tools_vue_vue_type_template_id_54834756___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/eshop/views/Tools.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/admin/views/Tools.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/vue/admin/views/Tools.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tools.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Tools.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/eshop/views/Tools.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/vue/eshop/views/Tools.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tools.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Tools.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/admin/views/Tools.vue?vue&type=template&id=4f18526e&":
/*!****************************************************************************!*\
  !*** ./resources/vue/admin/views/Tools.vue?vue&type=template&id=4f18526e& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_template_id_4f18526e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_template_id_4f18526e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_template_id_4f18526e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tools.vue?vue&type=template&id=4f18526e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Tools.vue?vue&type=template&id=4f18526e&");


/***/ }),

/***/ "./resources/vue/eshop/views/Tools.vue?vue&type=template&id=54834756&":
/*!****************************************************************************!*\
  !*** ./resources/vue/eshop/views/Tools.vue?vue&type=template&id=54834756& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_template_id_54834756___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_template_id_54834756___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_template_id_54834756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tools.vue?vue&type=template&id=54834756& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Tools.vue?vue&type=template&id=54834756&");


/***/ })

}]);