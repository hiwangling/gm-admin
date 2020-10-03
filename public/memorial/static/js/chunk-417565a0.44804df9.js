(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-417565a0"],{

/***/ "0234":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6587":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2626cc8a-vue-loader-template"}!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/views/mymemorial.vue?vue&type=template&id=9b64cc0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"text-align":"center","padding-top":"10px","background":"#fff"}},[_c('van-nav-bar',{attrs:{"title":_vm.title,"left-arrow":"","left-text":"返回","fixed":true,"border":true},on:{"click-left":_vm.onClickLeft}}),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"35px"}},[_vm._l((_vm.round),function(item,index){return _c('div',{key:index},[_c('van-field',{attrs:{"required":"","label":"逝者姓名","placeholder":"请输入姓名","rules":[{ required: true, message: '请填写姓名' }]},model:{value:(_vm.dataForm.people[index].username),callback:function ($$v) {_vm.$set(_vm.dataForm.people[index], "username", $$v)},expression:"dataForm.people[index].username"}}),_vm._v(" "),_c('van-field',{attrs:{"readonly":"","clickable":"","name":"sex","value":_vm.dataForm.people[index].sex,"label":"逝者性别","placeholder":"点击选择性别"},on:{"click":function($event){return _vm.sexs(index)}}}),_vm._v(" "),_c('van-field',{attrs:{"readonly":"","clickable":"","name":"datetimePicker","value":_vm.dataForm.people[index].birthday,"label":"出生年月","placeholder":"点击选择日期"},on:{"click":function($event){return _vm.birthday(index)}}}),_vm._v(" "),_c('van-field',{attrs:{"readonly":"","clickable":"","name":"datetimePicker","value":_vm.dataForm.people[index].dieday,"min-date":_vm.minDates,"label":"逝世年月","placeholder":"点击选择日期"},on:{"click":function($event){return _vm.dead(index)}}}),_vm._v(" "),_c('van-field',{attrs:{"rows":"2","autosize":"","label":"生平简介","type":"textarea","placeholder":"请输入"},model:{value:(_vm.dataForm.people[index].introduction),callback:function ($$v) {_vm.$set(_vm.dataForm.people[index], "introduction", $$v)},expression:"dataForm.people[index].introduction"}})],1)}),_vm._v(" "),(_vm.round < 2)?_c('van-cell',{staticClass:"add-bury",on:{"click":_vm.addBury}},[_c('template',{slot:"title"},[_c('van-icon',{staticClass:"ico_square",attrs:{"name":"add-square"}}),_vm._v(" "),_c('span',{staticClass:"custom-title ico_square_txt"},[_vm._v("添加逝者")])],1)],2):_vm._e(),_vm._v(" "),_c('van-field',{attrs:{"label":"纪念馆名称","required":"","placeholder":"请输入名称"},model:{value:(_vm.dataForm.title),callback:function ($$v) {_vm.$set(_vm.dataForm, "title", $$v)},expression:"dataForm.title"}}),_vm._v(" "),_c('van-field',{attrs:{"name":"uploader","label":"上传头像"},scopedSlots:_vm._u([{key:"input",fn:function(){return [_c('van-uploader',{attrs:{"max-count":"1","after-read":_vm.afterRead},model:{value:(_vm.uploader),callback:function ($$v) {_vm.uploader=$$v},expression:"uploader"}})]},proxy:true}])}),_vm._v(" "),_c('p',{staticClass:"tips-img"},[_vm._v("* 如果是双人建议上传合照")]),_vm._v(" "),_c('h3',{staticClass:"img-h3"},[_vm._v("选择背景")]),_vm._v(" "),_c('div',{staticClass:"tips-bg"},_vm._l((_vm.images),function(item,idx){return _c('van-image',{key:idx,class:{checked:idx==_vm.imgIndex},staticStyle:{"margin":"0 3px","width":"60px","height":"60px"},attrs:{"fit":"cover","src":item},on:{"click":function($event){return _vm.changeImg(idx)}}})}),1),_vm._v(" "),_c('h3',{staticClass:"img-h3"},[_vm._v("选择音乐")]),_vm._v(" "),_c('div',{staticClass:"music"},_vm._l((_vm.music),function(item,idx){return _c('van-tag',{key:idx,staticClass:"music-btn",attrs:{"color":"#f2826a","size":"large","plain":idx == _vm.musicIndex ? false :true},on:{"click":function($event){return _vm.changeList(idx)}}},[_vm._v(_vm._s(item))])}),1),_vm._v(" "),_c('h3',{staticClass:"img-h3"},[_vm._v("是否公开")]),_vm._v(" "),_c('div',{staticClass:"ispubilc"},[_c('van-radio-group',{attrs:{"direction":"horizontal"},model:{value:(_vm.dataForm.privacy),callback:function ($$v) {_vm.$set(_vm.dataForm, "privacy", $$v)},expression:"dataForm.privacy"}},[_c('van-radio',{attrs:{"name":1}},[_vm._v("是")]),_vm._v(" "),_c('van-radio',{attrs:{"name":2}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('div',{staticStyle:{"margin":"16px"}},[(_vm.title == '新建纪念馆')?_c('van-button',{attrs:{"round":"","block":"","type":"info"},on:{"click":_vm.memorial_add}},[_vm._v("提交")]):_c('van-button',{attrs:{"round":"","block":"","type":"info"},on:{"click":_vm.memorial_edit}},[_vm._v("确认修改")])],1),_vm._v(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showPicker),callback:function ($$v) {_vm.showPicker=$$v},expression:"showPicker"}},[_c('van-datetime-picker',{attrs:{"type":"date","min-date":_vm.minDate},on:{"confirm":_vm.onConfirm,"cancel":function($event){_vm.showPicker = false}},model:{value:(_vm.currentDate),callback:function ($$v) {_vm.currentDate=$$v},expression:"currentDate"}})],1),_vm._v(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showPickers),callback:function ($$v) {_vm.showPickers=$$v},expression:"showPickers"}},[_c('van-datetime-picker',{attrs:{"type":"date","min-date":_vm.minDate},on:{"confirm":_vm.onConfirms,"cancel":function($event){_vm.showPickers = false}},model:{value:(_vm.currentDates),callback:function ($$v) {_vm.currentDates=$$v},expression:"currentDates"}})],1),_vm._v(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showsex),callback:function ($$v) {_vm.showsex=$$v},expression:"showsex"}},[_c('van-picker',{attrs:{"show-toolbar":"","columns":_vm.sex},on:{"confirm":_vm.onConfirmsex,"cancel":function($event){_vm.showsex = false}}})],1)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/mymemorial.vue?vue&type=template&id=9b64cc0c&scoped=true&

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/style/index.js
var style = __webpack_require__("5661");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/index.js + 2 modules
var toast = __webpack_require__("2f2a");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/dialog/style/index.js
var dialog_style = __webpack_require__("ca55");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/dialog/index.js + 1 modules
var dialog = __webpack_require__("df33");

