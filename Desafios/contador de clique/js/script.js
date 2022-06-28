const contador = document.querySelector('span.contador');
const btnClick = document.querySelector('#btn-click');
const btnZerarCont = document.querySelector('#zerar-contador');
let contadorClick = 0;

btnClick.addEventListener('click', contClick);
function contClick (){
   contadorClick++
   showContador()
}
function showContador() {
   contador.innerHTML = contadorClick;
}
btnZerarCont.addEventListener('click', zerarContador);
function zerarContador() {
   contadorClick = 0;
   showZerarContador()
}
function showZerarContador(){
   contador.innerHTML = contadorClick;
}






