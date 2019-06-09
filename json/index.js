console.clear();

$.getJSON( "selecao-atual.json", function(data) {
  //console.log(data.experiencias)
  
  $.each(data.experiencias, function(i, val) {
    
    console.log(val.callToActionPrice)
    
    var cartao = jQuery('<li class="cartao"></li>'),
    superior = jQuery('<div class="superior"></div>'),
    nome = jQuery('<h2 class="nome">WineBox <span>' + val.nome + '</span></h2>'),
    inferior = jQuery('<div class="inferior"></div>'),
    descricao = jQuery('<p class="descricao"></p>').text(val.descricao),
    chamada = jQuery('<a href="" class="botao botao-comprar">Quero esse</a>');
    
    jQuery(cartao).append(superior).append(inferior).addClass(i)
    jQuery(superior).append(nome)
    jQuery(inferior).append(descricao).append(chamada)
    jQuery('.cartao-lista').append(cartao)
    
  })
})
/*.done(function() {
  console.log( "JSON carregado" );
})
.fail(function() {
  console.log( "Problema obtendo JSON" );
})
.always(function() {
  console.log( "Get JSON concluído" );
});*/


// Tentativa frustrada de get
/*jQuery('#adicionar-experiencia').click(function(e) {
  e.preventDefault();
  
  var dados = {}
  
  $.post("selecao-atual.json", dados, function(data) {
    
  })
  .done(function() {
    console.log('Feito')
  })
  .fail(function() {
    console.log('Falha')
  })
})*/
