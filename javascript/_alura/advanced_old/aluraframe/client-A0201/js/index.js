
// Tentei transformar em JSON
// const dados = [{
//   "data": document.querySelector('#data').value,
//   "quantidade": document.querySelector('#quantidade').value,
//   "valor": document.querySelector('#valor').value
// }]

// Código do instrutor
var dados = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

const $tabela = document.querySelector('.table tbody')
const $incluir = document.querySelector('button[type="submit"]')

// Fiz pelo botão
//$incluir.addEventListener('click', e => {
// Instrutor pelo formulário
document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault()

  const $linha = document.createElement('tr')

  // Criar uma célula para cada dado, definir seu valor como conteúdo e pendurar na linha
  dados.forEach(item => {

    const $celula = document.createElement('td')

    $celula.textContent = item.value
    $linha.appendChild($celula)

  })

  // Criar célula de volume (quantidade x valor)
  var $celulaVolume = document.createElement('td')
  $celulaVolume.textContent = dados[1].value * dados[2].value

  // Adicionar célula a linha
  $linha.appendChild($celulaVolume)

  // Adicionar a linha a tabela
  $tabela.appendChild($linha)

  // Definindo valores de reinício
  dados[0].value = ''
  dados[1].value = 1
  dados[2].value = 0

  // Ao reiniciar, guiar foco
  dados[0].focus()

})
