// Não precisa ter o mesmo nome do arquivo
/*class Negociacao {

    constructor() {

        // Definição de dados padrões
        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }
}*/

/*
Nosso objetivo é que as propriedades de uma negociação sejam somente para leitura.
No entanto, a linguagem JavaScript - até a atual data - não nos permite usar modificadores
de acesso. Não podemos dizer que uma propriedade seja apenas leitura (ou gravação).
O que podemos é utilizar a convenção de que nos atributos das propriedades de uma classe
que não pode ser modificada, usaremos um underline (_).

Esta será uma convenção que informará ao programador que as propriedades que
contenham _ só poderão ser acessadas pelos próprios métodos da classe.
Isto significa, que mesmo podendo imprimir a propriedade _quantidade com outro valor,
não deveríamos mais poder acessá-la. O _ funciona como um aviso dizendo:
"programador, você não pode alterar esta propriedade!". Então, se usamos a convenção
de utilizar o prefixo, como faremos para imprimir a classe? Se não podemos acessá-la,
como podemos fazer isso? Para isto, criou-se métodos chamados acessadores, em que serão
utilizados o prefixo get. No caso, em Negociacao.js, adicionaremos o método getData(),
que retornará o _data. Usaremos também o getQuantidade() e o getValor que terão
finalidades semelhantes.
*/

// A02 A04
/*class Negociacao {

  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  getVolume() {
    return this._quantidade * this._valor;
  }

  getData() {
    return this._data;
  }

  getQuantidade() {
    return this._quantidade;
  }

  getValor() {
    return this._valor;
  }
}*/

// A02 A05
class Negociacao {

  constructor(data, quantidade, valor) {

    // Assim era fácil alterar ao chamar o construtor
    // this._data = data;
    // Desta forma não é possível mais
    this._data = new Date(data.getTime());

    this._quantidade = quantidade;
    this._valor = valor;

    Object.freeze(this)
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {

    // Assim era fácil burlar após a construção
    // return this._data;
    // Desta forma não é possível mais alterar por aqui
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
