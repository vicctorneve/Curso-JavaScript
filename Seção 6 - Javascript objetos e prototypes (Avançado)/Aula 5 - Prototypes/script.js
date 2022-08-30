// Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

/* Definição de protótipo
   Protótipo é o termo usado para se referir ao que foi criado pela pela primeira vez, servindo de molde para futura produções.
*/

function Pessoa (nome, sobrenome){
   this.nome = nome;
   this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
   return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Vicctor', 'Neves')
const pessoa2 = new Pessoa('joao', 'Neves')
console.log(pessoa2.nomeCompleto())