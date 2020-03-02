class ArquivoHelper {

  static cria(informacao) {

    const infoSeparada = informacao.toUpperCase().split('/')
    console.log('Info separada:', infoSeparada)

    return new Arquivo(...infoSeparada)

    // Reposta da plataforma:
    // return new Arquivo(...informacao.toUpperCase().split('/'));
  }

}
