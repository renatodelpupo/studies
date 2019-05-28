var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {

  var pacientes = document.querySelectorAll(".paciente");
  var inputText = this.value;

  if (inputText.length > 0) {

    pacientes.forEach(function(paciente) {
      var tdNome = paciente.querySelector('.info-nome');
      var nome = tdNome.textContent;
      var expressao = new RegExp(inputText, 'i');

      if (expressao.test(nome)) {
        paciente.classList.remove("invisivel");
      } else {
        paciente.classList.add("invisivel");
      }
    })

  } else {
    pacientes.forEach(function(paciente) {
      paciente.classList.remove('invisivel')
    })
  }
});