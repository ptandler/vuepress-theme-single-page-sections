(window.webpackJsonp=window.webpackJsonp||[]).push([[11,19],{313:function(t,e,r){},314:function(t,e,r){"use strict";var n=r(313);r.n(n).a},315:function(t,e,r){"use strict";r.r(e);r(171);var n={name:"Icon",props:{iconName:{type:String,required:!1},url:{type:String,required:!0},title:{type:String,required:!1},text:{type:String,required:!1},color:{type:String,required:!1},scale:{type:Number,default:2}},computed:{getColor:function(){return this.$themeConfig&&this.$themeConfig.social&&this.$themeConfig.social.monochrome_icons?null:this.color}}},i=(r(314),r(26)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.url,target:"_blank",title:t.title,"aria-label":t.title,rel:"noopener noreferrer"}},[r("span",{staticClass:"icon"},[t._t("default",[t.iconName?r("v-icon",{attrs:{name:t.iconName,color:t.getColor,scale:t.scale}}):t._e()])],2),t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"afc9b7fe",null);e.default=o.exports},316:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o}));r(171);var n=r(315);function i(t,e,r,i){return{name:t,props:{title:{type:String,default:t},id:{type:String,required:!0},scale:{type:Number,required:!1},text:{type:String,required:!1},iconName:{type:String,default:e},iconColor:{type:String,default:r}},components:{Icon:n.default},computed:{url:i}}}function o(t,e,r){var n=i(t,null,null,r);return n.components.ComponentLogo=e,n}},399:function(t,e,r){"use strict";r.r(e);var n=r(316);r(45).a.register({"brands/orcid":{width:512,height:512,paths:[{d:"M294.8 188.2c58.1 0 84.7 35.3 84.7 76.9 0 25.6-15.5 76.9-83.1 76.9h-47.5v-153.8h45.9zM256 8c137 0 248 111 248 248s-111 248-248 248-248-111-248-248 111-248 248-248zM175.2 368.8v-207.5h-29.8v207.5h29.8zM160.3 137.6c10.8 0 19.5-8.8 19.6-19.6 0-10.8-8.8-19.6-19.6-19.6s-19.6 8.8-19.6 19.6 8.8 19.6 19.6 19.6v0zM300 369c68.4 0 110-50.6 110-103.9 0-49-33.7-103.9-110.4-103.9h-80.6v207.7h81z"}]}});var i=Object(n.a)("ORCID","brands/orcid","#a6ce39",(function(){return"https://orcid.org//".concat(this.id)})),o=r(26),c=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("icon",{attrs:{iconName:this.iconName,color:this.iconColor,url:this.url,scale:this.scale,title:this.title,text:this.text}})}),[],!1,null,null,null);e.default=c.exports}}]);
