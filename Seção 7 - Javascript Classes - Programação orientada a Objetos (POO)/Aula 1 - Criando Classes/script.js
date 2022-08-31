class Pessoa {
   constructor(nome, sobrenome){
      this.nome = nome;
      this.sobrenome = sobrenome;
   }

   falar(){
      console.log(`${this.nome} está falando`)
   }
}

const p1 = new Pessoa('vicctor', 'Neves')
console.log(p1)

function Pessoa2(nome, sobrenome){
   this.nome = nome;
   this.sobrenome = sobrenome;
}

Pessoa2.prototype.fala = function(){
   console.log(`${this.nome} está falando`)
}

const p2 = new Pessoa2('João', 'Santos')
console.log(p2)