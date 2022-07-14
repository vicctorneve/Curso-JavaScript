function ShowHours() {
   let data = new Date()

   return data.toLocaleTimeString('pt-BR', {
      hour12: false
   });
}

const timer = setInterval(function (){
   console.log(ShowHours())
}, 1000);

setTimeout(function () {
   clearInterval(timer)
}, seconds(5));

setTimeout(function(){
   console.log('timer finalizado')
}, seconds(6));

function seconds(ms) {
   return ms*1000
}