let cronometro = document.querySelector('.timer')
const btnStart = document.querySelector('#btn-start');
const btnStop = document.querySelector('#btn-stop');
const btnReset = document.querySelector('#btn-reset');
let timer;
let segundos = 0;
function addColorBlack () {
   cronometro.style.color = '#000000';
}
function createTimer(segundos) {
   const data = new Date(segundos*1000)
   return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
   })
}
document.addEventListener('click', function(e) { 
   const el = e.target;
   if (el.classList.contains('start')) {
      startTimer()
   }
   if (el.classList.contains('stop')) {
      stopTimer()
   }
   if (el.classList.contains('reset')) {
      resetTimer()
   }
}) 
function startTimer() {
   clearInterval(timer);
   timer = setInterval(function () {
      segundos++
      cronometro.innerHTML=createTimer(segundos)
   }, 1000)
   addColorBlack()
}
function stopTimer() {
   clearInterval(timer);
   cronometro.style.color = '#ff0000';
}

function resetTimer() {
   addColorBlack()
   segundos = 0;
   cronometro.innerHTML='00:00:00'
   clearInterval(timer)
}