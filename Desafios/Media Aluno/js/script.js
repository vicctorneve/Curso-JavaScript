const resultado = document.querySelector('.resultado-media');
const nomeAluno = prompt('Digite o nome do aluno:');
const notaUnidI = Number(prompt('Digite a nota da Unidade I:'));
const notaUnidII = Number(prompt('Digite a nota da Unidade II:'));
const notaUnidIII = Number(prompt('Digite a nota da Unidade III:'));
const notaUnidIV = Number(prompt('Digite a nota da Unidade IV:'));

const media = (notaUnidI + notaUnidII + notaUnidIII + notaUnidIV) / 4;

resultado.innerHTML= `<p>A media do aluno ${nomeAluno} foi ${media}</p>`;



