class DispositivoEletronico{
   constructor(nome){
      this.nome = nome;
      this.ligado = false;
   }

   ligar(){
      if(this.ligado){
         console.log(this.nome + ' Já ligado')
         return
      }

      this.ligado = true
   }

   desligar(){
      if(!this.ligado){
         console.log(this.nome + ' Já desligado')
         return;
      }

      this.ligado = false
   }
}

class Smartphone extends DispositivoEletronico{ //extends faz Smartphone herdar os metodos de DispositivoEletronico
   constructor(nome, cor){
      super(nome); // serve para chamar metodos ou parametros que pertecem ao pai do objeto
      this.cor = cor;
   }
}
const s1 = new Smartphone('Iphone', 'branco');
s1.ligar()
console.log(s1)