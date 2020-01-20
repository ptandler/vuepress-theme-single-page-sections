(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/babel-loader/lib/index.js?!../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/vue-loader/lib/index.js?!./global-components/Contact/Phone.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/usr/src/homepage/peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--3-0!C:/usr/src/homepage/peter.tandlers.de/node_modules/babel-loader/lib??ref--3-1!C:/usr/src/homepage/peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/usr/src/homepage/peter.tandlers.de/node_modules/vue-loader/lib??vue-loader-options!C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Phone.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "../peter.tandlers.de/node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_awesome_icons_phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome/icons/phone */ "../peter.tandlers.de/node_modules/vue-awesome/icons/phone.js");

//
//
//


function removeNonNumbers(phone) {
  return phone instanceof String ? phone.replace(/\D/g, "") : phone;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * strip everything that is not a digit from the phone number
   */
  name: "Phone",
  props: ["country", "city", "number", "title"],
  computed: {
    text: function text() {
      return ["+", this.country || "49", " ", this.city, " ", this.number];
    },
    url: function url() {
      return ["tel:+", this.country || "49", removeNonNumbers(this.city), removeNonNumbers(this.number)];
    }
  }
});

/***/ }),

/***/ "../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../peter.tandlers.de/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"7a6ebc5c-vue-loader-template\"}!../peter.tandlers.de/node_modules/vue-loader/lib/loaders/templateLoader.js?!../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/vue-loader/lib/index.js?!./global-components/Contact/Phone.vue?vue&type=template&id=73b85064&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/usr/src/homepage/peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../peter.tandlers.de/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"7a6ebc5c-vue-loader-template"}!C:/usr/src/homepage/peter.tandlers.de/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/usr/src/homepage/peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/usr/src/homepage/peter.tandlers.de/node_modules/vue-loader/lib??vue-loader-options!C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Phone.vue?vue&type=template&id=73b85064& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Contact',{attrs:{"icon":"phone","title":_vm.title || 'Phone',"text":_vm.text,"url":_vm.url}})}
var staticRenderFns = []



/***/ }),

/***/ "../peter.tandlers.de/node_modules/vue-awesome/icons/phone.js":
/*!********************************************************************!*\
  !*** ../peter.tandlers.de/node_modules/vue-awesome/icons/phone.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Icon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Icon.vue */ "../peter.tandlers.de/node_modules/vue-awesome/components/Icon.vue");


_components_Icon_vue__WEBPACK_IMPORTED_MODULE_0__["default"].register({
  phone: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M493.4 24.6c10.9 2.5 18.6 12.2 18.6 23.4 0 256.5-207.9 464-464 464-11.3 0-20.9-7.8-23.4-18.6l-24-104c-2.6-11.3 3.3-22.9 14-27.6l112-48c9.8-4.2 21.2-1.4 28 6.9l49.6 60.6c78.3-36.7 141.2-100.5 177.2-177.2l-60.6-49.6c-8.3-6.7-11.1-18.2-6.9-28l48-112c4.6-10.6 16.2-16.5 27.5-13.9z'
      }
    ]
  }
})


/***/ }),

/***/ "../peter.tandlers.de/node_modules/vue-loader/lib/runtime/componentNormalizer.js?6ff5":
/*!********************************************************************************************************!*\
  !*** C:/usr/src/homepage/peter.tandlers.de/node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./global-components/Contact/Phone.vue":
/*!***************************************************************************************************!*\
  !*** C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Phone.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Phone_vue_vue_type_template_id_73b85064___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Phone.vue?vue&type=template&id=73b85064& */ "./global-components/Contact/Phone.vue?vue&type=template&id=73b85064&");
/* harmony import */ var _Phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Phone.vue?vue&type=script&lang=js& */ "./global-components/Contact/Phone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _peter_tandlers_de_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../peter.tandlers.de/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../peter.tandlers.de/node_modules/vue-loader/lib/runtime/componentNormalizer.js?6ff5");





/* normalize component */

var component = Object(_peter_tandlers_de_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Phone_vue_vue_type_template_id_73b85064___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Phone_vue_vue_type_template_id_73b85064___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./global-components/Contact/Phone.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Phone.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_3_0_peter_tandlers_de_node_modules_babel_loader_lib_index_js_ref_3_1_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../peter.tandlers.de/node_modules/babel-loader/lib??ref--3-1!../../../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../peter.tandlers.de/node_modules/vue-loader/lib??vue-loader-options!./Phone.vue?vue&type=script&lang=js& */ "../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/babel-loader/lib/index.js?!../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/vue-loader/lib/index.js?!./global-components/Contact/Phone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_3_0_peter_tandlers_de_node_modules_babel_loader_lib_index_js_ref_3_1_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./global-components/Contact/Phone.vue?vue&type=template&id=73b85064&":
/*!**********************************************************************************************************************************!*\
  !*** C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Phone.vue?vue&type=template&id=73b85064& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_cacheDirectory_peter_tandlers_de_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_7a6ebc5c_vue_loader_template_peter_tandlers_de_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Phone_vue_vue_type_template_id_73b85064___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../peter.tandlers.de/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"7a6ebc5c-vue-loader-template"}!../../../peter.tandlers.de/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../peter.tandlers.de/node_modules/vue-loader/lib??vue-loader-options!./Phone.vue?vue&type=template&id=73b85064& */ "../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../peter.tandlers.de/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"7a6ebc5c-vue-loader-template\"}!../peter.tandlers.de/node_modules/vue-loader/lib/loaders/templateLoader.js?!../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/vue-loader/lib/index.js?!./global-components/Contact/Phone.vue?vue&type=template&id=73b85064&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_cacheDirectory_peter_tandlers_de_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_7a6ebc5c_vue_loader_template_peter_tandlers_de_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Phone_vue_vue_type_template_id_73b85064___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_cacheDirectory_peter_tandlers_de_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_7a6ebc5c_vue_loader_template_peter_tandlers_de_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Phone_vue_vue_type_template_id_73b85064___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=15.da313698.js.map