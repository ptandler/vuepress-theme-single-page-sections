(window.webpackJsonp=window.webpackJsonp||[]).push([[6,18],{154:function(t,e,r){},155:function(t,e,r){"use strict";var n=r(154);r.n(n).a},156:function(t,e,r){"use strict";r.r(e);r(106);var n={name:"Icon",props:{name:{type:String,required:!0},url:{type:String,required:!0},title:{type:String,required:!1},text:{type:String,required:!1},color:{type:String,required:!1},scale:{type:Number,default:2}},computed:{getColor:function(){return this.$themeConfig&&this.$themeConfig.social&&this.$themeConfig.social.monochrome_icons?null:this.color}}},i=(r(155),r(18)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.url,target:"_blank",title:t.title,"aria-label":t.title,rel:"noopener noreferrer"}},[r("span",{staticClass:"icon"},[r("v-icon",{attrs:{name:t.name,color:t.getColor,scale:t.scale}})],1),t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"516f0ab0",null);e.default=o.exports},157:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(106);var n=r(156);function i(t,e,r,i){return{name:t,props:{title:{type:String,default:t},id:{type:String,required:!0},scale:{type:Number,required:!1},text:{type:String,required:!1},iconName:{type:String,default:e},iconColor:{type:String,default:r}},components:{Icon:n.default},computed:{url:i}}}},282:function(t,e,r){"use strict";r.r(e);var n=r(157);r(32).a.register({"brands/facebook":{width:512,height:512,paths:[{d:"M504 256c0 123.8-90.7 226.4-209.3 245v-173.3h57.8l11-71.7h-68.8v-46.5c0-19.6 9.6-38.7 40.4-38.7h31.3v-61s-28.4-4.8-55.5-4.8c-56.7 0-93.7 34.3-93.7 96.5v54.6h-63v71.7h63v173.3c-118.6-18.6-209.3-121.2-209.3-245 0-137 111-248 248-248s248 111 248 248z"}]}});var i=Object(n.a)("Facebook","brands/facebook","#3B5998",(function(){return"https://www.facebook.com/".concat(this.id)})),o=r(18),c=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("icon",{attrs:{name:this.iconName,color:this.iconColor,url:this.url,scale:this.scale,title:this.title,text:this.text}})}),[],!1,null,null,null);e.default=c.exports}}]);