(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{euc3:function(t,e,n){"use strict";n.r(e),n.d(e,"NewsModule",function(){return k});var c=n("ofXK"),i=n("tyNb"),r=n("fXoL"),o=n("z6cu"),a=n("IzEk"),s=n("JIr8"),l=n("AytR"),b=n("tk/3");const f=l.a.NYT_NEWS_KEY;let p=(()=>{class t{constructor(t){this.http=t}getNews(){return this.http.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${f}`).pipe(Object(a.a)(1),Object(s.a)(t=>Object(o.a)(t)))}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(b.a))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n("Ap5K");let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-svg-link"]],decls:2,vars:0,consts:[["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","external-link-alt","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"svg-inline--fa","fa-external-link-alt","fa-w-16"],["fill","currentColor","d","M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"]],template:function(t,e){1&t&&(r.Xb(),r.Ob(0,"svg",0),r.Jb(1,"path",1),r.Nb())},styles:["svg[_ngcontent-%COMP%]{width:20px;height:20px;fill:#fff;background:inherit;background-color:inherit;padding-bottom:4px}img[_ngcontent-%COMP%]{width:inherit;height:inherit}"]}),t})();var m=n("AZR4");function u(t,e){if(1&t&&(r.Ob(0,"p",14),r.qc(1),r.Nb()),2&t){const t=r.Yb().$implicit;r.yb(1),r.sc(" ",t.abstract," ")}}function h(t,e){if(1&t&&(r.Ob(0,"p",15),r.Jb(1,"app-svg-calender"),r.qc(2),r.Zb(3,"dateConvert"),r.Nb()),2&t){const t=r.Yb().$implicit;r.yb(2),r.sc(" ",r.ac(3,1,t.created_date)," ")}}function w(t,e){if(1&t&&(r.Ob(0,"p",16),r.Ob(1,"a",17),r.Jb(2,"app-svg-link"),r.qc(3," article"),r.Nb(),r.Nb()),2&t){const t=r.Yb().$implicit;r.yb(1),r.dc("href",t.url,r.mc)}}function v(t,e){if(1&t&&(r.Ob(0,"div",4),r.Ob(1,"div",5),r.Jb(2,"img",6),r.Ob(3,"div",7),r.Ob(4,"h6",8),r.qc(5),r.Nb(),r.oc(6,u,2,1,"p",9),r.Nb(),r.Ob(7,"div",10),r.Ob(8,"div",11),r.oc(9,h,4,3,"p",12),r.oc(10,w,4,1,"p",13),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t){const t=e.$implicit;r.yb(2),r.dc("src",null!=t.multimedia?t.multimedia[2].url:"assets/svgs/nyt.svg",r.mc),r.yb(3),r.sc(" ",t.title," "),r.yb(1),r.cc("ngIf",t.abstract),r.yb(3),r.cc("ngIf",t.created_date),r.yb(1),r.cc("ngIf",t.url)}}const O=[{path:"",component:(()=>{class t{constructor(t){this.newsService=t}ngOnInit(){this.getNytNews()}getNytNews(){this.newsService.getNews().subscribe(t=>{this.mArticles=t.results})}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(p))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-news"]],decls:5,vars:1,consts:[["name","description","content","Shows New York Times News API data"],[1,"main-div"],[1,"row"],["class","col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-4","col-lg-4","col-xl-3","mb-4"],[1,"card","full-height"],["alt","image for news article",1,"card-img-top",3,"src"],[1,"card-body","p-2"],[1,"card-title"],["class","card-text mb-0",4,"ngIf"],[1,"card-footer","p-2","backgroundSecondaryBlue"],[1,"d-flex","justify-content-around"],["class","footer-text",4,"ngIf"],["class","link-text mb-0",4,"ngIf"],[1,"card-text","mb-0"],[1,"footer-text"],[1,"link-text","mb-0"],["target","_blank","rel","noopener noreferrer","alt","link for news article","aria-label","link for news article",1,"text-light",3,"href"]],template:function(t,e){1&t&&(r.Ob(0,"head"),r.Jb(1,"meta",0),r.Nb(),r.Ob(2,"div",1),r.Ob(3,"div",2),r.oc(4,v,11,5,"div",3),r.Nb(),r.Nb()),2&t&&(r.yb(4),r.cc("ngForOf",e.mArticles))},directives:[c.l,c.m,d.a,g],pipes:[m.a],styles:[".main-div[_ngcontent-%COMP%]{justify-content:center;align-items:center;padding:0!important}.card[_ngcontent-%COMP%]{margin:auto}.full-height[_ngcontent-%COMP%]{height:100%}p.card-text[_ngcontent-%COMP%]{font-size:14px;margin-bottom:0!important}p.footer-text[_ngcontent-%COMP%]{font-size:16px;margin-bottom:0!important;color:#fff}.card-title[_ngcontent-%COMP%]{font-weight:700}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({imports:[[i.f.forChild(O)],i.f]}),t})();var N=n("iTUp"),x=n("cp3H");let k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({imports:[[c.b,y,N.a,x.a]]}),t})()}}]);