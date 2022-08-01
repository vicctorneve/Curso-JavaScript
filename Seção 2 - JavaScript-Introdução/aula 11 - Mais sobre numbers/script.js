// IEEE 754-2008
let num1 = 0.7; //Number
let num2 = 0.1; //Number

// CORRIGIR IMPRECISÃO

num1 = Number(num1.toFixed(2));
console.log(num1)

/* 
Para transformar um number em string sem modificar diretamente na variavel, utiliza-se 'variavel,toString()'.

   console.log(num1.toString() + num2); 

* Para alterar permanentemente basta usar:
   num1 = num1.toString()

* Para exibir a representação binaria, basta usar o parametro:
   console.log(num1.toString(2));

* Para definir o número de casas decimais, usa-se:
   console.log(num1.toFixed(2)) -- Não altera seu valor real

* Para saber se o numero é um número inteiro ou não:
   console.log(Number.isInteger(num1));
* Para saber se a conta é NaN:
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp));
*/
