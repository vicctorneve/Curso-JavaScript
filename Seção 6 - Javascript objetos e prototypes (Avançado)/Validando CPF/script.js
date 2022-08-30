const inputCpf = document.querySelector('#input-cpf');
const btnValideCpf = document.querySelector('#btn-valid-cpf');
const containerCpf = document.querySelector('.container-cpf');
const p = document.querySelector('#result-cpf')
inputCpf.addEventListener('keyup', function(){
   inputCpf.value[3] += '.'
})
function ValidaCPF(cpfEnviado){
   Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      get: function(){
         return cpfEnviado.replace(/\D+/g, '');
      }
   });
}

ValidaCPF.prototype.valida = function(){
   if(typeof this.cpfLimpo === 'undefined') return false;
   if(this.cpfLimpo.length !== 11) return false;
   if(this.isSequencia()) return false;
   const cpfParcial = this.cpfLimpo.slice(0,-2)
   const digit1 = this.createDigit(cpfParcial);
   const digit2 = this.createDigit(cpfParcial + digit1);
   const newCpf = cpfParcial + digit1 + digit2;
   return newCpf === this.cpfLimpo;
}

ValidaCPF.prototype.createDigit = function(cpfParcial){
   const cpfArray = Array.from(cpfParcial)
   let regressivo = cpfArray.length + 1
   const total1 = cpfArray.reduce((ac,valor)=> ac += regressivo-- * Number(valor),0)
   const digit = 11 - (total1 % 11);
   return digit > 9 ? String(0) : String(digit);
}
ValidaCPF.prototype.isSequencia = function(){
   const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
   return sequencia === this.cpfLimpo;
}
btnValideCpf.addEventListener('click', function(){
   if(inputCpf.value === '' ) return
   const cpf = new ValidaCPF(inputCpf.value);
   if(cpf.valida()){
      p.innerHTML = 'CPF válido';
      p.style.color = 'rgb(14, 185, 8)';
   }else{
      p.innerHTML = 'CPF Inválido';
      p.style.color = 'red';
   }
})




