const section = document.querySelector('.container');

const elementos = [
   {tag: 'p', texto: 'frase 1'}, //0
   {tag: 'div', texto: 'frase 2'}, //1
   {tag: 'footer', texto: 'frase 3'}, //2
   {tag: 'section', texto: 'frase 4'} //3
];
let div = document.createElement('div'); // cria tag div

for (i=0; i < elementos.length; i++){
   let {tag, texto} = elementos[i];
   let tags = document.createElement(tag);
   tags.innerHTML = texto;
   div.appendChild(tags);
}
section.appendChild(div);