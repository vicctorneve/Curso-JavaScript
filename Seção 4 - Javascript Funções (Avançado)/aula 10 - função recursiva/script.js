// é uma função que chama a si mesmo até encontrar uma instrução de parar.


function recursiva(max){
   console.log(max);
   if(max >= 10) return;
   max++
   recursiva(max)
}

recursiva(0)

//OBS: CASO NÃO ENCONTRE UMA INSTRUÇÃO DE PARAR, A FUNÇÃO SERÁ UM LOOP INFINITO.