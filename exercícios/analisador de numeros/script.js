let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = [] //array

function isNumero(n) {
  if(Number(n) > 1 && Number(n) <= 100) {
    return true //se o numero digitado for de 1 a 100 retornar verdadeiro (pra fazer a função adicionar funcionar)
  } else {
    return false
  }
}

function inLista(n) {
  if (lista.indexOf(Number(n)) != - 1) { //se o numero da lista for diferente de -1 
  return true
} else {
  return false
}
}


function adicionar() { //a funcão só vai funcionar se for verdade as duas condições abaixo
   if(isNumero(num.value) && !inLista(num.value)) {
          valores.push(Number(num.value))
          let item = document.createElement('options')
        item.text =`Valor ${num.value} adicionad`
        lista.appendChild(item)
    } else {
          window.alert('valor invalido ou ja encontrado na lista')
    }

    num.value = ''
    num.focus()
}

function finalizar () {

}