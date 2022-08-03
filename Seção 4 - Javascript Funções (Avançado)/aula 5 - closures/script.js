// é a capacidade da função de lembrar do seu escopo léxico e do sem ambiente ao redor.

let x = 100;
function fora (y){
   return function(){
      return x + y
   }
}
const somarXMais10 = fora(10)
console.log(somarXMais10())