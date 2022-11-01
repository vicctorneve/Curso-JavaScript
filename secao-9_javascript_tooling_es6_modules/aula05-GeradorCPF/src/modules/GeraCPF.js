import ValidaCPF from "./ValidaCPF";

export default class GeraCPF{
   rand(min = 100000000, max = 999999999){
      return String(Math.floor(Math.random() * (max - min) + min));
   }
   format(cpf) {
      return(
         cpf.slice(0,3) + '.' +
         cpf.slice(3,6) + '.' + 
         cpf.slice(6,9) + '-' +
         cpf.slice(9,11)
      );
   }
   geraNewCpf(){
      const cpfSemDigito = this.rand();
      const digito1 = ValidaCPF.createDigite(cpfSemDigito)
      const digito2 = ValidaCPF.createDigite(cpfSemDigito + digito1)
      const newCpf = cpfSemDigito + digito1 + digito2
      return this.format(newCpf);
   }
}