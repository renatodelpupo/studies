
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
}

const consolar = ({nome, endereco: {cidade, estado}}) => {
  console.log(nome); // Rocketseat
  console.log(cidade); // Rio do Sul
  console.log(estado); // SC
}

consolar(empresa)

//
//
// Anônimo

const {nome, endereco: {cidade, estado}} = empresa
console.log(nome)
console.log(cidade)
console.log(estado)

