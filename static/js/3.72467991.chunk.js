(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(t,e,a){t.exports={content:"Profile_content__31Dph"}},296:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__T_gYs",posts:"MyPosts_posts__tsFeU"}},297:function(t,e,a){t.exports={item:"Post_item__2CtqI"}},298:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__29Vll"}},299:function(t,e,a){"use strict";a.r(e);var s=a(33),n=a(34),o=a(36),r=a(35),u=a(37),l=a(0),c=a.n(l),i=a(18),p=a(29),m=a(96),f=a(95),d=a(295),h=a.n(d),E=a(40),b=a(88),v=a(127),g=a(73),P=a(26),j=a(296),O=a.n(j),_=a(297),k=a.n(_),S=function(t){return c.a.createElement("div",{className:k.a.item},c.a.createElement("img",{src:"https://klike.net/uploads/posts/2019-03/1551511862_28.jpg",alt:"userAvatar"}),t.message,c.a.createElement("div",null,c.a.createElement("span",null,t.likesCount," \u2764")))},y=c.a.memo((function(t){var e=Object(E.a)(t.posts).reverse().map((function(t){return c.a.createElement(S,{message:t.message,likesCount:t.likesCount})}));return c.a.createElement("div",{className:O.a.postsBlock},c.a.createElement("div",null,c.a.createElement("h3",null,"My posts"),c.a.createElement(w,{onSubmit:function(e){t.addPost(e.newPostText)}})),c.a.createElement("div",{className:O.a.posts},e))})),x=Object(g.a)(10),w=Object(v.a)({form:"ProfileAddNewPostForm"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(b.a,{name:"newPostText",component:P.b,validate:[g.b,x],placeholder:"Post message"})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),B=y,C=Object(i.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(f.a)(e))}}}))(B),I=a(298),N=a.n(I),T=a(39),A=a(128),U=function(t){var e=Object(l.useState)(!1),a=Object(A.a)(e,2),s=a[0],n=a[1],o=Object(l.useState)(t.status),r=Object(A.a)(o,2),u=r[0],i=r[1];Object(l.useEffect)((function(){i(t.status)}),[t.status]);return c.a.createElement("div",null,!s&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){n(!0)}},t.status||"----")),s&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(u)},onChange:function(t){i(t.currentTarget.value)},value:u})))},M=function(t){var e=t.profile,a=t.status,s=t.updateStatus;return e?c.a.createElement("div",null,c.a.createElement("div",{className:N.a.descriptionBlock},c.a.createElement("img",{src:e.photos.large}),c.a.createElement(U,{status:a,updateStatus:s}))):c.a.createElement(T.a,null)},D=function(t){return c.a.createElement("div",{className:h.a.content},c.a.createElement(M,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),c.a.createElement(C,null))},F=function(t){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(n.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement(D,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(c.a.Component);e.default=Object(m.a)(Object(i.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:f.d,getStatus:f.c,updateStatus:f.e}),p.f)(F)}}]);
//# sourceMappingURL=3.72467991.chunk.js.map