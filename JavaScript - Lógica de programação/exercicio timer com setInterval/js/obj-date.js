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
btnStart.addEventListener('click', startTimer)
function startTimer() {
   clearInterval(timer);
   timer = setInterval(function () {
      segundos++
      cronometro.innerHTML=createTimer(segundos)
   }, 1000)
   addColorBlack()
}
btnStop.addEventListener('click', stopTimer)
function stopTimer() {
   clearInterval(timer);
   cronometro.style.color = '#ff0000';
}

btnReset.addEventListener('click', resetTimer)
function resetTimer() {
   addColorBlack()
   segundos = 0;
   cronometro.innerHTML='00:00:00'
   clearInterval(timer)
}