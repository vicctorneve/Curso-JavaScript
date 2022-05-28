// Script Calculador Freelancer

let horaDia = document.querySelector('#horasdia');
let taxaHora = document.querySelector('#taxahora');
let checkbox = document.querySelector('#check');
let result = document.querySelector('#result')
let orcamento = document.querySelector('#orcamento');
let taxaDia = horaDia.value * taxaHora.value;

function send(){
   result.innerHTML = taxaDia;
   result.innerHTML = 
}