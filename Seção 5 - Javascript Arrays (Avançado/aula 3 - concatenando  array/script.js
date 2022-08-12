// 2 maneiras de concatenar arrays
/* 
1 - Sintaxe

array1.concat(array2)

concatenar array1 com array2
*/
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = array1.concat(array2, [7,8,9])
console.log(array3)

/* 
2 - Sintaxe

[...array1, ...array2];
dessa maneira ta espalhando 2 arrays dentro de outro array.
*/

const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = [...a1, ...a2]
console.log(a3)

 