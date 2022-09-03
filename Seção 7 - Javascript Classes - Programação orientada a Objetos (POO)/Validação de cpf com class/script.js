// return cpfLimpo = cpf.replace(/\D+/g, '');
class ValidaCPF{
   constructor(cpf){
      this.cpf = cpf;
      Object.defineProperty(this, 'cpfLimpo', {
         enumerable: true,
         value: this.cpf.replace(/\D+/g, '')
      })
   }
   
   valida(){
      if(typeof this.cpfLimpo === 'undefined') return false;
      if(this.cpfLimpo.length !== 11) return false;
      if(this.isSequence()) return false;
      const cpfParcial = this.cpfLimpo.slice(0,-2);
      const digit1 = createDigit(cpfParcial);
      const digit2 = this.createDigit(cpfParcial + digit1);
      console.log(digit1, digit2)
   }

   createDigit(cpfParcial){
      const cpfArray = Array.from(cpfParcial);
      let regressive = cpfArray.length + 1;
      const total = cpfArray.reduce((ac, valor) =>{
         return ac += regressive-- * Number(valor)
      },0)
      const digit = 11 - (total % 11);
      return digit > 9 ? String(0) : String(digit)
   }

   isSequence(){
      const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
      return sequencia === this.cpfLimpo;
   }
}

const cpf = new ValidaCPF('705.484.450-52')
cpf.valida()