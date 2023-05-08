var agr = new Date()
var hora = agr.getHours()
console.log(`sao exatamente ${hora} horas`)

if (hora < 12) {
    console.log("bom dia")
} else if (hora <= 18 ) {
    console.log("boa tarde")
} else {
    console.log("boa noite")
}