(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-df5af61c"],{

/***/ "4138":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_memorialPage_vue_vue_type_style_index_0_id_4de27454_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("72e4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_memorialPage_vue_vue_type_style_index_0_id_4de27454_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_memorialPage_vue_vue_type_style_index_0_id_4de27454_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_memorialPage_vue_vue_type_style_index_0_id_4de27454_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "72e4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b5d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2626cc8a-vue-loader-template"}!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/views/memorialPage.vue?vue&type=template&id=4de27454&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"text-align":"center","padding-top":"10px"}},[(_vm.type == 0)?_c('van-nav-bar',{attrs:{"title":"我的纪念馆","left-arrow":"","fixed":true,"left-text":"返回","border":true},on:{"click-right":_vm.add,"click-left":_vm.onClickLeft}},[_c('van-button',{staticClass:"btn-add",attrs:{"slot":"right"},slot:"right"},[_vm._v("修改资料")])],1):_c('div',{staticClass:"top_bg"},[_c('div',{staticClass:"left_arrow",on:{"click":_vm.ClickLeft}},[_c('van-icon',{attrs:{"name":"arrow-left"}})],1),_vm._v(" "),_c('span',[_vm._v("网上纪念馆")])]),_vm._v(" "),_c('div',{staticClass:"menu",staticStyle:{"margin-top":"35px"}},[_vm._l((_vm.list.people),function(item,index){return _c('div',{key:index,staticClass:"menu_box"},[_c('div',{staticClass:"menu-centent"},[_c('div',[_c('van-image',{staticClass:"header-img",attrs:{"fit":"cover","width":"100","src":_vm.list.small_vitrotype ? _vm.list.small_vitrotype : _vm.headimg}})],1),_vm._v(" "),_c('ul',{staticClass:"bespeakinfo default"},[_c('li',[_c('span',{staticClass:"title"},[_vm._v("逝者姓名")]),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v(_vm._s(item.username))])]),_vm._v(" "),_c('li',[_c('span',{staticClass:"title"},[_vm._v("性别")]),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v(_vm._s(item.sex))])]),_vm._v(" "),_c('li',[_c('span',{staticClass:"title"},[_vm._v("生辰日期")]),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v(_vm._s(item.birthday))])]),_vm._v(" "),_c('li',[_c('span',{staticClass:"title"},[_vm._v("逝世日期")]),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v(_vm._s(item.dieday))])]),_vm._v(" "),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.type == 0),expression:"type == 0"}]},[_c('span',{staticClass:"title"},[_vm._v("是否公开")]),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.list.privacy == 2 ?'否':'是'))])]),_vm._v(" "),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.type == 0 && _vm.list.privacy == 1),expression:"type == 0 && list.privacy == 1"}]},[_c('span',{staticClass:"title"},[_vm._v("审核状态")]),_vm._v(" "),_c('van-tag',{directives:[{name:"show",rawName:"v-show",value:(_vm.list.state == 1),expression:"list.state == 1"}],attrs:{"plain":"","type":"primary","size":"large"}},[_vm._v("待审核")]),_vm._v(" "),_c('van-tag',{directives:[{name:"show",rawName:"v-show",value:(_vm.list.state == 2),expression:"list.state == 2"}],attrs:{"plain":"","size":"large"}},[_vm._v("未通过")]),_vm._v(" "),_c('van-tag',{directives:[{name:"show",rawName:"v-show",value:(_vm.list.state == 3),expression:"list.state == 3"}],attrs:{"plain":"","type":"success","size":"large"}},[_vm._v("已通过")])],1)])]),_vm._v(" "),_c('h3',[_vm._v("生平简介")]),_vm._v(" "),_c('div',{staticClass:"menu-centent txt_p"},[_c('p',[_vm._v(_vm._s(item.introduction))])])])}),_vm._v(" "),(_vm.type == 0)?_c('div',{staticClass:"detail-btn"},[_c('div',{staticClass:"detail-btn-left",on:{"click":_vm.ClickLeft}},[_c('van-icon',{staticClass:"detail-ico-shop",attrs:{"name":"shop"}}),_vm._v("进入纪念馆\n      ")],1),_vm._v(" "),_c('div',{staticClass:"detail-btn-right",on:{"click":_vm.handDel}},[_c('van-icon',{staticClass:"detail-ico-shop",attrs:{"name":"card"}}),_vm._v("删除纪念馆\n      ")],1)]):_vm._e()],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/memorialPage.vue?vue&type=template&id=4de27454&scoped=true&

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/style/index.js
var style = __webpack_require__("5661");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/index.js + 2 modules
var toast = __webpack_require__("2f2a");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/dialog/style/index.js
var dialog_style = __webpack_require__("ca55");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/dialog/index.js + 1 modules
var dialog = __webpack_require__("df33");

// EXTERNAL MODULE: ./src/api/index.js + 1 modules
var api = __webpack_require__("365c");

// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: external "Vuex"
var external_Vuex_ = __webpack_require__("5880");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/views/memorialPage.vue?vue&type=script&lang=js&





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var memorialPagevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      list: {},
      headimg: "http://kykjgm.hbkykj.cn/" + 'resource/memorial/head.png',
      id: this.$route.query.id,
      type: this.$route.query.type || 0
    };
  },
  created: function created() {
    this.getList();
  },
  computed: _objectSpread({}, Object(external_Vuex_["mapState"])(['userInfo'])),
  methods: {
    getList: function getList() {
      var _this = this;

      var data = {
        id: this.id,
        uid: store["a" /* default */].getters.userInfo.id || 2
      };
      Object(api["f" /* Memorialmyinfo */])(data).then(function (res) {
        _this.list = res.data;
      });
    },
    onClickLeft: function onClickLeft() {
      this.$router.push({
        name: 'memorial'
      });
    },
    ClickLeft: function ClickLeft() {
      this.$router.push({
        name: 'page',
        query: {
          id: this.id
        }
      });
    },
    add: function add() {
      this.$router.push({
        name: 'mymemorial',
        query: {
          id: this.id
        }
      });
    },
    handDel: function handDel() {
      var _this2 = this;

      dialog["a" /* default */].confirm({
        title: '删除提示',
        message: '您确认删除该纪念馆吗？'
      }).then(function () {
        var data = {
          id: _this2.id
        };
        Object(api["k" /* memorialdel */])(data).then(function (res) {
          if (res.code === 0) {
            Object(toast["a" /* default */])({
              message: '删除成功',
              duration: 800
            });

            _this2.$router.push({
              name: 'memorial'
            });
          }
        });
      }).catch(function () {
        // on cancel
        Object(toast["a" /* default */])({
          message: '已取消',
          duration: 800
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/memorialPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_memorialPagevue_type_script_lang_js_ = (memorialPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/memorialPage.vue?vue&type=style&index=0&id=4de27454&scoped=true&lang=css&
var memorialPagevue_type_style_index_0_id_4de27454_scoped_true_lang_css_ = __webpack_require__("4138");

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.0@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("623f");

// CONCATENATED MODULE: ./src/views/memorialPage.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_memorialPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4de27454",
  null
  
)

/* harmony default export */ var memorialPage = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);