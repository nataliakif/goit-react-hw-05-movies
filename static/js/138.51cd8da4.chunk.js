"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[138],{138:function(e,a,i){i.r(a),i.d(a,{default:function(){return p}});var t=i(885),n=i(791),r=i(501),s=i(871),c=i(324),l={content:"MovieDetailsView_content__Ab6QV",film__card:"MovieDetailsView_film__card__wKG6R",film__title:"MovieDetailsView_film__title__oaX-8",info__wrapper:"MovieDetailsView_info__wrapper__DzQWi",image:"MovieDetailsView_image__K3pc6",image__wrapper:"MovieDetailsView_image__wrapper__PkuOg",params:"MovieDetailsView_params__+2FOJ",param:"MovieDetailsView_param__MC18E",param__title:"MovieDetailsView_param__title__bWmNf",param__value:"MovieDetailsView_param__value__MAbJK",param__value_votes:"MovieDetailsView_param__value_votes__+hru4",back_btn:"MovieDetailsView_back_btn__xD8YI"},o=i(184),_=(0,n.lazy)((function(){return i.e(233).then(i.bind(i,233))})),m=(0,n.lazy)((function(){return i.e(950).then(i.bind(i,950))}));function p(){var e=(0,s.UO)().movieId,a=(0,n.useState)(null),i=(0,t.Z)(a,2),p=i[0],u=i[1],d=(0,s.TH)().pathname,h=(0,s.s0)();return(0,n.useEffect)((function(){(0,c.TP)(e).then((function(e){console.log(e),u(e)}))}),[e]),(0,n.useEffect)((function(){return console.log("useEffect")}),[]),console.log(p),p&&(0,o.jsxs)("div",{className:l.content,children:[(0,o.jsx)("button",{className:l.back_btn,onClick:function(){var e=window.sessionStorage.getItem("prevRoute");h(null!==e&&void 0!==e?e:"/")},children:"\u2190 Go back"}),(0,o.jsxs)("div",{className:l.film__card,children:[(0,o.jsx)("div",{className:l.image__wrapper,children:(0,o.jsx)("img",{className:l.image,src:"https://image.tmdb.org/t/p/w500".concat(p.poster_path),alt:p.original_title,height:"531"})}),(0,o.jsxs)("div",{className:l.info__wrapper,children:[(0,o.jsx)("h2",{className:l.film__title,children:p.original_title}),(0,o.jsxs)("ul",{className:l.params,children:[(0,o.jsxs)("li",{className:l.param,children:[(0,o.jsx)("p",{className:l.param__title,children:"Vote / Votes"}),(0,o.jsx)("p",{className:l.param__value_votes,children:p.vote_average})]}),(0,o.jsxs)("li",{className:l.param,children:[(0,o.jsx)("p",{className:l.param__title,children:"Popularity"}),(0,o.jsx)("p",{className:l.param__value_votes,children:Math.round(p.popularity)})]}),(0,o.jsxs)("li",{className:l.param,children:[(0,o.jsx)("p",{className:l.param__title,children:"Original Title"}),(0,o.jsx)("p",{className:l.param__value,children:p.original_title})]}),(0,o.jsxs)("li",{className:l.param,children:[(0,o.jsx)("p",{className:l.param__title,children:"Genre"}),(0,o.jsx)("p",{className:l.param__value,children:p.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,o.jsx)("span",{className:l.film__owervier,children:"ABOUT"}),(0,o.jsx)("div",{className:l.film__owervier,children:(0,o.jsx)("p",{className:l.film__owerviertext,children:p.overview})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:l.param__title,children:"Additional information:"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:l.param,children:(0,o.jsx)(r.rU,{to:d.split("/").slice(0,3).join("/")+"/cast",children:"Cast"})}),(0,o.jsx)("li",{className:l.param,children:(0,o.jsx)(r.rU,{to:d.split("/").slice(0,3).join("/")+"/reviews",children:"Reviews"})})]})]})]})]}),(0,o.jsx)(n.Suspense,{fallback:(0,o.jsx)(o.Fragment,{children:"loading..."}),children:(0,o.jsxs)(s.Z5,{children:[(0,o.jsx)(s.AW,{path:"cast",element:(0,o.jsx)(_,{})}),(0,o.jsx)(s.AW,{path:"reviews",element:(0,o.jsx)(m,{})})]})})]})}},324:function(e,a,i){i.d(a,{Hg:function(){return m},TP:function(){return p},tx:function(){return d},wF:function(){return _},zv:function(){return u}});var t=i(861),n=i(757),r=i.n(n),s="https://api.themoviedb.org/3/",c="03b99d578651e9a3ce5c6cc1a058aad2";function l(){return o.apply(this,arguments)}function o(){return o=(0,t.Z)(r().mark((function e(){var a,i,t,n=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:"",i=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,fetch(a,i);case 4:if(t=e.sent,console.log(t),!t.ok){e.next=12;break}return e.next=9,t.json();case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=Promise.reject(new Error("Not Found"));case 13:return e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function _(e){return l("".concat(s,"search/movie?api_key=").concat(c,"&query=").concat(e))}function m(){return l("".concat(s,"trending/all/day?api_key=").concat(c))}function p(e){return l("".concat(s,"movie/").concat(e,"?api_key=").concat(c))}function u(e){return l("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(c))}function d(e){return l("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(c))}}}]);
//# sourceMappingURL=138.51cd8da4.chunk.js.map