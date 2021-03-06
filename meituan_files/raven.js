/*___meta___touch/module/raven.min.aaeb6c7e.js*/
!function(a,b){"use strict";function c(a,b){var c,d;b=b||{},a="raven"+a.substr(0,1).toUpperCase()+a.substr(1),document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent(a,!0,!0)):(c=document.createEventObject(),c.eventType=a);for(d in b)l(b,d)&&(c[d]=b[d]);if(document.createEvent)document.dispatchEvent(c);else try{document.fireEvent("on"+c.eventType.toLowerCase(),c)}catch(e){}}function d(a){this.name="RavenConfigError",this.message=a}function e(a){var b=Y.exec(a),c={},e=7;try{for(;e--;)c[X[e]]=b[e]||""}catch(f){throw new d("Invalid DSN: "+a)}if(c.pass)throw new d("Do not specify your private key in the DSN!");return c}function f(a){return void 0===a}function g(a){return"function"==typeof a}function h(a){return"[object String]"===R.toString.call(a)}function i(a){return"object"==typeof a&&null!==a}function j(a){for(var b in a)return!1;return!0}function k(a){return i(a)&&"[object Error]"===R.toString.call(a)||a instanceof Error}function l(a,b){return R.hasOwnProperty.call(a,b)}function m(a,b){var c,d;if(f(a.length))for(c in a)l(a,c)&&b.call(null,c,a[c]);else if(d=a.length)for(c=0;d>c;c++)b.call(null,c,a[c])}function n(a,b){var d=[];a.stack&&a.stack.length&&m(a.stack,function(a,b){var c=o(b);c&&d.push(c)}),c("handle",{stackInfo:a,options:b}),q(a.name,a.message,a.url,a.lineno,d,b)}function o(a){if(a.url){var b,c={filename:a.url,lineno:a.line,colno:a.column,"function":a.func||"?"},d=p(a);if(d){var e=["pre_context","context_line","post_context"];for(b=3;b--;)c[e[b]]=d[b]}return c.in_app=!(P.includePaths.test&&!P.includePaths.test(c.filename)||/(Raven|TraceKit)\./.test(c["function"])||/raven\.(min\.)?js$/.test(c.filename)),c}}function p(a){if(a.context&&P.fetchContext){for(var b=a.context,c=~~(b.length/2),d=b.length,e=!1;d--;)if(b[d].length>300){e=!0;break}if(e){if(f(a.column))return;return[[],b[c].substr(a.column,50),[]]}return[b.slice(0,c),b[c],b.slice(c+1)]}}function q(a,b,c,d,e,f){var g,h;P.ignoreErrors.test&&P.ignoreErrors.test(b)||(b+="",b=s(b,P.maxMessageLength),h=a+": "+b,h=s(h,P.maxMessageLength),e&&e.length?(c=e[0].filename||c,e.reverse(),g={frames:e}):c&&(g={frames:[{filename:c,lineno:d,in_app:!0}]}),P.ignoreUrls.test&&P.ignoreUrls.test(c)||(!P.whitelistUrls.test||P.whitelistUrls.test(c))&&v(r({exception:{type:a,value:b},stacktrace:g,culprit:c,message:h},f)))}function r(a,b){return b?(m(b,function(b,c){a[b]=c}),a):a}function s(a,b){return a.length<=b?a:a.substr(0,b)+"…"}function t(){return+new Date}function u(){if(document.location&&document.location.href){var a={headers:{"User-Agent":navigator.userAgent}};return a.url=document.location.href,document.referrer&&(a.headers.Referer=document.referrer),a}}function v(a){var b={project:M,logger:P.logger,platform:"javascript"},d=u();d&&(b.request=d),a=r(b,a),a.tags=r(r({},P.tags),a.tags),a.extra=r(r({},P.extra),a.extra),a.extra=r({"session:duration":t()-U},a.extra),j(a.tags)&&delete a.tags,K&&(a.user=K),P.release&&(a.release=P.release),g(P.dataCallback)&&(a=P.dataCallback(a)||a),a&&!j(a)&&(!g(P.shouldSendCallback)||P.shouldSendCallback(a))&&(I=a.event_id||(a.event_id=A()),B("debug","Raven about to send:",a),y()&&(P.transport||w)({url:J,auth:{sentry_version:"4",sentry_client:"raven-js/"+W.VERSION,sentry_key:L},data:a,options:P,onSuccess:function(){c("success",{data:a,src:J})},onError:function(){c("failure",{data:a,src:J})}}))}function w(a){a.auth.sentry_data=JSON.stringify(a.data);var b=x(),c=a.url+"?"+D(a.auth);(a.options.crossOrigin||""===a.options.crossOrigin)&&(b.crossOrigin=a.options.crossOrigin),b.onload=a.onSuccess,b.onerror=b.onabort=a.onError,b.src=c}function x(){return document.createElement("img")}function y(){return!!O&&(!!J||(Z||B("error","Error: Raven has not been configured."),Z=!0,!1))}function z(a){for(var b,c=[],d=0,e=a.length;e>d;d++)b=a[d],h(b)?c.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):b&&b.source&&c.push(b.source);return new RegExp(c.join("|"),"i")}function A(){var b=a.crypto||a.msCrypto;if(!f(b)&&b.getRandomValues){var c=new Uint16Array(8);b.getRandomValues(c),c[3]=4095&c[3]|16384,c[4]=16383&c[4]|32768;var d=function(a){for(var b=a.toString(16);b.length<4;)b="0"+b;return b};return d(c[0])+d(c[1])+d(c[2])+d(c[3])+d(c[4])+d(c[5])+d(c[6])+d(c[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})}function B(a){T[a]&&W.debug&&T[a].apply(S,F.call(arguments,1))}function C(){var b=a.RavenConfig;b&&W.config(b.dsn,b.config).install()}function D(a){var b=[];return m(a,function(a,c){b.push(encodeURIComponent(a)+"="+encodeURIComponent(c))}),b.join("&")}var E={remoteFetching:!1,collectWindowErrors:!0,linesOfContext:7,debug:!1},F=[].slice,G="?";E.wrap=function(a){function b(){try{return a.apply(this,arguments)}catch(b){throw E.report(b),b}}return b},E.report=function(){function c(a){h(),o.push(a)}function d(a){for(var b=o.length-1;b>=0;--b)o[b]===a&&o.splice(b,1)}function e(){i(),o=[]}function f(a,b){var c=null;if(!b||E.collectWindowErrors){for(var d in o)if(l(o,d))try{o[d].apply(null,[a].concat(F.call(arguments,2)))}catch(e){c=e}if(c)throw c}}function g(a,b,c,d,e){var g=null;if(r)E.computeStackTrace.augmentStackTraceWithInitialElement(r,b,c,a),j();else if(e)g=E.computeStackTrace(e),f(g,!0);else{var h={url:b,line:c,column:d};h.func=E.computeStackTrace.guessFunctionName(h.url,h.line),h.context=E.computeStackTrace.gatherContext(h.url,h.line),g={message:a,url:document.location.href,stack:[h]},f(g,!0)}return!!m&&m.apply(this,arguments)}function h(){n||(m=a.onerror,a.onerror=g,n=!0)}function i(){n&&(a.onerror=m,n=!1,m=b)}function j(){var a=r,b=p;p=null,r=null,q=null,f.apply(null,[a,!1].concat(b))}function k(b,c){var d=F.call(arguments,1);if(r){if(q===b)return;j()}var e=E.computeStackTrace(b);if(r=e,q=b,p=d,a.setTimeout(function(){q===b&&j()},e.incomplete?2e3:0),c!==!1)throw b}var m,n,o=[],p=null,q=null,r=null;return k.subscribe=c,k.unsubscribe=d,k.uninstall=e,k}(),E.computeStackTrace=function(){function b(b){if(!E.remoteFetching)return"";try{var c=function(){try{return new a.XMLHttpRequest}catch(b){return new a.ActiveXObject("Microsoft.XMLHTTP")}},d=c();return d.open("GET",b,!1),d.send(""),d.responseText}catch(e){return""}}function c(a){if(!h(a))return[];if(!l(t,a)){var c="",d="";try{d=document.domain}catch(e){}-1!==a.indexOf(d)&&(c=b(a)),t[a]=c?c.split("\n"):[]}return t[a]}function d(a,b){var d,e=/function ([^(]*)\(([^)]*)\)/,g=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,h="",i=10,j=c(a);if(!j.length)return G;for(var k=0;i>k;++k)if(h=j[b-k]+h,!f(h)){if(d=g.exec(h))return d[1];if(d=e.exec(h))return d[1]}return G}function e(a,b){var d=c(a);if(!d.length)return null;var e=[],g=Math.floor(E.linesOfContext/2),h=g+E.linesOfContext%2,i=Math.max(0,b-g-1),j=Math.min(d.length,b+h-1);b-=1;for(var k=i;j>k;++k)f(d[k])||e.push(d[k]);return e.length>0?e:null}function g(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function i(a){return g(a).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function j(a,b){for(var d,e,f=0,g=b.length;g>f;++f)if((d=c(b[f])).length&&(d=d.join("\n"),e=a.exec(d)))return{url:b[f],line:d.substring(0,e.index).split("\n").length,column:e.index-d.lastIndexOf("\n",e.index)-1};return null}function k(a,b,d){var e,f=c(b),h=new RegExp("\\b"+g(a)+"\\b");return d-=1,f&&f.length>d&&(e=h.exec(f[d]))?e.index:null}function m(b){for(var c,d,e,f,h=[a.location.href],k=document.getElementsByTagName("script"),l=""+b,m=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,n=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,o=0;o<k.length;++o){var p=k[o];p.src&&h.push(p.src)}if(e=m.exec(l)){var q=e[1]?"\\s+"+e[1]:"",r=e[2].split(",").join("\\s*,\\s*");c=g(e[3]).replace(/;$/,";?"),d=new RegExp("function"+q+"\\s*\\(\\s*"+r+"\\s*\\)\\s*{\\s*"+c+"\\s*}")}else d=new RegExp(g(l).replace(/\s+/g,"\\s+"));if(f=j(d,h))return f;if(e=n.exec(l)){var s=e[1];if(c=i(e[2]),d=new RegExp("on"+s+"=[\\'\"]\\s*"+c+"\\s*[\\'\"]","i"),f=j(d,h[0]))return f;if(d=new RegExp(c),f=j(d,h))return f}return null}function n(a){if(!f(a.stack)&&a.stack){for(var b,c,g=/^\s*at (.*?) ?\(?((?:(?:file|https?|chrome-extension):.*?)|<anonymous>):(\d+)(?::(\d+))?\)?\s*$/i,h=/^\s*(.*?)(?:\((.*?)\))?@((?:file|https?|chrome).*?):(\d+)(?::(\d+))?\s*$/i,i=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,j=a.stack.split("\n"),l=[],m=/^(.*) is undefined$/.exec(a.message),n=0,o=j.length;o>n;++n){if(b=h.exec(j[n]))c={url:b[3],func:b[1]||G,args:b[2]?b[2].split(","):"",line:+b[4],column:b[5]?+b[5]:null};else if(b=g.exec(j[n]))c={url:b[2],func:b[1]||G,line:+b[3],column:b[4]?+b[4]:null};else{if(!(b=i.exec(j[n])))continue;c={url:b[2],func:b[1]||G,line:+b[3],column:b[4]?+b[4]:null}}!c.func&&c.line&&(c.func=d(c.url,c.line)),c.line&&(c.context=e(c.url,c.line)),l.push(c)}return l.length?(l[0].line&&!l[0].column&&m?l[0].column=k(m[1],l[0].url,l[0].line):l[0].column||f(a.columnNumber)||(l[0].column=a.columnNumber+1),{name:a.name,message:a.message,url:document.location.href,stack:l}):null}}function o(a){var b=a.stacktrace;if(!f(a.stacktrace)&&a.stacktrace){for(var c,g=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,h=b.split("\n"),i=[],j=0,k=h.length;k>j;j+=2)if(c=g.exec(h[j])){var l={line:+c[1],column:+c[2],func:c[3]||c[4],args:c[5]?c[5].split(","):[],url:c[6]};if(!l.func&&l.line&&(l.func=d(l.url,l.line)),l.line)try{l.context=e(l.url,l.line)}catch(m){}l.context||(l.context=[h[j+1]]),i.push(l)}return i.length?{name:a.name,message:a.message,url:document.location.href,stack:i}:null}}function p(b){var f=b.message.split("\n");if(f.length<4)return null;var g,h,k,m,n=/^\s*Line (\d+) of linked script ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,o=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,p=/^\s*Line (\d+) of function script\s*$/i,q=[],r=document.getElementsByTagName("script"),s=[];for(h in r)l(r,h)&&!r[h].src&&s.push(r[h]);for(h=2,k=f.length;k>h;h+=2){var t=null;if(g=n.exec(f[h]))t={url:g[2],func:g[3],line:+g[1]};else if(g=o.exec(f[h])){t={url:g[3],func:g[4]};var u=+g[1],v=s[g[2]-1];if(v&&(m=c(t.url))){m=m.join("\n");var w=m.indexOf(v.innerText);w>=0&&(t.line=u+m.substring(0,w).split("\n").length)}}else if(g=p.exec(f[h])){var x=a.location.href.replace(/#.*$/,""),y=g[1],z=new RegExp(i(f[h+1]));m=j(z,[x]),t={url:x,line:m?m.line:y,func:""}}if(t){t.func||(t.func=d(t.url,t.line));var A=e(t.url,t.line),B=A?A[Math.floor(A.length/2)]:null;A&&B.replace(/^\s*/,"")===f[h+1].replace(/^\s*/,"")?t.context=A:t.context=[f[h+1]],q.push(t)}}return q.length?{name:b.name,message:f[0],url:document.location.href,stack:q}:null}function q(a,b,c,f){var g={url:b,line:c};if(g.url&&g.line){a.incomplete=!1,g.func||(g.func=d(g.url,g.line)),g.context||(g.context=e(g.url,g.line));var h=/ '([^']+)' /.exec(f);if(h&&(g.column=k(h[1],g.url,g.line)),a.stack.length>0&&a.stack[0].url===g.url){if(a.stack[0].line===g.line)return!1;if(!a.stack[0].line&&a.stack[0].func===g.func)return a.stack[0].line=g.line,a.stack[0].context=g.context,!1}return a.stack.unshift(g),a.partial=!0,!0}return a.incomplete=!0,!1}function r(a,b){for(var c,e,f,g=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,h=[],i={},j=!1,l=r.caller;l&&!j;l=l.caller)if(l!==s&&l!==E.report){if(e={url:null,func:G,line:null,column:null},l.name?e.func=l.name:(c=g.exec(l.toString()))&&(e.func=c[1]),"undefined"==typeof e.func)try{e.func=c.input.substring(0,c.input.indexOf("{"))}catch(n){}if(f=m(l)){e.url=f.url,e.line=f.line,e.func===G&&(e.func=d(e.url,e.line));var o=/ '([^']+)' /.exec(a.message||a.description);o&&(e.column=k(o[1],f.url,f.line))}i[""+l]?j=!0:i[""+l]=!0,h.push(e)}b&&h.splice(0,b);var p={name:a.name,message:a.message,url:document.location.href,stack:h};return q(p,a.sourceURL||a.fileName,a.line||a.lineNumber,a.message||a.description),p}function s(a,b){var c=null;b=null==b?0:+b;try{if(c=o(a))return c}catch(d){if(E.debug)throw d}try{if(c=n(a))return c}catch(d){if(E.debug)throw d}try{if(c=p(a))return c}catch(d){if(E.debug)throw d}try{if(c=r(a,b+1))return c}catch(d){if(E.debug)throw d}return{name:a.name,message:a.message,url:document.location.href}}var t={};return s.augmentStackTraceWithInitialElement=q,s.computeStackTraceFromStackProp=n,s.guessFunctionName=d,s.gatherContext=e,s}();var H,I,J,K,L,M,N=a.Raven,O=!("object"!=typeof JSON||!JSON.stringify),P={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],crossOrigin:"anonymous",collectWindowErrors:!0,tags:{},maxMessageLength:100,extra:{}},Q=!1,R=Object.prototype,S=a.console||{},T={},U=t();for(var V in S)T[V]=S[V];var W={VERSION:"1.1.22",debug:!0,noConflict:function(){return a.Raven=N,W},config:function(a,b){if(J)return B("error","Error: Raven has already been configured"),W;if(!a)return W;var c=e(a),d=c.path.lastIndexOf("/"),f=c.path.substr(1,d);return b&&m(b,function(a,b){P[a]=b}),P.ignoreErrors.push(/^Script error\.?$/),P.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),P.ignoreErrors=z(P.ignoreErrors),P.ignoreUrls=!!P.ignoreUrls.length&&z(P.ignoreUrls),P.whitelistUrls=!!P.whitelistUrls.length&&z(P.whitelistUrls),P.includePaths=z(P.includePaths),L=c.user,M=c.path.substr(d+1),J="//"+c.host+(c.port?":"+c.port:"")+"/"+f+"api/"+M+"/store/",c.protocol&&(J=c.protocol+":"+J),P.fetchContext&&(E.remoteFetching=!0),P.linesOfContext&&(E.linesOfContext=P.linesOfContext),E.collectWindowErrors=!!P.collectWindowErrors,W},install:function(){return y()&&!Q&&(E.report.subscribe(n),Q=!0),W},context:function(a,c,d){return g(a)&&(d=c||[],c=a,a=b),W.wrap(a,c).apply(this,d)},wrap:function(a,c){function d(){for(var b=[],d=arguments.length,e=!a||a&&a.deep!==!1;d--;)b[d]=e?W.wrap(a,arguments[d]):arguments[d];try{return c.apply(this,b)}catch(f){throw W.captureException(f,a),f}}if(f(c)&&!g(a))return a;if(g(a)&&(c=a,a=b),!g(c))return c;if(c.__raven__)return c;for(var e in c)l(c,e)&&(d[e]=c[e]);return d.__raven__=!0,d.__inner__=c,d},uninstall:function(){return E.report.uninstall(),Q=!1,W},captureException:function(a,b){if(!k(a))return W.captureMessage(a,b);H=a;try{var c=E.computeStackTrace(a);n(c,b)}catch(d){if(a!==d)throw d}return W},captureMessage:function(a,b){return P.ignoreErrors.test&&P.ignoreErrors.test(a)?void 0:(v(r({message:a+""},b)),W)},setUserContext:function(a){return K=a,W},setExtraContext:function(a){return P.extra=a||{},W},setTagsContext:function(a){return P.tags=a||{},W},setReleaseContext:function(a){return P.release=a,W},setDataCallback:function(a){return P.dataCallback=a,W},setShouldSendCallback:function(a){return P.shouldSendCallback=a,W},lastException:function(){return H},lastEventId:function(){return I},isSetup:function(){return y()}};W.setUser=W.setUserContext;var X="source protocol user pass host port path".split(" "),Y=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;d.prototype=new Error,d.prototype.constructor=d;var Z;C(),"function"==typeof define&&define.amd,"object"==typeof module?module.exports=W:"object"==typeof exports?exports=W:a.Raven=W}("undefined"!=typeof window?window:this),function(a,b){"use strict";var c=function(c){var d=a[c];a[c]=function(){var a=[].slice.call(arguments),c=a[0];return"function"==typeof c&&(a[0]=b.wrap(c)),d.apply?d.apply(this,a):d(a[0],a[1])}};c("setTimeout"),c("setInterval")}(window,window.Raven);