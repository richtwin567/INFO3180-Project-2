(function(e){function t(t){for(var r,o,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},c=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"98801f16"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var l=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,a[1](l)}n[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0d22":function(e,t,a){"use strict";a("2686")},1741:function(e,t,a){"use strict";a("5951")},"1cc4":function(e,t,a){},"1e0e":function(e,t,a){"use strict";a("9f67")},2686:function(e,t,a){},"272c":function(e,t,a){},"2ca0":function(e,t,a){},3928:function(e,t,a){e.exports=a.p+"img/tag.c7133bb2.svg"},"3e6c":function(e,t,a){"use strict";a("272c")},4736:function(e,t,a){"use strict";a("fb3f")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n=a("c013"),c=a.n(n),o={id:"nav"},i={class:"company"},s=Object(r["h"])("span",{class:"company-name"},[Object(r["h"])("img",{src:c.a,alt:"logo"}),Object(r["h"])("p",null,"United Auto Sales")],-1),l=Object(r["g"])("Add Car"),u=Object(r["g"])("Explore"),d=Object(r["g"])("My Profile"),b=Object(r["g"])("Logout"),p=Object(r["g"])("Login"),h=Object(r["g"])("Register ");function f(e,t,a,n,c,f){var O=Object(r["x"])("router-link"),j=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["h"])("div",o,[Object(r["h"])("div",i,[Object(r["h"])(O,{to:{path:0==c.uid.length?"/":"/explore"}},{default:Object(r["E"])((function(){return[s]})),_:1},8,["to"]),Object(r["h"])("div",{class:0==c.uid.length?"hidden":""},[Object(r["h"])(O,{to:"/cars/new"},{default:Object(r["E"])((function(){return[l]})),_:1}),Object(r["h"])(O,{to:"/explore"},{default:Object(r["E"])((function(){return[u]})),_:1}),Object(r["h"])(O,{to:{path:"/users/"+c.uid}},{default:Object(r["E"])((function(){return[d]})),_:1},8,["to"])],2)]),Object(r["h"])("div",{class:0==c.uid.length?"hidden":""},[Object(r["h"])(O,{to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1})],2),Object(r["h"])("div",{class:0==c.uid.length?"":"hidden"},[Object(r["h"])(O,{to:"/login"},{default:Object(r["E"])((function(){return[p]})),_:1}),Object(r["h"])(O,{to:"/register"},{default:Object(r["E"])((function(){return[h]})),_:1})],2)]),Object(r["h"])(j)])}a("ac1f"),a("1276"),a("5319"),a("a15b"),a("d81d"),a("fb6a"),a("d3b7"),a("25f0");var O=a("1da1");a("96cf");function j(){var e=localStorage.getItem("jwt");return e?{Authorization:"Bearer "+e}:{}}var m={name:"App",created:function(){var e=this;console.log(e.uid.length);var t=j().Authorization;function a(e){var t=e.split(".")[1],a=t.replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(a).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)}t&&(e.uid=a(t).id)},data:function(){return{uid:""}}};a("62f6");m.render=f;var v=m,g=(a("3ca3"),a("ddb0"),a("6c02")),A=Object(r["H"])("data-v-a5f5a6aa");Object(r["t"])("data-v-a5f5a6aa");var y={class:"home"};Object(r["r"])();var w=A((function(e,t,a,n,c,o){var i=Object(r["x"])("HomePage");return Object(r["q"])(),Object(r["d"])("div",y,[Object(r["h"])(i)])})),C=Object(r["H"])("data-v-ad492576");Object(r["t"])("data-v-ad492576");var k=Object(r["f"])('<section id="home-page" data-v-ad492576><h1 data-v-ad492576>Buy and Sell Cars Online</h1><p data-v-ad492576> United Auto Sales provides the fastest, easiest and most user friendy to buy and sell cars online. Find a great price on the vehicle you Want </p><div class="btns" data-v-ad492576><a href="/register" class="reg-btn" data-v-ad492576> Register </a><a href="/login" class="login-btn" data-v-ad492576>Login</a></div></section><img src="https://blogs.forbes.com/samabuelsamid/files/2018/11/Small-Audi-e-tron-GT-concept-5118.jpg" alt="car" data-v-ad492576>',2);Object(r["r"])();var _=C((function(e,t,a,n,c,o){return Object(r["q"])(),Object(r["d"])("main",null,[k])})),S={name:"HomePage"};a("9525");S.render=_,S.__scopeId="data-v-ad492576";var x=S,P={name:"Home",components:{HomePage:x}};a("4736");P.render=w,P.__scopeId="data-v-a5f5a6aa";var U=P,T=Object(r["H"])("data-v-21087e95");Object(r["t"])("data-v-21087e95");var F={id:"login"},E=Object(r["h"])("h1",null,"Log in to your account",-1);Object(r["r"])();var q=T((function(e,t,a,n,c,o){var i=Object(r["x"])("login-form");return Object(r["q"])(),Object(r["d"])("div",F,[E,Object(r["h"])(i)])})),I=Object(r["H"])("data-v-4f1510aa");Object(r["t"])("data-v-4f1510aa");var M={id:"login-form-container"},R=Object(r["h"])("label",{for:"username"}," Username ",-1),D=Object(r["h"])("label",{for:"password"}," Password ",-1),N=Object(r["h"])("button",{class:"auth-form-btn",type:"submit"}," Login ",-1),V={key:0,class:"error"};Object(r["r"])();var z=I((function(e,t,a,n,c,o){return Object(r["q"])(),Object(r["d"])("section",M,[Object(r["h"])("form",{onSubmit:t[3]||(t[3]=Object(r["G"])((function(){return o.handleSubmit&&o.handleSubmit.apply(o,arguments)}),["prevent"])),method:"POST"},[R,Object(r["F"])(Object(r["h"])("input",{id:"username",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.username=e}),required:""},null,512),[[r["C"],c.username]]),D,Object(r["F"])(Object(r["h"])("input",{id:"password",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),required:""},null,512),[[r["C"],c.password]]),N,c.error?(Object(r["q"])(),Object(r["d"])("div",V,Object(r["z"])(c.error),1)):Object(r["e"])("",!0)],32)])})),L=a("bc3a"),B=a.n(L),H="http://localhost:9090/api";function J(e){return Y.apply(this,arguments)}function Y(){return Y=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t.username,password:t.password})},e.abrupt("return",fetch("".concat(H,"/auth/login"),a).then((function(e){return e.ok||401===e.status?e.json():void 0})).catch((function(e){console.log(e)})));case 2:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function Q(e){return localStorage.setItem("jwt",e.token),{success:e.message}}function G(e){return X.apply(this,arguments)}function X(){return X=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={method:"POST",body:t},e.abrupt("return",fetch("".concat(H,"/auth/register"),a).then((function(e){return e.ok||401===e.status?e.json():void 0})).catch((function(e){console.log(e)})));case 2:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}var K={name:"LoginForm",data:function(){return{username:"",password:"",error:""}},methods:{handleSubmit:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.preventDefault(),r={username:t.username,password:t.password},a.next=4,J(r);case 4:n=a.sent,n.error?(console.log(n.error),t.error=n.error):(Q(n),window.location.href="/explore"),console.log(n);case 7:case"end":return a.stop()}}),a)})))()}}};a("1e0e");K.render=z,K.__scopeId="data-v-4f1510aa";var W=K,Z={components:{LoginForm:W},name:"LoginPage"};a("3e6c");Z.render=q,Z.__scopeId="data-v-21087e95";var $=Z,ee=Object(r["H"])("data-v-41baa05f");Object(r["t"])("data-v-41baa05f");var te={id:"registration"},ae=Object(r["h"])("h1",null,"Register New User",-1);Object(r["r"])();var re=ee((function(e,t,a,n,c,o){var i=Object(r["x"])("registration-form");return Object(r["q"])(),Object(r["d"])("div",te,[ae,Object(r["h"])(i)])})),ne=Object(r["H"])("data-v-4365d37a");Object(r["t"])("data-v-4365d37a");var ce={id:"registration-form-container"},oe={class:"form-fields"},ie={class:"form-field"},se=Object(r["h"])("label",{for:"username"}," Username ",-1),le={class:"form-field"},ue=Object(r["h"])("label",{for:"password"}," Password ",-1),de={class:"form-fields"},be={class:"form-field"},pe=Object(r["h"])("label",{for:"fullname"}," Fullname ",-1),he={class:"form-field"},fe=Object(r["h"])("label",{for:"email"}," Email ",-1),Oe={class:"form-field"},je=Object(r["h"])("label",{for:"location"},"Location",-1),me={class:"form-field"},ve=Object(r["h"])("label",{for:"biography"},"Biography",-1),ge={class:"form-field"},Ae=Object(r["h"])("div",{class:"form-field"},[Object(r["h"])("button",{type:"submit",id:"register-btn"},"Register")],-1);Object(r["r"])();var ye=ne((function(e,t,a,n,c,o){return Object(r["q"])(),Object(r["d"])("section",ce,[Object(r["h"])("form",{onSubmit:t[8]||(t[8]=Object(r["G"])((function(){return o.handleSubmit&&o.handleSubmit.apply(o,arguments)}),["prevent"])),method:"POST",id:"registration-form"},[Object(r["h"])("article",oe,[Object(r["h"])("div",ie,[se,Object(r["F"])(Object(r["h"])("input",{id:"username",type:"text",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.username=e})},null,512),[[r["C"],c.username]])]),Object(r["h"])("div",le,[ue,Object(r["F"])(Object(r["h"])("input",{id:"password",type:"password",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e})},null,512),[[r["C"],c.password]])])]),Object(r["h"])("article",de,[Object(r["h"])("div",be,[pe,Object(r["F"])(Object(r["h"])("input",{id:"fullname",type:"text",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.fullname=e})},null,512),[[r["C"],c.fullname]])]),Object(r["h"])("div",he,[fe,Object(r["F"])(Object(r["h"])("input",{id:"email",type:"email",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.email=e})},null,512),[[r["C"],c.email]])])]),Object(r["h"])("div",Oe,[je,Object(r["F"])(Object(r["h"])("input",{id:"location",type:"text",required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.location=e})},null,512),[[r["C"],c.location]])]),Object(r["h"])("div",me,[ve,Object(r["F"])(Object(r["h"])("textarea",{id:"biography",rows:"8",cols:"50",required:"","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.biography=e})},null,512),[[r["C"],c.biography]])]),Object(r["h"])("div",ge,[Object(r["h"])("input",{type:"file",name:"photo",ref:"photo",accept:"image/*",onChange:t[7]||(t[7]=function(e){return o.handleFileUpload()})},null,544)]),Ae],32)])})),we={name:"RegistrationForm",data:function(){return{username:"",password:"",fullname:"",email:"",location:"",biography:"",photo:"",error:""}},methods:{handleFileUpload:function(){this.photo=this.$refs.photo.files[0]},handleSubmit:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function a(){var r,n,c,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(c in e.preventDefault(),r={username:t.username,password:t.password,fullname:t.fullname,email:t.email,location:t.location,biography:t.biography,photo:t.photo},n=new FormData,r)n.append(c,r[c]);return a.next=6,G(n);case 6:o=a.sent,o.error?(console.log(o.error),t.error=o.error):(i=J({username:t.username,password:t.password}),Q(i),t.$router.push("/")),console.log(o);case 9:case"end":return a.stop()}}),a)})))()}}};a("1741");we.render=ye,we.__scopeId="data-v-4365d37a";var Ce=we,ke={components:{RegistrationForm:Ce},name:"RegistrationPage"};a("0d22");ke.render=re,ke.__scopeId="data-v-41baa05f";var _e=ke,Se={id:"explore"};function xe(e,t,a,n,c,o){var i=Object(r["x"])("ExploreComponent");return Object(r["q"])(),Object(r["d"])("div",Se,[Object(r["h"])(i)])}var Pe=a("3928"),Ue=a.n(Pe),Te=Object(r["H"])("data-v-32de7b71");Object(r["t"])("data-v-32de7b71");var Fe={id:"explore-page"},Ee=Object(r["h"])("div",{class:"heading"},[Object(r["h"])("h1",null,"Explore")],-1),qe={class:"search-cars"},Ie={class:"inputs"},Me=Object(r["h"])("label",{class:"model",for:"make"},"Make",-1),Re={class:"inputs"},De=Object(r["h"])("label",{class:"model",for:"model"},"Model",-1),Ne={class:"car-cards"},Ve={class:"cars-lst"},ze={class:"car-card"},Le={class:"photo"},Be={class:"car-info"},He={class:"name-and-price"},Je={class:"year-and-make"},Ye={class:"car-price"},Qe=Object(r["h"])("img",{class:"tags",src:Ue.a,alt:"tag"},null,-1),Ge={class:"car-model"};Object(r["r"])();var Xe=Te((function(e,t,a,n,c,o){return Object(r["q"])(),Object(r["d"])("section",Fe,[Ee,Object(r["h"])("div",qe,[Object(r["h"])("div",Ie,[Me,Object(r["F"])(Object(r["h"])("input",{type:"search",name:"make","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.searchTermMake=e}),onChange:t[2]||(t[2]=function(){return o.empty&&o.empty.apply(o,arguments)}),id:"make",class:"search-input"},null,544),[[r["C"],c.searchTermMake]])]),Object(r["h"])("div",Re,[De,Object(r["F"])(Object(r["h"])("input",{type:"search",name:"model","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.searchTermModel=e}),onChange:t[4]||(t[4]=function(){return o.empty&&o.empty.apply(o,arguments)}),id:"model",class:"search-input"},null,544),[[r["C"],c.searchTermModel]])]),Object(r["h"])("button",{class:"btn-search",onClick:t[5]||(t[5]=function(){return o.searchCars&&o.searchCars.apply(o,arguments)})},"Search")]),Object(r["h"])("div",Ne,[Object(r["h"])("ul",Ve,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(c.currentCars,(function(e){return Object(r["q"])(),Object(r["d"])("li",{key:e.id},[Object(r["h"])("div",ze,[Object(r["h"])("div",Le,[Object(r["h"])("img",{src:c.API_ENDPOINT+"/uploads/"+e.photo,alt:"car"},null,8,["src"])]),Object(r["h"])("div",Be,[Object(r["h"])("div",null,[Object(r["h"])("span",He,[Object(r["h"])("p",Je,Object(r["z"])(e.year+" "+e.make),1),Object(r["h"])("span",Ye,[Qe,Object(r["h"])("p",null,"$"+Object(r["z"])(e.price),1)])]),Object(r["h"])("p",Ge,Object(r["z"])(e.model),1)])]),Object(r["h"])("button",{onClick:function(t){return o.getCar(e.id)},class:"btn-details"}," View More Details ",8,["onClick"])])])})),128))])])])})),Ke=(a("4de4"),"http://localhost:9090/api"),We={name:"ExploreComponent",created:function(){var e=this;fetch(Ke+"/cars",{headers:j()}).then((function(e){return e.json()})).then((function(t){console.log(t),t.message||(e.cars=t)})).then((function(){console.log(e.cars),e.currentCars=e.cars,console.log(e.currentCars)}))},data:function(){return{cars:[],currentCars:[],searchTermModel:"",searchTermMake:"",API_ENDPOINT:"http://localhost:9090/api"}},methods:{getCar:function(e){window.location.href="/cars/".concat(e)},empty:function(){""==this.searchTermModel&&""==this.searchTermMake&&(this.currentCars=this.cars)},searchCars:function(){var e=this;""!=this.searchTermModel&&""==this.searchTermMake?this.currentCars=this.cars.filter((function(t){return t.model.toUpperCase()==e.searchTermModel.toUpperCase()})):""==this.searchTermModel&&""!=this.searchTermMake?this.currentCars=this.cars.filter((function(t){return t.make.toUpperCase()==e.searchTermMake.toUpperCase()})):this.currentCars=this.cars.filter((function(t){return t.make.toUpperCase()==e.searchTermMake.toUpperCase()&&t.model.toUpperCase()==e.searchTermModel.toUpperCase()}))}}};a("f42a");We.render=Xe,We.__scopeId="data-v-32de7b71";var Ze=We,$e={name:"ExplorePage",components:{ExploreComponent:Ze}};$e.render=xe;var et=$e,tt=Object(r["H"])("data-v-2b593910");Object(r["t"])("data-v-2b593910");var at={id:"car"};Object(r["r"])();var rt=tt((function(e,t,a,n,c,o){var i=Object(r["x"])("CarComponent");return Object(r["q"])(),Object(r["d"])("div",at,[Object(r["h"])(i)])})),nt=(a("a4d3"),a("e01a"),a("fbe8")),ct=a.n(nt),ot=a("a143"),it=a.n(ot),st=Object(r["H"])("data-v-e86f78a6");Object(r["t"])("data-v-e86f78a6");var lt={class:"main-car"},ut={id:"car-page"},dt={class:"details"},bt={class:"black"},pt=Object(r["h"])("span",{class:"detail-labels"},"Colour ",-1),ht={class:"black"},ft=Object(r["h"])("span",{class:"detail-labels"},"Body Type ",-1),Ot={class:"black"},jt=Object(r["h"])("span",{class:"detail-labels"},"Price ",-1),mt={class:"black"},vt=Object(r["h"])("span",{class:"detail-labels"},"Transmission ",-1),gt={class:"car-btns"},At=Object(r["h"])("a",{href:"/login",class:"login-btn"},"Email Owner",-1);Object(r["r"])();var yt=st((function(e,t,a,n,c,o){return Object(r["q"])(),Object(r["d"])("div",lt,[Object(r["h"])("img",{src:c.API_ENDPOINT+"/uploads/"+c.car.photo,alt:""},null,8,["src"]),Object(r["h"])("div",ut,[Object(r["h"])("div",null,[Object(r["h"])("h2",null,Object(r["z"])(c.car.year+" "+c.car.make),1),Object(r["h"])("h3",null,Object(r["z"])(c.car.model),1),Object(r["h"])("p",null,Object(r["z"])(c.car.description),1),Object(r["h"])("div",dt,[Object(r["h"])("p",bt,[pt,Object(r["g"])(Object(r["z"])(c.car.colour),1)]),Object(r["h"])("p",ht,[ft,Object(r["g"])(Object(r["z"])(c.car.car_type),1)]),Object(r["h"])("p",Ot,[jt,Object(r["g"])("$"+Object(r["z"])(c.car.price),1)]),Object(r["h"])("p",mt,[vt,Object(r["g"])(Object(r["z"])(c.car.transmission),1)])])]),Object(r["h"])("div",gt,[At,Object(r["h"])("button",{onClick:t[1]||(t[1]=function(){return o.setFave&&o.setFave.apply(o,arguments)}),class:"fave"},[Object(r["h"])("img",{class:c.isFavourite?"hidden":"",src:ct.a,alt:"fave"},null,2),Object(r["h"])("img",{class:c.isFavourite?"":"hidden",src:it.a,alt:"fave"},null,2)])])])])})),wt=(a("caad"),a("2532"),{name:"ExploreComponent",created:function(){var e="http://localhost:9090/api",t=this,a=window.location.pathname.replace("/cars/",""),r=j().Authorization;function n(e){var t=e.split(".")[1],a=t.replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(a).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)}t.uid=n(r).id,fetch(e+"/cars/".concat(a),{headers:j()}).then((function(e){return e.json()})).then((function(e){e.message||(t.car=e,t.pic_src="../../../../uploads/"+e.photo)})),fetch(e+"/users/".concat(t.uid,"/favourites"),{headers:j()}).then((function(e){return e.json()})).then((function(e){e.message||(t.favourites=e)})).then((function(){t.favourites.map((function(e){return e.id})).includes(t.car.id)&&(t.isFavourite=!0)}))},data:function(){return{car:{},favourites:[],isFavourite:!1,pic_src:String,uid:String,API_ENDPOINT:"http://localhost:9090/api"}},methods:{setFave:function(){var e=this,t="http://localhost:9090/api";e.isFavourite||fetch(t+"/cars/".concat(e.car.id,"/favourite"),{headers:j(),method:"POST"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.isFavourite=!0}))}}});a("a675");wt.render=yt,wt.__scopeId="data-v-e86f78a6";var Ct=wt,kt={name:"CarPage",components:{CarComponent:Ct}};a("aba8");kt.render=rt,kt.__scopeId="data-v-2b593910";var _t=kt,St=Object(r["H"])("data-v-7699beb9");Object(r["t"])("data-v-7699beb9");var xt={id:"user"};Object(r["r"])();var Pt=St((function(e,t,a,n,c,o){var i=Object(r["x"])("UserComponent");return Object(r["q"])(),Object(r["d"])("div",xt,[Object(r["h"])(i)])})),Ut=(a("b0c0"),Object(r["H"])("data-v-3808edf0"));Object(r["t"])("data-v-3808edf0");var Tt=Object(r["h"])("h1",{id:"no-access"},"You cannot access this page",-1),Ft={class:"user-card"},Et={class:"profile-img"},qt=Object(r["h"])("br",null,null,-1),It={class:"black"},Mt=Object(r["h"])("span",{class:"user-detail-label"},"Email ",-1),Rt={class:"black"},Dt=Object(r["h"])("span",{class:"user-detail-label"},"Location ",-1),Nt={class:"black"},Vt=Object(r["h"])("span",{class:"user-detail-label"},"Joined ",-1),zt=Object(r["h"])("div",{class:"heading"},[Object(r["h"])("h1",null,"Cars Favourited")],-1),Lt={class:"car-cards"},Bt={class:"cars-lst"},Ht={class:"car-card"},Jt={class:"photo"},Yt={class:"car-info"},Qt={class:"name-and-price"},Gt={class:"year-and-make"},Xt={class:"car-price"},Kt=Object(r["h"])("img",{class:"tags",src:Ue.a,alt:"tag"},null,-1),Wt={class:"car-model"};Object(r["r"])();var Zt=Ut((function(e,t,a,n,c,o){return Object(r["q"])(),Object(r["d"])("section",null,[Object(r["h"])("div",{class:c.param==c.uid?"hidden":""},[Tt],2),Object(r["h"])("div",{class:c.param==c.uid?"":"hidden",id:"user-page"},[Object(r["h"])("div",Ft,[Object(r["h"])("div",Et,[Object(r["h"])("img",{src:c.API_ENDPOINT+"/uploads/"+c.user.photo,alt:""},null,8,["src"])]),Object(r["h"])("div",null,[Object(r["h"])("h1",null,Object(r["z"])(c.user.name),1),Object(r["h"])("h3",null,Object(r["z"])(c.user.username),1),Object(r["h"])("p",null,Object(r["z"])(c.user.biography),1),qt,Object(r["h"])("p",It,[Mt,Object(r["g"])(" "+Object(r["z"])(c.user.email),1)]),Object(r["h"])("p",Rt,[Dt,Object(r["g"])(" "+Object(r["z"])(c.user.location),1)]),Object(r["h"])("p",Nt,[Vt,Object(r["g"])(" "+Object(r["z"])(c.user.date_joined),1)])])]),zt,Object(r["h"])("div",Lt,[Object(r["h"])("ul",Bt,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(c.cars,(function(e){return Object(r["q"])(),Object(r["d"])("li",{key:e.id},[Object(r["h"])("div",Ht,[Object(r["h"])("div",Jt,[Object(r["h"])("img",{src:c.API_ENDPOINT+"/uploads/"+e.photo,alt:"car"},null,8,["src"])]),Object(r["h"])("div",Yt,[Object(r["h"])("div",null,[Object(r["h"])("span",Qt,[Object(r["h"])("p",Gt,Object(r["z"])(e.year+" "+e.make),1),Object(r["h"])("span",Xt,[Kt,Object(r["h"])("p",null,"$"+Object(r["z"])(e.price),1)])]),Object(r["h"])("p",Wt,Object(r["z"])(e.model),1)])]),Object(r["h"])("button",{onClick:function(t){return o.getCar(e.id)},class:"btn-details"}," View More Details ",8,["onClick"])])])})),128))])])],2)])})),$t="http://localhost:9090/api",ea={name:"UserComponent",created:function(){var e=this,t=j().Authorization,a=window.location.pathname.replace("/users/","");function r(e){var t=e.split(".")[1],a=t.replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(a).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)}e.param=a,e.uid=r(t).id,fetch($t+"/users/".concat(a,"/favourites"),{headers:j()}).then((function(e){return e.json()})).then((function(t){t.message||(e.cars=t)})),fetch($t+"/users/".concat(a),{headers:j()}).then((function(e){return e.json()})).then((function(t){t.message||(e.user=t)}))},data:function(){return{cars:[],user:{},uid:String,param:String,API_ENDPOINT:"http://localhost:9090/api"}},methods:{getCar:function(e){window.location.href="/cars/".concat(e)}}};a("b7bb");ea.render=Zt,ea.__scopeId="data-v-3808edf0";var ta=ea,aa={name:"CarPage",components:{UserComponent:ta}};a("59df");aa.render=Pt,aa.__scopeId="data-v-7699beb9";var ra=aa,na=Object(r["H"])("data-v-39fc51af");Object(r["t"])("data-v-39fc51af");var ca={id:"add-new-car"},oa=Object(r["h"])("h1",null,"Add New Car",-1);Object(r["r"])();var ia=na((function(e,t,a,n,c,o){var i=Object(r["x"])("new-car-form");return Object(r["q"])(),Object(r["d"])("div",ca,[oa,Object(r["h"])(i)])})),sa=Object(r["H"])("data-v-6064384b");Object(r["t"])("data-v-6064384b");var la={id:"new-car-form-container"},ua={class:"form-fields"},da={class:"form-field"},ba=Object(r["h"])("label",{for:"make"},"Make",-1),pa={class:"form-field"},ha=Object(r["h"])("label",{for:"model"},"Model",-1),fa={class:"form-fields"},Oa={class:"form-field"},ja=Object(r["h"])("label",{for:"colour"},"Colour",-1),ma={class:"form-field"},va=Object(r["h"])("label",{for:"year"},"Year",-1),ga={class:"form-fields"},Aa={class:"form-field"},ya=Object(r["h"])("label",{for:"price"},"Location",-1),wa={class:"form-field"},Ca=Object(r["h"])("label",{for:"car_type"},"Car Type",-1),ka=Object(r["h"])("option",null,"SUV",-1),_a=Object(r["h"])("option",null,"Sedan",-1),Sa=Object(r["h"])("option",null,"Coupe",-1),xa=Object(r["h"])("option",null,"Sports Car",-1),Pa=Object(r["h"])("option",null,"Hatchback",-1),Ua=Object(r["h"])("option",null,"Convertible",-1),Ta=Object(r["h"])("option",null,"Station Wagon",-1),Fa=Object(r["h"])("option",null,"Minivan",-1),Ea=Object(r["h"])("option",null,"Pickup Truck",-1),qa={class:"form-field"},Ia=Object(r["h"])("label",{for:"transmission"},"Transmission",-1),Ma=Object(r["h"])("option",null,"Automatic",-1),Ra=Object(r["h"])("option",null,"Manual",-1),Da=Object(r["h"])("option",null,"Semi-Automatic",-1),Na=Object(r["h"])("option",null,"Dual-Clutch",-1),Va=Object(r["h"])("option",null,"Continuously Variable",-1),za={class:"form-field"},La=Object(r["h"])("label",{for:"description"},"Description",-1),Ba={class:"form-field"},Ha=Object(r["h"])("div",{class:"form-field"},[Object(r["h"])("button",{type:"submit",id:"new-car-btn"},"Register")],-1);Object(r["r"])();var Ja=sa((function(e,t,a,n,c,o){return Object(r["q"])(),Object(r["d"])("section",la,[Object(r["h"])("form",{onSubmit:t[10]||(t[10]=Object(r["G"])((function(){return o.handleSubmit&&o.handleSubmit.apply(o,arguments)}),["prevent"])),method:"POST",enctype:"multipart/form-data",id:"new-car-form"},[Object(r["h"])("article",ua,[Object(r["h"])("div",da,[ba,Object(r["F"])(Object(r["h"])("input",{id:"make",type:"text",name:"make",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.make=e})},null,512),[[r["C"],c.make]])]),Object(r["h"])("div",pa,[ha,Object(r["F"])(Object(r["h"])("input",{id:"model",type:"text",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.model=e})},null,512),[[r["C"],c.model]])])]),Object(r["h"])("article",fa,[Object(r["h"])("div",Oa,[ja,Object(r["F"])(Object(r["h"])("input",{id:"colour",type:"text",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.colour=e})},null,512),[[r["C"],c.colour]])]),Object(r["h"])("div",ma,[va,Object(r["F"])(Object(r["h"])("input",{id:"year",type:"text",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.year=e}),pattern:"[0-9]{4}"},null,512),[[r["C"],c.year]])])]),Object(r["h"])("article",ga,[Object(r["h"])("div",Aa,[ya,Object(r["F"])(Object(r["h"])("input",{id:"price",type:"number",min:"0.00",step:"0.01",required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.price=e})},null,512),[[r["C"],c.price]]),Object(r["h"])("div",wa,[Ca,Object(r["F"])(Object(r["h"])("select",{id:"car_type",required:"","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.car_type=e})},[ka,_a,Sa,xa,Pa,Ua,Ta,Fa,Ea],512),[[r["B"],c.car_type]])])])]),Object(r["h"])("div",qa,[Ia,Object(r["F"])(Object(r["h"])("select",{id:"transmission",required:"","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.transmission=e})},[Ma,Ra,Da,Na,Va],512),[[r["B"],c.transmission]])]),Object(r["h"])("div",za,[La,Object(r["F"])(Object(r["h"])("textarea",{id:"description",rows:"8",cols:"50",required:"","onUpdate:modelValue":t[8]||(t[8]=function(e){return c.description=e})},null,512),[[r["C"],c.description]])]),Object(r["h"])("div",Ba,[Object(r["h"])("input",{type:"file",name:"photo",ref:"photo",accept:"image/*",onChange:t[9]||(t[9]=function(e){return o.handleFileUpload()})},null,544)]),Ha],32)])})),Ya=a("b85c"),Qa=a("5530"),Ga="http://localhost:9090/api";function Xa(e){return Ka.apply(this,arguments)}function Ka(){return Ka=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=j(),e.next=3,fetch("".concat(Ga,"/cars"),{headers:Object(Qa["a"])({Accept:"application/json","Content-Type":"multipart/form-data"},a),body:t}).then((function(e){return 201!=e.status?e.json():null})).catch((function(e){return console.log(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),Ka.apply(this,arguments)}var Wa={name:"NewCarForm",data:function(){return{make:"",model:"",colour:"",year:"",price:0,car_type:"",transmission:"",description:"",photo:""}},methods:{handleFileUpload:function(){this.photo=this.$refs.photo.files[0]},handleSubmit:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function a(){var r,n,c,o,i,s,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(c in e.preventDefault(),r={make:t.make,model:t.model,colour:t.colour,year:t.year,price:t.price,car_type:t.car_type,transmission:t.transmission,description:t.description,photo:t.photo},n=new FormData,r)n.append(c,r[c]);o=Object(Ya["a"])(n.values());try{for(o.s();!(i=o.n()).done;)s=i.value,console.log(s)}catch(u){o.e(u)}finally{o.f()}return a.next=8,Xa(n);case 8:l=a.sent,l.error&&(console.log(l.error),t.error=l.error);case 10:case"end":return a.stop()}}),a)})))()}}};a("92cb");Wa.render=Ja,Wa.__scopeId="data-v-6064384b";var Za=Wa,$a={components:{NewCarForm:Za},name:"AddNewCarPage"};a("a618");$a.render=ia,$a.__scopeId="data-v-39fc51af";var er=$a,tr=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",name:"LoginPage",component:$,meta:{guest:!0}},{path:"/register",name:"RegistrationPage",component:_e,meta:{guest:!0}},{path:"/explore",name:"ExplorePage",component:et,meta:{requiresAuth:!0}},{path:"/cars/:id",name:"CarPage",component:_t,meta:{requiresAuth:!0}},{path:"/users/:id",name:"UserPage",component:ra,meta:{requiresAuth:!0}},{path:"/cars/new",name:"AddNewCarPage",component:er,meta:{requiresAuth:!0}}],ar=Object(g["a"])({history:Object(g["b"])("/"),routes:tr});ar.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))&&null==localStorage.getItem("jwt")?a({path:"/login",params:{nextUrl:e.fullPath}}):a()}));var rr=ar;B.a.defaults.baseURL=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_BASE_URL,Object(r["c"])(v).use(rr).mount("#app")},5951:function(e,t,a){},"59df":function(e,t,a){"use strict";a("fe31")},"622a":function(e,t,a){},"62f6":function(e,t,a){"use strict";a("2ca0")},"8a1c":function(e,t,a){},"92cb":function(e,t,a){"use strict";a("e7cd")},9525:function(e,t,a){"use strict";a("9916")},9916:function(e,t,a){},"9f67":function(e,t,a){},a143:function(e,t,a){e.exports=a.p+"img/heart-filled.7058c46c.svg"},a618:function(e,t,a){"use strict";a("622a")},a675:function(e,t,a){"use strict";a("b279")},aba8:function(e,t,a){"use strict";a("c387")},b279:function(e,t,a){},b7bb:function(e,t,a){"use strict";a("1cc4")},c013:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAA0UlEQVRIx+1SOwoCMRScJ5brBQQrEcTOO3ieBS1dwc+57LTRxsLPBQQPsYVjEySsSfZlVSzWaUJg3ryZSYA/6gmSK5I59chJLl1a4hBvA7gCWAM4KD0NAYwAdETkVuZ+YlwNIhL3zcxYQ96TPFWo9UxyV0bqkryTnFdYsDApeiHSLLYeR01ZiHSM+Dk+XGxNKSxgrHMXROSp2/BwpgASAJlCT8+1Yibm3lJU8sK1NX0JUjOYKhIEuT97g4/h6wuampga+OotJtiac1PB7DuzdcYD2c0ozxkfjCoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjZUMDA6NDY6NTArMDA6MDCAVvtSAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI2VDAwOjQ2OjUwKzAwOjAw8QtD7gAAAABJRU5ErkJggg=="},c387:function(e,t,a){},e7cd:function(e,t,a){},f42a:function(e,t,a){"use strict";a("8a1c")},fb3f:function(e,t,a){},fbe8:function(e,t,a){e.exports=a.p+"img/heart.bbbdb05a.svg"},fe31:function(e,t,a){}});
//# sourceMappingURL=app.dba679df.js.map