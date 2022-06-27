const pessoa = {
   nome: 'Vicctor',
   sobrenome: 'Neves',
   idade: 18,
   endereco: {
      pais: 'Brasil',
      estado: 'Bahia'
   }
};
/*
// Atribuição normal:
const nome = pessoa.nome;
console.log(nome);
*/

// Atribuição via desestruturação:
const { nome: nick = '', sobrenome, idade } = pessoa;
console.log(nick, sobrenome);

const { endereco: {
      pais,
      estado 
   }, 
endereco 
} = pessoa;
console.log(pais,estado, endereco);