"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[101],{9484:function(n,r,t){t.d(r,{Z:function(){return s}});var e,a=t(7689),u=t(1087),c=t(168),i=t(6444).ZP.ul(e||(e=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 30px;\n"]))),o=t(184),s=function(n){var r=n.movies,t=(0,a.TH)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i,{children:r.map((function(n,r){var e=n.id,a=n.original_title;return(0,o.jsx)("li",{children:(0,o.jsxs)(u.rU,{to:"/movies/".concat(e),state:{from:t},children:[r+1,". ",a]})},e)}))})})}},5101:function(n,r,t){t.r(r),t.d(r,{default:function(){return g}});var e,a,u,c=t(9439),i=t(9484),o=t(2791),s=t(168),p=t(6444),f=p.ZP.form(e||(e=(0,s.Z)(["\n  padding: 5px 30px;\n"]))),d=p.ZP.input(a||(a=(0,s.Z)(["\n  font-size: 16px;\n  width: 300px;\n  height: 32px;\n  border-radius: 4px;\n"]))),l=p.ZP.button(u||(u=(0,s.Z)(["\n  display: inline-block;\n  font-size: 16px;\n  width: 120px;\n  height: 36px;\n  border-radius: 4px;\n  border-color: transparent;\n  background-color: #d3d3d3;\n  color: black;\n  cursor: pointer;\n  &:hover {\n    background-color: #fa8072;\n    color: white;\n  }\n"]))),h=t(184),v=function(n){var r=n.onSubmit,t=(0,o.useState)(""),e=(0,c.Z)(t,2),a=e[0],u=e[1];return(0,h.jsxs)(f,{onSubmit:function(n){n.preventDefault(),r(a),u("")},children:[(0,h.jsx)(d,{type:"text",name:"search",value:a,onChange:function(n){var r=n.target;return u(r.value)},placeholder:"Enter movie title",required:!0,autoFocus:!0}),(0,h.jsx)(l,{type:"submit",children:"Search"})]})},x=t(1087),m=t(8350),g=function(){var n=(0,x.lr)(),r=(0,c.Z)(n,2),t=r[0],e=r[1],a=(0,o.useState)([]),u=(0,c.Z)(a,2),s=u[0],p=u[1];(0,o.useEffect)((function(){var n=t.get("query");n&&(0,m.R$)(n).then((function(n){var r=n.results;return p(r)}))}),[t]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{onSubmit:function(n){e({query:n})}}),(0,h.jsx)(i.Z,{movies:s})]})}},8350:function(n,r,t){t.d(r,{Df:function(){return i},M1:function(){return p},R$:function(){return o},t2:function(){return s},tx:function(){return f}});var e=t(5861),a=t(4687),u=t.n(a),c=t(1243).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWIwNTdlMzc2MzJhMzE5YzZiZjI1ZGM5YjQzODM1MiIsInN1YiI6IjY0YTQzYjBkMTEzODZjMDExYzNiNmNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QEBANYEMuDbGQ9lrMDDAfxfmCJPA7p9-xGcIcjlQ8fk"),accept:"application/json"}}),i=function(){var n=(0,e.Z)(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day?language=en-US");case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?query=".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r,"/credits?language=en-US"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r,"/reviews?language=en-US&page=1"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=101.02ec8653.chunk.js.map