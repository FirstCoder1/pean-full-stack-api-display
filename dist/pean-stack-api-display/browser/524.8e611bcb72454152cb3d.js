(self.webpackChunkpean_stack_api_display=self.webpackChunkpean_stack_api_display||[]).push([[524],{9524:(e,t,s)=>{"use strict";s.r(t),s.d(t,{NytBestsellersModule:()=>_});var n=s(8583),r=s(9798),o=s(8720),i=s(205),c=s(5257),l=s(5304),a=s(2340),p=s(1841);const d=a.N.NYT_BEST_KEY;let g=(()=>{class e{constructor(e){this.http=e}getBooks(){return this.http.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${d}`).pipe((0,c.q)(1),(0,l.K)(e=>(0,i._)("Problem fetching bestsellers from API, error: ",e)))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(p.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,t){if(1&e&&o._UZ(0,"img",6),2&e){const e=o.oxw();o.Q6J("src",e.bestseller.books[0].book_image,o.LSH)}}let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-bestseller-item"]],inputs:{bestseller:"bestseller"},decls:7,vars:2,consts:[[1,"card","rounded"],[1,"card-header"],[1,"category-text"],[1,"fas","fa-clipboard-list","text-info"],[1,"card-body","p-0","text-center"],["class","text-center","style","width: 100%; height: 242px","alt","bestseller logo",3,"src",4,"ngIf"],["alt","bestseller logo",1,"text-center",2,"width","100%","height","242px",3,"src"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"p",2),o._UZ(3,"i",3),o._uU(4),o.qZA(),o.qZA(),o.TgZ(5,"div",4),o.YNc(6,m,1,1,"img",5),o.qZA(),o.qZA()),2&e&&(o.xp6(4),o.hij(" ",t.bestseller.list_name," "),o.xp6(2),o.Q6J("ngIf",t.bestseller.books[0].book_image))},directives:[n.O5],styles:[".card[_ngcontent-%COMP%]{align-items:center;min-width:160px;max-width:160px}.card-header[_ngcontent-%COMP%]{padding:8px;height:58.33px;min-width:160px}.card-body[_ngcontent-%COMP%]{height:auto;min-width:160px;max-width:160px;align-items:center;padding:auto;margin:auto}.card[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 16px -2px #00000080}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.category-text[_ngcontent-%COMP%]{font-size:14px;margin:0;color:#0d47a1}"]}),e})();function h(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",4),o.TgZ(1,"app-bestseller-item",5),o.NdJ("click",function(){const t=o.CHM(e).$implicit;return o.oxw().onGoToBestsellerDetail(t)}),o.qZA(),o.qZA()}if(2&e){const e=t.$implicit;o.xp6(1),o.Q6J("bestseller",e)}}const b=[{path:"",component:(()=>{class e{constructor(e,t){this.nytBestsellersService=e,this.router=t}ngOnInit(){this.getBestsellers()}getBestsellers(){this.nytBestsellersService.getBooks().subscribe(e=>{this.bestsellerLists=e.results.lists})}onGoToBestsellerDetail(e){this.router.navigate(["/bestseller-detail"],{state:{bestseller:e}})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(g),o.Y36(r.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-nyt-bestsellers"]],decls:6,vars:1,consts:[["name","description","content","Shows data from the New York Times Bestsellers API"],[1,"main"],[1,"row"],["class","bestseller-card align-center col-lg-2 col-md-4 col-sm-4 col-xs-6 pb-3",4,"ngFor","ngForOf"],[1,"bestseller-card","align-center","col-lg-2","col-md-4","col-sm-4","col-xs-6","pb-3"],[3,"bestseller","click"]],template:function(e,t){1&e&&(o.TgZ(0,"head"),o._UZ(1,"meta",0),o.qZA(),o.TgZ(2,"body"),o.TgZ(3,"div",1),o.TgZ(4,"div",2),o.YNc(5,h,2,1,"div",3),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(5),o.Q6J("ngForOf",t.bestsellerLists))},directives:[n.sg,u],styles:[".main[_ngcontent-%COMP%]{justify-content:center;align-items:center}.bestseller-card[_ngcontent-%COMP%]{padding:12px auto}.card-text[_ngcontent-%COMP%]{margin:16px 0}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[r.Bz.forChild(b)],r.Bz]}),e})();var x=s(2335);let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez,f,x.J]]}),e})()}}]);