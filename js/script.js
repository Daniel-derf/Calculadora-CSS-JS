function insert(num){
    document.getElementById("tela-texto").innerHTML += num;
}

function limpar(){

    document.getElementById("tela-texto").innerHTML = "";
    
}

function remover(){
    var tela = document.getElementById("tela-texto").innerHTML
    document.getElementById("tela-texto").innerHTML = tela.substring(0, tela.length -1);
}

function calcular(){
    var resultado = document.getElementById('tela-texto').innerHTML;

    if (resultado) {

        document.getElementById('tela-texto').innerHTML = eval(resultado);

    }
}