//criando erro

function soma(x,y){
   if (typeof x !== 'number' || typeof y !== 'number'){
      throw new Error('x e y precisam ser number')
   }
   return x + y
}
try{
   console.log(soma(1,'2'));
} catch (err) {
   // console.log(err) usado apenas para o back end
   console.log('erro!')
}

console.log('continuando...')