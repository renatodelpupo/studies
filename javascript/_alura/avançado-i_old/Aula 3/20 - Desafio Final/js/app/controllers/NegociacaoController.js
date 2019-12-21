
class NegociacaoController {

  constructor() {

    let qS = document.querySelector.bind(document)

    this._inputData = qS('#data')
    this._inputQuantidade = qS('#quantidade')
    this._inputValor = qS('#valor')
  }

  adiciona () {
    //event.preventDefault()

    console.log('Adicionando...')

    let negociacao = new Negociacao(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);

  }


}
