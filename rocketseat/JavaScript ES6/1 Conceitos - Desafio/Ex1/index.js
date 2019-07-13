class Usuario {

  constructor() {
    this.email = ''
    this.senha = ''
  }

  isAdmin() {
    return this.admin || false // Se não houver a propriedade, retorna falso
  }
}

class Admin extends Usuario {

  constructor() {
    super() // Importa o constructor do pai

    this.admin = true // Define propriedade como verdadeiro
  }

  /*consolaAdministrador() {
    console.log(this.admin)
  }*/
  
}

//

const User1 = new Usuario('email@teste.com', 'senha123')
const Adm1 = new Admin('email@teste.com', 'senha123')

console.log('Falso:', User1.isAdmin())
console.log('Verdadeiro:', Adm1.isAdmin())

//

const executar = new Admin()

document.querySelector('[data-attr="executar"]').addEventListener('click', () => {
  executar.isAdmin()
})

//executar.consolaAdministrador()