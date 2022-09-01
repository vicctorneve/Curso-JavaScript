class ContaBancaria {
   constructor(nome){
      this.nome = nome;
      this.saldo = 0
   }

   sacar(valor){
      if(typeof valor !== 'number') return;
      if(valor > this.saldo) {
         console.log('Saldo insuficiente')
         this.verSaldo()
         return
      }
      this.saldo -= valor
      this.verSaldo()
   }
   
   depositar(valor){
      this.saldo += valor;
      this.verSaldo()
   }

   verSaldo(){
      console.log(`Nome: ${this.nome} | Saldo: R$${this.saldo}`)
   }
}

class ContaCorrente extends ContaBancaria{
   constructor(nome, limite){
      super(nome);
      this.limite = 100
   }

   sacar(valor){
      if(typeof valor !== 'number') return;
      if(valor > this.saldo + this.limite) {
         console.log('Saldo insuficiente')
         this.verSaldo()
         return
      }
      this.saldo -= valor
      this.verSaldo()
   }
}

class ContaPoupanca extends ContaBancaria{
   constructor(nome){
      super(nome)
   }
}

function criarConta(tipo, nome){
   switch(tipo){
      case 1:
         this.cc = new ContaCorrente(nome);
         console.log('conta Corrente criada')
         break;
      case 2:
         this.cp = new ContaPoupanca(nome)
         console.log('conta Poupança criada')
         break;
      default:
         console.log('Erro, conta não criada')
   }
}

criarConta(1, 'vicctor')

