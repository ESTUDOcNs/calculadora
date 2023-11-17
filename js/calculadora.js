function insert (num) {
    var numero =
    document.getElementById ('resultado') .innerHTML
    document.getElementById('resultado') .innerHTML = numero + num
}

function limpar(){
    document.getElementById('resultado').innerHTML=""
}
function voltar(){
  var resultado = document.getElementById('resultado').innerHTML ;
  document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length-1)
}
function calcular(){
	var resultado = document.getElementById('resultado').innerHTML;
	if (!isNaN(eval(resultado)) && isFinite(eval(resultado))) {
        document.getElementById('resultado').innerHTML = eval(resultado).toFixed(2);
    } else {
        alert("Impossível Calcular");
        limpar(); // Chama a função limpar
    }}









