"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{677:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(885),o=n(791),c={content:"MoviesView_content__ep1BM",movies__list:"MoviesView_movies__list__9Yf3M",SearchForm:"MoviesView_SearchForm__yQ-+S",SearchForm_button:"MoviesView_SearchForm_button__QMv98",SearchForm_input:"MoviesView_SearchForm_input__PY-8d"},a=n(324),i=n(501),u=n(871),s=n(184);function l(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],l=t[1],m=(0,o.useState)(null),h=(0,r.Z)(m,2),_=h[0],f=h[1],p=(0,i.lr)(),v=(0,r.Z)(p,2)[1],d=(0,u.TH)().search;return console.log(d),(0,o.useEffect)((function(){d&&(0,a.wF)(d.slice(7)).then((function(e){console.log(e.results),f(e.results)}))}),[d]),console.log(_),(0,s.jsxs)("div",{className:c.content,children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n.trim()?(v("query=".concat(n.trim().toLowerCase())),(0,a.wF)(n.trim().toLowerCase()).then(f)):console.log("Type your search query")},className:c.SearchForm,children:[(0,s.jsx)("input",{className:c.SearchForm_input,type:"text",name:"query",onChange:function(e){l(e.currentTarget.value)},value:n,autoComplete:"off",autoFocus:!0,placeholder:"Type your query"}),(0,s.jsx)("button",{type:"submit",className:c.SearchForm_button,children:(0,s.jsx)("label",{className:c.SearchForm_label,children:"Search"})})]}),_&&_.length>0&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{className:c.movies__list,children:_.map((function(e){var t=e.id,n=e.original_title;return n&&(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"/movies/".concat(t),children:n})},t)}))})})]})}},324:function(e,t,n){n.d(t,{Hg:function(){return m},TP:function(){return h},tx:function(){return f},wF:function(){return l},zv:function(){return _}});var r=n(861),o=n(757),c=n.n(o),a="https://api.themoviedb.org/3/",i="03b99d578651e9a3ce5c6cc1a058aad2";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(c().mark((function e(){var t,n,r,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:{},e.next=4,fetch(t,n);case 4:if(r=e.sent,console.log(r),!r.ok){e.next=12;break}return e.next=9,r.json();case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=Promise.reject(new Error("Not Found"));case 13:return e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(e){return u("".concat(a,"search/movie?api_key=").concat(i,"&query=").concat(e))}function m(){return u("".concat(a,"trending/all/day?api_key=").concat(i))}function h(e){return u("".concat(a,"movie/").concat(e,"?api_key=").concat(i))}function _(e){return u("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(i))}function f(e){return u("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(i))}}}]);
//# sourceMappingURL=677.01d418f4.chunk.js.map