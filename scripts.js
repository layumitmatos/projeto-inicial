var botao = document.getElementById("botao"); 
botao.addEventListener("click", alertar, false); 
var nome = document.getElementById("nome");


function alertar(event){
    alert("Você clicou no botão!" + event); 


}
function alertar(event){
    alert("Você clicou no botão,"+"" +  nome.value)
}