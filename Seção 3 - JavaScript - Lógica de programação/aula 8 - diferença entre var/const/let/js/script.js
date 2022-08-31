// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função;

// let nome = 'Luiz'; // Criando
// var nome2 = 'Luiz'; // Criando

// if (true) {
//    let nome = 'Otavio' //criando variavel de escopo local
//    var nome2 = 'joao'
// }
// console.log(nome, nome2);

function falaOi() {
   var nome = 'joao'
   if (true) {
      var nome = 'maria'

   }
}
var nome = 'pedro';
console.log(nome); // exibe o ultimo var redeclarado

falaOi()