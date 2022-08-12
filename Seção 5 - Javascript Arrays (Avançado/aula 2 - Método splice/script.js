/* Sintaxe

   array.splice(indice, deleteX, addElement)

   é possivel adicionar mais de um elemento
*/

const nomes = ['Maria', 'joão', 'Eduardo', 'Gabriel', 'Julia']

console.log(nomes)
//pop
const removido = nomes.splice(-1, 1)
console.log(nomes, removido, 'pop')
//push
nomes.splice(nomes.length, 0, ...removido)
console.log(nomes, 'push')
//shift
// nomes.splice(0,1)
// console.log(nomes, 'shift')
// //unshift
// nomes.splice(0,0,'Maria')
// console.log(nomes, 'unshift')


