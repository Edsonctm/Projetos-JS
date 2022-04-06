var texto = document.getElementById("texto")
texto.innerHTML = ("Escolha um número de 1 a 10 para iniciarmos a tabuada <br>")

function calcular() {

    var n1 = parseInt(document.getElementById('numero').value)
    var msg = document.getElementById('resultado')
    var n2 = 0
    var div = document.getElementById("result")

    div.style.display="flex"

    msg.innerHTML = `Você escolheu a tabuada do ${n1} <br>`

    for (let i = 1; i <= 10; i++) {
        n2 = i * n1
        
        msg.innerHTML += `${n1} vezes ${i} é igual a ${n2}<br>`               
    }
}
