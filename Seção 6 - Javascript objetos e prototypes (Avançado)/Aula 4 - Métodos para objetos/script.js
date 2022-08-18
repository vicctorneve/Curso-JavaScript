// Copiar objeto

const produto = {nome: 'caneca', preco: 1.5};

const cloneProduto = { ...produto, material: 'argila' }; //maneira 1 
const cloneProduto2 = Object.assign({}, produto, {material: 'argila'}); //Maneira 2

Object.freeze(cloneProduto) // impede de alterar o objeto

cloneProduto.nome = 'xicara';
cloneProduto2.nome = 'jarro';

console.log(Object.keys(produto)) // ver chaves do array
console.log(Object.values(produto)) // mostra os valores das chaves
console.log(Object.entries(produto))

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // retorna o descritor do objeto