// EXTERNAL MODULE: ./node_modules/_moment@2.24.0@moment/moment.js
var moment = __webpack_require__("6bf2");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./src/api/index.js + 1 modules
var api = __webpack_require__("365c");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/views/mymemorial.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var mymemorialvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      list: {},
      round: [1],
      index: 0,
      title: '',
      sendword: '',
      dataForm: {
        uid: '',
        id: '',
        mid: 1,
        sid: 1,
        privacy: 1,
        title: '',
        sendword: '',
        vitrotype: '',
        people: [{
          username: '',
          sex: '',
          birthday: '',
          dieday: '',
          introduction: ''
        }]
      },
      uploader: [],
      sex: ['男', '女'],
      minDate: new Date('1870/01/01'),
      minDates: new Date('2020/01/01'),
      currentDate: new Date('1950/01/01'),
      currentDates: new Date('2020/01/01'),
      showPicker: false,
      showPickers: false,
      showsex: false,
      img: [],
      musice: [],
      images: [],
      music: [],
      musicIndex: 0,
      imgIndex: 0
    };
  },
  created: function created() {
    this.getList();
    this.title = '新建纪念馆';

    if (this.$route.query.id) {
      this.handleUpdate(this.$route.query.id);
    }
  },
  mounted: function mounted() {},
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (!store["a" /* default */].getters.userInfo.realname || !store["a" /* default */].getters.userInfo.mobile) {
      dialog["a" /* default */].alert({
        title: '温馨提示',
        message: '创建或修改纪念馆必须完善手机和姓名！'
      }).then(function () {
        next({
          path: '/user'
        });
      });
    } else {
      next();
    }
  },
  methods: {
    getList: function getList() {
      var _this = this;

      Object(api["m" /* typelist */])().then(function (res) {
        _this.img = res.data[0].deploy;
        _this.musice = res.data[1].deploy;
        _this.dataForm.sid = _this.img[0].id;
        _this.dataForm.mid = _this.musice[0].id;

        _this.img.forEach(function (v) {
          _this.images.push(v.thumb);
        });

        _this.musice.forEach(function (v) {
          _this.music.push(v.title);
        });
      });
    },
    onClickLeft: function onClickLeft() {
      this.$router.back();
    },
    memorial_add: function memorial_add() {
      var _this2 = this;

      if (!this.dataForm.people[0].username) {
        Object(toast["a" /* default */])('请输入逝者姓名');

        return;
      }

      if (!this.dataForm.title) {
        Object(toast["a" /* default */])('请输入纪念馆名称');

        return;
      }

      this.dataForm.uid = store["a" /* default */].getters.userInfo.id;
      Object(api["d" /* Memorialadd */])(this.dataForm).then(function (res) {
        if (res.code === 0) {
          Object(toast["a" /* default */])({
            message: _this2.dataForm.privacy == 1 ? '添加成功,请等待管理员审核' : '添加成功',
            duration: 2000,
            onClose: function onClose() {
              _this2.$router.push({
                name: 'page',
                query: {
                  id: res.data
                }
              });
            }
          });
        } else {
          Object(toast["a" /* default */])({
            message: '添加失败'
          });
        }
      });
    },
    memorial_edit: function memorial_edit() {
      var _this3 = this;

      if (!this.dataForm.people[0].username) {
        Object(toast["a" /* default */])('请输入逝者姓名');

        return;
      }

      if (!this.dataForm.title) {
        Object(toast["a" /* default */])('请输入纪念馆名称');

        return;
      }

      delete this.dataForm.small_vitrotype;
      Object(api["h" /* Memorialredact */])(this.dataForm).then(function (res) {
        if (res.code === 0) {
          Object(toast["a" /* default */])({
            message: '修改成功',
            duration: 800,
            onClose: function onClose() {
              _this3.$router.push({
                name: 'memorialPage',
                query: {
                  id: _this3.$route.query.id
                }
              });
            }
          });
        } else {
          Object(toast["a" /* default */])({
            message: '修改失败'
          });
        }
      });
    },
    handleUpdate: function handleUpdate(id) {
      var _this4 = this;

      this.title = '修改纪念馆';
      var data = {
        id: id,
        uid: store["a" /* default */].getters.userInfo.id
      };
      Object(api["f" /* Memorialmyinfo */])(data).then(function (res) {
        _this4.list = res.data;

        if (_this4.list.people.length === 2) {
          _this4.addBury();
        }

        _this4.dataForm = Object.assign({}, _this4.list);

        _this4.img.forEach(function (v, w) {
          if (_this4.dataForm.sid == v.id) {
            _this4.imgIndex = w;
          }
        });

        _this4.musice.forEach(function (v, w) {
          if (_this4.dataForm.mid == v.id) {
            _this4.musicIndex = w;
          }
        });

        var data = {
          url: _this4.list.small_vitrotype,
          isImage: true
        };

        _this4.uploader.push(data);
      });
    },
    birthday: function birthday(index) {
      this.index = index;
      this.showPicker = true;
    },
    dead: function dead(index) {
      this.index = index;
      this.showPickers = true;
    },
    sexs: function sexs(index) {
      this.index = index;
      this.showsex = true;
    },
    onConfirm: function onConfirm(time) {
      this.dataForm.people[this.index].birthday = moment_default()(time).format('YYYY-MM-DD');
      this.showPicker = false;
    },
    onConfirms: function onConfirms(time) {
      this.dataForm.people[this.index].dieday = moment_default()(time).format('YYYY-MM-DD');
      this.showPickers = false;
    },
    onConfirmsex: function onConfirmsex(sex) {
      this.dataForm.people[this.index].sex = sex;
      this.showsex = false;
    },
    changeList: function changeList(index) {
      this.musicIndex = index;
      this.dataForm.mid = this.musice[index].id;
    },
    changeImg: function changeImg(index) {
      this.imgIndex = index;
      this.dataForm.sid = this.img[index].id;
    },
    afterRead: function afterRead(file) {
      var _this5 = this;

      var data = new FormData();
      data.append('file', file.file);
      Object(api["n" /* upload */])(data).then(function (res) {
        if (res.code == 0) {
          _this5.$toast.loading({
            duration: 1000,
            message: '上传成功'
          });

          _this5.dataForm.vitrotype = res.data;
        }
      }).catch(function (res) {
        _this5.$toast.fail('上传失败,请重新上传 / ' + res);
      });
    },
    addBury: function addBury() {
      this.round = 2;
      this.dataForm.people.push({
        username: '',
        sex: '',
        birthday: '',
        dieday: '',
        introduction: ''
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/mymemorial.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_mymemorialvue_type_script_lang_js_ = (mymemorialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/mymemorial.vue?vue&type=style&index=0&id=9b64cc0c&scoped=true&lang=css&
var mymemorialvue_type_style_index_0_id_9b64cc0c_scoped_true_lang_css_ = __webpack_require__("c2e5");

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.0@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("623f");

// CONCATENATED MODULE: ./src/views/mymemorial.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_mymemorialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9b64cc0c",
  null
  
)

/* harmony default export */ var mymemorial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "77d2":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "fbac",
	"./af.js": "fbac",
	"./ar": "f96f",
	"./ar-dz": "e63c",
	"./ar-dz.js": "e63c",
	"./ar-kw": "b7bd",
	"./ar-kw.js": "b7bd",
	"./ar-ly": "968f",
	"./ar-ly.js": "968f",
	"./ar-ma": "9f9d",
	"./ar-ma.js": "9f9d",
	"./ar-sa": "aea5",
	"./ar-sa.js": "aea5",
	"./ar-tn": "d44b",
	"./ar-tn.js": "d44b",
	"./ar.js": "f96f",
	"./az": "c7ed",
	"./az.js": "c7ed",
	"./be": "5a28",
	"./be.js": "5a28",
	"./bg": "1251",
	"./bg.js": "1251",
	"./bm": "2809",
	"./bm.js": "2809",
	"./bn": "b4fc",
	"./bn.js": "b4fc",
	"./bo": "5484",
	"./bo.js": "5484",
	"./br": "5adc",
	"./br.js": "5adc",
	"./bs": "ac10",
	"./bs.js": "ac10",
	"./ca": "e381",
	"./ca.js": "e381",
	"./cs": "aef2",
	"./cs.js": "aef2",
	"./cv": "6566",
	"./cv.js": "6566",
	"./cy": "1390",
	"./cy.js": "1390",
	"./da": "1ece",
	"./da.js": "1ece",
	"./de": "5f10",
	"./de-at": "09c4",
	"./de-at.js": "09c4",
	"./de-ch": "89a2",
	"./de-ch.js": "89a2",
	"./de.js": "5f10",
	"./dv": "e662",
	"./dv.js": "e662",
	"./el": "196b",
	"./el.js": "196b",
	"./en-SG": "0a32",
	"./en-SG.js": "0a32",
	"./en-au": "94ed",
	"./en-au.js": "94ed",
	"./en-ca": "2806",
	"./en-ca.js": "2806",
	"./en-gb": "b0dd",
	"./en-gb.js": "b0dd",
	"./en-ie": "7a6e",
	"./en-ie.js": "7a6e",
	"./en-il": "1f0f",
	"./en-il.js": "1f0f",
	"./en-nz": "1606",
	"./en-nz.js": "1606",
	"./eo": "f214",
	"./eo.js": "f214",
	"./es": "7d58",
	"./es-do": "737b",
	"./es-do.js": "737b",
	"./es-us": "a894",
	"./es-us.js": "a894",
	"./es.js": "7d58",
	"./et": "a888",
	"./et.js": "a888",
	"./eu": "1357",
	"./eu.js": "1357",
	"./fa": "0a48",
	"./fa.js": "0a48",
	"./fi": "c2b1",
	"./fi.js": "c2b1",
	"./fo": "52c4",
	"./fo.js": "52c4",
	"./fr": "04e6",
	"./fr-ca": "6ad1",
	"./fr-ca.js": "6ad1",
	"./fr-ch": "b12f",
	"./fr-ch.js": "b12f",
	"./fr.js": "04e6",
	"./fy": "ad13",
	"./fy.js": "ad13",
	"./ga": "369e",
	"./ga.js": "369e",
	"./gd": "22de",
	"./gd.js": "22de",
	"./gl": "f808",
	"./gl.js": "f808",
	"./gom-latn": "50d5",
	"./gom-latn.js": "50d5",
	"./gu": "e67a",
	"./gu.js": "e67a",
	"./he": "037c",
	"./he.js": "037c",
	"./hi": "3d53",
	"./hi.js": "3d53",
	"./hr": "678b",
	"./hr.js": "678b",
	"./hu": "1783",
	"./hu.js": "1783",
	"./hy-am": "2873",
	"./hy-am.js": "2873",
	"./id": "de99",
	"./id.js": "de99",
	"./is": "6aa2",
	"./is.js": "6aa2",
	"./it": "1f93",
	"./it-ch": "2db9",
	"./it-ch.js": "2db9",
	"./it.js": "1f93",
	"./ja": "6bf8",
	"./ja.js": "6bf8",
	"./jv": "6e55",
	"./jv.js": "6e55",
	"./ka": "e65f",
	"./ka.js": "e65f",
	"./kk": "7167",
	"./kk.js": "7167",
	"./km": "4668",
	"./km.js": "4668",
	"./kn": "e3d2",
	"./kn.js": "e3d2",
	"./ko": "b058",
	"./ko.js": "b058",
	"./ku": "017e",
	"./ku.js": "017e",
	"./ky": "b2bd",
	"./ky.js": "b2bd",
	"./lb": "e50c",
	"./lb.js": "e50c",
	"./lo": "ca14",
	"./lo.js": "ca14",
	"./lt": "3e84",
	"./lt.js": "3e84",
	"./lv": "ce1d",
	"./lv.js": "ce1d",
	"./me": "9d38",
	"./me.js": "9d38",
	"./mi": "3e2e",
	"./mi.js": "3e2e",
	"./mk": "d532",
	"./mk.js": "d532",
	"./ml": "db61",
	"./ml.js": "db61",
	"./mn": "7493",
	"./mn.js": "7493",
	"./mr": "52d8",
	"./mr.js": "52d8",
	"./ms": "b559",
	"./ms-my": "7462",
	"./ms-my.js": "7462",
	"./ms.js": "b559",
	"./mt": "c055",
	"./mt.js": "c055",
	"./my": "49e0",
	"./my.js": "49e0",
	"./nb": "eb1c",
	"./nb.js": "eb1c",
	"./ne": "0acb",
	"./ne.js": "0acb",
	"./nl": "7497",
	"./nl-be": "3114",
	"./nl-be.js": "3114",
	"./nl.js": "7497",
	"./nn": "9a9c",
	"./nn.js": "9a9c",
	"./pa-in": "c595",
	"./pa-in.js": "c595",
	"./pl": "801c",
	"./pl.js": "801c",
	"./pt": "5b08",
	"./pt-br": "155f",
	"./pt-br.js": "155f",
	"./pt.js": "5b08",
	"./ro": "05fc",
	"./ro.js": "05fc",
	"./ru": "90b3",
	"./ru.js": "90b3",
	"./sd": "99bf",
	"./sd.js": "99bf",
	"./se": "20d6",
	"./se.js": "20d6",
	"./si": "7c0b",
	"./si.js": "7c0b",
	"./sk": "90fc",
	"./sk.js": "90fc",
	"./sl": "871b",
	"./sl.js": "871b",
	"./sq": "b045",
	"./sq.js": "b045",
	"./sr": "ac81",
	"./sr-cyrl": "a2d0",
	"./sr-cyrl.js": "a2d0",
	"./sr.js": "ac81",
	"./ss": "b093",
	"./ss.js": "b093",
	"./sv": "12e5",
	"./sv.js": "12e5",
	"./sw": "38a0",
	"./sw.js": "38a0",
	"./ta": "a462",
	"./ta.js": "a462",
	"./te": "18cb",
	"./te.js": "18cb",
	"./tet": "0c11",
	"./tet.js": "0c11",
	"./tg": "d707",
	"./tg.js": "d707",
	"./th": "883f",
	"./th.js": "883f",
	"./tl-ph": "6cc0",
	"./tl-ph.js": "6cc0",
	"./tlh": "ab53",
	"./tlh.js": "ab53",
	"./tr": "e523",
	"./tr.js": "e523",
	"./tzl": "b192",
	"./tzl.js": "b192",
	"./tzm": "5604",
	"./tzm-latn": "9f95",
	"./tzm-latn.js": "9f95",
	"./tzm.js": "5604",
	"./ug-cn": "9f4f",
	"./ug-cn.js": "9f4f",
	"./uk": "8bd6",
	"./uk.js": "8bd6",
	"./ur": "9a78",
	"./ur.js": "9a78",
	"./uz": "4d4c",
	"./uz-latn": "da73",
	"./uz-latn.js": "da73",
	"./uz.js": "4d4c",
	"./vi": "b766",
	"./vi.js": "b766",
	"./x-pseudo": "2a69",
	"./x-pseudo.js": "2a69",
	"./yo": "fd2e",
	"./yo.js": "fd2e",
	"./zh-cn": "35d0",
	"./zh-cn.js": "35d0",
	"./zh-hk": "7b45",
	"./zh-hk.js": "7b45",
	"./zh-tw": "fa66",
	"./zh-tw.js": "fa66"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "77d2";

/***/ }),

/***/ "c2e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_mymemorial_vue_vue_type_style_index_0_id_9b64cc0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0234");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_mymemorial_vue_vue_type_style_index_0_id_9b64cc0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_mymemorial_vue_vue_type_style_index_0_id_9b64cc0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_mymemorial_vue_vue_type_style_index_0_id_9b64cc0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);