const frutas = ['pera', 'Maçã', 'Uva'];

// for (i=0; i< frutas.length; i++){
//    console.log(frutas[i]);
// }

// uma maneira mais simples que a de cima, é utilizando for in:

for (let i in frutas) {
   console.log(frutas[i]);
}

//for in - lê os indices do array, ou chaves do objetos 

const pessoas = {
   nome: 'vicctor',
   sobrenome: 'neves',
   idade: 18
}

for (let keys in pessoas){
   console.log(pessoas[keys]);
}