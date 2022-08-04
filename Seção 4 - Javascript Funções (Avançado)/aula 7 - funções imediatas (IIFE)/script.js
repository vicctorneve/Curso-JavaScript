// IIFE -> Imediately invoked function express

// Basicamente é uma função que é invocada automaticamente quando ela é criada

(function(){
   function criaNome(nome, sobrenome){
      return nome + ' ' +  sobrenome;
   }

   (function falaNome(){
      console.log(criaNome('Vicctor', 'Neves'))
   }())
}()) 

