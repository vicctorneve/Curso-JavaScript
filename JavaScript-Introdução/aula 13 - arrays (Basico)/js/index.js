// Array - Basico
// Array server para criar lista de variaveis

// array = object

/*As String são indexadas por valor
              012345789... */
const nome = 'Vicctor Neves'

// Recomendado utilizar apenas 1 tipo de dado dentro de um array

/* Em arrays são indexados por elemento
                 0          1       2       */
const alunos = ['gabriel', 'joao', 'vicctor'];


// alunos[0] = 'Eduardo'; = alterar elemento
// console.log(alunos) = mostra todos os elementos do array
// console.log(alunos[0]) = primeiro elemento do array

/* Maneiras de adicionar elemento no array.

   alunos[3] = 'argolo'; = Adicionar elemento no array

   1- alunos[alunos.length] = 'Luiza'; = Adiciona no fim do array
      alunos[alunos.length] = 'fabio';
      alunos[alunos.length] = 'luana';

   2- Maneira mais simples - Adiciona no fim do array
      alunos.push('luiza'); 
      alunos.push('otavio'); 

   3- alunos.unshift('Luiza'); // Adiciona no começo
      alunos.unshift('fabio'); // Adiciona no começo
*/

/* Remover elementos
   const removido = alunos.pop(); // remover elemento do final
   console.log(removido); //mostrar o elemento removido

   const removido = alunos.shift(); // remover elemento do inicio
   console.log(removido); //mostrar o elemento removido
   //delete alunos[1]; = apagar o elemento e deixa o espaço vazio (não altera o index)
*/

// Fatiar o array 

console.log(alunos.slice(0, 2)) 

/*
Adicionar e remover elementos em qualquer posição do array

   console.log(alunos)
   [ 'gabriel', 'joao', 'vicctor' ]

   alunos.splice(2,0, 'luiza', 'paulo'); // Adiciona elemento apartir do indice 2 e remover 0

   console.log(alunos);
   [ 'gabriel', 'joao', 'luiza', 'paulo', 'vicctor' ]

   alunos.splice(2,2); // remover 2 elementos apatir do indice 2
   0
   console.log(alunos);
   [ 'gabriel', 'joao', 'vicctor' ]

   Resultado

   
*/