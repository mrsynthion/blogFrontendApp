(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{48:function(e,t,n){"use strict";n.r(t);var r,o,i,c,a,s,l,d,u,h,b,p,f=n(0),j=n.n(f),g=n(18),x=n.n(g),O=n(17),m=n(14),w=Object(m.b)({name:"theme",initialState:{dark:!1},reducers:{changeTheme:function(e){e.dark=!e.dark}}}),v=w.actions.changeTheme,k=w.reducer,S=Object(m.b)({name:"search",initialState:{value:"",title:!0,description:!1,tags:!1},reducers:{changeSearchState:function(e,t){e.value=t.payload.value,e.title=t.payload.title,e.description=t.payload.description,e.tags=t.payload.tags}}}),y=S.actions.changeSearchState,T=S.reducer,C=Object(m.b)({name:"articleForm",initialState:{articleTitle:"",articleDescription:"",articleTags:[]},reducers:{changeArticleFormState:function(e,t){e.articleTitle=t.payload.articleTitle,e.articleDescription=t.payload.articleDescription,e.articleTags=t.payload.articleTags}}}),L=C.actions.changeArticleFormState,z=C.reducer,A=Object(m.a)({reducer:{changeTheme:k,changeSearchState:T,changeArticleFormState:z}}),F=n(7),D={fontSize:{h1:"2rem",h2:"1.70rem",h3:"1.5rem",h4:"1.25rem",h5:"1.15rem",h6:"1rem"},fontWeight:{normal:400,bold:900},colors:{background:"#fff",backgroundSecondary:"#f9fafb",header:"pink",textNormal:"#222",textTitle:"#222",textLink:"#d23669",opposite:"#282c35"}},I={fontSize:{h1:"2rem",h2:"1.70rem",h3:"1.5rem",h4:"1.25rem",h5:"1.15rem",h6:"1rem"},fontWeight:{normal:400,bold:900},colors:{background:"#282c35",backgroundSecondary:"#363c48",header:"#fff",textNormal:"hsla(0,0%,100%,0.88)",textTitle:"#fff",textLink:"pink",opposite:"#fff"}},E=function(){return Object(O.b)()},M=O.c,N=n(13),W=n(5),J=n(2),B=n(3),P=Object(J.b)(r||(r=Object(B.a)(["\n\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');\n*,*::after,*::before{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    font-size:16px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight:",";\n}\nbody{\n background-color:",";\n}\na, button{\n    font-family: 'Montserrat', sans-serif;\n}\n"])),(function(e){return e.theme.fontWeight.normal}),(function(e){return e.theme.colors.background})),G=n(1),X=function(e){var t=e.children,n=e.Theme;return Object(G.jsxs)(J.a,{theme:n,children:[Object(G.jsx)(P,{}),t]})},Y=J.d.footer(o||(o=Object(B.a)(["\n  height: 40px;\n  border-top: solid 1px ",";\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  z-index: 10;\n  background-color: ",";\n  margin-top: 10px;\n  overflow: hidden;\n"])),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.colors.background})),q=J.d.div(i||(i=Object(B.a)(["\n  height: 100%;\n  width: 30%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n"]))),H=J.d.button(c||(c=Object(B.a)(["\n  width: 150px;\n  height: 28px;\n  border-radius: 20px;\n  padding: 4px;\n  color: ",";\n  text-decoration: none;\n  outline: none;\n  border: 1px solid ",";\n"])),(function(e){return e.theme.colors.textLink}),(function(e){return e.theme.colors.opposite})),K=J.d.div(a||(a=Object(B.a)(["\n  height: 100%;\n  width: 100%;\n"]))),Q=J.d.div(s||(s=Object(B.a)(["\n  position: relative;\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n"]))),R=J.d.div(l||(l=Object(B.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-rows: ",";\n  align-items: center;\n  justify-items: center;\n  overflow: hidden;\n"])),(function(e){var t=e.length;return"repeat(".concat(t,",180px)")})),U=J.d.div(d||(d=Object(B.a)(["\n  margin: 10px 0;\n  height: 100px;\n"]))),V=n(6),Z=J.d.div(u||(u=Object(B.a)(["\n  display: grid;\n  grid-template-columns: 50% 50%;\n  place-items: center;\n  padding: 0 10px;\n"]))),$=J.d.input(h||(h=Object(B.a)(["\n  text-align: center;\n  height: auto;\n  width: 100%;\n  cursor: pointer;\n  margin: 10px;\n"]))),_=J.d.label(b||(b=Object(B.a)(["\n  color: ",";\n  justify-self: left;\n  :first-letter {\n    text-transform: uppercase;\n  }\n"])),(function(e){return e.theme.colors.textNormal}));!function(e){e.Title="title",e.Description="description",e.Tags="tags"}(p||(p={}));var ee,te,ne,re,oe,ie,ce,ae,se,le,de,ue,he,be,pe,fe,je,ge,xe,Oe,me,we=function(e){var t,n=e.label,r=M((function(e){return e.changeSearchState})),o=E();switch(n){case p.Title:t=!0;break;default:t=!1}var i=Object(f.useState)(t),c=Object(F.a)(i,2),a=c[0],s=c[1],l=Object(f.useState)(M((function(e){return e.changeSearchState}))),d=Object(F.a)(l,2),u=d[0],h=d[1];return Object(f.useEffect)((function(){switch(n){case p.Title:h(Object(V.a)(Object(V.a)({},r),{},{title:a}));break;case p.Description:h(Object(V.a)(Object(V.a)({},r),{},{description:a}));break;case p.Tags:h(Object(V.a)(Object(V.a)({},r),{},{tags:a}));break;default:return}}),[n,a,r]),Object(f.useEffect)((function(){o(y(u))}),[u,o]),console.log(u),Object(G.jsxs)(Z,{children:[Object(G.jsx)(_,{htmlFor:n,children:n}),Object(G.jsx)($,{type:"checkbox",id:n,defaultChecked:a,onChange:function(e){s(e.target.checked)}})]})},ve=J.d.button(ee||(ee=Object(B.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 200px;\n  height: 35px;\n  border: 1px solid ",";\n  background-color: ",";\n  border-radius: 20px;\n  color: ",";\n  padding: 5px 10px;\n  outline: none;\n  margin: 5px 0;\n  z-index: 4;\n"])),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.opposite})),ke=J.d.div(te||(te=Object(B.a)(["\n  width: 0;\n  height: 0px;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid ",";\n"])),(function(e){return e.theme.colors.opposite})),Se=J.d.div(ne||(ne=Object(B.a)(["\n  display: ",";\n  width: 200px;\n  height: 150px;\n  border: 1px solid ",";\n  background-color: ",";\n  grid-template-rows: 1fr 1fr 1fr;\n  border-radius: 20px;\n  box-shadow: 0 0 15px ",";\n  z-index: 3;\n  position: absolute;\n  top: 50px;\n"])),(function(e){return e.active?"grid":"none"}),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.opposite})),ye=J.d.div(re||(re=Object(B.a)(["\n  position: relative;\n  height: 200px;\n"]))),Te=function(e){var t=e.Placeholder,n=Object(f.useState)(!1),r=Object(F.a)(n,2),o=r[0],i=r[1];return Object(G.jsxs)(ye,{children:[Object(G.jsxs)(ve,{onClick:function(){return i(!o)},children:[t,Object(G.jsx)(ke,{})]}),Object(G.jsxs)(Se,{active:o,children:[Object(G.jsx)(we,{label:"title"}),Object(G.jsx)(we,{label:"description"}),Object(G.jsx)(we,{label:"tags"})]})]})},Ce=J.d.input(oe||(oe=Object(B.a)(["\n  width: 200px;\n  height: 35px;\n  border: 1px solid ",";\n  background-color: ",";\n  border-radius: 20px;\n  text-align: left;\n  color: ",";\n  padding: 10px;\n  outline: none;\n  margin: 5px 0;\n\n  ::placeholder {\n    color: ",";\n  }\n  :focus {\n    ::placeholder {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.colors.background})),Le=function(){var e=M((function(e){return e.changeSearchState})),t=E();return Object(G.jsx)(Ce,{placeholder:"Search",onChange:function(n){return t(y(Object(V.a)(Object(V.a)({},e),{},{value:n.target.value})))}})},ze=J.d.div(ie||(ie=Object(B.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Ae=J.d.p(ce||(ce=Object(B.a)(["\n  color: ",";\n  margin-left: 20px;\n  font-size: ",";\n"])),(function(e){return e.theme.colors.textTitle}),(function(e){return e.theme.fontSize.h3})),Fe=function(){return Object(G.jsxs)(ze,{children:[Object(G.jsx)(Ae,{children:"Blog osobisty"}),Object(G.jsx)(H,{as:N.b,to:"/blogFrontendApp/AddArticle",children:"Dodaj artyku\u0142"}),Object(G.jsxs)(U,{children:[Object(G.jsx)(Le,{}),Object(G.jsx)(Te,{Placeholder:"Advanced search"})]})]})},De=J.d.h3(ae||(ae=Object(B.a)(["\n  font-size: ",";\n  color: ",";\n  text-align: center;\n  padding: 10px;\n"])),(function(e){return e.theme.fontSize.h3}),(function(e){var t=e.theme;return e.isArticle?t.colors.textLink:t.colors.textTitle})),Ie=J.d.p(se||(se=Object(B.a)(["\n  font-size: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.h4}),(function(e){return e.theme.colors.textNormal})),Ee=function(e,t){return e.split(t)},Me=J.d.div(le||(le=Object(B.a)(["\n  height: 180px;\n  width: 50%;\n  border-bottom: 0.1px dashed ",";\n  padding: 5px;\n  overflow: hidden;\n"])),(function(e){return e.theme.colors.opposite})),Ne=Object(J.d)(Ie)(de||(de=Object(B.a)(["\n  margin-top: 5%;\n  font-style: italic;\n  color: ",";\n  font-size: ",";\n"])),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.fontSize.h6})),We=Object(J.d)(N.b)(ue||(ue=Object(B.a)(["\n  outline: none;\n  text-decoration: none;\n"]))),Je=function(e){var t=e.id,n=e.title,r=e.text,o=e.tags,i=Ee(r,"."),c="/blogFrontendApp/posts"+t;return Object(G.jsxs)(Me,{children:[Object(G.jsx)(We,{to:c,children:Object(G.jsx)(De,{isArticle:!0,children:n})}),Object(G.jsxs)(Ie,{children:[i[0],","]}),Object(G.jsxs)(Ie,{children:[i[1],"."]}),Object(G.jsxs)(Ne,{children:["Tags: ",o]})]})},Be=function(){return Object(G.jsx)(Y,{children:Object(G.jsxs)(q,{children:[Object(G.jsx)(Ie,{children:"Blog osobisty .. o .."}),Object(G.jsx)(H,{as:N.b,to:"/blogFrontendApp",children:"Strona g\u0142\xf3wna"})]})})},Pe=J.d.h1(he||(he=Object(B.a)(["\n  font-size: ",";\n  color: ",";\n  font-weight: ",";\n"])),(function(e){var t=e.theme;return e.isSmall?t.fontSize.h3:t.fontSize.h1}),(function(e){return e.theme.colors.textTitle}),(function(e){return e.theme.fontWeight.bold})),Ge=J.d.header(be||(be=Object(B.a)(["\n  width: 100%;\n  height: auto;\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Xe=J.d.div(pe||(pe=Object(B.a)(["\n  width: 50px;\n  height: 25px;\n  border: none;\n  margin: 0;\n  border-radius: 30px;\n  padding: 0;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.opposite})),Ye=J.d.button(fe||(fe=Object(B.a)(["\n  margin: 0;\n  cursor: pointer;\n  width: 50%;\n  height: 100%;\n  border: none;\n  border-radius: 50%;\n  background-color: ",";\n  outline: none;\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n\n  ","\n  :hover {\n    border: solid 3px ",";\n  }\n"])),(function(e){var t=e.theme;return e.clicked?t.colors.background:t.colors.backgroundSecondary}),(function(e){return e.clicked&&Object(J.c)(je||(je=Object(B.a)(["\n      transform: translateX(25px);\n    "])))}),(function(e){return e.theme.colors.textLink})),qe=function(){var e=M((function(e){return e.changeTheme.dark})),t=E();return Object(G.jsx)(Xe,{clicked:e,children:Object(G.jsx)(Ye,{"aria-label":"Switch between light and dark mode",onClick:function(){return t(v())},clicked:e})})},He=function(){return Object(G.jsxs)(Ge,{children:[Object(G.jsx)(Pe,{children:"Tytu\u0142 bloga"}),Object(G.jsx)(qe,{})]})},Ke=function(){var e=Object(f.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],o=M((function(e){return e.changeSearchState.title})),i=M((function(e){return e.changeSearchState.description})),c=M((function(e){return e.changeSearchState.tags})),a=M((function(e){return e.changeSearchState.value}));return Object(f.useEffect)((function(){var e=JSON.parse(localStorage.getItem("posts")),t=[];null!==e&&(t=e);t.unshift({title:"Tytu\u0142",description:"Lorem ipsum",tags:"tag1,tag2",id:0}),t.unshift({title:"Goodbye, Clean Code",description:"It was a late evening My colleague has just checked in the code that they\u2019ve been writing all week. We were working on a graphics editor canvas, and they implemented the ability to resize shapes like rectangles and ovals by dragging small handles at their edges.The code worked.But it was repetitive. Each shape (such as a rectangle or an oval) had a different set of handles, and dragging each handle in different directions affected the shape\u2019s position and size in a different way. If the user held Shift, we\u2019d also need to preserve proportions while resizing. There was a bunch of math.",tags:"tag1,tag2,tag3",id:1}),console.log(t),null!==t&&r(t.reverse())}),[]),console.log(n),Object(G.jsxs)(K,{children:[Object(G.jsxs)(Q,{children:[Object(G.jsx)(He,{}),Object(G.jsx)(Fe,{}),Object(G.jsx)(R,{length:n.length,children:0!==n.length?n.map((function(e){if(0===a.length)return Object(G.jsx)(Je,{title:e.title,text:e.description,id:e.id+2,tags:e.tags},e.id+2);var t=function(e,t,n,r,o){if(e&&t&&n){if(o.title.toLowerCase().includes(r.toLowerCase())||o.description.toLowerCase().includes(r.toLowerCase())||o.tags.toLowerCase().includes(r.toLowerCase()))return o}else if(e&&t){if(o.title.toLowerCase().includes(r.toLowerCase())||o.description.toLowerCase().includes(r.toLowerCase()))return o}else if(e&&n){if(o.title.toLowerCase().includes(r.toLowerCase())||o.tags.toLowerCase().includes(r.toLowerCase()))return o}else if(t&&n){if(o.description.toLowerCase().includes(r.toLowerCase())||o.tags.toLowerCase().includes(r.toLowerCase()))return o}else if(e){if(o.title.toLowerCase().includes(r.toLowerCase()))return o}else if(t){if(o.description.toLowerCase().includes(r.toLowerCase()))return o}else if(n&&o.tags.toLowerCase().includes(r.toLowerCase()))return o}(o,i,c,a,e);return t?Object(G.jsx)(Je,{title:t.title,text:t.description,id:e.id+2,tags:t.tags},t.id+2):null})):null})]}),Object(G.jsx)(Be,{})]})},Qe=J.d.button(ge||(ge=Object(B.a)(["\n  width: 200px;\n  height: 40px;\n  outline: none;\n  cursor: pointer;\n  border-radius: 20px;\n  margin-top: 20px;\n  border: 1px solid ",";\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.textLink}),(function(e){return e.theme.colors.background})),Re=function(e){var t=e.placeholder,n=e.action;return Object(G.jsx)(Qe,{type:"submit",onClick:n,children:t})};!function(e){e.Title="title",e.Description="description",e.Tags="tags"}(xe||(xe={}));var Ue,Ve,Ze,$e,_e,et,tt,nt,rt,ot,it,ct=J.d.input(Oe||(Oe=Object(B.a)(["\n  width: 30%;\n  height: 50px;\n  border-radius: 20px;\n  margin: 10px;\n  outline: none;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid ",";\n\n  :focus {\n    ::placeholder {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.colors.background})),at=J.d.textarea(me||(me=Object(B.a)(["\n  width: 30%;\n  height: 200px;\n  border-radius: 20px;\n  margin: 10px;\n  outline: none;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid ",";\n\n  :focus {\n    ::placeholder {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.colors.background})),st=function(e){var t=e.placeholder,n=e.type,r=e.isClicked,o=M((function(e){return e.changeArticleFormState})),i=E(),c=Object(f.useState)(o),a=Object(F.a)(c,2),s=a[0],l=a[1];switch(Object(f.useEffect)((function(){i(L(s))}),[s]),n){case xe.Title:return Object(G.jsx)(ct,{placeholder:t,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{articleTitle:e.target.value}))},value:r?"":o.articleTitle});case xe.Description:return Object(G.jsx)(at,{placeholder:t,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{articleDescription:e.target.value}))},value:r?"":o.articleDescription});case xe.Tags:return Object(G.jsx)(ct,{placeholder:t,onChange:function(e){return l(Object(V.a)(Object(V.a)({},o),{},{articleTags:Ee(e.target.value,",")}))},value:r?"":o.articleTags});default:return Object(G.jsx)("h3",{children:"Failed to load input"})}},lt=J.d.div(Ue||(Ue=Object(B.a)(["\n  width: 100%;\n  height: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),dt=function(e){var t=e.title,n=e.placeholder,r=e.type,o=e.isClicked;return Object(G.jsxs)(lt,{children:[Object(G.jsx)(Pe,{isSmall:!0,children:t}),Object(G.jsx)(st,{type:r,placeholder:n,isClicked:o})]})},ut=J.d.div(Ve||(Ve=Object(B.a)(["\n  width: 100%;\n  height: 80%;\n  display: ",";\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n"])),(function(e){return e.isSuccess?"none":"flex"})),ht=J.d.div(Ze||(Ze=Object(B.a)(["\n  width: 100%;\n  height: 40%;\n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])),(function(e){return e.isSuccess?"none":"flex"})),bt=J.d.h2($e||($e=Object(B.a)(["\n  margin-top: 30px;\n  color: ",";\n  font-size: ",";\n"])),(function(e){return e.theme.colors.textTitle}),(function(e){return e.theme.fontSize.h1})),pt=function(){var e=M((function(e){return e.changeArticleFormState})),t=E(),n=Object(f.useState)(!1),r=Object(F.a)(n,2),o=r[0],i=(r[1],Object(f.useState)(!1)),c=Object(F.a)(i,2),a=c[0],s=c[1],l=Object(f.useState)(2),d=Object(F.a)(l,2),u=d[0],h=d[1],b=[];b=null!==localStorage.getItem("posts")?JSON.parse(localStorage.getItem("posts")):[],Object(f.useEffect)((function(){h(b.length+2)}),[b]),console.log(b);return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(ut,{isSuccess:a,children:[Object(G.jsx)(dt,{title:"Article title",placeholder:"Article title",type:xe.Title,isClicked:a}),Object(G.jsx)(dt,{title:"Description",placeholder:"Main text",type:xe.Description,isClicked:a}),Object(G.jsx)(dt,{title:"Tags",placeholder:"Tags",type:xe.Tags,isClicked:a}),Object(G.jsx)(Re,{placeholder:"Submit",action:function(){return function(e){var n={title:e.articleTitle,description:e.articleDescription,tags:e.articleTags.join(","),id:u};console.log(n),b.push(n),console.log(b),localStorage.setItem("posts",JSON.stringify(b)),s(!0),t(L({articleTitle:"",articleDescription:"",articleTags:[]}))}(e)}}),o?Object(G.jsx)(bt,{children:"Failed to submit the article"}):null]}),a?Object(G.jsxs)(ht,{children:[Object(G.jsx)(bt,{children:"Your article has been added successfully."}),Object(G.jsx)(Re,{placeholder:"Add new article",action:function(){return s(!1)}})]}):null]})},ft=J.d.div(_e||(_e=Object(B.a)(["\n  width: 60%;\n  height: 90vh;\n  margin: auto;\n"]))),jt=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(ft,{children:[Object(G.jsx)(He,{}),Object(G.jsx)(pt,{})]}),Object(G.jsx)(Be,{})]})},gt=J.d.div(et||(et=Object(B.a)(["\n  background-color: ",";\n  width: 60%;\n  margin: auto;\n  height: 100vh;\n"])),(function(e){return e.theme.colors.background})),xt=J.d.div(tt||(tt=Object(B.a)(["\n  height: 80%;\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Ot=Object(J.d)(De)(nt||(nt=Object(B.a)(["\n  font-size: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.h1}),(function(e){return e.theme.colors.textLink})),mt=Object(J.d)(Ie)(rt||(rt=Object(B.a)(["\n  font-size: ",";\n"])),(function(e){return e.theme.fontSize.h3})),wt=J.d.div(ot||(ot=Object(B.a)(["\n  margin-top: 10px;\n  color: ",";\n  font-size: ",";\n  font-style: italic;\n"])),(function(e){return e.theme.colors.textLink}),(function(e){return e.theme.fontSize.h5})),vt=J.d.button(it||(it=Object(B.a)(["\n  outline: none;\n  cursor: pointer;\n  width: 200px;\n  height: 50px;\n  border-radius: 50px;\n  color: ",";\n  font-weight: ",";\n  background-color: ",";\n  place-self: center;\n  text-align: center;\n  text-decoration: none;\n  padding: 1%;\n"])),(function(e){return e.theme.colors.opposite}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.textLink})),kt=function(e){var t=e.post;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(gt,{children:[Object(G.jsx)(He,{}),Object(G.jsxs)(xt,{children:[Object(G.jsx)(Ot,{children:t.title}),Object(G.jsx)(mt,{children:t.description}),Object(G.jsxs)(wt,{children:["Tags: ",t.tags]}),Object(G.jsx)(vt,{as:N.b,to:"/blogFrontendApp",children:"Powr\xf3t"})]})]}),Object(G.jsx)(Be,{})]})},St=function(){var e=M((function(e){return e.changeTheme.dark}))?I:D,t=Object(f.useState)([]),n=Object(F.a)(t,2),r=n[0],o=n[1];return Object(f.useEffect)((function(){var e=JSON.parse(localStorage.getItem("posts")),t=[];null!==e&&(t=e);t.unshift({title:"Tytu\u0142",description:"Lorem ipsum",tags:"tag1,tag2",id:0}),t.unshift({title:"Goodbye, Clean Code",description:"It was a late evening My colleague has just checked in the code that they\u2019ve been writing all week. We were working on a graphics editor canvas, and they implemented the ability to resize shapes like rectangles and ovals by dragging small handles at their edges.The code worked.But it was repetitive. Each shape (such as a rectangle or an oval) had a different set of handles, and dragging each handle in different directions affected the shape\u2019s position and size in a different way. If the user held Shift, we\u2019d also need to preserve proportions while resizing. There was a bunch of math.",tags:"tag1,tag2,tag3",id:1}),console.log(t),null!==t&&o(t.reverse())}),[localStorage]),Object(G.jsx)(N.a,{children:Object(G.jsx)(X,{Theme:e,children:Object(G.jsxs)(W.d,{children:[Object(G.jsx)(W.b,{exact:!0,path:"/blogFrontendApp",component:Ke}),Object(G.jsx)(W.b,{path:"/blogFrontendApp/MainPage",render:function(){return Object(G.jsx)(W.a,{to:"/blogFrontendApp"})}}),Object(G.jsx)(W.b,{path:"/blogFrontendApp/AddArticle",component:jt}),Object(G.jsx)(W.b,{path:"/blogFrontendApp/addarticle",render:function(){return Object(G.jsx)(W.a,{to:"/blogFrontendApp/AddArticle"})}}),r.map((function(e){var t=e.id+2,n="/blogFrontendApp/posts"+t;return console.log(n),console.log(e),Object(G.jsx)(W.b,{exact:!0,path:n,render:function(){return Object(G.jsx)(kt,{post:e})}},t)}))]})})})};x.a.render(Object(G.jsx)(j.a.StrictMode,{children:Object(G.jsx)(O.a,{store:A,children:Object(G.jsx)(St,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6006f18b.chunk.js.map