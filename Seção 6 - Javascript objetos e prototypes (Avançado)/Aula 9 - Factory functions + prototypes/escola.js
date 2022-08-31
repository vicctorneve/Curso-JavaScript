const fala = {
   falaAluno(){
      console.log(this.nome)
   }
}

const RegistraAlunoPrototype = {...fala}
function RegistraAluno(nome, sobrenome, serie){
   return Object.create(RegistraAlunoPrototype, {
      nome: {value: nome},
      sobrenome: {value: sobrenome},
      serie: {value: serie}
   })
}

const aluno1 = RegistraAluno('vicctor', 'neves', '3 ano')
console.log(aluno1.falaAluno())



