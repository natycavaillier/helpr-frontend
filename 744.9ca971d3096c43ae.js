"use strict";(self.webpackChunkhelpr=self.webpackChunkhelpr||[]).push([[744],{5744:(Ze,A,m)=>{m.r(A),m.d(A,{ClientesModule:()=>he});var g=m(9808),_=m(1083),I=m(515),e=m(5e3),b=m(5926),y=m(520);let h=(()=>{class t{constructor(r){this.http=r,this.clientesUrl=`${b.H.baseUrl.prod}/service/clientes`}findAll(){return this.http.get(this.clientesUrl)}findById(r){return this.http.get(`${this.clientesUrl}/${r}`)}create(r){return this.http.post(this.clientesUrl,r)}update(r){return this.http.put(`${this.clientesUrl}/${r.id}`,r)}delete(r){return this.http.delete(`${this.clientesUrl}/${r}`)}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(y.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Z=m(6850),T=m(7423),U=m(5245),s=m(8279),Y=m(7238),q=m(605);function J(t,n){1&t&&(e.TgZ(0,"th",16),e._uU(1,"#"),e.qZA())}function S(t,n){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.id)}}function Q(t,n){1&t&&(e.TgZ(0,"th",16),e._uU(1,"Nome"),e.qZA())}function E(t,n){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.nome)}}function O(t,n){1&t&&(e.TgZ(0,"th",16),e._uU(1,"Email"),e.qZA())}function k(t,n){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.email)}}function M(t,n){1&t&&(e.TgZ(0,"th",16),e._uU(1,"CPF"),e.qZA())}function D(t,n){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.cpf)}}function $(t,n){1&t&&(e.TgZ(0,"th",16),e._uU(1,"Criado em"),e.qZA())}function w(t,n){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.hij(" ",r.dataCriacao," ")}}function j(t,n){1&t&&(e.TgZ(0,"th",16),e._uU(1,"A\xe7\xf5es"),e.qZA())}function B(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"td",17)(1,"a",18)(2,"mat-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"a",19),e.NdJ("click",function(){const a=e.CHM(r).$implicit;return e.oxw(2).delete(a.id)}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}if(2&t){const r=n.$implicit;e.xp6(1),e.MGl("routerLink","edit/",r.id,"")}}function z(t,n){1&t&&e._UZ(0,"tr",20)}function P(t,n){1&t&&e._UZ(0,"tr",21)}function R(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Lista de clientes"),e.qZA(),e.TgZ(3,"a",3)(4,"mat-icon"),e._uU(5,"add"),e.qZA(),e._uU(6," Novo cliente "),e.qZA(),e.TgZ(7,"div",4)(8,"table",5),e.ynx(9,6),e.YNc(10,J,2,0,"th",7),e.YNc(11,S,2,1,"td",8),e.BQk(),e.ynx(12,9),e.YNc(13,Q,2,0,"th",7),e.YNc(14,E,2,1,"td",8),e.BQk(),e.ynx(15,10),e.YNc(16,O,2,0,"th",7),e.YNc(17,k,2,1,"td",8),e.BQk(),e.ynx(18,11),e.YNc(19,M,2,0,"th",7),e.YNc(20,D,2,1,"td",8),e.BQk(),e.ynx(21,12),e.YNc(22,$,2,0,"th",7),e.YNc(23,w,2,1,"td",8),e.BQk(),e.ynx(24,13),e.YNc(25,j,2,0,"th",7),e.YNc(26,B,7,1,"td",8),e.BQk(),e.YNc(27,z,1,0,"tr",14),e.YNc(28,P,1,0,"tr",15),e.qZA()()()),2&t){const r=n.ngIf,o=e.oxw();e.xp6(8),e.Q6J("dataSource",r),e.xp6(19),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns)}}function L(t,n){1&t&&e._UZ(0,"app-loader",22)}let G=(()=>{class t{constructor(r,o){this.clientesService=r,this.toast=o,this.displayedColumns=["id","nome","email","cpf","dataCriacao","acoes"],this.clientes$=I.E}delete(r){if(confirm("Tem certeza?")){const i=this.toast.loading("Deletando usu\xe1rio");this.clientesService.delete(r).subscribe({next:()=>{this.clientes$=this.clientesService.findAll(),this.toast.success("Usu\xe1rio deletado"),i.close()},error:a=>{switch(i.close(),a.status){case 403:return this.toast.error("Usu\xe1rio n\xe3o tem permiss\xe3o");case 409:return this.toast.error(a.error.message);default:return this.toast.error("Um erro aconteceu")}}})}}ngOnInit(){this.clientes$=this.clientesService.findAll()}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(h),e.Y36(Z.jE))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-clientes"]],decls:5,vars:4,consts:[[1,"mat-elevation-z8"],["class","mat-elevation-z8",4,"ngIf","ngIfElse"],["loading",""],["mat-raised-button","","color","accent","routerLink","new"],[1,"table-wrapper"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nome"],["matColumnDef","email"],["matColumnDef","cpf"],["matColumnDef","dataCriacao"],["matColumnDef","acoes"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary","matTooltip","Editar cliente",3,"routerLink"],["mat-icon-button","","color","warn","matTooltip","Deletar cliente",3,"click"],["mat-header-row",""],["mat-row",""],["label","Carregando clientes..."]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0),e.YNc(1,R,29,3,"div",1),e.ALo(2,"async"),e.YNc(3,L,1,0,"ng-template",null,2,e.W1O),e.qZA()),2&r){const i=e.MAs(4);e.xp6(1),e.Q6J("ngIf",e.lcZ(2,2,o.clientes$))("ngIfElse",i)}},directives:[g.O5,T.zs,_.yS,U.Hw,s.BZ,s.w1,s.fO,s.ge,s.Dz,s.ev,Y.gM,s.as,s.XQ,s.nj,s.Gk,q.R],pipes:[g.Ov],styles:[""]}),t})();var l=m(3075),C=m(2134),N=m(7446),u=m(7322),F=m(7531),v=m(1470);function H(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function X(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function K(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Formato de CPF inv\xe1lido"),e.qZA())}function W(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function V(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function ee(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"O m\xednimo s\xe3o 8 caracteres"),e.qZA())}function te(t,n){1&t&&(e.TgZ(0,"span",15),e._uU(1," Marque pelo menos uma fun\xe7\xe3o para o user "),e.qZA())}function ne(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function oe(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function ie(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Formato de CPF inv\xe1lido"),e.qZA())}function le(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function ae(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function me(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"O m\xednimo s\xe3o 8 caracteres"),e.qZA())}function se(t,n){1&t&&(e.TgZ(0,"span",17),e._uU(1," Marque pelo menos uma fun\xe7\xe3o para o user "),e.qZA())}function ce(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"div",2)(1,"form",3),e.NdJ("ngSubmit",function(){return e.CHM(r),e.oxw().onSubmit()}),e.TgZ(2,"h2"),e._uU(3,"Editar cliente"),e.qZA(),e.TgZ(4,"section",4)(5,"mat-checkbox",5),e._uU(6,"Admin"),e.qZA(),e.TgZ(7,"mat-checkbox",6),e._uU(8,"Cliente"),e.qZA(),e.TgZ(9,"mat-checkbox",7),e._uU(10,"Tecnico"),e.qZA()(),e.TgZ(11,"mat-form-field",8)(12,"mat-label"),e._uU(13,"Nome"),e.qZA(),e._UZ(14,"input",9),e.YNc(15,ne,2,0,"mat-error",10),e.TgZ(16,"mat-icon",11),e._uU(17,"person"),e.qZA()(),e.TgZ(18,"mat-form-field",8)(19,"mat-label"),e._uU(20,"CPF"),e.qZA(),e._UZ(21,"input",12),e.YNc(22,oe,2,0,"mat-error",10),e.YNc(23,ie,2,0,"mat-error",10),e.TgZ(24,"mat-icon",11),e._uU(25,"credit_card"),e.qZA()(),e.TgZ(26,"mat-form-field",8)(27,"mat-label"),e._uU(28,"Email"),e.qZA(),e._UZ(29,"input",13),e.YNc(30,le,2,0,"mat-error",10),e.TgZ(31,"mat-icon",11),e._uU(32,"email"),e.qZA()(),e.TgZ(33,"mat-form-field",8)(34,"mat-label"),e._uU(35,"Senha"),e.qZA(),e._UZ(36,"input",14),e.YNc(37,ae,2,0,"mat-error",10),e.YNc(38,me,2,0,"mat-error",10),e.TgZ(39,"mat-icon",11),e._uU(40,"key"),e.qZA()(),e.YNc(41,se,2,0,"span",15),e.TgZ(42,"button",16),e._uU(43," Salvar "),e.qZA()()()}if(2&t){const r=e.oxw();let o,i,a,c,p,d,f;e.xp6(1),e.Q6J("formGroup",r.clienteForm),e.xp6(14),e.Q6J("ngIf",null==(o=r.clienteForm.get("nome"))||null==o.errors?null:o.errors.required),e.xp6(6),e.Q6J("dropSpecialCharacters",!1),e.xp6(1),e.Q6J("ngIf",null==(i=r.clienteForm.get("cpf"))||null==i.errors?null:i.errors.required),e.xp6(1),e.Q6J("ngIf",null==(a=r.clienteForm.get("cpf"))||null==a.errors?null:a.errors.mask),e.xp6(7),e.Q6J("ngIf",null==(c=r.clienteForm.get("email"))||null==c.errors?null:c.errors.required),e.xp6(7),e.Q6J("ngIf",null==(p=r.clienteForm.get("senha"))||null==p.errors?null:p.errors.required),e.xp6(1),e.Q6J("ngIf",null==(d=r.clienteForm.get("senha"))||null==d.errors?null:d.errors.minlength),e.xp6(3),e.Q6J("ngIf",null==(f=r.clienteForm.get("perfils"))||null==f.errors?null:f.errors.sometrue),e.xp6(1),e.Q6J("disabled",r.clienteForm.invalid)}}function ue(t,n){1&t&&e._UZ(0,"app-loader",19)}function pe(t,n){if(1&t&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&t){const r=e.oxw(2);e.xp6(1),e.Oqu(r.errorMsg)}}function de(t,n){if(1&t&&(e.YNc(0,ue,1,0,"app-loader",18),e.YNc(1,pe,2,1,"p",10)),2&t){const r=e.oxw();e.Q6J("ngIf",r.loading),e.xp6(1),e.Q6J("ngIf",r.error)}}const fe=[{path:"",component:G},{path:"new",component:(()=>{class t{constructor(r,o,i,a){this.fb=r,this.clientesService=o,this.toast=i,this.router=a,this.clienteForm=this.fb.group({nome:[null,[l.kI.required]],cpf:[null,[l.kI.required,l.kI.maxLength(14)]],email:[null,[l.kI.required,l.kI.email]],senha:[null,[l.kI.required]],perfils:this.fb.array([[!1],[!0],[!1]],[C.mK])})}onSubmit(){const r=Object.assign(Object.assign({},this.clienteForm.value),{perfils:(0,C.Fi)(this.clienteForm.value.perfils)}),o=this.toast.loading("Adicionando cliente");this.clientesService.create(r).subscribe({next:()=>{o.close(),this.toast.success("Cliente criado"),this.router.navigate(["clientes"])},error:i=>{var a;switch(o.close(),i.status){case 403:return this.toast.error("A\xe7\xe3o n\xe3o permitida");case 409:return this.toast.error(i.error.message);default:return this.toast.error(`Um erro aconteceu: ${null!==(a=i.error.message)&&void 0!==a?a:""}`)}}})}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(l.qu),e.Y36(h),e.Y36(Z.jE),e.Y36(_.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-cliente-create"]],decls:44,vars:10,consts:[[1,"form-wrapper"],[3,"formGroup","ngSubmit"],["formArrayName","perfils",1,"section"],["color","primary","formControlName","0",1,"margin"],["color","primary","formControlName","1",1,"margin"],["color","primary","formControlName","2",1,"margin"],["appearance","fill"],["matInput","","placeholder","Nome do cliente","formControlName","nome","required",""],[4,"ngIf"],["matPrefix",""],["matInput","","mask","000.000.000-00","placeholder","CPF do cliente","formControlName","cpf","required","",3,"dropSpecialCharacters"],["matInput","","placeholder","Email do cliente","formControlName","email","type","email","required",""],["matInput","","placeholder","Senha do cliente","formControlName","senha","type","password","required",""],["class","mat-error",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled"],[1,"mat-error"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(2,"h2"),e._uU(3,"Novo cliente"),e.qZA(),e.TgZ(4,"section",2)(5,"mat-checkbox",3),e._uU(6,"Admin"),e.qZA(),e.TgZ(7,"mat-checkbox",4),e._uU(8,"Cliente"),e.qZA(),e.TgZ(9,"mat-checkbox",5),e._uU(10,"Tecnico"),e.qZA()(),e.TgZ(11,"mat-form-field",6)(12,"mat-label"),e._uU(13,"Nome"),e.qZA(),e._UZ(14,"input",7),e.YNc(15,H,2,0,"mat-error",8),e.TgZ(16,"mat-icon",9),e._uU(17,"person"),e.qZA()(),e.TgZ(18,"mat-form-field",6)(19,"mat-label"),e._uU(20,"CPF"),e.qZA(),e._UZ(21,"input",10),e.YNc(22,X,2,0,"mat-error",8),e.YNc(23,K,2,0,"mat-error",8),e.TgZ(24,"mat-icon",9),e._uU(25,"credit_card"),e.qZA()(),e.TgZ(26,"mat-form-field",6)(27,"mat-label"),e._uU(28,"Email"),e.qZA(),e._UZ(29,"input",11),e.YNc(30,W,2,0,"mat-error",8),e.TgZ(31,"mat-icon",9),e._uU(32,"email"),e.qZA()(),e.TgZ(33,"mat-form-field",6)(34,"mat-label"),e._uU(35,"Senha"),e.qZA(),e._UZ(36,"input",12),e.YNc(37,V,2,0,"mat-error",8),e.YNc(38,ee,2,0,"mat-error",8),e.TgZ(39,"mat-icon",9),e._uU(40,"key"),e.qZA()(),e.YNc(41,te,2,0,"span",13),e.TgZ(42,"button",14),e._uU(43," Criar "),e.qZA()()()),2&r){let i,a,c,p,d,f,x;e.xp6(1),e.Q6J("formGroup",o.clienteForm),e.xp6(14),e.Q6J("ngIf",null==(i=o.clienteForm.get("nome"))||null==i.errors?null:i.errors.required),e.xp6(6),e.Q6J("dropSpecialCharacters",!1),e.xp6(1),e.Q6J("ngIf",null==(a=o.clienteForm.get("cpf"))||null==a.errors?null:a.errors.required),e.xp6(1),e.Q6J("ngIf",null==(c=o.clienteForm.get("cpf"))||null==c.errors?null:c.errors.mask),e.xp6(7),e.Q6J("ngIf",null==(p=o.clienteForm.get("email"))||null==p.errors?null:p.errors.required),e.xp6(7),e.Q6J("ngIf",null==(d=o.clienteForm.get("senha"))||null==d.errors?null:d.errors.required),e.xp6(1),e.Q6J("ngIf",null==(f=o.clienteForm.get("senha"))||null==f.errors?null:f.errors.minlength),e.xp6(3),e.Q6J("ngIf",null==(x=o.clienteForm.get("perfils"))||null==x.errors?null:x.errors.sometrue),e.xp6(1),e.Q6J("disabled",o.clienteForm.invalid)}},directives:[l._Y,l.JL,l.sg,l.CE,N.oG,l.JJ,l.u,u.KE,u.hX,F.Nt,l.Fj,l.Q7,g.O5,u.TO,U.Hw,u.qo,v.hx,T.lW],styles:["mat-checkbox[_ngcontent-%COMP%]{padding-right:2px;padding-left:2px}"]}),t})()},{path:"edit/:id",component:(()=>{class t{constructor(r,o,i,a,c){this.route=r,this.clientesService=o,this.fb=i,this.toast=a,this.router=c,this.errorMsg="",this.error=!1,this.loading=!0,this.clienteForm=this.fb.group({id:[null],nome:[null,[l.kI.required]],cpf:[null,[l.kI.required,l.kI.maxLength(14)]],email:[null,[l.kI.required,l.kI.email]],senha:[null],perfils:this.fb.array([[!1],[!1],[!1]],[C.mK])})}onSubmit(){const r=Object.assign(Object.assign({},this.clienteForm.value),{perfils:(0,C.Fi)(this.clienteForm.value.perfils)}),o=this.toast.loading("Atualizando cliente");this.clientesService.update(r).subscribe({next:()=>{o.close(),this.toast.success("Cliente atualizado"),this.router.navigate(["clientes"])},error:i=>{var a;switch(o.close(),i.status){case 403:return this.toast.error("A\xe7\xe3o n\xe3o permitida");case 409:return this.toast.error(i.error.message);default:return this.toast.error(`Um erro aconteceu: ${null!==(a=i.error.message)&&void 0!==a?a:""}`)}}})}ngOnInit(){this.clientesService.findById(this.route.snapshot.params.id).subscribe({next:o=>{var i;o.senha="";const a=(0,C.MD)(o.perfils);this.clienteForm.patchValue(o),null===(i=this.clienteForm.get("perfils"))||void 0===i||i.setValue(a),this.loading=!1},error:o=>{this.errorMsg=o.error.message,this.errorMsg||(this.errorMsg="Um erro aconteceu"),this.error=!0,this.loading=!1}})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(_.gz),e.Y36(h),e.Y36(l.qu),e.Y36(Z.jE),e.Y36(_.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-cliente-update"]],decls:3,vars:2,consts:[["class","form-wrapper",4,"ngIf","ngIfElse"],["loadingOrError",""],[1,"form-wrapper"],[3,"formGroup","ngSubmit"],["formArrayName","perfils",1,"section"],["color","primary","formControlName","0",1,"margin"],["color","primary","formControlName","1",1,"margin"],["color","primary","formControlName","2",1,"margin"],["appearance","fill"],["matInput","","placeholder","Nome do cliente","formControlName","nome","required",""],[4,"ngIf"],["matPrefix",""],["matInput","","mask","000.000.000-00","placeholder","CPF do cliente","formControlName","cpf","required","",3,"dropSpecialCharacters"],["matInput","","placeholder","Email do cliente","formControlName","email","type","email","required",""],["matInput","","placeholder","Senha do cliente","formControlName","senha","type","password"],["class","mat-error",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled"],[1,"mat-error"],["label","Carregando registro de cliente...",4,"ngIf"],["label","Carregando registro de cliente..."]],template:function(r,o){if(1&r&&(e.YNc(0,ce,44,10,"div",0),e.YNc(1,de,2,2,"ng-template",null,1,e.W1O)),2&r){const i=e.MAs(2);e.Q6J("ngIf",!o.loading&&!o.error)("ngIfElse",i)}},directives:[g.O5,l._Y,l.JL,l.sg,l.CE,N.oG,l.JJ,l.u,u.KE,u.hX,F.Nt,l.Fj,l.Q7,u.TO,U.Hw,u.qo,v.hx,T.lW,q.R],styles:["mat-checkbox[_ngcontent-%COMP%]{padding-right:2px;padding-left:2px}"]}),t})()}];let _e=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[_.Bz.forChild(fe)],_.Bz]}),t})();var ge=m(4307),Ce=m(4466);let he=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,_e,ge.q,l.UX,v.yI.forRoot(),Ce.m]]}),t})()}}]);