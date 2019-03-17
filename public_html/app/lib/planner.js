/**
 * PlannerFw Exec Library v3.1.0
 * This file is covered by the GNU GPLv3 license <http://www.gnu.org/licenses/gpl.html>
 * (c) Copyright 2015-2019 W3plan Technologies, https://www.w3plan.net/
 */
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(h){var m=0;return function(){return m<h.length?{done:!1,value:h[m++]}:{done:!0}}};$jscomp.arrayIterator=function(h){return{next:$jscomp.arrayIteratorImpl(h)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(h,m,r){h!=Array.prototype&&h!=Object.prototype&&(h[m]=r.value)};
$jscomp.getGlobal=function(h){return"undefined"!=typeof window&&window===h?h:"undefined"!=typeof global&&null!=global?global:h};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var h=0;return function(m){return $jscomp.SYMBOL_PREFIX+(m||"")+h++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var h=$jscomp.global.Symbol.iterator;h||(h=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[h]&&$jscomp.defineProperty(Array.prototype,h,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var h=$jscomp.global.Symbol.asyncIterator;h||(h=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(h){$jscomp.initSymbolIterator();h={next:h};h[$jscomp.global.Symbol.iterator]=function(){return this};return h};
$jscomp.iteratorFromArray=function(h,m){$jscomp.initSymbolIterator();h instanceof String&&(h+="");var r=0,p={next:function(){if(r<h.length){var u=r++;return{value:m(u,h[u]),done:!1}}p.next=function(){return{done:!0,value:void 0}};return p.next()}};p[Symbol.iterator]=function(){return p};return p};
$jscomp.polyfill=function(h,m,r,p){if(m){r=$jscomp.global;h=h.split(".");for(p=0;p<h.length-1;p++){var u=h[p];u in r||(r[u]={});r=r[u]}h=h[h.length-1];p=r[h];m=m(p);m!=p&&null!=m&&$jscomp.defineProperty(r,h,{configurable:!0,writable:!0,value:m})}};$jscomp.polyfill("Array.prototype.keys",function(h){return h?h:function(){return $jscomp.iteratorFromArray(this,function(h){return h})}},"es6","es3");
(function(){var h=function(){};h.outputMessage=function(a,d,e){e=e||"";"undefined"!=typeof pfConfig&&"production"==pfConfig.environment.toLowerCase()||3==a?"production"==pfConfig.environment.toLowerCase()&&2>a?h.logMessage(pfConfig.clientErrorLogger,a,d,e):h.consoleMessage(a,d,e):h.printMessage(a,d,e)};h.consoleMessage=function(a,d,e,h){h=h||"#000";var l=new Date;e=e?" - Line: "+e:"";3==a||"string"==typeof a&&"notice"==a.toLowerCase()?console.log("%c "+l.getHours()+":"+l.getMinutes()+":"+l.getSeconds()+
" - Notice:\n"+d+e,"color: "+h):2==a||"string"==typeof a&&"warning"==a.toLowerCase()?console.log("%c "+l.getHours()+":"+l.getMinutes()+":"+l.getSeconds()+" - Warning:\n"+d+e,"color: "+h):console.log("%c "+l.getHours()+":"+l.getMinutes()+":"+l.getSeconds()+" - Error:\n"+d+e,"color: "+h)};h.printMessage=function(a,d,e,h){h=h||"#ff0000";var l=new Date;e=e?" - Line: "+e:"";var t="";t=3==a||"string"==typeof a&&"notice"==a.toLowerCase()?l.getHours()+":"+l.getMinutes()+":"+l.getSeconds()+" - Notice:<br>"+
d+e:2==a||"string"==typeof a&&"warning"==a.toLowerCase()?l.getHours()+":"+l.getMinutes()+":"+l.getSeconds()+" - Warning:<br>"+d+e:l.getHours()+":"+l.getMinutes()+":"+l.getSeconds()+" - Error:<br>"+d+e;a=document.createElement("div");a.innerHTML='<div style="width:600px; padding:20px; margin:150px auto; word-wrap:break-word; background-color:#efefef; color:'+h+'">'+t+"</div>";a.style.cssText="text-align:center";document.getElementsByTagName("body")[0]?document.getElementsByTagName("body")[0].appendChild(a):
window.onload=function(){alert(t)}};h.logMessage=function(a,d,e,h){var l=new XMLHttpRequest;l.open("POST",a,!0);l.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");l.setRequestHeader("X-Requested-With","OtherXMLHttpRequest");l.onreadystatechange=function(){4==l.readyState&&200==l.status&&(window.location.href="/")};l.send("level="+d+"&msg="+e+"&line="+h)};var m=function(){};m.crc32=function(a,d){var e=-1;for(var h=0,l=a.length;h<l;h++){var t=(e^a.charCodeAt(h))&255;
t="0x"+"00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".substr(9*
t,8);e=e>>>8^t}a=(e^-1)>>>0;return d&&10==d?a:a.toString(16)};var r=function(){var a=0,d="",e=function(){return Date.now?Date.now():(new Date).getTime()},q=function(b,g,n,a,k){b=b.toLowerCase();n=n.toLowerCase();var d=g.substr(0,g.indexOf("?")),c=g.substr(g.indexOf("?")+1);d||(d=g,c="");var f=new XMLHttpRequest;"post"==n?(f.open("POST",d,!0),f.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8")):"put"==n?(f.open("PUT",d,!0),f.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8")):
"delete"==n?(f.open("DELETE",d,!0),f.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8")):(!k&&c?g=d+"?"+c+"&_="+e():k||c||(g=d+"?_="+e()),f.open("GET",g,!0));switch(b){case "json":f.setRequestHeader("X-Requested-With","ModelXMLHttpRequest");f.responseType="text";break;case "xml":f.setRequestHeader("X-Requested-With","XMLModelXMLHttpRequest");f.overrideMimeType("text/xml; charset=UTF-8");break;default:f.setRequestHeader("X-Requested-With","OtherXMLHttpRequest")}f.timeout=
a;"post"==n||"put"==n||"delete"==n?f.send(c):f.send();return f},l=function(b){return b.replace(/^(ftp:|ftps:|ws:|wss:|http:|https:)?\/\/((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?/i,"")},t=function(b,g){if(/^ptm=/.test(b)){g=g.replace(/^\//,"").replace(/#.*/,"").replace(/\/$/,"");var n=-1<g.indexOf("?")?"&ptm=/":"?ptm=/";b=l(b.replace(/^ptm=/,""));b="/"+g+n+b.replace(/^(\/tmpl\/|tmpl\/|\/)/i,"")}else/^tm=/.test(b)&&(b=l(b.replace(/^tm=/,"")),b="/tmpl/"+b.replace(/^(\/tmpl\/|tmpl\/|\/)/i,
""));return b},n=function(b){return/^(ftp:|ftps:|ws:|wss:|http:|https:)?\/\//i.test(b)&&(b=b.split("/")[2].toLowerCase(),b=b.split(":")[0],b!=window.location.hostname.toLowerCase())?!1:!0},v=function(){throw Error("Template can't be loaded, checking the template path");};this.normTemplatePath=function(b,g){return t(b,g)};this.responseJsonEncode=function(b){if("string"===typeof b)try{b=this.minimizeCode(b),b=JSON.parse(b)}catch(g){throw Error("Data isn't a JSON string, "+g.message);}if(b&&"object"===
typeof b&&0<Object.keys(b).length)return b;throw Error("Data isn't JSON");};this.checkModelData=function(b){if("undefined"===typeof b||!b||"undefined"===typeof b.pfDataSet)throw Error("Model is invalid");return!0};this.publicTemplatePath=function(b){b=l(b);return"/tmpl/"+b.replace(/^(\/tmpl\/|tmpl\/|\/)/i,"")};this.privateTemplatePath=function(b){var g=pfConfig.ptmHandler.replace(/^\//,"").replace(/#.*/,"").replace(/\/$/,""),n=-1<g.indexOf("?")?"&ptm=/":"?ptm=/";return"/"+g+n+b.replace(/^(\/tmpl\/|tmpl\/|\/)/i,
"")};this.loadTemplate=function(b,g,d){d=d||"";var a=!1;if(n(b)){if("undefined"===typeof pfConfig.cachedtmpath||pfConfig.cachedtmpath!==b){if("production"!==pfConfig.environment.toLowerCase()){var k=b.substr(0,b.indexOf("?")),h=b.substr(b.indexOf("?")+1);k||(k=b,h="");b=h?k+"?"+h+"&_="+e():k+"?_="+e()}pfConfig.tmready=!1;var c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=b;c.addEventListener("error",v);c.onerror=v;setTimeout(function(){if(!a)throw Error("Template request timeout");
},pfConfig.loadTemplateTimeout);c.readyState?c.onreadystatechange=function(){if("loaded"==c.readyState||"complete"==c.readyState)a=!0,c.onreadystatechange=null,g&&"function"===typeof g&&d?g(d):g&&"function"===typeof g&&"undefined"!==typeof pfConfig.mdready&&pfConfig.mdready?g(pfModel):(pfConfig.tmready=!0,pfConfig.cachedtmpath=b)}:c.onload=function(){a=!0;g&&"function"===typeof g&&d?g(d):g&&"function"===typeof g&&"undefined"!==typeof pfConfig.mdready&&pfConfig.mdready?g(pfModel):(pfConfig.tmready=
!0,pfConfig.cachedtmpath=b)};(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(c)}}else throw Error("Cross-origin template request blocked");};this.loadModel=function(b,g,d,a){d=d||"get";var k=!1;"production"==pfConfig.environment.toLowerCase()&&(k=!0);if(n(g)){pfConfig.mdready=!1;var e=q(b,g,d,pfConfig.loadModelTimeout,k);e.onreadystatechange=function(){if(4==e.readyState)if(200<=e.status&&300>e.status||-1!=[301,304,404].indexOf(e.status))if("xml"===
b.toLowerCase())if(e.responseXML){var c=planner.xml2Json(e.responseXML),k=Object.keys(c)[0];a&&"function"===typeof a&&"undefined"!==typeof pfConfig.tmready&&pfConfig.tmready?a(c[k]):(pfConfig.mdready=!0,window.pfModel=c[k])}else h.outputMessage(2,"Invalid request for XML");else c=planner.responseJsonEncode(e.responseText),a&&"function"===typeof a&&"undefined"!==typeof pfConfig.tmready&&pfConfig.tmready?a(c):(pfConfig.mdready=!0,window.pfModel=c);else throw Error("Failed to access the model");};e.onerror=
function(){throw Error("Error to access the model");};e.ontimeout=function(){console.log(e.status);throw Error("Model request timeout");}}else throw Error("Cross-origin model request blocked");};this.loadModelWs=function(b,g,d){if(n(g))if(window.WebSocket&&"function"===typeof window.WebSocket){pfConfig.mdready=!1;var a=new WebSocket(g);a.onmessage=function(k){if("xml"===b.toLowerCase())if(k.data){k=planner.string2Xml(k.data);k=planner.xml2Json(k);var g=Object.keys(k)[0];d&&"function"===typeof d&&
"undefined"!==typeof pfConfig.tmready&&pfConfig.tmready?d(k[g]):(pfConfig.mdready=!0,window.pfModel=k[g])}else h.outputMessage(2,"Invalid WebSocket request");else k=planner.responseJsonEncode(k.data),d&&"function"===typeof d&&"undefined"!==typeof pfConfig.tmready&&pfConfig.tmready?d(k):(pfConfig.mdready=!0,window.pfModel=k);a=null};a.ontimeout=function(b){a=null;h.outputMessage(2,"Timeout: "+b.data)};a.onerror=function(b){a=null;h.outputMessage(2,"Error: "+b.data)};a.onclose=function(b){a.close()}}else h.outputMessage(2,
"The browser does not support WebSocket");else throw Error("Cross-origin model request blocked");};this.setCookie=function(b,g,d,a){d=d||"";a=a||"/";document.cookie=b+"="+encodeURIComponent(g)+"; expires="+d+"; path="+a};this.getCookie=function(b){b+="=";for(var g=document.cookie.split(";"),d=0,a=g.length;d<a;d++){for(var k=g[d];" "==k.charAt(0);)k=k.substring(1,k.length);if(0===k.indexOf(b)){b=k.substring(b.length,k.length);try{return decodeURIComponent(b)}catch(w){return b}}}return null};this.deleteCookie=
function(b,g){document.cookie=b+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path="+(g||"/")};this.startMeter=function(){return new Date};this.getElapsedTime=function(b){return"Total elapsed time: "+(new Date-b)+" [milliseconds]"};this.getElapsedDetailTime=function(b){b="\nTotal elapsed time: "+(new Date-b)+"ms";var g=d.split(".");3===g.length&&(b="Check environment and parse the url: "+g[0]+"ms \nGet template and model ready: "+g[1]+"ms \nRender page: "+g[2]+"ms \n"+b);return b};this.updateTrackTime=
function(b,g){b?(b=new Date-b,g?(d+="."+(b-a),this.setCookie("pf_times",d)):d+=(d?".":"")+(b-a),a=b):(a=0,d="")};this.minimizeCode=function(b){return b.replace(/[\t\n\r]/g," ").replace(/\/\*((?!\*\/).)*\*\//g,"").replace(/ {2,}/g," ").replace(/> +</g,"><").replace(/\{ +/g,"{").replace(/ +\}/g,"}").trim()};this.isSameHost=function(b){var g=b.replace(/^\s*\/\//,"").replace(/^\s*(http|https|ftp|ftps|ws|wss):\/\//i,"");return b.length>g.length&&(b=window.location.hostname.toLowerCase(),-1===g.indexOf("/")&&
(g+="/"),g.substr(0,g.indexOf("/")).toLowerCase()!==b)?!1:!0};this.omitProtocol=function(b){var g=b.indexOf("://");-1!==g?b=b.substr(g+1):"/"!==b.substr(0,1)&&(b="/"+b);return b};this.parsePfUrl=function(b,g,d){d={template:"",model:"",type:"json",method:"get"};var a="",k="";-1!==b.indexOf("&md=")?(a=b.substr(b.indexOf("&md=")+4),k=b.substr(0,b.indexOf("&md="))):-1!==b.indexOf("&xmd=")&&(d.type="xml",a=b.substr(b.indexOf("&xmd=")+5),k=b.substr(0,b.indexOf("&xmd=")));a&&(-1!==a.toLowerCase().indexOf("method=get")?
a=a.replace(/\?method=get&/gi,"?").replace(/\?method=get/gi,"").replace(/&method=get/gi,""):-1!==a.toLowerCase().indexOf("method=post")?(d.method="post",a=a.replace(/\?method=post&/gi,"?").replace(/\?method=post/gi,"").replace(/&method=post/gi,"")):-1!==a.toLowerCase().indexOf("method=put")?(d.method="put",a=a.replace(/\?method=put&/gi,"?").replace(/\?method=put/gi,"").replace(/&method=put/gi,"")):-1!==a.toLowerCase().indexOf("method=delete")&&(d.method="delete",a=a.replace(/\?method=delete&/,"?").replace(/\?method=delete/,
"").replace(/&method=delete/,"")));d.model=a;k=t(k,g.ptmHandler);d.template=k?k:g.defaultTemplate;return d}},p=function(){var a=function(a,e){if(!a||!a.trim())return"";e=e||"";8>e.length&&(e="8q2EXsYBCDZcK3hajFFnyzdGRTbnrYbjYJzkbMFfRJFdvhPfBmpNVw2YkBZtM9kLW6MRAst7Vb3yh8KZwq2dTNuVdq8acHYeavBaPz3MPsBGpAP3zaCDvZUTvNGaWvpNwqwnQ9D8nZ8T4K9D8HRyQ2XTapaAeDSUfanvkCkRFzh4vSs3C9qBWxTwx9PUTTrAaL5PfgvQRWaCtCAZng3P8S9aEYEST79w2Ryu5Vs4etvKz4xdM8K7uCn2yFZ5C2MJ");var d=a.length;e=e.split("");for(var h=e.length,t=
"",n=0;n<d;n++){var v=a.charCodeAt(n)^e[n%h].charCodeAt(0);t+=String.fromCharCode(v)}return t};this.pfEncryption=function(d,e){e=e||"";try{var q=encodeURIComponent(d);q=a(q,e);q=window.btoa(q);return encodeURIComponent(q)}catch(l){h.outputMessage(2,"Encryption failed, "+l.message)}};this.pfDecryption=function(d,e){e=e||"";try{var q=decodeURIComponent(d);q=window.atob(q);q=a(q,e);return decodeURIComponent(q)}catch(l){h.outputMessage(2,"Decryption failed, "+l.message)}};this.crc32CheckSum=function(a,
e){return m.crc32(a,e)}},u=function(){var a="% cm in mm pc pt ch em ex gd px rem vh vw vm deg grad rad turn s ms hz khz vmin vmax".split(" "),d=function(a){a=a.trim();var d=a.replace("#",""),b=a.match(/^#[0-9a-f]+/i);return!b||a!=b[0]||3!==d.length&&6!==d.length?!1:!0},e={},q=function(a,d){d=d||"";for(var b in a)if("object"==typeof a[b]){var g=d;g=(g=g.trim())?g+" ":"";g+=b.trim();g=-1!==b.indexOf(",")?l(d,b.trim()):g.replace(/ +&|& +/g,"").trim();e[g]=e[g]||[];q(a[b],g)}else e[d][e[d].length]="  "+
b.trim()+": "+a[b].trim()+"\r\n"},l=function(a,d){return d.split(",").map(function(b){var d=" ";""===b.trim()&&(d="");return(a.trim()+d+b.trim()).replace(/ +&|& +/g,"")}).join(",")},t=function(a,d){return d.split(",").map(function(b){var d=" ";""===b.trim()&&(d="");return(b.trim()+d+a.trim()).replace(/ +&|& +/g,"")}).join(",")};this.prefixSelectors=function(a,d){return l(a,d)};this.suffixSelectors=function(a,d){return t(a,d)};this.parseNestedCss=function(a,d){d=d||{minified:!1};a=("{"+a+"}").replace(/\\\r\\\n|\\\r|\\\n/g,
" ").replace(/[\t\r\n]/g," ").replace(/"/g,"'").replace(/ {2,}/g," ").replace(/:([^:;\{}]+)}/g,":$1;}").replace(/:([^:;\{}]+);/g,':"$1;",').replace(/",([^",:\{}]+):"/g,'","$1":"').replace(/\{([^:",;\{}]+):"/g,'{"$1":"').replace(/}([^:",;\{}]+):"/g,'},"$1":"').replace(/;",([^;"\{}]+)\{/g,';","$1":{').replace(/}([^;"\{}]+)\{/g,'},"$1":{').replace(/\{([^;"\{}]+)\{/g,'{"$1":{').replace(/,( )*}/g,"}").replace(/\{([^;"\{}]+)\{/g,'{"$1":{');a=JSON.parse(a);e={};q(a);a="";for(b in e)e[b]!=[]&&e[b].join("")&&
(a+=b+" {\r\n",a+=e[b].join(""),a+="}\r\n\r\n");var b=a;d.minified&&(b=b.replace(/[\t\r\n]/g," ").replace(/\/\*((?!\*\/).)*\*\//g,"").replace(/ {2,}/g," ").replace(/{ +/g,"{").replace(/; }/g,";}"));return b.trim()};this.rgb2HexColor=function(a){var d=1;-1!==a.indexOf("%")&&(a=a.replace(/%/g,""),d=2.55);var b=a.match(/^(rgb|rgba)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*/i);if(b&&5===b.length){var g=parseInt(b[2]*d,10),e=parseInt(b[3]*d,10);d=parseInt(b[4]*d,10);if(256>g&&256>e&&256>d)return"#"+("0"+
g.toString(16)).slice(-2)+("0"+e.toString(16)).slice(-2)+("0"+d.toString(16)).slice(-2)}return a};this.hexColor2Rgb=function(a){if(d(a)){var e=a.replace("#","");3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var b=parseInt(e.substr(0,2),16),g=parseInt(e.substr(2,2),16);e=parseInt(e.substr(4,2),16);if(256>b&&256>g&&256>e)return"rgb("+b+", "+g+", "+e+")"}return a};this.hexColor2Rgba=function(a,e){if(d(a)){var b=a.replace("#","");3==b.length&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]);var g=parseInt(b.substr(0,
2),16),h=parseInt(b.substr(2,2),16);b=parseInt(b.substr(4,2),16);if(256>g&&256>h&&256>b&&0<=e&&1>=e)return"rgba("+g+", "+h+", "+b+", "+e+")"}return a};this.stripCssUnit=function(a){return a.toString().replace(/%|cm|in|mm|pc|pt|ch|em|ex|gd|px|rem|vh|vw|vm|deg|grad|rad|turn|s|ms|hz|khz|vmin|vmax| +|;/ig,"")};this.addCssUnit=function(d,e){e=e||"px";if(-1==a.indexOf(e))return h.outputMessage(2,"PFCSS can not process the unit"),d;d=+d;return 0===d%1?d+e:d.toFixed(6).replace(/^0+/,"").replace(/0+$/,"")+
e};this.prettyCss=function(a){return a.replace(/( *):( *)([^:;]+);( *)/g,": $3;\r\n  ").replace(/\{( *)/g,"{\r\n  ").replace(/( *)}( *)/g,"}\r\n").replace(/\*\/( *)/g,"*/\r\n")};this.tab2Space=function(a){return"string"==typeof a?a.replace(/\t/g,"  "):a}},y=function(){var a=function(b){return Number(b)===b&&0===b%1},d=function(b){return Number(b)===b&&0!==b%1},e=function(b){return"number"===typeof b&&!isNaN(b)},q=function(b){return"string"===typeof b&&!isNaN(b)&&b==+b},l=function(b){return q(b)&&
/e\+|-/gi.test(b)},t=function(b){return q(b)&&/^-?0x[0-9a-f]+$/i.test(b)},n=function(b){return q(b)&&/^-?0[0-7]+$/i.test(b)},v=function(b){for(var a in b)if(b.hasOwnProperty(a))return!1;return!0},b=function(b){return"string"===typeof b||b instanceof String},g=function(b){return"[object Object]"===Object.prototype.toString.call(b)},m=function(d,g,c){var f=[],k;for(k in d)"enumeration"==k?Array.isArray(d.enumeration)&&-1!==d.enumeration.indexOf(c)?f.push(1):f.push(0):"pattern"==k?b(c)&&"[object RegExp]"===
Object.prototype.toString.call(new RegExp(c))&&d.pattern.test(c)?f.push(1):f.push(0):"length"==k?a(c)&&c.length===d.length?f.push(1):f.push(0):"maxLength"==k?a(c)&&c.length<=d.maxLength?f.push(1):f.push(0):"minLength"==k?a(c)&&c.length>=d.minLength?f.push(1):f.push(0):"totalDigits"==k?e(c)&&c.toString().repalce(".","").length===d.totalDigits&&0<d.totalDigits?f.push(1):f.push(0):"fractionDigits"==k?e(c)&&c.toString().split(".")[1].length===d.fractionDigits?f.push(1):f.push(0):"minExclusive"==k?e(c)&&
c>d.minExclusive?f.push(1):f.push(0):"maxExclusive"==k?e(c)&&c<d.maxExclusive?f.push(1):f.push(0):"minInclusive"==k?e(c)&&c>=d.minInclusive?f.push(1):f.push(0):"maxInclusive"==k&&(e(c)&&c<=d.maxInclusive?f.push(1):f.push(0));if(0<f.length&&-1===f.indexOf(0))return!0;h.outputMessage(2,"The value "+c+" of member "+g+" againsts constraint "+JSON.stringify(d));return!1},p=function(k,w,c){var f=!1;switch(k){case "string":b(c)&&(f=!0);break;case "emptyString":b(c)&&!c&&(f=!0);break;case "numberString":q(c)&&
(f=!0);break;case "integerString":b(c)&&a(+c)&&(f=!0);break;case "floatString":b(c)&&d(+c)&&(f=!0);break;case "fractionString":/^[1-9][0-9]*\/[1-9][0-9]*$/.test(c)&&(f=!0);break;case "exponentString":l(c)&&(f=!0);break;case "asciiString":"string"===typeof c&&/^[\x00-\xFF]+$/.test(c)&&(f=!0);break;case "hexString":t(c)&&(f=!0);break;case "octalString":n(c)&&(f=!0);break;case "jsonString":try{JSON.parse(c)}catch(x){h.outputMessage(2,c+" againsts type "+k),f=!1}f=!0;break;case "normalizedString":q(c)&&
c.replace(/[\t\r\n]/g,"")==c&&(f=!0);break;case "regExpString":b(c)&&"[object RegExp]"===Object.prototype.toString.call(new RegExp(c))&&(f=!0);break;case "url":/^(ftp:|ftps:|ws:|wss:|http:|https:)?(\/\/)((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+=]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i.test(c)&&(f=!0);break;case "urlEncoded":encodeURIComponent(decodeURIComponent(c))===c&&(f=!0);break;case "email":/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/.test(c)&&
(f=!0);break;case "ipv4":/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(c)&&(f=!0);break;case "base64":try{window.atob(c)}catch(x){h.outputMessage(2,c+" against type "+k),f=!1}f=!0;break;case "uuid":/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/.test(c)&&(f=!0);break;case "unicodeString":"string"===typeof c&&/[^\u0000-\u10FFFF]+$/.test(c)&&(f=!0);break;case "country":-1!=="AF AX AL DZ AS AD AO AI AQ AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BQ BA BW BV BR IO BN BG BF BI KH CM CA CV KY CF TD CL CN CX CC CO KM CG CD CK CR CI HR CU CW CY CZ DK DJ DM DO EC EG SV GQ ER EE ET FK FO FJ FI FR GF PF TF GA GM GE DE GH GI GR GL GD GP GU GT GG GN GW GY HT HM VA HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR KW KG LA LV LB LS LR LY LI LT LU MO MK MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MP NO OM PK PW PS PA PG PY PE PH PN PL PT PR QA RE RO RU RW BL SH KN LC MF PM VC WS SM ST SA SN RS SC SL SG SX SK SI SB SO ZA GS SS ES LK SD SR SJ SZ SE CH SY TW TJ TZ TH TL TG TK TO TT TN TR TM TC TV UG UA AE GB US UM UY UZ VU VE VN VG VI WF EH YE ZM ZW".split(" ").indexOf(c.trim().toUpperCase())&&
(f=!0);break;case "language":/^[a-z]{2,3}(?:-[A-Z]{2,3}(?:-[a-zA-Z]{4})?)?$/.test(c)&&(f=!0);break;case "cssString":/^(?:\s*[\S ]+\s*{[^}]*})+/.test(c)&&(f=!0);break;case "hexColor":/^#([a-f0-9]{3}){1,2}$/i.test(c)&&(f=!0);break;case "rgbColor":/^rgb(a)?\(\d{1,3},\s?\d{1,3},\s?\d{1,3}\)$/i.test(c)&&(f=!0);break;case "cssRatio":/^[1-9][0-9]*\/[1-9][0-9]*$/.test(c)&&(f=!0);break;case "cssLength":!b(c)||-1==="ch em ex rem vh vw px mm cm in pt pc".split(" ").indexOf(c.trim().slice(-2).toLowerCase())&&
-1===["vmin","vmax"].indexOf(c.trim().slice(-4).toLowerCase())||(f=!0);break;case "cssAngle":!b(c)||-1===["deg","rad"].indexOf(c.trim().slice(-3).toLowerCase())&&-1===["grad","turn"].indexOf(c.trim().slice(-4).toLowerCase())||(f=!0);break;case "cssResolution":!b(c)||-1===["dpcm","dppx"].indexOf(c.trim().slice(-4).toLowerCase())&&"dpi"!==c.trim().slice(-3).toLowerCase()||(f=!0);break;case "cssFrequency":!b(c)||"hz"!==c.trim().slice(-2).toLowerCase()&&"khz"!==c.trim().slice(-3).toLowerCase()||(f=!0);
break;case "cssTime":!b(c)||"s"!==c.trim().slice(-1).toLowerCase()&&"ms"!==c.trim().slice(-2).toLowerCase()||(f=!0);break;case "cssPercentage":b(c)&&"%"===c.trim().slice(-1).toLowerCase()&&(f=!0);break;case "cssPosition":-1!==["static","relative","absolute","sticky","fixed"].indexOf(c.trim().toLowerCase())&&(f=!0);break;case "date":"string"===typeof c&&!isNaN(new Date(c))&&/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(c)&&(f=!0);break;case "time":b(c)&&/^([0-1][0-9]|2[0-4]):([0-5][0-9]):[0-5][0-9](.\d{3})?$/.test(c)&&
(f=!0);break;case "dateTime":b(c)&&/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-4]):([0-5][0-9]):[0-5][0-9](.\d{3})?$/.test(c)&&(f=!0);break;case "gYear":b(c)&&/^\d{4}$/.test(c)&&(f=!0);break;case "gMonth":b(c)&&/^--(0[1-9]|1[012])--$/.test(c)&&(f=!0);break;case "gDay":b(c)&&/^---(0[1-9]|[12][0-9]|3[01])$/.test(c)&&(f=!0);break;case "gYearMonth":b(c)&&/^\d{4}-(0[1-9]|1[012])$/.test(c)&&(f=!0);break;case "gMonthDay":b(c)&&/^--(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(c)&&
(f=!0);break;case "integer":a(c)&&(f=!0);break;case "float":d(c)&&(f=!0);break;case "exponent":e(c)&&/^e\+|-/i.test(c)&&(f=!0);break;case "zero":e(c)&&0===c&&(f=!0);break;case "positiveInteger":a(c)&&0<c&&(f=!0);break;case "nonNegativeInteger":a(c)&&0<=c&&(f=!0);break;case "negativeInteger":a(c)&&0>c&&(f=!0);break;case "nonPositiveInteger":a(c)&&0>=c&&(f=!0);break;case "positiveFloat":d(c)&&0<c&&(f=!0);break;case "nonNegativeFloat":d(c)&&0<=c&&(f=!0);break;case "negativeFloat":d(c)&&0>c&&(f=!0);break;
case "nonPositiveFloat":d(c)&&0>=c&&(f=!0);break;case "finiteNumber":isFinite(c)&&(f=!0);break;case "number":e(c)&&(f=!0);break;case "true":"boolean"===typeof c&&!0===c&&(f=!0);break;case "false":"boolean"===typeof c&&!1===c&&(f=!0);break;case "boolean":"boolean"===typeof c&&(f=!0);break;case "null":null===c&&(f=!0);break;case "emptyObject":v(c)&&(f=!0);break;case "serializeObject":g(c)&&(f=!0);break;case "emptyArray":Array.isArray(c)&&0===c.length&&(f=!0);break;case "stringArray":Array.isArray(c)&&
c.every(function(c){return b(c)})&&(f=!0);break;case "positiveIntegerArray":Array.isArray(c)&&c.every(function(b){return a(b)&&0<b})&&(f=!0);break;case "nonNegativeIntegerArray":Array.isArray(c)&&c.every(function(b){return a(b)&&0<=b})&&(f=!0);break;case "negativeIntegerArray":Array.isArray(c)&&c.every(function(b){return a(b)&&0>b})&&(f=!0);break;case "integerArray":Array.isArray(c)&&c.every(function(b){return a(b)})&&(f=!0);break;case "numberArray":Array.isArray(c)&&c.every(function(b){return e(b)})&&
(f=!0);break;case "array":Array.isArray(c)&&(f=!0)}if(f)return!0;h.outputMessage(2,"The value "+c+" of member "+w+" againsts type "+k);return!1};this.validatePfsdjs=function(a,d){d=d||{};for(var c in a)if(a.hasOwnProperty(c))if("_pfGlobal"===c&&g(a._pfGlobal)&&(d=a._pfGlobal),g(a[c]))this.validatePfsdjs(a[c],d);else if(Array.isArray(a[c]))for(var f=0,e=a[c].length;f<e;f++)if(g(a[c][f])||Array.isArray(a[c][f]))this.validatePfsdjs(a[c][f],d);else{if(a.hasOwnProperty(c+"_pfidx")){var h=null;a[c+"_pfidx"].hasOwnProperty("all")&&
"undefined"!==typeof a[c+"_pfidx"].all.type?h="all":a[c+"_pfidx"].hasOwnProperty(f)&&"undefined"!==typeof a[c+"_pfidx"][f].type&&(h=f);null!==h&&(p(a[c+"_pfidx"][h].type,f,a[c][f]),"undefined"!==typeof a[c+"_pfidx"][h].constraint&&m(a[c+"_pfidx"][h].constraint,f,a[c][f]))}}else a.hasOwnProperty(c+"_pfsch")&&b(a[c+"_pfsch"])&&""!==a[c+"_pfsch"]&&d.hasOwnProperty(c+"_"+a[c+"_pfsch"])&&"undefined"!==typeof d[c+"_"+a[c+"_pfsch"]].type?(p(d[c+"_"+a[c+"_pfsch"]].type,c,a[c]),"undefined"!==typeof d[c+"_"+
a[c+"_pfsch"]].constraint&&m(d[c+"_"+a[c+"_pfsch"]].constraint,c,a[c])):a.hasOwnProperty(c+"_pfsch")&&"undefined"!==typeof a[c+"_pfsch"].type?(p(a[c+"_pfsch"].type,c,a[c]),"undefined"!==typeof a[c+"_pfsch"].constraint&&m(a[c+"_pfsch"].constraint,c,a[c])):6<c.length&&"_pfsch"===c.slice(-6)&&"implied"===a[c].presence&&"undefined"!==typeof a[c].type&&!a.hasOwnProperty(c.slice(0,-6))&&(f="",e=null,a.hasOwnProperty(c.slice(0,-6)+"_default")?(f=c.slice(0,-6)+"_default",e=a[f]):a.hasOwnProperty(c.slice(0,
-6)+"_fixed")&&(f=c.slice(0,-6)+"_fixed",e=a[f]),null!==e&&(p(a[c].type,f,e),"undefined"!==typeof a[c].constraint&&m(a[c].constraint,f,e)))}},z=function(){var a=[],d={toString:function(){return"null"},valueOf:function(){return null}},e=function(a){return/^\s*$/.test(a)?null:/^(?:true|false)$/i.test(a)?"true"===a.toLowerCase():isFinite(a)?parseFloat(a):a},h=function(l,n,q){var b=a.length,g=l.hasChildNodes(),t=!!(n&2),v=0,k="",m=t?{}:"";var c=l.hasAttributes?l.hasAttributes():!1;if(g)for(var f,p=0;p<
l.childNodes.length;p++)f=l.childNodes.item(p),4===f.nodeType?k+=f.nodeValue:3===f.nodeType?k+=f.nodeValue.trim():1===f.nodeType&&a.push(f);p=a.length;f=e(k);t||!g&&!c||(m=0===n?null===f?d:f instanceof Object?f:new f.constructor(f):{});for(var r=b;r<p;r++){g=a[r].nodeName;var u=h(a[r],n,q);m.hasOwnProperty(g)?(m[g].constructor!==Array&&(m[g]=[m[g]]),m[g].push(u)):(m[g]=u,v++)}if(c){c=l.attributes?l.attributes.length:0;p=q?"":"_";g=q?{}:m;for(r=0;r<c;v++,r++)u=l.attributes.item(r),g[p+u.name]=e(u.value.trim());
q&&(m.keyAttrs=g,v-=c-1)}3===n||(2===n||1===n&&0<v)&&k?m.keyVal=f:!t&&0===v&&k&&(m=f);"object"===typeof m&&0===Object.getOwnPropertyNames(m).length&&(m="");"string"===typeof m&&"null"==m.toLowerCase()&&(m=null);a.length=b;return m},l=function(a,d,e){if(e.constructor===String||e.constructor===Number||e.constructor===Boolean){if(d.appendChild(a.createTextNode(e.toString())),e===e.valueOf())return}else e.constructor===Date&&d.appendChild(a.createTextNode(e.toGMTString()));for(var b in e)if(e.hasOwnProperty(b)){var g=
e[b];if(!(isFinite(b)||g instanceof Function))if("keyVal"===b)null!==g&&!0!==g&&d.appendChild(a.createTextNode(g.constructor===Date?g.toGMTString():String(g)));else if("keyAttrs"===b)for(var h in g)g.hasOwnProperty(h)&&d.setAttribute(h,g[h]);else if("_"===b.charAt(0))d.setAttribute(b.slice(1),g);else if(g.constructor===Array)for(var n=0;n<g.length;n++){var k=a.createElement(b);l(a,k,g[n]);d.appendChild(k)}else k=a.createElement(b),g instanceof Object?l(a,k,g):null!==g&&!0!==g&&k.appendChild(a.createTextNode(g.toString())),
d.appendChild(k)}};this.xml2Json=function(a,d,e){var b=1<arguments.length&&"number"===typeof d?d&3:1;return h(a,b,2<arguments.length?e:3===b)};this.json2Xml=function(a,d,e,b){d=document.implementation.createDocument(d||null,e||"",b||null);l(d,d,a);return d};this.string2Xml=function(a){return(new window.DOMParser).parseFromString(a,"application/xml")};this.xml2String=function(a){return"undefined"!==typeof a.xml?a.xml:(new XMLSerializer).serializeToString(a)}};this.planner=new function(a){r.apply(this,
arguments);p.apply(this,arguments);u.apply(this,arguments);y.apply(this,arguments);z.apply(this,arguments);this.TITLE="PlannerFw Exec Library v3.1.0";this.DESCRIPTION="PlannerFw Exec JavaScript Library, version 3.1.0";this.EDITION="Exec";this.VERSION=a;this.COPYRIGHT="Copyright 2015-"+(new Date).getFullYear()+" W3plan Technologies";window.name="PlannerFw Exec "+a;this.section=function(a,e){return""};this.checkEnvironment=function(){if(!window.JSON||"function"!==typeof window.JSON.parse)throw Error("Your browser doesn't support JSON");
if(!window.XMLHttpRequest)throw Error("Your browser doesn't support XMLHttpRequest");navigator.cookieEnabled||h.outputMessage(2,"Your browser doesn't support cookie")};this.errorHandler=function(a,e,m){h.outputMessage(a,e,m||"")}}("Version 3.1.0");Object.freeze&&Object.freeze(this.planner);String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});Array.prototype.indexOf||(Array.prototype.indexOf=function(a,d){void 0===d&&(d=0);0>d&&(d+=this.length);0>d&&(d=0);
for(var e=this.length;d<e;d++)if(d in this&&this[d]===a)return d;return-1});Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a,d){void 0===d&&(d=this.length-1);0>d&&(d+=this.length);d>this.length-1&&(d=this.length-1);for(d++;0<d--;)if(d in this&&this[d]===a)return d;return-1});Array.prototype.every||(Array.prototype.every=function(a,d){var e=this.length;d=d?d:void 0;for(var h=0;h<e;h++)if(!a.call(d,this[h],h,this))return!1;return!0});Array.prototype.map||(Array.prototype.map=function(a){for(var d=
[],e=0;e<this.length;e++)d.push(a(this[e],e,this));return d});Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});window.btoa||(window.btoa=function(a){var d=0,e=0,h=[];if(!a)return a;a+="";do{var l=a.charCodeAt(d++);var m=a.charCodeAt(d++);var n=a.charCodeAt(d++);var p=l<<16|m<<8|n;l=p>>18&63;m=p>>12&63;n=p>>6&63;p&=63;h[e++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m)+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p)}while(d<a.length);d=h.join("");a=a.length%3;return(a?d.slice(0,a-3):d)+"===".slice(a||3)});window.atob||(window.atob=function(a){var d=0,e=0,h=[];if(!a)return a;a+="";do{var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));var m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));
var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));var b=l<<18|m<<12|n<<6|p;l=b>>16&255;m=b>>8&255;b&=255;64==n?h[e++]=String.fromCharCode(l):64==p?h[e++]=String.fromCharCode(l,m):h[e++]=String.fromCharCode(l,m,b)}while(d<a.length);return h.join("").replace(/\0+$/,"")});window.console||(window.console={});window.console.log||(window.console.log=function(){})})();
