(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/9aa":function(e,t,n){var o=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){var o=n("dVn5"),r=n("fo6e"),a=n("dt0z"),i=n("9NmV");e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?r(e)?i(e):o(e):e.match(t)||[]}},"9NmV":function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+n+"]",r="\\d+",a="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+i+"|"+u+")",d="(?:"+c+"|"+u+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,f].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),x="(?:"+[a,l,f].join("|")+")"+m,v=RegExp([c+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,c,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,c+s,"$"].join("|")+")",c+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,x].join("|"),"g");e.exports=function(e){return e.match(v)||[]}},AP2z:function(e,t,n){var o=n("nmnc"),r=Object.prototype,a=r.hasOwnProperty,i=r.toString,u=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var o=!0}catch(l){}var r=i.call(e);return o&&(t?e[u]=n:delete e[u]),r}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},N1om:function(e,t,n){var o=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=o},NykK:function(e,t,n){var o=n("nmnc"),r=n("AP2z"),a=n("KfNM"),i=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?r(e):a(e)}},SqBY:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return E}));var o=n("q1tI"),r=n.n(o),a=n("Wbzz"),i=n("N1om"),u=n.n(i),l=n("qhky"),f=n("vOnD"),c=n("Kvkj"),s=n("g67X"),d=f.d.main.withConfig({displayName:"pensieve__StyledMainContainer",componentId:"sc-12u5sdp-0"})(["& > header{margin-bottom:100px;text-align:center;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",";width:100%;margin-top:20px;}"],(function(e){return e.theme.mixins.flexBetween})),p=f.d.div.withConfig({displayName:"pensieve__StyledGrid",componentId:"sc-12u5sdp-1"})(["margin-top:50px;.posts{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}}"]),m=f.d.div.withConfig({displayName:"pensieve__StyledPostInner",componentId:"sc-12u5sdp-2"})(["",";",";flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);transition:var(--transition);background-color:var(--light-navy);header,a{width:100%;}"],(function(e){return e.theme.mixins.boxShadow}),(function(e){return e.theme.mixins.flexBetween})),x=f.d.div.withConfig({displayName:"pensieve__StyledPost",componentId:"sc-12u5sdp-3"})(["transition:var(--transition);cursor:default;&:hover,&:focus{outline:0;","{transform:translateY(-5px);}}"],m),v=f.d.div.withConfig({displayName:"pensieve__StyledPostHeader",componentId:"sc-12u5sdp-4"})(["",";margin-bottom:30px;"],(function(e){return e.theme.mixins.flexBetween})),g=f.d.div.withConfig({displayName:"pensieve__StyledFolder",componentId:"sc-12u5sdp-5"})(["color:var(--green);svg{width:40px;height:40px;}"]),h=f.d.h5.withConfig({displayName:"pensieve__StyledPostName",componentId:"sc-12u5sdp-6"})(["margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);"]),y=f.d.div.withConfig({displayName:"pensieve__StyledPostDescription",componentId:"sc-12u5sdp-7"})(["color:var(--light-slate);font-size:17px;"]),w=f.d.span.withConfig({displayName:"pensieve__StyledDate",componentId:"sc-12u5sdp-8"})(["color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);text-transform:uppercase;"]),b=f.d.ul.withConfig({displayName:"pensieve__StyledTags",componentId:"sc-12u5sdp-9"})(["display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}"]);t.default=function(e){var t=e.location,n=e.data.allMarkdownRemark.edges;return r.a.createElement(c.i,{location:t},r.a.createElement(l.a,{title:"Pensieve"}),r.a.createElement(d,null,r.a.createElement("header",null,r.a.createElement("h1",{className:"big-heading"},"Pensieve"),r.a.createElement("p",{className:"subtitle"},r.a.createElement("a",{href:"https://www.wizardingworld.com/writing-by-jk-rowling/pensieve"},"a collection of memories"))),r.a.createElement(p,null,r.a.createElement("div",{className:"posts"},n.length>0&&n.map((function(e,t){var n=e.node.frontmatter,o=n.title,i=n.description,l=n.slug,f=n.date,c=n.tags,d=new Date(f);return r.a.createElement(x,{key:t,tabIndex:"0"},r.a.createElement(m,null,r.a.createElement("header",null,r.a.createElement(a.Link,{to:l},r.a.createElement(v,null,r.a.createElement(g,null,r.a.createElement(s.p,null))),r.a.createElement(h,null,o),r.a.createElement(y,null,i))),r.a.createElement("footer",null,r.a.createElement(w,null,""+d.toLocaleDateString()),r.a.createElement(b,null,c.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(a.Link,{to:"/pensieve/tags/"+u()(e)+"/",className:"inline-link"},"#",e))}))))))}))))))};var E="1490430893"},TKrE:function(e,t,n){var o=n("qRkn"),r=n("dt0z"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(a,o).replace(i,"")}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},asDA:function(e,t){e.exports=function(e,t,n,o){var r=-1,a=null==e?0:e.length;for(o&&a&&(n=e[++r]);++r<a;)n=t(n,e[r],r,e);return n}},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,n){var o=n("zoYe");e.exports=function(e){return null==e?"":o(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},nmnc:function(e,t,n){var o=n("Kz5y").Symbol;e.exports=o},qRkn:function(e,t,n){var o=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=o},sgoq:function(e,t,n){var o=n("asDA"),r=n("TKrE"),a=n("6nK8"),i=RegExp("['’]","g");e.exports=function(e){return function(t){return o(a(r(t).replace(i,"")),e,"")}}},zoYe:function(e,t,n){var o=n("nmnc"),r=n("eUgh"),a=n("Z0cm"),i=n("/9aa"),u=o?o.prototype:void 0,l=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(i(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-pages-pensieve-index-js-2d58e2aedd81c0884bd0.js.map