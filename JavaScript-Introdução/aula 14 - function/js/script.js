/* MANEIRA 1 */
function soma(x = 0, y = 0){
   const resultado = x + y; // variavel de escopo local
   return resultado // encerra a function

   // tudo abaixo de return não será lido
   console.log('olá mundo') 
}
// Versão simplificada
const soma2 = (x, y) => x + y 

console.log(soma2(5,10));


   // MANEIRA 2
   const raiz1 = function (n){ 
      return Math.sqrt(n)
   };
   console.log(`raiz quadrada é ${raiz1(16)}`)
   
   // Quando a função tiver só 1 linha, podemos simplicar dessa maneira:
   // e quando tivemos só um paramentro na função, podemos eliminar os parenteses

   const raiz = n => Math.sqrt(n) // chamado de arrow fuction
   console.log(raiz(9));

