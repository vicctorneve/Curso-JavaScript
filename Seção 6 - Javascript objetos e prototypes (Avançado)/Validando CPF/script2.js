const btnValidCpf = document.querySelector('#btn-valid-cpf');
const inputCpf = document.querySelector('#input-cpf');
const resultCpf = document.querySelector('#result-cpf');

function getCpf  (){
   return cpf = inputCpf.value
}

const cleanCpf =() =>{
   const cpf = getCpf();
   return cpfLimpo = cpf.replace(/\D+/g, '');
}

function ValidaCpf(){
   const cpfLimpo = cleanCpf();
   if (cpfLimpo.length !== 11) return false
   if (isSequence()) return false
   const cpfParcial = cpfLimpo.slice(0,-2);
   const digit1 = createDigit(cpfParcial);
   const digit2 = createDigit(cpfParcial + digit1);
   const newCpf = cpfParcial + digit1 + digit2;
   return newCpf === cpfLimpo
}

function createDigit (cpfParcial) {
   const cpfArray = Array.from(cpfParcial);
   let regressivo = cpfArray.length + 1;
   const total = cpfArray.reduce((ac,valor) => ac += regressivo-- * Number(valor),0);
   const digit = 11 - (total % 11)
   return digit > 9 ? String(0) : String(digit)
}

const isSequence = () =>{
   const cpfLimpo = cleanCpf();
   const sequence = cpfLimpo[0].repeat(cpfLimpo.length);
   return sequence === cpfLimpo
}

btnValidCpf.addEventListener('click', function(){
   if(inputCpf.value === '') return
   const cpf = new ValidaCpf(inputCpf.value)
   if(ValidaCpf()){
      resultCpf.innerHTML = 'CPF válido';
      resultCpf.style.color = 'rgb(14, 185, 8)';
   } else{
      resultCpf.innerHTML = 'CPF Inválido';
      resultCpf.style.color = 'red';
   }
})



