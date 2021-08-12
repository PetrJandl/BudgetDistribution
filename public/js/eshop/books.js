(self["webpackChunkbshop"] = self["webpackChunkbshop"] || []).push([["books"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Books.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Books.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "ADMIN - Knihy | Bookstart eShop",
  data: function data() {
    return {
      books: [],
      fields: [
      /*
        {
          key: 'isbn',
          label: 'ISBN',
          sortable: true
        },
      */
      {
        key: 'item_name',
        label: 'Název',
        sortable: true
      }, {
        key: 'item_autor',
        label: 'Autor',
        sortable: true
      },
      /*
      {
        key: 'price',
        label: 'CenaKS',
        sortable: true,
      },
      */
      {
        key: 'pieces',
        label: 'ks',
        sortable: true
      }
      /*
      {
        key: 'priceSum',
        label: 'Cena celkem',
        sortable: true,
      },
      */
      ]
    };
  },
  methods: {
    getBooks: function getBooks() {
      var _this = this;

      //console.log(this.books);
      axios.get("/api/sumaryitems.json").then(function (response) {
        //console.log(this.response);
        response.data.forEach(function (item) {
          //this.orders.push(item);
          if (item.item_type_idtype === 1) {
            //console.log(item.iditem);
            _this.books.push(item);
          }
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getBooks(); //console.log("App: "+this.books)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Books.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Books.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Knihy | Bookstart eShop",
  methods: {
    addBookToBasked: function addBookToBasked($book) {
      this.$emit("add-to-basked", $book);
    }
  }
});

/***/ }),

/***/ "./resources/vue/admin/views/Books.vue":
/*!*********************************************!*\
  !*** ./resources/vue/admin/views/Books.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Books_vue_vue_type_template_id_69ef3018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books.vue?vue&type=template&id=69ef3018& */ "./resources/vue/admin/views/Books.vue?vue&type=template&id=69ef3018&");
/* harmony import */ var _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Books.vue?vue&type=script&lang=js& */ "./resources/vue/admin/views/Books.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Books_vue_vue_type_template_id_69ef3018___WEBPACK_IMPORTED_MODULE_0__.render,
  _Books_vue_vue_type_template_id_69ef3018___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/admin/views/Books.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/eshop/views/Books.vue":
/*!*********************************************!*\
  !*** ./resources/vue/eshop/views/Books.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Books_vue_vue_type_template_id_6739b5a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books.vue?vue&type=template&id=6739b5a4& */ "./resources/vue/eshop/views/Books.vue?vue&type=template&id=6739b5a4&");
/* harmony import */ var _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Books.vue?vue&type=script&lang=js& */ "./resources/vue/eshop/views/Books.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Books_vue_vue_type_template_id_6739b5a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Books_vue_vue_type_template_id_6739b5a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/eshop/views/Books.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/admin/views/Books.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/vue/admin/views/Books.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Books.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Books.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vue/eshop/views/Books.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/vue/eshop/views/Books.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Books.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Books.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vue/admin/views/Books.vue?vue&type=template&id=69ef3018&":
/*!****************************************************************************!*\
  !*** ./resources/vue/admin/views/Books.vue?vue&type=template&id=69ef3018& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_69ef3018___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_69ef3018___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_69ef3018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Books.vue?vue&type=template&id=69ef3018& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Books.vue?vue&type=template&id=69ef3018&");


/***/ }),

/***/ "./resources/vue/eshop/views/Books.vue?vue&type=template&id=6739b5a4&":
/*!****************************************************************************!*\
  !*** ./resources/vue/eshop/views/Books.vue?vue&type=template&id=6739b5a4& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_6739b5a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_6739b5a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_6739b5a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Books.vue?vue&type=template&id=6739b5a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Books.vue?vue&type=template&id=6739b5a4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Books.vue?vue&type=template&id=69ef3018&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/admin/views/Books.vue?vue&type=template&id=69ef3018& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "books col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" },
    [
      _c("h1", [_vm._v("Kusy knih v objednávkách")]),
      _vm._v(" "),
      _c("vue-scroll-indicator", {
        attrs: { height: "3px", color: "#dc3545", background: "none" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "items" },
        [
          _c("b-table", {
            attrs: {
              striped: "",
              hover: "",
              items: this.books,
              fields: _vm.fields
            },
            scopedSlots: _vm._u([
              {
                key: "cell(item_name)",
                fn: function(data) {
                  return [
                    _c(
                      "a",
                      {
                        attrs: {
                          target: "_blank",
                          href:
                            'https://www.google.com/search?q=koupit+"' +
                            data.value +
                            '"+' +
                            data.item.isbn
                        }
                      },
                      [_vm._v(_vm._s(data.value))]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Books.vue?vue&type=template&id=6739b5a4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/eshop/views/Books.vue?vue&type=template&id=6739b5a4& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "books col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8" },
    [
      _c("h1", [_vm._v("Knihy")]),
      _vm._v(" "),
      _c("vue-scroll-indicator", {
        attrs: { height: "3px", color: "#dc3545", background: "none" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "items" },
        _vm._l(this.$parent.books, function(book) {
          return _c("ItemLine", {
            key: book.iditem,
            attrs: { item: book },
            on: {
              "add-item-to-basked": function($event) {
                return _vm.addBookToBasked($event)
              }
            }
          })
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);