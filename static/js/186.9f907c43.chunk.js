"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,e,n){n.r(e);var r=n(439),a=n(791),u=n(689),c=n(952),i=n(184);e.default=function(){var t=(0,u.UO)().movieId,e=(0,a.useState)([]),n=(0,r.Z)(e,2),o=n[0],s=n[1];return(0,a.useEffect)((function(){(0,c.fI)(t).then((function(t){return s(t.results)}))}),[t]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Reviews"}),(0,i.jsx)("ul",{children:o.length>0?o.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:t.author}),(0,i.jsx)("p",{children:t.content})]},t.id)})):"Not have reviews now"})]})}},952:function(t,e,n){n.d(e,{Hg:function(){return o},Ku:function(){return p},XT:function(){return s},av:function(){return f},fI:function(){return v}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i="04e81f6e5279def5b1a55a2f401d6ead";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/all/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.9f907c43.chunk.js.map