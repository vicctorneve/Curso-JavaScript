const pessoa1 = {
   nome: 'vicctor',
   sobrenome: 'Neves',
   falaNome(){
      return (`${this.nome} ${this.sobrenome} está falando oi.`)
   },
   getIdade(){
      const dataAtual = new Date();
      return dataAtual.getFullYear() - 2003
   }
}
console.log(pessoa1.getIdade())

const aluno = new Object();
aluno.nota1 = 8;
aluno.nota2 = 8;
aluno.nota3 = 8;
aluno.nota4 = 8;
aluno.media = () =>{
   return ((aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4)/4)
}
console.log(aluno.media())

// function factory

function criaPessoa(nome, sobrenome){
   return{
      nome, sobrenome,
      get nomeCompleto(){ //não precisa executar o metodo
         return `${this.nome} ${this.sobrenome}`
      }
   }
}

const p1 = criaPessoa('Vicctor', 'Neves')
console.log(p1.nomeCompleto)

//Constructor functions

function Pessoa(nome, sobrenome){
   this.nome = nome;
   this.sobrenome = sobrenome;
   this.falaNome = function() {
      return `${nome} ${sobrenome}`
   }

   // Object.freeze(this) - trava o objeto por completo, não podendo ser alterado.
}

const p2 = new Pessoa('Vicctor', 'Neves')
Object.freeze(p2) //Trava objeto para não poder ser alterado
p2.sobrenome = 'silva'
console.log(p2.sobrenome)
const p3 = new Pessoa('joão', 'Neves')
console.log(p3.falaNome())