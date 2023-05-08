function carregar() { 
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date() 
    var hora = data.getHours()  //pegando as horas do notebook
    msg.innerHTML = `agora sao ${hora} horas`  //mudando o texto
    if (hora >= 0 && hora < 12) {  //condiçao
        img.src = './assets/manha.jpg' //troncando a imagem de fundo
        document.body.style.background = '#8ceeee'  //trocando a cor de fundo
    } else if (hora >= 12 && hora < 18) {
        img.src = './assets/tarde.jpg'  //troncando a imagem de fundo
        document.body.style.background = '#b37b15'  //trocando a cor de fundo
    } else {
        img.src = './assets/noite.jpg'  //troncando a imagem de fundo
        document.body.style.background = '#001347'  //trocando a cor de fundo
    }
}