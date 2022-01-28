(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,a,t){e.exports=t(119)},109:function(e,a,t){},119:function(e,a,t){"use strict";t.r(a);var n,r,l,o,c,s=t(0),i=t.n(s),u=t(37),m=t.n(u),d=(t(108),t(109),t(21)),b=t(51),p=t(12),v=t(97),g=t(100),E=t(139),f=t(135),h=t(96),k=t(98),w=t(19),O=t.n(w),j=t(31),S=t(14),y=t(129),I=t(130),x=t(137),B=t(92),C=t(131),F=t(132),N=t(144),T=t(89),_=t(90),L=t(78),$=t.n(L),q=new(function(){function e(){Object(T.a)(this,e)}return Object(_.a)(e,[{key:"getProfile",value:function(){return $()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return $()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),D=function(e){var a=localStorage.getItem("saved_blasts")?JSON.parse(localStorage.getItem("saved_blasts")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_blasts",JSON.stringify(t)),!0},P=t(124),G=t(43),U=t(138),V=Object(U.a)(n||(n=Object(G.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),Y=Object(U.a)(r||(r=Object(G.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        blastCount\n        savedBlasts {\n          blastId\n          blastName\n        }\n      }\n    }\n  }\n"]))),J=Object(U.a)(l||(l=Object(G.a)(["\n  mutation saveBlast($newBlast: InputBlast!) {\n    saveBlast(newBlast: $newBlast) {\n      _id\n      username\n      email\n      savedBlasts {\n        blastId\n        blastName\n      }\n    }\n  }\n"]))),K=Object(U.a)(o||(o=Object(G.a)(["\n  mutation removeBlast($blastId: ID!) {\n    removeBlast(blastId: $blastId) {\n      _id\n      username\n      email\n      savedBlasts {\n        blastId\n        blastName\n      }\n    }\n  }\n"]))),z=function(){var e=Object(s.useState)([]),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(s.useState)(""),l=Object(S.a)(r,2),o=l[0],c=l[1],u=Object(s.useState)(localStorage.getItem("saved_blasts")?JSON.parse(localStorage.getItem("saved_blasts")):[]),m=Object(S.a)(u,2),b=m[0],p=m[1],v=Object(P.a)(J),g=Object(S.a)(v,2),E=g[0];g[1].error;Object(s.useEffect)((function(){return function(){var e;(e=b).length?localStorage.setItem("saved_blasts",JSON.stringify(e)):localStorage.removeItem("saved_blasts")}}));var f=function(){var e=Object(j.a)(O.a.mark((function e(a){var t,r,l,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(o));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("Something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,l=r.items,s=l.map((function(e){return{blastId:e.id,blastName:e.volumeInfo.description}})),n(s),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(O.a.mark((function e(a){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),q.loggedIn()?q.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,E({variables:{newBlast:Object(d.a)({},n)}});case 7:r=e.sent,r.data,p([].concat(Object(k.a)(b),[n.bookId])),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{fluid:!0,className:"text-light bg-dark"},i.a.createElement(I.a,null,i.a.createElement("h1",null,"Search for Books!"),i.a.createElement(x.a,{onSubmit:f},i.a.createElement(x.a.Row,null,i.a.createElement(B.a,{xs:12,md:8},i.a.createElement(x.a.Control,{name:"searchInput",value:o,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),i.a.createElement(B.a,{xs:12,md:4},i.a.createElement(C.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),i.a.createElement(I.a,null,i.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),i.a.createElement(F.a,null,t.map((function(e){return i.a.createElement(N.a,{key:e.bookId,border:"dark"},e.image?i.a.createElement(N.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,i.a.createElement(N.a.Body,null,i.a.createElement(N.a.Title,null,e.title),i.a.createElement("p",{className:"small"},"Authors: ",e.authors),i.a.createElement(N.a.Text,null,e.description),q.loggedIn()&&i.a.createElement(C.a,{disabled:null===b||void 0===b?void 0:b.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return h(e.bookId)}},(null===b||void 0===b?void 0:b.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},A=t(133),M=Object(U.a)(c||(c=Object(G.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      blastCount\n      savedBlasts {\n        blastId\n        blastName\n      }\n    }\n  }\n"]))),H=function(){var e=Object(A.a)(M),a=e.loading,t=e.data,n=Object(P.a)(K),r=Object(S.a)(n,2),l=r[0],o=(r[1].error,(null===t||void 0===t?void 0:t.me)||{}),c=function(){var e=Object(j.a)(O.a.mark((function e(a){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.loggedIn()?q.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,l({variables:{blastId:a}});case 6:t=e.sent,t.data,D(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return a?i.a.createElement("h2",null,"LOADING..."):i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{fluid:!0,className:"text-light bg-dark"},i.a.createElement(I.a,null,i.a.createElement("h1",null,"Viewing saved books!"))),i.a.createElement(I.a,null,i.a.createElement("h2",null,o.savedBlasts.length?"Viewing ".concat(o.savedBlasts.length," saved ").concat(1===o.savedBlasts.length?"blast":"blasts",":"):"You have no saved blasts!"),i.a.createElement(F.a,null,o.savedBlasts.map((function(e){return i.a.createElement(N.a,{key:e.bookId,border:"dark"},e.image?i.a.createElement(N.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,i.a.createElement(N.a.Body,null,i.a.createElement(N.a.Title,null,e.title),i.a.createElement("p",{className:"small"},"Authors: ",e.authors),i.a.createElement(N.a.Text,null,e.description),i.a.createElement(C.a,{className:"btn-block btn-danger",onClick:function(){return c(e.bookId)}},"Delete this Book!")))})))))},R=t(141),W=t(140),Q=t(136),X=t(142),Z=t(47),ee=t(134),ae=function(){var e=Object(s.useState)({username:"",email:"",password:""}),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(s.useState)(!1),l=Object(S.a)(r,1)[0],o=Object(s.useState)(!1),c=Object(S.a)(o,2),u=c[0],m=c[1],b=Object(P.a)(Y),p=Object(S.a)(b,2),v=p[0],g=p[1],E=g.error;g.data;Object(s.useEffect)((function(){m(!!E)}),[E]);var f=function(e){var a=e.target,r=a.name,l=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Z.a)({},r,l)))},h=function(){var e=Object(j.a)(O.a.mark((function e(a){var r,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,v({variables:Object(d.a)({},t)});case 6:r=e.sent,l=r.data,q.login(l.addUser.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:n({username:"",email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{noValidate:!0,validated:l,onSubmit:h},i.a.createElement(ee.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),i.a.createElement(x.a.Group,null,i.a.createElement(x.a.Label,{htmlFor:"username"},"Username"),i.a.createElement(x.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:f,value:t.username,required:!0}),i.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Username is required!")),i.a.createElement(x.a.Group,null,i.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),i.a.createElement(x.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:f,value:t.email,required:!0}),i.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),i.a.createElement(x.a.Group,null,i.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),i.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:f,value:t.password,required:!0}),i.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),i.a.createElement(C.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},te=function(){var e=Object(s.useState)({email:"",password:""}),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(s.useState)(!1),l=Object(S.a)(r,1)[0],o=Object(s.useState)(!1),c=Object(S.a)(o,2),u=c[0],m=c[1],b=Object(P.a)(V),p=Object(S.a)(b,2),v=p[0],g=(p[1].error,function(e){var a=e.target,r=a.name,l=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Z.a)({},r,l)))}),E=function(){var e=Object(j.a)(O.a.mark((function e(a){var r,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,v({variables:Object(d.a)({},t)});case 6:r=e.sent,l=r.data,q.login(l.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),m(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{noValidate:!0,validated:l,onSubmit:E},i.a.createElement(ee.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),i.a.createElement(x.a.Group,null,i.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),i.a.createElement(x.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:g,value:t.email,required:!0}),i.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),i.a.createElement(x.a.Group,null,i.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),i.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:g,value:t.password,required:!0}),i.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),i.a.createElement(C.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},ne=function(){var e=Object(s.useState)(!1),a=Object(S.a)(e,2),t=a[0],n=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(R.a,{bg:"dark",variant:"dark",expand:"lg"},i.a.createElement(I.a,{fluid:!0},i.a.createElement(R.a.Brand,{as:b.b,to:"/"},"Google Books Search"),i.a.createElement(R.a.Toggle,{"aria-controls":"navbar"}),i.a.createElement(R.a.Collapse,{id:"navbar"},i.a.createElement(W.a,{className:"ml-auto"},i.a.createElement(W.a.Link,{as:b.b,to:"/"},"Search For Books"),q.loggedIn()?i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a.Link,{as:b.b,to:"/saved"},"See Your Books"),i.a.createElement(W.a.Link,{onClick:q.logout},"Logout")):i.a.createElement(W.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),i.a.createElement(Q.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},i.a.createElement(X.a.Container,{defaultActiveKey:"login"},i.a.createElement(Q.a.Header,{closeButton:!0},i.a.createElement(Q.a.Title,{id:"signup-modal"},i.a.createElement(W.a,{variant:"pills"},i.a.createElement(W.a.Item,null,i.a.createElement(W.a.Link,{eventKey:"login"},"Login")),i.a.createElement(W.a.Item,null,i.a.createElement(W.a.Link,{eventKey:"signup"},"Sign Up"))))),i.a.createElement(Q.a.Body,null,i.a.createElement(X.a.Content,null,i.a.createElement(X.a.Pane,{eventKey:"login"},i.a.createElement(te,{handleModalClose:function(){return n(!1)}})),i.a.createElement(X.a.Pane,{eventKey:"signup"},i.a.createElement(ae,{handleModalClose:function(){return n(!1)}})))))))},re=Object(v.a)({uri:"/graphql"}),le=Object(h.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(d.a)(Object(d.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),oe=new g.a({link:le.concat(re),cache:new E.a});var ce=function(){return i.a.createElement(f.a,{client:oe},i.a.createElement(b.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(ne,null),i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/",component:z}),i.a.createElement(p.a,{exact:!0,path:"/saved",component:H}),i.a.createElement(p.a,{render:function(){return i.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ce,null)),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.624ca4c4.chunk.js.map