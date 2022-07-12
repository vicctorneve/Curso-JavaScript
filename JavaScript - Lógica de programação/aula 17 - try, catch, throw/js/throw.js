//criando erro

function soma(x,y){
   if (typeof x !== 'number' || typeof y !== 'number'){
      throw('x e y precisam ser number')
   }
   return x + y
}

console.log(soma(1,2));
console.log(soma(1,'2'));