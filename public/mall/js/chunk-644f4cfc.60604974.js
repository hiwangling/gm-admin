(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-644f4cfc"],{1007:function(e,t,n){"use strict";var r=n("e46b"),i=n("09b9"),a=n("ee21"),s=n("eafa"),o=[].lastIndexOf,c=!!o&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n("a2cd")(o)),"Array",{lastIndexOf:function(e){if(c)return o.apply(this,arguments)||0;var t=i(this),n=s(t.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,a(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in t&&t[r]===e)return r||0;return-1}})},"173b":function(e,t,n){"use strict";var r=n("7501"),i=n.n(r);i.a},"587d":function(e,t,n){"use strict";n("5cb4"),n("1007"),n("e10e"),n("6d57"),n("ff21");var r=n("82ae"),i=n.n(r);function a(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(a,o){if("GET"===r.toUpperCase()){var c="";Object.keys(n).forEach((function(e){c+=e+"="+n[e]+"&"})),c?(c=c.substr(0,c.lastIndexOf("&")),-1===t.indexOf("127.0.0.1")?t+="?"+c+"&Geek-James="+s(20):t+="?"+c):-1===t.indexOf("127.0.0.1")&&(t+="?Geek-James="+s(20)),e=i.a.get(t)}else"POST"===r.toUpperCase()&&(e=i.a.post(t,n));e.then((function(e){a(e.data)})).catch((function(e){o(e)}))}))}function s(e){for(var t=["0","1","2","3","4","5","6","7","8","9"],n="",r=0;r<e;r++){var i=Math.ceil(9*Math.random());n+=t[i]}return n}n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return g}));var o="http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/",c=function(){return a(o+"cart/youlike")},l=function(e){return a(o+"send_code",{phoneNumber:e})},u=function(e,t){return a(o+"login_code",{phone:e,captcha:t},"POST")},g=function(){return a(o+"vip")}},7501:function(e,t,n){},8668:function(e,t,n){e.exports=n.p+"img/blindfold.58ce4239.png"},bec1:function(e,t,n){e.exports=n.p+"img/greeting.1415c1c5.png"},d870:function(e,t,n){e.exports=n.p+"img/normal.0447fe9b.png"},ede4:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"loginBox",on:{click:function(t){return e.changeImage(3)}}},[n("div",{staticClass:"auth-form"},[n("div",{staticClass:"panfish"},[n("img",{attrs:{src:e.imageURL,alt:""}})]),n("van-icon",{staticClass:"closeButton",attrs:{name:"close"},on:{click:e.close}}),n("van-tabs",{attrs:{animated:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tab",{attrs:{title:e.$t("login.title")}},[n("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:!e.isShowSMSLogin,expression:"!isShowSMSLogin"}]},[n("van-field",{attrs:{required:"",clearable:"",label:e.$t("login.phoneNumber"),maxlength:"11","error-message":e.phoneNumberRight?"":e.$t("login.phoneNumberNotCorrect"),placeholder:e.$t("login.phoneInput")},on:{click:function(t){return t.stopPropagation(),e.changeImage(0)}},model:{value:e.login_userName,callback:function(t){e.login_userName=t},expression:"login_userName"}}),n("van-field",{attrs:{type:"password",label:e.$t("login.pass"),placeholder:e.$t("login.passTip"),required:"",autocomplete:""},on:{click:function(t){return t.stopPropagation(),e.changeImage(1)}},model:{value:e.login_password,callback:function(t){e.login_password=t},expression:"login_password"}})],1),n("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:e.isShowSMSLogin,expression:"isShowSMSLogin"}]},[n("van-field",{attrs:{required:"",clearable:"",maxlength:"11",label:e.$t("login.phoneNumber"),placeholder:e.$t("login.phoneInput"),"error-message":e.phoneNumberRight?"":e.$("login.phoneNumberNotCorrect")},model:{value:e.login_phone,callback:function(t){e.login_phone=t},expression:"login_phone"}}),n("van-field",{attrs:{center:"",clearable:"",required:"",label:e.$t("login.varify"),maxlength:"6",placeholder:e.$t("login.varify")},model:{value:e.smsCaptcha,callback:function(t){e.smsCaptcha=t},expression:"smsCaptcha"}},[e.countDown?n("van-button",{attrs:{slot:"button",size:"small",type:"primary",disabled:""},slot:"button",model:{value:e.smsCaptcha,callback:function(t){e.smsCaptcha=t},expression:"smsCaptcha"}},[e._v(e._s(e.$t("login.hasSend"))+e._s(e.countDown)+"s")]):n("van-button",{attrs:{slot:"button",size:"small",type:"primary",disabled:e.captchaDisable},on:{click:e.sendVerifyCode},slot:"button"},[e._v(e._s(e.$t("login.sendVerify")))])],1)],1),n("van-button",{staticStyle:{"margin-top":"1rem"},attrs:{type:"info",size:"large"},on:{click:e.login}},[e._v(e._s(e.$t("login.login")))]),n("div",{staticClass:"switchLogin",on:{click:e.switchLogin}},[e._v(e._s(this.isShowSMSLogin?e.$t("login.phoneVerify"):e.$t("login.smsMessage")))])],1),n("van-tab",{attrs:{title:e.$t("login.resgin")}},[n("van-cell-group",[n("van-field",{attrs:{clearable:"",maxlength:"11",label:e.$t("login.phoneNumber"),placeholder:e.$t("login.phoneInput"),required:""},model:{value:e.register_userName,callback:function(t){e.register_userName=t},expression:"register_userName"}}),n("van-field",{attrs:{type:"password",label:e.$t("login.pass"),placeholder:e.$t("login.passTip2"),required:""},model:{value:e.register_pwd,callback:function(t){e.register_pwd=t},expression:"register_pwd"}})],1),n("van-button",{staticStyle:{"margin-top":"1rem"},attrs:{type:"info",size:"large"},on:{click:e.register}},[e._v(e._s(e.$t("login.resgin")))])],1)],1),n("br"),n("p",{staticClass:"agreement"},[e._v(" "+e._s(e.$t("login.tipTile"))),n("br"),e._v(e._s(e.$t("login.tipContent"))),n("a",{staticClass:"agreement-box",on:{click:function(t){return t.stopPropagation(),e.agreement(0)}}},[e._v(e._s(e.$t("login.tip")))]),e._v("、"),n("a",{staticClass:"agreement-box",on:{click:function(t){return t.stopPropagation(),e.agreement(1)}}},[e._v(e._s(e.$t("login.tipProcy")))])])],1)])])},i=[],a=(n("4ca5"),n("77e6"),n("5ab2"),n("ff21"),n("cdbe"),n("6d57"),n("e10e"),n("163d"),n("4aac"),n("ad86")),s=(n("6657"),n("08c6")),o=(n("63ff"),n("57f0")),c=n("289c"),l=n("587d"),u=n("08c1");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={data:function(){return{countDown:0,active:0,login_userName:"",login_password:"",login_phone:"",register_userName:"",register_pwd:"",smsCaptcha:"",isShowSMSLogin:!0,switchLoginMsg:this.$t("login.switchLoginMsg"),imageURL:n("d870"),smsCaptchaResult:null,userInfo:null}},computed:{phoneNumberRight:function(){var e=this.isShowSMSLogin?this.login_phone:this.login_userName;return!(e.length>10)||/[1][3,4,5,6,7,8][0-9]{9}$/.test(e)},captchaDisable:function(){return!(this.login_phone.length>10&&this.phoneNumberRight)}},methods:h({},Object(u["b"])(["syncuserInfo"]),{switchLogin:function(){this.isShowSMSLogin=!this.isShowSMSLogin},changeImage:function(e){this.imageURL=n(0==e?"bec1":1==e?"8668":"d870")},sendVerifyCode:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.countDown=60,this.timeIntervalID=setInterval((function(){n.countDown--,0==n.countDown&&clearInterval(n.timeIntervalID)}),1e3),e.next=4,Object(l["b"])(this.login_phone);case 4:t=e.sent,200==t.success_code&&(this.smsCaptchaResult=t.data.code,s["a"].alert({title:this.$t("login.tipTile"),message:this.$t("login.message")+t.data.code}).then((function(){})));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isShowSMSLogin){e.next=16;break}if(this.phoneNumberRight&&!(this.login_phone.length<10)){e.next=6;break}return Object(a["a"])({message:this.$t("login.pleaseInputCorrectPhoneNumber"),duration:800}),e.abrupt("return");case 6:if(!(this.smsCaptcha<7||this.smsCaptcha!=Number(this.smsCaptchaResult))){e.next=9;break}return Object(a["a"])({message:this.$t("login.pleaseInputCorrectVerifyNumber"),duration:800}),e.abrupt("return");case 9:return e.next=11,Object(l["d"])(this.login_phone,this.smsCaptcha);case 11:t=e.sent,this.syncuserInfo(t.data),this.$router.back(),e.next=34;break;case 16:if(!(this.login_userName.length<1)){e.next=21;break}return Object(a["a"])({message:this.$t("login.phoneNumber"),duration:800}),e.abrupt("return");case 21:if(this.phoneRegex(this.login_userName)){e.next=26;break}return Object(a["a"])({message:this.$t("login.phoneNumberNotCorrect"),duration:800}),e.abrupt("return");case 26:if(!(this.login_password.length<1)){e.next=29;break}return Object(a["a"])({message:this.$t("login.passNumberNotCorrect"),duration:800}),e.abrupt("return");case 29:return e.next=31,Object(l["d"])(this.login_userName,this.login_password);case 31:n=e.sent,this.syncuserInfo(n.data),this.$router.back();case 34:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.register_userName.length<1)){e.next=4;break}Object(a["a"])({message:this.$t("login.phoneNumberNotEmpty"),duration:800}),e.next=21;break;case 4:if(this.phoneRegex(this.register_userName)){e.next=8;break}Object(a["a"])({message:this.$t("login.phoneNumberNotCorrect"),duration:800}),e.next=21;break;case 8:if(!(this.register_pwd.length<0)){e.next=12;break}Object(a["a"])({message:this.$t("login.passTip"),duration:800}),e.next=21;break;case 12:if(!(this.register_pwd.length<6)){e.next=16;break}Object(a["a"])({message:this.$t("login.passTip2"),duration:800}),e.next=21;break;case 16:return e.next=18,Object(l["d"])(this.register_userName,this.register_pwd);case 18:t=e.sent,this.syncuserInfo(t.data),this.$router.back();case 21:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),agreement:function(e){0==e?Object(a["a"])({message:this.$t("login.tip"),duration:800}):Object(a["a"])({message:this.$t("login.tipProcy"),duration:800})},close:function(){this.$router.back()},thirdLogin:function(e){0==e?Object(a["a"])({message:this.$t("login.otherWechat"),duration:800}):Object(a["a"])({message:this.$t("login.otherQQ"),duration:800})},phoneRegex:function(e){return/[1][3,4,5,6,7,8][0-9]{9}$/.test(e)}})},b=p,m=(n("173b"),n("623f")),f=Object(m["a"])(b,r,i,!1,null,"0bf277d4",null);t["default"]=f.exports}}]);