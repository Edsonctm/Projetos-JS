var titulo = document.querySelector("#titulo")
var msg = document.querySelector("#regras")
var cor = document.querySelector("#color")
var alterar = document.querySelector("#alterar")
var resultado = document.querySelector("#resultado")


titulo.innerHTML = ("Bem-vindo ao trocador de cores")
msg.innerHTML = ("Escolha abaixo qual cor deseja colocar dentro do quadrado e depois clique em \"alterar\"")

alterar.addEventListener("click", mudacor)

function mudacor(){
    resultado.style.backgroundColor = cor.value
}