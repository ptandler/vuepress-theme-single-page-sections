(window.webpackJsonp=window.webpackJsonp||[]).push([[17,19],{313:function(t,e,r){},314:function(t,e,r){"use strict";var n=r(313);r.n(n).a},315:function(t,e,r){"use strict";r.r(e);r(172);var n={name:"Icon",props:{iconName:{type:String,required:!1},url:{type:String,required:!0},title:{type:String,required:!1},text:{type:String,required:!1},color:{type:String,required:!1},scale:{type:Number,default:2}},computed:{getColor:function(){return this.$themeConfig&&this.$themeConfig.social&&this.$themeConfig.social.monochrome_icons?null:this.color}}},i=(r(314),r(26)),c=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.url,target:"_blank",title:t.title,"aria-label":t.title,rel:"noopener noreferrer"}},[r("span",{staticClass:"icon"},[t._t("default",[t.iconName?r("v-icon",{attrs:{name:t.iconName,color:t.getColor,scale:t.scale}}):t._e()])],2),t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"afc9b7fe",null);e.default=c.exports},316:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(172);var n=r(315);function i(t,e,r,i){return{name:t,props:{title:{type:String,default:t},id:{type:String,required:!0},scale:{type:Number,required:!1},text:{type:String,required:!1},iconName:{type:String,default:e},iconColor:{type:String,default:r}},components:{Icon:n.default},computed:{url:i}}}},405:function(t,e,r){"use strict";r.r(e);var n=r(316);r(46).a.register({"brands/xing":{width:384,height:512,paths:[{d:"M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5h-65.1c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c0.2 0 0.2-0.1 0-0.3l-43.9-75.6c-4.3-7.8 0.3-14.1 8.5-14.1h65.1c7.3 0 13.3 4.1 18 12.2zM382.6 46.1l-144 253v0.3l91.6 166.6c3.9 7.1 0.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"}]}});var i=Object(n.a)("XING","brands/xing","#b0d400",(function(){return"https://www.xing.com/profile/".concat(this.id)})),c=r(26),o=Object(c.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("icon",{attrs:{iconName:this.iconName,color:this.iconColor,url:this.url,scale:this.scale,title:this.title,text:this.text}})}),[],!1,null,null,null);e.default=o.exports}}]);