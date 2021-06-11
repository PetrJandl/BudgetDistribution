(self["webpackChunkbshop"] = self["webpackChunkbshop"] || []).push([["order"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      librarys: [],
      libSelected: "",
      contactPerson: "",
      contactPersonEmail: "",
      contactPersonTele: "",
      deliveryCity: "",
      deliveryName: "",
      deliveryPSC: "",
      deliveryStreet: "",
      dic: "",
      ic: "",
      libCity: "",
      libEmail: "",
      libName: "",
      libPSC: "",
      libStreet: "",
      oName: "",
      deliveryAddress: false
    };
  },
  methods: {
    getLibrarys: function getLibrarys() {
      var _this = this;

      axios.get("/api/librarys.json").then(function (response) {
        response.data.forEach(function (library) {
          _this.librarys.push(library);
        });
      })["catch"](function (error) {
        console.log(error);
      }); //console.log(this.librarys);
    },
    libChange: function libChange() {
      this.ic = this.librarys[this.libSelected].ic;
      this.dic = this.librarys[this.libSelected].dic;
      this.libCity = this.librarys[this.libSelected].libCity;
      this.libEmail = this.librarys[this.libSelected].libEmail;
      this.oName = this.librarys[this.libSelected].oName;
      this.libName = this.librarys[this.libSelected].libName;
      this.libStreet = this.librarys[this.libSelected].libStreet;
      this.libPSC = this.librarys[this.libSelected].libPSC;
      this.deliveryName = this.librarys[this.libSelected].deliveryName;
      this.deliveryCity = this.librarys[this.libSelected].deliveryCity;
      this.deliveryPSC = this.librarys[this.libSelected].deliveryPSC;
      this.deliveryStreet = this.librarys[this.libSelected].deliveryStreet;

      if (this.deliveryName === null) {
        this.deliveryAddress = false;
      } else {
        this.deliveryAddress = true;
      }

      this.contactPerson = this.librarys[this.libSelected].contactPerson;
      this.contactPersonEmail = this.librarys[this.libSelected].contactPersonEmail;
      this.contactPerson = this.librarys[this.libSelected].contactPerson;
      this.contactPersonTele = this.librarys[this.libSelected].contactPersonTele; //console.log(this.libSelected + " /" + this.deliveryName + "/");
    },
    checkForm: function checkForm() {
      console.log("jasne az to bude naprogramovane"); //alert("bohužel");
    }
  },
  beforeMount: function beforeMount() {
    this.getLibrarys(); //console.log("App: "+this.books)
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.row[data-v-18adbebc] {\n  margin-top: 5pt;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/vue/views/Order.vue":
/*!***************************************!*\
  !*** ./resources/vue/views/Order.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Order_vue_vue_type_template_id_18adbebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=18adbebc&scoped=true& */ "./resources/vue/views/Order.vue?vue&type=template&id=18adbebc&scoped=true&");
/* harmony import */ var _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.vue?vue&type=script&lang=js& */ "./resources/vue/views/Order.vue?vue&type=script&lang=js&");
/* harmony import */ var _Order_vue_vue_type_style_index_0_id_18adbebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css& */ "./resources/vue/views/Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Order_vue_vue_type_template_id_18adbebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Order_vue_vue_type_template_id_18adbebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "18adbebc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/views/Order.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/views/Order.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/vue/views/Order.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vue/views/Order.vue?vue&type=template&id=18adbebc&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/vue/views/Order.vue?vue&type=template&id=18adbebc&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_18adbebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_18adbebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_18adbebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=template&id=18adbebc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=template&id=18adbebc&scoped=true&");


/***/ }),

