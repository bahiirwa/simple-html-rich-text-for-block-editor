parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SP6V":[function(require,module,exports) {
    module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
    },{}],"DBsB":[function(require,module,exports) {
    var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
    },{"./_is-object":"SP6V"}],"e5TU":[function(require,module,exports) {
    module.exports=function(r){try{return!!r()}catch(t){return!0}};
    },{}],"ZJLI":[function(require,module,exports) {
    module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
    },{"./_fails":"e5TU"}],"kql1":[function(require,module,exports) {
    
    var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
    },{}],"dDni":[function(require,module,exports) {
    var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
    },{"./_is-object":"SP6V","./_global":"kql1"}],"UUWM":[function(require,module,exports) {
    module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
    },{"./_descriptors":"ZJLI","./_fails":"e5TU","./_dom-create":"dDni"}],"PUNq":[function(require,module,exports) {
    var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
    },{"./_is-object":"SP6V"}],"wvco":[function(require,module,exports) {
    var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(c){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
    },{"./_an-object":"DBsB","./_ie8-dom-define":"UUWM","./_to-primitive":"PUNq","./_descriptors":"ZJLI"}],"WtEG":[function(require,module,exports) {
    var r=require("./_object-dp").f,t=Function.prototype,e=/^\s*function ([^ (]*)/,n="name";n in t||require("./_descriptors")&&r(t,n,{configurable:!0,get:function(){try{return(""+this).match(e)[1]}catch(r){return""}}});
    },{"./_object-dp":"wvco","./_descriptors":"ZJLI"}],"KVo1":[function(require,module,exports) {
    var e=module.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e);
    },{}],"Nw1e":[function(require,module,exports) {
    module.exports=!1;
    },{}],"sTGr":[function(require,module,exports) {
    
    var r=require("./_core"),e=require("./_global"),o="__core-js_shared__",i=e[o]||(e[o]={});(module.exports=function(r,e){return i[r]||(i[r]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:require("./_library")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"});
    },{"./_core":"KVo1","./_global":"kql1","./_library":"Nw1e"}],"f0sk":[function(require,module,exports) {
    var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
    },{}],"MgdH":[function(require,module,exports) {
    var e=require("./_shared")("wks"),r=require("./_uid"),o=require("./_global").Symbol,u="function"==typeof o,i=module.exports=function(i){return e[i]||(e[i]=u&&o[i]||(u?o:r)("Symbol."+i))};i.store=e;
    },{"./_shared":"sTGr","./_uid":"f0sk","./_global":"kql1"}],"B9EI":[function(require,module,exports) {
    module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
    },{}],"i5RL":[function(require,module,exports) {
    var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
    },{"./_object-dp":"wvco","./_property-desc":"B9EI","./_descriptors":"ZJLI"}],"PxQA":[function(require,module,exports) {
    var e=require("./_wks")("unscopables"),r=Array.prototype;null==r[e]&&require("./_hide")(r,e,{}),module.exports=function(o){r[e][o]=!0};
    },{"./_wks":"MgdH","./_hide":"i5RL"}],"t4Zd":[function(require,module,exports) {
    module.exports=function(e,n){return{value:n,done:!!e}};
    },{}],"oANp":[function(require,module,exports) {
    module.exports={};
    },{}],"viv7":[function(require,module,exports) {
    var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
    },{}],"kZKK":[function(require,module,exports) {
    var e=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==e(r)?r.split(""):Object(r)};
    },{"./_cof":"viv7"}],"Zcur":[function(require,module,exports) {
    module.exports=function(o){if(null==o)throw TypeError("Can't call method on  "+o);return o};
    },{}],"mwRI":[function(require,module,exports) {
    var e=require("./_iobject"),r=require("./_defined");module.exports=function(i){return e(r(i))};
    },{"./_iobject":"kZKK","./_defined":"Zcur"}],"nW2g":[function(require,module,exports) {
    var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
    },{}],"l2hW":[function(require,module,exports) {
    
    var e=require("./_global"),r=require("./_hide"),t=require("./_has"),i=require("./_uid")("src"),n="toString",o=Function[n],u=(""+o).split(n);require("./_core").inspectSource=function(e){return o.call(e)},(module.exports=function(n,o,c,l){var a="function"==typeof c;a&&(t(c,"name")||r(c,"name",o)),n[o]!==c&&(a&&(t(c,i)||r(c,i,n[o]?""+n[o]:u.join(String(o)))),n===e?n[o]=c:l?n[o]?n[o]=c:r(n,o,c):(delete n[o],r(n,o,c)))})(Function.prototype,n,function(){return"function"==typeof this&&this[i]||o.call(this)});
    },{"./_global":"kql1","./_hide":"i5RL","./_has":"nW2g","./_uid":"f0sk","./_core":"KVo1"}],"L6p4":[function(require,module,exports) {
    module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
    },{}],"N9ch":[function(require,module,exports) {
    var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
    },{"./_a-function":"L6p4"}],"NjVL":[function(require,module,exports) {
    
    var e=require("./_global"),r=require("./_core"),o=require("./_hide"),i=require("./_redefine"),u=require("./_ctx"),n="prototype",t=function(c,f,l){var q,_,a,d,p=c&t.F,v=c&t.G,F=c&t.S,x=c&t.P,y=c&t.B,B=v?e:F?e[f]||(e[f]={}):(e[f]||{})[n],G=v?r:r[f]||(r[f]={}),P=G[n]||(G[n]={});for(q in v&&(l=f),l)a=((_=!p&&B&&void 0!==B[q])?B:l)[q],d=y&&_?u(a,e):x&&"function"==typeof a?u(Function.call,a):a,B&&i(B,q,a,c&t.U),G[q]!=a&&o(G,q,d),x&&P[q]!=a&&(P[q]=a)};e.core=r,t.F=1,t.G=2,t.S=4,t.P=8,t.B=16,t.W=32,t.U=64,t.R=128,module.exports=t;
    },{"./_global":"kql1","./_core":"KVo1","./_hide":"i5RL","./_redefine":"l2hW","./_ctx":"N9ch"}],"cHfm":[function(require,module,exports) {
    var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
    },{}],"HdKs":[function(require,module,exports) {
    var e=require("./_to-integer"),r=Math.min;module.exports=function(t){return t>0?r(e(t),9007199254740991):0};
    },{"./_to-integer":"cHfm"}],"AXg2":[function(require,module,exports) {
    var e=require("./_to-integer"),r=Math.max,t=Math.min;module.exports=function(n,a){return(n=e(n))<0?r(n+a,0):t(n,a)};
    },{"./_to-integer":"cHfm"}],"dIPJ":[function(require,module,exports) {
    var e=require("./_to-iobject"),r=require("./_to-length"),t=require("./_to-absolute-index");module.exports=function(n){return function(i,o,u){var f,l=e(i),a=r(l.length),c=t(u,a);if(n&&o!=o){for(;a>c;)if((f=l[c++])!=f)return!0}else for(;a>c;c++)if((n||c in l)&&l[c]===o)return n||c||0;return!n&&-1}};
    },{"./_to-iobject":"mwRI","./_to-length":"HdKs","./_to-absolute-index":"AXg2"}],"xSc0":[function(require,module,exports) {
    var e=require("./_shared")("keys"),r=require("./_uid");module.exports=function(u){return e[u]||(e[u]=r(u))};
    },{"./_shared":"sTGr","./_uid":"f0sk"}],"UrZ8":[function(require,module,exports) {
    var r=require("./_has"),e=require("./_to-iobject"),u=require("./_array-includes")(!1),i=require("./_shared-key")("IE_PROTO");module.exports=function(o,a){var n,s=e(o),t=0,h=[];for(n in s)n!=i&&r(s,n)&&h.push(n);for(;a.length>t;)r(s,n=a[t++])&&(~u(h,n)||h.push(n));return h};
    },{"./_has":"nW2g","./_to-iobject":"mwRI","./_array-includes":"dIPJ","./_shared-key":"xSc0"}],"t611":[function(require,module,exports) {
    module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },{}],"kfVX":[function(require,module,exports) {
    var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys");module.exports=Object.keys||function(u){return e(u,r)};
    },{"./_object-keys-internal":"UrZ8","./_enum-bug-keys":"t611"}],"Vixs":[function(require,module,exports) {
    var e=require("./_object-dp"),r=require("./_an-object"),t=require("./_object-keys");module.exports=require("./_descriptors")?Object.defineProperties:function(o,i){r(o);for(var u,c=t(i),n=c.length,s=0;n>s;)e.f(o,u=c[s++],i[u]);return o};
    },{"./_object-dp":"wvco","./_an-object":"DBsB","./_object-keys":"kfVX","./_descriptors":"ZJLI"}],"DBa9":[function(require,module,exports) {
    var e=require("./_global").document;module.exports=e&&e.documentElement;
    },{"./_global":"kql1"}],"d4Ek":[function(require,module,exports) {
    var e=require("./_an-object"),r=require("./_object-dps"),t=require("./_enum-bug-keys"),n=require("./_shared-key")("IE_PROTO"),o=function(){},i="prototype",u=function(){var e,r=require("./_dom-create")("iframe"),n=t.length;for(r.style.display="none",require("./_html").appendChild(r),r.src="javascript:",(e=r.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u[i][t[n]];return u()};module.exports=Object.create||function(t,c){var a;return null!==t?(o[i]=e(t),a=new o,o[i]=null,a[n]=t):a=u(),void 0===c?a:r(a,c)};
    },{"./_an-object":"DBsB","./_object-dps":"Vixs","./_enum-bug-keys":"t611","./_shared-key":"xSc0","./_dom-create":"dDni","./_html":"DBa9"}],"iqAm":[function(require,module,exports) {
    var e=require("./_object-dp").f,r=require("./_has"),o=require("./_wks")("toStringTag");module.exports=function(t,u,i){t&&!r(t=i?t:t.prototype,o)&&e(t,o,{configurable:!0,value:u})};
    },{"./_object-dp":"wvco","./_has":"nW2g","./_wks":"MgdH"}],"O1PE":[function(require,module,exports) {
    "use strict";var e=require("./_object-create"),r=require("./_property-desc"),t=require("./_set-to-string-tag"),i={};require("./_hide")(i,require("./_wks")("iterator"),function(){return this}),module.exports=function(o,u,s){o.prototype=e(i,{next:r(1,s)}),t(o,u+" Iterator")};
    },{"./_object-create":"d4Ek","./_property-desc":"B9EI","./_set-to-string-tag":"iqAm","./_hide":"i5RL","./_wks":"MgdH"}],"JfJ5":[function(require,module,exports) {
    var e=require("./_defined");module.exports=function(r){return Object(e(r))};
    },{"./_defined":"Zcur"}],"kbAb":[function(require,module,exports) {
    var t=require("./_has"),e=require("./_to-object"),o=require("./_shared-key")("IE_PROTO"),r=Object.prototype;module.exports=Object.getPrototypeOf||function(c){return c=e(c),t(c,o)?c[o]:"function"==typeof c.constructor&&c instanceof c.constructor?c.constructor.prototype:c instanceof Object?r:null};
    },{"./_has":"nW2g","./_to-object":"JfJ5","./_shared-key":"xSc0"}],"kgNZ":[function(require,module,exports) {
    "use strict";var e=require("./_library"),r=require("./_export"),t=require("./_redefine"),i=require("./_hide"),n=require("./_iterators"),u=require("./_iter-create"),o=require("./_set-to-string-tag"),s=require("./_object-gpo"),a=require("./_wks")("iterator"),c=!([].keys&&"next"in[].keys()),f="@@iterator",l="keys",q="values",y=function(){return this};module.exports=function(_,p,h,k,v,w,d){u(h,p,k);var x,b,g,j=function(e){if(!c&&e in I)return I[e];switch(e){case l:case q:return function(){return new h(this,e)}}return function(){return new h(this,e)}},m=p+" Iterator",A=v==q,F=!1,I=_.prototype,O=I[a]||I[f]||v&&I[v],P=O||j(v),z=v?A?j("entries"):P:void 0,B="Array"==p&&I.entries||O;if(B&&(g=s(B.call(new _)))!==Object.prototype&&g.next&&(o(g,m,!0),e||"function"==typeof g[a]||i(g,a,y)),A&&O&&O.name!==q&&(F=!0,P=function(){return O.call(this)}),e&&!d||!c&&!F&&I[a]||i(I,a,P),n[p]=P,n[m]=y,v)if(x={values:A?P:j(q),keys:w?P:j(l),entries:z},d)for(b in x)b in I||t(I,b,x[b]);else r(r.P+r.F*(c||F),p,x);return x};
    },{"./_library":"Nw1e","./_export":"NjVL","./_redefine":"l2hW","./_hide":"i5RL","./_iterators":"oANp","./_iter-create":"O1PE","./_set-to-string-tag":"iqAm","./_object-gpo":"kbAb","./_wks":"MgdH"}],"xsAw":[function(require,module,exports) {
    "use strict";var e=require("./_add-to-unscopables"),r=require("./_iter-step"),t=require("./_iterators"),i=require("./_to-iobject");module.exports=require("./_iter-define")(Array,"Array",function(e,r){this._t=i(e),this._i=0,this._k=r},function(){var e=this._t,t=this._k,i=this._i++;return!e||i>=e.length?(this._t=void 0,r(1)):r(0,"keys"==t?i:"values"==t?e[i]:[i,e[i]])},"values"),t.Arguments=t.Array,e("keys"),e("values"),e("entries");
    },{"./_add-to-unscopables":"PxQA","./_iter-step":"t4Zd","./_iterators":"oANp","./_to-iobject":"mwRI","./_iter-define":"kgNZ"}],"hFdU":[function(require,module,exports) {
    
    for(var e=require("./es6.array.iterator"),t=require("./_object-keys"),i=require("./_redefine"),r=require("./_global"),s=require("./_hide"),L=require("./_iterators"),a=require("./_wks"),o=a("iterator"),l=a("toStringTag"),S=L.Array,n={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},u=t(n),T=0;T<u.length;T++){var c,g=u[T],M=n[g],y=r[g],f=y&&y.prototype;if(f&&(f[o]||s(f,o,S),f[l]||s(f,l,g),L[g]=S,M))for(c in e)f[c]||i(f,c,e[c],!0)}
    },{"./es6.array.iterator":"xsAw","./_object-keys":"kfVX","./_redefine":"l2hW","./_global":"kql1","./_hide":"i5RL","./_iterators":"oANp","./_wks":"MgdH"}],"Focm":[function(require,module,exports) {
    "use strict";require("core-js/modules/es6.function.name"),require("core-js/modules/web.dom.iterable");var e=window.wp.element,t=e.createElement,a=e.Fragment,r=window.wp.richText,c=r.registerFormatType,i=r.toggleFormat,n=window.wp.editor,o=n.RichTextToolbarButton,l=n.RichTextShortcut;[{name:"sup",title:"Superscript",character:"7",icon:"arrow-up"},{name:"sub",title:"Subscript",character:"8",icon:"arrow-down"},{name:"small",title:"Small",character:"/",icon:"minus"},{name:"mark",title:"Marked",character:"=",icon:"tag"},{name:"ins",title:"Inserted",character:"+",icon:"yes"},{name:"del",title:"Deleted",character:"-",icon:"dismiss"},{name:"cite",title:"Cite",character:"2",icon:"sticky"}].forEach(function(e){var r=e.name,n=e.title,s=e.character,m=e.icon,u="advanced/".concat(r);c(u,{title:n,tagName:r,className:null,edit:function(e){var c=e.isActive,h=e.value,d=e.onChange,p=function(){return d(i(h,{type:u}))};return t(a,null,t(l,{type:"primary",character:s,onUse:p}),t(o,{title:n,onClick:p,isActive:c,shortcutType:"primary",shortcutCharacter:s,icon:m,className:"toolbar-button-with-text toolbar-button__advanced-".concat(r)}))}})});
    },{"core-js/modules/es6.function.name":"WtEG","core-js/modules/web.dom.iterable":"hFdU"}]},{},["Focm"], null)
    //# sourceMappingURL=/index.js.map