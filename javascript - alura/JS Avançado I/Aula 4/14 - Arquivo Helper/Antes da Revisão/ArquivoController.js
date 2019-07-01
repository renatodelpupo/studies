class ArquivoController {

  constructor() {
    this._inputDados = document.querySelector('.dados-arquivo');
  }

  envia() {

    //
    // Instrução Alura: Cria um Arquivo com as suas propriedades
    //

    // Vendo o input inteiro e jogando em maiúscula
    const todosDados = this._inputDados.value.toUpperCase()

    // Separando as informações conforme a barra /
    const dadosSeparados = todosDados.split('/')

    const nome = dadosSeparados[0]
    const tamanho = dadosSeparados[1]
    const tipo = dadosSeparados[2]

    this._limpaFormulario();

    //
    // Instrução Alura: exibe mensagem no console com os dados do arquivo.
    //

    console.log(nome)
    console.log(tamanho)
    console.log(tipo)
  }

  _limpaFormulario() {
    this._inputDados.value = '';
    this._inputDados.focus();
  }
}
