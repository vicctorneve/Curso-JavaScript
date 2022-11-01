function funcao() {
   console.log(arguments)
   // arguments = {1,2,3,4,5}
}
funcao(1,2,3,4,5) // caso não tenha parametros para receber os argumentos, os argumentos enviados seram armazenado em um objeto array chamado arguments, objeto padrão do javascript, isso só ocorre nesse modo de declarar function, function hosting

// valor padrão de parametro

function soma(a = 0 ,b = 4) {
   console.log(a + b)
}
soma(2,2)

// atribuição via desestruturação por parametros
// objeto
function desestruturacaoObj({nome,sobrenome,idade}){
   console.log(nome, sobrenome, idade)
}
let pessoa = { nome: 'Vicctor', sobrenome: 'Neves', idade: 18}
desestruturacaoObj(pessoa);

//array
function desestruturacaoArray([item1, item2, ...resto]){
   console.log(item1, item2, resto)
}
let array = ['vicctor', 'argolo', 'gabriel', 'vitoria']
desestruturacaoArray(array)

function calculadora(operador, resultado, ...numeros){
   for (let numero of numeros) {
      
      if (operador === '+') resultado += numero;
      if (operador === '-') resultado -= numero;
      if (operador === '*') resultado *= numero;
      if (operador === '/') resultado /= numero;
   }
   console.log(resultado)
   
}
calculadora('+', 0, 10,20,50,10)
