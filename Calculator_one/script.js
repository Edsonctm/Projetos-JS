function insert(num){

    document.getElementById("visor").innerHTML += num;
}

function clean(){
    document.getElementById("visor").innerHTML = "";
}

function apagar(){
   var visor =  document.getElementById("visor").innerHTML;
   document.getElementById("visor").innerHTML = visor.substring(0, visor.length -1);
}

function equal(){
    var visor =  document.getElementById("visor").innerHTML;

    if (visor){
    document.getElementById("visor").innerHTML = eval(visor)
} else {
    document.getElementById("visor").innerHTML = ("0")
}}