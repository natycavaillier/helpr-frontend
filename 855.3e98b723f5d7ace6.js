"use strict";(self.webpackChunkhelpr=self.webpackChunkhelpr||[]).push([[855],{9855:(b,Z,r)=>{r.r(Z),r.d(Z,{ChamadosModule:()=>xt});var s=r(9808),l=r(1083),u=r(515),t=r(5e3),p=r(5926),c=r(520);let h=(()=>{class e{constructor(a){this.http=a,this.chamadosUrl=`${p.H.baseUrl.prod}/service/chamados`}findAll(){return this.http.get(this.chamadosUrl)}findById(a){return this.http.get(`${this.chamadosUrl}/${a}`)}create(a){return this.http.post(this.chamadosUrl,a)}update(a){return this.http.put(`${this.chamadosUrl}/${a.id}`,a)}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(c.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var _=r(7423),v=r(5245),f=r(8279),A=(()=>{return(e=A||(A={}))[e.ABERTO=0]="ABERTO",e[e.ANDAMENTO=1]="ANDAMENTO",e[e.ENCERRADO=2]="ENCERRADO",A;var e})(),T=(()=>{return(e=T||(T={}))[e.BAIXA=0]="BAIXA",e[e.MEDIA=1]="MEDIA",e[e.ALTA=2]="ALTA",T;var e})();let E=(()=>{class e{constructor(){this.statusLabel="",this.statusClass=""}ngOnInit(){switch(this.status){case A.ABERTO:this.statusLabel="Aberto",this.statusClass="baixa";break;case A.ANDAMENTO:this.statusLabel="Andamento",this.statusClass="media";break;case A.ENCERRADO:this.statusLabel="Fechado",this.statusClass="alta"}}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-status-chip"]],inputs:{status:"status"},decls:2,vars:2,consts:[[1,"chip",3,"ngClass"]],template:function(a,n){1&a&&(t.TgZ(0,"span",0),t._uU(1),t.qZA()),2&a&&(t.Q6J("ngClass",n.statusClass),t.xp6(1),t.hij(" ",n.statusLabel,"\n"))},directives:[s.mk],styles:[".chip[_ngcontent-%COMP%]{padding:2px 16px;background-color:#9e9e9e;border-radius:16px}.baixa[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.media[_ngcontent-%COMP%]{background-color:#ffeb3b;color:#000}.alta[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}"]}),e})(),O=(()=>{class e{constructor(){this.prioridadeLabel="",this.prioridadeClass=""}ngOnInit(){switch(this.prioridade){case T.BAIXA:this.prioridadeLabel="Baixa",this.prioridadeClass="baixa";break;case T.MEDIA:this.prioridadeLabel="M\xe9dia",this.prioridadeClass="media";break;case T.ALTA:this.prioridadeLabel="Alta",this.prioridadeClass="alta"}}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-prioridade-chip"]],inputs:{prioridade:"prioridade"},decls:2,vars:2,consts:[[1,"chip",3,"ngClass"]],template:function(a,n){1&a&&(t.TgZ(0,"span",0),t._uU(1),t.qZA()),2&a&&(t.Q6J("ngClass",n.prioridadeClass),t.xp6(1),t.hij(" ",n.prioridadeLabel,"\n"))},directives:[s.mk],styles:[".chip[_ngcontent-%COMP%]{padding:2px 16px;background-color:#dcdcdc;border-radius:16px}.baixa[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.media[_ngcontent-%COMP%]{background-color:#ffeb3b;color:#000}.alta[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}"]}),e})();var Q=r(7238),x=r(605);function Y(e,o){1&e&&(t.TgZ(0,"th",16),t._uU(1,"#"),t.qZA())}function F(e,o){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.id)}}function S(e,o){1&e&&(t.TgZ(0,"th",16),t._uU(1,"T\xedtulo"),t.qZA())}function L(e,o){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.titulo)}}function R(e,o){1&e&&(t.TgZ(0,"th",16),t._uU(1,"Status"),t.qZA())}function $(e,o){if(1&e&&(t.TgZ(0,"td",17),t._UZ(1,"app-status-chip",18),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Q6J("status",a.status)}}function B(e,o){1&e&&(t.TgZ(0,"th",16),t._uU(1,"Prioridade"),t.qZA())}function P(e,o){if(1&e&&(t.TgZ(0,"td",17),t._UZ(1,"app-prioridade-chip",19),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Q6J("prioridade",a.prioridade)}}function w(e,o){1&e&&(t.TgZ(0,"th",16),t._uU(1,"Observa\xe7\xf5es"),t.qZA())}function k(e,o){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.observacoes)}}function j(e,o){1&e&&(t.TgZ(0,"th",16),t._uU(1,"A\xe7\xf5es"),t.qZA())}function X(e,o){if(1&e&&(t.TgZ(0,"td",17)(1,"a",20)(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"a",21)(5,"mat-icon"),t._uU(6,"visibility_on"),t.qZA()()()),2&e){const a=o.$implicit;t.xp6(1),t.MGl("routerLink","edit/",a.id,""),t.xp6(3),t.s9C("routerLink",a.id)}}function z(e,o){1&e&&t._UZ(0,"tr",22)}function W(e,o){1&e&&t._UZ(0,"tr",23)}function H(e,o){if(1&e&&(t.TgZ(0,"div",2)(1,"h2"),t._uU(2,"Lista de chamados"),t.qZA(),t.TgZ(3,"a",3)(4,"mat-icon"),t._uU(5,"add"),t.qZA(),t._uU(6," Novo chamado "),t.qZA(),t.TgZ(7,"div",4)(8,"table",5),t.ynx(9,6),t.YNc(10,Y,2,0,"th",7),t.YNc(11,F,2,1,"td",8),t.BQk(),t.ynx(12,9),t.YNc(13,S,2,0,"th",7),t.YNc(14,L,2,1,"td",8),t.BQk(),t.ynx(15,10),t.YNc(16,R,2,0,"th",7),t.YNc(17,$,2,1,"td",8),t.BQk(),t.ynx(18,11),t.YNc(19,B,2,0,"th",7),t.YNc(20,P,2,1,"td",8),t.BQk(),t.ynx(21,12),t.YNc(22,w,2,0,"th",7),t.YNc(23,k,2,1,"td",8),t.BQk(),t.ynx(24,13),t.YNc(25,j,2,0,"th",7),t.YNc(26,X,7,2,"td",8),t.BQk(),t.YNc(27,z,1,0,"tr",14),t.YNc(28,W,1,0,"tr",15),t.qZA()()()),2&e){const a=o.ngIf,n=t.oxw();t.xp6(8),t.Q6J("dataSource",a),t.xp6(19),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns)}}function K(e,o){1&e&&t._UZ(0,"app-loader",24)}let G=(()=>{class e{constructor(a){this.chamadosService=a,this.chamados$=u.E,this.displayedColumns=["id","titulo","status","prioridade","observacoes","acoes"]}ngOnInit(){this.chamados$=this.chamadosService.findAll()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chamados"]],decls:4,vars:4,consts:[["class","mat-elevation-z8",4,"ngIf","ngIfElse"],["loading",""],[1,"mat-elevation-z8"],["mat-raised-button","","color","accent","routerLink","new"],[1,"table-wrapper"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","titulo"],["matColumnDef","status"],["matColumnDef","prioridade"],["matColumnDef","observacoes"],["matColumnDef","acoes"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"status"],[3,"prioridade"],["mat-icon-button","","color","primary","matTooltip","Editar chamado",3,"routerLink"],["mat-icon-button","","color","accent","matTooltip","Visualizar",3,"routerLink"],["mat-header-row",""],["mat-row",""],["label","Carregando chamados..."]],template:function(a,n){if(1&a&&(t.YNc(0,H,29,3,"div",0),t.ALo(1,"async"),t.YNc(2,K,1,0,"ng-template",null,1,t.W1O)),2&a){const m=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,n.chamados$))("ngIfElse",m)}},directives:[s.O5,_.zs,l.yS,v.Hw,f.BZ,f.w1,f.fO,f.ge,f.Dz,f.ev,E,O,Q.gM,f.as,f.XQ,f.nj,f.Gk,x.R],pipes:[s.Ov],styles:[""]}),e})();var i=r(3075),I=r(3404),N=r(3038),M=r(6850),g=r(7322),D=r(7531),J=r(4107),y=r(508);function V(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo obrigat\xf3rio"),t.qZA())}function tt(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo obrigat\xf3rio"),t.qZA())}function et(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo obrigat\xf3rio"),t.qZA())}function at(e,o){if(1&e&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a.id),t.xp6(1),t.Oqu(a.nome)}}function ot(e,o){if(1&e&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a.id),t.xp6(1),t.hij("",a.nome," ")}}let nt=(()=>{class e{constructor(a,n,m,d,C,q){this.chamadosService=a,this.clientesService=n,this.tecnicosService=m,this.fb=d,this.toast=C,this.router=q,this.clientes$=u.E,this.tecnicos$=u.E,this.chamadoForm=this.fb.group({prioridade:[null,[i.kI.required]],status:[null,[i.kI.required]],titulo:[null,[i.kI.required]],observacoes:[null,[i.kI.required]],tecnico:[null,[i.kI.required]],cliente:[null,[i.kI.required]]})}onSubmit(){const a=this.toast.loading("Adicionando chamado...");this.chamadosService.create(this.chamadoForm.value).subscribe({next:()=>{a.close(),this.toast.success("Chamado adicionado"),this.router.navigate(["chamados"])},error:n=>{var m;return 403===(console.log(n),a.close(),n.status)?this.toast.error("A\xe7\xe3o n\xe3o permitida"):this.toast.error(`Um erro aconteceu: ${null!==(m=n.error.message)&&void 0!==m?m:""}`)}})}ngOnInit(){this.clientes$=this.clientesService.findAll(),this.tecnicos$=this.tecnicosService.findAll()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(h),t.Y36(I.Y),t.Y36(N.y),t.Y36(i.qu),t.Y36(M.jE),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chamado-create"]],decls:61,vars:17,consts:[[1,"form-wrapper"],[3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","placeholder","T\xedtulo do chamado","formControlName","titulo","required",""],[4,"ngIf"],["matPrefix",""],["name","status","formControlName","status","required",""],[3,"value"],["name","status","formControlName","prioridade","required",""],["appearance","fill",1,"full-width"],["name","tecnico","formControlName","tecnico","required",""],[3,"value",4,"ngFor","ngForOf"],["name","cliente","formControlName","cliente","required",""],["name","observacoes","formControlName","observacoes","required","","matInput","","placeholder","Ex. trocar bateria de notebook queimada...",1,"observacoes"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(2,"h2"),t._uU(3,"Novo chamado"),t.qZA(),t.TgZ(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"T\xedtulo"),t.qZA(),t._UZ(7,"input",3),t.YNc(8,V,2,0,"mat-error",4),t.TgZ(9,"mat-icon",5),t._uU(10,"assignment"),t.qZA()(),t.TgZ(11,"mat-form-field",2)(12,"mat-label"),t._uU(13,"Selecione um status"),t.qZA(),t.TgZ(14,"mat-select",6)(15,"mat-option",7),t._uU(16,"ABERTO"),t.qZA(),t.TgZ(17,"mat-option",7),t._uU(18,"EM ANDAMENTO"),t.qZA(),t.TgZ(19,"mat-option",7),t._uU(20,"ENCERRADO"),t.qZA()(),t.YNc(21,tt,2,0,"mat-error",4),t.TgZ(22,"mat-icon",5),t._uU(23,"check_circle"),t.qZA()(),t.TgZ(24,"mat-form-field",2)(25,"mat-label"),t._uU(26,"Selecione a prioridade"),t.qZA(),t.TgZ(27,"mat-select",8)(28,"mat-option",7),t._uU(29,"BAIXA"),t.qZA(),t.TgZ(30,"mat-option",7),t._uU(31,"M\xc9DIA"),t.qZA(),t.TgZ(32,"mat-option",7),t._uU(33,"ALTA"),t.qZA()(),t.TgZ(34,"mat-icon",5),t._uU(35,"check_circle"),t.qZA(),t.YNc(36,et,2,0,"mat-error",4),t.qZA(),t.TgZ(37,"mat-form-field",9)(38,"mat-label"),t._uU(39,"Selecione um t\xe9cnico"),t.qZA(),t.TgZ(40,"mat-select",10),t.YNc(41,at,2,2,"mat-option",11),t.ALo(42,"async"),t.qZA(),t.TgZ(43,"mat-icon",5),t._uU(44,"engineering"),t.qZA()(),t.TgZ(45,"mat-form-field",9)(46,"mat-label"),t._uU(47,"Selecione um cliente"),t.qZA(),t.TgZ(48,"mat-select",12),t.YNc(49,ot,2,2,"mat-option",11),t.ALo(50,"async"),t.qZA(),t.TgZ(51,"mat-icon",5),t._uU(52,"people"),t.qZA()(),t.TgZ(53,"mat-form-field",9)(54,"mat-label"),t._uU(55,"Deixe uma observa\xe7\xe3o"),t.qZA(),t._UZ(56,"textarea",13),t.TgZ(57,"mat-icon",5),t._uU(58,"assignment"),t.qZA()(),t.TgZ(59,"button",14),t._uU(60," Criar "),t.qZA()()()),2&a){let m,d,C;t.xp6(1),t.Q6J("formGroup",n.chamadoForm),t.xp6(7),t.Q6J("ngIf",null==(m=n.chamadoForm.get("titulo"))||null==m.errors?null:m.errors.required),t.xp6(7),t.Q6J("value",0),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",2),t.xp6(2),t.Q6J("ngIf",null==(d=n.chamadoForm.get("status"))||null==d.errors?null:d.errors.required),t.xp6(7),t.Q6J("value",0),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",2),t.xp6(4),t.Q6J("ngIf",null==(C=n.chamadoForm.get("prioridade"))||null==C.errors?null:C.errors.required),t.xp6(5),t.Q6J("ngForOf",t.lcZ(42,13,n.tecnicos$)),t.xp6(8),t.Q6J("ngForOf",t.lcZ(50,15,n.clientes$)),t.xp6(10),t.Q6J("disabled",n.chamadoForm.invalid)}},directives:[i._Y,i.JL,i.sg,g.KE,g.hX,D.Nt,i.Fj,i.JJ,i.u,i.Q7,s.O5,g.TO,v.Hw,g.qo,J.gD,y.ey,s.sg,_.lW],pipes:[s.Ov],styles:[""]}),e})();var U=r(9224);function rt(e,o){if(1&e&&(t.TgZ(0,"p")(1,"b"),t._uU(2,"Fechou em:"),t.qZA(),t._uU(3),t.qZA()),2&e){const a=t.oxw(2);t.xp6(3),t.hij(" ",a.chamado.dataFechamento," ")}}function it(e,o){if(1&e&&(t.TgZ(0,"div")(1,"mat-card",2)(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-content")(7,"p")(8,"b"),t._uU(9,"Observa\xe7\xf5es:"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"p")(12,"b"),t._uU(13,"T\xe9cnico:"),t.qZA(),t._uU(14),t.qZA(),t.YNc(15,rt,4,1,"p",3),t.TgZ(16,"p")(17,"b"),t._uU(18,"Prioridade:"),t.qZA(),t._UZ(19,"app-prioridade-chip",4),t.qZA(),t.TgZ(20,"p")(21,"b"),t._uU(22,"Status:"),t.qZA(),t._UZ(23,"app-status-chip",5),t.qZA()()()()),2&e){const a=t.oxw();t.xp6(3),t.AsE("#",a.chamado.id," ",a.chamado.titulo,""),t.xp6(2),t.AsE(" ",a.chamado.nomeCliente," | ",a.chamado.dataAbertura," "),t.xp6(5),t.hij(" ",a.chamado.observacoes,""),t.xp6(4),t.hij(" ",a.chamado.nomeTecnico,""),t.xp6(1),t.Q6J("ngIf",a.chamado.dataFechamento),t.xp6(4),t.Q6J("prioridade",a.chamado.prioridade),t.xp6(4),t.Q6J("status",a.chamado.status)}}function st(e,o){1&e&&t._UZ(0,"app-loader",7)}function mt(e,o){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e){const a=t.oxw(2);t.xp6(1),t.Oqu(a.errorMsg)}}function ct(e,o){if(1&e&&(t.YNc(0,st,1,0,"app-loader",6),t.YNc(1,mt,2,1,"p",3)),2&e){const a=t.oxw();t.Q6J("ngIf",a.loading),t.xp6(1),t.Q6J("ngIf",a.error)}}function dt(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo obrigat\xf3rio"),t.qZA())}function ut(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo obrigat\xf3rio"),t.qZA())}function pt(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo obrigat\xf3rio"),t.qZA())}function ht(e,o){if(1&e&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a.id),t.xp6(1),t.Oqu(a.nome)}}function _t(e,o){if(1&e&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a.id),t.xp6(1),t.hij("",a.nome," ")}}function ft(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"div",2)(1,"form",3),t.NdJ("ngSubmit",function(){return t.CHM(a),t.oxw().onSubmit()}),t.TgZ(2,"h2"),t._uU(3,"Editar chamado"),t.qZA(),t.TgZ(4,"mat-form-field",4)(5,"mat-label"),t._uU(6,"T\xedtulo"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,dt,2,0,"mat-error",6),t.TgZ(9,"mat-icon",7),t._uU(10,"assignment"),t.qZA()(),t.TgZ(11,"mat-form-field",4)(12,"mat-label"),t._uU(13,"Selecione um status"),t.qZA(),t.TgZ(14,"mat-select",8)(15,"mat-option",9),t._uU(16,"ABERTO"),t.qZA(),t.TgZ(17,"mat-option",9),t._uU(18,"EM ANDAMENTO"),t.qZA(),t.TgZ(19,"mat-option",9),t._uU(20,"ENCERRADO"),t.qZA()(),t.YNc(21,ut,2,0,"mat-error",6),t.TgZ(22,"mat-icon",7),t._uU(23,"check_circle"),t.qZA()(),t.TgZ(24,"mat-form-field",4)(25,"mat-label"),t._uU(26,"Selecione a prioridade"),t.qZA(),t.TgZ(27,"mat-select",10)(28,"mat-option",9),t._uU(29,"BAIXA"),t.qZA(),t.TgZ(30,"mat-option",9),t._uU(31,"M\xc9DIA"),t.qZA(),t.TgZ(32,"mat-option",9),t._uU(33,"ALTA"),t.qZA()(),t.TgZ(34,"mat-icon",7),t._uU(35,"check_circle"),t.qZA(),t.YNc(36,pt,2,0,"mat-error",6),t.qZA(),t.TgZ(37,"mat-form-field",11)(38,"mat-label"),t._uU(39,"Selecione um t\xe9cnico"),t.qZA(),t.TgZ(40,"mat-select",12),t.YNc(41,ht,2,2,"mat-option",13),t.ALo(42,"async"),t.qZA(),t.TgZ(43,"mat-icon",7),t._uU(44,"engineering"),t.qZA()(),t.TgZ(45,"mat-form-field",11)(46,"mat-label"),t._uU(47,"Selecione um cliente"),t.qZA(),t.TgZ(48,"mat-select",14),t.YNc(49,_t,2,2,"mat-option",13),t.ALo(50,"async"),t.qZA(),t.TgZ(51,"mat-icon",7),t._uU(52,"people"),t.qZA()(),t.TgZ(53,"mat-form-field",11)(54,"mat-label"),t._uU(55,"Deixe uma observa\xe7\xe3o"),t.qZA(),t._UZ(56,"textarea",15),t.TgZ(57,"mat-icon",7),t._uU(58,"assignment"),t.qZA()(),t.TgZ(59,"button",16),t._uU(60," Editar "),t.qZA()()()}if(2&e){const a=t.oxw();let n,m,d;t.xp6(1),t.Q6J("formGroup",a.chamadoForm),t.xp6(7),t.Q6J("ngIf",null==(n=a.chamadoForm.get("titulo"))||null==n.errors?null:n.errors.required),t.xp6(7),t.Q6J("value",0),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",2),t.xp6(2),t.Q6J("ngIf",null==(m=a.chamadoForm.get("status"))||null==m.errors?null:m.errors.required),t.xp6(7),t.Q6J("value",0),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",2),t.xp6(4),t.Q6J("ngIf",null==(d=a.chamadoForm.get("prioridade"))||null==d.errors?null:d.errors.required),t.xp6(5),t.Q6J("ngForOf",t.lcZ(42,13,a.tecnicos$)),t.xp6(8),t.Q6J("ngForOf",t.lcZ(50,15,a.clientes$)),t.xp6(10),t.Q6J("disabled",a.chamadoForm.invalid)}}function gt(e,o){1&e&&t._UZ(0,"app-loader",18)}function Ct(e,o){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e){const a=t.oxw(2);t.xp6(1),t.Oqu(a.errorMsg)}}function Zt(e,o){if(1&e&&(t.YNc(0,gt,1,0,"app-loader",17),t.YNc(1,Ct,2,1,"p",6)),2&e){const a=t.oxw();t.Q6J("ngIf",a.loading),t.xp6(1),t.Q6J("ngIf",a.error)}}const At=[{path:"",component:G},{path:"new",component:nt},{path:":id",component:(()=>{class e{constructor(a,n){this.chamadosService=a,this.route=n,this.errorMsg="",this.error=!1,this.loading=!0,this.chamado={}}ngOnInit(){this.chamadosService.findById(this.route.snapshot.params.id).subscribe({next:n=>{this.chamado=n,this.loading=!1},error:n=>{this.errorMsg=n.error.message,this.errorMsg||(this.errorMsg="Um erro aconteceu"),this.error=!0,this.loading=!1}})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(h),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chamado-detail"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingOrError",""],[1,"example-card"],[4,"ngIf"],[3,"prioridade"],[3,"status"],["label","Carregando chamado...",4,"ngIf"],["label","Carregando chamado..."]],template:function(a,n){if(1&a&&(t.YNc(0,it,24,9,"div",0),t.YNc(1,ct,2,2,"ng-template",null,1,t.W1O)),2&a){const m=t.MAs(2);t.Q6J("ngIf",!n.loading&&!n.error)("ngIfElse",m)}},directives:[s.O5,U.a8,U.n5,U.$j,U.dn,O,E,x.R],styles:[""]}),e})()},{path:"edit/:id",component:(()=>{class e{constructor(a,n,m,d,C,q,qt){this.clientesService=a,this.tecnicosService=n,this.chamadosService=m,this.toast=d,this.router=C,this.route=q,this.fb=qt,this.clientes$=u.E,this.tecnicos$=u.E,this.errorMsg="",this.error=!1,this.loading=!0,this.chamadoForm=this.fb.group({id:[null],prioridade:[null,[i.kI.required]],status:[null,[i.kI.required]],titulo:[null,[i.kI.required]],observacoes:[null,[i.kI.required]],tecnico:[null,[i.kI.required]],cliente:[null,[i.kI.required]]})}onSubmit(){const a=this.toast.loading("Atualizando chamado...");this.chamadosService.update(this.chamadoForm.value).subscribe({next:()=>{a.close(),this.toast.success("Chamado atualizado!"),this.router.navigate(["chamados"])},error:n=>{var m;return 403===(a.close(),n.status)?this.toast.error("A\xe7\xe3o n\xe3o permitida"):this.toast.error(`Um erro aconteceu: ${null!==(m=n.error.message)&&void 0!==m?m:""}`)}})}ngOnInit(){this.clientes$=this.clientesService.findAll(),this.tecnicos$=this.tecnicosService.findAll(),this.chamadosService.findById(this.route.snapshot.params.id).subscribe({next:n=>{this.chamadoForm.patchValue(n),this.loading=!1},error:n=>{this.errorMsg=n.error.message,this.errorMsg||(this.errorMsg="Um erro aconteceu"),this.error=!0,this.loading=!1}})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(I.Y),t.Y36(N.y),t.Y36(h),t.Y36(M.jE),t.Y36(l.F0),t.Y36(l.gz),t.Y36(i.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chamado-update"]],decls:3,vars:2,consts:[["class","form-wrapper",4,"ngIf","ngIfElse"],["loadingOrError",""],[1,"form-wrapper"],[3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","placeholder","T\xedtulo do chamado","formControlName","titulo","required",""],[4,"ngIf"],["matPrefix",""],["name","status","formControlName","status","required",""],[3,"value"],["name","status","formControlName","prioridade","required",""],["appearance","fill",1,"full-width"],["name","tecnico","formControlName","tecnico","required",""],[3,"value",4,"ngFor","ngForOf"],["name","cliente","formControlName","cliente","required",""],["name","observacoes","formControlName","observacoes","required","","matInput","","placeholder","Ex. trocar bateria de notebook queimada...",1,"observacoes"],["mat-raised-button","","color","primary",3,"disabled"],["label","Carregando registro de chamado...",4,"ngIf"],["label","Carregando registro de chamado..."]],template:function(a,n){if(1&a&&(t.YNc(0,ft,61,17,"div",0),t.YNc(1,Zt,2,2,"ng-template",null,1,t.W1O)),2&a){const m=t.MAs(2);t.Q6J("ngIf",!n.loading&&!n.error)("ngIfElse",m)}},directives:[s.O5,i._Y,i.JL,i.sg,g.KE,g.hX,D.Nt,i.Fj,i.JJ,i.u,i.Q7,g.TO,v.Hw,g.qo,J.gD,y.ey,s.sg,_.lW,x.R],pipes:[s.Ov],styles:[""]}),e})()}];let Tt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(At)],l.Bz]}),e})();var vt=r(8504),Ut=r(4466);let xt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,Tt,vt.q,i.UX,Ut.m]]}),e})()},605:(b,Z,r)=>{r.d(Z,{R:()=>p});var s=r(5e3),l=r(773),u=r(9808);function t(c,h){if(1&c&&(s.TgZ(0,"h3"),s._uU(1),s.qZA()),2&c){const _=s.oxw();s.xp6(1),s.Oqu(_.label)}}let p=(()=>{class c{constructor(){this.label=""}ngOnInit(){}}return c.\u0275fac=function(_){return new(_||c)},c.\u0275cmp=s.Xpm({type:c,selectors:[["app-loader"]],inputs:{label:"label"},decls:3,vars:1,consts:[[1,"loader-wrapper"],["color","accent"],[4,"ngIf"]],template:function(_,v){1&_&&(s.TgZ(0,"div",0),s._UZ(1,"mat-spinner",1),s.YNc(2,t,2,1,"h3",2),s.qZA()),2&_&&(s.xp6(2),s.Q6J("ngIf",v.label))},directives:[l.Ou,u.O5],styles:[".loader-wrapper[_ngcontent-%COMP%]{display:flex;height:calc(100vh - 64px);flex-direction:column;align-items:center;justify-content:center}"]}),c})()},4466:(b,Z,r)=>{r.d(Z,{m:()=>t});var s=r(9808),l=r(8504),u=r(5e3);let t=(()=>{class p{}return p.\u0275fac=function(h){return new(h||p)},p.\u0275mod=u.oAB({type:p}),p.\u0275inj=u.cJS({imports:[[s.ez,l.q]]}),p})()}}]);