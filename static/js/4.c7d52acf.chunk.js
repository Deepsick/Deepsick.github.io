(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{48:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n="292dfb087089a0d1e06fb7645766b94b",r="a158772b33a2b5a08074d228e73c04e1e0967525fea9db31504a8df87902623a"},49:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"a",function(){return l}),a.d(t,"b",function(){return i});var n=a(48),r={method:"GET",headers:new Headers({"Content-Type":"application/json","trakt-api-key":n.b,"trakt-api-version":"2"})},l="https://api.trakt.tv/shows/",i="https://api.trakt.tv/search/show?query="},50:function(e,t,a){"use strict";var n=a(2),r={apiKeyTMDB:a(48).a,baseUrl:"https://api.themoviedb.org/3/tv/"},l="https://image.tmdb.org/t/p/",i="original";a.d(t,"a",function(){return o});var o=function(e,t){return function(a){var o=e.map(function(e){var t="".concat(r.baseUrl).concat(e.ids.tmdb||1,"/images?api_key=").concat(r.apiKeyTMDB);return fetch(t).then(function(e){return e.json()})});Promise.all(o).then(function(n){var r=e.map(function(e,t){if(n[t].posters&&0!==n[t].posters.length){var a=n[t].posters[0].file_path,r="".concat(l).concat(i,"/").concat(a);e.poster=r}return e});a(t(r))}).catch(function(e){a({type:n.e,errors:"Can not get posters from TMDB api"})})}}},51:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return c});var n=a(2),r=a(50),l=a(49),i=function(e){return{type:n.k,query:e}},o=function(){return{type:n.g}},s=function(e){return{type:n.h,result:e}},c=function(e){return function(t){t(o),fetch("".concat(l.b).concat(e),l.c).then(function(e){return e.json()}).then(function(e){e=e.map(function(e){return e.show}),t(Object(r.a)(e,s))}).catch(function(e){t({type:n.f}),t({type:n.e,errors:"Can not find anything"})})}}},52:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("form",{className:"SearchField",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{autoFocus:!0,className:"SearchField__input",type:"search",id:"search-input",placeholder:"Search show",value:e.value,onChange:e.onChangeHandler}),r.a.createElement("label",{htmlFor:"search-input"},r.a.createElement("span",{className:"visually-hidden"},"Search")))}},53:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",{className:"Spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}},54:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},59:function(e,t,a){"use strict";a.r(t);var n=a(5);function r(e,t){if(null==e)return{};var a,r,l=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var l=a(13),i=a(14),o=a(16),s=a(15),c=a(17),u=a(0),m=a.n(u),p=a(25),g=a(49),h=a(2),d=a(50),v=function(e){return{type:h.c,shows:e}},f=a(51),_=a(24),E=a(54),y=a.n(E),b=function(e){return m.a.createElement("li",{className:"Pagination__item"},m.a.createElement(_.b,{className:y()("Pagination__link",{"Pagination__link--active":e.page===e.currentPage}),to:1!==e.page?"/?page="+e.page:"/",onClick:function(){return e.onClick(e.page)}},e.page))},N=function(e){return m.a.createElement("form",{className:"ItemsForm"},m.a.createElement("ul",{className:"ItemsForm__list"},m.a.createElement("li",{className:"select-group  ItemsForm__item"},m.a.createElement("label",{className:"ItemsForm__label",htmlFor:"limit"},"Shows per page"),m.a.createElement("select",{onChange:e.onChangeNadler,className:"select-group__select  ItemsForm__select",id:"limit",name:"limit",value:e.value},m.a.createElement("option",{value:"5"},"5"),m.a.createElement("option",{value:"10"},"10"),m.a.createElement("option",{value:"20"},"20")))))},C=function(e){var t,a=e.pagination,n=a.amountOfPages,r=a.page,l=a.amountOfPaginationLinks;r<3&&(t=r+l),r>n-2&&(t=n+1),r>=3&&r<=n-2&&(t=r+3),t>n&&(t=n+1);var i=m.a.createElement("ul",{className:"Pagination"},m.a.createElement("li",{className:"Pagination__item  Pagination__item--form"},m.a.createElement(N,{value:e.value,onChangeNadler:e.onChangeNadler})),n>1?m.a.createElement(m.a.Fragment,null,m.a.createElement("li",{className:"Pagination__item"},m.a.createElement(_.b,{className:y()("Pagination__link  Pagination__link--nav  Pagination__link--start",{"Pagination__link--disabled":1===r}),to:"/?page=1",onClick:function(){return e.onClickHandler(1)}},m.a.createElement("span",{className:"visually-hidden"},"To the beginning"))),m.a.createElement("li",{className:"Pagination__item"},m.a.createElement(_.b,{className:y()("Pagination__link  Pagination__link--nav  Pagination__link--previous",{"Pagination__link--disabled":1===r}),to:"/?page="+(r-1),onClick:function(){return e.onClickHandler(r-1)}},m.a.createElement("span",{className:"visually-hidden"}," Previous page"))),new Array(l).fill(0).map(function(a){return--t>0?m.a.createElement(b,{key:t,page:t,currentPage:r,onClick:e.onClickHandler}):""}).reverse(),m.a.createElement("li",{className:"Pagination__item"},m.a.createElement(_.b,{className:y()("Pagination__link  Pagination__link--nav  Pagination__link--next",{"Pagination__link--disabled":r===n}),to:"/?page="+(r+1),onClick:function(){return e.onClickHandler(r+1)}},m.a.createElement("span",{className:"visually-hidden"}," Next page"))),m.a.createElement("li",{className:"Pagination__item"},m.a.createElement(_.b,{className:y()("Pagination__link  Pagination__link--nav  Pagination__link--end",{"Pagination__link--disabled":r===n}),to:"/?page="+n,onClick:function(){return e.onClickHandler(n)}},m.a.createElement("span",{className:"visually-hidden"},"To the end")))):"");return m.a.createElement(m.a.Fragment,null,i)},k=function(e){var t=(new Date).getFullYear()+1;return m.a.createElement("form",{className:"Filters"},m.a.createElement("ul",{className:"Filters__list"},m.a.createElement("li",{className:"select-group"},m.a.createElement("label",{htmlFor:"category"},"Category"),m.a.createElement("select",{className:"select-group__select",id:"category",name:"category",onChange:e.onFilterChangeHadnler,value:e.values.category},m.a.createElement("option",{value:"trending"},"trending"),m.a.createElement("option",{value:"popular"},"popular"),m.a.createElement("option",{value:"anticipated"},"anticipated"))),m.a.createElement("li",{className:"select-group"},m.a.createElement("label",{htmlFor:"ratings"},"Ratings"),m.a.createElement("select",{className:"select-group__select",id:"ratings",name:"ratings",onChange:e.onFilterChangeHadnler,value:e.values.ratings},m.a.createElement("option",{value:"0-100"},"all"),m.a.createElement("option",{value:"75-100"},"7.5 - 10"),m.a.createElement("option",{value:"50-74"},"5- 7.4"),m.a.createElement("option",{value:"0-50"},"less than 5"))),m.a.createElement("li",{className:"select-group"},m.a.createElement("label",{htmlFor:"years"},"Year"),m.a.createElement("select",{className:"select-group__select",id:"years",name:"years",onChange:e.onFilterChangeHadnler,value:e.values.years},m.a.createElement("option",{value:""},"all"),new Array(10).fill(0).map(function(e,a){return e=--t,m.a.createElement("option",{key:a,value:e},e)}))),m.a.createElement("li",{className:"select-group"},m.a.createElement("label",{htmlFor:"status"},"Status"),m.a.createElement("select",{className:"select-group__select",id:"status",name:"status",onChange:e.onFilterChangeHadnler,value:e.values.status},m.a.createElement("option",{value:""},"all"),m.a.createElement("option",{value:"returning series"},"returning series"),m.a.createElement("option",{value:"ended"},"ended"))),m.a.createElement("li",{className:"select-group"},m.a.createElement("label",{htmlFor:"genres"},"Genres"),m.a.createElement("select",{className:"select-group__select",id:"genres",name:"genres",onChange:e.onFilterChangeHadnler,value:e.values.genres},m.a.createElement("option",{value:""},"all"),m.a.createElement("option",{value:"action"},"action"),m.a.createElement("option",{value:"adventure"},"adventure"),m.a.createElement("option",{value:"animation"},"animation"),m.a.createElement("option",{value:"anime"},"anime"),m.a.createElement("option",{value:"crime"},"crime"),m.a.createElement("option",{value:"comedy"},"comedy"),m.a.createElement("option",{value:"documentary"},"documentary"),m.a.createElement("option",{value:"drama"},"drama"),m.a.createElement("option",{value:"family"},"family"),m.a.createElement("option",{value:"fantasy"},"fantasy"),m.a.createElement("option",{value:"history"},"history"),m.a.createElement("option",{value:"horror"},"horror"),m.a.createElement("option",{value:"musical"},"musical"),m.a.createElement("option",{value:"mystery"},"mystery"),m.a.createElement("option",{value:"romance"},"romance"),m.a.createElement("option",{value:"sports"},"sports"),m.a.createElement("option",{value:"thriller"},"thriller"),m.a.createElement("option",{value:"war"},"war")))))},P=function(){return m.a.createElement("thead",null,m.a.createElement("tr",{className:"Table__tr"},m.a.createElement("th",{className:"Table__th  Table__th--number"},"Number"),m.a.createElement("th",{className:"Table__th  Table__th--poster"},"Poster"),m.a.createElement("th",{className:"Table__th  Table__th--title"},"Title"),m.a.createElement("th",{className:"Table__th  Table__th--description"},"Description"),m.a.createElement("th",{className:"Table__th"},"episodes"),m.a.createElement("th",{className:"Table__th"},"Rating"),m.a.createElement("th",{className:"Table__th"},"Year"),m.a.createElement("th",{className:"Table__th  Table__th--genres"},"Genres"),m.a.createElement("th",{className:"Table__th Table__th--status"},"Status")))},w=function(e){var t=e.show,a=e.number,n=t.overview?t.overview.length>=100?t.overview.slice(0,100)+"...":t.overview:"There is no description for this show";return m.a.createElement("tr",{className:"Table__tr"},m.a.createElement("td",{className:"Table__td  Table__td--number"},a),m.a.createElement("td",{className:"Table__td"},m.a.createElement("a",{href:t.trailer,target:"_blank",rel:"noopener noreferrer"},m.a.createElement("img",{src:t.poster&&t.ids.tmdb?t.poster:"https://st.kp.yandex.net/images/movies/poster_none.png",alt:t.title,width:"200",height:"200"}))),m.a.createElement("td",{className:"Table__td"},t.title),m.a.createElement("td",{className:"Table__td  Table__td--description"},n),m.a.createElement("td",{className:"Table__td  Table__td--episodes"},t.aired_episodes),m.a.createElement("td",{className:"Table__td  Table__td--rating"},0===t.rating?"not rated yet":t.rating?t.rating.toFixed(2):""),m.a.createElement("td",{className:"Table__td"},t.year),m.a.createElement("td",{className:"Table__td  Table__td--genres"},t.genres?t.genres.join(", "):""),m.a.createElement("td",{className:"Table__td  Table__td--status"},t.status))},T=function(e){var t=m.a.createElement(m.a.Fragment,null,e.shows.map(function(e,t){return m.a.createElement(w,{key:t,number:t+1,show:e})}));return 0===e.shows.length&&(t=m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("p",{style:{position:"relative",left:"500px",width:"300px",paddingTop:"20px",fontSize:"16px"}},"No matches were found")))),m.a.createElement(m.a.Fragment,null,t)},F=function(e){return m.a.createElement("table",{className:"Table"},m.a.createElement(P,null),m.a.createElement("tbody",null,m.a.createElement(T,{shows:e.shows})))},S=a(52),j=a(53);a.d(t,"Sorting",function(){return H});var H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onFilterChangeHandler=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.props.setCurrentPage(1),a.props.setSortingFilters(n,encodeURIComponent(r))},a.onPaginationSelectChangeHandler=function(e){e.preventDefault();var t=e.target.value;a.props.setCurrentLimit(t)},a.onSearchInputChangeHandler=function(e){e.preventDefault();var t=e.target.value;a.props.setSearchQuery(t),a.props.history.push("/search?query=".concat(t))},a.onPageClickHandler=function(e){a.props.setCurrentPage(e)},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.setSearchQuery("");var e=this.props.location.search.split("&");if(1!==e.length){var t=!0,a=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(t=(l=i.next()).done);t=!0){var o=l.value.replace("?","").split("=");"page"===o[0]?this.props.setCurrentPage(encodeURIComponent(o[1])):"limit"===o[0]?this.props.setCurrentLimit(encodeURIComponent(o[1])):"category"===o[0]?this.props.setSortingFilters(o[0],encodeURIComponent(o[1])):this.props.setSortingFilters(o[0],decodeURIComponent(o[1]))}}catch(h){a=!0,n=h}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}}else{var s=this.props.pagination,c=s.page,u=s.itemsPerPage,m=this.props.sorting,p=m.category,g=r(m,["category"]);this.props.fetchShows(c,u,p,g)}}},{key:"componentWillReceiveProps",value:function(e){var t=e.pagination,a=t.page,n=t.itemsPerPage,l=t.amountOfPages,i=e.sorting,o=i.category,s=r(i,["category"]);if(n!==this.props.pagination.itemsPerPage||a!==this.props.pagination.page||o!==this.props.sorting.category||s.years!==this.props.sorting.years||s.ratings!==this.props.sorting.ratings||s.status!==this.props.sorting.status||s.genres!==this.props.sorting.genres){for(var c="",u=0,m=Object.keys(s);u<m.length;u++){var p=m[u];c+="&".concat(p,"=").concat(s[p])}this.props.history.replace("/?page=".concat(a,"&limit=").concat(n,"&category=").concat(o).concat(c)),this.props.fetchShows(a,n,o,s)}if(l&&l<a){this.props.setCurrentPage(l);for(var g="",h=0,d=Object.keys(s);h<d.length;h++){var v=d[h];g+="&".concat(v,"=").concat(s[v])}this.props.history.replace("/?page=".concat(l,"&limit=").concat(n,"&category=").concat(o).concat(g))}}},{key:"render",value:function(){var e=this.props.shows,t=e.shows,a=e.loading,n=m.a.createElement(m.a.Fragment,null,m.a.createElement(k,{onFilterChangeHadnler:this.onFilterChangeHandler,values:this.props.sorting}),m.a.createElement("div",{className:"flex-wrapper"},m.a.createElement(S.a,{onChangeHandler:this.onSearchInputChangeHandler,value:this.props.search.query}),m.a.createElement(C,{pagination:this.props.pagination,onClickHandler:this.onPageClickHandler,onChangeNadler:this.onPaginationSelectChangeHandler,value:this.props.pagination.itemsPerPage})),m.a.createElement(F,{shows:t}));return(a||null===t)&&(n=m.a.createElement(j.a,null)),m.a.createElement("div",null,n)}}]),t}(u.Component);t.default=Object(p.b)(function(e){return{shows:e.shows,pagination:e.pagination,sorting:e.sorting,search:e.search}},{fetchShows:function(e,t,a,n){return function(r){r({type:h.b});var l=Object.keys(n).map(function(e){return"".concat(e,"=").concat(n[e])}).join("&");l.length>0&&(l="&"+l);var i="".concat(g.a).concat(a,"?extended=full&page=").concat(e,"&limit=").concat(t).concat(l);fetch(i,g.c).then(function(e){var t,a=!0,n=!1,l=void 0;try{for(var i,o=e.headers.entries()[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var s=i.value;if("x-pagination-page-count"===s[0]){var c=s[1];r((t=c,{type:h.d,pagesAmount:+t}))}}}catch(u){n=!0,l=u}finally{try{a||null==o.return||o.return()}finally{if(n)throw l}}return e.json()}).then(function(e){"trending"!==a&&"anticipated"!==a||(e=Array.from(e).map(function(e){return e.show})),r(Object(d.a)(e,v))}).catch(function(e){r({type:h.a}),r({type:h.e,errors:"Can not get shows from track api"})})}},setCurrentPage:function(e){return{type:h.j,page:+e}},setCurrentLimit:function(e){return{type:h.i,limit:+e}},setSortingFilters:function(e,t){return{type:h.l,name:e,value:t}},setSearchQuery:f.b})(H)}}]);
//# sourceMappingURL=4.c7d52acf.chunk.js.map