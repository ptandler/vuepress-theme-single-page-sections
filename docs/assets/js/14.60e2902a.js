(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/babel-loader/lib/index.js?!../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/vue-loader/lib/index.js?!./global-components/Contact/Email.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/usr/src/homepage/peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--3-0!C:/usr/src/homepage/peter.tandlers.de/node_modules/babel-loader/lib??ref--3-1!C:/usr/src/homepage/peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/usr/src/homepage/peter.tandlers.de/node_modules/vue-loader/lib??vue-loader-options!C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Email.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "../peter.tandlers.de/node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_awesome_icons_envelope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome/icons/envelope */ "../peter.tandlers.de/node_modules/vue-awesome/icons/envelope.js");

//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Email",
  props: ["name", "domain", "title"],
  computed: {
    text: function text() {
      return [this.name || "webmaster", "@", this.domain];
    },
    url: function url() {
      var url = this.text.slice(0);
      url.unshift("mailto:");
      return url;
    }
  }
});

/***/ }),

/***/ "../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../peter.tandlers.de/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"7a6ebc5c-vue-loader-template\"}!../peter.tandlers.de/node_modules/vue-loader/lib/loaders/templateLoader.js?!../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/vue-loader/lib/index.js?!./global-components/Contact/Email.vue?vue&type=template&id=717d482d&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/usr/src/homepage/peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../peter.tandlers.de/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"7a6ebc5c-vue-loader-template"}!C:/usr/src/homepage/peter.tandlers.de/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/usr/src/homepage/peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/usr/src/homepage/peter.tandlers.de/node_modules/vue-loader/lib??vue-loader-options!C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Email.vue?vue&type=template&id=717d482d& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Contact',{attrs:{"icon":"envelope","title":_vm.title || 'Email',"text":_vm.text,"url":_vm.url}})}
var staticRenderFns = []



/***/ }),

/***/ "../peter.tandlers.de/node_modules/vue-awesome/icons/envelope.js":
/*!***********************************************************************!*\
  !*** ../peter.tandlers.de/node_modules/vue-awesome/icons/envelope.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Icon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Icon.vue */ "../peter.tandlers.de/node_modules/vue-awesome/components/Icon.vue");


_components_Icon_vue__WEBPACK_IMPORTED_MODULE_0__["default"].register({
  envelope: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M502.3 190.8c3.9-3.1 9.7-0.2 9.7 4.7v204.5c0 26.5-21.5 48-48 48h-416c-26.5 0-48-21.5-48-48v-204.4c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7 0.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c-23.2 0.4-56.6-29.2-73.4-41.4-132.7-96.3-142.8-104.8-173.4-128.7-5.8-4.6-9.2-11.5-9.2-18.9v-19c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v19c0 7.4-3.4 14.4-9.2 18.9-30.6 24-40.7 32.4-173.4 128.7-16.8 12.2-50.2 41.8-73.4 41.4z'
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

/***/ "./global-components/Contact/Email.vue":
/*!***************************************************************************************************!*\
  !*** C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Email.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Email_vue_vue_type_template_id_717d482d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Email.vue?vue&type=template&id=717d482d& */ "./global-components/Contact/Email.vue?vue&type=template&id=717d482d&");
/* harmony import */ var _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email.vue?vue&type=script&lang=js& */ "./global-components/Contact/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _peter_tandlers_de_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../peter.tandlers.de/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../peter.tandlers.de/node_modules/vue-loader/lib/runtime/componentNormalizer.js?6ff5");





/* normalize component */

var component = Object(_peter_tandlers_de_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Email_vue_vue_type_template_id_717d482d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Email_vue_vue_type_template_id_717d482d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./global-components/Contact/Email.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Email.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_3_0_peter_tandlers_de_node_modules_babel_loader_lib_index_js_ref_3_1_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../peter.tandlers.de/node_modules/babel-loader/lib??ref--3-1!../../../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../peter.tandlers.de/node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=script&lang=js& */ "../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/babel-loader/lib/index.js?!../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/vue-loader/lib/index.js?!./global-components/Contact/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_3_0_peter_tandlers_de_node_modules_babel_loader_lib_index_js_ref_3_1_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./global-components/Contact/Email.vue?vue&type=template&id=717d482d&":
/*!**********************************************************************************************************************************!*\
  !*** C:/usr/src/homepage/vuepress-theme-single-page-sections/global-components/Contact/Email.vue?vue&type=template&id=717d482d& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_cacheDirectory_peter_tandlers_de_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_7a6ebc5c_vue_loader_template_peter_tandlers_de_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_717d482d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../peter.tandlers.de/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"7a6ebc5c-vue-loader-template"}!../../../peter.tandlers.de/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../peter.tandlers.de/node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=template&id=717d482d& */ "../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../peter.tandlers.de/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"7a6ebc5c-vue-loader-template\"}!../peter.tandlers.de/node_modules/vue-loader/lib/loaders/templateLoader.js?!../peter.tandlers.de/node_modules/cache-loader/dist/cjs.js?!../peter.tandlers.de/node_modules/vue-loader/lib/index.js?!./global-components/Contact/Email.vue?vue&type=template&id=717d482d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_cacheDirectory_peter_tandlers_de_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_7a6ebc5c_vue_loader_template_peter_tandlers_de_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_717d482d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_cacheDirectory_peter_tandlers_de_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_7a6ebc5c_vue_loader_template_peter_tandlers_de_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_peter_tandlers_de_node_modules_cache_loader_dist_cjs_js_ref_0_0_peter_tandlers_de_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_717d482d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=14.60e2902a.js.map