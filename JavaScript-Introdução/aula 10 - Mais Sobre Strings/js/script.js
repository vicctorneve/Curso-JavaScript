//               01234567
let umaString = "um textoe"

console.log(umaString.length)
console.log(umaString[4]); //  Mostra a o valor no indice 4 = e
console.log(umaString.charAt(5)); //Mostra a o valor no indice 5 = x
console.log(umaString.indexOf('e')); // Mostra o primeiro indice do valor da esquerda pra direita da letra 'e' = 4
console.log(umaString.lastIndexOf('e'));  // Mostra o primeiro indice do valor da esquerda pra direita da letra 'e' = 4
console.log(umaString.replace('um', 'outro')); // Alterar o valor
console.log(umaString.length); // Número total de indice
console.log(umaString.slice(3, 8)) // Fatiar por caractere
console.log(umaString.split(' ')) // dividir
console.log(umaString.toUpperCase()) // tudo em Maiusculo
console.log(umaString.toLowerCase()) // tudo em minusculo