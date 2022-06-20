function valor() {
    let est = document.getElementsByName('est')
    let idad = document.getElementById('idade')
    let id = Number (idad.value)
    let res = document.getElementById('val')
    //let cost = [Free, 5, 10]

    if (idad.value.length == 0) {
        window.alert('[ERRO] Preencha a idade!')
    
    } else {
        if (id < 8) {
        res.innerHTML = `Entrada livre para menores de 8 anos!`
        } else if (id <= 18 & est[0].checked) {
        res.innerHTML = `Entrada 5,00 euros!`
        } else if (id <= 18 & est[1].checked) {
        res.innerHTML = `Entrada 5,00 euros. Educação tranforma vidas e é direito de todos, matricule-se!`
        } else if (est[0].checked & id <= 60) {
        res.innerHTML = `Entrada 5,00 euros!`
        } else if (est[1].checked & id <= 60) {
        res.innerHTML = `Entrada 10,00 euros!`
        } else if (id > 60){
        res.innerHTML = `Entrada livre para maiores de 60 anos!`
        }
    }
}

function soma() {
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var resultado = parseInt(tn1.value) + parseInt(tn2.value);
    var result = document.getElementById('res1');
    result.innerHTML = `Resultado: ` + resultado;
}


