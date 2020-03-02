const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(item => item.idade)
console.log('Idades:', idades)

const rocketMaiores = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade >= 18)
//console.log('Rocketseat maior de idade:', rocketMaiores)
console.log('Rocketseat maior de idade:', rocketMaiores[0].nome)

const trabalhaGoogle = usuarios.find(item => item.empresa == 'Google')
console.log('Trabalha no Google:', trabalhaGoogle)

/* const dobraIdade = usuarios.map(item => {
  let { nome, idade, empresa } = item
  idade *= 2
  return { nome, idade, empresa }
}).filter(item => item.idade <= 50) */

/* const dobraIdade = usuarios.map(item => {

  // return {
  //   nome: item.nome, idade: item.idade * 2, empresa: item.empresa
  // }

  // let {nome, idade, empresa} = item
  // return {nome, idade: idade * 2, empresa}

  return {...item, idade: (item.idade * 2)}

}).filter(item => item.idade <= 50) */

const dobraIdade = usuarios
  .map(item => ({...item, idade: (item.idade * 2)}))
  .filter(item => item.idade <= 50)

console.log('Menor de 50:')
console.log(dobraIdade)
