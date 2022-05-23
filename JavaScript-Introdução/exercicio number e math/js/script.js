const num = Number(prompt('Digite um Número:'))
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

const raiz = num ** 0.5; // Raiz quadrada
const inteiro = (Number.isInteger(num)); // Definir se é inteiro
const nan = (Number.isNaN(num)); // definir se é ou não um número
const arredondaBaixo = Math.floor(num); // Arredondar pra baixo (4.5 = 4)
const arredondaCima = Math.ceil(num); // Arredondar pra cima (4.5 = 5)
const arredondaProximo = Math.round(num); // Arredondar pro mais proximo (4.4- = 4/ 4.5+ = 5)
const decimais2 = num.toFixed(2) // Definir 2 casas decimais

numeroTitulo.innerHTML = num;
texto.innerHTML += `<p> É NaN: ${nan} </p>`
texto.innerHTML += `<p> A raiz quadrada de ${num} é: ${raiz} </p>`
texto.innerHTML += `<p> ${num} é inteiro: ${inteiro} </p>`;
texto.innerHTML += `<p> Arredondado para baixo: ${arredondaBaixo} </p>`
texto.innerHTML += `<p> Arredondado para cima: ${arredondaCima} </p>`
texto.innerHTML += `<p> Arredondado para o mais proximo: ${arredondaProximo} </p>`
texto.innerHTML += `<p> Com duas casas decimais: ${decimais2} </p>`