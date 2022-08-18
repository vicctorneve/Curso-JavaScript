let arr = [];
const randomNumber = () =>{
   return Math.round(Math.random() * (100 - 1) + 1);
}

for(let i = 0; i < 30; i++){
   arr.push(randomNumber());
}

const arrayPar = arr.filter(valor => {
   if (valor % 2 === 0) return valor
})
console.log(arrayPar)