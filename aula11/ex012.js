var HoraAtual = new Date()
var hora = HoraAtual.getHours()
var minutos = HoraAtual.getMinutes()
console.log(`Agora são exatamente ${hora}:`+ `${minutos}h`)
    if (hora < 12) {
        console.log('Bom dia!')
    } else if (hora <= 18) {
        console.log('Boa tarde!')
    }

