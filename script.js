function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                // Criança
                img.setAttribute('src', '/ProjetoVerificador/img/foto-bebe-h.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '/ProjetoVerificador/img/foto-jovem-h.png')
            } else if (idade < 50) {
                // Adulto 
                img.setAttribute('src', '/ProjetoVerificador/img/foto-adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src', '/ProjetoVerificador/img/foto-idoso-h.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                // Criança
                img.setAttribute('src', '/ProjetoVerificador/img/foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '/ProjetoVerificador/img/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto 
                img.setAttribute('src', '/ProjetoVerificador/img/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', '/ProjetoVerificador/img/foto-idosa-m.png')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
           
    
        }
    
    }