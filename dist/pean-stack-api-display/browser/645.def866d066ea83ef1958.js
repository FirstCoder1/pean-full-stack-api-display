(self.webpackChunkpean_stack_api_display=self.webpackChunkpean_stack_api_display||[]).push([[645],{645:(t,e,n)=>{"use strict";n.r(e),n.d(e,{GithubReposModule:()=>f});var i=n(8583),a=n(9798),s=n(8720),c=n(7357),o=n(3971);function r(t,e){if(1&t&&(s.TgZ(0,"p",12),s.TgZ(1,"span",14),s._uU(2,"Language:"),s.qZA(),s._uU(3),s.qZA()),2&t){const t=s.oxw(2).$implicit;s.xp6(3),s.hij("",t.language," ")}}function p(t,e){1&t&&(s.TgZ(0,"p",12),s.TgZ(1,"span",13),s._uU(2,"Languages:"),s.qZA(),s._uU(3,"None "),s.qZA())}function u(t,e){if(1&t&&(s.TgZ(0,"div",8),s.TgZ(1,"div",9),s.TgZ(2,"h6",10),s._uU(3),s.qZA(),s.qZA(),s.TgZ(4,"div",11),s.TgZ(5,"p",12),s.TgZ(6,"span",13),s._uU(7,"Description:"),s.qZA(),s._uU(8),s.qZA(),s.TgZ(9,"p",12),s.TgZ(10,"span",14),s._uU(11,"Updated:"),s.qZA(),s._uU(12),s.ALo(13,"dateConvert"),s.qZA(),s.YNc(14,r,4,1,"p",15),s.YNc(15,p,4,0,"p",15),s.qZA(),s.qZA()),2&t){const t=s.oxw().$implicit;s.xp6(3),s.hij(" Name: ",t.name," "),s.xp6(5),s.hij("",t.description," "),s.xp6(4),s.hij("",s.lcZ(13,5,t.updated_at)," "),s.xp6(2),s.Q6J("ngIf",t.language),s.xp6(1),s.Q6J("ngIf",!t.language)}}function d(t,e){if(1&t&&(s.TgZ(0,"div",6),s.YNc(1,u,16,7,"div",7),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.Q6J("ngIf",t)}}const g=[{path:"",component:(()=>{class t{constructor(t,e,n){this.route=t,this.githubService=e,this.location=n}ngOnInit(){this.searchRepos(this.route.snapshot.params.username)}searchRepos(t){this.githubService.getRepos(t).subscribe(t=>{this.repos=t})}returnToUser(){this.location.back()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(a.gz),s.Y36(c.K),s.Y36(i.Ye))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-github-repos"]],decls:8,vars:1,consts:[["name","description","content","Shows repo data from the Github API"],[1,"card","bg-light"],[1,"d-flex","justify-content-around"],[1,"p-2"],[1,"btn","btn-outline-dark",3,"click"],["class","github-card pb-2",4,"ngFor","ngForOf"],[1,"github-card","pb-2"],["class","card rounded",4,"ngIf"],[1,"card","rounded"],[1,"card-header","text-white","backgroundSecondaryBlue"],[1,"card-title","mb-0"],[1,"card-body","pb-0"],[1,"mb-2"],[1,"font-weight-bold","pr-2"],[1,"font-weight-bold","pr-2","mb-2"],["class","mb-2",4,"ngIf"]],template:function(t,e){1&t&&(s.TgZ(0,"head"),s._UZ(1,"meta",0),s.qZA(),s.TgZ(2,"div",1),s.TgZ(3,"div",2),s.TgZ(4,"div",3),s.TgZ(5,"a",4),s.NdJ("click",function(){return e.returnToUser()}),s._uU(6,"Back to List"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(7,d,2,1,"div",5)),2&t&&(s.xp6(7),s.Q6J("ngForOf",e.repos))},directives:[i.sg,i.O5],pipes:[o.n],styles:[".card[_ngcontent-%COMP%]{max-width:800px;margin:auto}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.Bz.forChild(g)],a.Bz]}),t})();var h=n(5503),l=n(6753);let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[c.K],imports:[[i.ez,Z,h.D,l.W]]}),t})()}}]);