"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(689),u=e(87),i=e(952),o=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],f=(0,c.TH)();return(0,a.useEffect)((function(){(0,i.Hg)().then((function(t){var n=t.results;s(n)}))}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)("ul",{children:e.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsx)(u.OL,{to:"movies/".concat(t.id),state:{from:f},children:t.original_title||t.original_name})},t.id)}))})]})}},952:function(t,n,e){e.d(n,{Hg:function(){return o},Ku:function(){return p},XT:function(){return s},av:function(){return f},fI:function(){return v}});var r=e(861),a=e(687),c=e.n(a),u=e(243),i="04e81f6e5279def5b1a55a2f401d6ead";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/all/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("AAAAAAAAAAAAAA");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.ef775e9d.chunk.js.map