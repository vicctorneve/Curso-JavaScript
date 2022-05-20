/** NaN = Not a number
 * Aritméticos
 * [+ Adição] 
 * [/ Concatenação (Strings)]
 * [- menos] 
 * [/ divisão]
 * [* multiplicação]
 * [** (potenciação)]
 * [% (Resto da divisão)]
 * [++ (Incremento)]
 * [-- (Decremento)]
 */

// 1- pasrInt('numero') - Converte para numero Inteiro
// 2- parsefloat('numero') - converte para numero real
// 3- Number - Converte para todo tipo de número

//parseInt
const num1 = 10;
const num2 = parseInt('5');
const result = num1 + num2;
console.log(typeof result, result);

//parseFloat
const num3 = 10;
const num4 = parseFloat('5.2')
const result1 = num3 + num4;
console.log(typeof result1, result1);

//Number
const num5 = 10;
const num6 = Number('5.54');
const result2 = num5 + num6;
console.log(typeof result2, result2);

