/* Operadores de comparação
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a
== Igualdade (valor) *** Não recomendavel
=== Igualdade estrita (Valor e tipo)
!= Diferente (valor) *** Não recomendavel
!== Diferente estrito (Valor e tipo)
*/

// Exemplos

const compMaiorQue = (10 > 5);
console.log('(>) 10  é maior que 5:', compMaiorQue); //retorna true
console.log('(>=) 10  é maior ou igual a 10:', 10 >= 10); //retorna true
console.log('(<) 10  é menor que 9:', 10 < 9); //retorna false
console.log('(<=) 10  é menor ou igual a 12:', 10 <= 12);

console.log('(==) 10  é igual a "10"',10 == '10'); // NÃO RECOMENDAVEL UTILIZAR (==), POIS AO COMPARAR UM NUMBER COM STRING, O JAVASCRIPT ENTENDE QUE É 2 NUMBER E CORRIGE, POREM ISSO PODE GERAR UM ERRO NO CODIGO USANDO UM NUMBER COM STRING. 
console.log('(===) 10  é igual a "10":',10 === '10') //SEMPRE UTILIZAR 3 SINAIS DE IGUALDADE (===), POIS ELE COMPARA O VALOR E O TIPO

console.log('(!=) 10  é diferente de "10":',10 != '10'); // NÃO RECOMENDAVEL UTILIZAR (!=), COMPARA APENAS O VALOR.
console.log('(!==) 10  é diferente de "10":',10 !== '10'); // NÃO RECOMENDAVEL UTILIZAR (!=), COMPARA APENAS O VALOR.
