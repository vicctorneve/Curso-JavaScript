// Funções de callback servem para garantir uma ordem em que determinada tarefa devem ser executadas 
// no exemplo abaixo, utilizei o setTimeout para simular que uma tarefa demoraria para ser excutado, assim embaralhando a ordem de execução

function falaNome(callback){ // Recebe uma função de callback
   setTimeout(function() {
      console.log('Vicctor');
      if (callback) callback() // Se callback for true, será executado
   },3000) // É executada após 3 segundos
}
function falaSobrenome(callback){
   setTimeout(function () {
      console.log('Neves');
      if (callback) callback()
   },2000) // É executada após 2 segundos
}
function falaIdade(callback) {
   setTimeout(function() {
      console.log(18);
      if (callback) callback()
   },1000) // É executada após 500 ms
};
falaNome(sobrenomeCallback) // executa a function falaNome e logo em seguida a função de callback sobrenomeCallback

function sobrenomeCallback() {
   falaSobrenome(idadeCallback) // executa a function falaSobrenome e logo em seguida a função de callback idadeCallback
}

function idadeCallback() {
   falaIdade(infoCallback) // executa a function falaIdade e logo em seguida a função de callback infoCallback
}

function infoCallback(){
   console.log('Minhas infos')
}