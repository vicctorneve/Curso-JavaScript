// SCRIPT CALCULADORA FREELANCER
let horaJob = 8;
let taxaDiaria;
let taxaHora = document.querySelector('#taxahora');
let orcamento = document.querySelector('#orcamento');
let diasUteis;

let result = document.querySelector('#container-resultado');

send.addEventListener( calcular);

function calcular(){
   // Taxa por hora trbalhada
   taxaHora = taxaHora.value;
   result.innerHTML += `<p> Taxa por hora trabalhada: ${taxaHora} </p>`;

   //taxa Diaria
   taxaDiaria = taxaHora * horaJob;
   result.innerHTML += `<p> Taxa diaria: ${taxaDiaria} </p>`;

   orcamento = orcamento.value;
   diasUteis = orcamento / taxaDiaria;
   

}