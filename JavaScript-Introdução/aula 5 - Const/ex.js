/*
   Vicctor Neves nasceu em 2003 e tem 19 anos, pesa 50 kg e tem 1.7 de altura e seu IMC é de 17.301038062283737
*/


const nome = "Vicctor";
const sobrenome = "Neves";
const anoDeNascimento = 2003;
const idade = 2022 - anoDeNascimento;
const peso = 50;
const alturaemM = 1.7;
const imc = peso / (alturaemM ** 2);

console.log('Usando ","');
console.log("")
console.log(nome, sobrenome, 'nasceu em', anoDeNascimento, 'e tem', idade, 'anos, pesa', peso, 'kg e tem', alturaemM, 'de altura e seu IMC é de', imc, '.')

console.log('')
console.log('Usando "+"');
console.log("")
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoDeNascimento + ' e tem ' + idade + ' anos, pesa ' + peso + 'kg e tem ' + alturaemM + ' de altura e seu IMC é de ' + imc + '.')

console.log('')
console.log('Usando "`${}´"');
console.log("")
console.log(`${nome} ${sobrenome} nasceu em ${anoDeNascimento} e tem ${idade} anos, pesa ${peso} kg e tem ${alturaemM} de altura e seu IMC é de ${imc}.`)



 



