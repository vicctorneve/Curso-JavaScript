const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
const pessoas = [];
function recebeEventoForm (evento) {
   evento.preventDefault();
   const nome = form.querySelector('#nome');
   const sobrenome = form.querySelector('#sobrenome');
   const peso = form.querySelector('#peso');
   const altura = form.querySelector('#altura');
   const imc = peso.value/ (altura.value**2);
   //adiciona no array e cria object 
   pessoas.push({
      nome:nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
      imc: imc
   });
   resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} pesa ${peso.value} e sua altura é ${altura.value} e tem IMC de ${imc.toFixed(2)}</p>`
}
form.addEventListener('submit', recebeEventoForm);
const btnReset = document.querySelector('#btn-reset');
btnReset.addEventListener('click', function(){
   resultado.innerHTML ='';
})