(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3niX":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var n,s=i("q1tI");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((n=i("SevZ"))&&n.__esModule?n:{default:n}).default),d=function(e){function t(e){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=r(this,l(t).call(this,e))).prevProps={},i}var i,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,s.Component),i=t,o=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],i=e[1];return u.computeId(t,i)}).join(" ")}}],(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&a(i.prototype,n),o&&a(i,o),t}();t.default=d},"8oxB":function(e,t){var i,n,s=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function r(e){if(i===setTimeout)return setTimeout(e,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"===typeof setTimeout?setTimeout:o}catch(e){i=o}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l,c=[],u=!1,d=-1;function h(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&m())}function m(){if(!u){var e=r(h);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];c.push(new p(e,t)),1!==c.length||u||r(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},"9kyW":function(e,t,i){"use strict";e.exports=function(e){for(var t=5381,i=e.length;i;)t=33*t^e.charCodeAt(--i);return t>>>0}},MX0m:function(e,t,i){e.exports=i("3niX")},RNiq:function(e,t,i){"use strict";i.r(t);var n=i("MX0m"),s=i.n(n),o=i("q1tI"),a=i.n(o),r=i("8Kt/"),l=i.n(r),c={title:"Come\xe7o de S\xe9culo",description:"Come\xe7o de S\xe9culo \xe9 um \xe9pico apote\xf3tico ao vivo \u2014 parte exposi\xe7\xe3o, happening e teatro experimental \u2014 que acontece em ato \xfanico no dia 05 de novembro de 2019, da meia-noite \xe0s tr\xeas da manh\xe3 na Galeria Jaqueline Martins, e \xe9 acompanhado por a\xe7\xf5es n\xe3o anunciadas no espa\xe7o p\xfablico, um \xe1lbum e este site com v\xeddeos comissionados e documentais.",header:{text1:"BEGINNING OF A CENTURY is a live apotheotic epic \u2014 part exhibition, happening and experimental theater \u2014 that happens in one-act on November 6, from midnight to 3 a.m.",text2:'at <a href="http://galeriajaquelinemartins.com.br/exposicao/comecodeseculo" target="_blank">Galeria Jaqueline Martins</a>, and is followed by unannounced activities in public spaces, a music album by label <a href="https://dominalabel.bandcamp.com" target="_blank">Domina</a>, and this website with documentation and comissioned videos.',text3:"Curated by:\nGERMANO DUSH\xc1\nCuratorial ass:\nGUILHERME TEIXEIRA",text4:"S\xc3O\nPAULO\n2019"},list:[{index:"CDS01",length:"12:34",title:"COME\xc7O DE S\xc9CULO_Ao Vivo",video:"https://www.youtube.com/embed/Yag26wwym4c",thumb:"static/media/CDS_EAAV.png"},{index:"CDS02",length:"13:46",title:"RICARDO CARIOBA_Bilateral",video:"https://www.youtube.com/embed/aEknNXZiFeE",thumb:"static/media/RC_B.png"},{index:"CDS03",length:"02:52",title:"VIT\xd3RIA CRIBB_Conflitos Internos",video:"https://www.youtube.com/embed/UhGmWcwDvw4",thumb:"static/media/VC_CI.png"},{index:"CDS04",length:"04:03",title:"JONAS VAN_Nomes de Abismos",video:"https://www.youtube.com/embed/1O-ycY2H544",thumb:"static/media/JV_NDA.png"},{index:"CDS05",length:"09:01",title:"MARIA NOUJAIM_Ex\xfavia",video:"https://www.youtube.com/embed/scs2jtPh0ws",thumb:"static/media/MN_E.png"},{index:"CDS06",length:"03:08",title:"JANAINA WAGNER_Licantropia (excerto)",video:"https://www.youtube.com/embed/GmRo4C6lHUc?list=TLPQMTgxMjIwMTkkxGxid0ymUA",thumb:"static/media/JW_L.png"},{index:"CDS07",length:"04:11",title:"NAVES CIL\xcdNDRICAS_Deserto",video:"https://www.youtube.com/embed/hz8WTMzhYy0",thumb:"static/media/NC_D.png"},{index:"CDS08",length:"02:09",title:"LUCAS BRAND\xc3O_Bug",video:"https://www.youtube.com/embed/7y3zOCXFGtE",thumb:"static/media/LB_B.png"},{index:"CDS09",length:"03:55",title:"NINA BOTKAY_Delir",video:"https://www.youtube.com/embed/NXufPDiTKNc",thumb:"static/media/NB_D.png"},{}]},u=i("UXZV"),d=i.n(u);function h(){return(h=d.a||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var m=a.a.createElement,p=function(e){return m("svg",h({id:"prefix__Layer_1",x:0,y:0,viewBox:"0 0 39 39",xmlSpace:"preserve",width:"1em",height:"1em"},e),m("style",null,".prefix__st0{clip-path:url(#prefix__SVGID_2_);fill:none;stroke:#fff;stroke-width:2}"),m("defs",null,m("path",{id:"prefix__SVGID_1_",d:"M1 .7h37.3V38H1z"})),m("clipPath",{id:"prefix__SVGID_2_"},m("use",{xlinkHref:"#prefix__SVGID_1_",overflow:"visible"})),m("path",{className:"prefix__st0",d:"M1.7 1.4l35.9 35.9M1.7 37.3L37.6 1.4"}))},f=a.a.createElement,g=function(){var e=Object(o.useState)(!1),t=e[0],i=e[1];return t?null:f("div",{style:{display:t?"none":"block",position:"fixed",top:0,bottom:0,left:0,right:0},className:"jsx-575125765 root"},f("a",{href:"#",onClick:function(){return i(!0)},className:"jsx-575125765"},f(p,null)),f("div",{className:"jsx-575125765 content"},f("h1",{className:"jsx-575125765"},"COME\xc7O DE S\xc9CULO     BEGINNING OF A CENTURY"),f("p",{className:"jsx-575125765"},"Come\xe7o de s\xe9culo, virada enigm\xe1tica, quem teria coragem de se inclinar na beirada do abismo, para encarar no centro da escurid\xe3o, com o corpo posto, todas as feras, queimando a vista diante da fenda, que abre apartando duas eras?! Como um joelho que dispara de encontro \xe0s costas, corre todo dia com o colosso das imagens, claudicante enquanto aumentam as escalas das infraestruturas de troca em microssegundos, cada vez mais abstratas. Com os desabamentos e lama\xe7ais, fogar\xe9us sobre selvas e trens, c\xe9us rachados e \xe1guas turvas, a met\xe1fora n\xe3o d\xe1 mais conta \xe9 de nada; e o ranger dos apetites tomando a superf\xedcie, e o card\xe1pio infinito de drogas com aqueles emojis, e corpas novos-ciborgues, pr\xf3teses, horm\xf4nios e vocabul\xe1rios, cravam as unhas e caninos na jugular da linguagem conhecida. Come\xe7o de s\xe9culo, se manifestam como sempre, esot\xe9ricas, as criaturas terrestres. Na percep\xe7\xe3o das coisas todas n\xe3o existe natureza, ou tudo \xe9 natureza, algu\xe9m vai dizer. Debaixo do roxo crep\xfasculo, a on\xe7a respira, o lobo copula e a cobra morde o pr\xf3prio rabo. Jogo, chumbo, algoritmo, fluido ou maci\xe7o, enigm\xe1tico. As horas, uma depois da outra, que trazem em seu interior pedras e conchas, ferros e tijolos, e por entre tudo o estalo, que a qualquer instante faz sentir o fio do que fica em p\xe9, do que j\xe1 vai ruir. Come\xe7o de s\xe9culo, sem nunca chegar em lugar algum, ",f("i",{className:"jsx-575125765"},"agora"),", estar em caminho, deslocar os passeios, benzer o olho, enxergar na neblina, encarar o tr\xe1gico, habitar a luz, invadir os vazios, diluir falsas dualidades, manusear a forma, ver de dentro, e de fora, n\xf3s e os monumentos. Longe da letargia dos corpos, acordar com os \xedcones na boca, mastigando o que \xe9 decisivo, afastando o agouro. O impulso qu\xedmico do verbo. ",f("i",{className:"jsx-575125765"},"Pot\xeancia em todos os aspectos!")),f("h2",{className:"jsx-575125765"},"\xc9PICO     APOTE\xd3TICO    AO VIVO"),f("p",{className:"jsx-575125765 center"},"Adriano Amaral \u2022 Ana Matheus Abbade \u2022 Ana Mazzei \u2022 \xc3O",f("br",{className:"jsx-575125765"}),"Bruno Baptistelli \u2022 Castiel Vitorino Brasileiro \u2022 CRISE \u2022 Daniel de Paula",f("br",{className:"jsx-575125765"}),"Deyson Gilbert \u2022 Eduardo Ara\xfajo \u2022 Hel\xf4 Duran \u2022 Janaina Wagner \u2022 Jonas Van",f("br",{className:"jsx-575125765"}),"Juliana Frontin \u2022 Lucas Brand\xe3o \u2022 Felipe Rodrigues e Lucas Kanguru",f("br",{className:"jsx-575125765"}),"Leandra Esp\xedrito Santo \u2022 Marcelo Mudou \u2022 Maria Noujaim \u2022 MEXA",f("br",{className:"jsx-575125765"}),"Naves Cil\xedndricas \u2022 Nina Botkay \u2022 Paulo Monteiro \u2022 Ricardo Carioba",f("br",{className:"jsx-575125765"}),"Santarosa Barreto \u2022 thingamajicks \u2022 Vit\xf3ria Cribb",f("br",{className:"jsx-575125765"}),f("br",{className:"jsx-575125765"}),"Curadoria / Curated by: Germano Dush\xe1",f("br",{className:"jsx-575125765"}),"Ass. de curadoria / Curatorial ass.: Guilherme Teixeira",f("br",{className:"jsx-575125765"})),f("p",{className:"jsx-575125765 center"},"ATO \xdaNICO / ONE-ACT",f("br",{className:"jsx-575125765"}),"Madrugada do dia / Morning of November 5>6",f("br",{className:"jsx-575125765"}),"In\xedcio / Starting at: 00h00",f("br",{className:"jsx-575125765"}),"Dura\xe7\xe3o / Length: 180\u2019",f("br",{className:"jsx-575125765"})),f("h2",{className:"jsx-575125765"},"LIVE     APOTHEOTIC     EPIC"),f("p",{className:"jsx-575125765"},"Beginning of a century, enigmatic turn, who would dare to lean on the edge of the abyss, with the body placed, to face the center of darkness and all the beasts, burning the sight before the crack, which opens apart the age in two pieces?! As a knee that shoots against the back, it runs every day with the colossus of images, limping as the scale of microsecond exchange infrastructures increase, ever more abstract. With all the landslides and all the mud, the blaze over jungles and trains, fallen skies and murky waters, metaphors won't do a thing; and the creaking of appetites taking over the surface, the endless drugs menu with those emojis, and new-cyborg corps, prostheses, hormones, and vocabularies, digging their nails and canines into the jugular of known language. Beginning of a century, the esoteric creatures of the earth manifest themselves as always. In the perception of everything there is no nature, or everything is nature, one will say. Under the purple twilight, the jaguar breathes, the wolf copulates, and the snake bites its own tail. Game, lead, algorithm, solid or fluid, enigmatic. The hours, one after the other, carrying inside stones and shells, irons and bricks, and among all the crackle, which at any moment makes one feel the thread of what is still standing and what will soon collapse. Beginning of a century, never getting anywhere, ",f("i",{className:"jsx-575125765"},"now"),", to be on the way, blessing the eye, discerning in the fog, facing the tragic, inhabiting the light, invading the voids, diluting false dualities, manipulating form, seeing from within, and from without, us and the monuments. Far from the lethargy of the bodies, waking up with the icons in the mouth, chewing what is decisive, pushing away a bad omen. The chemical impulse of the verb. ",f("i",{className:"jsx-575125765"},"Potency in every term!")),f("h2",{className:"jsx-575125765"},"COME\xc7O DE S\xc9CULO     BEGINNING OF A CENTURY")),f(s.a,{id:"575125765"},[".root.jsx-575125765{color:white;overflow:scroll;font-family:arial;}",".content.jsx-575125765{-webkit-transform:scaleY(2) translateY(25%);-ms-transform:scaleY(2) translateY(25%);transform:scaleY(2) translateY(25%);padding:1em 8em 0;padding-bottom:300px;}","h1.jsx-575125765,h2.jsx-575125765{text-align:center;font-weight:normal;font-size:29px;}","p.jsx-575125765{text-align:justify;font-size:23px;}","p.center.jsx-575125765{text-align:center;}","a.jsx-575125765{font-size:30px;margin:30px;display:block;position:fixed;z-index:1001;}","img.jsx-575125765{width:35%;height:auto;margin-top:1350px;}","@media (max-width:580px){.content.jsx-575125765{padding:1em 1em 0;padding-bottom:300px;}h1.jsx-575125765,h2.jsx-575125765{font-size:26px;}p.jsx-575125765{font-size:20px;}img.jsx-575125765{margin-top:2700px;width:60%;}}","@media (min-width:500px){.root.jsx-575125765{min-width:1100px;max-width:1400px;margin:0 auto;}.jsx-575125765::-webkit-scrollbar{-webkit-appearance:none;width:7px;}.jsx-575125765::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,.5);-webkit-box-shadow:0 0 1px rgba(255,255,255,.5);}}","@media (max-width:1200px){img.jsx-575125765{margin-top:1550px;}}"]))},b=a.a.createElement;t.default=function(){var e=Object(o.useState)(null),t=e[0],i=e[1],n=Object(o.useState)(null),a=n[0],r=n[1];return b("div",{className:"jsx-2204360947 page"},b(l.a,null,b("link",{rel:"stylesheet",type:"text/css",href:"/static/fonts/stylesheet.css",className:"jsx-2204360947"}),b("title",{className:"jsx-2204360947"},c.title),b("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/static/android-icon-192x192.png",className:"jsx-2204360947"}),b("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/favicon-32x32.png",className:"jsx-2204360947"}),b("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/static/favicon-96x96.png",className:"jsx-2204360947"}),b("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/favicon-16x16.png",className:"jsx-2204360947"}),b("meta",{property:"og:image",content:"/static/share.png",className:"jsx-2204360947"}),b("meta",{property:"og:title",content:c.title,className:"jsx-2204360947"}),b("meta",{property:"og:description",content:c.description,className:"jsx-2204360947"}),b("meta",{property:"og:locale",content:"pt_BR",className:"jsx-2204360947"})),b("header",{onClick:function(){return r(null)},className:"jsx-2204360947"},b("img",{src:"/static/logo.png",className:"jsx-2204360947 logo"}),b("div",{className:"jsx-2204360947 t1"},c.header.text1),b("div",{dangerouslySetInnerHTML:{__html:c.header.text2},className:"jsx-2204360947 t2"}),b("div",{dangerouslySetInnerHTML:{__html:c.header.text3},className:"jsx-2204360947 t3"}),b("div",{className:"jsx-2204360947 t4"},c.header.text4),t&&b("img",{src:t.thumb,className:"jsx-2204360947 thumb"})),b("table",{className:"jsx-2204360947"},b("tbody",{className:"jsx-2204360947"},c.list.map(function(e){return b("tr",{key:e.index,onMouseEnter:function(){return i(e)},onMouseLeave:function(){return i(null)},onClick:function(){return r(e)},className:"jsx-2204360947 scale-text"},b("td",{className:"jsx-2204360947"},b("span",{className:"jsx-2204360947"},e.index)),b("td",{className:"jsx-2204360947"},b("span",{className:"jsx-2204360947"},e.length)),b("td",{className:"jsx-2204360947"},b("span",{className:"jsx-2204360947"},e.title)))}))),a&&b("div",{className:"jsx-2204360947 modal"},b("iframe",{width:"1656",height:"640",src:a.video,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,className:"jsx-2204360947"}),b("a",{href:"#",onClick:function(){return r(null)},className:"jsx-2204360947"},b(p,null))),b(g,null),b(s.a,{id:"2204360947"},["body{margin:0;background-color:black;min-height:100vh;}","@media (min-width:580px){body{min-width:1130px;}}","table{width:calc(100% - 4em);border-collapse:collapse;margin:2em;box-sizing:border-box;}","a{color:#8230FA;}",".page{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#8230FA;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:16px;font-family:'Spectral';font-weight:300;white-space:pre-wrap;}","@media (min-width:580px){.page{font-size:13px;}}","@media (min-width:1280px){.page{font-size:14px;}}","@media (min-width:1480px){.page{font-size:16px;}}","header{border-bottom:3px solid #8230FA;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:30px;}","@media (min-width:580px){header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:140px;min-height:140px;}}",".page .logo{height:140px;margin-right:30px;max-width:100%;}","header>div{-webkit-transform:scaleY(2) translateY(22%);-ms-transform:scaleY(2) translateY(22%);transform:scaleY(2) translateY(22%);padding-bottom:140px;}","@media (min-width:376px){header>div{padding-bottom:120px;}}","@media (min-width:580px){header>div{line-height:1.2em;max-width:340px;margin-right:15px;padding-bottom:0;}}",".page>table td span{font-size:30px;font-weight:200;line-height:1em;margin:.5em 0;-webkit-transform:scaleY(2);-ms-transform:scaleY(2);transform:scaleY(2);cursor:pointer;display:block;}",".thumb{position:absolute;left:0;top:0;height:200px;width:auto;}",".modal{position:fixed;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);-ms-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);background-color:black;}",".modal video{width:640px;height:480px;}",".modal a{position:absolute;top:27px;right:35px;font-size:30px;color:#8230FA;-webkit-text-decoration:none;text-decoration:none;}","@media (max-width:580px){table{display:block;}tr{margin-bottom:60px;display:block;}td{display:block;}td:last-child{margin-top:30px;}.modal video{width:100vw;height:75vw;}iframe{width:100vw !important;height:60vw;}}"]))}},SevZ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("9kyW")),s=o(i("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.styleSheet,n=void 0===i?null:i,o=t.optimizeForSpeed,a=void 0!==o&&o,r=t.isBrowser,l=void 0===r?"undefined"!==typeof window:r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new s.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),n&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,i,o;return t=e,(i=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var i=this.getIdAndRules(e),n=i.styleId,s=i.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=o,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(i in this._instancesCounts,"styleId: `".concat(i,"` not found")),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var n=this._fromServer&&this._fromServer[i];n?(n.parentNode.removeChild(n),delete this._fromServer[i]):(this._indices[i].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[i]),delete this._instancesCounts[i]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return i[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,i){if(!i)return"jsx-".concat(t);var s=String(i),o=t+s;return e[o]||(e[o]="jsx-".concat((0,n.default)("".concat(t,"-").concat(s)))),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(i,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var s=i+n;return t[s]||(t[s]=n.replace(e,i)),t[s]}}},{key:"getIdAndRules",value:function(e){var t=this,i=e.children,n=e.dynamic,s=e.id;if(n){var o=this.computeId(s,n);return{styleId:o,rules:Array.isArray(i)?i.map(function(e){return t.computeSelector(o,e)}):[this.computeSelector(o,i)]}}return{styleId:this.computeId(s),rules:Array.isArray(i)?i:[i]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&a(t.prototype,i),o&&a(t,o),e}();t.default=r},bVZc:function(e,t,i){"use strict";(function(e){function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.name,o=void 0===i?"stylesheet":i,r=t.optimizeForSpeed,l=void 0===r?n:r,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(s(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#".concat(o,"-deleted-rule____{}"),a("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,o,r;return t=e,(o=[{key:"setOptimizeForSpeed",value:function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"===typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(a(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(r){return n||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(o){n||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),i.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];a(s,"old rule at index `".concat(e,"` not found")),s.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,i){return i?t=t.concat(e.getSheetForTag(i).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,i){t&&a(s(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-".concat(e),""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return i?o.insertBefore(n,i):o.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,o),r&&i(t,r),e}();function a(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=o}).call(this,i("8oxB"))},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])}},[["vlRD",1,0]]]);