/***/ "./resources/vue/views/Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/vue/views/Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_18adbebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_18adbebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_18adbebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_18adbebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_18adbebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=template&id=18adbebc&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=template&id=18adbebc&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8" },
    [
      _c("h1", [_vm._v("Objednávka")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: {
            id: "registration",
            action: "/api/registrace",
            method: "post",
            "data-toggle": "validator"
          }
        },
        [
          _c("div", { staticClass: "box-body" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "label",
                { staticClass: "col-md-3", attrs: { for: "library" } },
                [_vm._v("Vyberte knihovnu :")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.libSelected,
                        expression: "libSelected"
                      }
                    ],
                    staticClass: "form-control valid",
                    attrs: { id: "library", autofocus: "" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.libSelected = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        function($event) {
                          return _vm.libChange()
                        }
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "", disabled: "" } }, [
                      _vm._v("-")
                    ]),
                    _vm._v(" "),
                    _vm._l(this.librarys, function(library, index) {
                      return _c(
                        "option",
                        { key: library.idlibrary, domProps: { value: index } },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(library.libName) +
                              "\n            "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("input", {
                  staticClass: "form-control valid",
                  attrs: {
                    type: "text",
                    id: "ic",
                    name: "ic",
                    maxlength: "8",
                    placeholder: "IČ",
                    required: "",
                    list: "firmy",
                    disabled: ""
                  },
                  domProps: { value: this.ic }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "dic",
                    name: "dic",
                    maxlength: "14",
                    placeholder: "DIČ",
                    disabled: ""
                  },
                  domProps: { value: this.dic }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "oName",
                    name: "oName",
                    maxlength: "200",
                    placeholder: "Obchodní název",
                    required: "",
                    disabled: ""
                  },
                  domProps: { value: this.oName }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "libStreet",
                    name: "libStreet",
                    maxlength: "200",
                    placeholder: "Ulice a číslo",
                    required: "",
                    disabled: ""
                  },
                  domProps: { value: this.libStreet }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "libCity",
                    name: "libCity",
                    maxlength: "200",
                    placeholder: "Město",
                    required: "",
                    disabled: ""
                  },
                  domProps: { value: this.libCity }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    id: "libPSC",
                    name: "libPSC",
                    placeholder: "PSČ",
                    required: "",
                    disabled: ""
                  },
                  domProps: { value: this.libPSC }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row line", attrs: { id: "adresbox" } }, [
              _c(
                "label",
                { staticClass: "col-md-3", attrs: { for: "deliveryAddress" } },
                [_vm._v("Adresa doručení")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-1" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.deliveryAddress,
                      expression: "deliveryAddress"
                    }
                  ],
                  staticClass: "custom-control-label",
                  attrs: {
                    type: "checkbox",
                    name: "deliveryAddress",
                    id: "deliveryAddress",
                    value: "1"
                  },
                  domProps: {
                    checked: Array.isArray(_vm.deliveryAddress)
                      ? _vm._i(_vm.deliveryAddress, "1") > -1
                      : _vm.deliveryAddress
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.deliveryAddress,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "1",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.deliveryAddress = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.deliveryAddress = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.deliveryAddress = $$c
                      }
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _vm._v(
                  "\n          (Pokud má být objednávka doručena na jinou adresu)\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.deliveryAddress,
                    expression: "deliveryAddress"
                  }
                ],
                staticClass: "row deliadr"
              },
              [
                _c(
                  "label",
                  { staticClass: "col-md-3", attrs: { for: "deliveryName" } },
                  [_vm._v("Místo doručení")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-9" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "deliveryName",
                      name: "deliveryName",
                      maxlength: "200",
                      placeholder: "Název místa doručení"
                    },
                    domProps: { value: this.deliveryName }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.deliveryAddress,
                    expression: "deliveryAddress"
                  }
                ],
                staticClass: "row deliadr"
              },
              [
                _c(
                  "label",
                  { staticClass: "col-md-3", attrs: { for: "deliveryStreet" } },
                  [_vm._v("Ulice doručení")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-9" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "deliveryStreet",
                      name: "deliveryStreet",
                      maxlength: "200",
                      placeholder: "Ulice doručení"
                    },
                    domProps: { value: this.deliveryStreet }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.deliveryAddress,
                    expression: "deliveryAddress"
                  }
                ],
                staticClass: "row line deliadr"
              },
              [
                _c(
                  "label",
                  { staticClass: "col-md-3", attrs: { for: "deliveryCity" } },
                  [_vm._v("Město doručení, PSČ")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "deliveryCity",
                      name: "deliveryCity",
                      maxlength: "200",
                      placeholder: "Město doručení"
                    },
                    domProps: { value: this.deliveryCity }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      id: "deliveryPSC",
                      name: "deliveryPSC",
                      placeholder: "PSČ"
                    },
                    domProps: { value: this.deliveryPSC }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "label",
                { staticClass: "col-md-3", attrs: { for: "libName" } },
                [_vm._v("Jméno knihovny")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "libName",
                    name: "libName",
                    maxlength: "200",
                    placeholder: "Celý oficiální název knihovny",
                    required: ""
                  },
                  domProps: { value: this.libName }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row line" }, [
              _c(
                "label",
                { staticClass: "col-md-3", attrs: { for: "libEmail" } },
                [_vm._v("Email knihovny")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "email",
                    id: "libEmail",
                    name: "libEmail",
                    maxlength: "200",
                    placeholder: "Email knihovny",
                    required: ""
                  },
                  domProps: { value: this.libEmail }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "label",
                { staticClass: "col-md-3", attrs: { for: "contactPerson" } },
                [_vm._v("Jméno kontaktu")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "contactPerson",
                    name: "contactPerson",
                    maxlength: "200",
                    placeholder: "Jméno kontaktní osoby",
                    required: ""
                  },
                  domProps: { value: this.contactPerson }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-3",
                  attrs: { for: "contactPersonEmail" }
                },
                [_vm._v("Email kontaktu")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "email",
                    id: "contactPersonEmail",
                    name: "contactPersonEmail",
                    maxlength: "200",
                    placeholder: "Email kontaktní osoby",
                    required: ""
                  },
                  domProps: { value: this.contactPersonEmail }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row line" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-3",
                  attrs: { for: "contactPersonTele" }
                },
                [_vm._v("Telefon kontaktu")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    id: "contactPersonTele",
                    name: "contactPersonTele",
                    placeholder: "9 místné číslo bez mezer na kontaktní osobu",
                    required: ""
                  },
                  domProps: { value: this.contactPersonTele }
                })
              ])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              [
                _c("router-link", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: this.$parent.sumPrice > 0,
                      expression: "this.$parent.sumPrice > 0"
                    }
                  ],
                  attrs: { to: "/eshop/nakupniKosik", custom: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        return [
                          _c(
                            "a",
                            {
                              staticClass:
                                "\n              btn btn-sm\n              text-dark\n              btn-light\n              nav-link\n              p-3\n              col-6 col-sm-5 col-md-4 col-lg-3\n            ",
                              attrs: { href: href },
                              on: { click: navigate }
                            },
                            [
                              _c("i", { staticClass: "fas fa-chevron-left" }),
                              _vm._v("\n            Zpět\n          ")
                            ]
                          )
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: this.$parent.sumPrice > 0,
                        expression: "this.$parent.sumPrice > 0"
                      }
                    ],
                    staticClass:
                      "\n            btn btn-sm\n            text-white\n            btn-success\n            nav-link\n            p-3\n            col-6\n            offset-sm-2\n            col-sm-5\n            offset-md-4\n            col-md-4\n            offset-lg-6\n            col-lg-3\n          ",
                    on: {
                      click: function($event) {
                        return _vm.checkForm()
                      }
                    }
                  },
                  [
                    _vm._v("\n          Pokračovat\n          "),
                    _c("i", { staticClass: "fas fa-chevron-right" })
                  ]
                )
              ],
              1
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("label", { staticClass: "col-md-2", attrs: { for: "description" } }, [
        _vm._v("Poznámka")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10" }, [
        _c("textarea", {
          staticClass: "form-control",
          attrs: { rows: "3", id: "description", name: "description" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/views/Order.vue?vue&type=style&index=0&id=18adbebc&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3d73941b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);