var agora = new Date()
var diaSem = agora.getDay()

/* 
0 = domingo
1 = seg
2 = ter
3 = quar
4 = quin
5 = sex
6 = sab
*/

console.log(`hoje é:`)

switch(diaSem) {
    case 0 :
        console.log('Domingo')
        break

    case 1:
        console.log('segunda-feira')
        break

    case 2:
        console.log('terça-feira')
        break
    
    case 3:
        console.log('quarta-feira')
        break
    
    case 4:
        console.log('quinta-feira')
        break
    
    case 5:
        console.log('sexta-feira')
        break

    case 6:
        console.log('sabado')
        break
}       