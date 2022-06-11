// If pode ser utilizado sozinho
// toda condição se inicia com if 
// posso usar varios else if na checagem
// Só posso ter um else na checagem pra finalizar a condição
// podemos usar condições sem else if, utilizando apenas if else

// Exemplo
const imc = 20;
let classificacao;
console.log(imc.toFixed(2));

if (imc < 18.5){
   classificacao = 'Abaixo do peso';
   console.log(classificacao)
} else if (imc >= 18.5 && imc <=24.9) {
   classificacao = 'Peso Normal'
   console.log(classificacao)
} else if (imc >= 25 && imc <=29.9) {
   classificacao = 'Sobrepeso'
   console.log(classificacao)
} else if (imc >= 30 && imc <= 34.9) {
   classificacao = 'Obesidade Grau I'
   console.log(classificacao)
} else if (imc >= 35 && imc <=39.9) {
   classificacao = 'Obesidade Grau II'
   console.log(classificacao)
} else {
   classificacao = 'Obesidade Grau III ou Mórbida'
   console.log(classificacao)
}

// só sera executado a primeira condição verdadeira do bloco if

const num = 10;

if (num >=0 && num<=4) {
   
}