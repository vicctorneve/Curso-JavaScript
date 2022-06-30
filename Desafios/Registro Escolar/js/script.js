const nomeInput = prompt('digite seu nome:');
const sobrenomeInput = prompt('digite seu sobrenome:');
const notaInput = Number(prompt('digite sua nota:'));

const criaAluno = (nome, sobrenome, nota) => ({nome,sobrenome,nota});

const aluno1 = criaAluno(nomeInput, sobrenomeInput, notaInput);
const aluno2 = criaAluno(nomeInput, sobrenomeInput, notaInput);
console.log(aluno1);

const {nome, sobrenome, nota} = aluno1;
console.log(nome, sobrenome, nota);