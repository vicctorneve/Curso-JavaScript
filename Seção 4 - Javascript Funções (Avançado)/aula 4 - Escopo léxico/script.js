//Escopo léxico é o local onde a função foi definida

/* 
   Caso a variavel não seja encontrada no seu escopo lexíco, ela procura em seu escopo pai, caso não encontre novamente, procura no escopo do pai do pai dela, isso continua até chegar no escopo global

   ex:
*/

//Escopo global
const nome = 'vicctor';
function execute(){
   // Escopo léxico A
   function falaNome(){
      // Escopo local
      console.log(nome)
   }
   return falaNome()
}

execute()
/* 1- Procura no escopo local 
   2- caso não encontre, Procura no escopo léxico pai, que é o escopo A
   3- Caso não encontre, procura no escopo global
*/

