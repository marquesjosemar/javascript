function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Digite um número')
    } else { 
    let n = Number(num.value) //convertendo o valor de num para número pra que possa ser feito o calculo.
    let c = 1 //variavel de contador
    tab.innerHTML = ''
    while (c <= 10) {
        let item = document.createElement('option') //criando elementos de forma dinamica.
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++

        } 
    } 
}

