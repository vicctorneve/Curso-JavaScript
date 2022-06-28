// /* INDICE        0     1     2     3     4     5     6     7     8   */
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// // ... rest = pegar o resto / ... spread = espalhar
// const [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero);
// console.log(resto);


// const letras = [ 
//    //     0    1    2
//    /*0*/['a', 'b', 'c'], // Lista 1
//    /*1*/['d', 'e', 'f'], // Lista 2
//    /*2*/['g', 'h', 'i']  // Lista 3
// ];

// const [lista1, lista2, lista3] = letras;
// console.log(lista3[2]);

const jogoDaVelha = [
   ['1', '2', '3'],
   ['4', '5', '6'],
   ['7', '8', '9']
];
const [linha1, linha2, linha3] = jogoDaVelha;

linha1[1] = 'x';

console.log(linha1);
console.log(linha2);
console.log(linha3);



