(window.webpackJsonp=window.webpackJsonp||[]).push([[12,18],{154:function(t,e,r){},155:function(t,e,r){"use strict";var n=r(154);r.n(n).a},156:function(t,e,r){"use strict";r.r(e);r(106);var n={name:"Icon",props:{name:{type:String,required:!0},url:{type:String,required:!0},title:{type:String,required:!1},text:{type:String,required:!1},color:{type:String,required:!1},scale:{type:Number,default:2}},computed:{getColor:function(){return this.$themeConfig&&this.$themeConfig.social&&this.$themeConfig.social.monochrome_icons?null:this.color}}},i=(r(155),r(18)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.url,target:"_blank",title:t.title,"aria-label":t.title,rel:"noopener noreferrer"}},[r("span",{staticClass:"icon"},[r("v-icon",{attrs:{name:t.name,color:t.getColor,scale:t.scale}})],1),t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"516f0ab0",null);e.default=o.exports},157:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(106);var n=r(156);function i(t,e,r,i){return{name:t,props:{title:{type:String,default:t},id:{type:String,required:!0},scale:{type:Number,required:!1},text:{type:String,required:!1},iconName:{type:String,default:e},iconColor:{type:String,default:r}},components:{Icon:n.default},computed:{url:i}}}},288:function(t,e,r){"use strict";r.r(e);var n=r(157);r(32).a.register({"brands/skype":{width:448,height:512,paths:[{d:"M424.7 299.8c14.6 18.9 23.3 42.5 23.2 68.1 0 61.8-50.2 112-112 112-25.6 0-49.2-8.7-68.2-23.3-14.1 3-28.9 4.7-43.8 4.7-113.4 0-205.3-91.8-205.3-205.3 0-14.9 1.8-29.8 4.7-43.8-14.6-18.9-23.3-42.5-23.3-68.2 0-61.8 50.2-112 112-112 25.7 0 49.3 8.7 68.3 23.4 14.1-3 28.9-4.7 43.8-4.7 113.4 0 205.3 91.8 205.3 205.3 0 14.9-1.8 29.8-4.7 43.8zM230.1 391.3c54.9 0 112-27.4 112-86.5 0-50.8-49.3-68.3-90.7-77.6-48.3-11.2-69.1-13.2-69.1-33 0-15.5 16.3-22.5 42-22.5 45.8 0 46.7 33.5 75 33.5 18.9 0 30.3-14.9 30.3-31.8 0-33.5-55.7-55.4-110.8-55.4-50.5 0-109.1 21.9-109.1 81.1 0 65.2 55.3 71.8 117.8 87.2 26 6.4 42 9.3 42 28 0 14.9-16.6 26.3-42.3 26.3-54 0-56.9-44.9-88.1-44.9-20.5 0-29.5 14.6-29.5 30.6 0 35.8 54.9 65 120.5 65z"}]}});var i=Object(n.a)("Skype","brands/skype","#00aff0",(function(){return"skype:".concat(this.id)})),o=r(18),a=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("icon",{attrs:{name:this.iconName,color:this.iconColor,url:this.url,scale:this.scale,title:this.title,text:this.text}})}),[],!1,null,null,null);e.default=a.exports}}]);