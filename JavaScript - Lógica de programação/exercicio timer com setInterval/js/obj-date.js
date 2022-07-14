let cronometro = document.querySelector('.timer')
const btnStart = document.querySelector('#btn-start');
const btnStop = document.querySelector('#btn-stop');
const btnReset = document.querySelector('#btn-reset');
let timer;
let segundos = 0;

function createTimer(segundos) {
   const data = new Date(segundos*1000)
   return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
   })
}
btnStart.addEventListener('click', startTimer)
function startTimer() {
    timer = setInterval(function () {
      cronometro.innerHTML=createTimer(segundos)
      segundos++
   }, 1000)
   cronometro.style.color = '#000000';
   
}
btnStop.addEventListener('click', stopTimer)
function stopTimer() {
   cronometro.style.color = '#ff0000';
   clearInterval(timer);
}

btnReset.addEventListener('click', resetTimer)
function resetTimer() {
   cronometro.style.color = '#000000';
   segundos = 0;
   cronometro.innerHTML=createTimer(segundos)
   clearInterval(timer)
}