// Script Calculador Freelancer

let horaDia = document.querySelector('#horasdia');
let taxaHora = document.querySelector('#taxahora');
let checkbox = document.querySelector('#check');

horaDia = Number(horaDia.value);
taxaHora = Number(taxaHora.value);

let taxaDia = horaDia * taxaHora;
console.log(taxaDia)