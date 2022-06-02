/* Criar array utiliza-se [] colchete */
   const pessoa1 = []


/* Criar objeto utilza-se {} chaves*/
   const pessoa01 = {};

/* Fuction que cria objetos */

/*
   function criaAluno (nome, sobrenome, nota){
      return{nome,sobrenome,nota};
   };
*/
//VERSÃO SIMPLIFICADA

const criaAluno = (nome, sobrenome, nota) => ({nome,sobrenome,nota});

const aluno01 = criaAluno('Vicctor', 'Neves', 10);
const aluno02 = criaAluno('João', 'Silva', 8.5);
const aluno03 = criaAluno('Pedro', 'Carvalho', 6);
const aluno04 = criaAluno('Fernando', 'Oliveira', 5);

console.log(`${aluno01.nome} ${aluno01.sobrenome} tirou ${aluno01.nota} pontos na prova`);
console.log(`${aluno02.nome} ${aluno02.sobrenome} tirou ${aluno02.nota} pontos na prova`);
console.log(`${aluno03.nome} ${aluno03.sobrenome} tirou ${aluno03.nota} pontos na prova`);
console.log(`${aluno04.nome} ${aluno04.sobrenome} tirou ${aluno04.nota} pontos na prova`);

