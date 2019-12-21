class NegociacaoController {

  // O lance dessa versão otimizada é evitar percorrer o DOM muitas vezes
  // Vamos invocar o constructor(), que não estava presente, para instanciar
  // as variáveis que usaremos a cada método (função) adiciona()

  /*
  constructor() {

    let qS = document.querySelector.bind(document)

    this.inputData = qS('#data')
    this.inputQuantidade =  qS('#quantidade')
    this.inputValor = qS('#valor')

  }

  adiciona(event) {
        event.preventDefault()

        console.log(this.inputData.value)
        console.log(this.inputQuantidade.value)
        console.log(this.inputValor.value)
  }*/


  //
  // Aplicando convenção de não editar os valores
  //

  constructor() {

    let qS = document.querySelector.bind(document)

    this._inputData = qS('#data')
    this._inputQuantidade = qS('#quantidade')
    this._inputValor = qS('#valor')

  }

  adiciona(event) {
    event.preventDefault();

    // Ajustando data
    let data = new Date(...
      this._inputData.value
      .split('-')
      .map((item, indice) => (indice == 1) ? item - 1 : item)
    );

    // Efetivamente criando a negociação
    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);
  }
}
