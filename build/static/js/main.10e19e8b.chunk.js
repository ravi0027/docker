(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(19),r=n.n(i),s=(n(25),n(26),n(5)),o=n(6),u=n(9),l=n(8),b=n(7),j=n.n(b),h=n(0),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).submitHandler=function(t){t.preventDefault(),j.a.get("http://localhost:8080/album/get").then((function(t){return console.log(t.data)}))},c.state={posts:[]},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("form",{onSubmit:this.submitHandler,children:Object(h.jsx)("button",{type:"submit",children:"Click"})})})}}]),n}(c.Component),p=n(20),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).changeHandler=function(t){c.setState(Object(p.a)({},t.target.name,t.target.value))},c.submitHandler=function(t){t.preventDefault(),j.a.post("http://localhost:8080/album/post",c.state).then((function(t){console.log(t.data)})).catch((function(t){console.log("error",t)}))},c.state={Id:"",title:""},c}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.Id,n=t.title;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",name:"Id",value:e,onChange:this.changeHandler})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",name:"title",value:n,onChange:this.changeHandler})}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})})}}]),n}(c.Component);var f=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{}),Object(h.jsx)(d,{})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),m()}},[[46,1,2]]]);
//# sourceMappingURL=main.10e19e8b.chunk.js.map