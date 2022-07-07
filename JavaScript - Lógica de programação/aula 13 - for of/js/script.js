const nome = ['vicctor', 'joao', 'pedro'];

/* For classico */

console.log('-----------For classico-----------')
for (let i = 0; i < nome.length; i++){
   console.log(nome[i]);
}

/* For in */
console.log('--------------For in--------------')
for (let i in nome){
   console.log(nome[i]);
}

/* For of */
console.log('--------------For of--------------')
for (let valor of s) {
   console.log(valor);
}

/* ForEach */
console.log('--------------ForEach--------------')

nome.forEach(function(valor, indice, array) {
   console.log(valor, indice, array);
})