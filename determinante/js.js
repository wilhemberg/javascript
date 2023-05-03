var nu1 = document.getElementById('n1')
var nu2 = document.getElementById('n2')
var nu3 = document.getElementById('n3')
var nu4 = document.getElementById('n4')
var nu5 = document.getElementById('n5')
var nu6 = document.getElementById('n6')
var buttun = document.getElementById('butt')

buttun.addEventListener('click', cal)

function cal() {
    var num1 = Number(nu1.value)
    var num2 = Number(nu2.value)
    var num3 = Number(nu3.value)
    var num4 = Number(nu4.value)
    var num5 = Number(nu5.value)
    var num6 = Number(nu6.value)
    
    var det = ((num1*num4)+(num3*num6)+(num5*num2))-((num2*num3)+(num4*num5)+(num6*num1))
    
    var res = document.getElementById('resposta')
    if (det == 0) {
        res.innerText += "alinhado"
    } else {
        res.innerHTML += "<p>nao alinhado</p>"
    }
}