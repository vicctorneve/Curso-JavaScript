// SCRIPT CALCULADORA FREELANCER
let horaJob = 8;
let taxaHora; //pegar valor do input
let taxaDiaria = taxaHora * horaJob;

// 2

let orcamento; //pegar valor do input
let diasUteis = orcamento / taxaDiaria;

function calcular(){
   taxaHora = document.getElementById('taxahora').value;
   document.getElementById('container-resultado').innerHTML += `<p>Taxa pora hora trabalhada: R$:${taxaHora}</p>`;
}