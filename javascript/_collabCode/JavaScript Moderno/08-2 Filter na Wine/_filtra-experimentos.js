
// Já tem em index.html
//const experienciasVinho = ['essenciais', 'surpreendentes', 'notaveis', 'singulares', 'refrescantes', 'espumantes']

//console.log(experienciasVinho)

//console.log(experienciasTodas)

const experienciasFiltradas1 = experienciasTodas.filter(function(item){

  if (experienciasVinho.includes('essenciais')) {
    console.log('sim')
  }
  // Retorna sim 10 vezes

})

//
console.log('----')
//

const experienciasFiltradas2 = experienciasTodas.filter(function(item){

  if (experienciasVinho.includes(item.modalidade.codigoAmigavel)) {
    console.log('sim')
  }
  // Retorna sim 6 vezes

})

//
console.log('----')
//

const experienciasFiltradas3 = experienciasTodas.filter(function(item){

  // Validando com includes()
  if (experienciasVinho.includes(item.modalidade.codigoAmigavel)) {
    return item
  }

})
console.log(experienciasFiltradas3)

//
console.log('----')
//

const experienciasFiltradas4 = experienciasTodas.filter(function(item){

  // Validando com indexOf()
  if (experienciasVinho.indexOf(item.modalidade.codigoAmigavel) != -1) {
    return item
  }

})
console.log(experienciasFiltradas4)

//
console.log('----')
//
