let cronometro = document.querySelector('.timer')
const btnStart = document.querySelector('#btn-start');
const btnStop = document.querySelector('#btn-stop');
const btnReset = document.querySelector('#btn-reset');
btnStop.addEventListener('click', addColorStop)
function addColorStop(){
   cronometro.classList.add('stoped-red');
}
btnStart.addEventListener('click', removerColorStoped)
function removerColorStoped(){
   cronometro.classList.remove('stoped-red')
}
let horas = 0;
let minutos = 0;
let segundos = 0;
let timer;

function zeroEsquerda (num) {
   if ( num < 10) {
      return `0${num}`
   } else {
      return num
   }
}
function showTime() {
   
   if (segundos > 59) {
      segundos = 0;
      minutos++
   } 
   if (minutos > 59) {
      minutos = 0;
      horas++
   }
   let relogio = `${zeroEsquerda(horas)}:${zeroEsquerda(minutos)}:${zeroEsquerda(segundos)}`
   return relogio
}
btnStart.addEventListener('click', startTimer)
function startTimer() {
   cronometro.style.color = '#000000';
   clearInterval(timer);
    timer = setInterval(function () {
      segundos++
      cronometro.innerHTML = showTime()
   },1000)
}
btnStop.addEventListener('click', stopTimer)
function stopTimer() {
   clearInterval(timer);
   cronometro.style.color = '#ff0000';
}

btnReset.addEventListener('click', resetTimer)
function resetTimer() {
   cronometro.style.color = '#000000';
   clearInterval(timer);
   horas = 0;
   minutos = 0;
   segundos = 0;
   cronometro.innerHTML = showTime()
}
