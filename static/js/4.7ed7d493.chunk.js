(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{294:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2Udew",dialogsItems:"Dialogs_dialogsItems__1OoGS",active:"Dialogs_active__2qE36",messages:"Dialogs_messages__1bqlK"}},300:function(e,a,t){"use strict";t.r(a);var n=t(18),s=t(96),i=t(126),r=t(33),c=t(34),o=t(36),l=t(35),m=t(37),u=t(0),d=t.n(u),g=t(29),b=function(e){return{isAuth:e.auth.isAuth}},p=t(88),f=t(127),E=t(26),v=t(73),h=Object(v.a)(50),O=Object(f.a)({form:"dialogAddMessageForm"})((function(e){return d.a.createElement("form",{onSubmit:e.handleSubmit},d.a.createElement("div",null,d.a.createElement(p.a,{component:E.b,name:"newMessageBody",placeholder:"Enter your message",validate:[v.b,h]})),d.a.createElement("div",null,d.a.createElement("button",null,"Send")))})),_=t(294),j=t.n(_),y=t(12),w=function(e){var a="/dialogs/"+e.id;return d.a.createElement("div",{className:j.a.dialog+" "+j.a.active},d.a.createElement(y.b,{to:a},e.name))},D=function(e){return d.a.createElement("div",{className:j.a.message},e.message)},M=function(e){var a=e.dialogsPage,t=a.dialogsData.map((function(e){return d.a.createElement(w,{name:e.name,key:e.id,id:e.id})})),n=a.messagesData.map((function(e){return d.a.createElement(D,{message:e.message,key:e.id})}));a.newMessageBody;return d.a.createElement("div",{className:j.a.dialogs},d.a.createElement("div",{className:j.a.dialogsItems},t),d.a.createElement("div",{className:j.a.messages},d.a.createElement("div",null,n),d.a.createElement(O,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})))};a.default=Object(s.a)(Object(n.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),(function(e){var a=function(a){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,a),Object(c.a)(t,[{key:"render",value:function(){return this.props.isAuth?d.a.createElement(e,this.props):d.a.createElement(g.a,{to:"/login"})}}]),t}(d.a.Component);return Object(n.b)(b)(a)}))(M)}}]);
//# sourceMappingURL=4.7ed7d493.chunk.js.map