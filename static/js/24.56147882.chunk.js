(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[24],{1115:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));n(2);var r=n(32),i=n(907),c=n(894),l=n(899),a=n(3),o=function(){var e,t=Object(r.j)().collectionId,n=Object(r.i)(),o=Object(l.a)("collectionItems",[t]),u=o.data,s=o.isLoading,d=(n.state||{}).title,v=void 0===d?null===u||void 0===u||null===(e=u.collection)||void 0===e?void 0:e.title:d;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.a,{title:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0430: ".concat(v)}),Object(a.jsx)(i.a,{title:v,items:null===u||void 0===u?void 0:u.items,loading:s})]})}},894:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(13),i=n(901),c=n(3),l=function(e){return Object(c.jsx)(i.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(13),i=n(60),c=n(2),l=n(55),a=n.n(l),o=n(59),u=n(108),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},i=t.onEnterViewport,l=t.onLeaveViewport,a=Object(c.useState)(),s=Object(o.a)(a,2),d=s[1],v=Object(c.useRef)(null),b=Object(c.useRef)(!1),f=Object(c.useRef)(!1),j=Object(c.useRef)(0),O=Object(c.useRef)(0),m=Object(c.useCallback)((function(){if(e.current&&v.current){var t=Object(u.findDOMNode)(e.current);t&&v.current.observe(t)}}),[e,v]),p=Object(c.useCallback)((function(){if(e.current&&v.current){var t=Object(u.findDOMNode)(e.current);t&&(v.current.unobserve(t),v.current.disconnect(),v.current=null)}}),[e,v]),h=Object(c.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,c=t.intersectionRatio,a="undefined"!==typeof n?n:c>0;if(!f.current&&a)return f.current=!0,null===i||void 0===i||i(),j.current+=1,b.current=a,void d(a);f.current&&!a&&(f.current=!1,null===l||void 0===l||l(),r.disconnectOnLeave&&v.current&&v.current.disconnect(),O.current+=1,b.current=a,d(a))}),[v,r.disconnectOnLeave,i,l]),x=Object(c.useCallback)((function(){v.current||(v.current=new IntersectionObserver(h,n))}),[v,n,h]);return Object(c.useEffect)((function(){return x(),m(),function(){p()}}),[x,m,p]),{inViewport:b.current,enterCount:j.current,leaveCount:O.current}},d=n(994);var v=function(e){var t=Object(d.a)();return Object(c.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},b=n(3),f=["children","className","onScrollToEnd"],j=Object(c.createContext)({}),O=function(e){var t=e.children,n=e.className,l=e.onScrollToEnd,o=Object(i.a)(e,f),u=Object(c.useRef)(null),d=v("scrollable"),O=Object(c.useMemo)((function(){return{id:d}}),[d]);return s(u,{onEnterViewport:l}),Object(b.jsxs)("div",Object(r.a)(Object(r.a)({className:a()("overflow-y-auto h-full",n)},o),{},{id:d,children:[Object(b.jsx)(j.Provider,{value:O,children:t}),l&&Object(b.jsx)("div",{className:"h-40",ref:u})]}))}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(13),i=n(60),c=n(55),l=n.n(c),a=n(253),o=n(3),u=["children","className"],s=function(e){var t=e.children,n=e.className,c=Object(i.a)(e,u);return t?Object(o.jsx)(a.a,Object(r.a)(Object(r.a)({},c),{},{className:l()("flex justify-between items-center mx-2 my-1 mb-3 min-h-9",n),as:"div",children:t})):null}},898:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(13),i=n(60),c=n(55),l=n.n(c),a=n(256),o=n(3),u=["className","wrapperClassName","source","caption","children"],s=function(e){var t=e.className,n=e.wrapperClassName,c=e.source,s=e.caption,d=e.children,v=Object(i.a)(e,u);return Object(o.jsxs)(a.a,Object(r.a)(Object(r.a)({},v),{},{className:l()("rounded-xl w-1/5 cursor-pointer",n),children:[Object(o.jsxs)("div",{className:l()("h-40 m-1 flex flex-col relative",t),children:[Object(o.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:c,alt:s}),d]}),s&&Object(o.jsx)("div",{className:"px-2",children:Object(o.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:s})})]}))}},899:function(e,t,n){"use strict";var r=n(107),i=n(2),c=n(933),l=n(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=Object(i.useMemo)((function(){return new l.c}),[]),o=Object(c.a)([e].concat(Object(r.a)(t)),(function(){return a[e].apply(a,Object(r.a)(t))}),n);return o}},900:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return a}));var r=n(252);function i(e,t,n){var i,c,l,a,o=(null===e||void 0===e||null===(i=e.videos)||void 0===i?void 0:i.find((function(e){var n=e.number,i=e.watching;return t?+t===+n:i.status!==r.b.Watched})))||(null===e||void 0===e||null===(c=e.videos)||void 0===c?void 0:c[0]),u=(null===e||void 0===e||null===(l=e.seasons)||void 0===l?void 0:l.find((function(e){var t=e.number,i=e.watching;return n?+n===+t:i.status!==r.b.Watched})))||(null===e||void 0===e||null===(a=e.seasons)||void 0===a?void 0:a[0]),s=(null===u||void 0===u?void 0:u.episodes.find((function(e){var n=e.number,i=e.watching;return t?+t===+n:i.status!==r.b.Watched})))||(null===u||void 0===u?void 0:u.episodes[0]);return[o||s,u]}function c(e,t,n){var r=(null===e||void 0===e?void 0:e.title)||"";return n?"".concat(r," (s").concat((null===t||void 0===t?void 0:t.snumber)||1,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function l(e,t,n){var r=(null===t||void 0===t?void 0:t.title)||"",i="s".concat((null===t||void 0===t?void 0:t.snumber)||1,"e").concat((null===t||void 0===t?void 0:t.number)||1);return n?r?"".concat(r," (").concat(i,")"):i:r}function a(e){return(null===e||void 0===e?void 0:e.quality)?2160===e.quality?"4k":1080===e.quality||720===e.quality?"hd":"sd":null}},902:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(925),i=n.n(r);function c(e){return i()(e)}},904:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r,i,c=n(27),l=n.n(c),a=n(50),o=n(59),u=n(2),s=n(32),d=n(55),v=n.n(d),b=n(252),f=n(254),j=n(898),O=n(259),m=n(255),p=n(6),h=["title","titleId"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function w(e,t){var n=e.title,c=e.titleId,l=g(e,h);return u.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":c},l),n?u.createElement("title",{id:c},n):null,r||(r=u.createElement("path",{d:"M436.714 26.001H75.287c-27.21 0-49.285 22.075-49.285 49.286v361.427c0 27.211 22.075 49.285 49.285 49.285h361.427c27.211 0 49.284-22.074 49.284-49.285V75.287c0-27.211-22.073-49.286-49.284-49.286z",fill:"#fbbf14"})),i||(i=u.createElement("path",{fill:"#273238",d:"M91.716 190.287h33.883v131.222H91.716zM241.831 321.509h-29.469v-88.714l-11.912 88.714H179.3l-12.528-86.763v86.763h-29.776V190.287h43.947c3.39 20.329 6.16 40.968 8.934 61.504l7.803-61.504h44.152v131.222zM330.544 236.8c0-8.317.31-17.25-1.438-25.055-4.414-23.102-32.24-21.458-50.311-21.458h-25.261v131.222c88.408.103 77.01 6.16 77.01-84.709zm-43.022 61.913v-85.94c12.219 0 10.576 6.47 10.576 16.428v50.622c.001 9.958 1.951 19.199-10.576 18.89zM395.949 223.656c-9.137 0-15.298 2.773-21.457 9.447v-42.816h-32.55v131.222h30.597l1.953-8.317c5.852 6.982 12.218 10.063 21.457 10.063 20.331 0 22.795-15.607 22.795-31.729v-36.963c0-17.763-.821-30.907-22.795-30.907zm-16.427 80.706c-1.642 0-3.081-.823-3.902-2.465-2.26-5.237-1.128-45.281-1.128-45.897 0-3.901-1.132-13.04 5.03-13.04 7.496 0 6.364 7.496 6.364 13.04v33.574c.001 5.546 1.644 14.788-6.364 14.788z"})))}var y,N=u.forwardRef(w),k=(n.p,["title","titleId"]);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function M(e,t){var n=e.title,r=e.titleId,i=I(e,k);return u.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"#ff6600",ref:t,"aria-labelledby":r},i),n?u.createElement("title",{id:r},n):null,y||(y=u.createElement("path",{d:"M15.518 10.736A8 8 0 11.482 5.264a8 8 0 0115.036 5.472zM8.94 8.342a1 1 0 10-1.88-.684 1 1 0 001.88.684zm-2.906 2.135A2 2 0 102.275 9.11a2 2 0 003.76 1.368zM8.086 4.84A2 2 0 104.328 3.47a2 2 0 003.758 1.368zm5.639 2.052a2 2 0 10-3.76-1.368 2 2 0 003.76 1.368zm-2.053 5.638a2 2 0 10-3.758-1.368 2 2 0 003.758 1.368z"})))}var E=u.forwardRef(M),z=(n.p,n(900)),S=n(902),R=n(3),P=function(e){var t=e.item,n=e.className,r=e.wrapperClassName,i=e.showViews,c=e.noCaption,d=e.disableNavigation,h=e.episodeId,x=e.seasonId,g=e.playOnClick,w=e.children,y=Object(s.h)(),k=Object(u.useState)(!1),C=Object(o.a)(k,2),I=C[0],M=C[1],P=Object(z.b)(t),V=Object(u.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),T=Object(u.useMemo)((function(){return i&&(null===t||void 0===t?void 0:t.views)&&Object(S.a)(null===t||void 0===t?void 0:t.views)||""}),[i,null===t||void 0===t?void 0:t.views]),_=Object(O.a)("itemMedia").itemMediaAsync,q=Object(u.useCallback)(Object(a.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===t||void 0===t?void 0:t.id)||d||!I){e.next=5;break}return e.next=3,_([t.id]);case 3:n=e.sent,y.push(Object(p.b)(p.a.Video,{itemId:null===n||void 0===n?void 0:n.item.id},h&&x?{episodeId:h,seasonId:x}:{}),{item:null===n||void 0===n?void 0:n.item});case 5:case"end":return e.stop()}}),e)}))),[null===t||void 0===t?void 0:t.id,d,h,x,I,y,_]),A=Object(u.useCallback)((function(){g?q():(null===t||void 0===t?void 0:t.id)&&!d&&y.push(Object(p.b)(p.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,d,g,q,y]);return Object(m.a)(["Play","Red"],q),Object(R.jsxs)(j.a,{onClick:A,onFocus:function(){return M(!0)},onBlur:function(){return M(!1)},source:null===t||void 0===t?void 0:t.posters.medium,caption:c?"":V,className:v()("h-72",n),wrapperClassName:r,children:[w,(null===t||void 0===t?void 0:t.new)&&Object(R.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new}),T&&Object(R.jsxs)("div",{className:"absolute top-2 right-2 h-6 pr-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:[Object(R.jsx)(f.a,{name:"visibility"}),T]}),x&&h&&Object(R.jsx)("div",{className:"absolute top-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:"s".concat(x,"e").concat(h)}),(P||(null===t||void 0===t?void 0:t.ac3)||(null===t||void 0===t?void 0:t.advert))&&Object(R.jsxs)("div",{className:"absolute top-2 left-2 h-6 bg-black bg-opacity-50 rounded flex items-center",children:[P&&Object(R.jsx)(f.a,{name:P}),(null===t||void 0===t?void 0:t.ac3)===b.a.True&&Object(R.jsx)(f.a,{name:"graphic_eq"}),(null===t||void 0===t?void 0:t.advert)&&Object(R.jsx)(f.a,{name:"report"})]}),((null===t||void 0===t?void 0:t.rating)>0||(null===t||void 0===t?void 0:t.imdb_rating)>0||(null===t||void 0===t?void 0:t.kinopoisk_rating)>0)&&Object(R.jsxs)("div",{className:"absolute bottom-2 left-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex justify-between items-center",children:[Object(R.jsxs)("div",{className:"flex items-center justify-start w-1/3",children:[Object(R.jsx)(N,{className:"h-3 w-3 mr-1"}),Object(R.jsx)("span",{children:((null===t||void 0===t?void 0:t.imdb_rating)||0).toFixed(1)})]}),Object(R.jsxs)("div",{className:"flex items-center justify-center w-1/3",children:[Object(R.jsx)(E,{className:"h-3 w-3 mr-1"}),Object(R.jsx)("span",{children:((null===t||void 0===t?void 0:t.kinopoisk_rating)||0).toFixed(1)})]}),Object(R.jsxs)("div",{className:"flex items-center justify-end w-1/3",children:[Object(R.jsx)(f.a,{name:"thumb_up"}),Object(R.jsxs)("span",{children:[(null===t||void 0===t?void 0:t.rating_percentage)||0,"%"]})]})]})]})}},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(107),i=(n(2),n(55)),c=n.n(i),l=n(198),a=n.n(l),o=n(895),u=n(897),s=n(904),d=n(3),v=function(e){var t=e.title,n=e.items,i=e.loading,l=e.onScrollToEnd,v=e.scrollable,b=void 0===v||v,f=e.className,j=e.titleClassName,O=Object(d.jsxs)("div",{children:[Object(d.jsx)(u.a,{className:j,children:t}),Object(d.jsxs)("div",{className:c()("flex flex-wrap",f),children:[a()(n,(function(e){return Object(d.jsx)(s.a,{item:e},e.id)})),i&&a()(Object(r.a)(new Array(15)),(function(e,t){return Object(d.jsx)(s.a,{},t)}))]})]});return b?Object(d.jsx)(o.a,{onScrollToEnd:l,children:O}):O}},933:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(929),i=n(5),c=n(903);function l(e,t,n){var l=Object(i.l)(e,t,n);return Object(c.a)(l,r.a)}}}]);
//# sourceMappingURL=24.56147882.chunk.js.map