function random(max, min){
   const r = Math.random() * (max - min) + min;
   return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = 10;

console.log(rand !== 10)
while (rand !== 10) { // checa a condição e dps executa o codigo
   rand = random(min, max);
   console.log(rand);
}

// condição while é mais utilizada para criar um loop que termina aleatoriamente

// do while executa o codigo e dps checa a condição
console.log('--------------Do While--------------')
do {
   rand = random(min, max);
   console.log(rand);
} while (rand !== 10)