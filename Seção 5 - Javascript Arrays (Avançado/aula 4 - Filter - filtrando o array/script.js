// Filter sempre retorna um array, com a mesma quantidade de elementos, ou menos.
const numeros = [5,50,80,1,2,3,5,8,7,11,12,27];
const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados)



const pessoas = [
   {nome: 'Luiz', idade: 62},
   {nome: 'Maria', idade: 23},
   {nome: 'Eduardo', idade: 55},
   {nome: 'Leticia', idade: 19},
   {nome: 'Rosana', idade: 32},
   {nome: 'Wallace', idade: 47},
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
console.log('pessoas com nome com 5 ou mais de 5 letras')
const peopleWithMore5Letters = pessoas.filter(obj => obj.nome.length >= 5);
console.log(peopleWithMore5Letters)

// Retorne as pessoas com mais de 50 anos
console.log('pessoas mais de 50 anos')
const peopleWithMore50Years = pessoas.filter(obj => obj.idade > 50);
console.log(peopleWithMore50Years)

// Retorne as pessoas cujo nome termina com a
console.log('nome das pessoas que termina com a letra A')
const peopleWithNameStartLetterA = pessoas.filter(obj =>{
   return obj.nome.toLocaleLowerCase().endsWith('a')
});
console.log(peopleWithNameStartLetterA);

