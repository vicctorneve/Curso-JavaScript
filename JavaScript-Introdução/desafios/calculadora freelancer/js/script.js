// Script Calculador Freelancer

let horaDia = document.querySelector('#horasdia');
let taxaHora = document.querySelector('#taxahora');
let checkbox = document.querySelector('#check');
let result = document.querySelector('#result')
let orcamento = document.querySelector('#orcamento');


function send(){
   horaDia = horaDia.value
   taxaHora = taxaHora.value

   let taxaDia = horaDia * taxaHora;

   let valorMensal 
   result.innerHTML = taxaDia;
   
}