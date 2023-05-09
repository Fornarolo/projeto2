function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes();
    
    msg.innerHTML = `Agora são ${hora} hora(s) e  ${minuto} minuto(s)` 
    if(hora >= 0 && hora < 12) {
       img.src = 'manha.jpg'
       document.body.style.background = '#eaae8a'
       men.innerHTML = `Bom dia!`
    }
    else if (hora >= 12 && hora < 18){
       img.src = 'tarde.jpg'
       document.body.style.background = '#ffc51b'
       men.innerHTML = `Boa tarde!`
    }
    else {
       img.src = 'noite.jpg'
       document.body.style.background = '#382d4d'
       men.innerHTML = `Boa noite!`
    }

}
