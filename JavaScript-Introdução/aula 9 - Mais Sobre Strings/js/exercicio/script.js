/*
O seu nome é ${nome
Seu nome tem: ${nome.length} letras 
A segunda letra do seu nome é: ${nome[1]}
Qual o primeiro índice da letra "C" no seu nome? ${nome.indexOf('c')}
Qual o ultimo índice da letra "S" no seu nome? ${nome.lastIndexOf('s')
As últimas 3 letras do seu nome são: _____
As palavras do seu nome são: ______
Seu nome com letras maiúsculas: _____
Seu nome com letras minúsculas: _____
*/

const nome = 'Vicctor da Silva Neves';
console.log(nome); //nome
console.log(nome.length);//número de letras =
console.log(nome[1]); // segunda letra = i
console.log(nome.indexOf('c')) ;// indice da letra c
console.log(nome.lastIndexOf('s')); // indice da ultima letra s
console.log(nome.slice(-3, nome.length));
console.log(nome.split(' '));
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());