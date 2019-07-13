const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
}

console.log('Usuário original', usuario)

// Pega todas depois sobrescreve o que deseja mudar
const usuario2 = {...usuario, nome: 'Gabriel'}
console.log('Usuário 2', usuario2)

const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}}
console.log('Usuário 3', usuario3)
