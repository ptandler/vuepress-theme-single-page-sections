(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15],{155:function(t,e,n){},156:function(t,e,n){"use strict";var o=n(155);n.n(o).a},157:function(t,e,n){"use strict";n.r(e);var o={name:"Icon",props:["name","color","url","title","text","scale"],computed:{getColor:function(){return this.$themeConfig&&this.$themeConfig.social&&this.$themeConfig.social.monochrome_icons?null:this.color}}},c=(n(156),n(6)),r=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.url,target:"_blank",title:t.title,"aria-label":t.title,rel:"noopener noreferrer"}},[n("span",{staticClass:"icon"},[n("v-icon",{attrs:{name:t.name,color:t.getColor,scale:t.scale?t.scale:2}})],1),t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"638b9858",null);e.default=r.exports},288:function(t,e,n){"use strict";n.r(e);var o=n(157);n(18).a.register({"brands/xing":{width:384,height:512,paths:[{d:"M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5h-65.1c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c0.2 0 0.2-0.1 0-0.3l-43.9-75.6c-4.3-7.8 0.3-14.1 8.5-14.1h65.1c7.3 0 13.3 4.1 18 12.2zM382.6 46.1l-144 253v0.3l91.6 166.6c3.9 7.1 0.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"}]}});var c={name:"XING",props:["id","scale"],components:{Icon:o.default},computed:{iconName:function(){return"brands/xing"},iconColor:function(){return"#b0d400"},url:function(){return"https://www.xing.com/profile/".concat(this.id)}}},r=n(6),l=Object(r.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("icon",{attrs:{name:this.iconName,color:this.iconColor,url:this.url,scale:this.scale,title:"XING"}})}),[],!1,null,null,null);e.default=l.exports}}]);