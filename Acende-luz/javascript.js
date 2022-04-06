var titulo = document.querySelector("#titulo")
var lampada = document.querySelector("#imglampada")
var check = document.querySelector("#check")
var wally = document.querySelector("#wally")
var body = document.querySelector("body")
var msg = document.querySelector("#mensagem")

titulo.innerHTML = ("Clique na lâmpada para acender")
lampada.src = "./imagens/luz_apagada.png"

lampada.addEventListener("click", acende);

function acende() {
    console.log(check.checked)

    if (check.checked == false) {
        titulo.innerHTML = ("Clique novamente na lampada para apagar")
        lampada.src="./imagens/luz_acesa.png"
        body.style.backgroundColor = 'white'
        titulo.style.color = "black"
        wally.style.display = "flex"
        msg.innerHTML = ("Parabéns, você acendeu a lâmpada e de quebra encontrou o Wally!")

    } else {
        titulo.innerHTML = ("Clique na lâmpada para acender")
        lampada.src="./imagens/luz_apagada.png"
        body.style.backgroundColor = 'black'
        titulo.style.color = "white"
        wally.style.display = "none"
        msg.innerHTML = ("")
    }
}