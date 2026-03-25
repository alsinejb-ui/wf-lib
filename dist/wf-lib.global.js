var WFLib=function(li){"use strict";var Gw=Object.defineProperty;var Ww=(li,ln,Wr)=>ln in li?Gw(li,ln,{enumerable:!0,configurable:!0,writable:!0,value:Wr}):li[ln]=Wr;var He=(li,ln,Wr)=>Ww(li,typeof ln!="symbol"?ln+"":ln,Wr);function ln(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Wr(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Es={duration:.5,overwrite:!1,delay:0},vc,cn,Dt,ci=1e8,Et=1/ci,xc=Math.PI*2,F_=xc/4,B_=0,Nf=Math.sqrt,k_=Math.cos,z_=Math.sin,nn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},yc=function(e){return typeof e>"u"},Ii=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},Sc=function(){return typeof window<"u"},Ba=function(e){return zt(e)||nn(e)},Uf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,H_=/random\([^)]+\)/g,V_=/,\s*/g,Of=/(?:-?\.?\d|\.)+/gi,Ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bf=/[+-]=-?[.\d]+/,G_=/[^,'"\[\]\s]+/gi,W_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Ni,Tc,Ec,Xn={},ka={},kf,zf=function(e){return(ka=As(e,Xn))&&Fn},bc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Co=function(e,t){return!t&&console.warn(e)},Hf=function(e,t){return e&&(Xn[e]=t)&&ka&&(ka[e]=t)||Xn},Po=function(){return 0},X_={suppressEvents:!0,isStart:!0,kill:!1},za={suppressEvents:!0,kill:!1},q_={suppressEvents:!0},wc={},mr=[],Ac={},Vf,qn={},Rc={},Gf=30,Ha=[],Cc="",Pc=function(e){var t=e[0],n,i;if(Ii(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ha.length;i--&&!Ha[i].targetTest(t););n=Ha[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new vd(e[i],n)))||e.splice(i,1);return e},Xr=function(e){return e._gsap||Pc(hi(e))[0]._gsap},Wf=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():yc(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},ws=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Y_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Va=function(){var e=mr.length,t=mr.slice(0),n,i;for(Ac={},mr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lc=function(e){return!!(e._initted||e._startAt||e.add)},Xf=function(e,t,n,i){mr.length&&!cn&&Va(),e.render(t,n,!!(cn&&t<0&&Lc(e))),mr.length&&!cn&&Va()},qf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(G_).length<2?t:nn(e)?e.trim():e},Yf=function(e){return e},Yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},As=function(e,t){for(var n in t)e[n]=t[n];return e},$f=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ii(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ga=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Lo=function(e){var t=e.parent||Nt,n=e.keyframes?$_(hn(e.keyframes)):Yn;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},j_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jf=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Wa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},gr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},K_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Dc=function(e,t,n,i){return e._startAt&&(cn?e._startAt.revert(za):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Z_=function r(e){return!e||e._ts&&r(e.parent)},Kf=function(e){return e._repeat?Rs(e._tTime,e=e.duration()+e._rDelay)*e:0},Rs=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},Xa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},qa=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Ya=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),qa(e),n._dirty||qr(n,e)),e},Zf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Xa(e.rawTime(),t),(!t._dur||Io(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Ui=function(e,t,n,i){return t.parent&&gr(t),t._start=Ut((Ki(n)?n:n||e!==Nt?ui(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jf(e,t,"_first","_last",e._sort?"_start":0),Ic(t)||(e._recent=t),i||Zf(e,t),e._ts<0&&Ya(e,e._tTime),e},Jf=function(e,t){return(Xn.ScrollTrigger||bc("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},Qf=function(e,t,n,i,s){if(Vc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vf!==jn.frame)return mr.push(e),e._lazy=[s,i],1},J_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ic=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Q_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&J_(e)&&!(!e._initted&&Ic(e))||(e._ts<0||e._dp._ts<0)&&!Ic(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=Io(0,e._tDur,t),u=Rs(c,a),e._yoyo&&u&1&&(o=1-o),u!==Rs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||cn||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&Qf(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Dc(e,t,n,!0),e._onUpdate&&!n&&$n(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&$n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&gr(e,1),!n&&!cn&&($n(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},e0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Cs=function(e,t,n,i){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Ya(e,e._tTime=e._tDur*a),e.parent&&qa(e),n||qr(e.parent,e),e},ed=function(e){return e instanceof yn?qr(e):Cs(e,e._dur)},t0={_start:0,endTime:Po,totalDuration:Po},ui=function r(e,t,n){var i=e.labels,s=e._recent||t0,o=e.duration()>=ci?s.endTime(!1):e._dur,a,c,l;return nn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(hn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Do=function(e,t,n){var i=Ki(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Nn(c.vars.inherit)&&c.parent;o.immediateRender=Nn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},_r=function(e,t){return e||e===0?t(e):t},Io=function(e,t,n){return n<e?e:n>t?t:n},fn=function(e,t){return!nn(e)||!(t=W_.exec(e))?"":t[1]},n0=function(e,t,n){return _r(n,function(i){return Io(e,t,i)})},Nc=[].slice,td=function(e,t){return e&&Ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ii(e[0]))&&!e.nodeType&&e!==Ni},i0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||td(i,1)?(s=n).push.apply(s,hi(i)):n.push(i)})||n},hi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):nn(e)&&!n&&(Tc||!Ls())?Nc.call((t||Ec).querySelectorAll(e),0):hn(e)?i0(e,n):td(e)?Nc.call(e,0):e?[e]:[]},Uc=function(e){return e=hi(e)[0]||Co("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hi(t,n.querySelectorAll?n:n===e?Co("Invalid scope")||Ec.createElement("div"):e)}},nd=function(e){return e.sort(function(){return .5-Math.random()})},id=function(e){if(zt(e))return e;var t=Ii(e)?e:{each:e},n=Yr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return nn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,M,y,v,T,b,E,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ci])[1],!S){for(E=-ci;E<(E=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=c?Math.min(S,_)*u-.5:i%S,M=S===ci?0:c?_*h/S-.5:i/S|0,E=0,C=ci,b=0;b<_;b++)y=b%S-p,v=M-(b/S|0),m[b]=T=l?Math.abs(l==="y"?v:y):Nf(y*y+v*v),T>E&&(E=T),T<C&&(C=T);i==="random"&&nd(m),m.max=E-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:l?l==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=fn(t.amount||t.each)||0,n=n&&_<0?md(n):n}return _=(m[f]-m.min)/m.max||0,Ut(m.b+(n?n(_):_)*m.v)+m.u}},Oc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ki(n)?0:fn(n))}},rd=function(e,t){var n=hn(e),i,s;return!n&&Ii(e)&&(i=n=e.radius||ci,e.values?(e=hi(e.values),(s=!Ki(e[0]))&&(i*=i)):e=Oc(e.increment)),_r(t,n?zt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=ci,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-a),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:o,s||u===o||Ki(o)?u:u+fn(o)}:Oc(e))},sd=function(e,t,n,i){return _r(hn(e)?!t:n===!0?!!(n=0):!i,function(){return hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},r0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},s0=function(e,t){return function(n){return e(parseFloat(n))+(t||fn(n))}},o0=function(e,t,n){return ad(e,t,0,1,n)},od=function(e,t,n){return _r(n,function(i){return e[~~t(i)]})},a0=function r(e,t,n){var i=t-e;return hn(e)?od(e,r(0,e.length),t):_r(n,function(s){return(i+(s-e)%i)%i+e})},l0=function r(e,t,n){var i=t-e,s=i*2;return hn(e)?od(e,r(0,e.length-1),t):_r(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},No=function(e){return e.replace(H_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(V_);return sd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ad=function(e,t,n,i,s){var o=t-e,a=i-n;return _r(s,function(c){return n+((c-e)/o*a||0)})},c0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=nn(e),a={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(hn(e)&&!hn(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(r(e[l-1],e[l]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=As(hn(e)?[]:{},e));if(!u){for(c in t)zc.call(a,e,c,"get",t[c]);s=function(g){return Xc(g,a)||(o?e.p:e)}}}return _r(n,s)},ld=function(e,t,n){var i=e.labels,s=ci,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},$n=function(e,t,n){var i=e.vars,s=i[t],o=Dt,a=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&mr.length&&Va(),a&&(Dt=a),u=c?s.apply(l,c):s.call(l),Dt=o,u},Uo=function(e){return gr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!cn),e.progress()<1&&$n(e,"onInterrupt"),e},Ps,cd=[],ud=function(e){if(e)if(e=!e.name&&e.default||e,Sc()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Po,render:Xc,add:zc,kill:b0,modifier:E0,rawVars:0},o={targetTest:0,get:0,getSetter:Wc,aliases:{},register:0};if(Ls(),e!==i){if(qn[t])return;Yn(i,Yn(Ga(e,s),o)),As(i.prototype,As(s,Ga(e,o))),qn[i.prop=t]=i,e.targetTest&&(Ha.push(i),wc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hf(t,i),e.register&&e.register(Fn,i,On)}else cd.push(e)},bt=255,Oo={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Fc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},hd=function(e,t,n){var i=e?Ki(e)?[e>>16,e>>8&bt,e&bt]:0:Oo.black,s,o,a,c,l,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Oo[e])i=Oo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Of),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Fc(c+1/3,s,o),i[1]=Fc(c,s,o),i[2]=Fc(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Ff),n&&i.length<4&&(i[3]=1),i}else i=e.match(Of)||Oo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/bt,o=i[1]/bt,a=i[2]/bt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},fd=function(e){var t=[],n=[],i=-1;return e.split(vr).forEach(function(s){var o=s.match(bs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},dd=function(e,t,n){var i="",s=(e+i).match(vr),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(f){return(f=hd(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=fd(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(vr,"1").split(bs),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(vr),h=l.length-1;a<h;a++)i+=l[a]+s[a];return i+l[h]},vr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Oo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),u0=/hsl[a]?\(/,pd=function(e){var t=e.join(" "),n;if(vr.lastIndex=0,vr.test(t))return n=u0.test(t),e[1]=dd(e[1],n),e[0]=dd(e[0],n,fd(e[1])),!0},Fo,jn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,u,h,f,d,g=function _(m){var p=r()-i,M=m===!0,y,v,T,b;if((p>e||p<0)&&(n+=p-t),i+=p,T=i-n,y=T-o,(y>0||M)&&(b=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=y+(y>=s?4:s-y),v=1),M||(c=l(_)),v)for(d=0;d<a.length;d++)a[d](T,f,b,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){kf&&(!Tc&&Sc()&&(Ni=Tc=window,Ec=Ni.document||{},Xn.gsap=Fn,(Ni.gsapVersions||(Ni.gsapVersions=[])).push(Fn.version),zf(ka||Ni.GreenSockGlobals||!Ni.gsap&&Ni||{}),cd.forEach(ud)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Fo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Fo=0,l=Po},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var y=p?function(v,T,b,E){m(v,T,b,E),h.remove(y)}:m;return h.remove(m),a[M?"unshift":"push"](y),Ls(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Ls=function(){return!Fo&&jn.wake()},dt={},h0=/^[\d.\-M][\d.\-,\s]/,f0=/["']/g,d0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(f0,"").trim():+l,i=c.substr(a+1).trim();return t},p0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},m0=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[d0(t[1])]:p0(e).split(",").map(qf)):dt._CE&&h0.test(e)?dt._CE("",e):n},md=function(e){return function(t){return 1-e(1-t)}},gd=function r(e,t){for(var n=e._first,i;n;)n instanceof yn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Yr=function(e,t){return e&&(zt(e)?e:dt[e]||m0(e))||t},$r=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Un(e,function(a){dt[a]=Xn[a]=s,dt[o=a.toLowerCase()]=n;for(var c in s)dt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=dt[a+"."+c]=s[c]}),s},_d=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/xc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*z_((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:_d(a);return s=xc/s,c.config=function(l,u){return r(e,l,u)},c},kc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:_d(n);return i.config=function(s){return r(e,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;$r(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),dt.Linear.easeNone=dt.none=dt.Linear.easeIn,$r("Elastic",Bc("in"),Bc("out"),Bc()),function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};$r("Bounce",function(o){return 1-s(1-o)},s)}(7.5625,2.75),$r("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)}),$r("Circ",function(r){return-(Nf(1-r*r)-1)}),$r("Sine",function(r){return r===1?1:-k_(r*F_)+1}),$r("Back",kc("in"),kc("out"),kc()),dt.SteppedEase=dt.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((i*Io(0,o,a)|0)+s)*n}}},Es.ease=dt["quad.out"],Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Cc+=r+","+r+"Params,"});var vd=function(e,t){this.id=B_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Wf,this.set=t?t.getSetter:Wc},Bo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cs(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Fo||jn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Cs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ls(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ya(this,n),!s._dp||s.parent||Zf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Kf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Kf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Rs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Xa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(Io(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),qa(this),K_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ls(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ui(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=q_);var i=cn;return cn=n,Lc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ed(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ed(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ui(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=zt(n)?n:Yf,c=function(){var u=i.then;i.then=null,s&&s(),zt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){Uo(this)},r}();Yn(Bo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var yn=function(r){Wr(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Nn(n.sortChildren),Nt&&Ui(n.parent||Nt,ln(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jf(ln(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Do(0,arguments,this),this},t.from=function(i,s,o){return Do(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Do(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(i,s,ui(this,o),1),this},t.call=function(i,s,o){return Ui(this,qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new qt(i,o,ui(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,u){return o.runBackwards=1,Lo(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,s,o,a,c,l,u)},t.staggerFromTo=function(i,s,o,a,c,l,u,h){return a.startAt=o,Lo(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,s,a,c,l,u,h)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Ut(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,g,_,m,p,M,y,v,T,b,E;if(this!==Nt&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,y=this._ts,p=!y,h&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Ut(u%m),u===c?(_=this._repeat,f=l):(T=Ut(u/m),_=~~T,_&&_===T&&(f=l,_--),f>l&&(f=l)),T=Rs(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),b&&_&1&&(f=l-f,E=1),_!==T&&!this._lock){var C=b&&T&1,S=C===(b&&_&1);if(_<T&&(C=!C),a=C?0:u%l?l:u,this._lock=1,this.render(a||(E?0:Ut(_*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&$n(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,a=C?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;gd(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=e0(this,Ut(a),Ut(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&l&&!s&&!T&&($n(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-Et);break}}d=g}else{d=this._last;for(var x=i<0?i:f;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||cn&&Lc(d)),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=x?-Et:Et);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-Et)._zTime=f>=a?1:-1,this._ts))return this._start=v,qa(this),this.render(i,s,o);this._onUpdate&&!s&&$n(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&gr(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&($n(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ki(s)||(s=ui(this,s,i)),!(i instanceof Bo)){if(hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(nn(i))return this.addLabel(i,s);if(zt(i))i=qt.delayedCall(0,i);else return this}return this!==i?Ui(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ci);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof qt?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return nn(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&Wa(this,i),i===this._recent&&(this._recent=this._last),qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ui(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=qt.delayedCall(0,s||Po,o);return a.data="isPause",this._hasPause=1,Ui(this,a,ui(this,i))},t.removePause=function(i){var s=this._first;for(i=ui(this,i);s;)s._start===i&&s.data==="isPause"&&gr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)xr!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=hi(i),c=this._first,l=Ki(s),u;c;)c instanceof qt?Y_(c._targets,a)&&(l?(!xr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ui(o,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,g=qt.to(o,Yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==m&&Cs(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Yn({startAt:{time:ui(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ld(this,ui(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ld(this,ui(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,c=this.labels,l;for(i=Ut(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=ci,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ui(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ut(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Cs(o,o===Nt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Nt._ts&&(Xf(Nt,Xa(i,Nt)),Vf=jn.frame),jn.frame>=Gf){Gf+=Wn.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&Wn.autoSleep&&jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jn.sleep()}}},e}(Bo);Yn(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var g0=function(e,t,n,i,s,o,a){var c=new On(this._pt,e,t,0,1,Ed,null,s),l=0,u=0,h,f,d,g,_,m,p,M;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=No(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(Mc)||[];h=Mc.exec(i);)g=h[0],_=i.substring(l,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ws(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},l=Mc.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Bf.test(i)||p)&&(c.e=0),this._pt=c,c},zc=function(e,t,n,i,s,o,a,c,l,u){zt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:zt(h)?l?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=zt(h)?l?S0:Md:Gc,g;if(nn(i)&&(~i.indexOf("random(")&&(i=No(i)),i.charAt(1)==="="&&(g=ws(f,i)+(fn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Hc)return!isNaN(f*i)&&i!==""?(g=new On(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?T0:Td,0,d),l&&(g.fp=l),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&bc(t,i),g0.call(this,e,t,f,i,d,c||Wn.stringFilter,l))},_0=function(e,t,n,i,s){if(zt(e)&&(e=ko(e,s,t,n,i)),!Ii(e)||e.style&&e.nodeType||hn(e)||Uf(e))return nn(e)?ko(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ko(e[a],s,t,n,i);return o},xd=function(e,t,n,i,s,o){var a,c,l,u;if(qn[e]&&(a=new qn[e]).init(s,a.rawVars?t[e]:_0(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new On(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ps))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},xr,Hc,Vc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!vc,v=e.timeline,T,b,E,C,S,x,w,P,U,H,F,N,k;if(v&&(!f||!s)&&(s="none"),e._ease=Yr(s,Es.ease),e._yEase=h?md(Yr(h===!0?s:h,Es.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(P=m[0]?Xr(m[0]).harness:0,N=P&&i[P.prop],T=Ga(i,wc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?za:X_),_._lazy=0),o){if(gr(e._startAt=qt.set(m,Yn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Nn(c),startAt:null,delay:0,onUpdate:l&&function(){return $n(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn||!a&&!d)&&e._startAt.revert(za),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),E=Yn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Nn(c),immediateRender:a,stagger:0,parent:p},T),N&&(E[P.prop]=N),gr(e._startAt=qt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn?e._startAt.revert(za):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Nn(c)||c&&!g,b=0;b<m.length;b++){if(S=m[b],w=S._gsap||Pc(m)[b]._gsap,e._ptLookup[b]=H={},Ac[w.id]&&mr.length&&Va(),F=M===m?b:M.indexOf(S),P&&(U=new P).init(S,N||T,e,F,M)!==!1&&(e._pt=C=new On(e._pt,S,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(B){H[B]=C}),U.priority&&(x=1)),!P||N)for(E in T)qn[E]&&(U=xd(E,T,e,F,S,M))?U.priority&&(x=1):H[E]=C=zc.call(e,S,E,"get",T[E],F,M,0,i.stringFilter);e._op&&e._op[b]&&e.kill(S,e._op[b]),y&&e._pt&&(xr=e,Nt.killTweensOf(S,H,e.globalTime(t)),k=!e.parent,xr=0),e._pt&&c&&(Ac[w.id]=1)}x&&bd(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!k,f&&t<=0&&v.render(ci,!0,!0)},v0=function(e,t,n,i,s,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Hc=1,e.vars[t]="+=0",Vc(e,a),Hc=0,c?Co(t+" not eligible for reset"):1;l.push(u)}for(d=l.length;d--;)h=l[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Vt(n)+fn(h.e)),h.b&&(h.b=u.s+fn(h.b))},x0=function(e,t){var n=e[0]?Xr(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=As({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},y0=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(hn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ko=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?No(e):e},yd=Cc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Sd={};Un(yd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Sd[r]=1});var qt=function(r){Wr(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Lo(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,M=i.parent||Nt,y=(hn(n)||Uf(n)?Ki(n[0]):"length"in i)?[n]:hi(n),v,T,b,E,C,S,x,w;if(a._targets=y.length?Pc(y):Co("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ba(l)||Ba(u)){if(i=a.vars,v=a.timeline=new yn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:y}),v.kill(),v.parent=v._dp=ln(a),v._start=0,f||Ba(l)||Ba(u)){if(E=y.length,x=f&&id(f),Ii(f))for(C in f)~yd.indexOf(C)&&(w||(w={}),w[C]=f[C]);for(T=0;T<E;T++)b=Ga(i,Sd),b.stagger=0,p&&(b.yoyoEase=p),w&&As(b,w),S=y[T],b.duration=+ko(l,ln(a),T,S,y),b.delay=(+ko(u,ln(a),T,S,y)||0)-a._delay,!f&&E===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),v.to(S,b,x?x(T,S,y):0),v._ease=dt.none;v.duration()?l=u=0:a.timeline=0}else if(g){Lo(Yn(v.vars.defaults,{ease:"none"})),v._ease=Yr(g.ease||i.ease||"none");var P=0,U,H,F;if(hn(g))g.forEach(function(N){return v.to(y,N,">")}),v.duration();else{b={};for(C in g)C==="ease"||C==="easeEach"||y0(C,g[C],b,g.easeEach);for(C in b)for(U=b[C].sort(function(N,k){return N.t-k.t}),P=0,T=0;T<U.length;T++)H=U[T],F={ease:H.e,duration:(H.t-(T?U[T-1].t:0))/100*l},F[C]=H.v,v.to(y,F,P),P+=F.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||a.duration(l=v.duration())}else a.timeline=0;return d===!0&&!vc&&(xr=ln(a),Nt.killTweensOf(y),xr=0),Ui(M,ln(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!g&&a._start===Ut(M._time)&&Nn(h)&&Z_(ln(a))&&M.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-u)||0)),m&&Jf(ln(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Et&&!u?c:i<Et?0:i,f,d,g,_,m,p,M,y,v;if(!l)Q_(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Ut(h%_),h===c?(g=this._repeat,f=l):(m=Ut(h/_),g=~~m,g&&g===m?(f=l,g--):f>l&&(f=l)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=l-f),m=Rs(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(y&&this._yEase&&gd(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qf(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/l),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!m&&($n(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Dc(this,i,s,o),$n(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&$n(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Dc(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&gr(this,1),!s&&!(u&&!a)&&(h||a||p)&&($n(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,c){Fo||jn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Vc(this,l),u=this._ease(l/this._dur),v0(this,i,s,o,a,u,l,c)?this.resetTo(i,s,o,a,1):(Ya(this,0),this.parent||jf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Uo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,xr&&xr.vars.overwrite!==!0)._first||Uo(this),this.parent&&o!==this.timeline.totalDuration()&&Cs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?hi(i):a,l=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&j_(a,c))return s==="all"&&(this._pt=0),Uo(this);for(h=this._op=this._op||[],s!=="all"&&(nn(s)&&(_={},Un(s,function(M){return _[M]=1}),s=_),s=x0(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){f=l[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Wa(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Uo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Do(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Do(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Nt.killTweensOf(i,s,o)},e}(Bo);Yn(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Un("staggerTo,staggerFrom,staggerFromTo",function(r){qt[r]=function(){var e=new yn,t=Nc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Gc=function(e,t,n){return e[t]=n},Md=function(e,t,n){return e[t](n)},S0=function(e,t,n,i){return e[t](i.fp,n)},M0=function(e,t,n){return e.setAttribute(t,n)},Wc=function(e,t){return zt(e[t])?Md:yc(e[t])&&e.setAttribute?M0:Gc},Td=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},T0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ed=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Xc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},E0=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},b0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},w0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},bd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},On=function(){function r(t,n,i,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Td,this.d=c||this,this.set=l||Gc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=w0,this.m=n,this.mt=s,this.tween=i},r}();Un(Cc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return wc[r]=1}),Xn.TweenMax=Xn.TweenLite=qt,Xn.TimelineLite=Xn.TimelineMax=yn,Nt=new yn({sortChildren:!1,defaults:Es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Wn.stringFilter=pd;var jr=[],$a={},A0=[],wd=0,R0=0,qc=function(e){return($a[e]||A0).map(function(t){return t()})},Yc=function(){var e=Date.now(),t=[];e-wd>2&&(qc("matchMediaInit"),jr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=Ni.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),qc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),wd=e,qc("matchMedia"))},Ad=function(){function r(t,n){this.selector=n&&Uc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=R0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var o=this,a=function(){var l=Dt,u=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=Uc(s)),Dt=o,h=i.apply(o,arguments),zt(h)&&o._r.push(h),Dt=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===zt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof yn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof qt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=jr.length;o--;)jr[o].id===this.id&&jr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),C0=function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ii(n)||(n={matches:n});var o=new Ad(0,s||this.scope),a=o.conditions={},c,l,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Ni.matchMedia(n[l]),c&&(jr.indexOf(o)<0&&jr.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Yc):c.addEventListener("change",Yc)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ja={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ud(i)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=hi(e)[0]);var s=Xr(e||{}).get,o=n?Yf:qf;return n==="native"&&(n=""),e&&(t?o((qn[t]&&qn[t].get||s)(e,t,n,i)):function(a,c,l){return o((qn[a]&&qn[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=hi(e),e.length>1){var i=e.map(function(u){return Fn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=qn[t],a=Xr(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;Ps._pt=0,h.init(e,n?u+n:u,Ps,0,[e]),h.render(1,h),Ps._pt&&Xc(1,Ps)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Fn.to(e,Yn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,Es.ease)),$f(Es,e||{})},config:function(e){return $f(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!Xn[a]&&Co(t+" effect requires "+a+" plugin.")}),Rc[t]=function(a,c,l){return n(hi(a),Yn(c||{},s),l)},o&&(yn.prototype[t]=function(a,c,l){return this.add(Rc[t](a,Ii(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){dt[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):dt},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new yn(e),i,s;for(n.smoothChildTiming=Nn(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Ui(n,i,i._start-i._delay),i=s;return Ui(Nt,n,0),n},context:function(e,t){return e?new Ad(e,t):Dt},matchMedia:function(e){return new C0(e)},matchMediaRefresh:function(){return jr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Yc()},addEventListener:function(e,t){var n=$a[e]||($a[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=$a[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:a0,wrapYoyo:l0,distribute:id,random:sd,snap:rd,normalize:o0,getUnit:fn,clamp:n0,splitColor:hd,toArray:hi,selector:Uc,mapRange:ad,pipe:r0,unitize:s0,interpolate:c0,shuffle:nd},install:zf,effects:Rc,ticker:jn,updateRoot:yn.updateRoot,plugins:qn,globalTimeline:Nt,core:{PropTween:On,globals:Hf,Tween:qt,Timeline:yn,Animation:Bo,getCache:Xr,_removeLinkedListItem:Wa,reverting:function(){return cn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return vc=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ja[r]=qt[r]}),jn.add(yn.updateRoot),Ps=ja.to({},{duration:0});var P0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},L0=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=P0(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},$c=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(nn(s)&&(c={},Un(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}L0(a,s)}}}},Fn=ja.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$c("roundProps",Oc),$c("modifiers"),$c("snap",rd))||ja;qt.version=yn.version=Fn.version="3.14.2",kf=1,Sc()&&Ls(),dt.Power0,dt.Power1,dt.Power2,dt.Power3,dt.Power4,dt.Linear,dt.Quad,dt.Cubic,dt.Quart,dt.Quint,dt.Strong,dt.Elastic,dt.Back,dt.SteppedEase,dt.Bounce,dt.Sine,dt.Expo,dt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rd,yr,Ds,jc,Kr,Cd,Kc,D0=function(){return typeof window<"u"},Zi={},Zr=180/Math.PI,Is=Math.PI/180,Ns=Math.atan2,Pd=1e8,Zc=/([A-Z])/g,I0=/(left|right|width|margin|padding|x)/i,N0=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},U0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},O0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},F0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},B0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ld=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},k0=function(e,t,n){return e.style[t]=n},z0=function(e,t,n){return e.style.setProperty(t,n)},H0=function(e,t,n){return e._gsap[t]=n},V0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},G0=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},W0=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ot="transform",Bn=Ot+"Origin",X0=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ji(i,a)}):this.tfm[e]=o.x?o[e]:Ji(i,e),e===Bn&&(this.tfm.zOrigin=o.zOrigin);else return Oi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},Id=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},q0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Zc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Kc(),(!s||!s.isStart)&&!n[Ot]&&(Id(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Nd=function(e,t){var n={target:e,props:[],revert:q0,save:X0};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ud,Qc=function(e,t){var n=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return n&&n.style?n:yr.createElement(e)},Kn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Zc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Us(t)||t,1)||""},Od="O,Moz,ms,Ms,Webkit".split(","),Us=function(e,t,n){var i=t||Kr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Od[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Od[o]:"")+e},eu=function(){D0()&&window.document&&(Rd=window,yr=Rd.document,Ds=yr.documentElement,Kr=Qc("div")||{style:{}},Qc("div"),Ot=Us(Ot),Bn=Ot+"Origin",Kr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ud=!!Us("perspective"),Kc=Fn.core.reverting,jc=1)},Fd=function(e){var t=e.ownerSVGElement,n=Qc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ds.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ds.removeChild(n),s},Bd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},kd=function(e){var t,n;try{t=e.getBBox()}catch{t=Fd(e),n=1}return t&&(t.width||t.height)||n||(t=Fd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Bd(e,["x","cx","x1"])||0,y:+Bd(e,["y","cy","y1"])||0,width:0,height:0}:t},zd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&kd(e))},Sr=function(e,t){if(t){var n=e.style,i;t in Zi&&t!==Bn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Zc,"-$1").toLowerCase())):n.removeAttribute(t)}},Mr=function(e,t,n,i,s,o){var a=new On(e._pt,t,n,0,1,o?Dd:Ld);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Hd={deg:1,rad:1,turn:1},Y0={grid:1,flex:1},Tr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Kr.style,c=I0.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Hd[i]||Hd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&zd(e),(d||o==="%")&&(Zi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[u],Vt(d?s/g*h:s/100*g);if(a[c?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===yr||!_.appendChild)&&(_=yr.body),m=_._gsap,m&&d&&m.width&&c&&m.time===jn.time&&!m.uncache)return Vt(s/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:Sr(e,t)}else(d||o==="%")&&!Y0[Kn(_,"display")]&&(a.position=Kn(e,"position")),_===e&&(a.position="static"),_.appendChild(Kr),g=Kr[u],_.removeChild(Kr),a.position="absolute";return c&&d&&(m=Xr(_),m.time=jn.time,m.width=_[u]),Vt(f?g*s/h:g&&s?h/g*s:0)},Ji=function(e,t,n,i){var s;return jc||eu(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zi[t]&&t!=="transform"?(s=Ho(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Za(Kn(e,Bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ka[t]&&Ka[t](e,t,n)||Kn(e,t)||Wf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,n)+n:s},$0=function(e,t,n,i){if(!n||n==="none"){var s=Us(t,e,1),o=s&&Kn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Kn(e,"borderTopColor"))}var a=new On(this._pt,e.style,t,0,1,Ed),c=0,l=0,u,h,f,d,g,_,m,p,M,y,v,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Kn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Kn(e,t)||i,_?e.style[t]=_:Sr(e,t)),u=[n,i],pd(u),n=u[0],i=u[1],f=n.match(bs)||[],T=i.match(bs)||[],T.length){for(;h=bs.exec(i);)m=h[0],M=i.substring(c,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[l++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=ws(d,m)+v),p=parseFloat(m),y=m.substr((p+"").length),c=bs.lastIndex-y.length,y||(y=y||Wn.units[t]||v,c===i.length&&(i+=y,a.e+=y)),v!==y&&(d=Tr(e,t,_,y)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Dd:Ld;return Bf.test(i)&&(a.e=0),this._pt=a,a},Vd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},j0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Vd[n]||n,t[1]=Vd[i]||i,t.join(" ")},K0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Zi[a]&&(c=1,a=a==="transformOrigin"?Bn:Ot),Sr(n,a);c&&(Sr(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ho(n,1),o.uncache=1,Id(i)))}},Ka={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new On(e._pt,t,n,0,0,K0);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},zo=[1,0,0,1,0,0],Gd={},Wd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xd=function(e){var t=Kn(e,Ot);return Wd(t)?zo:t.substr(7).match(Ff).map(Vt)},tu=function(e,t){var n=e._gsap||Xr(e),i=e.style,s=Xd(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?zo:s):(s===zo&&!e.offsetParent&&e!==Ds&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,Ds.appendChild(e)),s=Xd(e),c?i.display=c:Sr(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nu=function(e,t,n,i,s,o){var a=e._gsap,c=s||tu(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=c[0],g=c[1],_=c[2],m=c[3],p=c[4],M=c[5],y=t.split(" "),v=parseFloat(y[0])||0,T=parseFloat(y[1])||0,b,E,C,S;n?c!==zo&&(E=d*m-g*_)&&(C=v*(m/E)+T*(-_/E)+(_*M-m*p)/E,S=v*(-g/E)+T*(d/E)-(d*M-g*p)/E,v=C,T=S):(b=kd(e),v=b.x+(~y[0].indexOf("%")?v/100*b.width:v),T=b.y+(~(y[1]||y[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(p=v-l,M=T-u,a.xOffset=h+(p*d+M*_)-p,a.yOffset=f+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Bn]="0px 0px",o&&(Mr(o,a,"xOrigin",l,v),Mr(o,a,"yOrigin",u,T),Mr(o,a,"xOffset",h,a.xOffset),Mr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+T)},Ho=function(e,t){var n=e._gsap||new vd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Kn(e,Bn)||"0",u,h,f,d,g,_,m,p,M,y,v,T,b,E,C,S,x,w,P,U,H,F,N,k,B,Q,I,se,Me,Fe,le,pe;return u=h=f=_=m=p=M=y=v=0,d=g=1,n.svg=!!(e.getCTM&&zd(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ot]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ot]!=="none"?c[Ot]:"")),i.scale=i.rotate=i.translate="none"),E=tu(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),l=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),nu(e,k||l,!!k||n.originIsAbsolute,n.smooth!==!1,E)),T=n.xOrigin||0,b=n.yOrigin||0,E!==zo&&(w=E[0],P=E[1],U=E[2],H=E[3],u=F=E[4],h=N=E[5],E.length===6?(d=Math.sqrt(w*w+P*P),g=Math.sqrt(H*H+U*U),_=w||P?Ns(P,w)*Zr:0,M=U||H?Ns(U,H)*Zr+_:0,M&&(g*=Math.abs(Math.cos(M*Is))),n.svg&&(u-=T-(T*w+b*U),h-=b-(T*P+b*H))):(pe=E[6],Fe=E[7],I=E[8],se=E[9],Me=E[10],le=E[11],u=E[12],h=E[13],f=E[14],C=Ns(pe,Me),m=C*Zr,C&&(S=Math.cos(-C),x=Math.sin(-C),k=F*S+I*x,B=N*S+se*x,Q=pe*S+Me*x,I=F*-x+I*S,se=N*-x+se*S,Me=pe*-x+Me*S,le=Fe*-x+le*S,F=k,N=B,pe=Q),C=Ns(-U,Me),p=C*Zr,C&&(S=Math.cos(-C),x=Math.sin(-C),k=w*S-I*x,B=P*S-se*x,Q=U*S-Me*x,le=H*x+le*S,w=k,P=B,U=Q),C=Ns(P,w),_=C*Zr,C&&(S=Math.cos(C),x=Math.sin(C),k=w*S+P*x,B=F*S+N*x,P=P*S-w*x,N=N*S-F*x,w=k,F=B),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Vt(Math.sqrt(w*w+P*P+U*U)),g=Vt(Math.sqrt(N*N+pe*pe)),C=Ns(F,N),M=Math.abs(C)>2e-4?C*Zr:0,v=le?1/(le<0?-le:le):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Wd(Kn(e,Ot)),k&&e.setAttribute("transform",k))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Vt(d),n.scaleY=Vt(g),n.rotation=Vt(_)+a,n.rotationX=Vt(m)+a,n.rotationY=Vt(p)+a,n.skewX=M+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bn]=Za(l)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?J0:Ud?qd:Z0,n.uncache=0,n},Za=function(e){return(e=e.split(" "))[0]+" "+e[1]},iu=function(e,t,n){var i=fn(t);return Vt(parseFloat(t)+parseFloat(Tr(e,"x",n+"px",i)))+i},Z0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qd(e,t)},Jr="0deg",Vo="0px",Qr=") ",qd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,y=n.zOrigin,v="",T=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==Jr||u!==Jr)){var b=parseFloat(u)*Is,E=Math.sin(b),C=Math.cos(b),S;b=parseFloat(h)*Is,S=Math.cos(b),o=iu(M,o,E*S*-y),a=iu(M,a,-Math.sin(b)*-y),c=iu(M,c,C*S*-y+y)}m!==Vo&&(v+="perspective("+m+Qr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(T||o!==Vo||a!==Vo||c!==Vo)&&(v+=c!==Vo||T?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Qr),l!==Jr&&(v+="rotate("+l+Qr),u!==Jr&&(v+="rotateY("+u+Qr),h!==Jr&&(v+="rotateX("+h+Qr),(f!==Jr||d!==Jr)&&(v+="skew("+f+", "+d+Qr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Qr),M.style[Ot]=v||"translate(0, 0)"},J0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,y=parseFloat(o),v=parseFloat(a),T,b,E,C,S;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Is,l*=Is,T=Math.cos(c)*h,b=Math.sin(c)*h,E=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(u*=Is,S=Math.tan(l-u),S=Math.sqrt(1+S*S),E*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),T*=S,b*=S)),T=Vt(T),b=Vt(b),E=Vt(E),C=Vt(C)):(T=h,C=f,b=E=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Tr(d,"x",o,"px"),v=Tr(d,"y",a,"px")),(g||_||m||p)&&(y=Vt(y+g-(g*T+_*E)+m),v=Vt(v+_-(g*b+_*C)+p)),(i||s)&&(S=d.getBBox(),y=Vt(y+i/100*S.width),v=Vt(v+s/100*S.height)),S="matrix("+T+","+b+","+E+","+C+","+y+","+v+")",d.setAttribute("transform",S),M&&(d.style[Ot]=S)},Q0=function(e,t,n,i,s){var o=360,a=nn(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Zr:1),l=c-i,u=i+l+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*Pd)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*Pd)%o-~~(l/o)*o)),e._pt=f=new On(e._pt,t,n,i,l,U0),f.e=u,f.u="deg",e._props.push(n),f},Yd=function(e,t){for(var n in t)e[n]=t[n];return e},ev=function(e,t,n){var i=Yd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,f,d,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=Ho(n,1),Sr(n,Ot),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ot],o[Ot]=t,a=Ho(n,1),o[Ot]=l);for(c in Zi)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(d=fn(l),g=fn(u),h=d!==g?Tr(n,c,l,g):parseFloat(l),f=parseFloat(u),e._pt=new On(e._pt,a,c,h,f-h,Jc),e._pt.u=g||0,e._props.push(c));Yd(a,i)};Un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ka[e>1?"border"+r:r]=function(a,c,l,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Ji(a,g,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(c,d,h)}});var $d={name:"css",register:eu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,f,d,g,_,m,p,M,y,v,T,b,E,C,S;jc||eu(),this.styles=this.styles||Nd(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(qn[_]&&xd(_,t,n,i,e,s)))){if(d=typeof u,g=Ka[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=No(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",vr.lastIndex=0,vr.test(l)||(m=fn(l),p=fn(u),p?m!==p&&(l=Tr(e,_,l,p)+p):m&&(u+=m)),this.add(a,"setProperty",l,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],nn(l)&&~l.indexOf("random(")&&(l=No(l)),fn(l+"")||l==="auto"||(l+=Wn.units[_]||fn(Ji(e,_))||""),(l+"").charAt(1)==="="&&(l=Ji(e,_))):l=Ji(e,_),f=parseFloat(l),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in Oi&&(_==="autoAlpha"&&(f===1&&Ji(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),Mr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Oi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Zi,y){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Kn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=Kn(e,"perspective"),x?e.style.perspective=x:Sr(e,"perspective")}h=parseFloat(u)}if(v||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ho(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,v=this._pt=new On(this._pt,a,Ot,0,1,T.renderTransform,T,0,-1),v.dep=1),_==="scale")this._pt=new On(this._pt,T,"scaleY",T.scaleY,(M?ws(T.scaleY,M+h):h)-T.scaleY||0,Jc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Bn,0,a[Bn]),u=j0(u),T.svg?nu(e,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&Mr(this,T,"zOrigin",T.zOrigin,p),Mr(this,a,_,Za(l),Za(u)));continue}else if(_==="svgOrigin"){nu(e,u,1,b,0,this);continue}else if(_ in Gd){Q0(this,T,_,f,M?ws(f,M+u):u);continue}else if(_==="smoothOrigin"){Mr(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){ev(this,u,e);continue}}else _ in a||(_=Us(_)||_);if(y||(h||h===0)&&(f||f===0)&&!N0.test(u)&&_ in a)m=(l+"").substr((f+"").length),h||(h=0),p=fn(u)||(_ in Wn.units?Wn.units[_]:m),m!==p&&(f=Tr(e,_,l,p)),this._pt=new On(this._pt,y?T:a,_,f,(M?ws(f,M+h):h)-f,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?B0:Jc),this._pt.u=p||0,y&&S!==u?(this._pt.b=l,this._pt.e=S,this._pt.r=F0):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=O0);else if(_ in a)$0.call(this,e,_,l,M?M+u:u);else if(_ in e)this.add(e,_,l||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){bc(_,u);continue}y||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,l||e[_])),o.push(_)}}E&&bd(this)},render:function(e,t){if(t.tween._time||!Kc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ji,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in Zi&&t!==Bn&&(e._gsap.x||Ji(e,"x"))?n&&Cd===n?t==="scale"?V0:H0:(Cd=n||{})&&(t==="scale"?G0:W0):e.style&&!yc(e.style[t])?k0:~t.indexOf("-")?z0:Wc(e,t)},core:{_removeProperty:Sr,_getMatrix:tu}};Fn.utils.checkPrefix=Us,Fn.core.getStyleSaver=Nd,function(r,e,t,n){var i=Un(r+","+e+","+t,function(s){Zi[s]=1});Un(e,function(s){Wn.units[s]="deg",Gd[s]=1}),Oi[i[13]]=r+","+e,Un(n,function(s){var o=s.split(":");Oi[o[1]]=i[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"}),Fn.registerPlugin($d);var z=Fn.registerPlugin($d)||Fn;z.core.Tween;function tv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function nv(r,e,t){return e&&tv(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var un,Ja,Zn,Er,br,Os,jd,es,Go,Kd,Qi,Mi,Zd,Jd=function(){return un||typeof window<"u"&&(un=window.gsap)&&un.registerPlugin&&un},Qd=1,Fs=[],at=[],Fi=[],Wo=Date.now,ru=function(e,t){return t},iv=function(){var e=Go.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,at),i.push.apply(i,Fi),at=n,Fi=i,ru=function(o,a){return t[o](a)}},wr=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},Xo=function(e){return!!~Kd.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qa="scrollLeft",el="scrollTop",su=function(){return Qi&&Qi.isPressed||at.cache++},tl=function(e,t){var n=function i(s){if(s||s===0){Qd&&(Zn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),e(s),i.cacheID=at.cache,o&&ru("ss",s)}else(t||at.cache!==i.cacheID||ru("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Tn={s:Qa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tl(function(r){return arguments.length?Zn.scrollTo(r,Kt.sc()):Zn.pageXOffset||Er[Qa]||br[Qa]||Os[Qa]||0})},Kt={s:el,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Tn,sc:tl(function(r){return arguments.length?Zn.scrollTo(Tn.sc(),r):Zn.pageYOffset||Er[el]||br[el]||Os[el]||0})},kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||un.utils.toArray)(e)[0]||(typeof e=="string"&&un.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},rv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ar=function(e,t){var n=t.s,i=t.sc;Xo(e)&&(e=Er.scrollingElement||br);var s=at.indexOf(e),o=i===Kt.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||Sn(e,"scroll",su);var a=at[s+o],c=a||(at[s+o]=tl(wr(e,n),!0)||(Xo(e)?i:tl(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=un.getProperty(e,"scrollBehavior")==="smooth"),c},ou=function(e,t,n){var i=e,s=e,o=Wo(),a=o,c=t||50,l=Math.max(500,c*3),u=function(g,_){var m=Wo();_||m-o>c?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=Wo();return(g||g===0)&&g!==i&&u(g),o===a||p-a>l?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},qo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ep=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},tp=function(){Go=un.core.globals().ScrollTrigger,Go&&Go.core&&iv()},np=function(e){return un=e||Jd(),!Ja&&un&&typeof document<"u"&&document.body&&(Zn=window,Er=document,br=Er.documentElement,Os=Er.body,Kd=[Zn,Er,br,Os],un.utils.clamp,Zd=un.core.context||function(){},es="onpointerenter"in Os?"pointer":"mouse",jd=Gt.isTouch=Zn.matchMedia&&Zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=Gt.eventTypes=("ontouchstart"in br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Qd=0},500),tp(),Ja=1),Ja};Tn.op=Kt,at.cache=0;var Gt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ja||np(un)||console.warn("Please gsap.registerPlugin(Observer)"),Go||tp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,y=n.onPress,v=n.onRelease,T=n.onRight,b=n.onLeft,E=n.onUp,C=n.onDown,S=n.onChangeX,x=n.onChangeY,w=n.onChange,P=n.onToggleX,U=n.onToggleY,H=n.onHover,F=n.onHoverEnd,N=n.onMove,k=n.ignoreCheck,B=n.isNormalizer,Q=n.onGestureStart,I=n.onGestureEnd,se=n.onWheel,Me=n.onEnable,Fe=n.onDisable,le=n.onClick,pe=n.scrollSpeed,$=n.capture,j=n.allowClicks,oe=n.lockAxis,Y=n.onLockAxis;this.target=a=kn(a)||br,this.vars=n,d&&(d=un.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,pe=pe||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Zn.getComputedStyle(Os).lineHeight)||22);var K,re,Ne,L,Re,_e,me,V=this,Ke=0,we=0,Ge=n.passive||!u&&n.passive!==!1,Qe=Ar(a,Tn),mt=Ar(a,Kt),D=Qe(),A=mt(),q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Mi[0]==="pointerdown",te=Xo(a),ne=a.ownerDocument||Er,ee=[0,0,0],Ce=[0,0,0],fe=0,Ue=function(){return fe=Wo()},ye=function(Be,et){return(V.event=Be)&&d&&rv(Be.target,d)||et&&q&&Be.pointerType!=="touch"||k&&k(Be,et)},he=function(){V._vx.reset(),V._vy.reset(),re.pause(),h&&h(V)},xe=function(){var Be=V.deltaX=ep(ee),et=V.deltaY=ep(Ce),Te=Math.abs(Be)>=i,Ye=Math.abs(et)>=i;w&&(Te||Ye)&&w(V,Be,et,ee,Ce),Te&&(T&&V.deltaX>0&&T(V),b&&V.deltaX<0&&b(V),S&&S(V),P&&V.deltaX<0!=Ke<0&&P(V),Ke=V.deltaX,ee[0]=ee[1]=ee[2]=0),Ye&&(C&&V.deltaY>0&&C(V),E&&V.deltaY<0&&E(V),x&&x(V),U&&V.deltaY<0!=we<0&&U(V),we=V.deltaY,Ce[0]=Ce[1]=Ce[2]=0),(L||Ne)&&(N&&N(V),Ne&&(m&&Ne===1&&m(V),M&&M(V),Ne=0),L=!1),_e&&!(_e=!1)&&Y&&Y(V),Re&&(se(V),Re=!1),K=0},We=function(Be,et,Te){ee[Te]+=Be,Ce[Te]+=et,V._vx.update(Be),V._vy.update(et),l?K||(K=requestAnimationFrame(xe)):xe()},Oe=function(Be,et){oe&&!me&&(V.axis=me=Math.abs(Be)>Math.abs(et)?"x":"y",_e=!0),me!=="y"&&(ee[2]+=Be,V._vx.update(Be,!0)),me!=="x"&&(Ce[2]+=et,V._vy.update(et,!0)),l?K||(K=requestAnimationFrame(xe)):xe()},ve=function(Be){if(!ye(Be,1)){Be=qo(Be,u);var et=Be.clientX,Te=Be.clientY,Ye=et-V.x,Ve=Te-V.y,Ze=V.isDragging;V.x=et,V.y=Te,(Ze||(Ye||Ve)&&(Math.abs(V.startX-et)>=s||Math.abs(V.startY-Te)>=s))&&(Ne||(Ne=Ze?2:1),Ze||(V.isDragging=!0),Oe(Ye,Ve))}},je=V.onPress=function(Ae){ye(Ae,1)||Ae&&Ae.button||(V.axis=me=null,re.pause(),V.isPressed=!0,Ae=qo(Ae),Ke=we=0,V.startX=V.x=Ae.clientX,V.startY=V.y=Ae.clientY,V._vx.reset(),V._vy.reset(),Sn(B?a:ne,Mi[1],ve,Ge,!0),V.deltaX=V.deltaY=0,y&&y(V))},O=V.onRelease=function(Ae){if(!ye(Ae,1)){Mn(B?a:ne,Mi[1],ve,!0);var Be=!isNaN(V.y-V.startY),et=V.isDragging,Te=et&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ye=qo(Ae);!Te&&Be&&(V._vx.reset(),V._vy.reset(),u&&j&&un.delayedCall(.08,function(){if(Wo()-fe>300&&!Ae.defaultPrevented){if(Ae.target.click)Ae.target.click();else if(ne.createEvent){var Ve=ne.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,Zn,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),Ae.target.dispatchEvent(Ve)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&et&&!B&&re.restart(!0),Ne&&xe(),p&&et&&p(V),v&&v(V,Te)}},ue=function(Be){return Be.touches&&Be.touches.length>1&&(V.isGesturing=!0)&&Q(Be,V.isDragging)},de=function(){return(V.isGesturing=!1)||I(V)},be=function(Be){if(!ye(Be)){var et=Qe(),Te=mt();We((et-D)*pe,(Te-A)*pe,1),D=et,A=Te,h&&re.restart(!0)}},ce=function(Be){if(!ye(Be)){Be=qo(Be,u),se&&(Re=!0);var et=(Be.deltaMode===1?c:Be.deltaMode===2?Zn.innerHeight:1)*g;We(Be.deltaX*et,Be.deltaY*et,0),h&&!B&&re.restart(!0)}},ie=function(Be){if(!ye(Be)){var et=Be.clientX,Te=Be.clientY,Ye=et-V.x,Ve=Te-V.y;V.x=et,V.y=Te,L=!0,h&&re.restart(!0),(Ye||Ve)&&Oe(Ye,Ve)}},Le=function(Be){V.event=Be,H(V)},qe=function(Be){V.event=Be,F(V)},gt=function(Be){return ye(Be)||qo(Be,u)&&le(V)};re=V._dc=un.delayedCall(f||.25,he).pause(),V.deltaX=V.deltaY=0,V._vx=ou(0,50,!0),V._vy=ou(0,50,!0),V.scrollX=Qe,V.scrollY=mt,V.isDragging=V.isGesturing=V.isPressed=!1,Zd(this),V.enable=function(Ae){return V.isEnabled||(Sn(te?ne:a,"scroll",su),o.indexOf("scroll")>=0&&Sn(te?ne:a,"scroll",be,Ge,$),o.indexOf("wheel")>=0&&Sn(a,"wheel",ce,Ge,$),(o.indexOf("touch")>=0&&jd||o.indexOf("pointer")>=0)&&(Sn(a,Mi[0],je,Ge,$),Sn(ne,Mi[2],O),Sn(ne,Mi[3],O),j&&Sn(a,"click",Ue,!0,!0),le&&Sn(a,"click",gt),Q&&Sn(ne,"gesturestart",ue),I&&Sn(ne,"gestureend",de),H&&Sn(a,es+"enter",Le),F&&Sn(a,es+"leave",qe),N&&Sn(a,es+"move",ie)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=L=Ne=!1,V._vx.reset(),V._vy.reset(),D=Qe(),A=mt(),Ae&&Ae.type&&je(Ae),Me&&Me(V)),V},V.disable=function(){V.isEnabled&&(Fs.filter(function(Ae){return Ae!==V&&Xo(Ae.target)}).length||Mn(te?ne:a,"scroll",su),V.isPressed&&(V._vx.reset(),V._vy.reset(),Mn(B?a:ne,Mi[1],ve,!0)),Mn(te?ne:a,"scroll",be,$),Mn(a,"wheel",ce,$),Mn(a,Mi[0],je,$),Mn(ne,Mi[2],O),Mn(ne,Mi[3],O),Mn(a,"click",Ue,!0),Mn(a,"click",gt),Mn(ne,"gesturestart",ue),Mn(ne,"gestureend",de),Mn(a,es+"enter",Le),Mn(a,es+"leave",qe),Mn(a,es+"move",ie),V.isEnabled=V.isPressed=V.isDragging=!1,Fe&&Fe(V))},V.kill=V.revert=function(){V.disable();var Ae=Fs.indexOf(V);Ae>=0&&Fs.splice(Ae,1),Qi===V&&(Qi=0)},Fs.push(V),B&&Xo(a)&&(Qi=V),V.enable(_)},nv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Gt.version="3.14.2",Gt.create=function(r){return new Gt(r)},Gt.register=np,Gt.getAll=function(){return Fs.slice()},Gt.getById=function(r){return Fs.filter(function(e){return e.vars.id===r})[0]},Jd()&&un.registerPlugin(Gt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var De,Bs,lt,Rt,Jn,xt,au,nl,Yo,$o,jo,il,dn,rl,lu,En,ip,rp,ks,sp,cu,op,bn,uu,ap,lp,Rr,hu,fu,zs,du,Ko,pu,mu,sl=1,pn=Date.now,gu=pn(),fi=0,Zo=0,cp=function(e,t,n){var i=Qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},up=function(e,t){return t&&(!Qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},sv=function r(){return Zo&&requestAnimationFrame(r)},hp=function(){return rl=1},fp=function(){return rl=0},Bi=function(e){return e},Jo=function(e){return Math.round(e*1e5)/1e5||0},dp=function(){return typeof window<"u"},pp=function(){return De||dp()&&(De=window.gsap)&&De.registerPlugin&&De},ts=function(e){return!!~au.indexOf(e)},mp=function(e){return(e==="Height"?du:lt["inner"+e])||Jn["client"+e]||xt["client"+e]},gp=function(e){return wr(e,"getBoundingClientRect")||(ts(e)?function(){return vl.width=lt.innerWidth,vl.height=du,vl}:function(){return er(e)})},ov=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=wr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?mp(s):e["client"+s])||0}},av=function(e,t){return!t||~Fi.indexOf(e)?gp(e):function(){return vl}},ki=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=wr(e,n))?o()-gp(e)()[s]:ts(e)?(Jn[n]||xt[n])-mp(i):e[n]-e["offset"+i])},ol=function(e,t){for(var n=0;n<ks.length;n+=3)(!t||~t.indexOf(ks[n+1]))&&e(ks[n],ks[n+1],ks[n+2])},Qn=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},Qo=function(e){return typeof e=="number"},ns=function(e){return typeof e=="object"},ea=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},_u=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Hs=Math.abs,_p="left",vp="top",vu="right",xu="bottom",is="width",rs="height",ta="Right",na="Left",ia="Top",ra="Bottom",Yt="padding",di="margin",Vs="Width",yu="Height",Zt="px",pi=function(e){return lt.getComputedStyle(e)},lv=function(e){var t=pi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},xp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},er=function(e,t){var n=t&&pi(e)[lu]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},al=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},yp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},cv=function(e){return function(t){return De.utils.snap(yp(e),t)}},Su=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},uv=function(e){return function(t,n){return Su(yp(e))(t,n.direction)}},ll=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Sp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ul={toggleActions:"play",anticipatePin:0},hl={top:0,left:0,center:.5,bottom:1,right:1},fl=function(e,t){if(Qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hl?hl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},dl=function(e,t,n,i,s,o,a,c){var l=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Rt.createElement("div"),_=ts(n)||wr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?xt:n,M=e.indexOf("start")!==-1,y=M?l:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||c)&&_?"fixed;":"absolute;"),(m||c||!_)&&(v+=(i===Kt?vu:xu)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],pl(g,0,i,M),g},pl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Vs]=1,s["border"+a+Vs]=0,s[n.p]=t+"px",De.set(e,s)},ot=[],Mu={},sa,Mp=function(){return pn()-fi>34&&(sa||(sa=requestAnimationFrame(tr)))},Gs=function(){(!bn||!bn.isPressed||bn.startX>xt.clientWidth)&&(at.cache++,bn?sa||(sa=requestAnimationFrame(tr)):tr(),fi||os("scrollStart"),fi=pn())},Tu=function(){lp=lt.innerWidth,ap=lt.innerHeight},oa=function(e){at.cache++,(e===!0||!dn&&!op&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!uu||lp!==lt.innerWidth||Math.abs(lt.innerHeight-ap)>lt.innerHeight*.25))&&nl.restart(!0)},ss={},hv=[],Tp=function r(){return sn(Se,"scrollEnd",r)||ls(!0)},os=function(e){return ss[e]&&ss[e].map(function(t){return t()})||hv},ei=[],Ep=function(e){for(var t=0;t<ei.length;t+=5)(!e||ei[t+4]&&ei[t+4].query===e)&&(ei[t].style.cssText=ei[t+1],ei[t].getBBox&&ei[t].setAttribute("transform",ei[t+2]||""),ei[t+3].uncache=1)},bp=function(){return at.forEach(function(e){return mn(e)&&++e.cacheID&&(e.rec=e())})},Eu=function(e,t){var n;for(En=0;En<ot.length;En++)n=ot[En],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ko=!0,t&&Ep(t),t||os("revert")},wp=function(e,t){at.cache++,(t||!wn)&&at.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),Qn(e)&&(lt.history.scrollRestoration=fu=e)},wn,as=0,Ap,fv=function(){if(Ap!==as){var e=Ap=as;requestAnimationFrame(function(){return e===as&&ls(!0)})}},Rp=function(){xt.appendChild(zs),du=!bn&&zs.offsetHeight||lt.innerHeight,xt.removeChild(zs)},Cp=function(e){return Yo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ls=function(e,t){if(Jn=Rt.documentElement,xt=Rt.body,au=[lt,Rt,Jn,xt],fi&&!e&&!Ko){rn(Se,"scrollEnd",Tp);return}Rp(),wn=Se.isRefreshing=!0,Ko||bp();var n=os("refreshInit");sp&&Se.sort(),t||Eu(),at.forEach(function(i){mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),Ko=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),pu=1,Cp(!0),ot.forEach(function(i){var s=ki(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Cp(!1),pu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),wp(fu,1),nl.pause(),as++,wn=2,tr(2),ot.forEach(function(i){return mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=Se.isRefreshing=!1,os("refresh")},bu=0,ml=1,aa,tr=function(e){if(e===2||!wn&&!Ko){Se.isUpdating=!0,aa&&aa.update(0);var t=ot.length,n=pn(),i=n-gu>=50,s=t&&ot[0].scroll();if(ml=bu>s?-1:1,wn||(bu=s),i&&(fi&&!rl&&n-fi>200&&(fi=0,os("scrollEnd")),jo=gu,gu=n),ml<0){for(En=t;En-- >0;)ot[En]&&ot[En].update(0,i);ml=1}else for(En=0;En<t;En++)ot[En]&&ot[En].update(0,i);Se.isUpdating=!1}sa=0},wu=[_p,vp,xu,vu,di+ra,di+ta,di+ia,di+na,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gl=wu.concat([is,rs,"boxSizing","max"+Vs,"max"+yu,"position",di,Yt,Yt+ia,Yt+ta,Yt+ra,Yt+na]),dv=function(e,t,n){Ws(n);var i=e._gsap;if(i.spacerIsNative)Ws(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Au=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=wu.length,o=t.style,a=e.style,c;s--;)c=wu[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[xu]=a[vu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[is]=al(e,Tn)+Zt,o[rs]=al(e,Kt)+Zt,o[Yt]=a[di]=a[vp]=a[_p]="0",Ws(i),a[is]=a["max"+Vs]=n[is],a[rs]=a["max"+yu]=n[rs],a[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},pv=/([A-Z])/g,Ws=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(pv,"-$1").toLowerCase())}},_l=function(e){for(var t=gl.length,n=e.style,i=[],s=0;s<t;s++)i.push(gl[s],n[gl[s]]);return i.t=e,i},mv=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},vl={left:0,top:0},Pp=function(e,t,n,i,s,o,a,c,l,u,h,f,d,g){mn(e)&&(e=e(c)),Qn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?fl("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Qo(e))d&&(e=De.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&pl(a,n,i,!0);else{mn(t)&&(t=t(c));var y=(e||"0").split(" "),v,T,b,E;M=kn(t,c)||xt,v=er(M)||{},(!v||!v.left&&!v.top)&&pi(M).display==="none"&&(E=M.style.display,M.style.display="block",v=er(M),E?M.style.display=E:M.style.removeProperty("display")),T=fl(y[0],v[i.d]),b=fl(y[1]||"0",n),e=v[i.p]-l[i.p]-u+T+s-b,a&&pl(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(c[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;m="scroll"+i.d2,pl(o,C,i,S&&C>20||!S&&(h?Math.max(xt[m],Jn[m]):o.parentNode[m])<=C+1),h&&(l=er(a),h&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+Zt))}return d&&M&&(m=er(M),d.seek(f),p=er(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},gv=/(webkit|moz|length|cssText|inset)/i,Lp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=pi(e);for(o in a)!+o&&!gv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},Dp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},xl=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},Ip=function(e,t){var n=Ar(e,t),i="_scroll"+t.p2,s=function o(a,c,l,u,h){var f=o.tween,d=c.onComplete,g={};l=l||n();var _=Dp(n,l,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,f&&f.kill(),c[i]=a,c.inherit=!1,c.modifiers=g,g[i]=function(){return _(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){at.cache++,o.tween&&tr()},c.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=De.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(e,"wheel",n.wheelHandler),Se.isTouch&&rn(e,"touchmove",n.wheelHandler),s},Se=function(){function r(t,n){Bs||r.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),hu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Zo){this.update=this.refresh=this.kill=Bi;return}n=xp(Qn(n)||Qo(n)||n.nodeType?{trigger:n}:n,ul);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,y=s.once,v=s.snap,T=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Tn:Kt,w=!h&&h!==0,P=kn(n.scroller||lt),U=De.core.getCache(P),H=ts(P),F=("pinType"in n?n.pinType:wr(P,"pinType")||H&&"fixed")==="fixed",N=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=w&&n.toggleActions.split(" "),B="markers"in n?n.markers:ul.markers,Q=H?0:parseFloat(pi(P)["border"+x.p2+Vs])||0,I=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Me=ov(P,H,x),Fe=av(P,H),le=0,pe=0,$=0,j=Ar(P,x),oe,Y,K,re,Ne,L,Re,_e,me,V,Ke,we,Ge,Qe,mt,D,A,q,te,ne,ee,Ce,fe,Ue,ye,he,xe,We,Oe,ve,je,O,ue,de,be,ce,ie,Le,qe;if(I._startClamp=I._endClamp=!1,I._dir=x,m*=45,I.scroller=P,I.scroll=E?E.time.bind(E):j,re=j(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(sp=1,n.refreshPriority===-9999&&(aa=I)),U.tweenScroll=U.tweenScroll||{top:Ip(P,Kt),left:Ip(P,Tn)},I.tweenTo=oe=U.tweenScroll[x.p],I.scrubDuration=function(Te){ue=Qo(Te)&&Te,ue?O?O.duration(Te):O=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(I)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),ve=0,c||(c=i.vars.id)),v&&((!ns(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in xt.style&&De.set(H?[xt,Jn]:P,{scrollBehavior:"auto"}),at.forEach(function(Te){return mn(Te)&&Te.target===(H?Rt.scrollingElement||Jn:P)&&(Te.smooth=!1)}),K=mn(v.snapTo)?v.snapTo:v.snapTo==="labels"?cv(i):v.snapTo==="labelsDirectional"?uv(i):v.directional!==!1?function(Te,Ye){return Su(v.snapTo)(Te,pn()-pe<500?0:Ye.direction)}:De.utils.snap(v.snapTo),de=v.duration||{min:.1,max:2},de=ns(de)?$o(de.min,de.max):$o(de,de),be=De.delayedCall(v.delay||ue/2||.1,function(){var Te=j(),Ye=pn()-pe<500,Ve=oe.tween;if((Ye||Math.abs(I.getVelocity())<10)&&!Ve&&!rl&&le!==Te){var Ze=(Te-L)/Qe,Wt=i&&!w?i.totalProgress():Ze,st=Ye?0:(Wt-je)/(pn()-jo)*1e3||0,It=De.utils.clamp(-Ze,1-Ze,Hs(st/2)*st/.185),Xt=Ze+(v.inertia===!1?0:It),Ct,wt,Mt=v,si=Mt.onStart,Pt=Mt.onInterrupt,Dn=Mt.onComplete;if(Ct=K(Xt,I),Qo(Ct)||(Ct=Xt),wt=Math.max(0,Math.round(L+Ct*Qe)),Te<=Re&&Te>=L&&wt!==Te){if(Ve&&!Ve._initted&&Ve.data<=Hs(wt-Te))return;v.inertia===!1&&(It=Ct-Ze),oe(wt,{duration:de(Hs(Math.max(Hs(Xt-Wt),Hs(Ct-Wt))*.185/st/.05||0)),ease:v.ease||"power3",data:Hs(wt-Te),onInterrupt:function(){return be.restart(!0)&&Pt&&Pt(I)},onComplete:function(){I.update(),le=j(),i&&!w&&(O?O.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),ve=je=i&&!w?i.totalProgress():I.progress,M&&M(I),Dn&&Dn(I)}},Te,It*Qe,wt-Te-It*Qe),si&&si(I,oe.tween)}}else I.isActive&&le!==Te&&be.restart(!0)}).pause()),c&&(Mu[c]=I),f=I.trigger=kn(f||d!==!0&&d),qe=f&&f._gsap&&f._gsap.stRevert,qe&&(qe=qe(I)),d=d===!0?f:kn(d),Qn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===di||(g=!g&&d.parentNode&&d.parentNode.style&&pi(d.parentNode).display==="flex"?!1:Yt),I.pin=d,Y=De.core.getCache(d),Y.spacer?mt=Y.pinState:(b&&(b=kn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Y.spacerIsNative=!!b,b&&(Y.spacerState=_l(b))),Y.spacer=q=b||Rt.createElement("div"),q.classList.add("pin-spacer"),c&&q.classList.add("pin-spacer-"+c),Y.pinState=mt=_l(d)),n.force3D!==!1&&De.set(d,{force3D:!0}),I.spacer=q=Y.spacer,Oe=pi(d),Ue=Oe[g+x.os2],ne=De.getProperty(d),ee=De.quickSetter(d,x.a,Zt),Au(d,q,Oe),A=_l(d)),B){we=ns(B)?xp(B,Sp):Sp,V=dl("scroller-start",c,P,x,we,0),Ke=dl("scroller-end",c,P,x,we,0,V),te=V["offset"+x.op.d2];var gt=kn(wr(P,"content")||P);_e=this.markerStart=dl("start",c,gt,x,we,te,0,E),me=this.markerEnd=dl("end",c,gt,x,we,te,0,E),E&&(Le=De.quickSetter([_e,me],x.a,Zt)),!F&&!(Fi.length&&wr(P,"fixedMarkers")===!0)&&(lv(H?xt:P),De.set([V,Ke],{force3D:!0}),he=De.quickSetter(V,x.a,Zt),We=De.quickSetter(Ke,x.a,Zt))}if(E){var Ae=E.vars.onUpdate,Be=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){I.update(0,0,1),Ae&&Ae.apply(E,Be||[])})}if(I.previous=function(){return ot[ot.indexOf(I)-1]},I.next=function(){return ot[ot.indexOf(I)+1]},I.revert=function(Te,Ye){if(!Ye)return I.kill(!0);var Ve=Te!==!1||!I.enabled,Ze=dn;Ve!==I.isReverted&&(Ve&&(ce=Math.max(j(),I.scroll.rec||0),$=I.progress,ie=i&&i.progress()),_e&&[_e,me,V,Ke].forEach(function(Wt){return Wt.style.display=Ve?"none":"block"}),Ve&&(dn=I,I.update(Ve)),d&&(!T||!I.isActive)&&(Ve?dv(d,q,mt):Au(d,q,pi(d),ye)),Ve||I.update(Ve),dn=Ze,I.isReverted=Ve)},I.refresh=function(Te,Ye,Ve,Ze){if(!((dn||!I.enabled)&&!Ye)){if(d&&Te&&fi){rn(r,"scrollEnd",Tp);return}!wn&&se&&se(I),dn=I,oe.tween&&!Ve&&(oe.tween.kill(),oe.tween=0),O&&O.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ft){return ft.vars.immediateRender&&ft.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Wt=Me(),st=Fe(),It=E?E.duration():ki(P,x),Xt=Qe<=.01||!Qe,Ct=0,wt=Ze||0,Mt=ns(Ve)?Ve.end:n.end,si=n.endTrigger||f,Pt=ns(Ve)?Ve.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Dn=I.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,I),xi=f&&Math.max(0,ot.indexOf(I))||0,tn=xi,R,G,Z,J,W,ae,ge,Ie,Pe,Xe,ze,ke,nt;for(B&&ns(Ve)&&(ke=De.getProperty(V,x.p),nt=De.getProperty(Ke,x.p));tn-- >0;)ae=ot[tn],ae.end||ae.refresh(0,1)||(dn=I),ge=ae.pin,ge&&(ge===f||ge===d||ge===Dn)&&!ae.isReverted&&(Xe||(Xe=[]),Xe.unshift(ae),ae.revert(!0,!0)),ae!==ot[tn]&&(xi--,tn--);for(mn(Pt)&&(Pt=Pt(I)),Pt=cp(Pt,"start",I),L=Pp(Pt,f,Wt,x,j(),_e,V,I,st,Q,F,It,E,I._startClamp&&"_startClamp")||(d?-.001:0),mn(Mt)&&(Mt=Mt(I)),Qn(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(Qn(Pt)?Pt.split(" ")[0]:"")+Mt:(Ct=fl(Mt.substr(2),Wt),Mt=Qn(Pt)?Pt:(E?De.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,L):L)+Ct,si=f)),Mt=cp(Mt,"end",I),Re=Math.max(L,Pp(Mt||(si?"100% 0":It),si,Wt,x,j()+Ct,me,Ke,I,st,Q,F,It,E,I._endClamp&&"_endClamp"))||-.001,Ct=0,tn=xi;tn--;)ae=ot[tn]||{},ge=ae.pin,ge&&ae.start-ae._pinPush<=L&&!E&&ae.end>0&&(R=ae.end-(I._startClamp?Math.max(0,ae.start):ae.start),(ge===f&&ae.start-ae._pinPush<L||ge===Dn)&&isNaN(Pt)&&(Ct+=R*(1-ae.progress)),ge===d&&(wt+=R));if(L+=Ct,Re+=Ct,I._startClamp&&(I._startClamp+=Ct),I._endClamp&&!wn&&(I._endClamp=Re||-.001,Re=Math.min(Re,ki(P,x))),Qe=Re-L||(L-=.01)&&.001,Xt&&($=De.utils.clamp(0,1,De.utils.normalize(L,Re,ce))),I._pinPush=wt,_e&&Ct&&(R={},R[x.a]="+="+Ct,Dn&&(R[x.p]="-="+j()),De.set([_e,me],R)),d&&!(pu&&I.end>=ki(P,x)))R=pi(d),J=x===Kt,Z=j(),Ce=parseFloat(ne(x.a))+wt,!It&&Re>1&&(ze=(H?Rt.scrollingElement||Jn:P).style,ze={style:ze,value:ze["overflow"+x.a.toUpperCase()]},H&&pi(xt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ze.style["overflow"+x.a.toUpperCase()]="scroll")),Au(d,q,R),A=_l(d),G=er(d,!0),Ie=F&&Ar(P,J?Tn:Kt)(),g?(ye=[g+x.os2,Qe+wt+Zt],ye.t=q,tn=g===Yt?al(d,x)+Qe+wt:0,tn&&(ye.push(x.d,tn+Zt),q.style.flexBasis!=="auto"&&(q.style.flexBasis=tn+Zt)),Ws(ye),Dn&&ot.forEach(function(ft){ft.pin===Dn&&ft.vars.pinSpacing!==!1&&(ft._subPinOffset=!0)}),F&&j(ce)):(tn=al(d,x),tn&&q.style.flexBasis!=="auto"&&(q.style.flexBasis=tn+Zt)),F&&(W={top:G.top+(J?Z-L:Ie)+Zt,left:G.left+(J?Ie:Z-L)+Zt,boxSizing:"border-box",position:"fixed"},W[is]=W["max"+Vs]=Math.ceil(G.width)+Zt,W[rs]=W["max"+yu]=Math.ceil(G.height)+Zt,W[di]=W[di+ia]=W[di+ta]=W[di+ra]=W[di+na]="0",W[Yt]=R[Yt],W[Yt+ia]=R[Yt+ia],W[Yt+ta]=R[Yt+ta],W[Yt+ra]=R[Yt+ra],W[Yt+na]=R[Yt+na],D=mv(mt,W,T),wn&&j(0)),i?(Pe=i._initted,cu(1),i.render(i.duration(),!0,!0),fe=ne(x.a)-Ce+Qe+wt,xe=Math.abs(Qe-fe)>1,F&&xe&&D.splice(D.length-2,2),i.render(0,!0,!0),Pe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),cu(0)):fe=Qe,ze&&(ze.value?ze.style["overflow"+x.a.toUpperCase()]=ze.value:ze.style.removeProperty("overflow-"+x.a));else if(f&&j()&&!E)for(G=f.parentNode;G&&G!==xt;)G._pinOffset&&(L-=G._pinOffset,Re-=G._pinOffset),G=G.parentNode;Xe&&Xe.forEach(function(ft){return ft.revert(!1,!0)}),I.start=L,I.end=Re,re=Ne=wn?ce:j(),!E&&!wn&&(re<ce&&j(ce),I.scroll.rec=0),I.revert(!1,!0),pe=pn(),be&&(le=-1,be.restart(!0)),dn=0,i&&w&&(i._initted||ie)&&i.progress()!==ie&&i.progress(ie||0,!0).render(i.time(),!0,!0),(Xt||$!==I.progress||E||_||i&&!i._initted)&&(i&&!w&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(E&&L<-.001&&!$?De.utils.normalize(L,Re,0):$,!0),I.progress=Xt||(re-L)/Qe===$?0:$),d&&g&&(q._pinOffset=Math.round(I.progress*fe)),O&&O.invalidate(),isNaN(ke)||(ke-=De.getProperty(V,x.p),nt-=De.getProperty(Ke,x.p),xl(V,x,ke),xl(_e,x,ke-(Ze||0)),xl(Ke,x,nt),xl(me,x,nt-(Ze||0))),Xt&&!wn&&I.update(),u&&!wn&&!Ge&&(Ge=!0,u(I),Ge=!1)}},I.getVelocity=function(){return(j()-Ne)/(pn()-jo)*1e3||0},I.endAnimation=function(){ea(I.callbackAnimation),i&&(O?O.progress(1):i.paused()?w||ea(i,I.direction<0,1):ea(i,i.reversed()))},I.labelToScroll=function(Te){return i&&i.labels&&(L||I.refresh()||L)+i.labels[Te]/i.duration()*Qe||0},I.getTrailing=function(Te){var Ye=ot.indexOf(I),Ve=I.direction>0?ot.slice(0,Ye).reverse():ot.slice(Ye+1);return(Qn(Te)?Ve.filter(function(Ze){return Ze.vars.preventOverlaps===Te}):Ve).filter(function(Ze){return I.direction>0?Ze.end<=L:Ze.start>=Re})},I.update=function(Te,Ye,Ve){if(!(E&&!Ve&&!Te)){var Ze=wn===!0?ce:I.scroll(),Wt=Te?0:(Ze-L)/Qe,st=Wt<0?0:Wt>1?1:Wt||0,It=I.progress,Xt,Ct,wt,Mt,si,Pt,Dn,xi;if(Ye&&(Ne=re,re=E?j():Ze,v&&(je=ve,ve=i&&!w?i.totalProgress():st)),m&&d&&!dn&&!sl&&fi&&(!st&&L<Ze+(Ze-Ne)/(pn()-jo)*m?st=1e-4:st===1&&Re>Ze+(Ze-Ne)/(pn()-jo)*m&&(st=.9999)),st!==It&&I.enabled){if(Xt=I.isActive=!!st&&st<1,Ct=!!It&&It<1,Pt=Xt!==Ct,si=Pt||!!st!=!!It,I.direction=st>It?1:-1,I.progress=st,si&&!dn&&(wt=st&&!It?0:st===1?1:It===1?2:3,w&&(Mt=!Pt&&k[wt+1]!=="none"&&k[wt+1]||k[wt],xi=i&&(Mt==="complete"||Mt==="reset"||Mt in i))),S&&(Pt||xi)&&(xi||h||!i)&&(mn(S)?S(I):I.getTrailing(S).forEach(function(Z){return Z.endAnimation()})),w||(O&&!dn&&!sl?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",st,i._tTime/i._tDur):(O.vars.totalProgress=st,O.invalidate().restart())):i&&i.totalProgress(st,!!(dn&&(pe||Te)))),d){if(Te&&g&&(q.style[g+x.os2]=Ue),!F)ee(Jo(Ce+fe*st));else if(si){if(Dn=!Te&&st>It&&Re+1>Ze&&Ze+1>=ki(P,x),T)if(!Te&&(Xt||Dn)){var tn=er(d,!0),R=Ze-L;Lp(d,xt,tn.top+(x===Kt?R:0)+Zt,tn.left+(x===Kt?0:R)+Zt)}else Lp(d,q);Ws(Xt||Dn?D:A),xe&&st<1&&Xt||ee(Ce+(st===1&&!Dn?fe:0))}}v&&!oe.tween&&!dn&&!sl&&be.restart(!0),a&&(Pt||y&&st&&(st<1||!mu))&&Yo(a.targets).forEach(function(Z){return Z.classList[Xt||y?"add":"remove"](a.className)}),o&&!w&&!Te&&o(I),si&&!dn?(w&&(xi&&(Mt==="complete"?i.pause().totalProgress(1):Mt==="reset"?i.restart(!0).pause():Mt==="restart"?i.restart(!0):i[Mt]()),o&&o(I)),(Pt||!mu)&&(l&&Pt&&_u(I,l),N[wt]&&_u(I,N[wt]),y&&(st===1?I.kill(!1,1):N[wt]=0),Pt||(wt=st===1?1:3,N[wt]&&_u(I,N[wt]))),C&&!Xt&&Math.abs(I.getVelocity())>(Qo(C)?C:2500)&&(ea(I.callbackAnimation),O?O.progress(1):ea(i,Mt==="reverse"?1:!st,1))):w&&o&&!dn&&o(I)}if(We){var G=E?Ze/E.duration()*(E._caScrollDist||0):Ze;he(G+(V._isFlipped?1:0)),We(G)}Le&&Le(-Ze/E.duration()*(E._caScrollDist||0))}},I.enable=function(Te,Ye){I.enabled||(I.enabled=!0,rn(P,"resize",oa),H||rn(P,"scroll",Gs),se&&rn(r,"refreshInit",se),Te!==!1&&(I.progress=$=0,re=Ne=le=j()),Ye!==!1&&I.refresh())},I.getTween=function(Te){return Te&&oe?oe.tween:O},I.setPositions=function(Te,Ye,Ve,Ze){if(E){var Wt=E.scrollTrigger,st=E.duration(),It=Wt.end-Wt.start;Te=Wt.start+It*Te/st,Ye=Wt.start+It*Ye/st}I.refresh(!1,!1,{start:up(Te,Ve&&!!I._startClamp),end:up(Ye,Ve&&!!I._endClamp)},Ze),I.update()},I.adjustPinSpacing=function(Te){if(ye&&Te){var Ye=ye.indexOf(x.d)+1;ye[Ye]=parseFloat(ye[Ye])+Te+Zt,ye[1]=parseFloat(ye[1])+Te+Zt,Ws(ye)}},I.disable=function(Te,Ye){if(Te!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Ye||O&&O.pause(),ce=0,Y&&(Y.uncache=1),se&&sn(r,"refreshInit",se),be&&(be.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!H)){for(var Ve=ot.length;Ve--;)if(ot[Ve].scroller===P&&ot[Ve]!==I)return;sn(P,"resize",oa),H||sn(P,"scroll",Gs)}},I.kill=function(Te,Ye){I.disable(Te,Ye),O&&!Ye&&O.kill(),c&&delete Mu[c];var Ve=ot.indexOf(I);Ve>=0&&ot.splice(Ve,1),Ve===En&&ml>0&&En--,Ve=0,ot.forEach(function(Ze){return Ze.scroller===I.scroller&&(Ve=1)}),Ve||wn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,Te&&i.revert({kill:!1}),Ye||i.kill()),_e&&[_e,me,V,Ke].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),aa===I&&(aa=0),d&&(Y&&(Y.uncache=1),Ve=0,ot.forEach(function(Ze){return Ze.pin===d&&Ve++}),Ve||(Y.spacer=0)),n.onKill&&n.onKill(I)},ot.push(I),I.enable(!1,!1),qe&&qe(I),i&&i.add&&!Qe){var et=I.update;I.update=function(){I.update=et,at.cache++,L||Re||I.refresh()},De.delayedCall(.01,I.update),Qe=.01,L=Re=0}else I.refresh();d&&fv()},r.register=function(n){return Bs||(De=n||pp(),dp()&&window.document&&r.enable(),Bs=Zo),Bs},r.defaults=function(n){if(n)for(var i in n)ul[i]=n[i];return ul},r.disable=function(n,i){Zo=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),sn(lt,"wheel",Gs),sn(Rt,"scroll",Gs),clearInterval(il),sn(Rt,"touchcancel",Bi),sn(xt,"touchstart",Bi),ll(sn,Rt,"pointerdown,touchstart,mousedown",hp),ll(sn,Rt,"pointerup,touchend,mouseup",fp),nl.kill(),ol(sn);for(var s=0;s<at.length;s+=3)cl(sn,at[s],at[s+1]),cl(sn,at[s],at[s+2])},r.enable=function(){if(lt=window,Rt=document,Jn=Rt.documentElement,xt=Rt.body,De&&(Yo=De.utils.toArray,$o=De.utils.clamp,hu=De.core.context||Bi,cu=De.core.suppressOverwrites||Bi,fu=lt.history.scrollRestoration||"auto",bu=lt.pageYOffset||0,De.core.globals("ScrollTrigger",r),xt)){Zo=1,zs=document.createElement("div"),zs.style.height="100vh",zs.style.position="absolute",Rp(),sv(),Gt.register(De),r.isTouch=Gt.isTouch,Rr=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),uu=Gt.isTouch===1,rn(lt,"wheel",Gs),au=[lt,Rt,Jn,xt],De.matchMedia?(r.matchMedia=function(l){var u=De.matchMedia(),h;for(h in l)u.add(h,l[h]);return u},De.addEventListener("matchMediaInit",function(){bp(),Eu()}),De.addEventListener("matchMediaRevert",function(){return Ep()}),De.addEventListener("matchMedia",function(){ls(0,1),os("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return Tu(),Tu})):console.warn("Requires GSAP 3.11.0 or later"),Tu(),rn(Rt,"scroll",Gs);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,o=De.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=er(xt),Kt.m=Math.round(a.top+Kt.sc())||0,Tn.m=Math.round(a.left+Tn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),il=setInterval(Mp,250),De.delayedCall(.5,function(){return sl=0}),rn(Rt,"touchcancel",Bi),rn(xt,"touchstart",Bi),ll(rn,Rt,"pointerdown,touchstart,mousedown",hp),ll(rn,Rt,"pointerup,touchend,mouseup",fp),lu=De.utils.checkPrefix("transform"),gl.push(lu),Bs=pn(),nl=De.delayedCall(.2,ls).pause(),ks=[Rt,"visibilitychange",function(){var l=lt.innerWidth,u=lt.innerHeight;Rt.hidden?(ip=l,rp=u):(ip!==l||rp!==u)&&oa()},Rt,"DOMContentLoaded",ls,lt,"load",ls,lt,"resize",oa],ol(rn),ot.forEach(function(l){return l.enable(0,1)}),c=0;c<at.length;c+=3)cl(sn,at[c],at[c+1]),cl(sn,at[c],at[c+2])}},r.config=function(n){"limitCallbacks"in n&&(mu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(il)||(il=i)&&setInterval(Mp,i),"ignoreMobileResize"in n&&(uu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ol(sn)||ol(rn,n.autoRefreshEvents||"none"),op=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=kn(n),o=at.indexOf(s),a=ts(s);~o&&at.splice(o,a?6:2),i&&(a?Fi.unshift(lt,i,xt,i,Jn,i):Fi.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Qn(n)?kn(n):n).getBoundingClientRect(),a=o[s?is:rs]*i||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},r.positionInViewport=function(n,i,s){Qn(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[s?is:rs],c=i==null?a/2:i in hl?hl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/lt.innerWidth:(o.top+c)/lt.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(s){return s()})}},r}();Se.version="3.14.2",Se.saveStyles=function(r){return r?Yo(r).forEach(function(e){if(e&&e.style){var t=ei.indexOf(e);t>=0&&ei.splice(t,5),ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),hu())}}):ei},Se.revert=function(r,e){return Eu(!r,e)},Se.create=function(r,e){return new Se(r,e)},Se.refresh=function(r){return r?oa(!0):(Bs||Se.register())&&ls(!0)},Se.update=function(r){return++at.cache&&tr(r===!0?2:0)},Se.clearScrollMemory=wp,Se.maxScroll=function(r,e){return ki(r,e?Tn:Kt)},Se.getScrollFunc=function(r,e){return Ar(kn(r),e?Tn:Kt)},Se.getById=function(r){return Mu[r]},Se.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})},Se.isScrolling=function(){return!!fi},Se.snapDirectional=Su,Se.addEventListener=function(r,e){var t=ss[r]||(ss[r]=[]);~t.indexOf(e)||t.push(e)},Se.removeEventListener=function(r,e){var t=ss[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)},Se.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var h=[],f=[],d=De.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&mn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return mn(s)&&(s=s(),rn(Se,"refresh",function(){return s=e.batchMax()})),Yo(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(Se.create(l))}),t};var Np=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ru=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===Jn&&r(xt,t)},yl={auto:1,scroll:1},_v=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||De.core.getCache(s),a=pn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(yl[(c=pi(s)).overflowY]||yl[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ts(s)&&(yl[(c=pi(s)).overflowY]||yl[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Up=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&_v,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&rn(Rt,Gt.eventTypes[0],Fp,!1,!0)},onDisable:function(){return sn(Rt,Gt.eventTypes[0],Fp,!0)}})},vv=/(input|label|select|textarea)/i,Op,Fp=function(e){var t=vv.test(e.target.tagName);(t||Op)&&(e._gsapAllow=!0,Op=t)},xv=function(e){ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=kn(e.target)||Jn,u=De.core.globals().ScrollSmoother,h=u&&u.get(),f=Rr&&(e.content&&kn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Ar(l,Kt),g=Ar(l,Tn),_=1,m=(Gt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,p=0,M=mn(i)?function(){return i(a)}:function(){return i||2.8},y,v,T=Up(l,e.type,!0,s),b=function(){return v=!1},E=Bi,C=Bi,S=function(){c=ki(l,Kt),C=$o(Rr?1:0,c),n&&(E=$o(0,ki(l,Tn))),y=as},x=function(){f._gsap.y=Jo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},w=function(){if(v){requestAnimationFrame(b);var B=Jo(a.deltaY/2),Q=C(d.v-B);if(f&&Q!==d.v+d.offset){d.offset=Q-d.v;var I=Jo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=at.cache,tr()}return!0}d.offset&&x(),v=!0},P,U,H,F,N=function(){S(),P.isActive()&&P.vars.scrollY>c&&(d()>c?P.progress(1)&&d(c):P.resetTo("scrollY",c))};return f&&De.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return Rr&&k.type==="touchmove"&&w()||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){v=!1;var k=_;_=Jo((lt.visualViewport&&lt.visualViewport.scale||1)/m),P.pause(),k!==_&&Ru(l,_>1.01?!0:n?!1:"x"),U=g(),H=d(),S(),y=as},e.onRelease=e.onGestureStart=function(k,B){if(d.offset&&x(),!B)F.restart(!0);else{at.cache++;var Q=M(),I,se;n&&(I=g(),se=I+Q*.05*-k.velocityX/.227,Q*=Np(g,I,se,ki(l,Tn)),P.vars.scrollX=E(se)),I=d(),se=I+Q*.05*-k.velocityY/.227,Q*=Np(d,I,se,ki(l,Kt)),P.vars.scrollY=C(se),P.invalidate().duration(Q).play(.01),(Rr&&P.vars.scrollY>=c||I>=c-1)&&De.to({},{onUpdate:N,duration:Q})}o&&o(k)},e.onWheel=function(){P._ts&&P.pause(),pn()-p>1e3&&(y=0,p=pn())},e.onChange=function(k,B,Q,I,se){if(as!==y&&S(),B&&n&&g(E(I[2]===B?U+(k.startX-k.x):g()+B-I[1])),Q){d.offset&&x();var Me=se[2]===Q,Fe=Me?H+k.startY-k.y:d()+Q-se[1],le=C(Fe);Me&&Fe!==le&&(H+=le-Fe),d(le)}(Q||B)&&tr()},e.onEnable=function(){Ru(l,n?!1:"x"),Se.addEventListener("refresh",N),rn(lt,"resize",N),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){Ru(l,!0),sn(lt,"resize",N),Se.removeEventListener("refresh",N),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=Rr,Rr&&!d()&&d(1),Rr&&De.ticker.add(Bi),F=a._dc,P=De.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Dp(d,d(),function(){return P.pause()})},onUpdate:tr,onComplete:F.vars.onComplete}),a};Se.sort=function(r){if(mn(r))return ot.sort(r);var e=lt.pageYOffset||0;return Se.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),ot.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})},Se.observe=function(r){return new Gt(r)},Se.normalizeScroll=function(r){if(typeof r>"u")return bn;if(r===!0&&bn)return bn.enable();if(r===!1){bn&&bn.kill(),bn=r;return}var e=r instanceof Gt?r:xv(r);return bn&&bn.target===e.target&&bn.kill(),ts(e.target)&&(bn=e),e},Se.core={_getVelocityProp:ou,_inputObserver:Up,_scrollers:at,_proxies:Fi,bridge:{ss:function(){fi||os("scrollStart"),fi=pn()},ref:function(){return dn}}},pp()&&De.registerPlugin(Se);function $t(r){if(!r)return"";const e=document.createElement("div");return e.textContent=r,e.innerHTML}function Sl(r,e,t){const n=r.dataset[e];if(n===void 0||n==="")return t;const i=Number(n);return Number.isFinite(i)?i:t}function yv(r,e,t){const n=r.dataset[e];return n&&n.trim()!==""?n.trim():t}z.registerPlugin(Se);function Bp(r){const e=r.querySelectorAll("[data-reveal-item]");if(!e.length)return;const t=Sl(r,"duration",.6),n=Sl(r,"stagger",.08),i=Sl(r,"delay",0),s=Sl(r,"y",18),o=yv(r,"ease","power2.out");z.from(e,{opacity:0,y:s,duration:t,stagger:n,delay:i,ease:o,scrollTrigger:{trigger:r,start:"top 85%"}})}if(typeof window<"u"){const r=()=>document.querySelectorAll('[data-component="reveal"]').forEach(e=>Bp(e));document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}function Sv(r){const e=r.textContent.trim().split(/\s+/);return r.innerHTML=e.map(t=>`<span class="wf-lib-word-mask"><span class="wf-lib-svg-hover-word">${t}</span></span>`).join(" "),r.querySelectorAll(".wf-lib-svg-hover-word")}function Mv(r){var e;return!r||r.nodeType!==1?[]:(e=r.matches)!=null&&e.call(r,"[data-svg-hover-card]")?[r]:[...r.querySelectorAll("[data-svg-hover-card]")]}function Tv(r){const e=r.querySelectorAll(".svg-stroke path");return e.length>0?[...e]:[...r.querySelectorAll("svg path")]}function kp(r){Mv(r).forEach(t=>{const n=Tv(t),i=t.querySelector("[data-svg-hover-title]");if(!i)return;const s=Sv(i);z.set(s,{yPercent:100}),n.forEach(l=>{const u=l.getTotalLength();l.style.strokeDasharray=u,l.style.strokeDashoffset=u});let o;const a=()=>{o&&o.kill(),o=z.timeline(),n.forEach(l=>{o.to(l,{strokeDashoffset:0,attr:{"stroke-width":700},duration:1.5,ease:"power2.out"},0)}),o.to(s,{yPercent:0,duration:.75,ease:"power3.out",stagger:.075},.35)},c=()=>{o&&o.kill(),o=z.timeline(),n.forEach(l=>{const u=l.getTotalLength();o.to(l,{strokeDashoffset:u,attr:{"stroke-width":200},duration:1,ease:"power2.out"},0)}),o.to(s,{yPercent:100,duration:.5,ease:"power3.out",stagger:{each:.05,from:"end"}},0)};t.addEventListener("mouseenter",a),t.addEventListener("mouseleave",c),t.addEventListener("focus",a),t.addEventListener("blur",c)})}if(typeof window<"u"){const r=()=>document.querySelectorAll('[data-component="svg-image-hover"]').forEach(e=>kp(e));document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cu="180",Ev=0,zp=1,bv=2,Hp=1,wv=2,nr=3,ir=0,zn=1,Ti=2,Cr=0,Xs=1,Vp=2,Gp=3,Wp=4,Av=5,cs=100,Rv=101,Cv=102,Pv=103,Lv=104,Dv=200,Iv=201,Nv=202,Uv=203,Pu=204,Lu=205,Ov=206,Fv=207,Bv=208,kv=209,zv=210,Hv=211,Vv=212,Gv=213,Wv=214,Du=0,Iu=1,Nu=2,qs=3,Uu=4,Ou=5,Fu=6,Bu=7,Xp=0,Xv=1,qv=2,Pr=0,Yv=1,$v=2,jv=3,Kv=4,Zv=5,Jv=6,Qv=7,qp="attached",ex="detached",Yp=300,Ys=301,$s=302,ku=303,zu=304,Ml=306,js=1e3,Lr=1001,Tl=1002,An=1003,$p=1004,la=1005,ti=1006,El=1007,rr=1008,zi=1009,jp=1010,Kp=1011,ca=1012,Hu=1013,us=1014,Ei=1015,ua=1016,Vu=1017,Gu=1018,ha=1020,Zp=35902,Jp=35899,Qp=1021,em=1022,mi=1023,fa=1026,da=1027,Wu=1028,Xu=1029,tm=1030,qu=1031,Yu=1033,bl=33776,wl=33777,Al=33778,Rl=33779,$u=35840,ju=35841,Ku=35842,Zu=35843,Ju=36196,Qu=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,lh=37815,ch=37816,uh=37817,hh=37818,fh=37819,dh=37820,ph=37821,mh=36492,gh=36494,_h=36495,vh=36283,xh=36284,yh=36285,Sh=36286,pa=2300,ma=2301,Mh=2302,nm=2400,im=2401,rm=2402,tx=2500,nx=0,sm=1,Th=2,ix=3200,rx=3201,om=0,sx=1,Dr="",on="srgb",Rn="srgb-linear",Cl="linear",Tt="srgb",Ks=7680,am=519,ox=512,ax=513,lx=514,lm=515,cx=516,ux=517,hx=518,fx=519,Eh=35044,cm="300 es",Hi=2e3,Pl=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let um=1234567;const ga=Math.PI/180,Js=180/Math.PI;function bi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function bh(r,e){return(r%e+e)%e}function dx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function px(r,e,t){return r!==e?(t-r)/(e-r):0}function _a(r,e,t){return(1-t)*r+t*e}function mx(r,e,t,n){return _a(r,e,1-Math.exp(-t*n))}function gx(r,e=1){return e-Math.abs(bh(r,e*2)-e)}function _x(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function xx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yx(r,e){return r+Math.random()*(e-r)}function Sx(r){return r*(.5-Math.random())}function Mx(r){r!==void 0&&(um=r);let e=um+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tx(r){return r*ga}function Ex(r){return r*Js}function bx(r){return(r&r-1)===0&&r!==0}function wx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ax(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rx(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*u,a*l);break;case"XZX":r.set(a*u,c*g,c*d,a*l);break;case"YXY":r.set(c*d,a*u,c*g,a*l);break;case"ZYZ":r.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Cx={DEG2RAD:ga,RAD2DEG:Js,generateUUID:bi,clamp:ut,euclideanModulo:bh,mapLinear:dx,inverseLerp:px,lerp:_a,damp:mx,pingpong:gx,smoothstep:_x,smootherstep:vx,randInt:xx,randFloat:yx,randFloatSpread:Sx,seededRandom:Mx,degToRad:Tx,radToDeg:Ex,isPowerOfTwo:bx,ceilPowerOfTwo:wx,floorPowerOfTwo:Ax,setQuaternionFromProperEuler:Rx,normalize:yt,denormalize:wi};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),b=Math.atan2(T,p*M);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const v=a*M;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new X,hm=new Ir;class tt{constructor(e,t,n,i,s,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],y=i[4],v=i[7],T=i[2],b=i[5],E=i[8];return s[0]=o*_+a*M+c*T,s[3]=o*m+a*y+c*b,s[6]=o*p+a*v+c*E,s[1]=l*_+u*M+h*T,s[4]=l*m+u*y+h*b,s[7]=l*p+u*v+h*E,s[2]=f*_+d*M+g*T,s[5]=f*m+d*y+g*b,s[8]=f*p+d*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new tt;function fm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Px(){const r=va("canvas");return r.style.display="block",r}const dm={};function xa(r){r in dm||(dm[r]=!0,console.warn(r))}function Lx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const pm=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mm=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dx(){const r={enabled:!0,workingColorSpace:Rn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(i.r=Qs(i.r),i.g=Qs(i.g),i.b=Qs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dr?Cl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return xa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return xa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Rn]:{primaries:e,whitePoint:n,transfer:Cl,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),r}const pt=Dx();function sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let eo;class Ix{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{eo===void 0&&(eo=va("canvas")),eo.width=e.width,eo.height=e.height;const i=eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=eo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nx=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ch(i[o].image)):s.push(Ch(i[o]))}else s=Ch(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ix.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ux=0;const Ph=new X;class Jt extends Zs{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Lr,i=Lr,s=ti,o=rr,a=mi,c=zi,l=Jt.DEFAULT_ANISOTROPY,u=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=bi(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=Yp,Jt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(d+1)/2,T=(p+1)/2,b=(u+f)/4,E=(h+_)/4,C=(g+m)/4;return y>v&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=E/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=C/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ox extends Zs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Jt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Rh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends Ox{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gm extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fx extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(s,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ll.copy(n.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Dl.subVectors(this.max,ya),to.subVectors(e.a,ya),no.subVectors(e.b,ya),io.subVectors(e.c,ya),Nr.subVectors(no,to),Ur.subVectors(io,no),fs.subVectors(to,io);let t=[0,-Nr.z,Nr.y,0,-Ur.z,Ur.y,0,-fs.z,fs.y,Nr.z,0,-Nr.x,Ur.z,0,-Ur.x,fs.z,0,-fs.x,-Nr.y,Nr.x,0,-Ur.y,Ur.x,0,-fs.y,fs.x,0];return!Lh(t,to,no,io,Dl)||(t=[1,0,0,0,1,0,0,0,1],!Lh(t,to,no,io,Dl))?!1:(Il.crossVectors(Nr,Ur),t=[Il.x,Il.y,Il.z],Lh(t,to,no,io,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new X,new X,new X,new X,new X,new X,new X,new X],Ai=new X,Ll=new Vi,to=new X,no=new X,io=new X,Nr=new X,Ur=new X,fs=new X,ya=new X,Dl=new X,Il=new X,ds=new X;function Lh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ds.fromArray(r,s);const a=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),c=e.dot(ds),l=t.dot(ds),u=n.dot(ds);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Bx=new Vi,Sa=new X,Dh=new X;class Gi{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Sa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Dh)),this.expandByPoint(Sa.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ar=new X,Ih=new X,Nl=new X,Or=new X,Nh=new X,Ul=new X,Uh=new X;class Ol{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ih.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Ih);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Nl),a=Or.dot(this.direction),c=-Or.dot(Nl),l=Or.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ih).addScaledVector(Nl,f),d}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const n=ar.dot(this.direction),i=ar.dot(ar)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,n,i,s){Nh.subVectors(t,e),Ul.subVectors(n,e),Uh.crossVectors(Nh,Ul);let o=this.direction.dot(Uh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,e);const c=a*this.direction.dot(Ul.crossVectors(Or,Ul));if(c<0)return null;const l=a*this.direction.dot(Nh.cross(Or));if(l<0||c+l>o)return null;const u=-a*Or.dot(Uh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,g,_,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ro.setFromMatrixColumn(e,0).length(),s=1/ro.setFromMatrixColumn(e,1).length(),o=1/ro.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kx,e,zx)}lookAt(e,t,n){const i=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Fr.crossVectors(n,ni),Fr.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Fr.crossVectors(n,ni)),Fr.normalize(),Fl.crossVectors(ni,Fr),i[0]=Fr.x,i[4]=Fl.x,i[8]=ni.x,i[1]=Fr.y,i[5]=Fl.y,i[9]=ni.y,i[2]=Fr.z,i[6]=Fl.z,i[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],v=n[11],T=n[15],b=i[0],E=i[4],C=i[8],S=i[12],x=i[1],w=i[5],P=i[9],U=i[13],H=i[2],F=i[6],N=i[10],k=i[14],B=i[3],Q=i[7],I=i[11],se=i[15];return s[0]=o*b+a*x+c*H+l*B,s[4]=o*E+a*w+c*F+l*Q,s[8]=o*C+a*P+c*N+l*I,s[12]=o*S+a*U+c*k+l*se,s[1]=u*b+h*x+f*H+d*B,s[5]=u*E+h*w+f*F+d*Q,s[9]=u*C+h*P+f*N+d*I,s[13]=u*S+h*U+f*k+d*se,s[2]=g*b+_*x+m*H+p*B,s[6]=g*E+_*w+m*F+p*Q,s[10]=g*C+_*P+m*N+p*I,s[14]=g*S+_*U+m*k+p*se,s[3]=M*b+y*x+v*H+T*B,s[7]=M*E+y*w+v*F+T*Q,s[11]=M*C+y*P+v*N+T*I,s[15]=M*S+y*U+v*k+T*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+s*o*f-i*o*d+i*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,y=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,v=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,T=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,b=t*M+n*y+i*v+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=M*E,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*E,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*E,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*d-n*c*d)*E,e[4]=y*E,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*E,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*E,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*d+t*c*d)*E,e[8]=v*E,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*E,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*E,e[12]=T*E,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*E,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,M=c*l,y=c*u,v=c*h,T=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*T,i[1]=(d+v)*T,i[2]=(g-y)*T,i[3]=0,i[4]=(d-v)*b,i[5]=(1-(f+p))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(g+y)*E,i[9]=(m-M)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ro.set(i[0],i[1],i[2]).length();const o=ro.set(i[4],i[5],i[6]).length(),a=ro.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ri.copy(this);const l=1/s,u=1/o,h=1/a;return Ri.elements[0]*=l,Ri.elements[1]*=l,Ri.elements[2]*=l,Ri.elements[4]*=u,Ri.elements[5]*=u,Ri.elements[6]*=u,Ri.elements[8]*=h,Ri.elements[9]*=h,Ri.elements[10]*=h,t.setFromRotationMatrix(Ri),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Hi,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===Hi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Pl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Hi,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===Hi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Pl)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ro=new X,Ri=new it,kx=new X(0,0,0),zx=new X(1,1,1),Fr=new X,Fl=new X,ni=new X,_m=new it,vm=new Ir;class Wi{constructor(e=0,t=0,n=0,i=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class xm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hx=0;const ym=new X,so=new Ir,lr=new it,Bl=new X,Ma=new X,Vx=new X,Gx=new Ir,Sm=new X(1,0,0),Mm=new X(0,1,0),Tm=new X(0,0,1),Em={type:"added"},Wx={type:"removed"},oo={type:"childadded",child:null},Oh={type:"childremoved",child:null};class Ft extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new X,t=new Wi,n=new Ir,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new tt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,t){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bl.copy(e):Bl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Ma,Bl,this.up):lr.lookAt(Bl,Ma,this.up),this.quaternion.setFromRotationMatrix(lr),i&&(lr.extractRotation(i.matrixWorld),so.setFromRotationMatrix(lr),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),oo.child=e,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wx),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,Vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ft.DEFAULT_UP=new X(0,1,0),Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new X,cr=new X,Fh=new X,ur=new X,ao=new X,lo=new X,bm=new X,Bh=new X,kh=new X,zh=new X,Hh=new vt,Vh=new vt,Gh=new vt;class Pi{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ci.subVectors(e,t),i.cross(Ci);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ci.subVectors(i,t),cr.subVectors(n,t),Fh.subVectors(e,t);const o=Ci.dot(Ci),a=Ci.dot(cr),c=Ci.dot(Fh),l=cr.dot(cr),u=cr.dot(Fh),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,ur)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ur.x),c.addScaledVector(o,ur.y),c.addScaledVector(a,ur.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return Hh.setScalar(0),Vh.setScalar(0),Gh.setScalar(0),Hh.fromBufferAttribute(e,t),Vh.fromBufferAttribute(e,n),Gh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Hh,s.x),o.addScaledVector(Vh,s.y),o.addScaledVector(Gh,s.z),o}static isFrontFacing(e,t,n,i){return Ci.subVectors(n,t),cr.subVectors(e,t),Ci.cross(cr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ci.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ao.subVectors(i,n),lo.subVectors(s,n),Bh.subVectors(e,n);const c=ao.dot(Bh),l=lo.dot(Bh);if(c<=0&&l<=0)return t.copy(n);kh.subVectors(e,i);const u=ao.dot(kh),h=lo.dot(kh);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ao,o);zh.subVectors(e,s);const d=ao.dot(zh),g=lo.dot(zh);if(g>=0&&d<=g)return t.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(lo,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return bm.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(bm,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(ao,o).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Wh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?r+(e-r)*6*t:t<.5?e:t<.6666666666666666?r+(e-r)*6*(.6666666666666666-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=bh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Wh(o,s,e+.3333333333333333),this.g=Wh(o,s,e),this.b=Wh(o,s,e-.3333333333333333)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=wm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return pt.workingToColorSpace(_n.copy(this),e),Math.round(ut(_n.r*255,0,255))*65536+Math.round(ut(_n.g*255,0,255))*256+Math.round(ut(_n.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(_n.copy(this),t);const n=_n.r,i=_n.g,s=_n.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=on){pt.workingToColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,i=_n.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(kl);const n=_a(Br.h,kl.h,t),i=_a(Br.s,kl.s,t),s=_a(Br.l,kl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Je;Je.NAMES=wm;let Xx=0;class Xi extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Xs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pu,this.blendDst=Lu,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pu&&(n.blendSrc=this.blendSrc),this.blendDst!==Lu&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kr extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new X,zl=new ct;let qx=0;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eh,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),e}}class Am extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rm extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yx=0;const _i=new it,Xh=new Ft,co=new X,ii=new Vi,Ta=new Vi,an=new X;class Li extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?Rm:Am)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(ii.min,Ta.min),ii.expandByPoint(an),an.addVectors(ii.max,Ta.max),ii.expandByPoint(an)):(ii.expandByPoint(Ta.min),ii.expandByPoint(Ta.max))}ii.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)an.fromBufferAttribute(a,l),c&&(co.fromBufferAttribute(e,l),an.add(co)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new X,c[C]=new X;const l=new X,u=new X,h=new X,f=new ct,d=new ct,g=new ct,_=new X,m=new X;function p(C,S,x){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(w),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),a[C].add(_),a[S].add(_),a[x].add(_),c[C].add(m),c[S].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,S=M.length;C<S;++C){const x=M[C],w=x.start,P=x.count;for(let U=w,H=w+P;U<H;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new X,v=new X,T=new X,b=new X;function E(C){T.fromBufferAttribute(i,C),b.copy(T);const S=a[C];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(b,S);const w=v.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,w)}for(let C=0,S=M.length;C<S;++C){const x=M[C],w=x.start,P=x.count;for(let U=w,H=w+P;U<H;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new X,s=new X,o=new X,a=new X,c=new X,l=new X,u=new X,h=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Li,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cm=new it,ps=new Ol,Hl=new Gi,Pm=new X,Vl=new X,Gl=new X,Wl=new X,qh=new X,Xl=new X,Lm=new X,ql=new X;class vn extends Ft{constructor(e=new Li,t=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Xl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(qh.fromBufferAttribute(h,e),o?Xl.addScaledVector(qh,u):Xl.addScaledVector(qh.sub(t),u))}t.add(Xl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hl.copy(n.boundingSphere),Hl.applyMatrix4(s),ps.copy(e.ray).recast(e.near),!(Hl.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Hl,Pm)===null||ps.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Cm.copy(s).invert(),ps.copy(e.ray).applyMatrix4(Cm),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=y;v<T;v+=3){const b=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);i=Yl(this,p,e,n,l,u,h,b,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Yl(this,o,e,n,l,u,h,M,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=y;v<T;v+=3){const b=v,E=v+1,C=v+2;i=Yl(this,p,e,n,l,u,h,b,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,v=m+2;i=Yl(this,o,e,n,l,u,h,M,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function $x(r,e,t,n,i,s,o,a){let c;if(e.side===zn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===ir,a),c===null)return null;ql.copy(a),ql.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ql);return l<t.near||l>t.far?null:{distance:l,point:ql.clone(),object:r}}function Yl(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Vl),r.getVertexPosition(c,Gl),r.getVertexPosition(l,Wl);const u=$x(r,e,t,n,Vl,Gl,Wl,Lm);if(u){const h=new X;Pi.getBarycoord(Lm,Vl,Gl,Wl,h),i&&(u.uv=Pi.getInterpolatedAttribute(i,a,c,l,h,new ct)),s&&(u.uv1=Pi.getInterpolatedAttribute(s,a,c,l,h,new ct)),o&&(u.normal=Pi.getInterpolatedAttribute(o,a,c,l,h,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new X,materialIndex:0};Pi.getNormal(Vl,Gl,Wl,f.normal),u.face=f,u.barycoord=h}return u}class Ea extends Li{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new gi(l,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(h,2));function g(_,m,p,M,y,v,T,b,E,C,S){const x=v/E,w=T/C,P=v/2,U=T/2,H=b/2,F=E+1,N=C+1;let k=0,B=0;const Q=new X;for(let I=0;I<N;I++){const se=I*w-U;for(let Me=0;Me<F;Me++){const Fe=Me*x-P;Q[_]=Fe*M,Q[m]=se*y,Q[p]=H,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Me/E),h.push(1-I/C),k+=1}}for(let I=0;I<C;I++)for(let se=0;se<E;se++){const Me=f+se+F*I,Fe=f+se+F*(I+1),le=f+(se+1)+F*(I+1),pe=f+(se+1)+F*I;c.push(Me,Fe,pe),c.push(Fe,le,pe),B+=6}a.addGroup(d,B,S),d+=B,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pn(r){const e={};for(let t=0;t<r.length;t++){const n=uo(r[t]);for(const i in n)e[i]=n[i]}return e}function jx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Dm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Kx={clone:uo,merge:Pn};var Zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zx,this.fragmentShader=Jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Im extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new X,Nm=new ct,Um=new ct;class xn extends Im{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,Nm,Um),t.subVectors(Um,Nm)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ho=-90,fo=1;class Qx extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new xn(ho,fo,e,t);i.layers=this.layers,this.add(i);const s=new xn(ho,fo,e,t);s.layers=this.layers,this.add(s);const o=new xn(ho,fo,e,t);o.layers=this.layers,this.add(o);const a=new xn(ho,fo,e,t);a.layers=this.layers,this.add(a);const c=new xn(ho,fo,e,t);c.layers=this.layers,this.add(c);const l=new xn(ho,fo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Om extends Jt{constructor(e=[],t=Ys,n,i,s,o,a,c,l,u){super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ey extends hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Om(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ea(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:uo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Cr});s.uniforms.tEquirect.value=t;const o=new vn(i,s),a=t.minFilter;return t.minFilter===rr&&(t.minFilter=ti),new Qx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ms extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $h extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ny{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eh,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new X;class jh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fm=new X,Bm=new vt,km=new vt,iy=new X,zm=new it,$l=new X,Kh=new Gi,Hm=new it,Zh=new Ol;class ry extends vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qp,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$l),this.boundingBox.expandByPoint($l)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$l),this.boundingSphere.expandByPoint($l)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kh.copy(this.boundingSphere),Kh.applyMatrix4(i),e.ray.intersectsSphere(Kh)!==!1&&(Hm.copy(i).invert(),Zh.copy(e.ray).applyMatrix4(Hm),!(this.boundingBox!==null&&Zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ex?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Bm.fromBufferAttribute(i.attributes.skinIndex,e),km.fromBufferAttribute(i.attributes.skinWeight,e),Fm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=km.getComponent(s);if(o!==0){const a=Bm.getComponent(s);zm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(iy.copy(Fm).applyMatrix4(zm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vm extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gm extends Jt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=An,u=An,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wm=new it,sy=new it;class Jh{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:sy;Wm.multiplyMatrices(a,t[s]),Wm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gm(t,e,e,mi,Ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Vm),this.bones.push(o),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Qh extends Cn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const po=new it,Xm=new it,jl=[],qm=new Vi,oy=new it,ba=new vn,wa=new Gi;class ay extends vn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,oy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,po),qm.copy(e.boundingBox).applyMatrix4(po),this.boundingBox.union(qm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,po),wa.copy(e.boundingSphere).applyMatrix4(po),this.boundingSphere.union(wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),e.ray.intersectsSphere(wa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,po),Xm.multiplyMatrices(n,po),ba.matrixWorld=Xm,ba.raycast(e,jl);for(let o=0,a=jl.length;o<a;o++){const c=jl[o];c.instanceId=s,c.object=this,t.push(c)}jl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gm(new Float32Array(i*this.count),i,this.count,Wu,Ei));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ef=new X,ly=new X,cy=new tt;class gs{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ef.subVectors(n,t).cross(ly.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ef),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cy.getNormalMatrix(e),i=this.coplanarPoint(ef).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Gi,uy=new ct(.5,.5),Kl=new X;class tf{constructor(e=new gs,t=new gs,n=new gs,i=new gs,s=new gs,o=new gs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],y=s[13],v=s[14],T=s[15];if(i[0].setComponents(l-o,d-u,p-g,T-M).normalize(),i[1].setComponents(l+o,d+u,p+g,T+M).normalize(),i[2].setComponents(l+a,d+h,p+_,T+y).normalize(),i[3].setComponents(l-a,d-h,p-_,T-y).normalize(),n)i[4].setComponents(c,f,m,v).normalize(),i[5].setComponents(l-c,d-f,p-m,T-v).normalize();else if(i[4].setComponents(l-c,d-f,p-m,T-v).normalize(),t===Hi)i[5].setComponents(l+c,d+f,p+m,T+v).normalize();else if(t===Pl)i[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const t=uy.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Kl.x=i.normal.x>0?e.max.x:e.min.x,Kl.y=i.normal.y>0?e.max.y:e.min.y,Kl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ym extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new X,Jl=new X,$m=new it,Aa=new Ol,Ql=new Gi,nf=new X,jm=new X;class rf extends Ft{constructor(e=new Li,t=new Ym){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Zl.fromBufferAttribute(t,i-1),Jl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zl.distanceTo(Jl);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ql.copy(n.boundingSphere),Ql.applyMatrix4(i),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;$m.copy(i).invert(),Aa.copy(e.ray).applyMatrix4($m);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),y=ec(this,e,Aa,c,p,M,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=ec(this,e,Aa,c,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=ec(this,e,Aa,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ec(this,e,Aa,c,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ec(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Zl.fromBufferAttribute(a,i),Jl.fromBufferAttribute(a,s),t.distanceSqToSegment(Zl,Jl,nf,jm)>n)return;nf.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(nf);if(!(l<e.near||l>e.far))return{distance:l,point:jm.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Km=new X,Zm=new X;class hy extends rf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Km.fromBufferAttribute(t,i),Zm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Km.distanceTo(Zm);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fy extends rf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jm extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qm=new it,sf=new Ol,tc=new Gi,nc=new X;class dy extends Ft{constructor(e=new Li,t=new Jm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(i),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;Qm.copy(i).invert(),sf.copy(e.ray).applyMatrix4(Qm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);nc.fromBufferAttribute(h,m),eg(nc,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)nc.fromBufferAttribute(h,g),eg(nc,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eg(r,e,t,n,i,s,o){const a=sf.distanceSqToPoint(r);if(a<t){const c=new X;sf.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tg extends Jt{constructor(e,t,n=us,i,s,o,a=An,c=An,l,u=fa,h=1){if(u!==fa&&u!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ng extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mo extends Li{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let y=0;y<l;y++){const v=y*h-s;g.push(v,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const y=M+l*p,v=M+l*(p+1),T=M+1+l*(p+1),b=M+1+l*p;d.push(y,v,b),d.push(v,T,b)}this.setIndex(d),this.setAttribute("position",new gi(g,3)),this.setAttribute("normal",new gi(_,3)),this.setAttribute("uv",new gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class of extends Li{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],h=new X,f=new X,d=new X,g=new X,_=new X,m=new X,p=new X;for(let y=0;y<=n;++y){const v=y/n*s*Math.PI*2;M(v,s,o,e,d),M(v+.01,s,o,e,g),m.subVectors(g,d),p.addVectors(g,d),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let T=0;T<=i;++T){const b=T/i*Math.PI*2,E=-t*Math.cos(b),C=t*Math.sin(b);h.x=d.x+(E*p.x+C*_.x),h.y=d.y+(E*p.y+C*_.y),h.z=d.z+(E*p.z+C*_.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(y/n),u.push(T/i)}}for(let y=1;y<=n;y++)for(let v=1;v<=i;v++){const T=(i+1)*(y-1)+(v-1),b=(i+1)*y+(v-1),E=(i+1)*y+v,C=(i+1)*(y-1)+v;a.push(T,b,C),a.push(b,E,C)}this.setIndex(a),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(l,3)),this.setAttribute("uv",new gi(u,2));function M(y,v,T,b,E){const C=Math.cos(y),S=Math.sin(y),x=T/v*y,w=Math.cos(x);E.x=b*(2+w)*.5*C,E.y=b*(2+w)*S*.5,E.z=b*Math.sin(x)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ic extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=om,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qi extends ic{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class py extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class my extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function rc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function gy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _y(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ig(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function rg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ra{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vy extends Ra{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nm,endingEnd:nm}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case im:s=e,a=2*t-n;break;case rm:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case im:o=e,c=2*n-t;break;case rm:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let T=0;T!==a;++T)s[T]=p*o[u+T]+M*o[l+T]+y*o[c+T]+v*o[h+T];return s}}class xy extends Ra{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class yy extends Ra{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rc(t,this.TimeBufferType),this.values=rc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rc(e.times,Array),values:rc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case Mh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&gy(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mh,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Di.prototype.ValueTypeName="",Di.prototype.TimeBufferType=Float32Array,Di.prototype.ValueBufferType=Float32Array,Di.prototype.DefaultInterpolation=ma;class go extends Di{constructor(e,t,n){super(e,t,n)}}go.prototype.ValueTypeName="bool",go.prototype.ValueBufferType=Array,go.prototype.DefaultInterpolation=pa,go.prototype.InterpolantFactoryMethodLinear=void 0,go.prototype.InterpolantFactoryMethodSmooth=void 0;class sg extends Di{constructor(e,t,n,i){super(e,t,n,i)}}sg.prototype.ValueTypeName="color";class _o extends Di{constructor(e,t,n,i){super(e,t,n,i)}}_o.prototype.ValueTypeName="number";class Sy extends Ra{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Ir.slerpFlat(s,0,o,l-a,o,l,c);return s}}class vo extends Di{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sy(this.times,this.values,this.getValueSize(),e)}}vo.prototype.ValueTypeName="quaternion",vo.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends Di{constructor(e,t,n){super(e,t,n)}}xo.prototype.ValueTypeName="string",xo.prototype.ValueBufferType=Array,xo.prototype.DefaultInterpolation=pa,xo.prototype.InterpolantFactoryMethodLinear=void 0,xo.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends Di{constructor(e,t,n,i){super(e,t,n,i)}}yo.prototype.ValueTypeName="vector";class My{constructor(e="",t=-1,n=[],i=tx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ey(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Di.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=_y(c);c=ig(c,1,u),l=ig(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new _o(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];rg(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let M=0;M!==f[g].morphTargets.length;++M){const y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new _o(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(yo,d+".position",f,"pos",i),n(vo,d+".quaternion",f,"rot",i),n(yo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ty(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _o;case"vector":case"vector2":case"vector3":case"vector4":return yo;case"color":return sg;case"quaternion":return vo;case"bool":case"boolean":return go;case"string":return xo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ey(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ty(r.type);if(r.times===void 0){const t=[],n=[];rg(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class by{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const wy=new by;class So{constructor(e){this.manager=e!==void 0?e:wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}So.DEFAULT_MATERIAL_NAME="__DEFAULT";const dr={};class Ay extends Error{constructor(e,t){super(e),this.response=t}}class og extends So{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(dr[e]!==void 0){dr[e].push({onLoad:t,onProgress:n,onError:i});return}dr[e]=[],dr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=dr[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let b=0,E=u.length;b<E;b++){const C=u[b];C.onProgress&&C.onProgress(T)}p.enqueue(v),M()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Ay(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{fr.add(`file:${e}`,l);const u=dr[e];delete dr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=dr[e];if(u===void 0)throw this.manager.itemError(e),l;delete dr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Mo=new WeakMap;class Ry extends So{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Mo.get(o);h===void 0&&(h=[],Mo.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=va("img");function c(){u(),t&&t(this);const h=Mo.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Mo.delete(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),fr.remove(`image:${e}`);const f=Mo.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Mo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class ag extends So{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,o=new Ry(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class af extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const lf=new it,lg=new X,cg=new X;class cf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tf,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lg.setFromMatrixPosition(e.matrixWorld),t.position.copy(lg),cg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cg),t.updateMatrixWorld(),lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cy extends cf{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Py extends af{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Cy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ug=new it,Ca=new X,uf=new X;class Ly extends cf{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ca),uf.copy(n.position),uf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(uf),n.updateMatrixWorld(),i.makeTranslation(-Ca.x,-Ca.y,-Ca.z),ug.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ug,n.coordinateSystem,n.reversedDepth)}}class Dy extends af{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ly}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sc extends Im{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Iy extends cf{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hg extends af{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Iy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const hf=new WeakMap;class Ny extends So{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(hf.has(o)===!0)i&&i(hf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return fr.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),hf.set(c,l),fr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});fr.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Uy extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ff="\\[\\]\\.:\\/",Oy=new RegExp("["+ff+"]","g"),df="[^"+ff+"]",Fy="[^"+ff.replace("\\.","")+"]",By=/((?:WC+[\/:])*)/.source.replace("WC",df),ky=/(WCOD+)?/.source.replace("WCOD",Fy),zy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),Hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),Vy=new RegExp("^"+By+ky+zy+Hy+"$"),Gy=["material","materials","bones","map"];class Wy{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Oy,"")}static parseTrackName(e){const t=Vy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Gy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=Wy,St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray],St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function fg(r,e,t,n){const i=Xy(n);switch(t){case Qp:return r*e;case Wu:return r*e/i.components*i.byteLength;case Xu:return r*e/i.components*i.byteLength;case tm:return r*e*2/i.components*i.byteLength;case qu:return r*e*2/i.components*i.byteLength;case em:return r*e*3/i.components*i.byteLength;case mi:return r*e*4/i.components*i.byteLength;case Yu:return r*e*4/i.components*i.byteLength;case bl:case wl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Al:case Rl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ju:case Zu:return Math.max(r,16)*Math.max(e,8)/4;case $u:case Ku:return Math.max(r,8)*Math.max(e,8)/2;case Ju:case Qu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case mh:case gh:case _h:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vh:case xh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yh:case Sh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xy(r){switch(r){case zi:case jp:return{byteLength:1,components:1};case ca:case Kp:case ua:return{byteLength:2,components:1};case Vu:case Gu:return{byteLength:2,components:4};case us:case Hu:case Ei:return{byteLength:4,components:1};case Zp:case Jp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cu}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function qy(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,a),h.length===0)r.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$y=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_S=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ES=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$S=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rt={alphahash_fragment:Yy,alphahash_pars_fragment:$y,alphamap_fragment:jy,alphamap_pars_fragment:Ky,alphatest_fragment:Zy,alphatest_pars_fragment:Jy,aomap_fragment:Qy,aomap_pars_fragment:eS,batching_pars_vertex:tS,batching_vertex:nS,begin_vertex:iS,beginnormal_vertex:rS,bsdfs:sS,iridescence_fragment:oS,bumpmap_pars_fragment:aS,clipping_planes_fragment:lS,clipping_planes_pars_fragment:cS,clipping_planes_pars_vertex:uS,clipping_planes_vertex:hS,color_fragment:fS,color_pars_fragment:dS,color_pars_vertex:pS,color_vertex:mS,common:gS,cube_uv_reflection_fragment:_S,defaultnormal_vertex:vS,displacementmap_pars_vertex:xS,displacementmap_vertex:yS,emissivemap_fragment:SS,emissivemap_pars_fragment:MS,colorspace_fragment:TS,colorspace_pars_fragment:ES,envmap_fragment:bS,envmap_common_pars_fragment:wS,envmap_pars_fragment:AS,envmap_pars_vertex:RS,envmap_physical_pars_fragment:kS,envmap_vertex:CS,fog_vertex:PS,fog_pars_vertex:LS,fog_fragment:DS,fog_pars_fragment:IS,gradientmap_pars_fragment:NS,lightmap_pars_fragment:US,lights_lambert_fragment:OS,lights_lambert_pars_fragment:FS,lights_pars_begin:BS,lights_toon_fragment:zS,lights_toon_pars_fragment:HS,lights_phong_fragment:VS,lights_phong_pars_fragment:GS,lights_physical_fragment:WS,lights_physical_pars_fragment:XS,lights_fragment_begin:qS,lights_fragment_maps:YS,lights_fragment_end:$S,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:KS,logdepthbuf_pars_vertex:ZS,logdepthbuf_vertex:JS,map_fragment:QS,map_pars_fragment:eM,map_particle_fragment:tM,map_particle_pars_fragment:nM,metalnessmap_fragment:iM,metalnessmap_pars_fragment:rM,morphinstance_vertex:sM,morphcolor_vertex:oM,morphnormal_vertex:aM,morphtarget_pars_vertex:lM,morphtarget_vertex:cM,normal_fragment_begin:uM,normal_fragment_maps:hM,normal_pars_fragment:fM,normal_pars_vertex:dM,normal_vertex:pM,normalmap_pars_fragment:mM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:vM,iridescence_pars_fragment:xM,opaque_fragment:yM,packing:SM,premultiplied_alpha_fragment:MM,project_vertex:TM,dithering_fragment:EM,dithering_pars_fragment:bM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:AM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:CM,shadowmap_vertex:PM,shadowmask_pars_fragment:LM,skinbase_vertex:DM,skinning_pars_vertex:IM,skinning_vertex:NM,skinnormal_vertex:UM,specularmap_fragment:OM,specularmap_pars_fragment:FM,tonemapping_fragment:BM,tonemapping_pars_fragment:kM,transmission_fragment:zM,transmission_pars_fragment:HM,uv_pars_fragment:VM,uv_pars_vertex:GM,uv_vertex:WM,worldpos_vertex:XM,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Yi={basic:{uniforms:Pn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Pn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Pn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Pn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Pn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Pn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Pn([Ee.points,Ee.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Pn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Pn([Ee.common,Ee.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Pn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Pn([Ee.sprite,Ee.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Pn([Ee.common,Ee.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Pn([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Yi.physical={uniforms:Pn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const oc={r:0,b:0,g:0},vs=new Wi,qM=new it;function YM(r,e,t,n,i,s,o){const a=new Je(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const T=g(y);T===null?p(a,c):T&&T.isColor&&(p(T,1),v=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Ml)?(u===void 0&&(u=new vn(new Ea(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:uo(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(vs)),u.material.toneMapped=pt.getTransfer(T.colorSpace)!==Tt,(h!==T||f!==T.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new vn(new mo(2,2),new hr({name:"BackgroundMaterial",uniforms:uo(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=pt.getTransfer(T.colorSpace)!==Tt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,d=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(oc,Dm(r)),n.buffers.color.setClear(oc.r,oc.g,oc.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:M}}function $M(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(x,w,P,U,H){let F=!1;const N=h(U,P,w);s!==N&&(s=N,l(s.object)),F=d(x,U,P,H),F&&g(x,U,P,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(x,w,P,U),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return r.createVertexArray()}function l(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,w,P){const U=P.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let F=H[w.id];F===void 0&&(F={},H[w.id]=F);let N=F[U];return N===void 0&&(N=f(c()),F[U]=N),N}function f(x){const w=[],P=[],U=[];for(let H=0;H<t;H++)w[H]=0,P[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:U,object:x,attributes:{},index:null}}function d(x,w,P,U){const H=s.attributes,F=w.attributes;let N=0;const k=P.getAttributes();for(const B in k)if(k[B].location>=0){const I=H[B];let se=F[B];if(se===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),I===void 0||I.attribute!==se||se&&I.data!==se.data)return!0;N++}return s.attributesNum!==N||s.index!==U}function g(x,w,P,U){const H={},F=w.attributes;let N=0;const k=P.getAttributes();for(const B in k)if(k[B].location>=0){let I=F[B];I===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(I=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(I=x.instanceColor));const se={};se.attribute=I,I&&I.data&&(se.data=I.data),H[B]=se,N++}s.attributes=H,s.attributesNum=N,s.index=U}function _(){const x=s.newAttributes;for(let w=0,P=x.length;w<P;w++)x[w]=0}function m(x){p(x,0)}function p(x,w){const P=s.newAttributes,U=s.enabledAttributes,H=s.attributeDivisors;P[x]=1,U[x]===0&&(r.enableVertexAttribArray(x),U[x]=1),H[x]!==w&&(r.vertexAttribDivisor(x,w),H[x]=w)}function M(){const x=s.newAttributes,w=s.enabledAttributes;for(let P=0,U=w.length;P<U;P++)w[P]!==x[P]&&(r.disableVertexAttribArray(P),w[P]=0)}function y(x,w,P,U,H,F,N){N===!0?r.vertexAttribIPointer(x,w,P,H,F):r.vertexAttribPointer(x,w,P,U,H,F)}function v(x,w,P,U){_();const H=U.attributes,F=P.getAttributes(),N=w.defaultAttributeValues;for(const k in F){const B=F[k];if(B.location>=0){let Q=H[k];if(Q===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const I=Q.normalized,se=Q.itemSize,Me=e.get(Q);if(Me===void 0)continue;const Fe=Me.buffer,le=Me.type,pe=Me.bytesPerElement,$=le===r.INT||le===r.UNSIGNED_INT||Q.gpuType===Hu;if(Q.isInterleavedBufferAttribute){const j=Q.data,oe=j.stride,Y=Q.offset;if(j.isInstancedInterleavedBuffer){for(let K=0;K<B.locationSize;K++)p(B.location+K,j.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let K=0;K<B.locationSize;K++)m(B.location+K);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let K=0;K<B.locationSize;K++)y(B.location+K,se/B.locationSize,le,I,oe*pe,(Y+se/B.locationSize*K)*pe,$)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)p(B.location+j,Q.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<B.locationSize;j++)m(B.location+j);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let j=0;j<B.locationSize;j++)y(B.location+j,se/B.locationSize,le,I,se*pe,se/B.locationSize*j*pe,$)}}else if(N!==void 0){const I=N[k];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(B.location,I);break;case 3:r.vertexAttrib3fv(B.location,I);break;case 4:r.vertexAttrib4fv(B.location,I);break;default:r.vertexAttrib1fv(B.location,I)}}}}M()}function T(){C();for(const x in n){const w=n[x];for(const P in w){const U=w[P];for(const H in U)u(U[H].object),delete U[H];delete w[P]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const w=n[x.id];for(const P in w){const U=w[P];for(const H in U)u(U[H].object),delete U[H];delete w[P]}delete n[x.id]}function E(x){for(const w in n){const P=n[w];if(P[x.id]===void 0)continue;const U=P[x.id];for(const H in U)u(U[H].object),delete U[H];delete P[x.id]}}function C(){S(),o=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function jM(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function KM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==mi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==zi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ei&&!C)}function c(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:b}}function ZM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new gs,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:n,y=M*4;let v=p.clippingState||null;c.value=v,v=u(g,f,y,d);for(let T=0;T!==y;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function JM(r){let e=new WeakMap;function t(o,a){return a===ku?o.mapping=Ys:a===zu&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ku||a===zu)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ey(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const To=4,pg=[.125,.215,.35,.446,.526,.582],xs=20,pf=new sc,mg=new Je;let mf=null,gf=0,_f=0,vf=!1;const ys=(1+Math.sqrt(5))/2,Eo=1/ys,gg=[new X(-ys,Eo,0),new X(ys,Eo,0),new X(-Eo,0,ys),new X(Eo,0,ys),new X(0,ys,-Eo),new X(0,ys,Eo),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],QM=new X;class _g{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=QM}=s;mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mf,gf,_f),this._renderer.xr.enabled=vf,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:ua,format:mi,colorSpace:Rn,depthBuffer:!1},i=vg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eT(s)),this._blurMaterial=tT(s,e,t)}return i}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,pf)}_sceneToCubeUV(e,t,n,i,s){const c=new xn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(mg),h.toneMapping=Pr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new kr({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),m=new vn(new Ea,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(mg),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const T=this._cubeSize;ac(i,v*T,y>2?T:0,T,T),h.setRenderTarget(i),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ys||e.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ac(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,pf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gg[(i-s-1)%gg.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new vn(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*xs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):xs;m>xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);const p=[];let M=0;for(let E=0;E<xs;++E){const C=E/_,S=Math.exp(-C*C/2);p.push(S),E===0?M+=S:E<m&&(M+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[i],T=3*v*(i>y-To?i-y+To:0),b=4*(this._cubeSize-v);ac(t,T,b,3*v,2*v),c.setRenderTarget(t),c.render(h,pf)}}function eT(r){const e=[],t=[],n=[];let i=r;const s=r-To+1+pg.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-To?c=pg[o-r+To-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,C=b>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];M.set(S,_*g*b),y.set(f,m*g*b);const x=[b,b,b,b,b,b];v.set(x,p*g*b)}const T=new Li;T.setAttribute("position",new Cn(M,_)),T.setAttribute("uv",new Cn(y,m)),T.setAttribute("faceIndex",new Cn(v,p)),e.push(T),i>To&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vg(r,e,t){const n=new hs(r,e,t);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ac(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tT(r,e,t){const n=new Float32Array(xs),i=new X(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function xg(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function yg(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nT(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ku||c===zu,u=c===Ys||c===$s;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _g(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new _g(r)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function iT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&xa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rT(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let y=0,v=M.length;y<v;y+=3){const T=M[y+0],b=M[y+1],E=M[y+2];f.push(T,b,b,E,E,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const T=y+0,b=y+1,E=y+2;f.push(T,b,b,E,E,T)}}else return;const m=new(fm(f)?Rm:Am)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function sT(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function oT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function aT(r,e,t){const n=new WeakMap,i=new vt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const b=new Float32Array(v*T*4*h),E=new gm(b,v,T,h);E.type=Ei,E.needsUpdate=!0;const C=y*4;for(let x=0;x<h;x++){const w=m[x],P=p[x],U=M[x],H=v*T*4*x;for(let F=0;F<w.count;F++){const N=F*C;d===!0&&(i.fromBufferAttribute(w,F),b[H+N+0]=i.x,b[H+N+1]=i.y,b[H+N+2]=i.z,b[H+N+3]=0),g===!0&&(i.fromBufferAttribute(P,F),b[H+N+4]=i.x,b[H+N+5]=i.y,b[H+N+6]=i.z,b[H+N+7]=0),_===!0&&(i.fromBufferAttribute(U,F),b[H+N+8]=i.x,b[H+N+9]=i.y,b[H+N+10]=i.z,b[H+N+11]=U.itemSize===4?i.w:1)}}f={count:h,texture:E,size:new ct(v,T)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function lT(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Sg=new Jt,Mg=new tg(1,1),Tg=new gm,Eg=new Fx,bg=new Om,wg=[],Ag=[],Rg=new Float32Array(16),Cg=new Float32Array(9),Pg=new Float32Array(4);function bo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=wg[i];if(s===void 0&&(s=new Float32Array(i),wg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function lc(r,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function hT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function dT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Pg.set(n),r.uniformMatrix2fv(this.addr,!1,Pg),en(t,n)}}function pT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Cg.set(n),r.uniformMatrix3fv(this.addr,!1,Cg),en(t,n)}}function mT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Rg.set(n),r.uniformMatrix4fv(this.addr,!1,Rg),en(t,n)}}function gT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _T(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function xT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function yT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ST(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function MT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function TT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function ET(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Mg.compareFunction=lm,s=Mg):s=Sg,t.setTexture2D(e||s,i)}function bT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eg,i)}function wT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bg,i)}function AT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tg,i)}function RT(r){switch(r){case 5126:return cT;case 35664:return uT;case 35665:return hT;case 35666:return fT;case 35674:return dT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return _T;case 35668:case 35672:return vT;case 35669:case 35673:return xT;case 5125:return yT;case 36294:return ST;case 36295:return MT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return AT}}function CT(r,e){r.uniform1fv(this.addr,e)}function PT(r,e){const t=bo(e,this.size,2);r.uniform2fv(this.addr,t)}function LT(r,e){const t=bo(e,this.size,3);r.uniform3fv(this.addr,t)}function DT(r,e){const t=bo(e,this.size,4);r.uniform4fv(this.addr,t)}function IT(r,e){const t=bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function NT(r,e){const t=bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function UT(r,e){const t=bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function OT(r,e){r.uniform1iv(this.addr,e)}function FT(r,e){r.uniform2iv(this.addr,e)}function BT(r,e){r.uniform3iv(this.addr,e)}function kT(r,e){r.uniform4iv(this.addr,e)}function zT(r,e){r.uniform1uiv(this.addr,e)}function HT(r,e){r.uniform2uiv(this.addr,e)}function VT(r,e){r.uniform3uiv(this.addr,e)}function GT(r,e){r.uniform4uiv(this.addr,e)}function WT(r,e,t){const n=this.cache,i=e.length,s=lc(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Sg,s[o])}function XT(r,e,t){const n=this.cache,i=e.length,s=lc(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Eg,s[o])}function qT(r,e,t){const n=this.cache,i=e.length,s=lc(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||bg,s[o])}function YT(r,e,t){const n=this.cache,i=e.length,s=lc(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tg,s[o])}function $T(r){switch(r){case 5126:return CT;case 35664:return PT;case 35665:return LT;case 35666:return DT;case 35674:return IT;case 35675:return NT;case 35676:return UT;case 5124:case 35670:return OT;case 35667:case 35671:return FT;case 35668:case 35672:return BT;case 35669:case 35673:return kT;case 5125:return zT;case 36294:return HT;case 36295:return VT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}class jT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=RT(t.type)}}class KT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$T(t.type)}}class ZT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function Lg(r,e){r.seq.push(e),r.map[e.id]=e}function JT(r,e,t){const n=r.name,i=n.length;for(yf.lastIndex=0;;){const s=yf.exec(n),o=yf.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Lg(t,l===void 0?new jT(a,r,e):new KT(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new ZT(a),Lg(t,h)),t=h}}}class cc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);JT(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Dg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const QT=37297;let eE=0;function tE(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ig=new tt;function nE(r){pt._getMatrix(Ig,pt.workingColorSpace,r);const e=`mat3( ${Ig.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(r)){case Cl:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ng(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+tE(r.getShaderSource(e),a)}else return s}function iE(r,e){const t=nE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rE(r,e){let t;switch(e){case Yv:t="Linear";break;case $v:t="Reinhard";break;case jv:t="Cineon";break;case Kv:t="ACESFilmic";break;case Jv:t="AgX";break;case Qv:t="Neutral";break;case Zv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uc=new X;function sE(){pt.getLuminanceCoefficients(uc);const r=uc.x.toFixed(4),e=uc.y.toFixed(4),t=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function aE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function La(r){return r!==""}function Ug(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(r){return r.replace(cE,hE)}const uE=new Map;function hE(r,e){let t=rt[e];if(t===void 0){const n=uE.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sf(t)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(r){return r.replace(fE,dE)}function dE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function mE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ys:case $s:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function _E(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xp:e="ENVMAP_BLENDING_MULTIPLY";break;case Xv:e="ENVMAP_BLENDING_MIX";break;case qv:e="ENVMAP_BLENDING_ADD";break}return e}function vE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xE(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=pE(t),l=mE(t),u=gE(t),h=_E(t),f=vE(t),d=oE(t),g=aE(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(La).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(La).join(`
`),p.length>0&&(p+=`
`)):(m=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),p=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?rt.tonemapping_pars_fragment:"",t.toneMapping!==Pr?rE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,iE("linearToOutputTexel",t.outputColorSpace),sE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),o=Sf(o),o=Ug(o,t),o=Og(o,t),a=Sf(a),a=Ug(a,t),a=Og(a,t),o=Fg(o),a=Fg(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,v=M+p+a,T=Dg(i,i.VERTEX_SHADER,y),b=Dg(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(w){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(T)||"",H=i.getShaderInfoLog(b)||"",F=P.trim(),N=U.trim(),k=H.trim();let B=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,b);else{const I=Ng(i,T,"vertex"),se=Ng(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+I+`
`+se)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||k==="")&&(Q=!1);Q&&(w.diagnostics={runnable:B,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(T),i.deleteShader(b),C=new cc(i,_),S=lE(i,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,QT)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let yE=0;class SE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ME(e),t.set(e,n)),n}}class ME{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}}function TE(r,e,t,n,i,s,o){const a=new xm,c=new SE,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,w,P,U){const H=P.fog,F=U.geometry,N=S.isMeshStandardMaterial?P.environment:null,k=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),B=k&&k.mapping===Ml?k.image.height:null,Q=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const I=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,se=I!==void 0?I.length:0;let Me=0;F.morphAttributes.position!==void 0&&(Me=1),F.morphAttributes.normal!==void 0&&(Me=2),F.morphAttributes.color!==void 0&&(Me=3);let Fe,le,pe,$;if(Q){const Ae=Yi[Q];Fe=Ae.vertexShader,le=Ae.fragmentShader}else Fe=S.vertexShader,le=S.fragmentShader,c.update(S),pe=c.getVertexShaderID(S),$=c.getFragmentShaderID(S);const j=r.getRenderTarget(),oe=r.state.buffers.depth.getReversed(),Y=U.isInstancedMesh===!0,K=U.isBatchedMesh===!0,re=!!S.map,Ne=!!S.matcap,L=!!k,Re=!!S.aoMap,_e=!!S.lightMap,me=!!S.bumpMap,V=!!S.normalMap,Ke=!!S.displacementMap,we=!!S.emissiveMap,Ge=!!S.metalnessMap,Qe=!!S.roughnessMap,mt=S.anisotropy>0,D=S.clearcoat>0,A=S.dispersion>0,q=S.iridescence>0,te=S.sheen>0,ne=S.transmission>0,ee=mt&&!!S.anisotropyMap,Ce=D&&!!S.clearcoatMap,fe=D&&!!S.clearcoatNormalMap,Ue=D&&!!S.clearcoatRoughnessMap,ye=q&&!!S.iridescenceMap,he=q&&!!S.iridescenceThicknessMap,xe=te&&!!S.sheenColorMap,We=te&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,ve=!!S.specularColorMap,je=!!S.specularIntensityMap,O=ne&&!!S.transmissionMap,ue=ne&&!!S.thicknessMap,de=!!S.gradientMap,be=!!S.alphaMap,ce=S.alphaTest>0,ie=!!S.alphaHash,Le=!!S.extensions;let qe=Pr;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(qe=r.toneMapping);const gt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Fe,fragmentShader:le,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:K,batchingColor:K&&U._colorsTexture!==null,instancing:Y,instancingColor:Y&&U.instanceColor!==null,instancingMorph:Y&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Rn,alphaToCoverage:!!S.alphaToCoverage,map:re,matcap:Ne,envMap:L,envMapMode:L&&k.mapping,envMapCubeUVHeight:B,aoMap:Re,lightMap:_e,bumpMap:me,normalMap:V,displacementMap:f&&Ke,emissiveMap:we,normalMapObjectSpace:V&&S.normalMapType===sx,normalMapTangentSpace:V&&S.normalMapType===om,metalnessMap:Ge,roughnessMap:Qe,anisotropy:mt,anisotropyMap:ee,clearcoat:D,clearcoatMap:Ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ue,dispersion:A,iridescence:q,iridescenceMap:ye,iridescenceThicknessMap:he,sheen:te,sheenColorMap:xe,sheenRoughnessMap:We,specularMap:Oe,specularColorMap:ve,specularIntensityMap:je,transmission:ne,transmissionMap:O,thicknessMap:ue,gradientMap:de,opaque:S.transparent===!1&&S.blending===Xs&&S.alphaToCoverage===!1,alphaMap:be,alphaTest:ce,alphaHash:ie,combine:S.combine,mapUv:re&&_(S.map.channel),aoMapUv:Re&&_(S.aoMap.channel),lightMapUv:_e&&_(S.lightMap.channel),bumpMapUv:me&&_(S.bumpMap.channel),normalMapUv:V&&_(S.normalMap.channel),displacementMapUv:Ke&&_(S.displacementMap.channel),emissiveMapUv:we&&_(S.emissiveMap.channel),metalnessMapUv:Ge&&_(S.metalnessMap.channel),roughnessMapUv:Qe&&_(S.roughnessMap.channel),anisotropyMapUv:ee&&_(S.anisotropyMap.channel),clearcoatMapUv:Ce&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(S.sheenRoughnessMap.channel),specularMapUv:Oe&&_(S.specularMap.channel),specularColorMapUv:ve&&_(S.specularColorMap.channel),specularIntensityMapUv:je&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:ue&&_(S.thicknessMap.channel),alphaMapUv:be&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(V||mt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(re||be),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,decodeVideoTexture:re&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:we&&S.emissiveMap.isVideoTexture===!0&&pt.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ti,flipSided:S.side===zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Le&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&S.extensions.multiDraw===!0||K)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)x.push(w),x.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(M(x,S),y(x,S),x.push(r.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function M(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function y(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=g[S.type];let w;if(x){const P=Yi[x];w=Kx.clone(P.uniforms)}else w=S.uniforms;return w}function T(S,x){let w;for(let P=0,U=u.length;P<U;P++){const H=u[P];if(H.cacheKey===x){w=H,++w.usedTimes;break}}return w===void 0&&(w=new xE(r,x,S,s),u.push(w)),w}function b(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function E(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:C}}function EE(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function bE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zg(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||bE),n.length>1&&n.sort(f||kg),i.length>1&&i.sort(f||kg)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function wE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new zg,r.set(n,[o])):i>=s.length?(o=new zg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function AE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Je};break;case"SpotLight":t={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function RE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let CE=0;function PE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function LE(r){const e=new AE,t=RE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const i=new X,s=new it,o=new it;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,y=0,v=0,T=0,b=0,E=0;l.sort(PE);for(let S=0,x=l.length;S<x;S++){const w=l[S],P=w.color,U=w.intensity,H=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=P.r*U,h+=P.g*U,f+=P.b*U;else if(w.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(w.sh.coefficients[N],U);E++}else if(w.isDirectionalLight){const N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const k=w.shadow,B=t.get(w);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=w.shadow.matrix,M++}n.directional[d]=N,d++}else if(w.isSpotLight){const N=e.get(w);N.position.setFromMatrixPosition(w.matrixWorld),N.color.copy(P).multiplyScalar(U),N.distance=H,N.coneCos=Math.cos(w.angle),N.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),N.decay=w.decay,n.spot[_]=N;const k=w.shadow;if(w.map&&(n.spotLightMap[T]=w.map,T++,k.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[_]=k.matrix,w.castShadow){const B=t.get(w);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=F,v++}_++}else if(w.isRectAreaLight){const N=e.get(w);N.color.copy(P).multiplyScalar(U),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=N,m++}else if(w.isPointLight){const N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),N.distance=w.distance,N.decay=w.decay,w.castShadow){const k=w.shadow,B=t.get(w);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=N,g++}else if(w.isHemisphereLight){const N=e.get(w);N.skyColor.copy(w.color).multiplyScalar(U),N.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[p]=N,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=E,n.version=CE++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Hg(r){const e=new LE(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function DE(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Hg(r),e.set(i,[a])):s>=o.length?(a=new Hg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const IE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UE(r,e,t){let n=new tf;const i=new ct,s=new ct,o=new vt,a=new py({depthPacking:rx}),c=new my,l={},u=t.maxTextureSize,h={[ir]:zn,[zn]:ir,[Ti]:Ti},f=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:IE,fragmentShader:NE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Li;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hp;let p=this.type;this.render=function(b,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),x=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Cr),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=p!==nr&&this.type===nr,H=p===nr&&this.type!==nr;for(let F=0,N=b.length;F<N;F++){const k=b[F],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Q=B.getFrameExtents();if(i.multiply(Q),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,B.mapSize.y=s.y)),B.map===null||U===!0||H===!0){const se=this.type!==nr?{minFilter:An,magFilter:An}:{};B.map!==null&&B.map.dispose(),B.map=new hs(i.x,i.y,se),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const I=B.getViewportCount();for(let se=0;se<I;se++){const Me=B.getViewport(se);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),P.viewport(o),B.updateMatrices(k,se),n=B.getFrustum(),v(E,C,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===nr&&M(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,x,w)};function M(b,E){const C=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new hs(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,C,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,C,d,_,null)}function y(b,E,C,S){let x=null;const w=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)x=w;else if(x=C.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const P=x.uuid,U=E.uuid;let H=l[P];H===void 0&&(H={},l[P]=H);let F=H[U];F===void 0&&(F=x.clone(),H[U]=F,E.addEventListener("dispose",T)),x=F}if(x.visible=E.visible,x.wireframe=E.wireframe,S===nr?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const P=r.properties.get(x);P.light=C}return x}function v(b,E,C,S,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===nr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const U=e.update(b),H=b.material;if(Array.isArray(H)){const F=U.groups;for(let N=0,k=F.length;N<k;N++){const B=F[N],Q=H[B.materialIndex];if(Q&&Q.visible){const I=y(b,Q,S,x);b.onBeforeShadow(r,b,E,C,U,I,B),r.renderBufferDirect(C,null,U,I,b,B),b.onAfterShadow(r,b,E,C,U,I,B)}}}else if(H.visible){const F=y(b,H,S,x);b.onBeforeShadow(r,b,E,C,U,F,null),r.renderBufferDirect(C,null,U,F,b,null),b.onAfterShadow(r,b,E,C,U,F,null)}}const P=b.children;for(let U=0,H=P.length;U<H;U++)v(P[U],E,C,S,x)}function T(b){b.target.removeEventListener("dispose",T);for(const C in l){const S=l[C],x=b.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const OE={[Du]:Iu,[Nu]:Fu,[Uu]:Bu,[qs]:Ou,[Iu]:Du,[Fu]:Nu,[Bu]:Uu,[Ou]:qs};function FE(r,e){function t(){let O=!1;const ue=new vt;let de=null;const be=new vt(0,0,0,0);return{setMask:function(ce){de!==ce&&!O&&(r.colorMask(ce,ce,ce,ce),de=ce)},setLocked:function(ce){O=ce},setClear:function(ce,ie,Le,qe,gt){gt===!0&&(ce*=qe,ie*=qe,Le*=qe),ue.set(ce,ie,Le,qe),be.equals(ue)===!1&&(r.clearColor(ce,ie,Le,qe),be.copy(ue))},reset:function(){O=!1,de=null,be.set(-1,0,0,0)}}}function n(){let O=!1,ue=!1,de=null,be=null,ce=null;return{setReversed:function(ie){if(ue!==ie){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const qe=ce;ce=null,this.setClear(qe)}},getReversed:function(){return ue},setTest:function(ie){ie?j(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(ie){de!==ie&&!O&&(r.depthMask(ie),de=ie)},setFunc:function(ie){if(ue&&(ie=OE[ie]),be!==ie){switch(ie){case Du:r.depthFunc(r.NEVER);break;case Iu:r.depthFunc(r.ALWAYS);break;case Nu:r.depthFunc(r.LESS);break;case qs:r.depthFunc(r.LEQUAL);break;case Uu:r.depthFunc(r.EQUAL);break;case Ou:r.depthFunc(r.GEQUAL);break;case Fu:r.depthFunc(r.GREATER);break;case Bu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}be=ie}},setLocked:function(ie){O=ie},setClear:function(ie){ce!==ie&&(ue&&(ie=1-ie),r.clearDepth(ie),ce=ie)},reset:function(){O=!1,de=null,be=null,ce=null,ue=!1}}}function i(){let O=!1,ue=null,de=null,be=null,ce=null,ie=null,Le=null,qe=null,gt=null;return{setTest:function(Ae){O||(Ae?j(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(Ae){ue!==Ae&&!O&&(r.stencilMask(Ae),ue=Ae)},setFunc:function(Ae,Be,et){(de!==Ae||be!==Be||ce!==et)&&(r.stencilFunc(Ae,Be,et),de=Ae,be=Be,ce=et)},setOp:function(Ae,Be,et){(ie!==Ae||Le!==Be||qe!==et)&&(r.stencilOp(Ae,Be,et),ie=Ae,Le=Be,qe=et)},setLocked:function(Ae){O=Ae},setClear:function(Ae){gt!==Ae&&(r.clearStencil(Ae),gt=Ae)},reset:function(){O=!1,ue=null,de=null,be=null,ce=null,ie=null,Le=null,qe=null,gt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,T=null,b=null,E=new Je(0,0,0),C=0,S=!1,x=null,w=null,P=null,U=null,H=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=k>=2);let Q=null,I={};const se=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Fe=new vt().fromArray(se),le=new vt().fromArray(Me);function pe(O,ue,de,be){const ce=new Uint8Array(4),ie=r.createTexture();r.bindTexture(O,ie),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Le=0;Le<de;Le++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(ue+Le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return ie}const $={};$[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(qs),me(!1),V(zp),j(r.CULL_FACE),Re(Cr);function j(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function oe(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Y(O,ue){return h[O]!==ue?(r.bindFramebuffer(O,ue),h[O]=ue,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ue),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function K(O,ue){let de=d,be=!1;if(O){de=f.get(ue),de===void 0&&(de=[],f.set(ue,de));const ce=O.textures;if(de.length!==ce.length||de[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,Le=ce.length;ie<Le;ie++)de[ie]=r.COLOR_ATTACHMENT0+ie;de.length=ce.length,be=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,be=!0);be&&r.drawBuffers(de)}function re(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const Ne={[cs]:r.FUNC_ADD,[Rv]:r.FUNC_SUBTRACT,[Cv]:r.FUNC_REVERSE_SUBTRACT};Ne[Pv]=r.MIN,Ne[Lv]=r.MAX;const L={[Dv]:r.ZERO,[Iv]:r.ONE,[Nv]:r.SRC_COLOR,[Pu]:r.SRC_ALPHA,[zv]:r.SRC_ALPHA_SATURATE,[Bv]:r.DST_COLOR,[Ov]:r.DST_ALPHA,[Uv]:r.ONE_MINUS_SRC_COLOR,[Lu]:r.ONE_MINUS_SRC_ALPHA,[kv]:r.ONE_MINUS_DST_COLOR,[Fv]:r.ONE_MINUS_DST_ALPHA,[Hv]:r.CONSTANT_COLOR,[Vv]:r.ONE_MINUS_CONSTANT_COLOR,[Gv]:r.CONSTANT_ALPHA,[Wv]:r.ONE_MINUS_CONSTANT_ALPHA};function Re(O,ue,de,be,ce,ie,Le,qe,gt,Ae){if(O===Cr){_===!0&&(oe(r.BLEND),_=!1);return}if(_===!1&&(j(r.BLEND),_=!0),O!==Av){if(O!==m||Ae!==S){if((p!==cs||v!==cs)&&(r.blendEquation(r.FUNC_ADD),p=cs,v=cs),Ae)switch(O){case Xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vp:r.blendFunc(r.ONE,r.ONE);break;case Gp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Gp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,T=null,b=null,E.set(0,0,0),C=0,m=O,S=Ae}return}ce=ce||ue,ie=ie||de,Le=Le||be,(ue!==p||ce!==v)&&(r.blendEquationSeparate(Ne[ue],Ne[ce]),p=ue,v=ce),(de!==M||be!==y||ie!==T||Le!==b)&&(r.blendFuncSeparate(L[de],L[be],L[ie],L[Le]),M=de,y=be,T=ie,b=Le),(qe.equals(E)===!1||gt!==C)&&(r.blendColor(qe.r,qe.g,qe.b,gt),E.copy(qe),C=gt),m=O,S=!1}function _e(O,ue){O.side===Ti?oe(r.CULL_FACE):j(r.CULL_FACE);let de=O.side===zn;ue&&(de=!de),me(de),O.blending===Xs&&O.transparent===!1?Re(Cr):Re(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const be=O.stencilWrite;a.setTest(be),be&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),we(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(O){x!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),x=O)}function V(O){O!==Ev?(j(r.CULL_FACE),O!==w&&(O===zp?r.cullFace(r.BACK):O===bv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),w=O}function Ke(O){O!==P&&(N&&r.lineWidth(O),P=O)}function we(O,ue,de){O?(j(r.POLYGON_OFFSET_FILL),(U!==ue||H!==de)&&(r.polygonOffset(ue,de),U=ue,H=de)):oe(r.POLYGON_OFFSET_FILL)}function Ge(O){O?j(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function Qe(O){O===void 0&&(O=r.TEXTURE0+F-1),Q!==O&&(r.activeTexture(O),Q=O)}function mt(O,ue,de){de===void 0&&(Q===null?de=r.TEXTURE0+F-1:de=Q);let be=I[de];be===void 0&&(be={type:void 0,texture:void 0},I[de]=be),(be.type!==O||be.texture!==ue)&&(Q!==de&&(r.activeTexture(de),Q=de),r.bindTexture(O,ue||$[O]),be.type=O,be.texture=ue)}function D(){const O=I[Q];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(O){Fe.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Fe.copy(O))}function We(O){le.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),le.copy(O))}function Oe(O,ue){let de=l.get(ue);de===void 0&&(de=new WeakMap,l.set(ue,de));let be=de.get(O);be===void 0&&(be=r.getUniformBlockIndex(ue,O.name),de.set(O,be))}function ve(O,ue){const be=l.get(ue).get(O);c.get(ue)!==be&&(r.uniformBlockBinding(ue,be,O.__bindingPointIndex),c.set(ue,be))}function je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,I={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,T=null,b=null,E=new Je(0,0,0),C=0,S=!1,x=null,w=null,P=null,U=null,H=null,Fe.set(0,0,r.canvas.width,r.canvas.height),le.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:oe,bindFramebuffer:Y,drawBuffers:K,useProgram:re,setBlending:Re,setMaterial:_e,setFlipSided:me,setCullFace:V,setLineWidth:Ke,setPolygonOffset:we,setScissorTest:Ge,activeTexture:Qe,bindTexture:mt,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:ye,texImage3D:he,updateUBOMapping:Oe,uniformBlockBinding:ve,texStorage2D:fe,texStorage3D:Ue,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ce,scissor:xe,viewport:We,reset:je}}function BE(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return d?new OffscreenCanvas(D,A):va("canvas")}function _(D,A,q){let te=1;const ne=mt(D);if((ne.width>q||ne.height>q)&&(te=q/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ee=Math.floor(te*ne.width),Ce=Math.floor(te*ne.height);h===void 0&&(h=g(ee,Ce));const fe=A?g(ee,Ce):h;return fe.width=ee,fe.height=Ce,fe.getContext("2d").drawImage(D,0,0,ee,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ee+"x"+Ce+")."),fe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(D,A,q,te,ne=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=A;if(A===r.RED&&(q===r.FLOAT&&(ee=r.R32F),q===r.HALF_FLOAT&&(ee=r.R16F),q===r.UNSIGNED_BYTE&&(ee=r.R8)),A===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ee=r.R8UI),q===r.UNSIGNED_SHORT&&(ee=r.R16UI),q===r.UNSIGNED_INT&&(ee=r.R32UI),q===r.BYTE&&(ee=r.R8I),q===r.SHORT&&(ee=r.R16I),q===r.INT&&(ee=r.R32I)),A===r.RG&&(q===r.FLOAT&&(ee=r.RG32F),q===r.HALF_FLOAT&&(ee=r.RG16F),q===r.UNSIGNED_BYTE&&(ee=r.RG8)),A===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ee=r.RG8UI),q===r.UNSIGNED_SHORT&&(ee=r.RG16UI),q===r.UNSIGNED_INT&&(ee=r.RG32UI),q===r.BYTE&&(ee=r.RG8I),q===r.SHORT&&(ee=r.RG16I),q===r.INT&&(ee=r.RG32I)),A===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),q===r.UNSIGNED_INT&&(ee=r.RGB32UI),q===r.BYTE&&(ee=r.RGB8I),q===r.SHORT&&(ee=r.RGB16I),q===r.INT&&(ee=r.RGB32I)),A===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),q===r.UNSIGNED_INT&&(ee=r.RGBA32UI),q===r.BYTE&&(ee=r.RGBA8I),q===r.SHORT&&(ee=r.RGBA16I),q===r.INT&&(ee=r.RGBA32I)),A===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ee=r.R11F_G11F_B10F)),A===r.RGBA){const Ce=ne?Cl:pt.getTransfer(te);q===r.FLOAT&&(ee=r.RGBA32F),q===r.HALF_FLOAT&&(ee=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ee=Ce===Tt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(D,A){let q;return D?A===null||A===us||A===ha?q=r.DEPTH24_STENCIL8:A===Ei?q=r.DEPTH32F_STENCIL8:A===ca&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===us||A===ha?q=r.DEPTH_COMPONENT24:A===Ei?q=r.DEPTH_COMPONENT32F:A===ca&&(q=r.DEPTH_COMPONENT16),q}function T(D,A){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==An&&D.minFilter!==ti?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function b(D){const A=D.target;A.removeEventListener("dispose",b),C(A),A.isVideoTexture&&u.delete(A)}function E(D){const A=D.target;A.removeEventListener("dispose",E),x(A)}function C(D){const A=n.get(D);if(A.__webglInit===void 0)return;const q=D.source,te=f.get(q);if(te){const ne=te[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(D),Object.keys(te).length===0&&f.delete(q)}n.remove(D)}function S(D){const A=n.get(D);r.deleteTexture(A.__webglTexture);const q=D.source,te=f.get(q);delete te[A.__cacheKey],o.memory.textures--}function x(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let ne=0;ne<A.__webglFramebuffer[te].length;ne++)r.deleteFramebuffer(A.__webglFramebuffer[te][ne]);else r.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)r.deleteFramebuffer(A.__webglFramebuffer[te]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=D.textures;for(let te=0,ne=q.length;te<ne;te++){const ee=n.get(q[te]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(q[te])}n.remove(D)}let w=0;function P(){w=0}function U(){const D=w;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),w+=1,D}function H(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function F(D,A){const q=n.get(D);if(D.isVideoTexture&&Ge(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const te=D.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(q,D,A);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+A)}function N(D,A){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){$(q,D,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+A)}function k(D,A){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){$(q,D,A);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+A)}function B(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){j(q,D,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+A)}const Q={[js]:r.REPEAT,[Lr]:r.CLAMP_TO_EDGE,[Tl]:r.MIRRORED_REPEAT},I={[An]:r.NEAREST,[$p]:r.NEAREST_MIPMAP_NEAREST,[la]:r.NEAREST_MIPMAP_LINEAR,[ti]:r.LINEAR,[El]:r.LINEAR_MIPMAP_NEAREST,[rr]:r.LINEAR_MIPMAP_LINEAR},se={[ox]:r.NEVER,[fx]:r.ALWAYS,[ax]:r.LESS,[lm]:r.LEQUAL,[lx]:r.EQUAL,[hx]:r.GEQUAL,[cx]:r.GREATER,[ux]:r.NOTEQUAL};function Me(D,A){if(A.type===Ei&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ti||A.magFilter===El||A.magFilter===la||A.magFilter===rr||A.minFilter===ti||A.minFilter===El||A.minFilter===la||A.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Q[A.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Q[A.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Q[A.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,I[A.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,I[A.minFilter]),A.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===An||A.minFilter!==la&&A.minFilter!==rr||A.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Fe(D,A){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",b));const te=A.source;let ne=f.get(te);ne===void 0&&(ne={},f.set(te,ne));const ee=H(A);if(ee!==D.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[ee].usedTimes++;const Ce=ne[D.__cacheKey];Ce!==void 0&&(ne[D.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(A)),D.__cacheKey=ee,D.__webglTexture=ne[ee].texture}return q}function le(D,A,q){return Math.floor(Math.floor(D/q)/A)}function pe(D,A,q,te){const ee=D.updateRanges;if(ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,q,te,A.data);else{ee.sort((he,xe)=>he.start-xe.start);let Ce=0;for(let he=1;he<ee.length;he++){const xe=ee[Ce],We=ee[he],Oe=xe.start+xe.count,ve=le(We.start,A.width,4),je=le(xe.start,A.width,4);We.start<=Oe+1&&ve===je&&le(We.start+We.count-1,A.width,4)===ve?xe.count=Math.max(xe.count,We.start+We.count-xe.start):(++Ce,ee[Ce]=We)}ee.length=Ce+1;const fe=r.getParameter(r.UNPACK_ROW_LENGTH),Ue=r.getParameter(r.UNPACK_SKIP_PIXELS),ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let he=0,xe=ee.length;he<xe;he++){const We=ee[he],Oe=Math.floor(We.start/4),ve=Math.ceil(We.count/4),je=Oe%A.width,O=Math.floor(Oe/A.width),ue=ve,de=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,je),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,je,O,ue,de,q,te,A.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,fe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function $(D,A,q){let te=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=r.TEXTURE_3D);const ne=Fe(D,A),ee=A.source;t.bindTexture(te,D.__webglTexture,r.TEXTURE0+q);const Ce=n.get(ee);if(ee.version!==Ce.__version||ne===!0){t.activeTexture(r.TEXTURE0+q);const fe=pt.getPrimaries(pt.workingColorSpace),Ue=A.colorSpace===Dr?null:pt.getPrimaries(A.colorSpace),ye=A.colorSpace===Dr||fe===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let he=_(A.image,!1,i.maxTextureSize);he=Qe(A,he);const xe=s.convert(A.format,A.colorSpace),We=s.convert(A.type);let Oe=y(A.internalFormat,xe,We,A.colorSpace,A.isVideoTexture);Me(te,A);let ve;const je=A.mipmaps,O=A.isVideoTexture!==!0,ue=Ce.__version===void 0||ne===!0,de=ee.dataReady,be=T(A,he);if(A.isDepthTexture)Oe=v(A.format===da,A.type),ue&&(O?t.texStorage2D(r.TEXTURE_2D,1,Oe,he.width,he.height):t.texImage2D(r.TEXTURE_2D,0,Oe,he.width,he.height,0,xe,We,null));else if(A.isDataTexture)if(je.length>0){O&&ue&&t.texStorage2D(r.TEXTURE_2D,be,Oe,je[0].width,je[0].height);for(let ce=0,ie=je.length;ce<ie;ce++)ve=je[ce],O?de&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,ve.width,ve.height,xe,We,ve.data):t.texImage2D(r.TEXTURE_2D,ce,Oe,ve.width,ve.height,0,xe,We,ve.data);A.generateMipmaps=!1}else O?(ue&&t.texStorage2D(r.TEXTURE_2D,be,Oe,he.width,he.height),de&&pe(A,he,xe,We)):t.texImage2D(r.TEXTURE_2D,0,Oe,he.width,he.height,0,xe,We,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){O&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,Oe,je[0].width,je[0].height,he.depth);for(let ce=0,ie=je.length;ce<ie;ce++)if(ve=je[ce],A.format!==mi)if(xe!==null)if(O){if(de)if(A.layerUpdates.size>0){const Le=fg(ve.width,ve.height,A.format,A.type);for(const qe of A.layerUpdates){const gt=ve.data.subarray(qe*Le/ve.data.BYTES_PER_ELEMENT,(qe+1)*Le/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,qe,ve.width,ve.height,1,xe,gt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,he.depth,xe,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,Oe,ve.width,ve.height,he.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,he.depth,xe,We,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,Oe,ve.width,ve.height,he.depth,0,xe,We,ve.data)}else{O&&ue&&t.texStorage2D(r.TEXTURE_2D,be,Oe,je[0].width,je[0].height);for(let ce=0,ie=je.length;ce<ie;ce++)ve=je[ce],A.format!==mi?xe!==null?O?de&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,Oe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,ve.width,ve.height,xe,We,ve.data):t.texImage2D(r.TEXTURE_2D,ce,Oe,ve.width,ve.height,0,xe,We,ve.data)}else if(A.isDataArrayTexture)if(O){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,Oe,he.width,he.height,he.depth),de)if(A.layerUpdates.size>0){const ce=fg(he.width,he.height,A.format,A.type);for(const ie of A.layerUpdates){const Le=he.data.subarray(ie*ce/he.data.BYTES_PER_ELEMENT,(ie+1)*ce/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ie,he.width,he.height,1,xe,We,Le)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,xe,We,he.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,xe,We,he.data);else if(A.isData3DTexture)O?(ue&&t.texStorage3D(r.TEXTURE_3D,be,Oe,he.width,he.height,he.depth),de&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,xe,We,he.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,xe,We,he.data);else if(A.isFramebufferTexture){if(ue)if(O)t.texStorage2D(r.TEXTURE_2D,be,Oe,he.width,he.height);else{let ce=he.width,ie=he.height;for(let Le=0;Le<be;Le++)t.texImage2D(r.TEXTURE_2D,Le,Oe,ce,ie,0,xe,We,null),ce>>=1,ie>>=1}}else if(je.length>0){if(O&&ue){const ce=mt(je[0]);t.texStorage2D(r.TEXTURE_2D,be,Oe,ce.width,ce.height)}for(let ce=0,ie=je.length;ce<ie;ce++)ve=je[ce],O?de&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,xe,We,ve):t.texImage2D(r.TEXTURE_2D,ce,Oe,xe,We,ve);A.generateMipmaps=!1}else if(O){if(ue){const ce=mt(he);t.texStorage2D(r.TEXTURE_2D,be,Oe,ce.width,ce.height)}de&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,We,he)}else t.texImage2D(r.TEXTURE_2D,0,Oe,xe,We,he);m(A)&&p(te),Ce.__version=ee.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function j(D,A,q){if(A.image.length!==6)return;const te=Fe(D,A),ne=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+q);const ee=n.get(ne);if(ne.version!==ee.__version||te===!0){t.activeTexture(r.TEXTURE0+q);const Ce=pt.getPrimaries(pt.workingColorSpace),fe=A.colorSpace===Dr?null:pt.getPrimaries(A.colorSpace),Ue=A.colorSpace===Dr||Ce===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ye=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,xe=[];for(let ie=0;ie<6;ie++)!ye&&!he?xe[ie]=_(A.image[ie],!0,i.maxCubemapSize):xe[ie]=he?A.image[ie].image:A.image[ie],xe[ie]=Qe(A,xe[ie]);const We=xe[0],Oe=s.convert(A.format,A.colorSpace),ve=s.convert(A.type),je=y(A.internalFormat,Oe,ve,A.colorSpace),O=A.isVideoTexture!==!0,ue=ee.__version===void 0||te===!0,de=ne.dataReady;let be=T(A,We);Me(r.TEXTURE_CUBE_MAP,A);let ce;if(ye){O&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,je,We.width,We.height);for(let ie=0;ie<6;ie++){ce=xe[ie].mipmaps;for(let Le=0;Le<ce.length;Le++){const qe=ce[Le];A.format!==mi?Oe!==null?O?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,qe.width,qe.height,Oe,qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,je,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,qe.width,qe.height,Oe,ve,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,je,qe.width,qe.height,0,Oe,ve,qe.data)}}}else{if(ce=A.mipmaps,O&&ue){ce.length>0&&be++;const ie=mt(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,be,je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(he){O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,xe[ie].width,xe[ie].height,Oe,ve,xe[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,xe[ie].width,xe[ie].height,0,Oe,ve,xe[ie].data);for(let Le=0;Le<ce.length;Le++){const gt=ce[Le].image[ie].image;O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,gt.width,gt.height,Oe,ve,gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,je,gt.width,gt.height,0,Oe,ve,gt.data)}}else{O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,ve,xe[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,Oe,ve,xe[ie]);for(let Le=0;Le<ce.length;Le++){const qe=ce[Le];O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Oe,ve,qe.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,je,Oe,ve,qe.image[ie])}}}m(A)&&p(r.TEXTURE_CUBE_MAP),ee.__version=ne.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function oe(D,A,q,te,ne,ee){const Ce=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),Ue=y(q.internalFormat,Ce,fe,q.colorSpace),ye=n.get(A),he=n.get(q);if(he.__renderTarget=A,!ye.__hasExternalTextures){const xe=Math.max(1,A.width>>ee),We=Math.max(1,A.height>>ee);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,ee,Ue,xe,We,A.depth,0,Ce,fe,null):t.texImage2D(ne,ee,Ue,xe,We,0,Ce,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),we(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ne,he.__webglTexture,0,Ke(A)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ne,he.__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(D,A,q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),A.depthBuffer){const te=A.depthTexture,ne=te&&te.isDepthTexture?te.type:null,ee=v(A.stencilBuffer,ne),Ce=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=Ke(A);we(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,ee,A.width,A.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,ee,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ee,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,D)}else{const te=A.textures;for(let ne=0;ne<te.length;ne++){const ee=te[ne],Ce=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),Ue=y(ee.internalFormat,Ce,fe,ee.colorSpace),ye=Ke(A);q&&we(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,Ue,A.width,A.height):we(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,Ue,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function K(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(A.depthTexture);te.__renderTarget=A,(!te.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);const ne=te.__webglTexture,ee=Ke(A);if(A.depthTexture.format===fa)we(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(A.depthTexture.format===da)we(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function re(D){const A=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const te=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),te){const ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,te.removeEventListener("dispose",ne)};te.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=te}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const te=D.texture.mipmaps;te&&te.length>0?K(A.__webglFramebuffer[0],D):K(A.__webglFramebuffer,D)}else if(q){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]===void 0)A.__webglDepthbuffer[te]=r.createRenderbuffer(),Y(A.__webglDepthbuffer[te],D,!1);else{const ne=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=A.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,ee)}}else{const te=D.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Y(A.__webglDepthbuffer,D,!1);else{const ne=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(D,A,q){const te=n.get(D);A!==void 0&&oe(te.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&re(D)}function L(D){const A=D.texture,q=n.get(D),te=n.get(A);D.addEventListener("dispose",E);const ne=D.textures,ee=D.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=A.version,o.memory.textures++),ee){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[fe]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)q.__webglFramebuffer[fe][Ue]=r.createFramebuffer()}else q.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)q.__webglFramebuffer[fe]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let fe=0,Ue=ne.length;fe<Ue;fe++){const ye=n.get(ne[fe]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&we(D)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const Ue=ne[fe];q.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const ye=s.convert(Ue.format,Ue.colorSpace),he=s.convert(Ue.type),xe=y(Ue.internalFormat,ye,he,Ue.colorSpace,D.isXRRenderTarget===!0),We=Ke(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,We,xe,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,q.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Y(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Me(r.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)oe(q.__webglFramebuffer[fe][Ue],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue);else oe(q.__webglFramebuffer[fe],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(A)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Ue=ne.length;fe<Ue;fe++){const ye=ne[fe],he=n.get(ye);let xe=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xe=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,he.__webglTexture),Me(xe,ye),oe(q.__webglFramebuffer,D,ye,r.COLOR_ATTACHMENT0+fe,xe,0),m(ye)&&p(xe)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),Me(fe,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)oe(q.__webglFramebuffer[Ue],D,A,r.COLOR_ATTACHMENT0,fe,Ue);else oe(q.__webglFramebuffer,D,A,r.COLOR_ATTACHMENT0,fe,0);m(A)&&p(fe),t.unbindTexture()}D.depthBuffer&&re(D)}function Re(D){const A=D.textures;for(let q=0,te=A.length;q<te;q++){const ne=A[q];if(m(ne)){const ee=M(D),Ce=n.get(ne).__webglTexture;t.bindTexture(ee,Ce),p(ee),t.unbindTexture()}}}const _e=[],me=[];function V(D){if(D.samples>0){if(we(D)===!1){const A=D.textures,q=D.width,te=D.height;let ne=r.COLOR_BUFFER_BIT;const ee=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(D),fe=A.length>1;if(fe)for(let ye=0;ye<A.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ue=D.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ye=0;ye<A.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const he=n.get(A[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,he,0)}r.blitFramebuffer(0,0,q,te,0,0,q,te,ne,r.NEAREST),c===!0&&(_e.length=0,me.length=0,_e.push(r.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(_e.push(ee),me.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<A.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const he=n.get(A[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,he,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const A=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Ke(D){return Math.min(i.maxSamples,D.samples)}function we(D){const A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ge(D){const A=o.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function Qe(D,A){const q=D.colorSpace,te=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Rn&&q!==Dr&&(pt.getTransfer(q)===Tt?(te!==mi||ne!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function mt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=B,this.rebindTextures=Ne,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=we}function kE(r,e){function t(n,i=Dr){let s;const o=pt.getTransfer(i);if(n===zi)return r.UNSIGNED_BYTE;if(n===Vu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Gu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===jp)return r.BYTE;if(n===Kp)return r.SHORT;if(n===ca)return r.UNSIGNED_SHORT;if(n===Hu)return r.INT;if(n===us)return r.UNSIGNED_INT;if(n===Ei)return r.FLOAT;if(n===ua)return r.HALF_FLOAT;if(n===Qp)return r.ALPHA;if(n===em)return r.RGB;if(n===mi)return r.RGBA;if(n===fa)return r.DEPTH_COMPONENT;if(n===da)return r.DEPTH_STENCIL;if(n===Wu)return r.RED;if(n===Xu)return r.RED_INTEGER;if(n===tm)return r.RG;if(n===qu)return r.RG_INTEGER;if(n===Yu)return r.RGBA_INTEGER;if(n===bl||n===wl||n===Al||n===Rl)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$u||n===ju||n===Ku||n===Zu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$u)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ju)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ku)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ju||n===Qu||n===eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ju||n===Qu)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===th||n===nh||n===ih||n===rh||n===sh||n===oh||n===ah||n===lh||n===ch||n===uh||n===hh||n===fh||n===dh||n===ph)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===th)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ch)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mh||n===gh||n===_h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===mh)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vh||n===xh||n===yh||n===Sh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===vh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ha?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const zE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ng(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hr({vertexShader:zE,fragmentShader:HE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GE extends Zs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new VE,p={},M=t.getContextAttributes();let y=null,v=null;const T=[],b=[],E=new ct;let C=null;const S=new xn;S.viewport=new vt;const x=new xn;x.viewport=new vt;const w=[S,x],P=new Uy;let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=T[$];return j===void 0&&(j=new Yh,T[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=T[$];return j===void 0&&(j=new Yh,T[$]=j),j.getGripSpace()},this.getHand=function($){let j=T[$];return j===void 0&&(j=new Yh,T[$]=j),j.getHandSpace()};function F($){const j=b.indexOf($.inputSource);if(j===-1)return;const oe=T[j];oe!==void 0&&(oe.update($.inputSource,$.frame,l||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",k);for(let $=0;$<T.length;$++){const j=b[$];j!==null&&(b[$]=null,T[$].disconnect(j))}U=null,H=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(y),d=null,f=null,h=null,i=null,v=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Y=null,K=null;M.depth&&(K=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?da:fa,Y=M.stencil?ha:us);const re={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(re),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new hs(f.textureWidth,f.textureHeight,{format:mi,type:zi,depthTexture:new tg(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new hs(d.framebufferWidth,d.framebufferHeight,{format:mi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k($){for(let j=0;j<$.removed.length;j++){const oe=$.removed[j],Y=b.indexOf(oe);Y>=0&&(b[Y]=null,T[Y].disconnect(oe))}for(let j=0;j<$.added.length;j++){const oe=$.added[j];let Y=b.indexOf(oe);if(Y===-1){for(let re=0;re<T.length;re++)if(re>=b.length){b.push(oe),Y=re;break}else if(b[re]===null){b[re]=oe,Y=re;break}if(Y===-1)break}const K=T[Y];K&&K.connect(oe)}}const B=new X,Q=new X;function I($,j,oe){B.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(oe.matrixWorld);const Y=B.distanceTo(Q),K=j.projectionMatrix.elements,re=oe.projectionMatrix.elements,Ne=K[14]/(K[10]-1),L=K[14]/(K[10]+1),Re=(K[9]+1)/K[5],_e=(K[9]-1)/K[5],me=(K[8]-1)/K[0],V=(re[8]+1)/re[0],Ke=Ne*me,we=Ne*V,Ge=Y/(-me+V),Qe=Ge*-me;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Qe),$.translateZ(Ge),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),K[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const mt=Ne+Ge,D=L+Ge,A=Ke-Qe,q=we+(Y-Qe),te=Re*L/D*mt,ne=_e*L/D*mt;$.projectionMatrix.makePerspective(A,q,te,ne,mt,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function se($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let j=$.near,oe=$.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),P.near=x.near=S.near=j,P.far=x.far=S.far=oe,(U!==P.near||H!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,H=P.far),P.layers.mask=$.layers.mask|6,S.layers.mask=P.layers.mask&3,x.layers.mask=P.layers.mask&5;const Y=$.parent,K=P.cameras;se(P,Y);for(let re=0;re<K.length;re++)se(K[re],Y);K.length===2?I(P,S,x):P.projectionMatrix.copy(S.projectionMatrix),Me($,P,Y)};function Me($,j,oe){oe===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Js*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function($){return p[$]};let Fe=null;function le($,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Y=!1;oe.length!==P.cameras.length&&(P.cameras.length=0,Y=!0);for(let L=0;L<oe.length;L++){const Re=oe[L];let _e=null;if(d!==null)_e=d.getViewport(Re);else{const V=h.getViewSubImage(f,Re);_e=V.viewport,L===0&&(e.setRenderTargetTextures(v,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(v))}let me=w[L];me===void 0&&(me=new xn,me.layers.enable(L),me.viewport=new vt,w[L]=me),me.matrix.fromArray(Re.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Re.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(_e.x,_e.y,_e.width,_e.height),L===0&&(P.matrix.copy(me.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Y===!0&&P.cameras.push(me)}const K=i.enabledFeatures;if(K&&K.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const L=h.getDepthInformation(oe[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(K&&K.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let L=0;L<oe.length;L++){const Re=oe[L].camera;if(Re){let _e=p[Re];_e||(_e=new ng,p[Re]=_e);const me=h.getCameraImage(Re);_e.sourceTexture=me}}}}for(let oe=0;oe<T.length;oe++){const Y=b[oe],K=T[oe];Y!==null&&K!==void 0&&K.update(Y,j,l||o)}Fe&&Fe($,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const pe=new dg;pe.setAnimationLoop(le),this.setAnimationLoop=function($){Fe=$},this.dispose=function(){}}}const Ss=new Wi,WE=new it;function XE(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,Ss.copy(v),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),m.envMapRotation.value.setFromMatrix4(WE.makeRotationFromEuler(Ss)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qE(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function l(M,y){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(M,T);const b=e.render.frame;s[M.id]!==b&&(f(M),s[M.id]=b)}function u(M){const y=h();M.__bindingPointIndex=y;const v=r.createBuffer(),T=M.__size,b=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=i[M.id],v=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,E=v.length;b<E;b++){const C=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,x=C.length;S<x;S++){const w=C[S];if(d(w,b,S,T)===!0){const P=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let H=0;for(let F=0;F<U.length;F++){const N=U[F],k=_(N);typeof N=="number"||typeof N=="boolean"?(w.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,P+H,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=0,w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=0,w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=0):(N.toArray(w.__data,H),H+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,y,v,T){const b=M.value,E=y+"_"+v;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const C=T[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return T[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(M){const y=M.uniforms;let v=0;const T=16;for(let E=0,C=y.length;E<C;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let x=0,w=S.length;x<w;x++){const P=S[x],U=Array.isArray(P.value)?P.value:[P.value];for(let H=0,F=U.length;H<F;H++){const N=U[H],k=_(N),B=v%T,Q=B%k.boundary,I=B+Q;v+=Q,I!==0&&T-I<k.storage&&(v+=T-I),P.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=k.storage}}}const b=v%T;return b>0&&(v+=T-b),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Mf{constructor(e={}){const{canvas:t=Px(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=on;let b=0,E=0,C=null,S=-1,x=null;const w=new vt,P=new vt;let U=null;const H=new Je(0);let F=0,N=t.width,k=t.height,B=1,Q=null,I=null;const se=new vt(0,0,N,k),Me=new vt(0,0,N,k);let Fe=!1;const le=new tf;let pe=!1,$=!1;const j=new it,oe=new X,Y=new vt,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Ne(){return C===null?B:1}let L=n;function Re(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cu}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){const G="webgl2";if(L=Re(G,R),L===null)throw Re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _e,me,V,Ke,we,Ge,Qe,mt,D,A,q,te,ne,ee,Ce,fe,Ue,ye,he,xe,We,Oe,ve,je;function O(){_e=new iT(L),_e.init(),Oe=new kE(L,_e),me=new KM(L,_e,e,Oe),V=new FE(L,_e),me.reversedDepthBuffer&&f&&V.buffers.depth.setReversed(!0),Ke=new oT(L),we=new EE,Ge=new BE(L,_e,V,we,me,Oe,Ke),Qe=new JM(v),mt=new nT(v),D=new qy(L),ve=new $M(L,D),A=new rT(L,D,Ke,ve),q=new lT(L,A,D,Ke),he=new aT(L,me,Ge),fe=new ZM(we),te=new TE(v,Qe,mt,_e,me,ve,fe),ne=new XE(v,we),ee=new wE,Ce=new DE(_e),ye=new YM(v,Qe,mt,V,q,d,c),Ue=new UE(v,q,me),je=new qE(L,Ke,me,V),xe=new jM(L,_e,Ke),We=new sT(L,_e,Ke),Ke.programs=te.programs,v.capabilities=me,v.extensions=_e,v.properties=we,v.renderLists=ee,v.shadowMap=Ue,v.state=V,v.info=Ke}O();const ue=new GE(v,L);this.xr=ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=_e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(N,k,!1))},this.getSize=function(R){return R.set(N,k)},this.setSize=function(R,G,Z=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,k=G,t.width=Math.floor(R*B),t.height=Math.floor(G*B),Z===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(N*B,k*B).floor()},this.setDrawingBufferSize=function(R,G,Z){N=R,k=G,B=Z,t.width=Math.floor(R*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,G,Z,J){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,G,Z,J),V.viewport(w.copy(se).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(Me)},this.setScissor=function(R,G,Z,J){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,G,Z,J),V.scissor(P.copy(Me).multiplyScalar(B).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(R){V.setScissorTest(Fe=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){I=R},this.getClearColor=function(R){return R.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,Z=!0){let J=0;if(R){let W=!1;if(C!==null){const ae=C.texture.format;W=ae===Yu||ae===qu||ae===Xu}if(W){const ae=C.texture.type,ge=ae===zi||ae===us||ae===ca||ae===ha||ae===Vu||ae===Gu,Ie=ye.getClearColor(),Pe=ye.getClearAlpha(),Xe=Ie.r,ze=Ie.g,ke=Ie.b;ge?(g[0]=Xe,g[1]=ze,g[2]=ke,g[3]=Pe,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Xe,_[1]=ze,_[2]=ke,_[3]=Pe,L.clearBufferiv(L.COLOR,0,_))}else J|=L.COLOR_BUFFER_BIT}G&&(J|=L.DEPTH_BUFFER_BIT),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ye.dispose(),ee.dispose(),Ce.dispose(),we.dispose(),Qe.dispose(),mt.dispose(),q.dispose(),ve.dispose(),je.dispose(),te.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",et),ue.removeEventListener("sessionend",Te),Ye.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Ke.autoReset,G=Ue.enabled,Z=Ue.autoUpdate,J=Ue.needsUpdate,W=Ue.type;O(),Ke.autoReset=R,Ue.enabled=G,Ue.autoUpdate=Z,Ue.needsUpdate=J,Ue.type=W}function ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const G=R.target;G.removeEventListener("dispose",ie),Le(G)}function Le(R){qe(R),we.remove(R)}function qe(R){const G=we.get(R).programs;G!==void 0&&(G.forEach(function(Z){te.releaseProgram(Z)}),R.isShaderMaterial&&te.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,Z,J,W,ae){G===null&&(G=K);const ge=W.isMesh&&W.matrixWorld.determinant()<0,Ie=Mt(R,G,Z,J,W);V.setMaterial(J,ge);let Pe=Z.index,Xe=1;if(J.wireframe===!0){if(Pe=A.getWireframeAttribute(Z),Pe===void 0)return;Xe=2}const ze=Z.drawRange,ke=Z.attributes.position;let nt=ze.start*Xe,ft=(ze.start+ze.count)*Xe;ae!==null&&(nt=Math.max(nt,ae.start*Xe),ft=Math.min(ft,(ae.start+ae.count)*Xe)),Pe!==null?(nt=Math.max(nt,0),ft=Math.min(ft,Pe.count)):ke!=null&&(nt=Math.max(nt,0),ft=Math.min(ft,ke.count));const Ht=ft-nt;if(Ht<0||Ht===1/0)return;ve.setup(W,J,Ie,Z,Pe);let Lt,At=xe;if(Pe!==null&&(Lt=D.get(Pe),At=We,At.setIndex(Lt)),W.isMesh)J.wireframe===!0?(V.setLineWidth(J.wireframeLinewidth*Ne()),At.setMode(L.LINES)):At.setMode(L.TRIANGLES);else if(W.isLine){let $e=J.linewidth;$e===void 0&&($e=1),V.setLineWidth($e*Ne()),W.isLineSegments?At.setMode(L.LINES):W.isLineLoop?At.setMode(L.LINE_LOOP):At.setMode(L.LINE_STRIP)}else W.isPoints?At.setMode(L.POINTS):W.isSprite&&At.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)xa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const $e=W._multiDrawStarts,Bt=W._multiDrawCounts,_t=W._multiDrawCount,oi=Pe?D.get(Pe).bytesPerElement:1,Ro=we.get(J).currentProgram.getUniforms();for(let ai=0;ai<_t;ai++)Ro.setValue(L,"_gl_DrawID",ai),At.render($e[ai]/oi,Bt[ai])}else if(W.isInstancedMesh)At.renderInstances(nt,Ht,W.count);else if(Z.isInstancedBufferGeometry){const $e=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bt=Math.min(Z.instanceCount,$e);At.renderInstances(nt,Ht,Bt)}else At.render(nt,Ht)};function gt(R,G,Z){R.transparent===!0&&R.side===Ti&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,Xt(R,G,Z),R.side=ir,R.needsUpdate=!0,Xt(R,G,Z),R.side=Ti):Xt(R,G,Z)}this.compile=function(R,G,Z=null){Z===null&&(Z=R),p=Ce.get(Z),p.init(G),y.push(p),Z.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),R!==Z&&R.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const J=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ae=W.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const Ie=ae[ge];gt(Ie,Z,W),J.add(Ie)}else gt(ae,Z,W),J.add(ae)}),p=y.pop(),J},this.compileAsync=function(R,G,Z=null){const J=this.compile(R,G,Z);return new Promise(W=>{function ae(){if(J.forEach(function(ge){we.get(ge).currentProgram.isReady()&&J.delete(ge)}),J.size===0){W(R);return}setTimeout(ae,10)}_e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ae=null;function Be(R){Ae&&Ae(R)}function et(){Ye.stop()}function Te(){Ye.start()}const Ye=new dg;Ye.setAnimationLoop(Be),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(R){Ae=R,ue.setAnimationLoop(R),R===null?Ye.stop():Ye.start()},ue.addEventListener("sessionstart",et),ue.addEventListener("sessionend",Te),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(G),G=ue.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,G,C),p=Ce.get(R,y.length),p.init(G),y.push(p),j.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),le.setFromProjectionMatrix(j,Hi,G.reversedDepth),$=this.localClippingEnabled,pe=fe.init(this.clippingPlanes,$),m=ee.get(R,M.length),m.init(),M.push(m),ue.enabled===!0&&ue.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&Ve(ae,G,-1/0,v.sortObjects)}Ve(R,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Q,I),re=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,re&&ye.addToRenderList(m,R),this.info.render.frame++,pe===!0&&fe.beginShadows();const Z=p.state.shadowsArray;Ue.render(Z,R,G),pe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){const ae=G.cameras;if(W.length>0)for(let ge=0,Ie=ae.length;ge<Ie;ge++){const Pe=ae[ge];Wt(J,W,R,Pe)}re&&ye.render(R);for(let ge=0,Ie=ae.length;ge<Ie;ge++){const Pe=ae[ge];Ze(m,R,Pe,Pe.viewport)}}else W.length>0&&Wt(J,W,R,G),re&&ye.render(R),Ze(m,R,G);C!==null&&E===0&&(Ge.updateMultisampleRenderTarget(C),Ge.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,G),ve.resetDefaultState(),S=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],pe===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ve(R,G,Z,J){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||le.intersectsSprite(R)){J&&Y.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);const ge=q.update(R),Ie=R.material;Ie.visible&&m.push(R,ge,Ie,Z,Y.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||le.intersectsObject(R))){const ge=q.update(R),Ie=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Y.copy(R.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Y.copy(ge.boundingSphere.center)),Y.applyMatrix4(R.matrixWorld).applyMatrix4(j)),Array.isArray(Ie)){const Pe=ge.groups;for(let Xe=0,ze=Pe.length;Xe<ze;Xe++){const ke=Pe[Xe],nt=Ie[ke.materialIndex];nt&&nt.visible&&m.push(R,ge,nt,Z,Y.z,ke)}}else Ie.visible&&m.push(R,ge,Ie,Z,Y.z,null)}}const ae=R.children;for(let ge=0,Ie=ae.length;ge<Ie;ge++)Ve(ae[ge],G,Z,J)}function Ze(R,G,Z,J){const W=R.opaque,ae=R.transmissive,ge=R.transparent;p.setupLightsView(Z),pe===!0&&fe.setGlobalState(v.clippingPlanes,Z),J&&V.viewport(w.copy(J)),W.length>0&&st(W,G,Z),ae.length>0&&st(ae,G,Z),ge.length>0&&st(ge,G,Z),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Wt(R,G,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new hs(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?ua:zi,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ae=p.state.transmissionRenderTarget[J.id],ge=J.viewport||w;ae.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);const Ie=v.getRenderTarget(),Pe=v.getActiveCubeFace(),Xe=v.getActiveMipmapLevel();v.setRenderTarget(ae),v.getClearColor(H),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),re&&ye.render(Z);const ze=v.toneMapping;v.toneMapping=Pr;const ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),pe===!0&&fe.setGlobalState(v.clippingPlanes,J),st(R,Z,J),Ge.updateMultisampleRenderTarget(ae),Ge.updateRenderTargetMipmap(ae),_e.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ft=0,Ht=G.length;ft<Ht;ft++){const Lt=G[ft],At=Lt.object,$e=Lt.geometry,Bt=Lt.material,_t=Lt.group;if(Bt.side===Ti&&At.layers.test(J.layers)){const oi=Bt.side;Bt.side=zn,Bt.needsUpdate=!0,It(At,Z,J,$e,Bt,_t),Bt.side=oi,Bt.needsUpdate=!0,nt=!0}}nt===!0&&(Ge.updateMultisampleRenderTarget(ae),Ge.updateRenderTargetMipmap(ae))}v.setRenderTarget(Ie,Pe,Xe),v.setClearColor(H,F),ke!==void 0&&(J.viewport=ke),v.toneMapping=ze}function st(R,G,Z){const J=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ae=R.length;W<ae;W++){const ge=R[W],Ie=ge.object,Pe=ge.geometry,Xe=ge.group;let ze=ge.material;ze.allowOverride===!0&&J!==null&&(ze=J),Ie.layers.test(Z.layers)&&It(Ie,G,Z,Pe,ze,Xe)}}function It(R,G,Z,J,W,ae){R.onBeforeRender(v,G,Z,J,W,ae),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(v,G,Z,J,R,ae),W.transparent===!0&&W.side===Ti&&W.forceSinglePass===!1?(W.side=zn,W.needsUpdate=!0,v.renderBufferDirect(Z,G,J,W,R,ae),W.side=ir,W.needsUpdate=!0,v.renderBufferDirect(Z,G,J,W,R,ae),W.side=Ti):v.renderBufferDirect(Z,G,J,W,R,ae),R.onAfterRender(v,G,Z,J,W,ae)}function Xt(R,G,Z){G.isScene!==!0&&(G=K);const J=we.get(R),W=p.state.lights,ae=p.state.shadowsArray,ge=W.state.version,Ie=te.getParameters(R,W.state,ae,G,Z),Pe=te.getProgramCacheKey(Ie);let Xe=J.programs;J.environment=R.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(R.isMeshStandardMaterial?mt:Qe).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",ie),Xe=new Map,J.programs=Xe);let ze=Xe.get(Pe);if(ze!==void 0){if(J.currentProgram===ze&&J.lightsStateVersion===ge)return wt(R,Ie),ze}else Ie.uniforms=te.getUniforms(R),R.onBeforeCompile(Ie,v),ze=te.acquireProgram(Ie,Pe),Xe.set(Pe,ze),J.uniforms=Ie.uniforms;const ke=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=fe.uniform),wt(R,Ie),J.needsLights=Pt(R),J.lightsStateVersion=ge,J.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=ze,J.uniformsList=null,ze}function Ct(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=cc.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function wt(R,G){const Z=we.get(R);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Mt(R,G,Z,J,W){G.isScene!==!0&&(G=K),Ge.resetTextureUnits();const ae=G.fog,ge=J.isMeshStandardMaterial?G.environment:null,Ie=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Rn,Pe=(J.isMeshStandardMaterial?mt:Qe).get(J.envMap||ge),Xe=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ke=!!Z.morphAttributes.position,nt=!!Z.morphAttributes.normal,ft=!!Z.morphAttributes.color;let Ht=Pr;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ht=v.toneMapping);const Lt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,At=Lt!==void 0?Lt.length:0,$e=we.get(J),Bt=p.state.lights;if(pe===!0&&($===!0||R!==x)){const In=R===x&&J.id===S;fe.setState(J,R,In)}let _t=!1;J.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Bt.state.version||$e.outputColorSpace!==Ie||W.isBatchedMesh&&$e.batching===!1||!W.isBatchedMesh&&$e.batching===!0||W.isBatchedMesh&&$e.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&$e.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&$e.instancing===!1||!W.isInstancedMesh&&$e.instancing===!0||W.isSkinnedMesh&&$e.skinning===!1||!W.isSkinnedMesh&&$e.skinning===!0||W.isInstancedMesh&&$e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&$e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&$e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&$e.instancingMorph===!1&&W.morphTexture!==null||$e.envMap!==Pe||J.fog===!0&&$e.fog!==ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==fe.numPlanes||$e.numIntersection!==fe.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==ze||$e.morphTargets!==ke||$e.morphNormals!==nt||$e.morphColors!==ft||$e.toneMapping!==Ht||$e.morphTargetsCount!==At)&&(_t=!0):(_t=!0,$e.__version=J.version);let oi=$e.currentProgram;_t===!0&&(oi=Xt(J,G,W));let Ro=!1,ai=!1,Fa=!1;const kt=oi.getUniforms(),yi=$e.uniforms;if(V.useProgram(oi.program)&&(Ro=!0,ai=!0,Fa=!0),J.id!==S&&(S=J.id,ai=!0),Ro||x!==R){V.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),kt.setValue(L,"projectionMatrix",R.projectionMatrix),kt.setValue(L,"viewMatrix",R.matrixWorldInverse);const Gn=kt.map.cameraPosition;Gn!==void 0&&Gn.setValue(L,oe.setFromMatrixPosition(R.matrixWorld)),me.logarithmicDepthBuffer&&kt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&kt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),x!==R&&(x=R,ai=!0,Fa=!0)}if(W.isSkinnedMesh){kt.setOptional(L,W,"bindMatrix"),kt.setOptional(L,W,"bindMatrixInverse");const In=W.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),kt.setValue(L,"boneTexture",In.boneTexture,Ge))}W.isBatchedMesh&&(kt.setOptional(L,W,"batchingTexture"),kt.setValue(L,"batchingTexture",W._matricesTexture,Ge),kt.setOptional(L,W,"batchingIdTexture"),kt.setValue(L,"batchingIdTexture",W._indirectTexture,Ge),kt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&kt.setValue(L,"batchingColorTexture",W._colorsTexture,Ge));const Si=Z.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&he.update(W,Z,oi),(ai||$e.receiveShadow!==W.receiveShadow)&&($e.receiveShadow=W.receiveShadow,kt.setValue(L,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(yi.envMap.value=Pe,yi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(yi.envMapIntensity.value=G.environmentIntensity),ai&&(kt.setValue(L,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&si(yi,Fa),ae&&J.fog===!0&&ne.refreshFogUniforms(yi,ae),ne.refreshMaterialUniforms(yi,J,B,k,p.state.transmissionRenderTarget[R.id]),cc.upload(L,Ct($e),yi,Ge)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(cc.upload(L,Ct($e),yi,Ge),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&kt.setValue(L,"center",W.center),kt.setValue(L,"modelViewMatrix",W.modelViewMatrix),kt.setValue(L,"normalMatrix",W.normalMatrix),kt.setValue(L,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const In=J.uniformsGroups;for(let Gn=0,If=In.length;Gn<If;Gn++){const Ts=In[Gn];je.update(Ts,oi),je.bind(Ts,oi)}}return oi}function si(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Pt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,G,Z){const J=we.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),we.get(R.texture).__webglTexture=G,we.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const Z=we.get(R);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const Dn=L.createFramebuffer();this.setRenderTarget=function(R,G=0,Z=0){C=R,b=G,E=Z;let J=!0,W=null,ae=!1,ge=!1;if(R){const Pe=we.get(R);if(Pe.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Pe.__webglFramebuffer===void 0)Ge.setupRenderTarget(R);else if(Pe.__hasExternalTextures)Ge.rebindTextures(R,we.get(R.texture).__webglTexture,we.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ke=R.depthTexture;if(Pe.__boundDepthTexture!==ke){if(ke!==null&&we.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ge=!0);const ze=we.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?W=ze[G][Z]:W=ze[G],ae=!0):R.samples>0&&Ge.useMultisampledRTT(R)===!1?W=we.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[Z]:W=ze,w.copy(R.viewport),P.copy(R.scissor),U=R.scissorTest}else w.copy(se).multiplyScalar(B).floor(),P.copy(Me).multiplyScalar(B).floor(),U=Fe;if(Z!==0&&(W=Dn),V.bindFramebuffer(L.FRAMEBUFFER,W)&&J&&V.drawBuffers(R,W),V.viewport(w),V.scissor(P),V.setScissorTest(U),ae){const Pe=we.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pe.__webglTexture,Z)}else if(ge){const Pe=G;for(let Xe=0;Xe<R.textures.length;Xe++){const ze=we.get(R.textures[Xe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Xe,ze.__webglTexture,Z,Pe)}}else if(R!==null&&Z!==0){const Pe=we.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pe.__webglTexture,Z)}S=-1},this.readRenderTargetPixels=function(R,G,Z,J,W,ae,ge,Ie=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Pe=Pe[ge]),Pe){V.bindFramebuffer(L.FRAMEBUFFER,Pe);try{const Xe=R.textures[Ie],ze=Xe.format,ke=Xe.type;if(!me.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-J&&Z>=0&&Z<=R.height-W&&(R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ie),L.readPixels(G,Z,J,W,Oe.convert(ze),Oe.convert(ke),ae))}finally{const Xe=C!==null?we.get(C).__webglFramebuffer:null;V.bindFramebuffer(L.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,G,Z,J,W,ae,ge,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Pe=Pe[ge]),Pe)if(G>=0&&G<=R.width-J&&Z>=0&&Z<=R.height-W){V.bindFramebuffer(L.FRAMEBUFFER,Pe);const Xe=R.textures[Ie],ze=Xe.format,ke=Xe.type;if(!me.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,nt),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ie),L.readPixels(G,Z,J,W,Oe.convert(ze),Oe.convert(ke),0);const ft=C!==null?we.get(C).__webglFramebuffer:null;V.bindFramebuffer(L.FRAMEBUFFER,ft);const Ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Lx(L,Ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,nt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(nt),L.deleteSync(Ht),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,Z=0){const J=Math.pow(2,-Z),W=Math.floor(R.image.width*J),ae=Math.floor(R.image.height*J),ge=G!==null?G.x:0,Ie=G!==null?G.y:0;Ge.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,ge,Ie,W,ae),V.unbindTexture()};const xi=L.createFramebuffer(),tn=L.createFramebuffer();this.copyTextureToTexture=function(R,G,Z=null,J=null,W=0,ae=null){ae===null&&(W!==0?(xa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=W,W=0):ae=0);let ge,Ie,Pe,Xe,ze,ke,nt,ft,Ht;const Lt=R.isCompressedTexture?R.mipmaps[ae]:R.image;if(Z!==null)ge=Z.max.x-Z.min.x,Ie=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,Xe=Z.min.x,ze=Z.min.y,ke=Z.isBox3?Z.min.z:0;else{const Si=Math.pow(2,-W);ge=Math.floor(Lt.width*Si),Ie=Math.floor(Lt.height*Si),R.isDataArrayTexture?Pe=Lt.depth:R.isData3DTexture?Pe=Math.floor(Lt.depth*Si):Pe=1,Xe=0,ze=0,ke=0}J!==null?(nt=J.x,ft=J.y,Ht=J.z):(nt=0,ft=0,Ht=0);const At=Oe.convert(G.format),$e=Oe.convert(G.type);let Bt;G.isData3DTexture?(Ge.setTexture3D(G,0),Bt=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Ge.setTexture2DArray(G,0),Bt=L.TEXTURE_2D_ARRAY):(Ge.setTexture2D(G,0),Bt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const _t=L.getParameter(L.UNPACK_ROW_LENGTH),oi=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ro=L.getParameter(L.UNPACK_SKIP_PIXELS),ai=L.getParameter(L.UNPACK_SKIP_ROWS),Fa=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);const kt=R.isDataArrayTexture||R.isData3DTexture,yi=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const Si=we.get(R),In=we.get(G),Gn=we.get(Si.__renderTarget),If=we.get(In.__renderTarget);V.bindFramebuffer(L.READ_FRAMEBUFFER,Gn.__webglFramebuffer),V.bindFramebuffer(L.DRAW_FRAMEBUFFER,If.__webglFramebuffer);for(let Ts=0;Ts<Pe;Ts++)kt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(R).__webglTexture,W,ke+Ts),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(G).__webglTexture,ae,Ht+Ts)),L.blitFramebuffer(Xe,ze,ge,Ie,nt,ft,ge,Ie,L.DEPTH_BUFFER_BIT,L.NEAREST);V.bindFramebuffer(L.READ_FRAMEBUFFER,null),V.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||we.has(R)){const Si=we.get(R),In=we.get(G);V.bindFramebuffer(L.READ_FRAMEBUFFER,xi),V.bindFramebuffer(L.DRAW_FRAMEBUFFER,tn);for(let Gn=0;Gn<Pe;Gn++)kt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Si.__webglTexture,W,ke+Gn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Si.__webglTexture,W),yi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,In.__webglTexture,ae,Ht+Gn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,In.__webglTexture,ae),W!==0?L.blitFramebuffer(Xe,ze,ge,Ie,nt,ft,ge,Ie,L.COLOR_BUFFER_BIT,L.NEAREST):yi?L.copyTexSubImage3D(Bt,ae,nt,ft,Ht+Gn,Xe,ze,ge,Ie):L.copyTexSubImage2D(Bt,ae,nt,ft,Xe,ze,ge,Ie);V.bindFramebuffer(L.READ_FRAMEBUFFER,null),V.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yi?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Bt,ae,nt,ft,Ht,ge,Ie,Pe,At,$e,Lt.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(Bt,ae,nt,ft,Ht,ge,Ie,Pe,At,Lt.data):L.texSubImage3D(Bt,ae,nt,ft,Ht,ge,Ie,Pe,At,$e,Lt):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ae,nt,ft,ge,Ie,At,$e,Lt.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ae,nt,ft,Lt.width,Lt.height,At,Lt.data):L.texSubImage2D(L.TEXTURE_2D,ae,nt,ft,ge,Ie,At,$e,Lt);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oi),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ro),L.pixelStorei(L.UNPACK_SKIP_ROWS,ai),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fa),ae===0&&G.generateMipmaps&&L.generateMipmap(Bt),V.unbindTexture()},this.initRenderTarget=function(R){we.get(R).__webglFramebuffer===void 0&&Ge.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ge.setTextureCube(R,0):R.isData3DTexture?Ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ge.setTexture2DArray(R,0):Ge.setTexture2D(R,0),V.unbindTexture()},this.resetState=function(){b=0,E=0,C=null,V.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const YE=r=>String(r).padStart(2,"0"),Vg=(r,e)=>(r%e+e)%e;function $E(r){const e=(t,n)=>{const i=r.dataset[t];return i!==void 0?parseFloat(i):n};return{minHeight:e("minHeight",1),maxHeight:e("maxHeight",1.5),aspectRatio:e("aspectRatio",1.5),gap:e("gap",.05),smoothing:.05,distortionStrength:e("distortionStrength",2.5),distortionSmoothing:.1,momentumFriction:.95,momentumThreshold:.001,wheelSpeed:e("wheelSpeed",.01),wheelMax:150,dragSpeed:.01,dragMomentum:.01,touchSpeed:.01,touchMomentum:.1}}function jE(r){const e=r.dataset.threeSlides;if(e)try{return JSON.parse(e)}catch(n){console.error("[three-slider] data-three-slides JSON invalide",n)}const t=r.querySelectorAll("[data-three-slide]");return t.length>0?Array.from(t).map(n=>({name:n.dataset.title??"",img:n.dataset.image??""})):(console.warn("[three-slider] Aucune slide trouvée. Utiliser data-three-slide ou data-three-slides."),[])}function Gg(r){const e=$E(r),t=jE(r);if(t.length===0)return;const n=r.querySelector("[data-three-canvas]"),i=r.querySelector("[data-three-title]"),s=r.querySelector("[data-three-count]");if(!n){console.error("[three-slider] Élément [data-three-canvas] introuvable");return}const o=()=>r.clientWidth,a=()=>r.clientHeight,c=new Mf({canvas:n,antialias:!0,preserveDrawingBuffer:!0});c.setSize(o(),a()),c.setPixelRatio(Math.min(window.devicePixelRatio,2));const l=new $h;l.background=new Je(1315860);const u=new xn(45,o()/a(),.1,100);u.position.z=5;const h=t.length,f=Array.from({length:h},()=>e.minHeight+Math.random()*(e.maxHeight-e.minHeight)),d=[];let g=0;for(let le=0;le<h;le++)le===0?(d.push(0),g=f[0]/2):(g+=e.gap+f[le]/2,d.push(g),g+=f[le]/2);const _=g+e.gap+f[0]/2,m=_/2,p=[],M=new ag;for(let le=0;le<h;le++){const pe=f[le],$=pe*e.aspectRatio,j=new mo($,pe,32,16),oe=new kr({side:Ti,color:10066329}),Y=new vn(j,oe);Y.userData={originalVertices:[...j.attributes.position.array],offset:d[le],name:t[le].name,index:le},M.load(t[le].img,K=>{K.colorSpace=on,oe.map=K,oe.color.set(16777215),oe.needsUpdate=!0;const re=K.image.width/K.image.height,Ne=$/pe,L=re/Ne;L>1?Y.scale.y=1/L:Y.scale.x=L}),l.add(Y),p.push(Y)}function y(le,pe,$){const j=le.geometry.attributes.position,oe=le.userData.originalVertices;for(let Y=0;Y<j.count;Y++){const K=oe[Y*3],re=oe[Y*3+1],Ne=Math.sqrt(K*K+(pe+re)**2),L=Math.max(0,1-Ne/2),Re=Math.pow(Math.sin(L*Math.PI/2),1.5);j.setZ(Y,Re*$)}j.needsUpdate=!0,le.geometry.computeVertexNormals()}let v=0,T=0,b=0,E=!1,C=0,S=0,x=0,w=0,P=0,U=0;const H=[0,0,0,0,0];let F=!1,N=0,k=0,B=0,Q=0,I=-1,se=null;const Me=le=>{x=Math.min(1,x+le)};n.addEventListener("wheel",le=>{le.preventDefault();const pe=Math.sign(le.deltaY)*Math.min(Math.abs(le.deltaY),e.wheelMax);Me(Math.abs(pe)*.001),T+=pe*e.wheelSpeed,E=!0,clearTimeout(se),se=setTimeout(()=>E=!1,150)},{passive:!1}),r.addEventListener("touchstart",le=>{B=Q=le.touches[0].clientY,E=!1,b=0},{passive:!1}),r.addEventListener("touchmove",le=>{le.preventDefault();const pe=le.touches[0].clientY-Q;Q=le.touches[0].clientY,Me(Math.abs(pe)*.02),T-=pe*e.touchSpeed,E=!0},{passive:!1}),r.addEventListener("touchend",()=>{const le=(Q-B)*.005;Math.abs(le)>.5&&(b=-le*e.touchMomentum,Me(Math.abs(le)*.45),E=!0,setTimeout(()=>E=!1,800))}),n.style.cursor="grab",n.addEventListener("mousedown",le=>{F=!0,N=le.clientY,k=0,b=0,n.style.cursor="grabbing"}),window.addEventListener("mousemove",le=>{if(!F)return;const pe=le.clientY-N;N=le.clientY,k=pe,Me(Math.abs(pe)*.02),T-=pe*e.dragSpeed,E=!0}),window.addEventListener("mouseup",()=>{F&&(F=!1,n.style.cursor="grab",Math.abs(k)>2&&(b=-k*e.dragMomentum,Me(Math.abs(k)*.005),E=!0,setTimeout(()=>E=!1,800)))}),window.addEventListener("resize",()=>{u.aspect=o()/a(),u.updateProjectionMatrix(),c.setSize(o(),a())});function Fe(le){requestAnimationFrame(Fe);const pe=C?(le-C)/1e3:.016;C=le;const $=v;E&&(T+=b,b*=e.momentumFriction,Math.abs(b)<e.momentumThreshold&&(b=0)),v+=(T-v)*e.smoothing;const j=v-$;Math.abs(j)>1e-5&&(U=j>0?1:-1),P+=(U-P)*.08;const oe=Math.abs(j)/pe;H.push(oe),H.shift();const Y=H.reduce((Re,_e)=>Re+_e)/H.length;Y>w&&(w=Y);const K=Y/(w+.001)<.7&&w>.5;w*=.99,oe>.05&&(x=Math.max(x,Math.min(1,oe*.1))),(K||Y<.2)&&(x*=K?.95:.855),S+=(x-S)*e.distortionSmoothing;const re=S*P;let Ne=1/0,L=0;p.forEach(Re=>{const{offset:_e}=Re.userData;let me=-(_e-Vg(v,_));me=Vg(me+m,_)-m,Re.position.y=me,Math.abs(me)<Ne&&(Ne=Math.abs(me),L=Re.userData.index),Math.abs(me)<m+e.maxHeight&&y(Re,me,e.distortionStrength*re)}),L!==I&&(I=L,i&&(i.textContent=t[I].name),s&&(s.textContent=YE(I+1))),c.render(l,u)}Fe()}if(typeof window<"u"){const r=()=>document.querySelectorAll('[data-component="three-slider"]').forEach(e=>Gg(e));document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);const KE=900,ZE={startOffset:550,endOffset:450,from:[1,.5],to:[15,10]},JE={startOffset:400,endOffset:300,from:[15,10],to:[1,.5]},Wg=50,QE=92,eb=1.25,tb=2.5,nb=9,ib=100;function Xg(r){r._bcScrollAnimTriggers&&r._bcScrollAnimTriggers.forEach(l=>l.kill());const e=[],t=r.querySelector("[data-bc-sticky]"),n=r.querySelector("[data-bc-trigger-footer]"),i=r.querySelectorAll("[data-bc-row]");if(!t||!n||!i.length)return;const s=()=>{const l=t.getBoundingClientRect();return l.top+window.scrollY+l.height/2},o=()=>n.offsetHeight,a=()=>window.innerWidth<KE;function c(l,{startOffset:u,endOffset:h,from:f,to:d}){return Se.create({trigger:l,start:()=>`top+=${s()-u} center`,end:()=>`top+=${s()-h} center`,scrub:!0,onUpdate:g=>{const _=a()?f[1]:f[0],m=a()?d[1]:d[0];l.style.gap=`${_+(m-_)*g.progress}em`}})}i.forEach(l=>{e.push(c(l,ZE)),e.push(c(l,JE))}),e.push(Se.create({trigger:n,start:"top bottom",end:()=>`top+=${o()-window.innerHeight} center`,scrub:!0,onUpdate:l=>{const u=Wg+(QE-Wg)*l.progress;t.style.top=`${u}%`}})),e.push(Se.create({trigger:n,start:()=>`top+=${o()-(window.innerHeight+ib)} bottom`,end:"bottom bottom",scrub:!0,onUpdate:l=>{const u=a()?tb:eb,h=u+(nb-u)*l.progress;t.querySelectorAll("p").forEach(f=>{f.style.fontSize=`${h}vw`})}})),r._bcScrollAnimTriggers=e}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="bennett-clive-scroll-anim"]').forEach(e=>Xg(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}var qg="1.3.19";function Yg(r,e,t){return Math.max(r,Math.min(e,t))}function rb(r,e,t){return(1-t)*r+t*e}function sb(r,e,t,n){return rb(r,e,1-Math.exp(-t*n))}function ob(r,e){return(r%e+e)%e}var ab=class{constructor(){He(this,"isRunning",!1);He(this,"value",0);He(this,"from",0);He(this,"to",0);He(this,"currentTime",0);He(this,"lerp");He(this,"duration");He(this,"easing");He(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Yg(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=sb(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function lb(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var cb=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){He(this,"width",0);He(this,"height",0);He(this,"scrollHeight",0);He(this,"scrollWidth",0);He(this,"debouncedResize");He(this,"wrapperResizeObserver");He(this,"contentResizeObserver");He(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});He(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});He(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=lb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$g=class{constructor(){He(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},ub=100/6,Hr={passive:!1};function jg(r,e){return r===1?ub:r===2?e:1}var hb=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){He(this,"touchStart",{x:0,y:0});He(this,"lastDelta",{x:0,y:0});He(this,"window",{width:0,height:0});He(this,"emitter",new $g);He(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});He(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});He(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});He(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=jg(n,this.window.width),s=jg(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});He(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Hr),this.element.addEventListener("touchstart",this.onTouchStart,Hr),this.element.addEventListener("touchmove",this.onTouchMove,Hr),this.element.addEventListener("touchend",this.onTouchEnd,Hr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Hr),this.element.removeEventListener("touchstart",this.onTouchStart,Hr),this.element.removeEventListener("touchmove",this.onTouchMove,Hr),this.element.removeEventListener("touchend",this.onTouchEnd,Hr)}},Kg=r=>Math.min(1,1.001-2**(-10*r)),pr=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:c,lerp:l=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:y=!1,anchors:v=!1,autoToggle:T=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:C=E,stopInertiaOnNavigate:S=!1}={}){He(this,"_isScrolling",!1);He(this,"_isStopped",!1);He(this,"_isLocked",!1);He(this,"_preventNextNativeScrollEvent",!1);He(this,"_resetVelocityTimeout",null);He(this,"_rafId",null);He(this,"isTouching");He(this,"time",0);He(this,"userData",{});He(this,"lastVelocity",0);He(this,"velocity",0);He(this,"direction",0);He(this,"options");He(this,"targetScroll");He(this,"animatedScroll");He(this,"animate",new ab);He(this,"emitter",new $g);He(this,"dimensions");He(this,"virtualScroll");He(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});He(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});He(this,"onTransitionEnd",r=>{r.propertyName.includes("overflow")&&this.checkOverflow()});He(this,"onClick",r=>{const n=r.composedPath().filter(s=>s instanceof HTMLAnchorElement&&s.href).map(s=>new URL(s.href)),i=new URL(window.location.href);if(this.options.anchors){const s=n.find(o=>i.host===o.host&&i.pathname===o.pathname&&o.hash);if(s){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${s.hash.split("#")[1]}`;this.scrollTo(a,o);return}}if(this.options.stopInertiaOnNavigate&&n.some(o=>i.host===o.host&&i.pathname!==o.pathname)){this.reset();return}});He(this,"onPointerDown",r=>{r.button===1&&this.reset()});He(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const c=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||c)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>{var M,y,v,T,b;return p instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(p))||((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent"))||h==="vertical"&&((y=p.hasAttribute)==null?void 0:y.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((v=p.hasAttribute)==null?void 0:v.call(p,"data-lenis-prevent-horizontal"))||i&&((T=p.hasAttribute)==null?void 0:T.call(p,"data-lenis-prevent-touch"))||s&&((b=p.hasAttribute)==null?void 0:b.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const g=i&&this.options.syncTouch,m=i&&n.type==="touchend";m&&(d=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...g?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});He(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});He(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=qg,window.lenis||(window.lenis={}),window.lenis.version=qg,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof c!="function"?c=Kg:typeof c=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:M,autoRaf:y,anchors:v,autoToggle:T,allowNestedScroll:b,naiveDimensions:C,stopInertiaOnNavigate:S},this.dimensions=new cb(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new hb(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=r,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let g=null;if(typeof f=="string"?(g=document.querySelector(f),g||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(g=f),g){if(this.options.wrapper!==window){const m=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?m.left:m.top}const _=g.getBoundingClientRect();f=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof f=="number"){if(f+=d,f=Math.round(f),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=f-this.animatedScroll;g>this.limit/2?f-=this.limit:g<-this.limit/2&&(f+=this.limit)}}else f=Yg(0,f,this.limit);if(f===this.targetScroll){c==null||c(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Kg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,c,l,u,h,f,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);if(i.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),l=["auto"].includes(E.overscrollBehaviorX),u=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=h>d,c=f>g,i.isScrollableX=a,i.isScrollableY=c,i.scrollWidth=h,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,c=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,h=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&c))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,M,y,v,T;if(_==="horizontal")m=Math.round(r.scrollLeft),p=h-d,M=e,y=s,v=a,T=l;else if(_==="vertical")m=Math.round(r.scrollTop),p=f-g,M=t,y=o,v=c,T=u;else return!1;return!T&&(m>=p||m<=0)?!0:(M>0?m<p:m>0)&&y&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ob(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Zg(r,e){if(e===nx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Th||e===sm){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Th)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class fb extends So{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _b(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Lb(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Pa.extractUrlBase(e);o=Pa.resolveURL(l,this.path)}else o=Pa.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new og(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Jg){try{o[ht.KHR_BINARY_GLTF]=new Db(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Xb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new mb;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new Ib(s,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new Nb;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new Ub;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function db(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pb{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Je(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Rn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new hg(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Dy(u),l.distance=h;break;case"spot":l=new Py(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),$i(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class mb{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return kr}extendParams(e,t,n){const i=[];e.color=new Je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Rn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,on))}return Promise.all(i)}}class gb{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class _b{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(a,a)}return Promise.all(s)}}class vb{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class xb{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class yb{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,on)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Sb{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Mb{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(a[0],a[1],a[2],Rn),Promise.all(s)}}class Tb{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Eb{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(a[0],a[1],a[2],Rn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,on)),Promise.all(s)}}class bb{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class wb{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Ab{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Rb{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Cb{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Pb{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class Lb{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==vi.TRIANGLES&&l.mode!==vi.TRIANGLE_STRIP&&l.mode!==vi.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const g of h){const _=new it,m=new X,p=new Ir,M=new X(1,1,1),y=new ay(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&M.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,_.compose(m,p,M));for(const v in c)if(v==="_COLOR_0"){const T=c[v];y.instanceColor=new Qh(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Ft.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Jg="glTF",Da=12,Qg={JSON:1313821514,BIN:5130562};class Db{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Da,s=new DataView(e,Da);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Qg.JSON){const l=new Uint8Array(e,Da+o,a);this.content=n.decode(l)}else if(c===Qg.BIN){const l=Da+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ib{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Ef[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ef[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=wo[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(d)},a,l,Rn,f)})})}}class Nb{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ub{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class e_ extends Ra{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,M=1-m,y=p-f+h;for(let v=0;v!==a;v++){const T=o[_+v+a],b=o[_+v+c]*u,E=o[g+v+a],C=o[g+v]*u;s[v]=M*T+y*b+m*E+p*C}return s}}const Ob=new Ir;class Fb extends e_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Ob.fromArray(s).normalize().toArray(s),s}}const vi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},wo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},t_={9728:An,9729:ti,9984:$p,9985:El,9986:la,9987:rr},n_={33071:Lr,33648:Tl,10497:js},Tf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ef={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Bb={CUBICSPLINE:void 0,LINEAR:ma,STEP:pa},bf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ic({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ir})),r.DefaultMaterial}function Ms(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $i(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zb(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function Hb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vb(r){let e;const t=r.extensions&&r.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wf(t.attributes):e=r.indices+":"+wf(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+wf(r.targets[n]);return e}function wf(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Af(r){switch(r){case Int8Array:return .007874015748031496;case Uint8Array:return .00392156862745098;case Int16Array:return 3051850947599719e-20;case Uint16Array:return 15259021896696422e-21;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Wb=new it;class Xb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new db,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new ag(this.options.manager):this.textureLoader=new Ny(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new og(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ms(s,a,i),$i(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Pa.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Tf[i.type],a=wo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Cn(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Tf[i.type],l=wo[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(M);y||(_=new l(a,p*d,i.count*d/u),y=new ny(_,d/u),t.cache.add(M,y)),m=new jh(y,c,f%d/u,g)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),m=new Cn(_,c,g);if(i.sparse!==void 0){const p=Tf.SCALAR,M=wo[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new M(o[1],y,i.sparse.count*p),b=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new Cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=T.length;E<C;E++){const S=T[E];if(m.setX(S,b[E*c]),c>=2&&m.setY(S,b[E*c+1]),c>=3&&m.setZ(S,b[E*c+2]),c>=4&&m.setW(S,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=t_[f.magFilter]||ti,u.minFilter=t_[f.minFilter]||rr,u.wrapS=n_[f.wrapS]||js,u.wrapT=n_[f.wrapT]||js,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==An&&u.minFilter!==ti,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Jt(_);m.needsUpdate=!0,f(m)}),t.load(Pa.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),$i(h,o),h.userData.mimeType=o.mimeType||Gb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Jm,Xi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ym,Xi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ic}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Rn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,on)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ti);const u=s.alphaMode||bf.OPAQUE;if(u===bf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===bf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==kr&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ct(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==kr&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==kr){const h=s.emissiveFactor;a.emissive=new Je().setRGB(h[0],h[1],h[2],Rn)}return s.emissiveTexture!==void 0&&o!==kr&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,on)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),$i(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ms(i,h,s),h})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return i_(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Vb(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=i_(new Li,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?kb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const M=l[d];if(m.mode===vi.TRIANGLES||m.mode===vi.TRIANGLE_STRIP||m.mode===vi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new ry(_,M):new vn(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vi.TRIANGLE_STRIP?p.geometry=Zg(p.geometry,sm):m.mode===vi.TRIANGLE_FAN&&(p.geometry=Zg(p.geometry,Th));else if(m.mode===vi.LINES)p=new hy(_,M);else if(m.mode===vi.LINE_STRIP)p=new rf(_,M);else if(m.mode===vi.LINE_LOOP)p=new fy(_,M);else if(m.mode===vi.POINTS)p=new dy(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Hb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),$i(p,s),m.extensions&&Ms(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ms(i,h[0],s),h[0];const f=new ms;s.extensions&&Ms(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(Cx.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new sc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new it;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Jh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,v=f.length;y<v;y++){const T=f[y],b=d[y],E=g[y],C=_[y],S=m[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const x=n._createAnimationTracks(T,b,E,C,S);if(x)for(let w=0;w<x.length;w++)p.push(x[w])}const M=new My(s,void 0,p);return $i(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Wb)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Vm:l.length>1?u=new ms:l.length===1?u=l[0]:u=new Ft,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),$i(u,s),s.extensions&&Ms(n,u,s),s.matrix!==void 0){const h=new it;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ms;n.name&&(s.name=i.createUniqueName(n.name)),$i(s,n),n.extensions&&Ms(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Xi||f instanceof Jt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Vr[s.path]===Vr.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Vr[s.path]){case Vr.weights:l=_o;break;case Vr.rotation:l=vo;break;case Vr.translation:case Vr.scale:l=yo;break;default:switch(n.itemSize){case 1:l=_o;break;case 2:case 3:default:l=yo;break}break}const u=i.interpolation!==void 0?Bb[i.interpolation]:ma,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+Vr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Af(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vo?Fb:e_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qb(r,e,t){const n=e.attributes,i=new Vi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new X(c[0],c[1],c[2]),new X(l[0],l[1],l[2])),a.normalized){const u=Af(wo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new X,c=new X;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Af(wo[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Gi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function i_(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Ef[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return pt.workingColorSpace!==Rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),$i(r,e),qb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?zb(r,e.targets,t):r})}z.registerPlugin(Se);const Yb="",$b=.5,jb=-35,Ia=.5,Na=-1;function r_(r){r.traverse(e=>{var t,n,i;e.isMesh&&((t=e.geometry)==null||t.dispose(),Array.isArray(e.material)?e.material.forEach(s=>{var o;return(o=s.dispose)==null?void 0:o.call(s)}):(i=(n=e.material)==null?void 0:n.dispose)==null||i.call(n))})}function s_(){const r=new of(.4,.12,180,24),e=new ic({color:16777215,metalness:.3,roughness:.25}),t=new vn(r,e);return t.rotation.x=Ia,t.position.z=Na,t}function o_(r){r._threeParallaxFooterCleanup&&r._threeParallaxFooterCleanup();const e=r.querySelector("[data-tpf-footer-container]"),t=r.querySelector("[data-tpf-canvas]"),n=r.querySelector("[data-tpf-trigger]")??r;if(!e||!t)return;const i=r.getAttribute("data-tpf-model-url")??Yb,s=r.getAttribute("data-tpf-lenis")==="true",o=Number(r.getAttribute("data-tpf-model-opacity")??$b),a=Number(r.getAttribute("data-tpf-parallax-y")??jb),c={x:0,y:0},l=w=>{c.x=w.clientX/window.innerWidth*2-1,c.y=-(w.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",l);const u=new $h,h=t.clientWidth,f=t.clientHeight||1,d=new xn(50,h/f,.1,1e3);d.position.set(0,0,.75);const g=new Mf({alpha:!0,antialias:!0});g.setSize(h,f),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(g.domElement);const _=new hg(16777215,5);_.position.set(1,1,0),u.add(_);let m=null,p=Ia,M=Na,y=null,v=!1,T=null,b=null;const E=w=>{m&&(u.remove(m),r_(m)),m=w,m.rotation.x=Ia,m.position.z=Na,u.add(m)};i?new fb().load(i,P=>{const U=P.scene,H=new Vi().setFromObject(U),F=H.getCenter(new X),N=H.getSize(new X),k=Math.max(N.x,N.y,N.z)||1;U.position.sub(F),U.position.y=0,U.position.z=Na,U.rotation.x=Ia,U.scale.setScalar(1/k),E(U)},void 0,()=>{E(s_())}):E(s_());const C=Se.create({trigger:n,start:"top bottom",end:"bottom bottom",scrub:!0,onUpdate:w=>{const P=a*(1-w.progress);z.set(e,{y:`${P}%`}),M=Na*(1-w.progress),p=Ia*(1-w.progress)}});s&&(T=new pr,T.on("scroll",Se.update),b=w=>{T.raf(w*1e3)},z.ticker.add(b),z.ticker.lagSmoothing(0));const S=()=>{const w=t.clientWidth,P=t.clientHeight||1;d.aspect=w/P,d.updateProjectionMatrix(),g.setSize(w,P),g.setPixelRatio(Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",S);const x=()=>{if(!v){if(y=window.requestAnimationFrame(x),m){const w=c.x*.3,P=-c.y*.2+p;m.rotation.y+=(w-m.rotation.y)*.05,m.rotation.x+=(P-m.rotation.x)*.05,m.position.z+=(M-m.position.z)*.05}g.render(u,d)}};x(),g.domElement&&(g.domElement.style.opacity=String(o)),r._threeParallaxFooterCleanup=()=>{v=!0,y&&window.cancelAnimationFrame(y),window.removeEventListener("mousemove",l),window.removeEventListener("resize",S),C.kill(),b&&z.ticker.remove(b),T==null||T.destroy(),m&&(u.remove(m),r_(m)),g.dispose(),g.domElement.remove()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="three-parallax-footer"]').forEach(e=>o_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);function Kb(r){const e=r.textContent.trim().split(/\s+/);return r.innerHTML=e.map(t=>`<span class="ova-word-mask"><span class="ova-word">${$t(t)}</span></span>`).join(" "),r.querySelectorAll(".ova-word")}function Zb(r){const e=r.getAttribute("data-ova-slides");if(e)try{return JSON.parse(e)}catch{return[]}const t=r.querySelectorAll("[data-ova-slide]");return Array.from(t).map(n=>{var i;return{image:n.getAttribute("data-image")??"",title:n.getAttribute("data-title")??((i=n.textContent)==null?void 0:i.trim())??""}})}function a_(r){r._ovaScrollSliderCleanup&&r._ovaScrollSliderCleanup();const e=r.querySelector("[data-ova-slider]"),t=r.querySelector("[data-ova-images]"),n=r.querySelector("[data-ova-title]"),i=r.querySelector("[data-ova-indices]"),s=r.querySelector("[data-ova-progress]"),o=Zb(r);if(!e||!t||!n||!i||!s||!o.length)return;const a=r.getAttribute("data-ova-lenis")==="true",c=Number(r.getAttribute("data-ova-scrub"))||1;let l=null,u=null,h=-1,f=null;const d=window.innerHeight*o.length;function g(){i.innerHTML="",o.forEach((M,y)=>{const v=(y+1).toString().padStart(2,"0"),T=document.createElement("p");T.dataset.index=String(y),T.innerHTML=`<span class="ova-marker"></span><span class="ova-index">${$t(v)}</span>`,i.appendChild(T),y===0?(z.set(T.querySelector(".ova-index"),{opacity:1}),z.set(T.querySelector(".ova-marker"),{scaleX:1})):(z.set(T.querySelector(".ova-index"),{opacity:.35}),z.set(T.querySelector(".ova-marker"),{scaleX:0}))})}function _(M){i.querySelectorAll("p").forEach((v,T)=>{const b=v.querySelector(".ova-marker"),E=v.querySelector(".ova-index"),C=T===M;z.to(E,{opacity:C?1:.35,duration:.3,ease:"power2.out"}),z.to(b,{scaleX:C?1:0,duration:.3,ease:"power2.out"})})}function m(M){var b;const y=((b=o[M])==null?void 0:b.title)??"",v=n.querySelector("h1")??document.createElement("h1");v.textContent=y,n.contains(v)||n.appendChild(v);const T=Kb(v);z.set(T,{yPercent:100,opacity:0}),z.to(T,{yPercent:0,opacity:1,duration:.75,stagger:.1,ease:"power3.out"})}function p(M){const y=o[M];if(!(y!=null&&y.image))return;const v=document.createElement("img");v.src=y.image,v.alt=y.title||`Slide ${M+1}`,z.set(v,{opacity:0,scale:1.1}),t.appendChild(v),z.to(v,{opacity:1,duration:.5,ease:"power2.out"}),z.to(v,{scale:1,duration:1,ease:"power2.out"});const T=t.querySelectorAll("img");if(T.length>3)for(let b=0;b<T.length-3;b++)T[b].remove();m(M),_(M)}g(),f=Se.create({trigger:e,start:"top top",end:`+=${d}px`,scrub:c,pin:!0,pinSpacing:!0,onUpdate:M=>{z.set(s,{scaleY:M.progress});const y=Math.floor(M.progress*o.length),v=Math.min(y,o.length-1);h!==v&&v>=0&&(h=v,p(h))}}),a&&(l=new pr,l.on("scroll",Se.update),u=M=>l.raf(M*1e3),z.ticker.add(u),z.ticker.lagSmoothing(0)),h=0,p(0),r._ovaScrollSliderCleanup=()=>{f==null||f.kill(),u&&z.ticker.remove(u),l==null||l.destroy()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="ova-scroll-slider"]').forEach(e=>a_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);const Jb=22500,Qb=0,Rf=-2500,ew=-5e3,tw=100;function l_(r,e,t,n,i){return(r-e)*(i-n)/(t-e)+n}function nw(r){const e=r.getAttribute("data-sg-slides");if(e)try{return JSON.parse(e)}catch{return[]}const t=r.querySelectorAll("[data-sg-slide]");return Array.from(t).map(n=>({image:n.getAttribute("data-image")??"",title:n.getAttribute("data-title")??"",index:n.getAttribute("data-index")??""}))}function c_(r){r._sg3dScrollCleanup&&r._sg3dScrollCleanup();const e=r.querySelector("[data-sg-container]"),t=r.querySelector("[data-sg-slider]"),n=r.querySelector("[data-sg-active]"),i=nw(r);if(!e||!t||!n||!i.length)return;const s=Number(r.getAttribute("data-sg-scrub"))||1,o=i.length*200;e.style.height=`${o}vh`,n.innerHTML=i.map(u=>`<img src="${$t(u.image)}" alt="${$t(u.title)}" />`).join(""),t.innerHTML=i.map((u,h)=>`
      <div data-sg-slide class="sg-slide" style="
        left: ${h%2===0?"70":"30"}%;
        transform: translateX(-50%) translateY(-50%) translateZ(${-2500*(i.length-1-h)}px);
        opacity: ${h===i.length-1?1:0};
      ">
        <div class="sg-slide-copy">
          <p>${$t(u.title)}</p>
          ${u.index?`<p class="sg-slide-index">${$t(u.index)}</p>`:""}
        </div>
        <div class="sg-slide-img">
          <img src="${$t(u.image)}" alt="${$t(u.title)}" />
        </div>
      </div>
    `).join("");const a=t.querySelectorAll("[data-sg-slide]"),c=n.querySelectorAll("img"),l=[];a.forEach((u,h)=>{const f=-2500*(i.length-1-h);l.push(Se.create({trigger:e,start:"top top",end:"bottom bottom",scrub:s,onUpdate:d=>{const _=d.progress*Jb,m=f+_;let p;m>=Rf?p=l_(m,Rf,Qb,.5,1):p=l_(m,ew,Rf,0,.5),u.style.opacity=p,u.style.transform=`translateX(-50%) translateY(-50%) translateZ(${m}px)`,m<tw?z.to(c[h],{opacity:1,duration:1.5,ease:"power3.out"}):z.to(c[h],{opacity:0,duration:1.5,ease:"power3.out"})}}))}),r._sg3dScrollCleanup=()=>{l.forEach(u=>u.kill())}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="sageeast-3d-scroll"]').forEach(e=>c_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}const iw=4e3,hc=.4;function rw(r){const e=r.getAttribute("data-stories");if(e)try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}const t=r.querySelectorAll("[data-story]");return Array.from(t).map(n=>{const i=n.getAttribute("data-title");return{profileImg:n.getAttribute("data-profile-img")??"",profileName:n.getAttribute("data-profile-name")??"",title:i?i.split("|").map(s=>s.trim()):[],linkLabel:n.getAttribute("data-link-label")??"",linkSrc:n.getAttribute("data-link-src")??"#",storyImg:n.getAttribute("data-story-img")??""}})}function u_(r){r._storiesCleanup&&r._storiesCleanup();const e=rw(r);if(!e.length)return;const t=Number(r.getAttribute("data-stories-duration"))||iw,n=r.getAttribute("data-stories-cursor")!=="false";let i=0,s="next",o;const a=r.querySelector("[data-stories-container]"),c=r.querySelector("[data-stories-cursor]"),l=c==null?void 0:c.querySelector("p"),u=r.querySelector("[data-stories-img]"),h=r.querySelector("[data-stories-indices]"),f=r.querySelector("[data-stories-profile-icon]"),d=r.querySelector("[data-stories-profile-name]"),g=r.querySelector("[data-stories-title]"),_=r.querySelector("[data-stories-link]");if(!a||!u||!h||!d||!g||!_)return;const m=Math.max(...e.map(F=>{var N;return(((N=F.title)==null?void 0:N.length)??0)||1}),1);h.innerHTML=e.map(()=>'<div class="stories-index"><div class="stories-index-highlight"></div></div>').join(""),h.querySelectorAll(".stories-index");const p=h.querySelectorAll(".stories-index-highlight");function M(F,N){const k=p[F];k&&(z.killTweensOf(k),z.set(k,{transformOrigin:"left center"}),z.to(k,{width:N==="next"?"100%":"0%",duration:.3,ease:"power2.out"}))}function y(){p.forEach(F=>{z.killTweensOf(F),z.set(F,{width:"0%",transformOrigin:"left center"})})}function v(F){const N=p[F];N&&(z.killTweensOf(N),z.set(N,{width:"0%",transformOrigin:"left center"}),z.to(N,{width:"100%",duration:t/1e3,ease:"none"}))}function T(F,N){z.set(F,{clipPath:N==="next"?"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}),z.to(F,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:1,ease:"power4.inOut"})}function b(F,N,k){z.fromTo(F,{scale:1,rotate:0},{scale:2,rotate:k==="next"?-25:25,duration:1,ease:"power4.inOut",onComplete:()=>{var B;(B=F.closest(".stories-img-item"))==null||B.remove()}}),z.fromTo(N,{scale:2,rotate:k==="next"?25:-25},{scale:1,rotate:0,duration:1,ease:"power4.inOut"})}function E(){for(;d.children.length>2;)d.removeChild(d.firstChild);g.querySelectorAll(".stories-title-row").forEach(F=>{for(;F.children.length>2;)F.removeChild(F.firstChild)})}const C=600;let S=0;function x(F=!0){S=Date.now();const N=i,k=F?"next":s;k==="next"?i=(i+1)%e.length:i=(i-1+e.length)%e.length;const B=e[i],Q=Array.isArray(B.title)?B.title:[B.title??""],I=d.querySelectorAll("p"),se=g.querySelectorAll(".stories-title-row h1");z.killTweensOf(I),z.killTweensOf(se);const Me=k==="next"?-24:24,Fe=k==="next"?-48:48;z.to(I,{y:Me,duration:.5,delay:hc,force3D:!0,onComplete:()=>{I.forEach($=>$.remove())}}),z.to(se,{y:Fe,duration:.5,delay:hc,force3D:!0,onComplete:()=>{se.forEach($=>$.remove())}});const le=u.querySelector(".stories-img-item"),pe=le==null?void 0:le.querySelector("img");setTimeout(()=>{const $=k==="next"?24:-24,j=k==="next"?48:-48,oe=document.createElement("p");oe.textContent=B.profileName,oe.style.zIndex="1",d.appendChild(oe),z.fromTo(oe,{y:$},{y:0,duration:.5,delay:hc,force3D:!0});const Y=g.querySelectorAll(".stories-title-row");for(let L=0;L<m;L++){const Re=Q[L]??"",_e=Y[L];if(_e){const me=document.createElement("h1");me.textContent=Re,me.style.zIndex="1",_e.appendChild(me),z.fromTo(me,{y:j},{y:0,duration:.5,delay:hc,force3D:!0})}}const K=document.createElement("div");K.className="stories-img-item";const re=document.createElement("img");re.src=B.storyImg,re.alt=B.profileName,K.appendChild(re),u.appendChild(K),T(K,k),pe&&b(pe,re,k),k==="next"&&N===e.length-1&&i===0?y():M(N,k),v(i),E(),clearTimeout(o),o=setTimeout(()=>x(!0),t)},200),setTimeout(()=>{if(f){const $=f.querySelector("img");$&&($.src=B.profileImg)}_.textContent=B.linkLabel,_.href=B.linkSrc},600)}u.innerHTML="";const w=document.createElement("div");w.className="stories-img-item";const P=document.createElement("img");if(P.src=e[0].storyImg,P.alt=e[0].profileName,w.appendChild(P),u.appendChild(w),d.innerHTML=`<p>${$t(e[0].profileName)}</p>`,g.innerHTML=Array.from({length:m},(F,N)=>{var B;const k=(((B=e[0].title)==null?void 0:B.length)??0)>N?e[0].title[N]:"";return`<div class="stories-title-row"><h1>${$t(k)}</h1></div>`}).join(""),_.textContent=e[0].linkLabel,_.href=e[0].linkSrc,f){const F=f.querySelector("img");F&&(F.src=e[0].profileImg)}v(0);const U=F=>{if(!c||!l)return;const{clientX:N,clientY:k}=F,B=a.getBoundingClientRect();z.to(c,{x:N-B.left-c.offsetWidth/2,y:k-B.top-c.offsetHeight/2,ease:"power2.out",duration:.3});const Q=B.left+B.width/2;N<Q?(l.textContent="Prev",s="prev"):(l.textContent="Next",s="next")},H=()=>{Date.now()-S<C||(clearTimeout(o),M(i,s),x(!1))};n&&c&&a.addEventListener("mousemove",U),a.addEventListener("click",H),o=setTimeout(()=>x(!0),t),r._storiesCleanup=()=>{clearTimeout(o),n&&c&&a.removeEventListener("mousemove",U),a.removeEventListener("click",H),p.forEach(F=>z.killTweensOf(F)),d.querySelectorAll("p").forEach(F=>z.killTweensOf(F)),g.querySelectorAll(".stories-title-row h1").forEach(F=>z.killTweensOf(F)),u.querySelectorAll(".stories-img-item, img").forEach(F=>z.killTweensOf(F))}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="stories"]').forEach(e=>u_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);function sw(r,e="telescope-word"){var i;const n=(((i=r.textContent)==null?void 0:i.trim())??"").split(/\s+/).filter(Boolean);return n.length?(r.innerHTML=n.map(s=>`<span class="telescope-word-mask"><span class="${e}">${$t(s)}</span></span>`).join(" "),r.querySelectorAll(`.${e}`)):[]}function h_(r){r._telescopeCleanup&&r._telescopeCleanup();const e=r.querySelector("[data-telescope-container]"),t=r.querySelector("[data-telescope-header]"),n=r.querySelectorAll("[data-telescope-intro-item]"),i=r.querySelectorAll("[data-telescope-layer]");if(!e||!t)return;const s=r.getAttribute("data-telescope-lenis")==="true",o=Number(r.getAttribute("data-telescope-scroll-height"))||4,a=Number(r.getAttribute("data-telescope-scrub"))||1;let c=null,l=null;const u=sw(t,"telescope-word");z.set(u,{opacity:0}),i.forEach((g,_)=>{z.set(g,{scale:.9-_*.2})}),z.set(e,{scale:0});const h=r.querySelector("[data-telescope-trigger]")??r,f=window.innerHeight*o,d=Se.create({trigger:h,start:"top top",end:`+=${f}px`,pin:!0,pinSpacing:!0,scrub:a,onUpdate:g=>{const _=g.progress;if(z.set(e,{scale:_}),i.forEach((m,p)=>{const M=.9-p*.2,y=Math.min(_/.9,1),v=M+y*(1-M);z.set(m,{scale:v})}),_<=.9&&n.length>=2){const m=_/.9,p=window.innerWidth*.5;z.set(n[0],{x:-m*p}),z.set(n[1],{x:m*p})}if(_>=.7&&_<=.9&&u.length){const m=(_-.7)/.2,p=u.length;u.forEach((M,y)=>{const v=y/p,T=(y+1)/p;let b=0;m>=T?b=1:m>=v&&(b=(m-v)/(T-v)),z.set(M,{opacity:b})})}else _<.7?z.set(u,{opacity:0}):_>.9&&z.set(u,{opacity:1})}});s&&(c=new pr,c.on("scroll",Se.update),l=g=>c.raf(g*1e3),z.ticker.add(l),z.ticker.lagSmoothing(0)),r._telescopeCleanup=()=>{d.kill(),l&&z.ticker.remove(l),c==null||c.destroy()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="telescope-img-scroll"]').forEach(e=>h_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);const fc={gap:.08,speed:.3,arcRadius:500};function ow(r){const e=r.getAttribute("data-telescope-scroll-items");if(e)try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}const t=r.querySelectorAll("[data-telescope-scroll-item]");return Array.from(t).map(n=>({name:n.getAttribute("data-name")??"",img:n.getAttribute("data-img")??""}))}function f_(r){var F;r._telescopeScrollCleanup&&r._telescopeScrollCleanup();const e=ow(r);if(!e.length)return;const t=r.querySelector("[data-telescope-scroll-intro-left]"),n=r.querySelector("[data-telescope-scroll-intro-right]"),i=r.querySelector("[data-telescope-scroll-bg]"),s=r.querySelector("[data-telescope-scroll-titles]"),o=r.querySelector("[data-telescope-scroll-images]"),a=r.querySelector("[data-telescope-scroll-header]"),c=r.querySelector("[data-telescope-scroll-titles-container]");if(!i||!s||!o||!c)return;const l=r.getAttribute("data-telescope-scroll-lenis")==="true",u=Number(r.getAttribute("data-telescope-scroll-height"))||10,h=Number(r.getAttribute("data-telescope-scroll-scrub"))||1;let f=null,d=null;const g=[t,n].filter(Boolean);s.innerHTML="",o.innerHTML="";const _=i.querySelector("img");_&&((F=e[0])!=null&&F.img)&&(_.src=e[0].img,_.alt=$t(e[0].name));const m=[];e.forEach((N,k)=>{const B=document.createElement("h1");B.textContent=N.name,k===0&&(B.style.opacity="1"),s.appendChild(B);const Q=document.createElement("div");Q.className="telescope-scroll-img";const I=document.createElement("img");I.src=N.img,I.alt=$t(N.name),Q.appendChild(I),o.appendChild(Q),m.push(Q)});const p=s.querySelectorAll("h1");let M=0;const y=window.innerWidth*.3,v=window.innerHeight,T=y-220,b=-200,E=v+200,C=T+fc.arcRadius,S=v/2;function x(N){const k=(1-N)*(1-N)*T+2*(1-N)*N*C+N*N*T,B=(1-N)*(1-N)*b+2*(1-N)*N*S+N*N*E;return{x:k,y:B}}function w(N,k){const B=N*fc.gap,Q=B+fc.speed;return k<B?-1:k>Q?2:(k-B)/fc.speed}m.forEach(N=>z.set(N,{opacity:0}));const P=r.querySelector("[data-telescope-scroll-trigger]")??r,U=window.innerHeight*u,H=Se.create({trigger:P,start:"top top",end:`+=${U}px`,pin:!0,pinSpacing:!0,scrub:h,onUpdate:N=>{var B;const k=N.progress;if(k<=.2){const Q=k/.2,I=window.innerWidth*.6;g.forEach((se,Me)=>{se&&z.set(se,{x:Me===0?-Q*I:Q*I,opacity:1})}),z.set(i,{scale:Q}),z.set(i.querySelector("img"),{scale:1.5-Q*.5}),m.forEach(se=>z.set(se,{opacity:0})),a&&(a.style.opacity="0"),z.set(c,{"--telescope-before-opacity":"0","--telescope-after-opacity":"0"})}else if(k>.2&&k<=.25)z.set(i,{scale:1}),z.set(i.querySelector("img"),{scale:1}),g.forEach(Q=>Q&&z.set(Q,{opacity:0})),m.forEach(Q=>z.set(Q,{opacity:0})),a&&(a.style.opacity="1"),z.set(c,{"--telescope-before-opacity":"1","--telescope-after-opacity":"1"});else if(k>.25&&k<=.95){z.set(i,{scale:1}),z.set(i.querySelector("img"),{scale:1}),g.forEach(Y=>Y&&z.set(Y,{opacity:0})),a&&(a.style.opacity="1"),z.set(c,{"--telescope-before-opacity":"1","--telescope-after-opacity":"1"});const Q=(k-.25)/.7,I=window.innerHeight,se=s.scrollHeight,Me=I,Fe=-se,le=Me-Fe,pe=Me-Q*le;z.set(s,{y:pe}),m.forEach((Y,K)=>{const re=w(K,Q);if(re<0||re>1)z.set(Y,{opacity:0});else{const Ne=x(re);z.set(Y,{x:Ne.x-100,y:Ne.y-75,opacity:1})}});const $=I/2;let j=0,oe=1/0;if(p.forEach((Y,K)=>{const re=Y.getBoundingClientRect(),Ne=re.top+re.height/2,L=Math.abs(Ne-$);L<oe&&(oe=L,j=K)}),j!==M){p[M]&&(p[M].style.opacity="0.25"),p[j].style.opacity="1";const Y=i.querySelector("img");Y&&((B=e[j])!=null&&B.img)&&(Y.src=e[j].img),M=j}}else k>.95&&(a&&(a.style.opacity="0"),z.set(c,{"--telescope-before-opacity":"0","--telescope-after-opacity":"0"}))}});l&&(f=new pr,f.on("scroll",Se.update),d=N=>f.raf(N*1e3),z.ticker.add(d),z.ticker.lagSmoothing(0)),r._telescopeScrollCleanup=()=>{H.kill(),d&&z.ticker.remove(d),f==null||f.destroy()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="telescope-scroll"]').forEach(e=>f_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);const ri=25,d_=1e3,p_=300,aw=300,lw=.5,cw=.5;function Cf(r){if(!r||typeof r!="string")return!1;const e=r.trim().toLowerCase();return e==="#"||e.startsWith("/")||e.startsWith("https://")||e.startsWith("http://")}function uw(r){const e=r.getAttribute("data-elementis-slides");if(e)try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch(n){return console.warn("[elementis-scroll] Invalid data-elementis-slides JSON:",n),[]}const t=r.querySelectorAll("[data-elementis-slide]");return Array.from(t).map(n=>({title:n.getAttribute("data-title")??"",image:n.getAttribute("data-image")??"",url:n.getAttribute("data-url")??"#"}))}function m_(r,e,t){return r>e?1.25:r<e-1?1:1.25-.25*(r===e?t:1+t)/2}function g_(r){r._elementisScrollCleanup&&r._elementisScrollCleanup();const e=uw(r);if(!e.length)return;const t=r.querySelector("[data-elementis-images]"),n=r.querySelector("[data-elementis-title]"),i=r.querySelector("a[data-elementis-link]")??r.querySelector("[data-elementis-link] a");if(!t||!n)return;const s=r.getAttribute("data-elementis-lenis")==="true",o=r.getAttribute("data-elementis-scrub"),a=o==="true"?!0:Number(o)||1;let c=null,l=null,u=0,h=null,f=!1,d=0;const g=e.length,_=g-1,m=_*d_+p_+aw,p=[];let M=p_;for(let w=0;w<_;w++){const P=M,U=P+d_;p.push({transition:w,startPercent:P/m,endPercent:U/m}),M=U}function y(w){if(!p.length||w<p[0].startPercent)return 0;if(w>p[p.length-1].endPercent)return p.length;for(let P=0;P<p.length;P++){const U=p[P];if(w>=U.startPercent&&w<=U.endPercent){const H=U.endPercent-U.startPercent,F=(w-U.startPercent)/H;return P+F}if(w>U.endPercent)return P+1}return 0}function v(w){const P=Math.floor(w);return w-P>=lw?Math.min(P+1,e.length-1):P}function T(w,P){if(w===u||w<0||w>=e.length)return;if(f){h=w;return}f=!0;const U=e[w],H=P==="down"?"-120%":"120%",F=P==="down"?"120%":"-120%";z.killTweensOf(n),i&&(i.href=Cf(U.url)?U.url:"#"),z.to(n,{y:H,duration:.5,ease:"power3.out",onComplete:()=>{n.textContent=U.title,z.set(n,{y:F}),z.to(n,{y:"0%",duration:.5,ease:"power3.out",onComplete:()=>{if(u=w,f=!1,h!==null&&h!==u){const N=h;h=null,T(N,P)}}})}})}t.innerHTML="";const b=document.createElement("div");b.className="elementis-scroll-img";const E=document.createElement("img");E.src=e[0].image,E.alt=$t(e[0].title),E.style.transform="scale(1.25)",b.appendChild(E),t.appendChild(b),n.textContent=e[0].title,i&&(i.href=Cf(e[0].url)?e[0].url:"#");for(let w=1;w<g;w++){const P=document.createElement("div");P.className="elementis-scroll-img-container",P.dataset.slideIndex=String(w),P.style.opacity="0";for(let U=0;U<ri;U++){const H=document.createElement("div");H.className="elementis-scroll-strip";const F=document.createElement("img");F.src=e[w].image,F.alt=$t(e[w].title),F.style.transform="scale(1.25)";const N=ri-U-1,k=(N+1)*(100/ri),B=N*(100/ri);H.style.clipPath=`polygon(0% ${k}%, 100% ${k}%, 100% ${B-.1}%, 0% ${B-.1}%)`,H.appendChild(F),P.appendChild(H)}t.appendChild(P)}const C=[];for(let w=1;w<g;w++){const P=t.querySelector(`[data-slide-index="${w}"]`);P&&C.push({container:P,strips:P.querySelectorAll(".elementis-scroll-strip"),images:P.querySelectorAll("img")})}const S=r.querySelector("[data-elementis-trigger]")??r,x=Se.create({trigger:S,start:"top top",end:`+=${m}vh`,pin:!0,pinSpacing:!0,scrub:a,invalidateOnRefresh:!0,onUpdate:w=>{const P=y(w.progress),U=P>d?"down":"up",H=Math.floor(P),F=P-H,N=v(P);if(N!==u){if(i&&e[N]){const B=e[N].url;i.href=Cf(B)?B:"#"}h=N,f||T(N,U)}const k=m_(0,H,F);z.set(E,{scale:k,force3D:!0}),C.forEach(({container:B,strips:Q,images:I},se)=>{const Me=se;B.style.opacity="1",Me<H?Q.forEach((le,pe)=>{const $=ri-pe-1,j=$*(100/ri),oe=($+1)*(100/ri);le.style.clipPath=`polygon(0% ${oe}%, 100% ${oe}%, 100% ${j-.1}%, 0% ${j-.1}%)`}):Me===H?Q.forEach((le,pe)=>{const $=ri-pe-1,j=$*(100/ri),oe=($+1)*(100/ri),Y=pe/ri*cw,K=Math.max(0,Math.min(1,(F-Y)*2)),re=oe-(oe-(j-.1))*K;le.style.clipPath=`polygon(0% ${oe}%, 100% ${oe}%, 100% ${re}%, 0% ${re}%)`}):Q.forEach((le,pe)=>{const j=(ri-pe-1+1)*(100/ri);le.style.clipPath=`polygon(0% ${j}%, 100% ${j}%, 100% ${j}%, 0% ${j}%)`});const Fe=m_(Me,H,F);z.set(I,{scale:Fe,force3D:!0})}),d=P}});s&&(c=new pr,c.on("scroll",Se.update),l=w=>c.raf(w*1e3),z.ticker.add(l),z.ticker.lagSmoothing(0)),r._elementisScrollCleanup=()=>{x.kill(),z.killTweensOf(n),l&&z.ticker.remove(l),c==null||c.destroy()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="elementis-scroll"]').forEach(e=>g_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}const hw=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,fw=`
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform vec2 uTextureSize;
  uniform vec2 uMouse;
  uniform float uParallaxStrength;
  uniform float uDistortionMultiplier;
  uniform float uGlassStrength;
  uniform float uStripesFrequency;
  uniform float uGlassSmoothness;
  uniform float uEdgePadding;

  varying vec2 vUv;

  vec2 getCoverUV(vec2 uv, vec2 textureSize) {
    if (textureSize.x < 1.0 || textureSize.y < 1.0) return uv;

    vec2 scale = uResolution / textureSize;
    float coverScale = max(scale.x, scale.y);
    vec2 scaledSize = textureSize * coverScale;
    vec2 offset = (uResolution - scaledSize) * 0.5;

    return (uv * uResolution - offset) / scaledSize;
  }

  float displacement(float x, float numStripes, float strength) {
    float modulus = 1.0 / numStripes;
    return mod(x, modulus) * strength;
  }

  float fractalGlass(float x) {
    float total = 0.0;
    for (int i = -5; i <= 5; i++) {
      total += displacement(
        x + float(i) * uGlassSmoothness,
        uStripesFrequency,
        uGlassStrength
      );
    }
    total = total / 11.0;
    return x + total;
  }

  float smoothEdge(float x, float padding) {
    if (x < padding) {
      return smoothstep(0.0, padding, x);
    } else if (x > 1.0 - padding) {
      return smoothstep(1.0, 1.0 - padding, x);
    }
    return 1.0;
  }

  void main() {
    vec2 uv = vUv;
    float originalX = uv.x;
    float edgeFactor = smoothEdge(originalX, uEdgePadding);
    float distortedX = fractalGlass(originalX);

    uv.x = mix(originalX, distortedX, edgeFactor);

    float distortionFactor = uv.x - originalX;
    float parallaxDirection = -sign(0.5 - uMouse.x);
    vec2 parallaxOffset = vec2(
      parallaxDirection * abs(uMouse.x - 0.5) * uParallaxStrength *
      (1.0 + abs(distortionFactor) * uDistortionMultiplier),
      0.0
    );

    parallaxOffset *= edgeFactor;
    uv += parallaxOffset;

    vec2 coverUV = getCoverUV(uv, uTextureSize);
    coverUV = clamp(coverUV, 0.0, 1.0);

    vec4 color = texture2D(uTexture, coverUV);
    gl_FragColor = color;
  }
`,dw={lerpFactor:.035,parallaxStrength:.1,distortionMultiplier:10,glassStrength:2,glassSmoothness:1e-4,stripesFrequency:35,edgePadding:.1};function __(r){r._fractalGlassEffectCleanup&&r._fractalGlassEffectCleanup();const e=r.querySelector("[data-fge-hero]"),t=r.querySelector("[data-fge-texture]");if(!e||!t)return;const n={...dw},i=new $h,s=new sc(-1,1,1,-1,0,1),o=new Mf({antialias:!0,alpha:!1}),a=e.clientWidth||window.innerWidth,c=e.clientHeight||window.innerHeight;o.setSize(a,c),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(o.domElement);const l={x:.5,y:.5},u={x:.5,y:.5},h=(C,S,x)=>C+(S-C)*x,f={x:1,y:1},d={uTexture:{value:null},uResolution:{value:new ct(a,c)},uTextureSize:{value:new ct(f.x,f.y)},uMouse:{value:new ct(l.x,l.y)},uParallaxStrength:{value:n.parallaxStrength},uDistortionMultiplier:{value:n.distortionMultiplier},uGlassStrength:{value:n.glassStrength},uStripesFrequency:{value:n.stripesFrequency},uGlassSmoothness:{value:n.glassSmoothness},uEdgePadding:{value:n.edgePadding}},g=new hr({uniforms:d,vertexShader:hw,fragmentShader:fw}),_=new mo(2,2),m=new vn(_,g);i.add(m);let p=null,M=!1,y=null;const v=()=>{t.complete&&(y==null||y.dispose(),y=new Jt(t),y.needsUpdate=!0,f.x=t.naturalWidth||t.width||1,f.y=t.naturalHeight||t.height||1,d.uTexture.value=y,d.uTextureSize.value.set(f.x,f.y))};t.complete?v():t.addEventListener("load",v,{once:!0});const T=C=>{u.x=C.clientX/window.innerWidth,u.y=1-C.clientY/window.innerHeight},b=()=>{const C=e.clientWidth||window.innerWidth,S=e.clientHeight||window.innerHeight;o.setSize(C,S),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.uResolution.value.set(C,S)};window.addEventListener("mousemove",T),window.addEventListener("resize",b);const E=()=>{M||(p=window.requestAnimationFrame(E),l.x=h(l.x,u.x,n.lerpFactor),l.y=h(l.y,u.y,n.lerpFactor),d.uMouse.value.set(l.x,l.y),o.render(i,s))};E(),r._fractalGlassEffectCleanup=()=>{M=!0,p&&window.cancelAnimationFrame(p),window.removeEventListener("mousemove",T),window.removeEventListener("resize",b),i.remove(m),_.dispose(),g.dispose(),y==null||y.dispose(),o.dispose(),o.domElement.remove()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="fractal-glass-effect"]').forEach(e=>__(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}const v_=["../elementis-scroll/public/img1.jpg","../elementis-scroll/public/img2.jpg","../elementis-scroll/public/img3.jpg","../elementis-scroll/public/img4.jpg","../elementis-scroll/public/img5.jpg","../fractal-glass-effect/public/hero.jpg","../fractal-glass-effect/public/hero2.jpg","../fractal-glass-effect/public/hero3.jpg","../fractal-glass-effect/public/hero4.jpg"],dc=["Shadow Profile","Crimson Silhouette","Wavelength","Noir Figure","Midnight Gaze","Cobalt Contrast","Half-Light","Scarlet Frame","Pale Vision","Spectral Form","Monochrome Motion","Platinum Edge","Electric Shade","Veiled Light","Luminous Dark","Haze Portrait","Glowing Contour","Dark Elegance","Ruby Accent","Clear Gaze"].map((r,e)=>({title:r,img:v_[e%v_.length]})),pw={imageCount:25,radius:275,sensitivity:500,effectFalloff:250,cardMoveAmount:50,lerpFactor:.15};function x_(r){return r<768?.6:r<1200?.8:1}function y_(r){const t=(r.textContent??"").split(/\s+/).filter(Boolean);return r.textContent="",t.map((n,i)=>{const s=document.createElement("span");return s.className="word",s.textContent=n,r.appendChild(s),i<t.length-1&&r.appendChild(document.createTextNode(" ")),s})}function mw(r){return r.deltaMode===1?r.deltaY*16:r.deltaMode===2?r.deltaY*window.innerHeight:r.deltaY}function S_(r){r._inkwellImageGalleryCleanup&&r._inkwellImageGalleryCleanup();const e=r.querySelector("[data-iwg-gallery]"),t=r.querySelector("[data-iwg-gallery-container]"),n=r.querySelector("[data-iwg-title-container]"),i=r.querySelector("[data-iwg-close]"),s=r.querySelector("[data-iwg-progress-fill]");if(!e||!t||!n)return;const o={...pw,isMobile:window.innerWidth<1e3},a=[],c=[];let l=null,u=!1,h=!1,f=!1,d=null,g=1,_=!1,m=0,p=0,M=0,y=0,v=0,T=0,b=null,E=null,C=!1;const S=s?z.quickTo(s,"scaleX",{duration:.3,ease:"power2.out",overwrite:!0}):null,x={targetX:0,targetY:0,targetZ:0,currentX:0,currentY:0,currentZ:0};function w(Y,K,re){i&&(Y?(i.classList.add("is-visible"),typeof K=="number"&&typeof re=="number"&&z.set(i,{x:K+20,y:re+20})):i.classList.remove("is-visible"))}function P(Y){if(!s)return;const K=Math.max(0,Math.min(1,Y));S==null||S(K)}function U(Y){if(!u||h){w(!1);return}const K=Y.target instanceof Element?Y.target:null,re=!!(K!=null&&K.closest(".card")),Ne=!!(K!=null&&K.closest("[data-iwg-nav]")),L=!!(K!=null&&K.closest("[data-iwg-footer]")),Re=!!(K!=null&&K.closest("[data-iwg-title-container]")),_e=!!(K!=null&&K.closest("[data-iwg-close]"));if(!re&&!Ne&&!L&&!Re||_e){w(!0,Y.clientX,Y.clientY);return}w(!1)}e.innerHTML="";for(let Y=0;Y<o.imageCount;Y++){const K=Y/o.imageCount*Math.PI*2,re=o.radius*Math.cos(K),Ne=o.radius*Math.sin(K),L=Y%dc.length,Re=document.createElement("div");Re.className="card",Re.dataset.index=String(Y),Re.dataset.title=dc[L].title;const _e=document.createElement("img");_e.src=dc[L].img,_e.alt=dc[L].title,Re.appendChild(_e),z.set(Re,{x:re,y:Ne,rotation:K*180/Math.PI+90,transformPerspective:800,transformOrigin:"center center"}),e.appendChild(Re),a.push(Re),c.push({currentRotation:0,targetRotation:0,currentX:0,targetX:0,currentY:0,targetY:0,currentScale:1,targetScale:1,angle:K})}function H(){c.forEach(Y=>{Y.currentRotation=0,Y.targetRotation=0,Y.currentScale=1,Y.targetScale=1,Y.currentX=0,Y.targetX=0,Y.currentY=0,Y.targetY=0})}function F(Y){const K=c[Y].angle;let Ne=Math.PI*3/2-K;return Ne>Math.PI?Ne-=Math.PI*2:Ne<-Math.PI&&(Ne+=Math.PI*2),Ne*180/Math.PI+360}function N(Y){const K=document.createElement("p");return K.textContent=Y,n.appendChild(K),l=K,K}function k(Y,K=1,re=0){var me;if(!a[Y])return;const Ne=((me=a[Y])==null?void 0:me.dataset.title)??"",L=K>0?"125%":"-125%",Re=K>0?"-125%":"125%";if(!l){const V=N(Ne),Ke=y_(V);z.set(Ke,{y:L}),z.to(Ke,{y:"0%",duration:.75,delay:re,stagger:.08,ease:"power4.out"});return}if(f){d=Y,g=K;return}f=!0;const _e=l.querySelectorAll(".word");z.to(_e,{y:Re,duration:.45,stagger:.04,ease:"power3.in",onComplete:()=>{l==null||l.remove(),l=null;const V=N(Ne),Ke=y_(V);z.set(Ke,{y:L}),z.to(Ke,{y:"0%",duration:.6,delay:re,stagger:.06,ease:"power4.out",onComplete:()=>{if(f=!1,d!==null&&d!==Y&&u){const we=d,Ge=g;d=null,k(we,Ge,0)}else d=null}})}})}function B(Y){if(!u||h||_)return;_=!0;const K=360/o.imageCount;y+=Y,m=((M+y)%o.imageCount+o.imageCount)%o.imageCount,p+=Y*K,T+=1,T>=o.imageCount?(P(1),b&&window.clearTimeout(b),b=window.setTimeout(()=>{T=0,P(0)},180)):P(T/o.imageCount),z.to(e,{rotation:p,duration:.9,ease:"power3.inOut",overwrite:!0,onComplete:()=>{_=!1}}),k(m,Y,0)}function Q(Y){u=!0,h=!0,r.classList.add("is-preview-active"),d=null,v=0,T=0,b&&(window.clearTimeout(b),b=null),P(0),m=Y,M=Y,y=0,p=F(Y),H(),z.to(e,{onStart:()=>{a.forEach((K,re)=>{z.to(K,{x:o.radius*Math.cos(c[re].angle),y:o.radius*Math.sin(c[re].angle),rotationY:0,scale:1,duration:1.25,ease:"power4.out"})})},scale:5,y:1300,rotation:p,duration:2,ease:"power4.inOut",onComplete:()=>{h=!1}}),z.to(x,{currentX:0,currentY:0,currentZ:0,duration:.5,ease:"power2.out",onUpdate:()=>{z.set(t,{rotateX:x.currentX,rotateY:x.currentY,rotation:x.currentZ,transformOrigin:"center center"})}}),k(Y,1,1.25)}function I(){if(!h){if(h=!0,f=!1,d=null,l&&z.killTweensOf(l.querySelectorAll(".word")),l){const Y=l.querySelectorAll(".word");z.to(Y,{y:"-125%",duration:.75,delay:.5,stagger:.1,ease:"power4.out",onComplete:()=>{l==null||l.remove(),l=null}})}z.to(e,{scale:x_(window.innerWidth),y:0,x:0,rotation:0,duration:2.5,ease:"power4.inOut",onComplete:()=>{u=!1,h=!1,f=!1,_=!1,y=0,v=0,T=0,b&&(window.clearTimeout(b),b=null),P(0),r.classList.remove("is-preview-active"),w(!1),Object.assign(x,{targetX:0,targetY:0,targetZ:0,currentX:0,currentY:0,currentZ:0})}})}}const se=()=>{o.isMobile=window.innerWidth<1e3,z.set(e,{scale:x_(window.innerWidth)}),u||(Object.assign(x,{targetX:0,targetY:0,targetZ:0,currentX:0,currentY:0,currentZ:0}),H())},Me=Y=>{const K=Y.target instanceof Element?Y.target:null,re=Y.target instanceof Element?Y.target.closest(".card"):null;if(re&&r.contains(re)&&!u&&!h){Q(Number(re.dataset.index)),Y.stopPropagation();return}if(!u||h||!K||!r.contains(K))return;!K.closest(".card, [data-iwg-nav], [data-iwg-footer], [data-iwg-title-container], [data-iwg-close]")&&I()},Fe=Y=>{Y.stopPropagation(),u&&!h&&I()},le=Y=>{Y.key==="Escape"&&u&&!h&&I()},pe=Y=>{if(u){U(Y);return}if(h||o.isMobile)return;const K=window.innerWidth/2,re=window.innerHeight/2,Ne=(Y.clientX-K)/K,L=(Y.clientY-re)/re;x.targetY=Ne*15,x.targetX=-L*15,x.targetZ=(Ne+L)*5,a.forEach((Re,_e)=>{const me=Re.getBoundingClientRect(),V=Y.clientX-(me.left+me.width/2),Ke=Y.clientY-(me.top+me.height/2),we=Math.sqrt(V*V+Ke*Ke);if(we<o.sensitivity){const Ge=Math.max(0,1-we/o.effectFalloff),Qe=c[_e].angle,mt=o.cardMoveAmount*Ge;c[_e].targetRotation=180*Ge,c[_e].targetScale=1+.3*Ge,c[_e].targetX=mt*Math.cos(Qe),c[_e].targetY=mt*Math.sin(Qe)}else c[_e].targetRotation=0,c[_e].targetScale=1,c[_e].targetX=0,c[_e].targetY=0})},$=Y=>{(Y.relatedTarget===null||Y.relatedTarget.nodeName==="HTML")&&!u&&!h&&(H(),x.targetX=0,x.targetY=0,x.targetZ=0),u&&(Y.relatedTarget===null||Y.relatedTarget.nodeName==="HTML")&&w(!1)},j=Y=>{if(!u||(Y.preventDefault(),h||_)||(v+=mw(Y),Math.abs(v)<50))return;const re=v>0?1:-1;v=0,B(re)};window.addEventListener("resize",se),document.addEventListener("click",Me),document.addEventListener("keydown",le),document.addEventListener("mousemove",pe),document.addEventListener("mouseout",$),r.addEventListener("wheel",j,{passive:!1}),i==null||i.addEventListener("click",Fe),z.set(i,{x:-9999,y:-9999}),s&&z.set(s,{transformOrigin:"left center",scaleX:0}),P(0),se();const oe=()=>{C||(!u&&!h&&(x.currentX+=(x.targetX-x.currentX)*o.lerpFactor,x.currentY+=(x.targetY-x.currentY)*o.lerpFactor,x.currentZ+=(x.targetZ-x.currentZ)*o.lerpFactor,z.set(t,{rotateX:x.currentX,rotateY:x.currentY,rotation:x.currentZ,transformOrigin:"center center"}),a.forEach((Y,K)=>{const re=c[K];re.currentRotation+=(re.targetRotation-re.currentRotation)*o.lerpFactor,re.currentScale+=(re.targetScale-re.currentScale)*o.lerpFactor,re.currentX+=(re.targetX-re.currentX)*o.lerpFactor,re.currentY+=(re.targetY-re.currentY)*o.lerpFactor;const Ne=o.radius*Math.cos(re.angle),L=o.radius*Math.sin(re.angle);z.set(Y,{x:Ne+re.currentX,y:L+re.currentY,rotationY:re.currentRotation,scale:re.currentScale,rotation:re.angle*180/Math.PI+90,transformOrigin:"center center",transformPerspective:1e3})})),E=window.requestAnimationFrame(oe))};oe(),r._inkwellImageGalleryCleanup=()=>{C=!0,E&&window.cancelAnimationFrame(E),window.removeEventListener("resize",se),document.removeEventListener("click",Me),document.removeEventListener("keydown",le),document.removeEventListener("mousemove",pe),document.removeEventListener("mouseout",$),r.removeEventListener("wheel",j),i==null||i.removeEventListener("click",Fe),b&&(window.clearTimeout(b),b=null),z.killTweensOf(e),z.killTweensOf(a),z.killTweensOf(x),z.killTweensOf(i),z.killTweensOf(s)}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="inkwell-image-gallery"]').forEach(e=>S_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);const ji=r=>r*r*(3-2*r);function M_(r){r._inversaScrollAnimationCleanup&&r._inversaScrollAnimationCleanup();const e=r.querySelector("[data-inversa-hero]"),t=r.querySelector("[data-inversa-content]"),n=r.querySelector("[data-inversa-img]"),i=r.querySelector("[data-inversa-img] img"),s=r.querySelector("[data-inversa-mask]"),o=r.querySelector("[data-inversa-grid]"),a=r.querySelector("[data-inversa-marker='1']"),c=r.querySelector("[data-inversa-marker='2']"),l=r.querySelector("[data-inversa-progress]");if(!e||!t||!n||!i||!s||!o||!a||!c||!l)return;const u=r.getAttribute("data-inversa-lenis")==="true",h=Number(r.getAttribute("data-inversa-scrub"))||1,f=Number(r.getAttribute("data-inversa-pin-multiplier"))||4;let d=null,g=null,_=null;const m=()=>{const v=window.innerHeight,T=Math.max(0,t.offsetHeight-v),b=Math.max(0,n.offsetHeight-v);return{heroContentMoveDistance:T,heroImgMoveDistance:b}};let p=m();const M=()=>{d==null||d.kill(),p=m(),d=Se.create({trigger:e,start:"top top",end:`+=${window.innerHeight*f}px`,pin:!0,pinSpacing:!0,scrub:h,onUpdate:v=>{l.style.setProperty("--inversa-progress",String(v.progress)),z.set(t,{y:-v.progress*p.heroContentMoveDistance,force3D:!0});let T;v.progress<=.45?T=ji(v.progress/.45)*.65:v.progress<=.75?T=.65:T=.65+ji((v.progress-.75)/.25)*.35,z.set(n,{y:T*p.heroImgMoveDistance,force3D:!0});let b,E,C;if(v.progress<=.4)b=2.5,E=1,C=.35;else if(v.progress<=.5){const P=ji((v.progress-.4)/.1);b=2.5-P*1.5,E=1-P,C=.35+P*.35}else if(v.progress<=.75)b=1,E=0,C=.7;else if(v.progress<=.85){const P=ji((v.progress-.75)/.1);b=1+P*1.5,E=P,C=.7-P*.35}else b=2.5,E=1,C=.35;z.set(s,{scale:b,force3D:!0}),z.set(i,{filter:`saturate(${E})`}),n.style.setProperty("--inversa-overlay-opacity",String(C));let S;v.progress<=.475?S=0:v.progress<=.5?S=ji((v.progress-.475)/.025):v.progress<=.75?S=1:v.progress<=.775?S=1-ji((v.progress-.75)/.025):S=0,z.set(o,{opacity:S});let x;v.progress<=.5?x=0:v.progress<=.525?x=ji((v.progress-.5)/.025):v.progress<=.7?x=1:v.progress<=.75?x=1-ji((v.progress-.7)/.05):x=0,z.set(a,{opacity:x});let w;v.progress<=.55?w=0:v.progress<=.575?w=ji((v.progress-.55)/.025):v.progress<=.7?w=1:v.progress<=.75?w=1-ji((v.progress-.7)/.05):w=0,z.set(c,{opacity:w})}})},y=()=>{M(),Se.refresh()};window.addEventListener("resize",y),M(),u&&(g=new pr,g.on("scroll",Se.update),_=v=>{g.raf(v*1e3)},z.ticker.add(_),z.ticker.lagSmoothing(0)),r._inversaScrollAnimationCleanup=()=>{d==null||d.kill(),window.removeEventListener("resize",y),_&&z.ticker.remove(_),g==null||g.destroy()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="inversa-scroll-animation"]').forEach(e=>M_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);const gw=[{title:"Human Form Study",image:"../elementis-scroll/public/img1.jpg"},{title:"Interior Light",image:"../elementis-scroll/public/img2.jpg"},{title:"Project 21",image:"../elementis-scroll/public/img3.jpg"},{title:"Shadow Portraits",image:"../elementis-scroll/public/img4.jpg"},{title:"Everyday Objects",image:"../elementis-scroll/public/img5.jpg"},{title:"Unit 07 Care",image:"../fractal-glass-effect/public/hero.jpg"},{title:"Motion Practice",image:"../fractal-glass-effect/public/hero2.jpg"},{title:"Noonlight Series",image:"../fractal-glass-effect/public/hero3.jpg"},{title:"Material Stillness",image:"../fractal-glass-effect/public/hero4.jpg"},{title:"Quiet Walk",image:"../elementis-scroll/public/img1.jpg"}];function _w(r){const e=r.getAttribute("data-psa-slides");if(e)try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length)return t}catch(t){console.warn("[prototypestudio-scroll-animation] Invalid slides JSON",t)}return gw}function T_(r){r._prototypestudioScrollAnimationCleanup&&r._prototypestudioScrollAnimationCleanup();const e=r.querySelector("[data-psa-spotlight]"),t=r.querySelector("[data-psa-index]"),n=r.querySelector("[data-psa-images]"),i=r.querySelector("[data-psa-names]");if(!e||!t||!n||!i)return;const s=_w(r);if(!s.length)return;const o=r.getAttribute("data-psa-lenis")==="true",a=Number(r.getAttribute("data-psa-scrub"))||1,c=Number(r.getAttribute("data-psa-pin-multiplier"))||5;n.innerHTML=s.map(y=>`<div class="psa-project-img"><img src="${$t(y.image)}" alt="${$t(y.title??"")}" /></div>`).join(""),i.innerHTML=s.map(y=>`<p>${$t(y.title??"")}</p>`).join("");const l=Array.from(n.querySelectorAll(".psa-project-img")),u=Array.from(i.querySelectorAll("p")),h=u.length;if(!h)return;let f=null,d=null,g=null,_=null;function m(){const y=e.offsetHeight,v=parseFloat(getComputedStyle(e).paddingTop)||0,T=t.offsetHeight,b=i.offsetHeight,E=n.offsetHeight;return{moveDistanceIndex:y-v*2-T,moveDistanceNames:y-v*2-b,moveDistanceImages:window.innerHeight-E,imgActivationThreshold:window.innerHeight/2}}function p(){_=m(),g==null||g.kill(),g=Se.create({trigger:e,start:"top top",end:`+=${window.innerHeight*c}px`,pin:!0,pinSpacing:!0,scrub:a,onUpdate:y=>{const v=y.progress,T=Math.min(Math.floor(v*h)+1,h);t.textContent=`${String(T).padStart(2,"0")}/${String(h).padStart(2,"0")}`,z.set(t,{y:v*_.moveDistanceIndex}),z.set(n,{y:v*_.moveDistanceImages}),l.forEach(b=>{const E=b.getBoundingClientRect(),C=E.top<=_.imgActivationThreshold&&E.bottom>=_.imgActivationThreshold;z.set(b,{opacity:C?1:.5})}),u.forEach((b,E)=>{const C=E/h,S=(E+1)/h,x=Math.max(0,Math.min(1,(v-C)/(S-C)));z.set(b,{y:-x*_.moveDistanceNames}),z.set(b,{color:x>0&&x<1?"#fff":"#4a4a4a"})})}})}const M=()=>{p(),Se.refresh()};p(),window.addEventListener("resize",M),o&&(f=new pr,f.on("scroll",Se.update),d=y=>f.raf(y*1e3),z.ticker.add(d),z.ticker.lagSmoothing(0)),r._prototypestudioScrollAnimationCleanup=()=>{g==null||g.kill(),window.removeEventListener("resize",M),d&&z.ticker.remove(d),f==null||f.destroy()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="prototypestudio-scroll-animation"]').forEach(e=>T_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);const pc=["../elementis-scroll/public/img1.jpg","../elementis-scroll/public/img2.jpg","../elementis-scroll/public/img3.jpg","../elementis-scroll/public/img4.jpg","../elementis-scroll/public/img5.jpg","../fractal-glass-effect/public/hero.jpg","../fractal-glass-effect/public/hero2.jpg","../fractal-glass-effect/public/hero3.jpg","../fractal-glass-effect/public/hero4.jpg"],E_=["Order is temporary while you're passing through","Memories shuffle like cards in an endless deck","Each moment scatters as another takes its place","The fragments float before settling once more"],b_={cardCount:15,cardWidth:250,cardHeight:300,animationDuration:.75,animationOverlap:.5,headingFadeDuration:.5,pinMultiplier:6};function vw(r){const e=r.getAttribute("data-poly-headings");if(!e)return E_;try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length)return t}catch(t){console.warn("[poly-app-photo-dump] Invalid headings JSON:",t)}return E_}function xw(r,e,t){const n=r.getAttribute("data-poly-image-sets");if(n)try{const i=JSON.parse(n);if(Array.isArray(i)&&i.length)return i.map(s=>Array.isArray(s)?s.slice(0,t):[])}catch(i){console.warn("[poly-app-photo-dump] Invalid image sets JSON:",i)}return Array.from({length:e},(i,s)=>Array.from({length:t},(o,a)=>pc[(s*t+a)%pc.length]))}function w_(r){r._polyAppPhotoDumpCleanup&&r._polyAppPhotoDumpCleanup();const e=r.querySelector("[data-poly-spotlight]"),t=r.querySelector("[data-poly-gallery-heading]");if(!e||!t)return;const n=r.getAttribute("data-poly-lenis")==="true",i=Number(r.getAttribute("data-poly-scrub"))||1,s=Number(r.getAttribute("data-poly-pin-multiplier"))||b_.pinMultiplier,o={...b_,pinMultiplier:s},a=vw(r),c=xw(r,a.length,o.cardCount);let l={centerX:window.innerWidth/2,centerY:window.innerHeight/2,rangeMin:Math.min(window.innerWidth,window.innerHeight)*.35,rangeMax:Math.min(window.innerWidth,window.innerHeight)*.7},u={activeCards:[],currentSection:0,isAnimating:!1},h=null,f=null,d=null;function g(){l.centerX=window.innerWidth/2,l.centerY=window.innerHeight/2,l.rangeMin=Math.min(window.innerWidth,window.innerHeight)*.35,l.rangeMax=Math.min(window.innerWidth,window.innerHeight)*.7}function _(E,C){const S={left:E,right:window.innerWidth-E,top:C,bottom:window.innerHeight-C},x=Math.min(...Object.values(S)),w=o.cardWidth/2,P=o.cardHeight/2,U=()=>(Math.random()-.5)*400;return x===S.left?{x:-300-Math.random()*200,y:C-P+U()}:x===S.right?{x:window.innerWidth+50+Math.random()*200,y:C-P+U()}:x===S.top?{x:E-w+U(),y:-400-Math.random()*200}:{x:E-w+U(),y:window.innerHeight+50+Math.random()*200}}function m(E){const C=[],S=c[E]??[];for(let x=0;x<o.cardCount;x++){const w=document.createElement("div");w.className="poly-card";const P=document.createElement("img"),U=S[x%S.length]??pc[x%pc.length];P.src=U,P.alt="",w.appendChild(P);const H=Math.random()*Math.PI*2,F=l.rangeMin+Math.random()*(l.rangeMax-l.rangeMin),N=l.centerX+Math.cos(H)*F,k=l.centerY+Math.sin(H)*F;z.set(w,{left:N-o.cardWidth/2,top:k-o.cardHeight/2,rotation:Math.random()*50-25}),e.appendChild(w),C.push({element:w,centerX:N,centerY:k})}return C}function p(E,C){z.to(t,{opacity:0,duration:o.headingFadeDuration,ease:"power2.inOut",onComplete:()=>{t.textContent=E,z.to(t,{opacity:1,duration:o.headingFadeDuration,ease:"power2.inOut",onComplete:C})}})}function M(E,C,S){const x=z.timeline({onComplete:S});E.forEach(({element:w,centerX:P,centerY:U})=>{const H=_(P,U);x.to(w,{left:H.x,top:H.y,rotation:Math.random()*180-90,duration:o.animationDuration,ease:"power2.in",onComplete:()=>w.remove()},0)}),C.forEach(({element:w,centerX:P,centerY:U})=>{const H=_(P,U);z.set(w,{left:H.x,top:H.y,rotation:Math.random()*180-90}),x.to(w,{left:P-o.cardWidth/2,top:U-o.cardHeight/2,rotation:Math.random()*50-25,duration:o.animationDuration,ease:"power2.out"},o.animationOverlap)})}function y(E){const C=1/a.length;return Math.min(Math.floor(E/C),a.length-1)}function v(E){if(u.isAnimating||E===u.currentSection)return;u.isAnimating=!0;const C=m(E);let S=!1,x=!1;const w=()=>{!S||!x||(u.activeCards=C,u.currentSection=E,u.isAnimating=!1)};M(u.activeCards,C,()=>{S=!0,w()}),p(a[E],()=>{x=!0,w()})}function T(){u.activeCards.forEach(({element:E})=>E.remove()),g(),u.activeCards=m(u.currentSection)}u.activeCards=m(0),t.textContent=a[0],z.set(t,{opacity:1}),h=Se.create({trigger:e,start:"top top",end:`+=${window.innerHeight*o.pinMultiplier}`,pin:!0,pinSpacing:!0,scrub:i,onUpdate:({progress:E})=>{const C=y(E);v(C)}});const b=()=>{T(),Se.refresh()};window.addEventListener("resize",b),n&&(f=new pr,f.on("scroll",Se.update),d=E=>f.raf(E*1e3),z.ticker.add(d),z.ticker.lagSmoothing(0)),r._polyAppPhotoDumpCleanup=()=>{h==null||h.kill(),window.removeEventListener("resize",b),u.activeCards.forEach(({element:E})=>E.remove()),z.killTweensOf(t),d&&z.ticker.remove(d),f==null||f.destroy()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="poly-app-photo-dump"]').forEach(e=>w_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}z.registerPlugin(Se);const Hn=r=>r*r*(3-2*r);function A_(r){r._eduardbodakScrollAnimationCleanup&&r._eduardbodakScrollAnimationCleanup();const e=r.querySelector("[data-ebsa-hero]"),t=r.querySelector("[data-ebsa-services]"),n=r.querySelector("[data-ebsa-hero-cards]"),i=r.querySelector("[data-ebsa-services-header]"),s=r.querySelector("[data-ebsa-cards-layer]");if(!e||!t||!n||!i||!s)return;const o=r.getAttribute("data-ebsa-lenis")==="true",a=[];let c=null,l=null;if(o&&(c=new pr,c.on("scroll",Se.update),l=u=>c.raf(u*1e3),z.ticker.add(l),z.ticker.lagSmoothing(0)),window.innerWidth>1e3){const u=["#hero-card-1","#hero-card-2","#hero-card-3"],h=["#card-1","#card-2","#card-3"];a.push(Se.create({trigger:e,start:"top top",end:"75% top",scrub:1,onUpdate:f=>{const d=f.progress,g=z.utils.interpolate(1,.5,Hn(d));z.set(n,{opacity:g}),u.forEach((_,m)=>{const p=r.querySelector(_);if(!p)return;const M=m*.9,y=z.utils.clamp(0,1,(d-M*.1)/(1-M*.1)),v=z.utils.interpolate("0%","350%",Hn(y)),T=z.utils.interpolate(1,.75,Hn(y));let b="0%",E=0;m===0?(b=z.utils.interpolate("0%","90%",Hn(y)),E=z.utils.interpolate(0,-15,Hn(y))):m===2&&(b=z.utils.interpolate("0%","-90%",Hn(y)),E=z.utils.interpolate(0,15,Hn(y))),z.set(p,{y:v,x:b,rotation:E,scale:T})})}})),a.push(Se.create({trigger:t,start:"top top",end:`+=${window.innerHeight*4}px`,pin:t,pinSpacing:!0})),a.push(Se.create({trigger:t,start:"top top",end:`+=${window.innerHeight*4}px`,onLeave:()=>{const f=t.getBoundingClientRect(),d=window.pageYOffset+f.top;z.set(s,{position:"absolute",top:d,left:0,width:"100vw",height:"100vh"})},onEnterBack:()=>{z.set(s,{position:"fixed",top:0,left:0,width:"100vw",height:"100vh"})}})),a.push(Se.create({trigger:t,start:"top bottom",end:`+=${window.innerHeight*4}`,scrub:1,onUpdate:f=>{const d=f.progress,g=z.utils.clamp(0,1,d/.9),_=z.utils.interpolate("400%","0%",Hn(g));z.set(i,{y:_}),h.forEach((m,p)=>{const M=r.querySelector(m);if(!M)return;const y=M.querySelector(".flip-card-inner"),v=p*.5,T=z.utils.clamp(0,1,(d-v*.1)/(.9-v*.1));let b;T<.4?b=z.utils.interpolate("-100%","50%",Hn(T/.4)):T<.6?b=z.utils.interpolate("50%","0%",Hn((T-.4)/.2)):b="0%";let E;T<.4?E=z.utils.interpolate(.25,.75,Hn(T/.4)):T<.6?E=z.utils.interpolate(.75,1,Hn((T-.4)/.2)):E=1;const C=T<.2?Hn(T/.2):1;let S,x,w;if(T<.6)S=p===0?"100%":p===1?"0%":"-100%",x=p===0?-5:p===1?0:5,w=0;else if(T<1){const P=Hn((T-.6)/.4);S=z.utils.interpolate(p===0?"100%":p===1?"0%":"-100%","0%",P),x=z.utils.interpolate(p===0?-5:p===1?0:5,0,P),w=P*180}else S="0%",x=0,w=180;z.set(M,{opacity:C,y:b,x:S,rotate:x,scale:E}),y&&z.set(y,{rotationY:w})})}}))}r._eduardbodakScrollAnimationCleanup=()=>{a.forEach(u=>u.kill()),l&&z.ticker.remove(l),c==null||c.destroy()}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="eduardbodak-scroll-animation"]').forEach(e=>A_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}const Pf=[{img:"../elementis-scroll/public/img1.jpg",icon:"◎",link:"#",parallaxSpeed:.065},{img:"../elementis-scroll/public/img2.jpg",icon:"◉",link:"#",parallaxSpeed:.05},{img:"../elementis-scroll/public/img3.jpg",icon:"◍",link:"#",parallaxSpeed:.08},{img:"../elementis-scroll/public/img4.jpg",icon:"◌",link:"#",parallaxSpeed:.1},{img:"../elementis-scroll/public/img5.jpg",icon:"◈",link:"#",parallaxSpeed:.07},{img:"../fractal-glass-effect/public/hero.jpg",icon:"◇",link:"#",parallaxSpeed:.085},{img:"../fractal-glass-effect/public/hero2.jpg",icon:"◆",link:"#",parallaxSpeed:.06},{img:"../fractal-glass-effect/public/hero3.jpg",icon:"✦",link:"#",parallaxSpeed:.04},{img:"../fractal-glass-effect/public/hero4.jpg",icon:"✧",link:"#",parallaxSpeed:.1},{img:"../elementis-scroll/public/img1.jpg",icon:"✶",link:"#",parallaxSpeed:.065}],R_=[{top:"-5%",left:"5%"},{top:"40%",left:"-5%"},{top:"25%",left:"20%"},{top:"60%",left:"40%"},{top:"70%",left:"10%"},{top:"-10%",left:"65%"},{top:"10%",left:"85%"},{top:"40%",left:"60%"},{top:"80%",left:"70%"},{top:"50%",left:"95%"}];function yw(r){const e=r.getAttribute("data-cosmos-items");if(!e)return Pf;try{const t=JSON.parse(e);return Array.isArray(t)&&t.length?t:Pf}catch(t){return console.warn("[cosmos-parallax-effect-mousemove] Invalid items JSON",t),Pf}}function C_(r){r._cosmosParallaxCleanup&&r._cosmosParallaxCleanup();const e=r.querySelector("[data-cosmos-gallery]");if(!e)return;const t=yw(r),n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.innerHTML="",t.forEach((o,a)=>{const c=document.createElement("div");c.classList.add("cosmos-item");const l=R_[a%R_.length];c.style.top=l.top,c.style.left=l.left;const u=document.createElement("img");u.src=o.img,u.alt="",c.appendChild(u);const h=document.createElement("div");h.classList.add("cosmos-link");const f=o.link||"#";h.innerHTML=`<a href="${$t(f)}">${$t(o.icon||"✶")}</a>`,c.appendChild(h),e.appendChild(c)});const i=Array.from(e.querySelectorAll(".cosmos-item")),s=o=>{n||i.forEach((a,c)=>{var f;const l=Number(((f=t[c])==null?void 0:f.parallaxSpeed)??.05),u=(o.clientX-window.innerWidth/2)*l,h=(o.clientY-window.innerHeight/2)*l;z.to(a,{x:u,y:h,duration:.75,ease:"power2.out",overwrite:!0})})};document.addEventListener("mousemove",s),r._cosmosParallaxCleanup=()=>{document.removeEventListener("mousemove",s),i.forEach(o=>z.killTweensOf(o))}}if(typeof window<"u"){const r=()=>{document.querySelectorAll('[data-component="cosmos-parallax-effect-mousemove"]').forEach(e=>C_(e))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r()}const Lf=Array.from({length:20},(r,e)=>`https://picsum.photos/seed/247artists-trail-${e+1}/420/420`);function Sw(r){if(!r)return Lf;try{const e=JSON.parse(r);return!Array.isArray(e)||e.length===0?Lf:e.filter(t=>typeof t=="string"&&t.trim().length>0)}catch{return Lf}}function P_(r,e,t){return(1-t)*r+t*e}function Mw(r,e,t,n){return Math.hypot(t-r,n-e)}function Tw(r){r._artists247TrailCleanup&&r._artists247TrailCleanup();const e=r.querySelector("[data-247-trail-container]")||r.querySelector(".trail-container");if(!e)return;const t={imageLifespan:Number(r.dataset.trailImageLifespan??1e3),mouseThreshold:Number(r.dataset.trailMouseThreshold??150),inDuration:Number(r.dataset.trailInDuration??750),outDuration:Number(r.dataset.trailOutDuration??1e3),staggerIn:Number(r.dataset.trailStaggerIn??100),staggerOut:Number(r.dataset.trailStaggerOut??25),slideDuration:Number(r.dataset.trailSlideDuration??1e3),slideEasing:r.dataset.trailSlideEasing??"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easing:r.dataset.trailEasing??"cubic-bezier(0.87, 0, 0.13, 1)",imageSize:Number(r.dataset.trailImageSize??175)};r.style.setProperty("--trail-image-size",`${t.imageSize}px`);const n=Sw(r.dataset.trailImages),i={x:0,y:0},s={x:0,y:0},o={x:0,y:0},a=[],c=new Set;let l=null,u=0,h=window.innerWidth>1e3;const f=(T,b)=>{const E=window.setTimeout(()=>{c.delete(E),T()},b);c.add(E)},d=(T,b)=>{const E=e.getBoundingClientRect();return T>=E.left&&T<=E.right&&b>=E.top&&b<=E.bottom},g=()=>{const T=document.createElement("div");T.className="trail-img";const b=n[u%n.length];u+=1;const E=e.getBoundingClientRect(),C=t.imageSize/2,S=o.x-E.left-C,x=o.y-E.top-C,w=i.x-E.left-C,P=i.y-E.top-C;T.style.left=`${S}px`,T.style.top=`${x}px`,T.style.transition=`left ${t.slideDuration}ms ${t.slideEasing}, top ${t.slideDuration}ms ${t.slideEasing}`;const U=[],H=[];for(let F=0;F<10;F+=1){const N=document.createElement("div");N.className="mask-layer";const k=document.createElement("div");k.className="image-layer",k.style.backgroundImage=`url("${b}")`;const B=F*10,Q=(F+1)*10;N.style.clipPath=`polygon(50% ${B}%, 50% ${B}%, 50% ${Q}%, 50% ${Q}%)`,N.style.transition=`clip-path ${t.inDuration}ms ${t.easing}`,N.style.transform="translateZ(0)",N.style.backfaceVisibility="hidden",N.appendChild(k),T.appendChild(N),U.push(N),H.push(k)}e.appendChild(T),requestAnimationFrame(()=>{T.style.left=`${w}px`,T.style.top=`${P}px`,U.forEach((F,N)=>{const k=N*10,B=(N+1)*10,I=Math.abs(N-4.5)*t.staggerIn;f(()=>{F.style.clipPath=`polygon(0% ${k}%, 100% ${k}%, 100% ${B}%, 0% ${B}%)`},I)})}),a.push({element:T,maskLayers:U,imageLayers:H,removeTime:Date.now()+t.imageLifespan})},_=()=>{const T=Date.now();if(a.length===0)return;const b=a[0];if(T<b.removeTime)return;const E=a.shift();E&&(E.maskLayers.forEach((C,S)=>{const x=S*10,w=(S+1)*10,U=(4.5-Math.abs(S-4.5))*t.staggerOut;C.style.transition=`clip-path ${t.outDuration}ms ${t.easing}`,f(()=>{C.style.clipPath=`polygon(50% ${x}%, 50% ${x}%, 50% ${w}%, 50% ${w}%)`},U)}),E.imageLayers.forEach(C=>{C.style.transition=`opacity ${t.outDuration}ms ${t.easing}`,C.style.opacity="0.25"}),f(()=>{E.element.remove()},t.outDuration+112))},m=()=>{const T=Mw(i.x,i.y,s.x,s.y);o.x=P_(o.x||i.x,i.x,.1),o.y=P_(o.y||i.y,i.y,.1),T>t.mouseThreshold&&d(i.x,i.y)&&(g(),s.x=i.x,s.y=i.y),_(),l=requestAnimationFrame(m)},p=T=>{i.x=T.clientX,i.y=T.clientY},M=()=>{!h||l!==null||(document.addEventListener("mousemove",p),l=requestAnimationFrame(m))},y=()=>{l!==null&&(cancelAnimationFrame(l),l=null),document.removeEventListener("mousemove",p),a.forEach(T=>T.element.remove()),a.length=0},v=()=>{const T=h;h=window.innerWidth>1e3,h&&!T&&M(),!h&&T&&y()};window.addEventListener("resize",v),h&&M(),r._artists247TrailCleanup=()=>{y(),window.removeEventListener("resize",v),c.forEach(T=>window.clearTimeout(T)),c.clear()}}/*!
 * paths 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ew=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,bw=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,ww=Math.PI/180,mc=Math.sin,gc=Math.cos,Ua=Math.abs,Oa=Math.sqrt,Aw=function(e){return typeof e=="number"},L_=1e5,Gr=function(e){return Math.round(e*L_)/L_||0},D_=function(e){return e.closed=Math.abs(e[0]-e[e.length-2])<.001&&Math.abs(e[1]-e[e.length-1])<.001};function Rw(r,e,t,n,i,s,o){for(var a=r.length,c,l,u,h,f;--a>-1;)for(c=r[a],l=c.length,u=0;u<l;u+=2)h=c[u],f=c[u+1],c[u]=h*e+f*n+s,c[u+1]=h*t+f*i+o;return r._dirty=1,r}function Cw(r,e,t,n,i,s,o,a,c){if(!(r===a&&e===c)){t=Ua(t),n=Ua(n);var l=i%360*ww,u=gc(l),h=mc(l),f=Math.PI,d=f*2,g=(r-a)/2,_=(e-c)/2,m=u*g+h*_,p=-h*g+u*_,M=m*m,y=p*p,v=M/(t*t)+y/(n*n);v>1&&(t=Oa(v)*t,n=Oa(v)*n);var T=t*t,b=n*n,E=(T*b-T*y-b*M)/(T*y+b*M);E<0&&(E=0);var C=(s===o?-1:1)*Oa(E),S=C*(t*p/n),x=C*-(n*m/t),w=(r+a)/2,P=(e+c)/2,U=w+(u*S-h*x),H=P+(h*S+u*x),F=(m-S)/t,N=(p-x)/n,k=(-m-S)/t,B=(-p-x)/n,Q=F*F+N*N,I=(N<0?-1:1)*Math.acos(F/Oa(Q)),se=(F*B-N*k<0?-1:1)*Math.acos((F*k+N*B)/Oa(Q*(k*k+B*B)));isNaN(se)&&(se=f),!o&&se>0?se-=d:o&&se<0&&(se+=d),I%=d,se%=d;var Me=Math.ceil(Ua(se)/(d/4)),Fe=[],le=se/Me,pe=4/3*mc(le/2)/(1+gc(le/2)),$=u*t,j=h*t,oe=h*-n,Y=u*n,K;for(K=0;K<Me;K++)i=I+K*le,m=gc(i),p=mc(i),F=gc(i+=le),N=mc(i),Fe.push(m-pe*p,p+pe*m,F+pe*N,N-pe*F,F,N);for(K=0;K<Fe.length;K+=2)m=Fe[K],p=Fe[K+1],Fe[K]=m*$+p*oe+U,Fe[K+1]=m*j+p*Y+H;return Fe[K-2]=a,Fe[K-1]=c,Fe}}function Pw(r){var e=(r+"").replace(bw,function(S){var x=+S;return x<1e-4&&x>-1e-4?0:x}).match(Ew)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,c="ERROR: malformed path: "+r,l,u,h,f,d,g,_,m,p,M,y,v,T,b,E,C=function(x,w,P,U){M=(P-x)/3,y=(U-w)/3,_.push(x+M,w+y,P-M,U-y,P,U)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(c),t;for(l=0;l<o;l++)if(T=d,isNaN(e[l])?(d=e[l].toUpperCase(),g=d!==e[l]):l--,h=+e[l+1],f=+e[l+2],g&&(h+=n,f+=i),l||(m=h,p=f),d==="M")_&&(_.length<8?t.length-=1:a+=_.length,D_(_)),n=m=h,i=p=f,_=[h,f],t.push(_),l+=2,d="L";else if(d==="C")_||(_=[0,0]),g||(n=i=0),_.push(h,f,n+e[l+3]*1,i+e[l+4]*1,n+=e[l+5]*1,i+=e[l+6]*1),l+=6;else if(d==="S")M=n,y=i,(T==="C"||T==="S")&&(M+=n-_[_.length-4],y+=i-_[_.length-3]),g||(n=i=0),_.push(M,y,h,f,n+=e[l+3]*1,i+=e[l+4]*1),l+=4;else if(d==="Q")M=n+(h-n)*s,y=i+(f-i)*s,g||(n=i=0),n+=e[l+3]*1,i+=e[l+4]*1,_.push(M,y,n+(h-n)*s,i+(f-i)*s,n,i),l+=4;else if(d==="T")M=n-_[_.length-4],y=i-_[_.length-3],_.push(n+M,i+y,h+(n+M*1.5-h)*s,f+(i+y*1.5-f)*s,n=h,i=f),l+=2;else if(d==="H")C(n,i,n=h,i),l+=1;else if(d==="V")C(n,i,n,i=h+(g?i-n:0)),l+=1;else if(d==="L"||d==="Z")d==="Z"&&(h=m,f=p,_.closed=!0),(d==="L"||Ua(n-h)>.5||Ua(i-f)>.5)&&(C(n,i,h,f),d==="L"&&(l+=2)),n=h,i=f;else if(d==="A"){if(b=e[l+4],E=e[l+5],M=e[l+6],y=e[l+7],u=7,b.length>1&&(b.length<3?(y=M,M=E,u--):(y=E,M=b.substr(2),u-=2),E=b.charAt(1),b=b.charAt(0)),v=Cw(n,i,+e[l+1],+e[l+2],+e[l+3],+b,+E,(g?n:0)+M*1,(g?i:0)+y*1),l+=u,v)for(u=0;u<v.length;u++)_.push(v[u]);n=_[_.length-2],i=_[_.length-1]}else console.log(c);return l=_.length,l<6?(t.pop(),l=0):D_(_),t.totalPoints=a+l,t}function Lw(r){Aw(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+Gr(o[0])+","+Gr(o[1])+" C",n=o.length,s=2;s<n;s++)e+=Gr(o[s++])+","+Gr(o[s++])+" "+Gr(o[s++])+","+Gr(o[s++])+" "+Gr(o[s++])+","+Gr(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vn,I_,N_=function(){return Vn||typeof window<"u"&&(Vn=window.gsap)&&Vn.registerPlugin&&Vn},U_=function(){Vn=N_(),Vn?(Vn.registerEase("_CE",Ao.create),I_=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Dw=1e20,_c=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Iw=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Nw=/[cLlsSaAhHvVtTqQ]/g,Uw=function(e){var t=e.length,n=Dw,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},Ow=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),c=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Uw(e)+s:+e[o-1]+s),l;for(c?c=1/c:c=-a,l=0;l<o;l+=2)e[l]=(+e[l]+i)*a,e[l+1]=(+e[l+1]+s)*c},Fw=function r(e,t,n,i,s,o,a,c,l,u,h){var f=(e+n)/2,d=(t+i)/2,g=(n+s)/2,_=(i+o)/2,m=(s+a)/2,p=(o+c)/2,M=(f+g)/2,y=(d+_)/2,v=(g+m)/2,T=(_+p)/2,b=(M+v)/2,E=(y+T)/2,C=a-e,S=c-t,x=Math.abs((n-a)*S-(i-c)*C),w=Math.abs((s-a)*S-(o-c)*C),P;return u||(u=[{x:e,y:t},{x:a,y:c}],h=1),u.splice(h||u.length-1,0,{x:b,y:E}),(x+w)*(x+w)>l*(C*C+S*S)&&(P=u.length,r(e,t,f,d,M,y,b,E,l,u,h),r(b,E,v,T,m,p,a,c,l,u,h+1+(u.length-P))),u},Ao=function(){function r(t,n,i){I_||U_(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(Iw),o=1,a=[],c=[],l=i.precision||1,u=l<=1,h,f,d,g,_,m,p,M,y;if(this.data=n,(Nw.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=Pw(n)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&Ow(s,i.height,i.originY),this.segment=s,g=2;g<h;g+=6)f={x:+s[g-2],y:+s[g-1]},d={x:+s[g+4],y:+s[g+5]},a.push(f,d),Fw(f.x,f.y,+s[g],+s[g+1],+s[g+2],+s[g+3],d.x,d.y,1/(l*2e5),a,a.length-1);for(h=a.length,g=0;g<h;g++)p=a[g],M=a[g-1]||p,(p.x>M.x||M.y!==p.y&&M.x===p.x||p===M)&&p.x<=1?(M.cx=p.x-M.x,M.cy=p.y-M.y,M.n=p,M.nx=p.x,u&&g>1&&Math.abs(M.cy/M.cx-a[g-2].cy/a[g-2].cx)>2&&(u=0),M.cx<o&&(M.cx?o=M.cx:(M.cx=.001,g===h-1&&(M.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(g--,1),h--);if(h=1/o+1|0,_=1/h,m=0,p=a[0],u){for(g=0;g<h;g++)y=g*_,p.nx<y&&(p=a[++m]),f=p.y+(y-p.x)/p.cx*p.cy,c[g]={x:y,cx:_,y:f,cy:0,nx:9},g&&(c[g-1].cy=f-c[g-1].y);m=a[a.length-1],c[h-1].cy=m.y-f,c[h-1].cx=m.x-c[c.length-1].x}else{for(g=0;g<h;g++)p.nx<g*_&&(p=a[++m]),c[g]=p;m<a.length-1&&(c[g-1]=a[a.length-2])}return this.ease=function(v){var T=c[v*h|0]||c[h-1];return T.nx<v&&(T=T.n),T.y+(v-T.x)/T.cx*T.cy},this.ease.custom=this,this.id&&Vn&&Vn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){Vn=n,U_()},r.get=function(n){return Vn.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,c=(i.y||0)+o,l=Vn.utils.toArray(i.path)[0],u,h,f,d,g,_,m,p,M,y;if(i.invert&&(o=-o,c=0),typeof n=="string"&&(n=Vn.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=Lw(Rw([n.segment.slice(0)],s,0,0,-o,a,c));else{for(u=[a,c],m=Math.max(5,(i.precision||1)*200),d=1/m,m+=2,p=5/m,M=_c(a+d*s),y=_c(c+n(d)*-o),h=(y-c)/(M-a),f=2;f<m;f++)g=_c(a+f*d*s),_=_c(c+n(f*d)*-o),(Math.abs((_-y)/(g-M)-h)>p||f===m-1)&&(u.push(M,y),h=(_-y)/(g-M)),M=g,y=_;u="M"+u.join(",")}return l&&l.setAttribute("d",u),u},r}();Ao.version="3.14.2",Ao.headless=!0,N_()&&Vn.registerPlugin(Ao),z.registerPlugin(Ao),Ao.create("hop","M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1");function Bw(r){r._camilleMormalSliderCleanup&&r._camilleMormalSliderCleanup();const e=r.querySelector("[data-cms-slider]")??r.querySelector(".slider");if(!e)return;const t=e.querySelector("[data-cms-images]")??e.querySelector(".slider-images"),n=e.querySelector("[data-cms-counter]")??e.querySelector(".counter"),i=e.querySelector("[data-cms-titles]")??e.querySelector(".slider-title-wrapper"),s=e.querySelectorAll("[data-cms-indicators] p, .slider-indicators p"),o=e.querySelectorAll("[data-cms-preview] .preview, .slider-preview .preview"),a=e.querySelector("[data-cms-preview]")??e.querySelector(".slider-preview");if(!t||!n||!i||!a)return;const c=o.length;if(c===0)return;const l=Number(r.dataset.cmsAutoplayInterval??5e3);let u=1,h=0,f=null,d=null;o.forEach(S=>{const x=document.createElement("div");x.className="preview-overlay",S.appendChild(x)});const g=e.querySelectorAll(".preview-overlay");function _(S){const x=o[S-1],w=x==null?void 0:x.querySelector("img");return(w==null?void 0:w.src)??(w==null?void 0:w.getAttribute("src"))??""}function m(){const S=-20*(u-1),x=-60*(u-1);z.to(n,{y:S,duration:1,ease:"hop"}),z.to(i,{y:x,duration:1,ease:"hop"})}function p(){o.forEach(w=>w.classList.remove("active")),g.forEach((w,P)=>{z.set(w,{x:0,xPercent:P===u-1?0:100})});const S=o[u-1];S&&S.classList.add("active");const x=g[u-1];x&&l>0&&(d==null||d.kill(),z.set(x,{x:0,xPercent:0}),d=z.to(x,{xPercent:100,duration:l/1e3,ease:"none"}))}function M(){const S=t.querySelectorAll(".img");S.length>c&&S[0].remove()}function y(S){const x=t.querySelectorAll(".img"),w=x[x.length-1];if(!w)return;const P=document.createElement("div");P.classList.add("img");const U=document.createElement("img"),H=_(u);H&&(U.src=H),U.alt="",z.set(U,{x:S==="left"?-500:500}),P.appendChild(U),t.appendChild(P),z.to(w.querySelector("img"),{x:S==="left"?500:-500,duration:1.5,ease:"hop"}),z.fromTo(P,{clipPath:S==="left"?"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)":"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:1.5,ease:"hop"}),z.to(U,{x:0,duration:1.5,ease:"hop"}),M(),h+=S==="left"?-90:90,z.to(s,{rotate:h,duration:1,ease:"hop"})}function v(){u<c?(u++,y("right"),p(),m()):(u=1,y("right"),p(),m())}function T(){l<=0||(f=setInterval(v,l))}function b(){f&&(clearInterval(f),f=null),d==null||d.kill(),d=null}function E(){b(),T()}const C=S=>{if(!e.contains(S.target))return;E();const x=e.clientWidth,w=S.clientX;if(a.contains(S.target)){const P=S.target.closest(".preview");if(P){const U=Array.from(o).indexOf(P)+1;if(U!==u&&U>=1&&U<=c){const H=U<u?"left":"right";u=U,y(H),p(),m()}}return}w<x/2&&u!==1?(u--,y("left")):w>x/2&&u!==c&&(u++,y("right")),p(),m()};document.addEventListener("click",C),T(),p(),r._camilleMormalSliderCleanup=()=>{b(),document.removeEventListener("click",C),z.killTweensOf([n,i,s,g])}}function O_(){return typeof window>"u"||!window.location?"":window.location.hostname??""}function kw(r=O_()){return!!(r&&r.includes("canvas.webflow.com"))}function zw(r=O_()){return r?r.endsWith(".webflow.io")||r.endsWith(".canvas.webflow.com")||r==="webflow.com"||r.endsWith(".webflow.com"):!1}function Hw(r){return!r||typeof r!="string"?!1:r.includes(".webflow.io")||r.includes(".canvas.webflow.com")}const Vw={reveal:Bp,"svg-image-hover":kp,"three-slider":Gg,"bennett-clive-scroll-anim":Xg,"three-parallax-footer":o_,"ova-scroll-slider":a_,"sageeast-3d-scroll":c_,stories:u_,"telescope-img-scroll":h_,"telescope-scroll":f_,"elementis-scroll":g_,"fractal-glass-effect":__,"inkwell-image-gallery":S_,"inversa-scroll-animation":M_,"prototypestudio-scroll-animation":T_,"poly-app-photo-dump":w_,"eduardbodak-scroll-animation":A_,"cosmos-parallax-effect-mousemove":C_,"247artists-trail":Tw,"camille-mormal-slider":Bw};function Df(r=document){for(const e of r.querySelectorAll("[data-component]")){const t=e.getAttribute("data-component"),n=Vw[t];n==null||n(e)}}return typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Df(),{once:!0}):Df()),li.initComponents=Df,li.isWebflowAllowedOrigin=Hw,li.isWebflowCanvasPreview=kw,li.isWebflowHostedDomain=zw,Object.defineProperty(li,Symbol.toStringTag,{value:"Module"}),li}({});
