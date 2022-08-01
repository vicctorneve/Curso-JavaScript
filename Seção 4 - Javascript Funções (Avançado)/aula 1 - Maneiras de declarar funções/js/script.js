// Declaração de função (function hoisting)

falaOi();
function falaOi() {
   console.log('oi')
}

// dessa maneira o hosting armazena as declaraclarações de de variável e de função na memoria durante a fase de compilação, permitindo usar a a função antes mesmo de declarar.

// First- class objects (Objetos de primeira classe)
// Function express
const falaTchau = function (){
   console.log('Tchau')
}
falaTchau()

// Arrow Function 

const funcaoArrow = () => console.log('Sou uma arrow function')
funcaoArrow()

// Dentro de um objeto

const bot = {
   seApresentar(){
      console.log('olá, estou falando de dentro do objeto')
   },
   darTchau (){
      console.log('Tchau')
   }
}
bot.darTchau()