//Fases Korra

function korraFase2() {
  var contador = 0
  while (true) {
    var option = prompt('Escolha sua resposta')
    if (option == '1') {
      alert('Você acertou')
      window.location.href = '../korraFaseDois/index.html'
      break
    } else if (option == '2') {
      if (contador >= 2) {
        window.location.href = '../../Erro/index.html'
        break
      } else {
        alert('Opção errada! Você tem mais ' + (2 - contador) + ' chances')
        contador++
      }
    } else {
      alert('Digite apenas 1 ou 2')
    }
  }
}

function korraFase3() {
  var contador = 0
  while (true) {
    var option = prompt('Escolha sua resposta')
    if (option == '2') {
      alert('Você acertou')
      window.location.href = '../korraFaseTres/index.html'
      break
    } else if (option == '1') {
      if (contador >= 2) {
        window.location.href = '../../Erro/index.html'
        break
      } else {
        alert('Opção errada! Você tem mais ' + (2 - contador) + ' chances')
        contador++
      }
    } else {
      alert('Digite apenas 1 ou 2')
    }
  }
}

function korraVitoria() {
  var contador = 0
  while (true) {
    var option = prompt('Escolha sua resposta')
    if (option == '1') {
      alert('Você acertou')
      window.location.href = '../korraVitoria/index.html'
      break
    } else if (option == '2') {
      if (contador >= 2) {
        window.location.href = '../../Erro/index.html'
        break
      } else {
        alert('Opção errada! Você tem mais ' + (2 - contador) + ' chances')
        contador++
      }
    } else {
      alert('Digite apenas 1 ou 2')
    }
  }
}

//Fases Asami

function asamiFase2() {
  var contador = 0
  while (true) {
    var option = prompt('Escolha sua resposta')
    if (option == '2') {
      alert('Você acertou')
      window.location.href = '../asamiFaseTres/index.html'
      break
    } else if (option == '1') {
      if (contador >= 2) {
        window.location.href = '../../Erro/index.html'
        break
      } else {
        alert('Opção errada! Você tem mais ' + (2 - contador) + ' chances')
        contador++
      }
    } else {
      alert('Digite apenas 1 ou 2')
    }
  }
}

function asamiFase3() {
  var contador = 0
  while (true) {
    var option = prompt('Escolha sua resposta')
    if (option == '2') {
      alert('Você acertou')
      window.location.href = '../AsamiFaseTres/index.html'
      break
    } else if (option == '1') {
      if (contador >= 2) {
        window.location.href = '../../Erro/index.html'
        break
      } else {
        alert('Opção errada! Você tem mais ' + (2 - contador) + ' chances')
        contador++
      }
    } else {
      alert('Digite apenas 1 ou 2')
    }
  }
}

function asamiVitoria() {
  var contador = 0
  while (true) {
    var option = prompt('Escolha sua resposta')
    if (option == '2') {
      alert('Você acertou')
      window.location.href = '../asamiVitoria/index.html'
      break
    } else if (option == '1') {
      if (contador >= 1) {
        window.location.href = '../../Erro/index.html'
        break
      } else {
        alert('Opção errada! Você tem mais ' + (2 - contador) + ' chances')
        contador++
      }
    } else {
      alert('Digite apenas 1 ou 2')
    }
  }
}

//Fases Amon

function amonFase2() {
  var contador = 0
  while (true) {
    var option = prompt('Escolha sua resposta')
    if (option == '1') {
      alert('Você acertou')
      window.location.href = '../amonFaseTres/index.html'
      break
    } else if (option == '2') {
      if (contador >= 2) {
        window.location.href = '../../Erro/index.html'
        break
      } else {
        alert('Opção errada! Você tem mais ' + (2 - contador) + ' chances')
        contador++
      }
    } else {
      alert('Digite apenas 1 ou 2')
    }
  }
}

function amonFase3() {
  var contador = 0
  while (true) {
    var option = prompt('Escolha sua resposta')
    if (option == '1') {
      alert('Você acertou')
      window.location.href = '../AsamiFaseTres/index.html'
      break
    } else if (option == '2') {
      if (contador >= 2) {
        window.location.href = '../../Erro/index.html'
        break
      } else {
        alert('Opção errada! Você tem mais ' + (2 - contador) + ' chances')
        contador++
      }
    } else {
      alert('Digite apenas 1 ou 2')
    }
  }
}

function amonVitoria() {
  var contador = 0
  while (true) {
    var option = prompt('Escolha sua resposta')
    if (option == '1') {
      alert('Você acertou')
      window.location.href = '../amonVitoria/index.html'
      break
    } else if (option == '2') {
      if (contador >= 1) {
        window.location.href = '../../Erro/index.html'
        break
      } else {
        alert('Opção errada! Você tem mais ' + (2 - contador) + ' chances')
        contador++
      }
    } else {
      alert('Digite apenas 1 ou 2')
    }
  }
}
