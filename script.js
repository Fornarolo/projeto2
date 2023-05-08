function Carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas` 
    if(hora >= 0 && hora < 12) {
       img.src = 'manha.jpg'
       document.body.style.background = '#eaae8a'
    }
    else if (hora >= 12 && hora < 18){
       img.src = 'tarde.jpg'
       document.body.style.background = '#ffc51b'
    }
    else {
       img.src = 'noite.jpg'
       document.body.style.background = '#382d4d'
    }

}
