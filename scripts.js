
var botao = document.getElementById('botao');
var saida = document.getElementById('saida-de-dados');
var nome  = document.getElementById('nome');
var email  = document.getElementById('email');
var tel  = document.getElementById('tel');
var cep = document.getElementById('cep');
var logr = document.getElementById('logr');
var num = document.getElementById('num');
var compl = document.getElementById('compl');
var bairro = document.getElementById('bairro');
var cid = document.getElementById('cid');
var estd = document.getElementById('estd');
 
 
botao.addEventListener('click', function(e) {
   
 
   
    //validação dos dados 


    if(cep.value.length <8){
        alert('Entre com um cep válido!');
        return; 
    }

    //formatar os dados 
    cep.value = cep.value.replace('-', '');
    
    const url = `https://viacep.com.br/ws/${cep.value}/json`;
   
    fetch(url)
        .then(resposta => resposta.json())
        .then(dadosEndereco => {
            logr.value = dadosEndereco.logradouro;
            bairro.value = dadosEndereco.bairro;
            cid.value = dadosEndereco.localidade;
            estd.value = dadosEndereco.uf;
            compl.value = dadosEndereco.complemento;

            saidaDeDados(); //chamada da função 
        });
    
        function saidaDeDados(){
            saida.innerText = `Nome: ${nome.value}  ` +
    `\nEmail: ${email.value}  ` +
    `\nTelefone: ${tel.value}  ` +
    `\nCEP: ${cep.value}  ` + 
    `\nLogradouro: ${logr.value}  ` +
    `\nNúmero: ${num.value}` + 
    `\nComplemento: ${compl.value}  ` + 
    `\nBairro: ${bairro.value}  ` + 
    `\nCidade: ${cid.value}` +
    `\nEstado: ${estd.value}`;
            
        }
       
 
});