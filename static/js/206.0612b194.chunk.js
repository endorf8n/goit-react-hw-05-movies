"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{2206:function(A,n,t){t.r(n),t.d(n,{default:function(){return Q}});var e,r,a,c,i=t(9439),o=t(2791),u=t(7689),s=t(8350),p=t(168),x=t(6444),f=x.ZP.ul(e||(e=(0,p.Z)(["\n  padding: 30px;\n"]))),g=x.ZP.li(r||(r=(0,p.Z)(["\n  margin-bottom: 20px;\n"]))),k=x.ZP.p(a||(a=(0,p.Z)(["\n  margin-bottom: 12px;\n  font-size: 14px;\n  font-weight: bold;\n"]))),I=x.ZP.p(c||(c=(0,p.Z)(["\n  font-size: 14px;\n  font-style: italic;\n"]))),J=t(184),Q=function(){var A=(0,o.useState)(),n=(0,i.Z)(A,2),t=n[0],e=n[1],r=(0,u.UO)().movieId;if((0,o.useEffect)((function(){(0,s.M1)(r).then((function(A){var n=A.cast;return e(n)}))}),[r]),t)return(0,J.jsx)("div",{children:(0,J.jsx)(f,{children:t.map((function(A){var n=A.id,t=A.profile_path,e=A.name,r=A.character;return(0,J.jsxs)(g,{children:[(0,J.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500/".concat(t):"".concat("data:image/jpeg;base64,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"),alt:e,width:"80"}),(0,J.jsxs)(k,{children:["Name: ",e]}),(0,J.jsxs)(I,{children:["Character: ",r]})]},n)}))})})}},8350:function(A,n,t){t.d(n,{Df:function(){return i},M1:function(){return s},R$:function(){return o},t2:function(){return u},tx:function(){return p}});var e=t(5861),r=t(4687),a=t.n(r),c=t(1243).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWIwNTdlMzc2MzJhMzE5YzZiZjI1ZGM5YjQzODM1MiIsInN1YiI6IjY0YTQzYjBkMTEzODZjMDExYzNiNmNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QEBANYEMuDbGQ9lrMDDAfxfmCJPA7p9-xGcIcjlQ8fk"),accept:"application/json"}}),i=function(){var A=(0,e.Z)(a().mark((function A(){var n,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/trending/movie/day?language=en-US");case 2:return n=A.sent,t=n.data,A.abrupt("return",t);case 5:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),o=function(){var A=(0,e.Z)(a().mark((function A(n){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/search/movie?query=".concat(n));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),u=function(){var A=(0,e.Z)(a().mark((function A(n){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/movie/".concat(n));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),s=function(){var A=(0,e.Z)(a().mark((function A(n){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/movie/".concat(n,"/credits?language=en-US"));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),p=function(){var A=(0,e.Z)(a().mark((function A(n){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/movie/".concat(n,"/reviews?language=en-US&page=1"));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}()}}]);
//# sourceMappingURL=206.0612b194.chunk.js.map