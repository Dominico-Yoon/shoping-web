(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{3080:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return e(8828)}])},654:function(t,n,e){"use strict";e.d(n,{GR:function(){return i},aJ:function(){return c}});let r=e(7066).Z.create({baseURL:"http://180.65.12.137:4000"});function c(t){let{id:n,name:e,price:c,imageUrl:i}=t;return r.post("/carts",{id:n,name:e,price:c,imageUrl:i})}function i(t){return r.delete("/carts/".concat(t))}},7320:function(t,n,e){"use strict";var r=e(5893);n.Z=function(t){let{title:n}=t;return(0,r.jsx)("h1",{children:n})}},8828:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSP:function(){return f},default:function(){return h}});var r=e(5893),c=e(5675),i=e.n(c),s=e(5978),u=e.n(s),a=e(1163),l=e(654),o=function(t){let{cartItem:n}=t,e=(0,a.useRouter)(),c=n.reduce((t,n)=>t+parseFloat(n.price),0);async function s(t){let{data:n}=await (0,l.GR)(t);alert("".concat(n.name," 삭제 되었습니다.")),e.replace(e.asPath)}return(0,r.jsxs)("div",{className:u().container,children:[n.map(t=>(0,r.jsxs)("div",{className:u().cartItem,children:[(0,r.jsx)(i(),{src:t.imageUrl,alt:t.name,width:100,height:100}),(0,r.jsxs)("div",{children:["상품명 : ",t.name]}),(0,r.jsxs)("div",{children:["가격 : ",t.price,"$"]}),(0,r.jsx)("button",{onClick:()=>s(t.id),children:"삭제하기"})]},t.id)),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["총 가격 : ",c,"$"]}),(0,r.jsxs)("div",{children:["총 수량 : ",n.length]})]})]})},d=e(7320);e(7294);var f=!0,h=function(t){let{cartItem:n}=t;return(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{title:"장바구니"}),(0,r.jsx)(o,{cartItem:n})]})}},5978:function(t){t.exports={cartItem:"CartList_cartItem__qGjG_"}}},function(t){t.O(0,[143,888,774,179],function(){return t(t.s=3080)}),_N_E=t.O()}]);