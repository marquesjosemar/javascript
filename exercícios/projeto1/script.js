function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getUTCMinutes()
    //var hora = 20
    msg.innerText = (`Agora são ${hora}:${minutos} horas.`) 

    if (hora >= 0 && hora <= 12 ) {
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ceba97'
    } else if (hora >= 12 && hora <=18) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#949048'
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#3d3b36'
        
    }
         
}

