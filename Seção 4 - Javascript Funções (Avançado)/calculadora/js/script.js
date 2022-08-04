// calculadora

const buttons = document.querySelectorAll('button')
const displayResult = document.querySelector('.display p.result')
const displayCalc = document.querySelector('.display p.calc')
const btnDeleteAll = document.querySelector('.delete-all')
const btnIgual = document.querySelector('.igual')
buttons.forEach(btn => {
   btn.addEventListener('click', function(){
      displayCalc.innerHTML += btn.innerHTML
   })
});
function showElement(valor){
   const el = valor;
}
btnDeleteAll.addEventListener('click', function(){
   displayCalc.innerHTML = '';
})
btnIgual.addEventListener('click', function(){
   displayCalc.innerHTML = 0
})





