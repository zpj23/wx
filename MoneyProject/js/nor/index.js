var swfobject = function () { var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function () { var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D, ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah), af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, X = !+"\v1", ag = [0, 0, 0], ab = null; if (typeof t.plugins != D && typeof t.plugins[S] == r) { ab = t.plugins[S].description; if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) { T = true; X = false; ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1"); ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10); ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10); ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0 } } else { if (typeof O.ActiveXObject != D) { try { var ad = new ActiveXObject(W); if (ad) { ab = ad.GetVariable("$version"); if (ab) { X = true; ab = ab.split(" ")[1].split(","); ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)] } } } catch (Z) { } } } return { w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac } }(), k = function () { if (!M.w3) { return } if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) { f() } if (!J) { if (typeof j.addEventListener != D) { j.addEventListener("DOMContentLoaded", f, false) } if (M.ie && M.win) { j.attachEvent(x, function () { if (j.readyState == "complete") { j.detachEvent(x, arguments.callee); f() } }); if (O == top) { (function () { if (J) { return } try { j.documentElement.doScroll("left") } catch (X) { setTimeout(arguments.callee, 0); return } f() })() } } if (M.wk) { (function () { if (J) { return } if (!/loaded|complete/.test(j.readyState)) { setTimeout(arguments.callee, 0); return } f() })() } s(f) } }(); function f() { if (J) { return } try { var Z = j.getElementsByTagName("body")[0].appendChild(C("span")); Z.parentNode.removeChild(Z) } catch (aa) { return } J = true; var X = U.length; for (var Y = 0; Y < X; Y++) { U[Y]() } } function K(X) { if (J) { X() } else { U[U.length] = X } } function s(Y) { if (typeof O.addEventListener != D) { O.addEventListener("load", Y, false) } else { if (typeof j.addEventListener != D) { j.addEventListener("load", Y, false) } else { if (typeof O.attachEvent != D) { i(O, "onload", Y) } else { if (typeof O.onload == "function") { var X = O.onload; O.onload = function () { X(); Y() } } else { O.onload = Y } } } } } function h() { if (T) { V() } else { H() } } function V() { var X = j.getElementsByTagName("body")[0]; var aa = C(r); aa.setAttribute("type", q); var Z = X.appendChild(aa); if (Z) { var Y = 0; (function () { if (typeof Z.GetVariable != D) { var ab = Z.GetVariable("$version"); if (ab) { ab = ab.split(" ")[1].split(","); M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)] } } else { if (Y < 10) { Y++; setTimeout(arguments.callee, 10); return } } X.removeChild(aa); Z = null; H() })() } else { H() } } function H() { var ag = o.length; if (ag > 0) { for (var af = 0; af < ag; af++) { var Y = o[af].id; var ab = o[af].callbackFn; var aa = { success: false, id: Y }; if (M.pv[0] > 0) { var ae = c(Y); if (ae) { if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) { w(Y, true); if (ab) { aa.success = true; aa.ref = z(Y); ab(aa) } } else { if (o[af].expressInstall && A()) { var ai = {}; ai.data = o[af].expressInstall; ai.width = ae.getAttribute("width") || "0"; ai.height = ae.getAttribute("height") || "0"; if (ae.getAttribute("class")) { ai.styleclass = ae.getAttribute("class") } if (ae.getAttribute("align")) { ai.align = ae.getAttribute("align") } var ah = {}; var X = ae.getElementsByTagName("param"); var ac = X.length; for (var ad = 0; ad < ac; ad++) { if (X[ad].getAttribute("name").toLowerCase() != "movie") { ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value") } } P(ai, ah, Y, ab) } else { p(ae); if (ab) { ab(aa) } } } } } else { w(Y, true); if (ab) { var Z = z(Y); if (Z && typeof Z.SetVariable != D) { aa.success = true; aa.ref = Z } ab(aa) } } } } } function z(aa) { var X = null; var Y = c(aa); if (Y && Y.nodeName == "OBJECT") { if (typeof Y.SetVariable != D) { X = Y } else { var Z = Y.getElementsByTagName(r)[0]; if (Z) { X = Z } } } return X } function A() { return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312) } function P(aa, ab, X, Z) { a = true; E = Z || null; B = { success: false, id: X }; var ae = c(X); if (ae) { if (ae.nodeName == "OBJECT") { l = g(ae); Q = null } else { l = ae; Q = X } aa.id = R; if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) { aa.width = "310" } if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) { aa.height = "137" } j.title = j.title.slice(0, 47) + " - Flash Player Installation"; var ad = M.ie && M.win ? "ActiveX" : "PlugIn", ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title; if (typeof ab.flashvars != D) { ab.flashvars += "&" + ac } else { ab.flashvars = ac } if (M.ie && M.win && ae.readyState != 4) { var Y = C("div"); X += "SWFObjectNew"; Y.setAttribute("id", X); ae.parentNode.insertBefore(Y, ae); ae.style.display = "none"; (function () { if (ae.readyState == 4) { ae.parentNode.removeChild(ae) } else { setTimeout(arguments.callee, 10) } })() } u(aa, ab, X) } } function p(Y) { if (M.ie && M.win && Y.readyState != 4) { var X = C("div"); Y.parentNode.insertBefore(X, Y); X.parentNode.replaceChild(g(Y), X); Y.style.display = "none"; (function () { if (Y.readyState == 4) { Y.parentNode.removeChild(Y) } else { setTimeout(arguments.callee, 10) } })() } else { Y.parentNode.replaceChild(g(Y), Y) } } function g(ab) { var aa = C("div"); if (M.win && M.ie) { aa.innerHTML = ab.innerHTML } else { var Y = ab.getElementsByTagName(r)[0]; if (Y) { var ad = Y.childNodes; if (ad) { var X = ad.length; for (var Z = 0; Z < X; Z++) { if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) { aa.appendChild(ad[Z].cloneNode(true)) } } } } } return aa } function u(ai, ag, Y) { var X, aa = c(Y); if (M.wk && M.wk < 312) { return X } if (aa) { if (typeof ai.id == D) { ai.id = Y } if (M.ie && M.win) { var ah = ""; for (var ae in ai) { if (ai[ae] != Object.prototype[ae]) { if (ae.toLowerCase() == "data") { ag.movie = ai[ae] } else { if (ae.toLowerCase() == "styleclass") { ah += ' class="' + ai[ae] + '"' } else { if (ae.toLowerCase() != "classid") { ah += " " + ae + '="' + ai[ae] + '"' } } } } } var af = ""; for (var ad in ag) { if (ag[ad] != Object.prototype[ad]) { af += '<param name="' + ad + '" value="' + ag[ad] + '" />' } } aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>"; N[N.length] = ai.id; X = c(ai.id) } else { var Z = C(r); Z.setAttribute("type", q); for (var ac in ai) { if (ai[ac] != Object.prototype[ac]) { if (ac.toLowerCase() == "styleclass") { Z.setAttribute("class", ai[ac]) } else { if (ac.toLowerCase() != "classid") { Z.setAttribute(ac, ai[ac]) } } } } for (var ab in ag) { if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") { e(Z, ab, ag[ab]) } } aa.parentNode.replaceChild(Z, aa); X = Z } } return X } function e(Z, X, Y) { var aa = C("param"); aa.setAttribute("name", X); aa.setAttribute("value", Y); Z.appendChild(aa) } function y(Y) { var X = c(Y); if (X && X.nodeName == "OBJECT") { if (M.ie && M.win) { X.style.display = "none"; (function () { if (X.readyState == 4) { b(Y) } else { setTimeout(arguments.callee, 10) } })() } else { X.parentNode.removeChild(X) } } } function b(Z) { var Y = c(Z); if (Y) { for (var X in Y) { if (typeof Y[X] == "function") { Y[X] = null } } Y.parentNode.removeChild(Y) } } function c(Z) { var X = null; try { X = j.getElementById(Z) } catch (Y) { } return X } function C(X) { return j.createElement(X) } function i(Z, X, Y) { Z.attachEvent(X, Y); I[I.length] = [Z, X, Y] } function F(Z) { var Y = M.pv, X = Z.split("."); X[0] = parseInt(X[0], 10); X[1] = parseInt(X[1], 10) || 0; X[2] = parseInt(X[2], 10) || 0; return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false } function v(ac, Y, ad, ab) { if (M.ie && M.mac) { return } var aa = j.getElementsByTagName("head")[0]; if (!aa) { return } var X = (ad && typeof ad == "string") ? ad : "screen"; if (ab) { n = null; G = null } if (!n || G != X) { var Z = C("style"); Z.setAttribute("type", "text/css"); Z.setAttribute("media", X); n = aa.appendChild(Z); if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) { n = j.styleSheets[j.styleSheets.length - 1] } G = X } if (M.ie && M.win) { if (n && typeof n.addRule == r) { n.addRule(ac, Y) } } else { if (n && typeof j.createTextNode != D) { n.appendChild(j.createTextNode(ac + " {" + Y + "}")) } } } function w(Z, X) { if (!m) { return } var Y = X ? "visible" : "hidden"; if (J && c(Z)) { c(Z).style.visibility = Y } else { v("#" + Z, "visibility:" + Y) } } function L(Y) { var Z = /[\\\"<>\.;]/; var X = Z.exec(Y) != null; return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y } var d = function () { if (M.ie && M.win) { window.attachEvent("onunload", function () { var ac = I.length; for (var ab = 0; ab < ac; ab++) { I[ab][0].detachEvent(I[ab][1], I[ab][2]) } var Z = N.length; for (var aa = 0; aa < Z; aa++) { y(N[aa]) } for (var Y in M) { M[Y] = null } M = null; for (var X in swfobject) { swfobject[X] = null } swfobject = null }) } }(); return { registerObject: function (ab, X, aa, Z) { if (M.w3 && ab && X) { var Y = {}; Y.id = ab; Y.swfVersion = X; Y.expressInstall = aa; Y.callbackFn = Z; o[o.length] = Y; w(ab, false) } else { if (Z) { Z({ success: false, id: ab }) } } }, getObjectById: function (X) { if (M.w3) { return z(X) } }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) { var X = { success: false, id: ah }; if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) { w(ah, false); K(function () { ae += ""; ag += ""; var aj = {}; if (af && typeof af === r) { for (var al in af) { aj[al] = af[al] } } aj.data = ab; aj.width = ae; aj.height = ag; var am = {}; if (ad && typeof ad === r) { for (var ak in ad) { am[ak] = ad[ak] } } if (Z && typeof Z === r) { for (var ai in Z) { if (typeof am.flashvars != D) { am.flashvars += "&" + ai + "=" + Z[ai] } else { am.flashvars = ai + "=" + Z[ai] } } } if (F(Y)) { var an = u(aj, am, ah); if (aj.id == ah) { w(ah, true) } X.success = true; X.ref = an } else { if (aa && A()) { aj.data = aa; P(aj, am, ah, ac); return } else { w(ah, true) } } if (ac) { ac(X) } }) } else { if (ac) { ac(X) } } }, switchOffAutoHideShow: function () { m = false }, ua: M, getFlashPlayerVersion: function () { return { major: M.pv[0], minor: M.pv[1], release: M.pv[2] } }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) { if (M.w3) { return u(Z, Y, X) } else { return undefined } }, showExpressInstall: function (Z, aa, X, Y) { if (M.w3 && A()) { P(Z, aa, X, Y) } }, removeSWF: function (X) { if (M.w3) { y(X) } }, createCSS: function (aa, Z, Y, X) { if (M.w3) { v(aa, Z, Y, X) } }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) { var Z = j.location.search || j.location.hash; if (Z) { if (/\?/.test(Z)) { Z = Z.split("?")[1] } if (aa == null) { return L(Z) } var Y = Z.split("&"); for (var X = 0; X < Y.length; X++) { if (Y[X].substring(0, Y[X].indexOf("=")) == aa) { return L(Y[X].substring((Y[X].indexOf("=") + 1))) } } } return "" }, expressInstallCallback: function () { if (a) { var X = c(R); if (X && l) { X.parentNode.replaceChild(l, X); if (Q) { w(Q, true); if (M.ie && M.win) { l.style.display = "block" } } if (E) { E(B) } } a = false } } } }();
(function () { if (window.WEB_SOCKET_FORCE_FLASH) { } else { if (window.WebSocket) { return } else { if (window.MozWebSocket) { window.WebSocket = MozWebSocket; return } } } var a; if (window.WEB_SOCKET_LOGGER) { a = WEB_SOCKET_LOGGER } else { if (window.console && window.console.log && window.console.error) { a = window.console } else { a = { log: function () { }, error: function () { } } } } if (swfobject.getFlashPlayerVersion().major < 10) { a.error("Flash Player >= 10.0.0 is required."); return } if (location.protocol == "file:") { a.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...") } window.WebSocket = function (d, e, c, g, f) { var b = this; b.__id = WebSocket.__nextId++; WebSocket.__instances[b.__id] = b; b.readyState = WebSocket.CONNECTING; b.bufferedAmount = 0; b.__events = {}; if (!e) { e = [] } else { if (typeof e == "string") { e = [e] } } b.__createTask = setTimeout(function () { WebSocket.__addTask(function () { b.__createTask = null; WebSocket.__flash.create(b.__id, d, e, c || null, g || 0, f || null) }) }, 0) }; WebSocket.prototype.send = function (c) { if (this.readyState == WebSocket.CONNECTING) { throw "INVALID_STATE_ERR: Web Socket connection has not been established" } var b = WebSocket.__flash.send(this.__id, encodeURIComponent(c)); if (b < 0) { return true } else { this.bufferedAmount += b; return false } }; WebSocket.prototype.close = function () { if (this.__createTask) { clearTimeout(this.__createTask); this.__createTask = null; this.readyState = WebSocket.CLOSED; return } if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) { return } this.readyState = WebSocket.CLOSING; WebSocket.__flash.close(this.__id) }; WebSocket.prototype.addEventListener = function (c, d, b) { if (!(c in this.__events)) { this.__events[c] = [] } this.__events[c].push(d) }; WebSocket.prototype.removeEventListener = function (e, f, b) { if (!(e in this.__events)) { return } var d = this.__events[e]; for (var c = d.length - 1; c >= 0; --c) { if (d[c] === f) { d.splice(c, 1); break } } }; WebSocket.prototype.dispatchEvent = function (e) { var c = this.__events[e.type] || []; for (var b = 0; b < c.length; ++b) { c[b](e) } var d = this["on" + e.type]; if (d) { d.apply(this, [e]) } }; WebSocket.prototype.__handleEvent = function (d) { if ("readyState" in d) { this.readyState = d.readyState } if ("protocol" in d) { this.protocol = d.protocol } var b; if (d.type == "open" || d.type == "error") { b = this.__createSimpleEvent(d.type) } else { if (d.type == "close") { b = this.__createSimpleEvent("close"); b.wasClean = d.wasClean ? true : false; b.code = d.code; b.reason = d.reason } else { if (d.type == "message") { var c = decodeURIComponent(d.message); b = this.__createMessageEvent("message", c) } else { throw "unknown event type: " + d.type } } } this.dispatchEvent(b) }; WebSocket.prototype.__createSimpleEvent = function (b) { if (document.createEvent && window.Event) { var c = document.createEvent("Event"); c.initEvent(b, false, false); return c } else { return { type: b, bubbles: false, cancelable: false } } }; WebSocket.prototype.__createMessageEvent = function (b, d) { if (window.MessageEvent && typeof (MessageEvent) == "function" && !window.opera) { return new MessageEvent("message", { "view": window, "bubbles": false, "cancelable": false, "data": d }) } else { if (document.createEvent && window.MessageEvent && !window.opera) { var c = document.createEvent("MessageEvent"); c.initMessageEvent("message", false, false, d, null, null, window, null); return c } else { return { type: b, data: d, bubbles: false, cancelable: false } } } }; WebSocket.CONNECTING = 0; WebSocket.OPEN = 1; WebSocket.CLOSING = 2; WebSocket.CLOSED = 3; WebSocket.__isFlashImplementation = true; WebSocket.__initialized = false; WebSocket.__flash = null; WebSocket.__instances = {}; WebSocket.__tasks = []; WebSocket.__nextId = 0; WebSocket.loadFlashPolicyFile = function (b) { WebSocket.__addTask(function () { WebSocket.__flash.loadManualPolicyFile(b) }) }; WebSocket.__initialize = function () { if (WebSocket.__initialized) { return } WebSocket.__initialized = true; if (WebSocket.__swfLocation) { window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation } if (!window.WEB_SOCKET_SWF_LOCATION) { a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf"); return } if (!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR && !WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/) && WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)) { var d = RegExp.$1; if (location.host != d) { a.error("[WebSocket] You must host HTML and WebSocketMain.swf in the same host " + "('" + location.host + "' != '" + d + "'). " + "See also 'How to host HTML file and SWF file in different domains' section " + "in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message " + "by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;") } } var b = document.createElement("div"); b.id = "webSocketContainer"; b.style.position = "absolute"; if (WebSocket.__isFlashLite()) { b.style.left = "0px"; b.style.top = "0px" } else { b.style.left = "-100px"; b.style.top = "-100px" } var c = document.createElement("div"); c.id = "webSocketFlash"; b.appendChild(c); document.body.appendChild(b); swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, { hasPriority: true, swliveconnect: true, allowScriptAccess: "always" }, null, function (f) { if (!f.success) { a.error("[WebSocket] swfobject.embedSWF failed") } }) }; WebSocket.__onFlashInitialized = function () { setTimeout(function () { WebSocket.__flash = document.getElementById("webSocketFlash"); WebSocket.__flash.setCallerUrl(location.href); WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG); for (var b = 0; b < WebSocket.__tasks.length; ++b) { WebSocket.__tasks[b]() } WebSocket.__tasks = [] }, 0) }; WebSocket.__onFlashEvent = function () { setTimeout(function () { try { var c = WebSocket.__flash.receiveEvents(); for (var b = 0; b < c.length; ++b) { WebSocket.__instances[c[b].webSocketId].__handleEvent(c[b]) } } catch (d) { a.error(d) } }, 0); return true }; WebSocket.__log = function (b) { a.log(decodeURIComponent(b)) }; WebSocket.__error = function (b) { a.error(decodeURIComponent(b)) }; WebSocket.__addTask = function (b) { if (WebSocket.__flash) { b() } else { WebSocket.__tasks.push(b) } }; WebSocket.__isFlashLite = function () { if (!window.navigator || !window.navigator.mimeTypes) { return false } var b = window.navigator.mimeTypes["application/x-shockwave-flash"]; if (!b || !b.enabledPlugin || !b.enabledPlugin.filename) { return false } return b.enabledPlugin.filename.match(/flashlite/i) ? true : false }; if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) { swfobject.addDomLoadEvent(function () { WebSocket.__initialize() }) } })();
(function (a) { if (typeof define === "function" && define.amd) { define(["jquery"], a) } else { a(jQuery) } }(function (f) { var a = /\+/g; function d(i) { return b.raw ? i : encodeURIComponent(i) } function g(i) { return b.raw ? i : decodeURIComponent(i) } function h(i) { return d(b.json ? JSON.stringify(i) : String(i)) } function c(i) { if (i.indexOf('"') === 0) { i = i.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\") } try { i = decodeURIComponent(i.replace(a, " ")) } catch (j) { return } try { return b.json ? JSON.parse(i) : i } catch (j) { } } function e(j, i) { var k = b.raw ? j : c(j); return f.isFunction(i) ? i(k) : k } var b = f.cookie = function (q, p, v) { if (p !== undefined && !f.isFunction(p)) { v = f.extend({}, b.defaults, v); if (typeof v.expires === "number") { var r = v.expires, u = v.expires = new Date(); u.setDate(u.getDate() + r) } return (document.cookie = [d(q), "=", h(p), v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join("")) } var w = q ? undefined : {}; var s = document.cookie ? document.cookie.split("; ") : []; for (var o = 0, m = s.length; o < m; o++) { var n = s[o].split("="); var j = g(n.shift()); var k = n.join("="); if (q && q === j) { w = e(k, p); break } if (!q && (k = e(k)) !== undefined) { w[j] = k } } return w }; b.defaults = {}; f.removeCookie = function (j, i) { if (f.cookie(j) !== undefined) { f.cookie(j, "", f.extend({}, i, { expires: -1 })); return true } return false } }));


WEB_SOCKET_SWF_LOCATION = "PLUG/WebSocketMain.swf";
var ws_addr = "ws://47.101.151.14:8006";
var ws = null;
var tick_heartpac = null;//心跳包
var tick_titletips = null;//标题闪烁
var isconning = false;
var isforceOut = false;//客户端是否强制离线
var isFocus = true;//当前页是否活动
var pub_lastSendTime = "";//公共聊天最新发表的时间
var pri_lastSendTime = {};//私聊聊天最新发表的时间
var chatuser;
var emoji = {
    "[最右]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c8/lxhzuiyou_thumb.gif",
    "[泪流满面]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/64/lxhtongku_thumb.gif",
    "[江南style]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/67/gangnamstyle_thumb.gif",
    "[偷乐]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/fa/lxhtouxiao_thumb.gif",
    "[加油啊]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/03/lxhjiayou_thumb.gif",
    "[doge]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/doge_thumb.gif",
    "[喵喵]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/4a/mm_thumb.gif",
    "[笑cry]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/34/xiaoku_thumb.gif",
    "[xkl转圈]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f4/xklzhuanquan_thumb.gif",
    "[微笑]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/huanglianwx_thumb.gif",
    "[嘻嘻]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/tootha_thumb.gif",
    "[哈哈]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6a/laugh.gif",
    "[可爱]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/14/tza_thumb.gif",
    "[可怜]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/kl_thumb.gif",
    "[挖鼻]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/wabi_thumb.gif",
    "[吃惊]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f4/cj_thumb.gif",
    "[害羞]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/shamea_thumb.gif",
    "[挤眼]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c3/zy_thumb.gif",
    "[闭嘴]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/29/bz_thumb.gif",
    "[鄙视]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/71/bs2_thumb.gif",
    "[爱你]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/lovea_thumb.gif",
    "[泪]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/sada_thumb.gif",
    "[偷笑]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/19/heia_thumb.gif",
    "[亲亲]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8f/qq_thumb.gif",
    "[生病]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/sb_thumb.gif",
    "[太开心]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/mb_thumb.gif",
    "[白眼]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/landeln_thumb.gif",
    "[右哼哼]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/98/yhh_thumb.gif",
    "[左哼哼]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/zhh_thumb.gif",
    "[嘘]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a6/x_thumb.gif",
    "[衰]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/cry.gif",
    "[委屈]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/73/wq_thumb.gif",
    "[吐]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9e/t_thumb.gif",
    "[哈欠]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cc/haqianv2_thumb.gif",
    "[抱抱]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/27/bba_thumb.gif",
    "[怒]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7c/angrya_thumb.gif",
    "[疑问]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/yw_thumb.gif",
    "[馋嘴]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a5/cza_thumb.gif",
    "[拜拜]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/88_thumb.gif",
    "[思考]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e9/sk_thumb.gif",
    "[汗]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/24/sweata_thumb.gif",
    "[困]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/kunv2_thumb.gif",
    "[睡]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/96/huangliansj_thumb.gif",
    "[钱]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/90/money_thumb.gif",
    "[失望]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0c/sw_thumb.gif",
    "[酷]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/cool_thumb.gif",
    "[色]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/20/huanglianse_thumb.gif",
    "[哼]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/49/hatea_thumb.gif",
    "[鼓掌]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/36/gza_thumb.gif",
    "[晕]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/dizzya_thumb.gif",
    "[悲伤]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1a/bs_thumb.gif",
    "[泪]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/sada_thumb.gif",
    "[偷笑]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/19/heia_thumb.gif",
    "[抓狂]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/crazya_thumb.gif",
    "[黑线]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/91/h_thumb.gif",
    "[阴险]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/yx_thumb.gif",
    "[怒骂]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/numav2_thumb.gif",
    "[互粉]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/89/hufen_thumb.gif",
    "[心]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/hearta_thumb.gif",
    "[伤心]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ea/unheart.gif",
    "[猪头]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/pig.gif",
    "[熊猫]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/panda_thumb.gif",
    "[兔子]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/81/rabbit_thumb.gif",
    "[ok]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d6/ok_thumb.gif",
    "[耶]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/ye_thumb.gif",
    "[good]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/good_thumb.gif",
    "[no]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ae/buyao_org.gif",
    "[赞]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d0/z2_thumb.gif",
    "[来]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/come_thumb.gif",
    "[弱]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/sad_thumb.gif",
    "[草泥马]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7a/shenshou_thumb.gif",
    "[神马]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/horse2_thumb.gif",
    "[囧]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/15/j_thumb.gif",
    "[浮云]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/bc/fuyun_thumb.gif",
    "[给力]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/geiliv2_thumb.gif",
    "[围观]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f2/wg_thumb.gif",
    "[威武]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/vw_thumb.gif",
    "[奥特曼]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/bc/otm_thumb.gif",
    "[礼物]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c4/liwu_thumb.gif",
    "[钟]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d3/clock_thumb.gif",
    "[话筒]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9f/huatongv2_thumb.gif",
    "[蜡烛]": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/lazhuv2_thumb.gif"
};
//用户列表
var dic_userlist = {};
//选择的用户
var sel_userid = "";
$(function () {
    chatuser={id:localStorage.getItem("userid"),nickname:localStorage.getItem("username")};
    init_initEmoji();
    init_control();
    fun_getnickname(true);
    fun_getuploadimg();
    window.onblur = function () { isFocus = false; }
    window.onfocus = function () { isFocus = true; }
    //全局鼠标按下监听
    window.onmousedown = function () {
        var e = window.event;
        var name = e.target.className;
        var id = e.target.id;
        if (name.indexOf('emoji') == -1) {
            if (name == "layui-layer-content")
                return;
            isopenEmoji = false;
            layer.close(index_emoji);
        }
        if (id.indexOf('uploadimg') == -1) {
            if (id == "absFileInput" || e.target.protocol == "javascript:" || name == "layui-layer-content"
            || name == "laypage_curr" || id.indexOf("laypage") != -1 || id == "")
                return;
            isopenImg = false;
            layer.close(index_img);
        }
    };
    $("#btn_getnick").click(function () {
        fun_getnickname(false);
    });
    $("#inp_nickname").change(function () {
        if ($.trim($("#inp_nickname").val())) {
        	chatuser.nickname=$.trim($("#inp_nickname").val());
            sendJson('chgname', '', true);
        }
    });
    $("#btn_say").click(function () {
        var v = $.trim($("#inp_say").val());
        if (ws && ws.readyState == 1) {
            if (!v) {
                layer.msg('不能输入空字符');
                return;
            }
            if (!sel_userid)
                sendJson('toall', v, true);
            else
                sendJson('touser_' + sel_userid + "_" + dic_userlist[sel_userid], v, true);
            $("#inp_say").val('');
        }
        else
            layer.msg('你已经离线，请先连接');
    });
    $("#btn_conn").click(function () {
        fun_initWebSocket();
    });
    $("#inp_say").keydown(function (e) {//组合键
        if (e.keyCode == 13 && e.ctrlKey) {
            $("#btn_say").trigger("click");
            return false;
        }
    });
    $("#user_count").click(function () {
        fun_showPublicZone();
    });
    $("#a_uploadimg").click(function () { init_uploadPic() });
    $("#a_uploadfile").click(function () { init_uploadfile() });
    $("#a_getphoto").click(function () { init_getphoto() });
    $("#a_record").click(function () { init_record() });
    $("#a_doodle").click(function () { init_doodle(); });
   
    $("#msg_clear").click(function () {
        var lay_index = layer.confirm('是否确定清除记录？', {
            skin: 'demo-class',
            btn: ['确定', '取消']
        }, function () {
            layer.close(lay_index);
            $("#div_msgbox").html("");
        });

    });
    $("#msg_back").click(function () {
        var lastTime = sel_userid ? (sel_userid + "_" + pri_lastSendTime[sel_userid]) : pub_lastSendTime;
        if (ws && ws.readyState == 1 && lastTime) {
            var lay_index = layer.confirm('是否确定撤回最新消息？', {
                skin: 'demo-class',
                btn: ['确定', '取消']
            }, function () {
                //清除保存的最新消息的时间
                if (lastTime.indexOf('_') != -1)
                    pri_lastSendTime[sel_userid] = "";
                else
                    pub_lastSendTime = "";
                layer.close(lay_index);
                fun_loading(true);
                sendJson('msgrevoke', lastTime, true);//撤回最新的聊天的内容
            });
        }
    });
});

//jquery扩展
$.fn.extend({
    insertAtCaret: function (myValue) {
        var $t = $(this)[0];
        if (document.selection) {
            this.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
            this.focus();
        } else
            if ($t.selectionStart || $t.selectionStart == '0') {
                var startPos = $t.selectionStart;
                var endPos = $t.selectionEnd;
                var scrollTop = $t.scrollTop;
                $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
                this.focus();
                $t.selectionStart = startPos + myValue.length;
                $t.selectionEnd = startPos + myValue.length;
                $t.scrollTop = scrollTop;
            } else {
                this.value += myValue;
                this.focus();
            }
    }//在光标处插入文本
});

//对组件进行设置
function init_control() {
    $("#zone_left").height(window.innerHeight-40);//左侧栏的高度
    $("#zone_left .list-group").height(window.innerHeight - 225);//左侧栏的高度
    //$("#div_msgpanel").width((window.innerWidth - 100) * 0.45);
    //$("#div_msgpanel").height(window.innerHeight - 200);
    $("#div_msgbox").height(window.innerHeight - 295);
    console.log(window.innerHeight - 275)
    $("#div_privmsg").height(window.innerHeight - 295);
    $("#nav_action").width(window.innerWidth - $("#div_msgpanel").width() - $("#zone_left").width() - 40);
    $("#zone_left").show();
    $("#zone_center").show();
    $("#userbtn").on('click', function() {
    			var display = $('#zone_left').css('display')
    			if(display == 'none') {
    				$('#zone_left').show();
    				$("#chatmain").css("width", "60%");
    				$("#userbtn").removeClass("glyphicon-triangle-right");
    				$("#userbtn").addClass("glyphicon-triangle-left");

    			} else {
    				$('#zone_left').hide();
    				$("#chatmain").css("width", "98%");
    				$("#userbtn").removeClass("glyphicon-triangle-left");
    				$("#userbtn").addClass("glyphicon-triangle-right");
    			}
    })
}

function getQueryString(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); 
        return null; 
    } 


//获取昵称
function fun_getnickname(isauto) {
                $("#inp_nickname").html(chatuser.nickname);
                if (!isauto && ws && ws.readyState == 1)
                    sendJson('chgname', '', true);
                if (!ws)
                    fun_initWebSocket();
          //  }
           // else
          //      layer.msg(json.msg, { icon: 6 });
       // });
   
}

//定义socket
function fun_initWebSocket() {
    if (isconning) {
        layer.msg('正在连接,请稍后...');
        return;
    }
    isconning = true;
    ws = new WebSocket(ws_addr);
    ws.onopen = function (e) {
        isconning = false;
        $("#btn_conn").attr("disabled", true);
        layer.msg('欢迎登录~');
        sendJson('sign', '', true);
    };
    ws.onmessage = function (e) {
        fun_loading(false);
        var json = $.parseJSON(e.data);
        switch (json.code) {
            case -1: layer.alert(json.content, { icon: 5, title: '注意' }); break;
            case -2: isforceOut = true; layer.alert(json.content, { icon: 5, title: '离线' }); break;
            case -3: isforceOut = true; layer.alert(json.content, { icon: 5, title: '重复登录' }); break;
            case 1: fun_bindList(json); break;//用户列表
            case 2: fun_newuser(json); break;//新用户登录
            case 3: fun_userlogout(json); break;//用户离线
            case 4: fun_userchgname(json); break;//用户更改名称
            case 5: fun_recbrodata(json); break;//接收广播消息
            case 6: fun_bindtoallmsg(json); break;//绑定所有的广播消息
            case 7: fun_fromusermsg(json); break;//用户的私信
            case 8: fun_getprivmsg(json); break;//获取私信内容
            case 9: fun_msgrevoke(json); break;//撤回消息
        }
    };
    ws.onclose = function (e) {
        isconning = false;
        $("#btn_conn").attr("disabled", false);
        if (!isforceOut)
            layer.alert('连接断开...', { icon: 5, title: '提示' });
        clearInterval(tick_heartpac);
    };
}

//绑定用户列表
function fun_bindList(json) {
    var list = json.users_list;
    var htmlstr = "";
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == chatuser.id)
            continue;
        dic_userlist[list[i].id] = list[i].nickname;
        htmlstr += "<a id='userid_" + list[i].id + "' class='list-group-item' onfocus='this.blur()' onclick='click_userlist(id);'><span class='badge'></span><span style='margin-right:5px;' class='glyphicon glyphicon-user'></span><span class='nickname'>" + list[i].nickname + "<span></a>";
    }
    $("#user_list").html(htmlstr);
    $("#nowusers_count").text(list.length);
}

//新用户登录
function fun_newuser(json) {
    if (dic_userlist[json["user"].id])
        return;
    $("#user_list").prepend("<a id='userid_" + json["user"].id + "' class='list-group-item' onfocus='this.blur()' onclick='click_userlist(id);'><span class='badge'></span><span style='margin-right:5px;' class='glyphicon glyphicon-user'></span><span class='nickname'>" + json["user"].nickname + "</span></a>");
    dic_userlist[json["user"].id] = json["user"].nickname;
    $("#nowusers_count").text(parseInt($("#nowusers_count").text()) + 1);
}

//用户离线
function fun_userlogout(json) {
    $("#userid_" + json["user"].id).remove();
    if (dic_userlist[json["user"].id]) {
        delete dic_userlist[json["user"].id];
        $("#nowusers_count").text(parseInt($("#nowusers_count").text()) - 1);
        if (sel_userid == json["user"].id)
            fun_showPublicZone();
    }
}

//用户更改名称
function fun_userchgname(json) {
    if (dic_userlist[json["user"].id]) {
        dic_userlist[json["user"].id] = json["user"].nickname;
        $("#userid_" + json["user"].id + " .nickname").text(json["user"].nickname);
    }
    $("#div_msgbox").append('<div class="chat_msg"><div>' + json["user"].time + '</div>' + json["user"].beforename + "->" + json["user"].nickname + '</div>');
    $('#div_msgbox').scrollTop($('#div_msgbox')[0].scrollHeight);
}

//接收广播消息
function fun_recbrodata(json) {
    haveTitleTips("新消息");
    if (json.user.id == chatuser.id) {
        pub_lastSendTime = json.user.time;
    }
    $("#div_msgbox").append(fun_chatbox(json["user"], json.code));
    $('#div_msgbox').scrollTop($('#div_msgbox')[0].scrollHeight);
}

//绑定所有的广播消息
function fun_bindtoallmsg(json) {
    $('#div_msgbox').html('');
    var contlist = json["contents_list"];
    for (var i = 0; i < contlist.length; i++) {
        $("#div_msgbox").append(fun_chatbox(contlist[i], json.code));
    }
    $('#div_msgbox').scrollTop($('#div_msgbox')[0].scrollHeight);
}

//用户的私信
function fun_fromusermsg(json) {
    var fu = json["fromuser"];
    var tu = json["touser"];
    haveTitleTips("新私信");
    if (chatuser.id == fu.id) {
        pri_lastSendTime[tu.id] = fu.time;
        $("#div_privmsg").append(fun_chatbox(fu, json.code));
        $('#div_privmsg').scrollTop($('#div_privmsg')[0].scrollHeight);
    }
    else {
        if (sel_userid != fu.id) {
            var count = ($("#userid_" + fu.id + " .badge").text() ? parseInt($("#userid_" + fu.id + " .badge").text()) : 0) + 1;
            $("#userid_" + fu.id + " .badge").text(count);
            $("#userid_" + fu.id).insertBefore($("#user_list")[0].childNodes[0]);
        }
        else {
            $("#div_privmsg").append(fun_chatbox(fu, json.code));
            $('#div_privmsg').scrollTop($('#div_privmsg')[0].scrollHeight);
        }
    }
}

//获取私信内容
function fun_getprivmsg(json) {
    var contlist = json["contents_list"];
    $("#div_privmsg").html('');
    for (var i = 0; i < contlist.length; i++) {
        $("#div_privmsg").append(fun_chatbox(contlist[i], json.code));
    }
    $("#div_msgbox").hide();
    $("#div_privmsg").show();
    $('#div_privmsg').scrollTop($('#div_privmsg')[0].scrollHeight);
}

//撤回消息
function fun_msgrevoke(json) {
    $("#" + json.user.content).html("<span style='color:#b2b2b2'>撤回一条消息</span>");
}

//用户列表点击
function click_userlist(id) {
    id = id.split('_')[1];
    if (sel_userid != id) {
        $("#userid_" + sel_userid).removeClass("active");
        $("#userid_" + id).addClass("active");
        $("#msg_title").html('和[<span style="color:orange">' + dic_userlist[id] + '</span>]的聊天记录');
        sel_userid = id;
        if (ws && ws.readyState == 1) {
            fun_loading(true);
            sendJson('getprivmsg', sel_userid, true);
            $("#userid_" + sel_userid + " .badge").text('');
        }
    }
    else
        fun_showPublicZone();
}

//显示公共消息区
function fun_showPublicZone() {
    $("#userid_" + sel_userid).removeClass("active");
    sel_userid = "";
    $("#msg_title").html('公共聊天记录');
    $("#div_msgbox").show();
    $("#div_privmsg").hide();
    $('#div_msgbox').scrollTop($('#div_msgbox')[0].scrollHeight);
}

//聊天信息展示
function fun_chatbox(json_user, code) {
    var htmlstr = ""
    if (json_user.code) code = json_user.code;
    switch (code) {
        case 4://用户修改名称
            htmlstr = '<div class="chat_msg"><div>' + json_user.time + '</div>' + json_user.beforename + " --> " + json_user.nickname + '</div>'; break;
        default:
            var self = json_user.id == chatuser.id;
            var id = code == 8 || code == 7 ? chatuser.id : json_user.id;//为内容块指定唯一ID
            var chattitle = !self ? "<span style='font-weight:900;color:#6d6d6d'>" + json_user.nickname + "</span> " + "<span style='color:#d2d2d2;'>" + json_user.time + "</span>" : "<span style='color:#d2d2d2;'>" + json_user.time + "</span> <span style='font-weight:900;color:#6d6d6d'>" + json_user.nickname + "</span>";
            htmlstr = "<div class='chatbox' style='" + (self ? "float:right" : "float:left") + "' ><div style='text-align:" + (self ? "right" : "left") + "'>" + chattitle + "</div>" +
                "<div class='chatarrow' style='" + (self ? "right:5px;border-bottom: 8px solid #ffe6b8;" : "left:5px;border-bottom: 8px solid #cfffcf;") + "'></div><div id='" + (sortID(id) + json_user.time.replace(/:/g, '_')) + "' class='chat" + (self ? " selfchat" : "") + "' style='max-width:" + ($("#div_msgpanel").width() - 50) + "px;'>" + chg_emoji(json_user.content, json_user.id) + "<br />" + "</div>" +
                "</div><div class='clearboth'></div>"; break;
    }
    return htmlstr;
}

var isloading = null;
var index_loading;
//显示加载中
function fun_loading(show) {
    if (show) {
        isloading = setTimeout(function () {
            index_loading = layer.load();
        }, 100);
    }
    else {
        layer.close(index_loading);
        clearTimeout(isloading);
    }
}

//文字转为日期
function fun_strtodate(str) {
    var d = new Date();
    return new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + str);
}

//标题闪烁提醒
function haveTitleTips(msg) {
    if (!isFocus && !tick_titletips) {
        haveSoundTips();
        tick_titletips = setInterval(function () {
            if (document.title.indexOf(msg) == -1) {
                document.title = "[" + msg + "]-来聊吧";
            }
            else {
                document.title = "[　　　]-来聊吧";
            }
            if (isFocus) {
                clearInterval(tick_titletips);
                tick_titletips = null;
                document.title = "来聊吧";
            }
        }, 500);
    }
    else if (!isFocus)
        haveSoundTips();
}

//声音提醒
function haveSoundTips() {
    //alert($.cookie('isSound'));
   
}

//对自己用户id和所选用户id进行顺序排列
function sortID(uid) {
    if (sel_userid) {
        for (var i = 0; i < 8; i++) {
            if (uid[i] != sel_userid[i])
                return uid[i] > sel_userid[i] ? (uid + sel_userid) : (sel_userid + uid);
        }
        return uid;
    }
    else
        return uid;
}

//发送json数据
function sendJson(act, msg, self) {
    if (ws && ws.readyState == 1) {
        if (self) {
            clearInterval(tick_heartpac);
            tick_heartpac = setInterval(function () {
                sendJson('heart', '');//定时心跳包
            }, 12000);
        }
        ws.send(JSON.stringify({ id: chatuser.id, name: chatuser.nickname, act: act, msg: msg }));
    }
}

/////////////////////////////////////////////////表情显示相关方法///////////////////////////////////////////////////

var isopenEmoji = false;
var index_emoji = 0;
//定义表情包
function init_initEmoji() {
    var emoji_html = "";
    for (var i in emoji) {
        emoji_html += "<span class='item_emoji' id='emoji_" + i + "' onclick='click_emojiItems(id);'  title='" + i + "'><img class='imgitem_emoji' src='" + emoji[i] + "' /></span>";
    }
    $(".emoji").click(function () {
        if (!isopenEmoji) {
            isopenEmoji = true;
            index_emoji = layer.tips("<div  class='list_emoji'>" + emoji_html + "</div>", '.emoji', {
                tips: [1, '#fff'],
                time: 0,
                area: 'auto',
                maxWidth: 405,
                shift: 5
            });
        }
        else {
            isopenEmoji = false;
            layer.close(index_emoji);
        }
    });
}

//表情项的点击
function click_emojiItems(id) {
    $("#inp_say").insertAtCaret(id.split('_')[1]);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////图片上传相关方法///////////////////////////////////////////////////

//用户上传的所有图片集合
var uploadPic = [];
var isopenImg = false;
var index_img = 0;
var index_zoomimg = 0;
var isBeforeUpload = false;

//获取用户上传的所有图片
function fun_getuploadimg() {
    $.getJSON("Act/h_main.ashx", { act: "getUploadImg" }, function (json) {
        if (json.code != -1)
            uploadPic = json.msg;
    });
}

//绑定上传图片的分页
function bind_imgpage() {
    laypage({
        cont: 'uploadimg_pages', //容器。值支持id名、原生dom对象，jquery对象,
        pages: Math.ceil(uploadPic.length / 10), //总页数
        first: false,
        groups: 5,
        last: false,
        prev: false, //若不显示，设置false即可
        next: false, //若不显示，设置false即可
        jump: function (obj, first) { //触发分页后的回调
            if (!first) {
                bind_imglist(obj.curr);
            }
        }
    });
}

//图片错误时
function errpic(dom) {
    dom.src = "IMG/uploadpic.png"
}

//转换文字为各种资源
function chg_emoji(str, userid) {
    var em = str.match(/\[.*?]/gi);
    var img = "", wav = "", rar = "";
    if (em) {
        for (var i = 0; i < em.length; i++) {
            if (em[i].indexOf('.') != -1) {
                if (em[i].indexOf('.wav') != -1) {
                    wav = em[i].replace("[", "").replace("]", "");
                    if (wav)
                        str = str.replace(em[i], '<audio controls="controls"><source src="Voice/' + $.trim(wav) + '"></audio>');
                }
                else if (em[i].indexOf('.rar') != -1) {
                    rar = em[i].replace("[", "").replace("]", "");
                    if (rar) {
                        var rar_param = rar.split('|');
                        str = str.replace(em[i], '<a href="Files/' + rar_param[2] + '" target="_blank">' +
                        '<img style="float:left;" src="IMG/rarico.png" />' +
                        '<div style="float:left;margin-left:5px;font-size:18px;">' +
                        '<div style="margin-bottom:10px;">' + rar_param[0] + '</div><div style="color:orange;">' + rar_param[1] + 'kb</div></div></a>');
                    }
                }
                else {
                    img = em[i].replace("[", "").replace("]", "");
                    if (img)
                        str = str.replace(em[i], "<a href='IMG/Upload/" + userid + "/" + img + "' target='_blank'><img onerror='errpic(this)' style='max-width:380px;' src='IMG/Upload/" + userid + "/" + img + "' /></a>");
                }
            }
            else
                str = str.replace(em[i], "<img src='" + emoji[em[i]] + "' />");
        }
    }
    return str;
}

//定义图片按钮
function init_uploadPic() {
    if (!isopenImg) {
        isopenImg = true;
        index_img = layer.tips("<div id='uploadimg_list' style='height:250px;'></div>" +
        "<button id='uploadimg_upload' class='btn btn-default' type='button'><span style='color:orange;margin-right:5px;' class='glyphicon glyphicon-picture'></span><span class='sp_uploadtxt'>上传</span></button>" +
        "<input id='uploading_file' type='file' style='display:none;' /><div id='uploadimg_pages' style='float:right;margin-top:5px;'></div>", '#a_uploadimg', {
            tips: [1, '#fff'],
            time: 0,
            area: ['390px', '300px'],
            shift: 5
        });
        bind_imglist(1);
        bind_imgpage();
        isBeforeUpload = false;
        $("#uploadimg_upload").click(function () {
            isBeforeUpload = false;
            document.getElementById('uploading_file').click();
        });
        $("#uploading_file").change(function () {//图片上传功能
            if (isBeforeUpload) return;
            var file = document.getElementById('uploading_file').files[0];//图片
            var filesize = file.size / 1024;//图片大小KB
            var data = new FormData();
            data.append('upload_file', file);
            if (file.name.toLowerCase().indexOf(".gif") != -1) {
                if (filesize > 500) {
                    isBeforeUpload = true;
                    $("#uploading_file").val('');
                    layer.alert("gif图片上传失败,当前最大限制500kb", { icon: 5, title: '上传结果' });
                    return false;
                }
                imgupload_file(data);
            }
            else {
                if (filesize > 500) {
                    $("#uploadimg_upload").attr("disabled", true);
                    $(".sp_uploadtxt").html("上传中...");
                    lrz(this.files[0], { width: 500 }, function (r) {
                        imgupload_base64(r.base64);
                    });
                }
                else
                    imgupload_file(data);
            }
        });
    }
    else {
        isopenImg = false;
        layer.close(index_img);
    }
}

//图片文件形式上传
function imgupload_file(file) {
    $.ajax({
        url: 'Act/h_main.ashx?act=uploadImg',
        type: 'POST',
        data: file,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            $("#uploadimg_upload").attr("disabled", false);
            $(".sp_uploadtxt").text("上传");
            isBeforeUpload = true;
            $("#uploading_file").val('');
            var json = $.parseJSON(response);
            var issame = false;
            if (json.state == "Fail") {//上传图片错误提示
                layer.alert(json.msg, { icon: 5, title: '上传结果' });
                return;
            }
            for (var i = 0; i < uploadPic.length; i++) {
                if (uploadPic[i] == json.msg) {
                    issame = true;
                    break;
                }
            }
            if (!issame)
                uploadPic.splice(0, 0, json.msg);
            bind_imglist(1);//自动跳转到第一页
            bind_imgpage();
        }
    });
}

//图片base64形式上传
function imgupload_base64(base64str) {
    $("#uploadimg_upload").attr("disabled", true);
    $(".sp_uploadtxt").html("上传中...");
    $.post("Act/h_main.ashx?act=uploadPhoto", { base64str: base64str }, function (d) {
        $("#uploadimg_upload").attr("disabled", false);
        $(".sp_uploadtxt").text("上传");
        isBeforeUpload = true;
        $("#uploading_file").val('');
        var json = $.parseJSON(d);
        var issame = false;
        if (json.state == "Fail") {//上传图片错误提示
            layer.alert(json.msg, { icon: 5, title: '上传结果' });
            return;
        }
        for (var i = 0; i < uploadPic.length; i++) {
            if (uploadPic[i] == json.msg) {
                issame = true;
                break;
            }
        }
        if (!issame)
            uploadPic.splice(0, 0, json.msg);
        bind_imglist(1);//自动跳转到第一页
        bind_imgpage();
    });
}

//绑定图片的列表
function bind_imglist(cur_page) {
    var uploadpic_html = "";
    var imgid = "";
    for (var i = 10 * (cur_page - 1) ; i < cur_page * 10; i++) {
        if (uploadPic[i]) {
            imgid = uploadPic[i].replace('.', '_');
            uploadpic_html += "<div style='height:64px;float:left;margin:25px 5px;'>" +
            "<img id='uploadimgitem_" + uploadPic[i].replace('.', '_') + "'onclick='click_selimg(id);' onmouseover='mouseover_zoomimg(id);' onmouseout='mouseout_closezoom();' style='height:64px;width:64px;' src='IMG/Upload/" + chatuser.id + "/" + uploadPic[i] + "' /></div>";
        }
    }
    $("#uploadimg_list").html(uploadpic_html);
}

//悬停在图片项时放大
function mouseover_zoomimg(id) {
    if (index_zoomimg != 0)
        return;
    var imgID = id.split('_')[1];
    var imgSuffix = id.split('_')[2]
    index_zoomimg = layer.tips("<div><img style='max-width:380px;' src='IMG/Upload/" + chatuser.id + "/" + imgID + "." + imgSuffix + "' /></div>", '#' + id, {
        tipsMore: true,
        tips: [2, '#fff'],
        time: 0,
        area: 'auto',
        maxWidth: 400,
        shift: 5
    });
}

//从图片移出项时取消
function mouseout_closezoom() {
    layer.close(index_zoomimg);
    index_zoomimg = 0;
}

//选中图片
function click_selimg(id) {
    var tmp = id.split('_');
    var img = tmp[1] + "." + tmp[2];
    $("#inp_say").insertAtCaret("[" + img + "]");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////拍照相关方法///////////////////////////////////////////////////

var index_getphoto;

//定义拍照按钮
function init_getphoto() {
    index_getphoto = layer.open({
        type: 2,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        area: ['346px', '305px'],
        content: ['GetVideo.html', 'no']
    });
}

//拍照窗口返回结果
function result_getphoto(result) {
    layer.close(index_getphoto);
    var json = $.parseJSON(result);
    if (json.state != "Fail") {
        $("#inp_say").val("[" + json.msg + "]");
        $("#btn_say").trigger('click');
    }
    else
        layer.msg('上传照片失败...');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////录音相关方法//////////////////////////////////////////////////////

var index_getvoice;

//录音
function init_record() {
    index_getvoice = layer.open({
        type: 2,
        title: false,
        closeBtn: 0,
        skin: 'layui-layer-rim',
        shadeClose: true,
        area: ['150px', '150px'],
        content: ['GetVoice.html', 'no']
    });
}

//返回录音界面的错误信息
function voice_errordialog(e) {
    layer.close(index_getvoice);
    layer.msg(e);
}

//录音窗口返回结果
function result_getvoice(result) {
    layer.close(index_getvoice);
    if (result.state != "Fail") {
        $("#inp_say").val("[" + result.msg + "]");
        $("#btn_say").trigger('click');
    }
    else
        layer.msg(result.msg);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////上传压缩包方法////////////////////////////////////////////////////
var index_uploadfile;

//上传压缩包界面
function init_uploadfile() {
    index_uploadfile = layer.open({
        type: 2,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        area: ['300px', '120px'],
        content: ['UploadFile.html', 'no']
    });
}

//返回上传文件界面的错误信息
function uploadfile_errordialog(e) {
    layer.msg(e);
}

//上传文件窗口返回结果
function result_uploadfile(result) {
    layer.close(index_uploadfile);
    if (result.state != "Fail") {
        $("#inp_say").val("[" + result.filename + "|" + result.filesize + "|" + result.msg + "]");
        $("#btn_say").trigger('click');
    }
    else
        layer.msg(result.msg);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////涂鸦/////////////////////////////////////////////////////////////
var index_doodle;

//定义涂鸦
function init_doodle() {
    index_doodle = layer.open({
        type: 2,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        skin: 'layui-layer-rim',
        area: ['756px', '415px'],
        content: ['Doodle.html', 'no']
    });
}

function result_doodle(result) {
    layer.close(index_doodle);
    var json = $.parseJSON(result);
    if (json.state != "Fail") {
        $("#inp_say").val("[" + json.msg + "]");
        $("#btn_say").trigger('click');
    }
    else
        layer.msg(json.msg);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////