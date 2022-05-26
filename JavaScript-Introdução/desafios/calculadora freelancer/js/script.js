// SCRIPT CALCULADORA FREELANCER

let horaJob = 8;
let taxaHora = document.querySelector('#taxahora');
let orcamento = document.querySelector("#orcamento");
let result = document.querySelector("#container-result");
const descontoMostrar = '40%';
const descontoConta = 0.40;
let valorMensal; 
let valorTotal = valorMensal 

function calcular() {
   taxaHora = taxaHora.value;
   orcamento = orcamento.value;

   //Taxa Horaria
   result.innerHTML += `<p> Taxa por hora trabalhada: R$: ${taxaHora} </p>`;
   // Taxa Diara
   let taxaDiaria = taxaHora * 8;
   result.innerHTML += `<p> Taxa Diaria: R$: ${taxaDiaria} </p>`;

   // condição - se o checkbox for checked, faça
   /*
      Se dias uteis > 22 faça
         
   */
  
   //Orcamento
   result.innerHTML += `<p> Orçamento: R$: ${orcamento} </p>`;

   const diasUteis = orcamento / taxaDiaria
   result.innerHTML += `<p> Dias uteis: ${Math.round(diasUteis)} </p>`;

   //Desconto
   result.innerHTML += `<p> Desconto: ${descontoMostrar} </p>`;

   result.innerHTML += `<p> Valor Mensal: ${valorMensal} </p>`;

   //Fim condição

   result.innerHTML += `<p> Valor Total: ${valorTotal} </p>`;
}
