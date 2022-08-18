// Dobre os números
//               0  1  2 3 4 5 6 7 8 9  10  11
const numeros = [5,50,80,1,2,3,5,8,7,11,12,15,27];
const numerosEmDObro = numeros.map(valor => valor*2);
// console.log(numerosEmDObro);

const pessoas = [
   {nome: 'Luiz', idade: 62},
   {nome: 'Maria', idade: 23},
   {nome: 'Eduardo', idade: 55},
   {nome: 'Leticia', idade: 19},
   {nome: 'Rosana', idade: 32},
   {nome: 'Wallace', idade: 47},
];

const listName = pessoas.map(obj => obj.nome);
console.log(listName)

const removeKeyName = pessoas.map(obj => ({idade: obj.idade}))
console.log(removeKeyName);

const newObj = pessoas.map((obj, indice) => ({id: indice, ...obj}))
console.log(newObj)



