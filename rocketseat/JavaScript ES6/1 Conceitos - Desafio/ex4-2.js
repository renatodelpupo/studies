
function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

//

function mostraInfo2({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo2({ nome: 'Lucas', idade: 21 }))