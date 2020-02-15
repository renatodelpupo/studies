import PubSub from 'pubsub-js'

export default class TratadorErros {
  publicaErros(erros) {
    erros.forEach((item) => PubSub.publish("erro-validacao", item.errors))
  }
}