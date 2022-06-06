/* Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> apenas 1 precisa ser verdadeira para retornar true
! -> NOT -> NÃO -> Inverte o valor da expressão
*/
const expressaoAnd = true && true && true && false;
console.log(expressaoAnd); // retorna false

const expressaoOr = true || false || false || false; 
console.log(expressaoOr) //retorna true

const expressaoNot = !false;
console.log(expressaoNot) // retorna o true (inverte) 