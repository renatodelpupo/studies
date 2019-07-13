
// Com JSON é assim:

const usuario = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}

const {nome: mudando, ...resto} = usuario
console.log(mudando)
console.log(resto)


// Com array é assim:

const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


//
// Somando
//

/* function soma() {
  const arrayArgumentos = Array.from(arguments)
  return arrayArgumentos.reduce((acumulado, item) => acumulado + item)
} */

function soma(...params) {
  return params.reduce((acumulado, item) => acumulado + item)
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3