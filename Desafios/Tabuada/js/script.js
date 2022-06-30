const numeroTabuada = prompt('Tabuada do número: ');
const tabuadaTitle = document.querySelector('span#tabuada-do-numero');
const tabuada = document.querySelector('#tabuada');

for (let i = 0; i <= 10; i++) {
   let result = numeroTabuada * i;
   tabuada.innerHTML += (`<p>${numeroTabuada} X ${i} = ${result}</p>`);
   tabuadaTitle.innerHTML = `do ${i}`;
}


