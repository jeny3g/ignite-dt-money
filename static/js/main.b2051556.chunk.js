(this["webpackJsonpignite-dtmoney"]=this["webpackJsonpignite-dtmoney"]||[]).push([[0],{101:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),c=e(27),i=e.n(c),o=e(34),s=e(6),d=e(10),l=e.n(d),b=e(63),u=e(35),j=e(16),h=e(50),m=e.n(h).a.create({baseURL:"http://localhost:3000/api"}),p=e(0),g=Object(r.createContext)({}),f=function(n){var t=n.children,e=Object(r.useState)([]),a=Object(s.a)(e,2),c=a[0],i=a[1];function o(){return(o=Object(j.a)(l.a.mark((function n(t){var e,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.post("/transactions",Object(u.a)(Object(u.a)({},t),{},{createdAt:new Date}));case 2:e=n.sent,r=e.data.transaction,i([].concat(Object(b.a)(c),[r]));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(r.useEffect)((function(){m.get("transactions").then((function(n){return i(n.data.transactions)}))}),[]),Object(p.jsx)(g.Provider,{value:{transactions:c,createTransaction:function(n){return o.apply(this,arguments)}},children:t})};function O(){return Object(r.useContext)(g)}var x,v,y=e.p+"static/media/income.6106d856.svg",w=e.p+"static/media/outcome.34032f7e.svg",k=e.p+"static/media/total.285fe24b.svg",C=e(3),N=e(4),R=N.b.div(x||(x=Object(C.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  margin-top: -10rem;\n\n  div {\n    background: var(--shape);\n    padding: 1.5rem 2rem;\n    border-radius: 0.25rem;\n    color: var(--text-title);\n\n    header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    strong {\n      display: block;\n      margin-top: 1rem;\n      font-size: 2rem;\n      font-weight: 500;\n      line-height: 3rem;\n    }\n\n    &.highlight-background {\n      background: var(--green);\n      color: #fff;\n    }\n  }\n"])));function S(){var n=O().transactions.reduce((function(n,t){return"deposit"===t.type?(n.deposits+=t.amount,n.total+=t.amount):(n.withdraws+=t.amount,n.total-=t.amount),n}),{deposits:0,withdraws:0,total:0});return Object(p.jsxs)(R,{children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("p",{children:"Entradas"}),Object(p.jsx)("img",{src:y,alt:"Entradas"})]}),Object(p.jsx)("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.deposits)})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("p",{children:"Saidas"}),Object(p.jsx)("img",{src:w,alt:"Sa\xeddas"})]}),Object(p.jsxs)("strong",{children:["-",new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.withdraws)]})]}),Object(p.jsxs)("div",{className:"highlight-background",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("p",{children:"Total"}),Object(p.jsx)("img",{src:k,alt:"Total"})]}),Object(p.jsx)("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.total)})]})]})}var B,z=N.b.div(v||(v=Object(C.a)(["\n  margin-top: 4rem;\n\n  table {\n    width: 100%;\n    border-spacing: 0 0.5rem;\n\n    th {\n      color: var(--text-body);\n      font-weight: 400;\n      padding: 1rem 2rem;\n      text-align: left;\n      line-height: 1.5rem;\n    }\n\n    td {\n      padding: 1rem 2rem;\n      border: 0;\n      background: var(--shape);\n      color: var(--text-body);\n      border-radius: 0.25rem;\n\n      &:first-child {\n        color: var(--text-title);\n      }\n\n      &.deposit {\n        color: var(--green);\n      }\n\n      &.withdraw {\n        color: var(--red);\n      }\n    }\n  }\n"])));function A(){var n=O().transactions;return Object(p.jsx)(z,{children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Titulo"}),Object(p.jsx)("th",{children:"Valor"}),Object(p.jsx)("th",{children:"Categoria"}),Object(p.jsx)("th",{children:"Data"})]})}),Object(p.jsx)("tbody",{children:n.map((function(n){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:n.title}),Object(p.jsx)("td",{className:n.type,children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.amount)}),Object(p.jsx)("td",{children:n.category}),Object(p.jsx)("td",{children:new Intl.DateTimeFormat("pt-BR",{}).format(new Date(n.createdAt))})]},n.id)}))})]})})}var D=N.b.main(B||(B=Object(C.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 2.5rem 1rem;\n"])));function T(){return Object(p.jsxs)(D,{children:[Object(p.jsx)(S,{}),Object(p.jsx)(A,{})]})}var E,F,I=e.p+"static/media/logo.b30f412f.svg",L=N.b.header(E||(E=Object(C.a)(["\n  background: var(--blue);\n"]))),q=N.b.div(F||(F=Object(C.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n\n  padding: 2rem 1rem 12rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  button {\n    font-size: 1rem;\n    color: #fff;\n    background: var(--blue-light);\n    border: 0;\n    padding: 0 2rem;\n    border-radius: 0.25rem;\n    height: 3rem;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n"])));function J(n){var t=n.onOpenNewTransactionModal;return Object(p.jsx)(L,{children:Object(p.jsxs)(q,{children:[Object(p.jsx)("img",{src:I,alt:"dt money"}),Object(p.jsx)("button",{type:"button",onClick:t,children:"Nova transa\xe7\xe3o"})]})})}var M,P,V,U,G=e(29),H=e.n(G),K=e.p+"static/media/close.db04ce19.svg",Q=e(33),W=N.b.form(M||(M=Object(C.a)(['\n  h2 {\n    color: var(--text-title);\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n  }\n\n  input {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    border-radius: 0.25rem;\n\n    border: 1px solid #d7d7d7;\n    background: #e7e9ee;\n\n    font-weight: 400;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--text-body);\n    }\n\n    & + input {\n      margin-top: 1rem;\n    }\n  }\n\n  button[type="submit"] {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    background: var(--green);\n    color: #fff;\n    border-radius: 0.25rem;\n    border: 0;\n    font-size: 1rem;\n    margin-top: 1.5rem;\n    font-weight: 600;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n']))),X=N.b.div(P||(P=Object(C.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n"]))),Y={green:"#33cc95",red:"#e52e4d"},Z=N.b.button(V||(V=Object(C.a)(["\n  height: 4rem;\n  border: 1px solid #d7d7d7;\n  border-radius: 0.25rem;\n\n  background: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  transition: border-color 0.2s;\n\n  &:hover {\n    border-color: ",";\n  }\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n\n  span {\n    display: inline-block;\n    margin-left: 1rem;\n    font-size: 1rem;\n    color: var(--text-title);\n  }\n"])),(function(n){return n.isActive?Object(Q.b)(.9,Y[n.activeColor]):"transparent"}),Object(Q.a)(.1,"#d7d7d7"));function $(n){var t=n.isOpen,e=n.onRequestClose,a=O().createTransaction,c=Object(r.useState)(""),i=Object(s.a)(c,2),o=i[0],d=i[1],b=Object(r.useState)(0),u=Object(s.a)(b,2),h=u[0],m=u[1],g=Object(r.useState)("deposit"),f=Object(s.a)(g,2),x=f[0],v=f[1],k=Object(r.useState)("deposit"),C=Object(s.a)(k,2),N=C[0],R=C[1];function S(){return(S=Object(j.a)(l.a.mark((function n(t){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,a({title:o,amount:h,category:x,type:N});case 3:d(""),m(0),v("deposit"),R(""),e();case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(p.jsxs)(H.a,{isOpen:t,onRequestClose:e,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[Object(p.jsx)("button",{type:"button",onClick:e,className:"react-modal-close",children:Object(p.jsx)("img",{src:K,alt:"Fechar modal"})}),Object(p.jsxs)(W,{onSubmit:function(n){return S.apply(this,arguments)},children:[Object(p.jsx)("h2",{children:"Cadastrar transa\xe7\xe3o"}),Object(p.jsx)("input",{placeholder:"T\xedtulo",value:o,onChange:function(n){return d(n.target.value)}}),Object(p.jsx)("input",{type:"number",placeholder:"Valor",value:h,onChange:function(n){return m(Number(n.target.value))}}),Object(p.jsxs)(X,{children:[Object(p.jsxs)(Z,{type:"button",onClick:function(){return R("deposit")},isActive:"deposit"===N,activeColor:"green",children:[Object(p.jsx)("img",{src:y,alt:"Entrada"}),Object(p.jsx)("span",{children:"Entrada"})]}),Object(p.jsxs)(Z,{type:"button",onClick:function(){return R("withdraw")},isActive:"withdraw"===N,activeColor:"red",children:[Object(p.jsx)("img",{src:w,alt:"Sa\xedda"}),Object(p.jsx)("span",{children:"Sa\xedda"})]})]}),Object(p.jsx)("input",{placeholder:"Categoria",value:x,onChange:function(n){return v(n.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Cadastrar"})]})]})}H.a.setAppElement("#root");var _=Object(N.a)(U||(U=Object(C.a)(["\n  :root{\n    --background: #f0f2f5;\n    --red: #e52e4d;\n    --green: #33cc95;\n    --blue: #5429cc;\n\n    --blue-light: #6933ff;\n\n    --text-title: #363f5f;\n    --text-body: #969cb3;\n\n    --background: #f8f2f5;\n    --shape: #fff;\n  }\n\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html{ \n    @media(max-width:1080px){\n      font-size: 93.75%;\n    }\n\n    @media (max-width: 720px){\n      font-size: 87.5%;\n    }\n  }\n\n  body{ \n    background: var(--background);\n    -webkit-font-font-smooth: antialiased;\n  }\n\n  body, input, textarea, button{\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n  }\n\n  h1,h2,h3, h4, h5, h6, strong{\n    font-weight: 600;\n  }\n\n  button{ \n    cursor: pointer;\n  }\n\n  [disabled]{\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n\n  .react-modal-overlay{\n    background: rgba(0,0,0,0.5);\n\n    position: fixed;\n    top:0;\n    bottom:0;\n    right:0;\n    left:0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .react-modal-content{\n    width: 100%;\n    max-width: 576px;\n    background: var(--background);\n    padding: 3rem;\n    position: relative;\n    border-radius: 0.25rem;\n  }\n\n  .react-modal-close{\n    position: absolute;\n    right: 1.5rem;\n    top: 1.5rem;\n    border: 0;\n    background: transparent;\n\n    transition: filter 0.2s;\n\n    &:hover{\n      filter: brightness(0.8);\n    }\n  }\n"])));function nn(){var n=Object(r.useState)(!1),t=Object(s.a)(n,2),e=t[0],a=t[1];return Object(p.jsxs)(f,{children:[Object(p.jsx)(J,{onOpenNewTransactionModal:function(){a(!0)}}),Object(p.jsx)(T,{}),Object(p.jsx)($,{isOpen:e,onRequestClose:function(){a(!1)}}),Object(p.jsx)(_,{})]})}Object(o.b)({models:{transaction:o.a},seeds:function(n){n.db.loadData({transactions:[{id:1,title:"Freelancer de website",type:"deposit",category:"Dev",amount:6e3,createdAt:new Date("2021-02-12 09:00:00")},{id:2,title:"Aluguel",type:"withdraw",category:"Casa",amount:1100,createdAt:new Date("2021-02-14 11:00:00")}]})},routes:function(){var n=this;this.namespace="api",this.get("/transactions",(function(){return n.schema.all("transaction")})),this.post("/transactions",(function(n,t){var e=JSON.parse(t.requestBody);return n.create("transaction",e)}))}}),i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(nn,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.b2051556.chunk.js.map