/*
&& -> false && true -> false
* caso detecte uma expressão false usando o operador &&(and), ele para de ler e retorna o valor da expressão false

valores avaliado em falso são chamados de Falsy: 
- 0
- " ", ' ', ` ` (string vazia)
null / undefined
NaN

todos os outros valores não listados, são avaliados como true em JavaScript

*/

console.log('luiz' && 0 && 10 && 'joao'); // o js lê até o 0, que é uma expressão false, e retorna seu valor.

/*
* caso todas expressões sejam true, ele le tudo e retorna o valor da ultima
*/

console.log('joao' && 'pedro' && 50)

/* 
|| (or) -> true || false -> true //retorna true - precisa de apenas 1 expressão verdadeira para retorna true

* retorna a primeira expressão true
*/

console.log(0 || null || undefined || 10 || 'joao') // retorna o valor 10, pois é a primeira expressão true

// exemplo:

let corUsuario = null;

corUsuario = 'red';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);