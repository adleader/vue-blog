webpackJsonp([28],{"3r1a":function(t,s,e){var i=e("QTHR");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("03352726",i,!0)},QTHR:function(t,s,e){s=t.exports=e("FZ+f")(!1),s.push([t.i,"\n#sticky_view .demo-sticky {\n  opacity: 0.9;\n}\n",""])},uXCx:function(t,s,e){"use strict";function i(t){e("3r1a")}Object.defineProperty(s,"__esModule",{value:!0});var n={name:"sticky_view",methods:{stickeyChange:function(t){this.$message.info("sticky的值为："+t)}}},c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"sticky_view"}},[e("my-sticky",[e("el-button",{staticClass:"demo-sticky",attrs:{type:"primary"}},[t._v("固定在最顶部")]),t._v(" "),e("el-button",{staticClass:"demo-sticky",attrs:{type:"primary"}},[t._v("固定在最顶部")])],1),t._v(" "),e("div",{staticClass:"content"},t._l(10,function(s,i){return e("p",{key:i},[t._v("占位")])})),t._v(" "),e("my-sticky",{attrs:{offsetTop:50},on:{change:t.stickeyChange}},[e("el-button",{staticClass:"demo-sticky",attrs:{type:"primary"}},[t._v("固定在距离顶部 50px 的位置，并监听sticky变化")])],1),t._v(" "),e("div",{staticClass:"content"},t._l(10,function(s,i){return e("p",{key:i},[t._v("占位")])})),t._v(" "),e("my-sticky",{attrs:{offsetBottom:20}},[e("el-button",{staticClass:"demo-sticky",attrs:{type:"primary"}},[t._v("固定在距离底部 20px 的位置")])],1),t._v(" "),e("div",{staticClass:"content"},t._l(20,function(s,i){return e("p",{key:i},[t._v("占位")])}))],1)},a=[],r={render:c,staticRenderFns:a},o=r,y=e("VU/8"),l=i,u=y(n,o,!1,l,null,null);s.default=u.exports}});