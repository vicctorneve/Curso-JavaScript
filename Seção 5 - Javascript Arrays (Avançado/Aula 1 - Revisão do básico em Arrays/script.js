// Valor por referência
//index           0          1       2
const nomes = ['vicctor', 'joao', 'pedro'];
const novo = [...nomes]

nomes[2] = 'lucas'; // Alterar o elemento do indice 2 para 'lucas'
console.log(nomes)
console.log(novo)

console.log('Tamanho do array é:',nomes.length) // Tamanho do array
console.log(nomes)

const removido = nomes.pop() // remove o elemento do ultimo indice
console.log(nomes,'elemento removido foi', removido)

nomes.push(removido) // adiciona elemento no final
console.log(nomes, 'elemento adicionado foi', removido)


// pouco utilizado, já que desloca todos os indices do array
nomes.unshift('luiza') // adicioana elemento no inicio
console.log(nomes)
nomes.shift() // remove elemento do inicio
console.log(nomes)
// delete nomes[0] - Remove o elemento e deixa o espaço vazio, não deslocando os indices
// console.log(nomes)
novo.push('joana', 'maria')
console.log(novo)
const novoArray = novo.slice(1,-1)
/* Sintaxe 
   array.slice(inicio, fim)

   inicio - remove x elementos apartir inicio
   fim - remove x elementos apartir do final
*/
console.log(novoArray)

const myName = 'vicctor da silva neves';
const myNameInArray = myName.split(' ');// converte string em array
console.log(myNameInArray)

const arrayInString = myNameInArray.join(' ') //converte array em string
console.log(arrayInString)








