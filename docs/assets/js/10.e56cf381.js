(window.webpackJsonp=window.webpackJsonp||[]).push([[10,19],{313:function(t,e,n){},314:function(t,e,n){"use strict";var r=n(313);n.n(r).a},315:function(t,e,n){"use strict";n.r(e);n(171);var r={name:"Icon",props:{iconName:{type:String,required:!1},url:{type:String,required:!0},title:{type:String,required:!1},text:{type:String,required:!1},color:{type:String,required:!1},scale:{type:Number,default:2}},computed:{getColor:function(){return this.$themeConfig&&this.$themeConfig.social&&this.$themeConfig.social.monochrome_icons?null:this.color}}},i=(n(314),n(26)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.url,target:"_blank",title:t.title,"aria-label":t.title,rel:"noopener noreferrer"}},[n("span",{staticClass:"icon"},[t._t("default",[t.iconName?n("v-icon",{attrs:{name:t.iconName,color:t.getColor,scale:t.scale}}):t._e()])],2),t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"afc9b7fe",null);e.default=o.exports},316:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));n(171);var r=n(315);function i(t,e,n,i){return{name:t,props:{title:{type:String,default:t},id:{type:String,required:!0},scale:{type:Number,required:!1},text:{type:String,required:!1},iconName:{type:String,default:e},iconColor:{type:String,default:n}},components:{Icon:r.default},computed:{url:i}}}function o(t,e,n){var r=i(t,null,null,n);return r.components.ComponentLogo=e,r}},397:function(t,e,n){"use strict";n.r(e);var r=n(316);n(45).a.register({"brands/linkedin-in":{width:448,height:512,paths:[{d:"M100.3 448h-92.9v-299.1h92.9v299.1zM53.8 108.1c-29.7 0-53.8-24.6-53.8-54.3 0-29.7 24.1-53.8 53.8-53.8s53.8 24.1 53.8 53.8c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7v-145.6c0-34.7-0.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7v148.1h-92.8v-299.1h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3v164.3h-0.1z"}]}});var i=Object(r.a)("LinkedIn","brands/linkedin-in","#0077B5",(function(){return"https://www.linkedin.com/in/".concat(this.id,"/")})),o=n(26),c=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("icon",{attrs:{iconName:this.iconName,color:this.iconColor,url:this.url,scale:this.scale,title:this.title,text:this.text}})}),[],!1,null,null,null);e.default=c.exports}}]);
