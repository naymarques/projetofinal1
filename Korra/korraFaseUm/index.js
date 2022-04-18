document.getElementById('responder').addEventListener('click', validaFormulario)

function validaFormulario() {
  var resposta = prompt(
    '1. Não, Korra prefere aguardar em sua tribo. <br>2. Sim, ela aceita a nova missão'
  )
  if ((resposta = '1')) {
    alert('Prontinho! Você venceu')
  } else {
    alert('Game over')
  }
}
validaFormulario()
