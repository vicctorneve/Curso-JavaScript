const falar = {
   fala(){
      console.log(`${this.nome} está falando`)
   }
}
const comer = {
   comer(){
      console.log(`${this.nome} está comendo`)
   }
}
const beber = {
   beber(){
      console.log(`${this.nome} está bebendo`)
   }
}

const pessoaPrototype = {...falar, ...beber, ...comer}

function criaPessoa(nome,sobrenome) {
   return Object.create(pessoaPrototype, {
      nome: {value: nome},
      sobrenome: { value: sobrenome }
   }) 
}

const p1 = criaPessoa('Luiz', 'otávio')
console.log(p1)