// Tipos de dados 

/*
Valores primitivos (valores imutaveis)- String, number, boolean, undefined, null (bigin, symbol) - valores copiados
*/

/*                   
Ex:         0123
let nome = 'Luiz'
nome[0] = 'R';
console.log(nome[0], nome)
NÃO ALTERA.
*/

// Valores por Referência (mútavel) - array, Object, Function

/*array[]

let a = [1,2,3];
let b = [...a]; //valor de a foi copiado pra dentro de b(independente)
let c = b;
console.log(a, b)

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b)

a.push('luiz')
console.log(a, b, c)

---------------------------------------------------------------------------
Object{} 
const a = {
   nome: 'Vicctor',
   sobrenome: 'Neves'
};
const b = {...a}; //valor de a foi copiado pra dentro de b
a.nome = 'joao';
console.log(b);
b.sobrenome = 'silva';
console.log(a,b)

*/
 