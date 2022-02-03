(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n,r,l=t(0),o=t.n(l),c=t(35),i=t.n(c),s=(t(98),t(99),t(26)),u=t(51),m=t(11),d=t(90),p=t(126),g=t(128),b=t(123),E=t(89),v=t(21),w=t(130),h=t(122),f=t(129),k=t(124),j=t(131),O=t(44),y=t.n(O),S=t(55),C=t(42),F=t(125),L=t(120),x=t(121),q=t(132),P=t(70),$=t(127),I=Object($.a)(n||(n=Object(P.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),T=Object($.a)(r||(r=Object(P.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n      }\n    }\n  }\n"]))),U=t(82),Y=t(83),_=t(71),B=t.n(_),D=new(function(){function e(){Object(U.a)(this,e)}return Object(Y.a)(e,[{key:"getProfile",value:function(){return B()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return B()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),G=function(){var e=Object(l.useState)({username:"",email:"",password:""}),a=Object(v.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)(!1),c=Object(v.a)(r,1)[0],i=Object(l.useState)(!1),u=Object(v.a)(i,2),m=u[0],d=u[1],p=Object(q.a)(T),g=Object(v.a)(p,2),b=g[0],E=g[1],w=E.error;E.data;Object(l.useEffect)((function(){d(!!w)}),[w]);var h=function(e){var a=e.target,r=a.name,l=a.value;n(Object(s.a)(Object(s.a)({},t),{},Object(C.a)({},r,l)))},f=function(){var e=Object(S.a)(y.a.mark((function e(a){var r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),console.log(t),e.prev=4,e.next=7,b({variables:Object(s.a)({},t)});case 7:r=e.sent,l=r.data,D.login(l.addUser.token),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(a){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,{noValidate:!0,validated:c,onSubmit:f},o.a.createElement(L.a,{dismissible:!0,onClose:function(){return d(!1)},show:m,variant:"danger"},"Something went wrong with your signup!"),o.a.createElement(F.a.Group,null,o.a.createElement(F.a.Label,{htmlFor:"username"},"Username"),o.a.createElement(F.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:t.username,required:!0}),o.a.createElement(F.a.Control.Feedback,{type:"invalid"},"Username is required!")),o.a.createElement(F.a.Group,null,o.a.createElement(F.a.Label,{htmlFor:"email"},"Email"),o.a.createElement(F.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:h,value:t.email,required:!0}),o.a.createElement(F.a.Control.Feedback,{type:"invalid"},"Email is required!")),o.a.createElement(F.a.Group,null,o.a.createElement(F.a.Label,{htmlFor:"password"},"Password"),o.a.createElement(F.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:t.password,required:!0}),o.a.createElement(F.a.Control.Feedback,{type:"invalid"},"Password is required!")),o.a.createElement(x.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},K=function(){var e=Object(l.useState)({email:"",password:""}),a=Object(v.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)(!1),c=Object(v.a)(r,1)[0],i=Object(l.useState)(!1),u=Object(v.a)(i,2),m=u[0],d=u[1],p=Object(q.a)(I),g=Object(v.a)(p,2),b=g[0],E=(g[1].error,function(e){var a=e.target,r=a.name,l=a.value;n(Object(s.a)(Object(s.a)({},t),{},Object(C.a)({},r,l)))}),w=function(){var e=Object(S.a)(y.a.mark((function e(a){var r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(s.a)({},t)});case 6:r=e.sent,l=r.data,D.login(l.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),d(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,{noValidate:!0,validated:c,onSubmit:w},o.a.createElement(L.a,{dismissible:!0,onClose:function(){return d(!1)},show:m,variant:"danger"},"Something went wrong with your login credentials!"),o.a.createElement(F.a.Group,null,o.a.createElement(F.a.Label,{htmlFor:"email"},"Email"),o.a.createElement(F.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:E,value:t.email,required:!0}),o.a.createElement(F.a.Control.Feedback,{type:"invalid"},"Email is required!")),o.a.createElement(F.a.Group,null,o.a.createElement(F.a.Label,{htmlFor:"password"},"Password"),o.a.createElement(F.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:E,value:t.password,required:!0}),o.a.createElement(F.a.Control.Feedback,{type:"invalid"},"Password is required!")),o.a.createElement(x.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},V=function(){var e=Object(l.useState)(!1),a=Object(v.a)(e,2),t=a[0],n=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{expand:"lg"},o.a.createElement(h.a,{fluid:!0},o.a.createElement(w.a.Toggle,{"aria-controls":"navbar"}),o.a.createElement(w.a.Collapse,{id:"navbar"},o.a.createElement(f.a,{className:"ml-auto"},o.a.createElement(f.a.Link,{as:u.b,to:"/"}),D.loggedIn()?o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a.Link,{as:u.b,to:"/saved"},"See Your Blast Patterns"),o.a.createElement(f.a.Link,{onClick:D.logout},"Logout")):o.a.createElement(f.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),o.a.createElement(k.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},o.a.createElement(j.a.Container,{defaultActiveKey:"login"},o.a.createElement(k.a.Header,{closeButton:!0},o.a.createElement(k.a.Title,{id:"signup-modal"},o.a.createElement(f.a,{variant:"pills"},o.a.createElement(f.a.Item,null,o.a.createElement(f.a.Link,{eventKey:"login"},"Login")),o.a.createElement(f.a.Item,null,o.a.createElement(f.a.Link,{eventKey:"signup"},"Sign Up"))))),o.a.createElement(k.a.Body,null,o.a.createElement(j.a.Content,null,o.a.createElement(j.a.Pane,{eventKey:"login"},o.a.createElement(K,{handleModalClose:function(){return n(!1)}})),o.a.createElement(j.a.Pane,{eventKey:"signup"},o.a.createElement(G,{handleModalClose:function(){return n(!1)}})))))))},M=Object(d.a)({uri:"/graphql"}),W=Object(E.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),z=new p.a({link:W.concat(M),cache:new g.a});var H=function(){return o.a.createElement(b.a,{client:z},o.a.createElement(u.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(V,null),o.a.createElement(m.c,null,o.a.createElement(m.a,null)))))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("./serviceWorker.js").then((function(e){return console.log(e)}))},93:function(e,a,t){e.exports=t(109)},99:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.12f04b4d.chunk.js.map