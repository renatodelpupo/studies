webpackJsonp([0],{48:function(t,o,a){"use strict";function e(t){a(50)}Object.defineProperty(o,"__esModule",{value:!0});var r=a(49),i=a(53),s=a(2),n=e,l=s(r.a,i.a,!1,n,"data-v-6c57a359",null);o.default=l.exports},49:function(t,o,a){"use strict";var e=a(13),r=a(14),i=a(52),s=a(15);o.a={components:{"imagem-responsiva":e.a,"meu-botao":r.a},data:function(){return{foto:new i.a,id:this.$route.params.id}},created:function(){var t=this;this.service=new s.a(this.$resource),this.id&&this.service.busca(this.id).then(function(o){return t.foto=o})},methods:{grava:function(){var t=this;this.$validator.validateAll().then(function(o){o&&t.service.cadastra(t.foto).then(function(){return t.id?t.$router.push({name:"inicio"}):t.foto=new i.a},function(t){return console.log(t)})})}}}},50:function(t,o,a){var e=a(51);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(1)("1b921f0a",e,!0,{})},51:function(t,o,a){o=t.exports=a(0)(!1),o.push([t.i,".centralizado[data-v-6c57a359]{text-align:center}.controle[data-v-6c57a359]{font-size:1.2em;margin-bottom:20px}.controle label[data-v-6c57a359]{display:block;font-weight:700}.controle label+input[data-v-6c57a359],.controle textarea[data-v-6c57a359]{width:100%;font-size:inherit;border-radius:5px}.erro[data-v-6c57a359]{color:red}",""])},52:function(t,o,a){"use strict";function e(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var r=function t(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e(this,t),this.titulo=o,this.url=a,this.descricao=r};o.a=r},53:function(t,o,a){"use strict";var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("h1",{staticClass:"centralizado"},[t._v("\n    Cadastro -\n    "),t.foto._id?a("span",[t._v("Edição")]):a("span",[t._v("Novo")])]),t._v(" "),a("h2",{staticClass:"centralizado"},[t._v(t._s(t.foto.titulo))]),t._v(" "),a("form",{on:{submit:function(o){return o.preventDefault(),t.grava()}}},[a("div",{staticClass:"controle"},[a("label",{attrs:{for:"titulo"}},[t._v("TÍTULO")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.foto.titulo,expression:"foto.titulo"},{name:"validate",rawName:"v-validate"}],attrs:{id:"titulo",name:"Título",autocomplete:"off","data-vv-rules":"required|min:3|max:30"},domProps:{value:t.foto.titulo},on:{input:function(o){o.target.composing||t.$set(t.foto,"titulo",o.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Título"),expression:"errors.has('Título')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("Título")))])]),t._v(" "),a("div",{staticClass:"controle"},[a("label",{attrs:{for:"url"}},[t._v("URL")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.foto.url,expression:"foto.url"},{name:"validate",rawName:"v-validate"}],attrs:{id:"url",name:"URL",autocomplete:"off","data-vv-rules":"required"},domProps:{value:t.foto.url},on:{input:function(o){o.target.composing||t.$set(t.foto,"url",o.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("URL"),expression:"errors.has('URL')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("URL")))]),t._v(" "),a("imagem-responsiva",{directives:[{name:"show",rawName:"v-show",value:t.foto.url,expression:"foto.url"}],attrs:{src:t.foto.url,alt:t.foto.titulo}})],1),t._v(" "),a("div",{staticClass:"controle"},[a("label",{attrs:{for:"descricao"}},[t._v("DESCRIÇÃO")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.foto.descricao,expression:"foto.descricao",modifiers:{lazy:!0}}],attrs:{id:"descricao",autocomplete:"off"},domProps:{value:t.foto.descricao},on:{change:function(o){return t.$set(t.foto,"descricao",o.target.value)}}})]),t._v(" "),a("div",{staticClass:"centralizado"},[a("meu-botao",{attrs:{rotulo:"GRAVAR",tipo:"submit"}}),t._v(" "),a("router-link",{attrs:{to:{name:"inicio"}}},[a("meu-botao",{attrs:{rotulo:"VOLTAR",tipo:"button"}})],1)],1)])])},r=[],i={render:e,staticRenderFns:r};o.a=i}});
//# sourceMappingURL=0.build.js.map