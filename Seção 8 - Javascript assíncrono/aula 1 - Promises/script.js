const rand = (min, max) => Math.floor(Math.random() * ((max *=1000) - (min *= 1000)) + min);


function esperaAi(msg, tempo){
   return new Promise((resolve, reject) =>{
      setTimeout( () => {
         if(typeof msg !== 'string'){
            reject(new Error(`${msg} is not a string`))
            return;
         } 
         resolve(msg.toUpperCase() + ' - Passei na promise')
      }, tempo);
   });
}


/**
 * 
 * Promise.race 
 * Promice.resolve 
 * Promise.reject
*/

const Promises = [
   esperaAi('Promise 1', rand(1,5)),
   esperaAi('Promise 2', rand(1,5)),
   esperaAi('Promise 3', rand(1,5)),
]

/* Promise.all - É resolvida quando todas as promises da lista forem resolvidas ou assim que uma das promises da lista for rejeitada. 
(Caso rejeitada, é rejeitada com o motivo da primeira promise rejeitada, caso resolvida, ela é resolvida com um array dos valores das promises da lista)
*/


Promise.all(Promises) 
.then((valor)=>{
      console.log(valor)
   })
   .catch((e) =>{
      console.log(e)
   })

/* Promise.race - retorna a primeira promise da lista que for resolvida ou rejeitada, com um valor ou motivo daquela promise.
*/ 

Promise.race(Promises)
.then((valor)=>{
      console.log(valor)
   })
   .catch((e) =>{
      console.log(e)
   })


/* Promise.reject - Retorna um objeto Promise que foi rejeitado por um dado motivo. */
function baixaPagina() {
   const emCache = false;

   if(emCache){
      return Promise.reject('Pagina em cache');
   }else{
      return esperaAi('baixei a pagina', rand(1,5));
   }
}

baixaPagina()
   .then(dadosDaPagina =>{
      console.log(dadosDaPagina)
   })
   .catch(e => console.log('Erro', e))
   

// esperaAi('Conexão com o BD...', rand(1,3))
//    .then(resposta =>{
//       console.log(resposta);
//       return esperaAi('Buscando dados da base...', rand(1,3))
//    })
//    .then(resposta =>{
//       console.log(resposta)
//       return esperaAi(1111, rand(1,3))
//    })
//    .then(resposta => {
//       console.log(resposta)
//    })
//    .then(()=>{
//       console.log('Exibe dados na tela.')
//    })
//    .catch(e =>{
//       console.log(e)
//    })
