const inputCpf = document.querySelector('#input-cpf');
const btnValidCPF = document.querySelector('#btn-valid-cpf');
const p = document.querySelector('#result-cpf')

class ValidaCPF{
   constructor(cpf){
      Object.defineProperty(this, 'cpfLimpo',{
         enumerable:true,
         writable:false,
         configurable: false,
         value: cpf.replace(/\D+/g, '')
      });
   }

   valida(){
      if (this.cpfLimpo.length !== 11) return false
      if (this.isSequence()) return false

      const cpfParcial = this.cpfLimpo.slice(0,-2)
      const digit1 = ValidaCPF.createDigite(cpfParcial);
      const digit2 = ValidaCPF.createDigite(cpfParcial + digit1);
      const newCpf = cpfParcial + digit1 + digit2
      return newCpf === this.cpfLimpo
   }

   static createDigite(cpfParcial){
      const cpfArray = Array.from(cpfParcial);
      let regressive = cpfArray.length + 1;
      const total = cpfArray.reduce((ac,valor)=> {
        return ac += regressive-- * Number(valor)
      },0)
      const digit = 11 - (total % 11);
      return digit > 9 ? String(0) : String(digit)
   }

   isSequence(){
      return this.cpfLimpo[0].repeat(11) === this.cpfLimpo
   }
}


btnValidCPF.addEventListener('click', function(){
   if (inputCpf.value === '') return
   const cpf = new ValidaCPF(inputCpf.value);
   if(cpf.valida()){
      p.innerText = 'CPF válido';
      p.classList.remove('cpf-invalid')
      p.classList.add('cpf-valid')
   } else{
      p.innerText = 'CPF inválido'
      p.classList.remove('cpf-valid')
      p.classList.add('cpf-invalid')
   }
   
})
