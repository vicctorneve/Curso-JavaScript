import generatesPassword from "./geradores";

const passwordGenerated = document.querySelector('#passwordGenerate');
const inputQtdcharacters = document.querySelector('#input-qtd-characters');
const chkUpperCase = document.querySelector('#chk-letter-upperCase');
const chkLowerCase = document.querySelector('#chk-letter-lowerCase');
const chkNumbers = document.querySelector('#chk-numbers');
const chkSymbols = document.querySelector('#chk-simbols');
const btnGeneratePassword = document.querySelector('#btn-generates-password');


export default () => {
   btnGeneratePassword.addEventListener('click', function(){
      passwordGenerated.innerHTML = generates()
   })
}

function generates(){
   const password = generatesPassword(
      inputQtdcharacters.value,
      chkUpperCase.checked,
      chkLowerCase.checked,
      chkNumbers.checked,
      chkSymbols.checked
   )
   
   return password || "Nada Selecionado"
}