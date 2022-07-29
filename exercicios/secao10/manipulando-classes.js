function verde() {
  document.querySelector('#exemplo').classList.remove('vermelho')
  document.querySelector('#exemplo').classList.remove('azul')
  document.querySelector('#exemplo').classList.add('verde')
}

function vermelho() {
  document.querySelector('#exemplo').classList.remove('verde')
  document.querySelector('#exemplo').classList.remove('azul')
  document.querySelector('#exemplo').classList.add('vermelho')
}

function azul() {
  document.querySelector('#exemplo').classList.remove('verde')
  document.querySelector('#exemplo').classList.remove('vermelho')
  document.querySelector('#exemplo').classList.add('azul')
}

function trocar() {
  if (document.querySelector('#butbut').classList.contains('preto')) {
    document.querySelector('#butbut').classList.remove('preto')
    document.querySelector('#butbut').classList.add('verde')
  } else {
    document.querySelector('#butbut').classList.remove('verde')
    document.querySelector('#butbut').classList.add('preto')
  }
}
